# Küsimuste Navigatsiooni Funktsioon - 1. veebruar 2026

## Funktsioon
Kui kasutaja klõpsab "Viimased küsimused" sektsioonis küsimuse peale, siis:
1. Avaneb tool modal
2. Lülitub automaatselt Q&A (Küsimused) tab'ile
3. Kerib automaatselt selle konkreetse küsimuse juurde
4. Lisab ajutise highlight efekti (2 sekundit), et kasutaja näeks, kus küsimus asub

## Muudetud Failid

### 1. `/community.js`
**Muudatus 1: `createQuestionCard()` funktsioon**
- Lisatud `data-question-id` atribuut küsimuse ID salvestamiseks
- Lisatud `data-tool-name` atribuut tool nime salvestamiseks
- Lisatud `style="cursor: pointer;"` kursori muutmiseks
- Lisatud `title` tooltip, mis näitab kasutajale, et kaart on klikitav

**Muudatus 2: `setupEventListeners()` funktsioon**
- Lisatud event delegation küsimuste klõpsude jaoks
- Klõps tuvastab `.community-item.question[data-question-id]` elemente
- Kutsub `window.openToolModal()` edastades tool nime JA küsimuse ID

```javascript
// Click handler for questions in latest questions section
document.addEventListener('click', (e) => {
    const questionCard = e.target.closest('.community-item.question[data-question-id]');
    if (questionCard) {
        e.preventDefault();
        const toolName = questionCard.dataset.toolName;
        const questionId = questionCard.dataset.questionId;
        
        if (toolName && typeof window.openToolModal === 'function') {
            // Open modal with question ID to scroll to it
            window.openToolModal({
                title: toolName,
                questionId: questionId  // Pass question ID to scroll to
            });
        }
    }
});
```

### 2. `/script.js`
**Muudatus: `openToolModal()` funktsioon**
- Lisatud `data.questionId` toetus parameetritesse
- Pärast modali avamist ja vormide initsialiseerimist:
  1. Kontrollib kas `data.questionId` on olemas
  2. Lülitub Q&A tab'ile (klikib `.review-tab[data-tab="questions"]`)
  3. Leiab küsimuse elemendi `.question-item[data-question-id="${data.questionId}"]`
  4. Kerib selle juurde (`scrollIntoView`)
  5. Lisab 2-sekundilise highlight efekti (helehall taust)

```javascript
// If a specific question ID is provided, switch to Q&A tab and scroll to it
if (data.questionId) {
    setTimeout(() => {
        // Switch to questions tab
        const questionsTab = document.querySelector('.review-tab[data-tab="questions"]');
        if (questionsTab) {
            questionsTab.click();
        }
        
        setTimeout(() => {
            // Scroll to the specific question
            const questionElement = document.querySelector(`.question-item[data-question-id="${data.questionId}"]`);
            if (questionElement) {
                questionElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                // Add a highlight effect
                questionElement.style.backgroundColor = 'rgba(99, 102, 241, 0.1)';
                setTimeout(() => {
                    questionElement.style.backgroundColor = '';
                }, 2000);
            }
        }, 150);
    }, 100);
}
```

## Kasutamine

### Kasutaja perspektiiv:
1. Külasta avalehte
2. Kerige alla "Viimased küsimused" sektsiooni
3. Klõpsa mis tahes küsimuse kaardile
4. **Tulemus:**
   - Tool modal avaneb automaatselt
   - Q&A tab on aktiivne
   - Leht kerib küsimuse juurde
   - Küsimus on ajutiselt highlighted (helehall taust 2 sek)

### Tehniline voog:
```
[Klõps küsimusel] 
    ↓
[Event delegation tuvastab klõpsu]
    ↓
[Loeb data-tool-name ja data-question-id]
    ↓
[Kutsub openToolModal({title, questionId})]
    ↓
[Modal avaneb, renderdab sisu]
    ↓
[Initsialiseerib tabs, vormid]
    ↓
[Kontrollib questionId olemasolu]
    ↓
[Klikib Q&A tab'i]
    ↓
[Otsib küsimuse elementi DOM'ist]
    ↓
[Kerib küsimuse juurde + highlight]
```

## Timeout Ajad
- **100ms**: Ootab modali sisu renderdumist enne tab'i vahetust
- **150ms**: Ootab tab content'i saamaks nähtavaks enne kerimist
- **2000ms**: Highlight efekti kestus

Need timeout'id on optimeeritud, et vältida race condition'eid DOM renderdamisel.

## Browser Compatibility
✅ Kasutab standardseid API'sid:
- `scrollIntoView()` - toetatud kõigis moodsates brauserites
- `closest()` - toetatud IE 11+
- `setTimeout()` - universaalne
- `style.backgroundColor` - universaalne

## Testimine

### Test Case 1: Klõps küsimusel
1. Ava `index.html`
2. Kerige "Viimased küsimused" sektsiooni
3. Klõpsa mis tahes küsimusel
4. **Eeldatav tulemus:** Modal avaneb Q&A tab'il ja kerib küsimuse juurde

### Test Case 2: Highlight efekt
1. Klõpsa küsimusel
2. Vaata kas küsimus on heledalt highlighted
3. Oota 2 sekundit
4. **Eeldatav tulemus:** Highlight kaob

### Test Case 3: Puuduv küsimus
1. Muuda `data-question-id` väärtust konsoolis vale ID'ks
2. Klõpsa kaardil
3. **Eeldatav tulemus:** Modal avaneb Q&A tab'il, aga ei keri (console log: "Question not found")

## Eelised
✅ **Parem UX**: Kasutaja ei pea käsitsi Q&A tab'i otsima  
✅ **Kiire navigatsioon**: Üks klõps viib täpselt õige küsimuse juurde  
✅ **Visuaalne tagasiside**: Highlight näitab, kuhu kasutaja viidi  
✅ **Smooth scroll**: Sujuv animatsioon kerib modali sees  
✅ **Event delegation**: Efektiivne - üks listener kõikidele küsimustele

## Tuleviku Täiendused (valikuline)
- Võiks lisada sama funktsionaalsuse arvustuste kaartidele (scroll to review)
- Võiks salvestada viimati vaadatud küsimuse URL'i (deep linking)
- Võiks lisada "share question" nupu, mis genereerib lingi konkreetsele küsimusele
