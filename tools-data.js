// Tool detail page functionality

// AI Tools data with detailed information
const toolsData = {
    'monica': {
        name: 'Monica',
        badges: ['HOT'],
        tags: ['Productivity', 'LLM', 'Freemium'],
        website: 'https://monica.im',
        description: 'Monica AI on kõik-ühes digitaalne assistent, mis kasutab edasijõudnud AI mudeleid nagu GPT, Gemini ja DeepSeek, pakkudes terviklikku produktiivsustööriistade komplekti.',
        features: [
            {
                title: 'Mitmekeelne tugi',
                description: 'Toetab üle 100 keele ja pakub kvaliteetset tõlget ning kohalikku keeletuge.'
            },
            {
                title: 'Integratsioonid',
                description: 'Sujuv integreerimine populaarsete tööriistadega nagu Slack, Gmail, Chrome jt.'
            },
            {
                title: 'AI Mudelid',
                description: 'Juurdepääs mitmele tipptasemel AI mudelile, sealhulgas GPT-4, Claude, Gemini.'
            },
            {
                title: 'Automatiseerimine',
                description: 'Automaatsed töövood ja ülesannete automatiseerimine produktiivsuse tõstmiseks.'
            }
        ],
        pricing: [
            {
                plan: 'Tasuta',
                price: '€0/kuu',
                features: ['Piiratud päringud', 'Põhifunktsioonid', 'Kogukonna tugi']
            },
            {
                plan: 'Pro',
                price: '€10/kuu',
                features: ['Piiramatuid päringuid', 'Kõik AI mudelid', 'Prioriteetne tugi', 'Täpsemad integratsioonid'],
                featured: true
            }
        ],
        kasutusviisid: [
            {
                title: 'Sisuloome',
                description: 'Artiklite, blogide ja turundussisu kiire loomine kõrgel tasemel.'
            },
            {
                title: 'E-postide haldamine',
                description: 'Automaatne e-postide vastamine ja organiseermine.'
            },
            {
                title: 'Uurimustöö',
                description: 'Kiire info kogumine ja analüüsimine erinevatest allikatest.'
            }
        ],
        category: 'productivity'
    },
    'manus': {
        name: 'Manus',
        badges: ['HOT'],
        tags: ['Productivity', 'Automation', 'Freemium'],
        website: 'https://manus.ai',
        description: 'Manus AI on autonoomne agendi platvorm, mis on loodud täitmaks keerukaid mitmesammu ülesandeid minimaalsete inimsekkumistega.',
        features: [
            {
                title: 'Autonoomsed agendid',
                description: 'Nutikad AI agendid, mis suudavad iseseisvalt täita keerukaid ülesandeid.'
            },
            {
                title: 'Mitmesammuline planeerimine',
                description: 'Võimaldab planeerida ja täita mitmesammulist ülesandeid automaatselt.'
            },
            {
                title: 'Integratsioonid',
                description: 'Ühendub populaarsete ärivahenditega ja API-dega.'
            },
            {
                title: 'Realtime töötlemine',
                description: 'Reaalajas ülesannete täitmine ja tulemuste tagastamine.'
            }
        ],
        pricing: [
            {
                plan: 'Starter',
                price: '€0/kuu',
                features: ['5 agenti kuus', 'Põhifunktsioonid', 'Kogukonna tugi']
            },
            {
                plan: 'Professional',
                price: '€29/kuu',
                features: ['Piiramatuid agenteid', 'Täpsemad töövood', 'Prioriteetne tugi', 'API juurdepääs'],
                featured: true
            }
        ],
        kasutusviisid: [
            {
                title: 'Andmete töötlemine',
                description: 'Automaatne andmete kogumine, puhastamine ja analüüs.'
            },
            {
                title: 'Klienditeenindus',
                description: 'Automatiseeritud kliendipäringute lahendamine ja vastamine.'
            },
            {
                title: 'Turunduse automatiseerimine',
                description: 'Automaatsed turunduskampaaniad ja sihtgrupi analüüs.'
            }
        ],
        category: 'automation'
    },
    'dealism': {
        name: 'Dealism',
        badges: [],
        tags: ['Sales', 'Chat', 'Automation', 'Freemium'],
        website: 'https://dealism.com',
        description: 'Dealism on maailma esimene vibe müügiagent, mis integreerib sügavalt WhatsApp Businessiga, pakkudes automatiseeritud ja isikupärastatud vestluskogemusi.',
        features: [
            {
                title: 'WhatsApp integratsioon',
                description: 'Täielik integratsioon WhatsApp Business API-ga müügi automatiseerimiseks.'
            },
            {
                title: 'Vibe Detection',
                description: 'Unikaalne tehnoloogia, mis tuvastab kliendi meeleolu ja kohandab lähenemist.'
            },
            {
                title: 'Automaatne müük',
                description: 'Intelligentne müügiprotsess, mis juhib kliente läbi müügilehtri.'
            },
            {
                title: 'Analüütika',
                description: 'Põhjalik ülevaade müügiesitusest ja klientide käitumisest.'
            }
        ],
        pricing: [
            {
                plan: 'Basic',
                price: '€19/kuu',
                features: ['100 vestlust kuus', 'Põhi WhatsApp integratsioon', 'E-posti tugi']
            },
            {
                plan: 'Pro',
                price: '€49/kuu',
                features: ['Piiramatuid vestlusi', 'Täpsemad analüütikad', 'Vibe detection', 'Prioriteetne tugi'],
                featured: true
            }
        ],
        kasutusviisid: [
            {
                title: 'E-kaubanduse müük',
                description: 'Automatiseeritud müügiprotsess WhatsApp kaudu e-kaubanduse jaoks.'
            },
            {
                title: 'Kinnisvaramüük',
                description: 'Klientide nõustamine ja kinnisvara müügiprotsessi automatiseerimine.'
            },
            {
                title: 'Teenuste müük',
                description: 'B2B ja B2C teenuste müük läbi personaliseeritud vestluste.'
            }
        ],
        category: 'sales'
    },
    'splutterai': {
        name: 'Splutter AI',
        badges: [],
        tags: ['Business', 'Customer Service'],
        website: 'https://splutter.ai',
        description: 'Splutter AI on mitmekülgne chatbot platvorm, mis on loodud parandamaks klienditeenindust, turundust ja müügi töövoogusid. Võimaldab luua täielikult kohandatavaid chatbote.',
        features: [
            {
                title: 'Kohandatavad chatbotid',
                description: 'Täielikult kohandatavad AI chatbotid ettevõtte vajaduste järgi.'
            },
            {
                title: 'Mitmekeelne tugi',
                description: 'Toetab mitut keelt ja kultuurilisi iseärasusi.'
            },
            {
                title: 'Integratsiooni võimalused',
                description: 'Lihtne integreerimine olemasolevate süsteemidega.'
            },
            {
                title: 'Analüütika ja aruandlus',
                description: 'Detailsed analüütikad ja jõudlusaruanded.'
            }
        ],
        pricing: [
            {
                plan: 'Starter',
                price: '€15/kuu',
                features: ['1 chatbot', '1000 sõnumit kuus', 'Põhianalüütika', 'E-posti tugi']
            },
            {
                plan: 'Business',
                price: '€45/kuu',
                features: ['5 chatboti', 'Piiramatuid sõnumeid', 'Täpsemad analüütikad', 'Prioriteetne tugi'],
                featured: true
            }
        ],
        kasutusviisid: [
            {
                title: 'Klienditugi',
                description: 'Automaatne esmaseid küsimusi ja probleemide lahendamine.'
            },
            {
                title: 'Müügijuhtimine',
                description: 'Potentsiaalsete klientide kvalifitseerimine ja müügiprotsessi toetamine.'
            },
            {
                title: 'Sisemine tugi',
                description: 'Töötajate küsimuste ja IT-probleemide lahendamine.'
            }
        ],
        category: 'business'
    },
    'openaioperator': {
        name: 'OpenAI Operator',
        badges: [],
        tags: ['Agent', 'Workflow Automation'],
        website: 'https://openai.com/operator',
        description: 'ChatGPT Operator on edasijõudnud automatiseerimistööriist, mis muudab ChatGPT proaktiivseks digitaalseks assistendiks, mis suudab teostada reaalseid ülesandeid veebilehtedel ja rakendustes.',
        features: [
            {
                title: 'Veebiautomatiseerimine',
                description: 'Automaatne veebilehtede sirviemine ja toimingute sooritamine.'
            },
            {
                title: 'Rakenduste integratsioon',
                description: 'Otsene integreerimine populaarsete rakendustega.'
            },
            {
                title: 'Nutikad töövood',
                description: 'Keerukate mitmesammulist töövoogude automatiseerimine.'
            },
            {
                title: 'Reaalajas täitmine',
                description: 'Ülesannete täitmine reaalajas kasutaja juhiste järgi.'
            }
        ],
        pricing: [
            {
                plan: 'Pro',
                price: '€20/kuu',
                features: ['ChatGPT Pro funktsioonid', 'Operator agent', 'Prioriteetne juurdepääs', 'Piiramatud päringud'],
                featured: true
            }
        ],
        kasutusviisid: [
            {
                title: 'Andmete kogumine',
                description: 'Automaatne andmete kogumine veebilehtedelt ja API-dest.'
            },
            {
                title: 'Vormide täitmine',
                description: 'Automaatne vormide täitmine ja avalduste esitamine.'
            },
            {
                title: 'Monitooring',
                description: 'Automaatne veebilehtede ja teenuste jälgimine ning aruandlus.'
            }
        ],
        category: 'automation'
    },
    'supawrite': {
        name: 'Supawrite',
        badges: [],
        tags: ['Content', 'SEO', 'Paid'],
        website: 'https://supawrite.com',
        description: 'Supawrite on põhjalik sisu automatiseerimise platvorm, mis muudab ettevõtteid tunnustatud valdkonna autoriteetideks läbi strateegiliselt loodud, avaldamisvalmis sisu.',
        features: [
            {
                title: 'SEO optimiseerimine',
                description: 'Automaatne otsingumootoritele optimeeritud sisu loomine.'
            },
            {
                title: 'Sisu automatiseerimine',
                description: 'Täielikult automatiseeritud sisuloome töövoog.'
            },
            {
                title: 'Valdkonna ekspertiis',
                description: 'Spetsialiseeritud sisu erinevate tööstusharude jaoks.'
            },
            {
                title: 'Avaldamisvalmis sisu',
                description: 'Kohe kasutamiseks valmis, professionaalne sisu.'
            }
        ],
        pricing: [
            {
                plan: 'Starter',
                price: '€49/kuu',
                features: ['10 artiklit kuus', 'SEO optimiseerimine', 'Põhianalüütika']
            },
            {
                plan: 'Professional',
                price: '€149/kuu',
                features: ['50 artiklit kuus', 'Täpsem SEO', 'Prioriteetne tugi', 'API juurdepääs'],
                featured: true
            }
        ],
        kasutusviisid: [
            {
                title: 'Blogimine',
                description: 'Regulaarse, kvaliteetse blogisisu automaatne loomine.'
            },
            {
                title: 'Turundussisu',
                description: 'SEO-optimeeritud turundusmaterjali genereerimine.'
            },
            {
                title: 'Valdkonna autoriteet',
                description: 'Ekspertsisu loomine ettevõtte maine kasvatamiseks.'
            }
        ],
        category: 'writing'
    },
    'essaypass': {
        name: 'EssayPass',
        badges: [],
        tags: ['Academic', 'Writing', 'Paid'],
        website: 'https://essaypass.ai/',
        description: 'EssayPass on keerukas akadeemiline kirjutamistööriist, mis aitab üliõpilastel ja teadlastel luua kvaliteetseid esseid, uurimistöid ja aruandeid.',
        features: [
            {
                title: 'Akadeemiline kirjutamine',
                description: 'Spetsialiseeritud akadeemiliste tööde loomiseks.'
            },
            {
                title: 'Uurimistöö tugi',
                description: 'Aitab struktureerida ja kirjutada uurimistöid.'
            },
            {
                title: 'Viitamine ja bibliograafia',
                description: 'Automaatne viidete ja allikate haldamine.'
            },
            {
                title: 'Plagiaadituvastus',
                description: 'Sisseehitatud kontroll originaalsuse tagamiseks.'
            }
        ],
        pricing: [
            {
                plan: 'Student',
                price: '€19/kuu',
                features: ['5 esseed kuus', 'Põhiline uurimistugi', 'Plagiaadituvastus']
            },
            {
                plan: 'Academic',
                price: '€39/kuu',
                features: ['Piiramatuid töid', 'Täpsem uurimistugi', 'Prioriteetne tugi', 'Ekspertkoostöö'],
                featured: true
            }
        ],
        kasutusviisid: [
            {
                title: 'Ülikooli esseed',
                description: 'Kvaliteetsete akadeemiliste esseede kiire loomine.'
            },
            {
                title: 'Uurimistööd',
                description: 'Struktureeritud teaduslike uurimustööde koostamine.'
            },
            {
                title: 'Aruanded',
                description: 'Professionaalsete aruannete ja analüüside kirjutamine.'
            }
        ],
        category: 'writing'
    },
    'copyter': {
        name: 'Copyter',
        badges: [],
        tags: ['Writing', 'Content', 'SEO', 'AI Images', 'Voice', 'Freemium'],
        website: 'https://copyter.com/en/',
        description: 'Copyter on kõik-ühes AI platvorm teksti, piltide, hääle ja video loomiseks. Loodud blogijatele, turundajatele ja sisutegijatele, kes vajavad kvaliteetset sisu sekundite jooksul.',
        features: [
            {
                title: 'SEO optimeeritud tekstigeneraator',
                description: 'Loo SEO-sõbralikku sisu strateegiliste märksõnadega, et parandada Google reitingut ja suurendada orgaanilist liiklust.'
            },
            {
                title: 'AI pildigeneraator ja -toimetaja',
                description: 'Genereeri pilte ja muuda neid lihtsalt AI tööriistadega - muuda tausta, lisa detaile ja kohanda värve sujuvalt.'
            },
            {
                title: '100+ AI tööriista sisturunduseks',
                description: 'Kasuta AI tööriistu kiireks ja tõhusaks sisu loomiseks sotsiaalmeediasse, blogidesse ja skriptidesse.'
            },
            {
                title: 'AI Text-to-Speech ja muud funktsioonid',
                description: 'Muuda tekst audioks, otse eksportimine WordPressi, Brand Voice, ChatPDF, plagiaadikontroll ja palju muud.'
            }
        ],
        pricing: [
            {
                plan: 'Lite',
                price: '$9/kuu',
                features: ['500,000 sõna (GPT-4o mini, GPT-3.5, Claude 3)', '30 SD pilti', 'AI Writer', 'AI Article Wizard', 'Smart Editor', '220+ häälte', '40+ AI botti', '70+ tekstitööriista', 'WordPress integratsioon']
            },
            {
                plan: 'Basic',
                price: '$19/kuu',
                features: ['1,000,000 sõna (GPT-4o mini, GPT-3.5, Claude 3)', '100 SD pilti', '10,000 tähemärki', 'Kõik Lite funktsioonid', 'AI Voice-over', 'Sound Studio', 'AI Speech to Text', 'AI Web Chat', 'Foto editor']
            },
            {
                plan: 'Premium',
                price: '$119/kuu',
                features: ['Piiramatult GPT-4, GPT-4o mini, GPT-3.5, Claude 3', 'Piiramatult SD pilte', 'Piiramatult minuteid ja tähemärke', '4 meeskonnaliiget', 'Kõik Basic funktsioonid', 'AI Vision', 'Team Members'],
                featured: true
            }
        ],
        kasutusviisid: [
            {
                title: 'Blogimine ja SEO sisu',
                description: 'Loo SEO-optimeeritud blogisisu, artikleid ja veebilehe tekste, mis parandavad otsingumootori positsioone.'
            },
            {
                title: 'Sotsiaalmeedia turundus',
                description: 'Genereeri postitused, skriptid ja turundusmaterjal kiiresti üle 100 AI tööriista abil.'
            },
            {
                title: 'Multimeedia sisu loomine',
                description: 'Loo teksti, pilte, häält ja videosisu ühest platvormist - ideaalne podcastidele, videotele ja presentatsioonidele.'
            }
        ],
        category: 'writing'
    },
    'rewritebar': {
        name: 'RewriteBar',
        badges: [],
        tags: ['Writing', 'Mac', 'Freemium'],
        website: 'https://rewritebar.com',
        description: 'RewriteBar on macOS-i AI kirjutamisassistent, mis parandab teksti igas rakenduses klaviatuuri kiirklahvidega - grammatika, tõlked, stiili muutused ja palju muud.',
        features: [
            {
                title: 'Töötab igas rakenduses',
                description: 'Universaalne macOS tugi - Chrome, Notion, Slack, VS Code, Mail jne. Vali tekst ja paranda klaviatuurist.'
            },
            {
                title: 'Kohandatavad toimingud',
                description: 'Loo oma AI-põhised šabloonid - e-kirjad, toonide muutmine, kokkuvõtted, tõlked üle 500 keele.'
            },
            {
                title: 'Privaatsus ja paindlikkus',
                description: 'Vali 500+ AI mudelit 14+ pakkujalt (OpenAI, Claude, Gemini) või kasuta kohalikke mudeleid (Ollama, Apple Intelligence).'
            },
            {
                title: 'PopClip integratsioon',
                description: 'Käivita RewriteBar otse PopClip menüüst, kiirklahvid maksimaalse tootlikkuse jaoks.'
            }
        ],
        pricing: [
            {
                plan: 'Trial',
                price: 'Tasuta',
                features: ['100 päringut', 'Juurdepääs Cloud AI-le', '31 AI mudelit']
            },
            {
                plan: 'Monthly',
                price: '$5/kuu',
                features: ['3M sõna kuus', '39 AI mudelit', 'BYOK võimalus', 'Piiramatud uuendused'],
                featured: true
            },
            {
                plan: 'Annual',
                price: '$40/aasta',
                features: ['3M sõna kuus', '39 AI mudelit', 'BYOK võimalus', 'Piiramatud seadmed', 'Säästa 33%']
            },
            {
                plan: 'One-time',
                price: '$29 ühekordne',
                features: ['Oma API võti', '500+ AI mudelit', 'Piiramatud päringud', 'Kohalike mudelite tugi']
            }
        ],
        kasutusviisid: [
            {
                title: 'Igapäevane kirjutamine',
                description: 'Paranda grammatikat, punktuatsiooni, muuda tooni - e-kirjad, dokumendid, sotsiaalmeedia.'
            },
            {
                title: 'Arendajad ja loojad',
                description: 'Koodi kommentaaride parandamine, dokumentatsiooni kirjutamine, commit sõnumite täiustamine.'
            },
            {
                title: 'Mitme keelega töö',
                description: 'Tõlgi tekste otse rakenduses, paranda mitte-emakeelset kirjutamist, toeta üle 500 keele.'
            }
        ],
        category: 'writing'
    },
    'humanizeai': {
        name: 'Humanize AI',
        badges: [],
        tags: ['Writing', 'Text Editor', 'Freemium'],
        website: 'https://humanize.sh',
        description: 'Humanize.sh muudab AI-genereeritud teksti (ChatGPT, Claude, Gemini) loomulikuks inimlikuks kirjutamiseks, mis möödub kõigist AI-tuvastustest nagu Turnitin, GPTZero ja Originality.ai.',
        features: [
            {
                title: 'Möödub AI-tuvastusest',
                description: 'Täiustatud SPR algoritm rekonstrueerib süntaksi ja tooni, et läbida Turnitin, GPTZero, Originality.ai ilma sõnumit muutmata.'
            },
            {
                title: 'Kohene humaniseerimine',
                description: 'Kleebi ChatGPT/Claude tekst ja vaata seda koheselt muutumas loomulikuks kirjutamiseks. Registreerimist pole vaja.'
            },
            {
                title: 'Tähenduse säilitamine',
                description: 'Parandab tooni, loetavust ja lausestruktuuri ilma fakte või kavatsust muutmata - jääb autentseks ja täpseks.'
            },
            {
                title: 'Privaatsus esikohal',
                description: 'Andmeid ei salvestata, jälgita ega jagata. Kõik töödeldakse reaalajas ja kustutatakse püsivalt - täielik anonüümsus.'
            }
        ],
        pricing: [
            {
                plan: 'Free',
                price: '$0',
                features: ['5 päringut päevas', '200 sõna päringus', 'Basic algoritm', 'Registreerimist pole vaja']
            },
            {
                plan: 'Basic',
                price: '$9.99/kuu',
                features: ['30 päringut päevas', '500 sõna päringus', 'Basic algoritm', 'Kõik keeled', 'Klienditugi']
            },
            {
                plan: 'Pro',
                price: '$19.99/kuu',
                features: ['100 päringut päevas', '1000 sõna päringus', 'Hyper algoritm', 'Kõik keeled', 'Klienditugi'],
                featured: true
            },
            {
                plan: 'Max',
                price: '$49.99/kuu',
                features: ['Piiramatud päringud', 'Piiramatud sõnad', 'Hyper algoritm', 'Kõik keeled', 'Prioriteetne tugi']
            }
        ],
        kasutusviisid: [
            {
                title: 'Akadeemiline kasutus',
                description: 'ChatGPT-ga kirjutatud esseed ja aruanded mööduvad Turnitin\'ist 100% inimskooriga.'
            },
            {
                title: 'Sisuloomine ja SEO',
                description: 'Muuda AI-artiklid loomulikuks, suurenda lugejate kaasatust ja Google\'i rankingut.'
            },
            {
                title: 'Äri ja turundus',
                description: 'Humaniseeri AI-loodud reklaamtekstid, e-kirjad ja ettepanekud brändile sobivaks ilma AI-lipukesteta.'
            }
        ],
        category: 'writing'
    },
    'webnovelai': {
        name: 'WebNovel AI',
        badges: [],
        tags: ['Writing', 'Fiction', 'Web Serial'],
        website: 'https://webnovelai.io',
        description: 'WebNovel AI on Novel AI võimaldusega platvorm veebromaanide struktureeritud planeerimiseks ja kirjutamiseks - ideest peatükkide mustanditeni samm-sammult juhendiga.',
        features: [
            {
                title: 'Samm-sammult veebromaani planeerimine',
                description: '8-etapiline protsess Novel AI-ga: Loo kontseptsioon, maailma loomine, tegelaste kujundus, süžee struktuur, tempo plaan, loo üldpilt, peatüki mustand, ülevaatus ja eksport.'
            },
            {
                title: 'Žanri mallid ja NovelAI eelseaded',
                description: 'Valmisehitatud mallid populaarsetele veebromaanide žanridele: LitRPG, Progression Fantasy, Portal Fantasy, Dungeon Core koos Novel AI kirjutamisstiili eelsätetega.'
            },
            {
                title: 'Tegelaste ja maailma tööriistad',
                description: 'Loo üksikasjalikke tegelaste profiile RPG statistikaga, taustalooga ja arengukaartega NovelAI abil. Kujunda võimsussüsteeme ja maailmareegleid Novel AI abiga.'
            },
            {
                title: 'Peatükkide mustandamine ja eksport',
                description: 'Genereeri 2000-4000 sõnalised peatükid Novel AI mudelitega. Ekspordi TXT või MD formaadis Royal Road, Scribble Hub ja teistele platvormidele.'
            }
        ],
        pricing: [
            {
                plan: 'Basic',
                price: '$12.49/kuu',
                features: ['2,880 krediiti', 'Advanced Novel AI mudel', '80 kõrgkvaliteedilist pilti/kuu', 'NovelAI kiirenenud genereerimine', 'Äriline kasutus']
            },
            {
                plan: 'Professional',
                price: '$24.99/kuu',
                features: ['7,200 krediiti', 'Premium Novel AI mudel', '200 kõrgkvaliteedilist pilti/kuu', 'Kiirem genereerimine', 'Prioriteetne tugi'],
                featured: true
            },
            {
                plan: 'Enterprise',
                price: '$41.66/kuu',
                features: ['18,000 krediiti', 'Premium Novel AI mudel', '500 kõrgkvaliteedilist pilti/kuu', 'Kiireim genereerimine', '24/7 tugi ja SLA']
            }
        ],
        kasutusviisid: [
            {
                title: 'LitRPG ja Progression Fantasy',
                description: 'Planeeri ja kirjuta struktureeritud LitRPG veebromaane RPG statistika, tasemesüsteemide ja progressiooniga.'
            },
            {
                title: 'Royal Road ja Scribble Hub',
                description: 'Loo veebromaani peatükke otse platvormidele nagu Royal Road ja Scribble Hub eksportides MD formaadis.'
            },
            {
                title: 'Maailma loomine ja tegelased',
                description: 'Arenda üksikasjalikke fantaasiamaailmu võimsussüsteemide, maagia reeglite ja sügavate tegelaskujudega.'
            }
        ],
        category: 'writing'
    },
    'firstbookai': {
        name: 'First Book AI',
        badges: [],
        tags: ['Writing', 'Business', 'Paid'],
        website: 'https://firstbook.ai',
        description: 'First Book AI aitab kirjutada esimese äraraamatu minutitega, mitte aastatega. Samm-sammult juhend viib ideest valmis, professionaalse raamatuni ilma kirjutamiskogemuseta.',
        features: [
            {
                title: 'Samm-sammult juhend',
                description: 'Selge, juhitud protsess, mis viib esimesest ideest valmis raamatuni. Vasta lihtsatele küsimustele ja vaata mustandit elavat saamas.'
            },
            {
                title: 'Täispikk professionaalne raamat',
                description: 'Genereeri minutitega terve äraraamat (150k-200k tähemärki / 30k-35k sõna) koos vorminduse, peatükkide ja eksportidega.'
            },
            {
                title: 'AI raamatuagent',
                description: 'Isiklik AI kaaskirjutaja aitab ideede genereerimise, peatükkide kavandamise ja iga sektsiooni täiustamisega.'
            },
            {
                title: 'Mitmed ekspordi formaadid',
                description: 'Ühe klikiga ekspordi Word (.docx), Google Docs või PDF-i. Valmis Amazon KDP või muude platvormide jaoks.'
            }
        ],
        pricing: [
            {
                plan: '1 Book',
                price: '$19',
                features: ['1 täispikk raamat', 'Samm-sammult juhend', 'Word & PDF eksport', '30-päevane garantii', 'Kohene juurdepääs']
            },
            {
                plan: '3 Books',
                price: '$47',
                features: ['3 täispikka raamatut', 'Prioriteetne tugi', 'Samm-sammult juhend', '30-päevane garantii', 'Säästa 17%']
            },
            {
                plan: '10 Books',
                price: '$129',
                features: ['10 täispikka raamatut', 'Prioriteetne tugi', 'Kõik ekspordiformaadid', '30-päevane garantii', 'Säästa 32%'],
                featured: true
            },
            {
                plan: '50 Books',
                price: '$449',
                features: ['50 täispikka raamatut', 'Setup call', 'Onboarding abi', 'Prioriteetne tugi', '30-päevane garantii', 'Säästa 53%']
            }
        ],
        kasutusviisid: [
            {
                title: 'Äraraamatud',
                description: '2000+ autorit on loonud oma esimese äraraamatu minutitega - jaga oma ekspertteadmisi ja saavuta mõttejuht.'
            },
            {
                title: 'Haridus ja koolitus',
                description: 'Loo koolitusmaterjalid, õppevahendid ja juhendid õpilastele või klientidele kiiresti ja professionaalselt.'
            },
            {
                title: 'Isiklik bränd',
                description: 'Ehita oma brändi autoriteediraamatuga - ideaalne konsultantidele, coachidele ja ekspertidele.'
            }
        ],
        category: 'writing'
    },
    'writehybrid': {
        name: 'WriteHybrid',
        badges: [],
        tags: ['Writing', 'AI Humanizer', 'Freemium'],
        website: 'https://writehybrid.com',
        description: 'WriteHybrid on AI humaniseerija tööriist, mis muudab AI-genereeritud teksti loomulikuks, inimlikuks sisuks ja möödub kõigist peamistest AI-tuvastustest nagu GPTZero, Turnitin ja Originality.ai.',
        features: [
            {
                title: 'Möödub kõigist AI-tuvastustest',
                description: 'Täiustatud tehnoloogia möödub järjepidevalt GPTZero, Turnitin, Originality.ai, Copyleaks, ZeroGPT ja muudest suuretest AI-tuvastustest.'
            },
            {
                title: 'Kvaliteedi säilitamine',
                description: 'Erinevalt konkurentidest ei ohverda WriteHybrid loetavust. Loob loomulikku, inimlikult kõlavat teksti, säilitades suurepärase kvaliteedi ja autentsed kirjutamismustrid.'
            },
            {
                title: '10x suurem humaniseerimine',
                description: 'Humaniseeri kuni 10x rohkem teksti korraga võrreldes teiste tööriistadega. Kohesed tulemused ilma ootamata - ideaalne esseedele, artiklitele, aruannetele.'
            },
            {
                title: 'Mitmekülgsed kirjutusstiilidja toonid',
                description: 'Priority töötluse korral saad juurdepääsu mitmele ümberkirjutamise toonile ja isegi kohandatud toonidele (Agency plaaniga).'
            }
        ],
        pricing: [
            {
                plan: 'Free',
                price: 'Tasuta',
                features: ['500 sõna kuus', 'Põhitöötlus', 'E-posti tugi', 'Bonused referralide eest']
            },
            {
                plan: 'Starter',
                price: '$19/kuu',
                features: ['20,000 sõna/kuu', 'Põhitöötlus', 'E-posti tugi']
            },
            {
                plan: 'Pro',
                price: '$49/kuu',
                features: ['60,000 sõna/kuu', 'Priority töötlus', 'Mitu ümberkirjutamise tooni', 'E-posti tugi'],
                featured: true
            },
            {
                plan: 'Agency',
                price: '$99/kuu',
                features: ['150,000 sõna/kuu', 'Priority töötlus', 'Meeskonna juurdepääs', 'Kohandatud toonid', 'Pühendatud tugi']
            }
        ],
        kasutusviisid: [
            {
                title: 'Akadeemiline kirjutamine',
                description: 'Õpilased ja teadlased kasutavad WriteHybrid\'i essede, teadustööde ja aruannete humaniseerimiseks, et läbida Turnitin ja GPTZero.'
            },
            {
                title: 'Sisturundus ja SEO',
                description: 'Turundusmeeskonnad humaniseerivad blogipostitusi ja artikleid Google\'i karistuste vältimiseks ning orgaanilise liikluse suurendamiseks.'
            },
            {
                title: 'Professionaalne kirjutamine',
                description: 'Vabakutselised kirjanikud ja ettevõtted kasutavad WriteHybrid\'i, et muuta AI-sisu autentseks, kliendisõbralikuks tekstiks.'
            }
        ],
        category: 'writing'
    },
    'bookscribi': {
        name: 'BookScribi',
        badges: ['BETA'],
        tags: ['Writing', 'Books', 'eBooks'],
        website: 'https://bookscribi.com',
        description: 'BookScribi on AI-põhine platvorm mitteilukirjandus- ja luuleraamatute loomiseks minutitega ilma ühtegi sõna tippimata. Ideaalne Amazon KDP, Gumroad ja Payhip jaoks.',
        features: [
            {
                title: 'Täielik raamatute loomine AI-ga',
                description: 'AI engine hoolitseb kõige eest - ideest ja üldpildist kuni kirjutamise, toimetamise ja vormindamiseni. Saad minutitega valmis käsikirja.'
            },
            {
                title: 'KDP-valmis eksport',
                description: 'Iga projekt eksporditakse DOCX ja PDF formaadis standardse 5×8" trüki vormindusega ja digitaalseks lugemiseks optimeeritud paigutustega.'
            },
            {
                title: 'Kuni 300-leheküljeline raamat',
                description: 'Genereeri professionaalseid raamatuid kuni 300 lehekülge. Amazon-valmis suurus (5×8 tolli) Word ja PDF vormingutes.'
            },
            {
                title: 'Kiire skaleeritavus',
                description: 'Genereeri mitu pealkirja kiiresti ja testi uusi niššisid. Ehita isiklikku brändi, õppematerjale või täielik kirjastusäri automatiseerimisega.'
            }
        ],
        pricing: [
            {
                plan: 'Free',
                price: 'Tasuta',
                features: ['1 raamat kaasas', 'Kuni ~20 lehekülge', 'Lisaraamatud $35/raamat', 'Word ja PDF', '24/7 klienditugi']
            },
            {
                plan: 'Basic',
                price: '$14.50/kuu',
                features: ['1 raamat/kuu', 'Kuni 300 lehekülge', 'Lisaraamatud $31/raamat', '50% soodustus ($29 → $14.50)', 'Tühista igal ajal'],
            },
            {
                plan: 'Pro',
                price: '$34.50/kuu',
                features: ['3 raamatut/kuu', 'Kuni 300 lehekülge', 'Lisaraamatud $25/raamat', '50% soodustus ($69 → $34.50)', 'Tühista igal ajal'],
                featured: true
            },
            {
                plan: 'Enterprise',
                price: '$74.50/kuu',
                features: ['8 raamatut/kuu', 'Kuni 300 lehekülge', 'Lisaraamatud $19/raamat', '50% soodustus ($149 → $74.50)', 'Tühista igal ajal']
            }
        ],
        kasutusviisid: [
            {
                title: 'Amazon KDP kirjastamine',
                description: 'Loo mitteilukirjanduse raamatuid - how-to juhendid, teaduslikud raamatud, hariduslikud raamatud - ja avalda otse Amazon KDP-s.'
            },
            {
                title: 'Digitaalsed e-raamatud',
                description: 'Genereeri ja müü e-raamatuid platvormidel nagu Gumroad, Payhip või oma veebilehel. Tootmine ilma vormindusmuredeta.'
            },
            {
                title: 'Luulekogu',
                description: 'Loo kureeritud luulekogusid, mis paistavad silma online-raamatupoodides ja digitaalsetes kataloogides.'
            }
        ],
        category: 'writing'
    },
    'mystylus': {
        name: 'MyStylus',
        badges: [],
        tags: ['Writing', 'Study', 'Academic'],
        website: 'https://mystylus.ai',
        description: 'MyStylus on PhD-tasemel AI super-agent õppimiseks ja kirjutamiseks. Aitab essede, artiklite, dissertatsioonide ja muude akadeemiliste tööde koostamisel AI tuvastuse vältimisega.',
        features: [
            {
                title: 'AI esseekirjutaja ja generaatorid',
                description: 'Laialdane valik AI kirjutusgeneraatoreid: esseed, artiklid, teadustööd, dissertatsioonid, isiklikud avaldused, raamatu arvustused, kirjanduse ülevaated, labori aruanded.'
            },
            {
                title: 'AI tuvastus ja humaniseerimine',
                description: 'Sisseehitatud AI detektor ja humaniseerija tööriist. Kontrolli AI sisu olemasolu ja muuda see inimlikuks enne esitamist.'
            },
            {
                title: 'Mitmekeelsed tööriistad',
                description: 'Toetab mitut keelt: inglise, hispaania, saksa, prantsuse, portugali, araabia, hindi ja palju muud.'
            },
            {
                title: 'Õppimise tööriistad',
                description: 'Flashcards, slaidid, dokumendid, ümberkirjutaja, uurija, hindaja - kõik ühes platformis õppimise ja kirjutamise jaoks.'
            }
        ],
        pricing: [
            {
                plan: 'Free',
                price: 'Tasuta',
                features: ['3 päringut päevas', 'Põhifunktsioonid', 'AI detektor', 'Piiratud sõnade arv']
            },
            {
                plan: 'Student',
                price: 'Hind nõudmisel',
                features: ['Piiramatud päringud', 'Kõik AI generaatorid', 'AI humaniseerija', 'Priority tugi'],
                featured: true
            },
            {
                plan: 'Pro',
                price: 'Hind nõudmisel',
                features: ['Piiramatud projektid', 'Täiustatud AI mudelid', 'Kõik tööriistad', 'Pühendatud tugi']
            }
        ],
        kasutusviisid: [
            {
                title: 'Akadeemiline kirjutamine',
                description: 'Õpilased kasutavad MyStylus\'t essede, teadustööde, dissertatsioonide ja labori aruannete koostamiseks PhD-tasemel kvaliteediga.'
            },
            {
                title: 'Õppimine ja uurimine',
                description: 'Loo flashcarde, kokkuvõtteid, slaide ja õppematerjale. Uurimistöö allikatefinder ja kirjanduse ülevaated.'
            },
            {
                title: 'Plagiaadi ja AI vältimine',
                description: 'Kasuta AI detektorit ja humaniseerijat, et tagada originaalsus ja läbida AI-tuvastussüsteeme nagu Turnitin.'
            }
        ],
        category: 'writing'
    },
    'autowrite': {
        name: 'AutoWrite App',
        badges: ['#1 SEO Writer'],
        tags: ['Writing', 'SEO', 'Content'],
        website: 'https://autowrite.app',
        description: 'AutoWrite App on AI-põhine SEO artiklite generaator, mis loob pikki, otsimootorite jaoks optimeeritud artikleid. Automaatne avaldamine WordPressi ja integratsioon veebilehtedega.',
        features: [
            {
                title: 'SEO optimeerimine ja märksõnade uurimine',
                description: 'Automaatne SEO märksõnade uurimine ja optimeerimine. Loo artikleid, mis edetabelis kõrgele jõuavad - 21-28 päevaga TOP 1-2 positsioon.'
            },
            {
                title: 'YouTube ja veebilehtede teisendus',
                description: 'Teisenda YouTube videod ja veebilehed artikleiks. Kasuta olemasolevat sisu uute artiklite loomiseks erinevates formaatides.'
            },
            {
                title: 'WordPress automatiseerimine',
                description: 'Automaatne avaldamine WordPressi. Sisu loomine, optimeerimine ja avaldamine täiesti automaatselt ilma käsitsi tööta.'
            },
            {
                title: 'Mitmekeelne sisu ja fakkontroll',
                description: 'Toetab 50+ keelt ja sisseehitatud fakkontroll. Loodud artiklid on faktiliselt täpsed ja mitmes keeles kättesaadavad.'
            }
        ],
        pricing: [
            {
                plan: 'Free',
                price: 'Tasuta',
                features: ['1 artikkel päevas', 'Põhifunktsioonid', 'Piiratud sõnade arv', 'Ei vaja krediitkaarti']
            },
            {
                plan: 'Starter',
                price: '$9/kuus',
                priceNote: '(aastane arve, 53% soodustus)',
                features: ['500,000 sõna kuus', 'Kõik põhifunktsioonid', 'SEO optimeerimine', 'WordPress integratsioon'],
                featured: true
            },
            {
                plan: 'Pro',
                price: '$24/kuus',
                priceNote: '(aastane arve, 51% soodustus)',
                features: ['3,000,000 sõna kuus', 'Reklaami puudumine', 'API ligipääs', 'Priority tugi']
            }
        ],
        kasutusviisid: [
            {
                title: 'SEO sisu loomine',
                description: 'Blogijad ja turundajad loovad SEO-optimeeritud artikleid, mis jõuavad Google\'i TOP tulemustesse. Kolmekordista veebiliiklust nädalatega.'
            },
            {
                title: 'Sisu automatiseerimine',
                description: 'E-kaubandus ja sisutoojad automatiseerivad sisu loomise ja avaldamise täielikult WordPressi kaudu.'
            },
            {
                title: 'Pikad artiklid ja uuringud',
                description: 'Loo pikki, põhjalikke artikleid koos faktkontrolli ja uurimisega. Sobib teadus- ja haridussisule.'
            }
        ],
        category: 'writing'
    },
    'paraphrasingtool': {
        name: 'Paraphrasing Tool',
        badges: ['8 režiimi'],
        tags: ['Writing', 'Paraphrasing', 'Content'],
        website: 'https://paraphrasingtool.ai',
        description: 'Paraphrasing Tool pakub 8 erinevat parafraseerimisr režiimi AI-ga. Ümberkirjutamine, teksti genereerimine, plagiaadi kontroll ja heli-/kõneteksti teisendus ühes tööriistas.',
        features: [
            {
                title: '8 parafraseerimisr režiimi',
                description: 'Standard, Fluency, Humanizer, Simplify, Creative, Academic, Quill Text, Sentence Rephraser - vali sobiv režiim vastavalt vajadusele.'
            },
            {
                title: 'Heli ja kõne tugi',
                description: 'Audio-to-text parafraseerimm, reaalajas kõneteksti teisendus. Toetab pilte ja ekraanipilte teksti eraldamiseks.'
            },
            {
                title: 'Platvormide tugi',
                description: 'Brauseri laiendused: Chrome, Firefox, Edge, Opera, Safari. Mobiilirakendused: Android ja iOS.'
            },
            {
                title: 'AI tezaurus ja uurimispaneel',
                description: 'Sisseehitatud AI-põhine tezaurus, uurimispaneel, sõnade definitsioonid. Kõik tööriistad ühes kohas.'
            }
        ],
        pricing: [
            {
                plan: 'Solo Paraphrasing',
                price: '$5/kuus',
                priceNote: '($60 aastas)',
                features: ['Piiramatu parafraseerimm', 'Kõik 8 režiimi', 'Põhitööriistad', 'Brauseri laiendused']
            },
            {
                plan: 'Solo Text Generation',
                price: '$12/kuus',
                priceNote: '($144 aastas)',
                features: ['300,000 sõna teksti genereerimine', 'AI kirjutaja', 'Põhitööriistad', 'Brauseri laiendused']
            },
            {
                plan: 'All-in-One Bundle',
                price: '$16/kuus',
                priceNote: '($192 aastas, PARIM VÄÄRTUS)',
                features: ['Piiramatu parafraseerimm', '60,000 sõna plagiaadi kontroll', '600,000 sõna teksti genereerimine', 'Kõik funktsioonid'],
                featured: true
            }
        ],
        kasutusviisid: [
            {
                title: 'Akadeemiline kirjutamine',
                description: 'Õpilased ja teadlased kasutavad Academic režiimi essede, artiklite ja uurimustööde ümberkirjutamiseks ning plagiaadi vältimiseks.'
            },
            {
                title: 'Sisu loomine ja turundus',
                description: 'Blogijad ja turundajad loovad originaalset sisu Creative režiimiga. Kiire sisu tootmine sotsiaalmeediasse ja veebilehtedele.'
            },
            {
                title: 'Lihtustamine ja humaniseerimine',
                description: 'Kasuta Simplify režiimi keeruliste tekstide lihtsustamiseks või Humanizer režiimi AI-teksti inimlikumaks muutmiseks.'
            }
        ],
        category: 'writing'
    },
    'gemini3': {
        name: 'Gemini 3',
        badges: ['Google'],
        tags: ['Multimodal', 'AI', 'Technology'],
        website: 'https://deepmind.google/models/gemini/',
        description: 'Gemini 3 on Google kõige arenenud AI mudel, mis toob igat tüüpi idee ellu erakordse sügavuse ja nüanseeritusega. State-of-the-art põhjendamis- ja multimodaalsed võimed.',
        features: [
            {
                title: 'Gemini 3 Pro mudel',
                description: 'Kõige intelligentsem mudel kõrgetasemelise põhjendamise, koodi genereerimise ja multimodaalse arusaamise jaoks. Parim valik keerulistele projektidele.'
            },
            {
                title: 'Nano Banana Pro - pildigeneratsioon',
                description: 'Tipptasemel pildigeneratsioon ja -redigeerimine stuudio-tasemel täpsuse ja kontrollialm. Loo ja muuda pilte professionaalsel tasemel.'
            },
            {
                title: 'Veo 3.1 - videogeneratsioon',
                description: 'Kinemaatilise kvaliteediga videogeneratsioon tekstikirjelduste põhjal. Loo lummavaid videoid lihtsate käskude abil.'
            },
            {
                title: 'Deep Think - keeruline põhjendamine',
                description: 'Gemini 3 Deep Think pakub samm-sammult põhjendamist ja multimodaalset mõistmist kõige keerukamate probleemide lahendamiseks.'
            }
        ],
        pricing: [
            {
                plan: 'Google AI Plus',
                price: '€7.99/kuu',
                features: ['200 GB salvestusruum', 'Piiratud Gemini 3 juurdepääs', 'Veo 3.1 Fast', '200 AI krediiti kuus']
            },
            {
                plan: 'Google AI Pro',
                price: '€21.99/kuu',
                features: ['2 TB salvestusruum', 'Gemini 3 Pro mudel', 'Veo 3.1', '1,000 AI krediiti kuus', 'NotebookLM'],
                featured: true
            },
            {
                plan: 'Google AI Ultra',
                price: '€274.99/kuu',
                features: ['30 TB salvestusruum', 'Kõrgeim Gemini 3 juurdepääs', 'Deep Think', '25,000 AI krediiti kuus', 'YouTube Premium']
            }
        ],
        kasutusviisid: [
            {
                title: 'Vibe coding ja arendus',
                description: 'Arendajad kasutavad Gemini 3 Pro-d front-end ja back-end arenduseks, koos loomuliku keelega koodi genereerimisega.'
            },
            {
                title: 'Looming ja disain',
                description: 'Loojad kasutavad Nano Banana Pro-d stuudio-tasemel piltide ja Veo 3.1-d videote loomiseks reklaamidele ja sisule.'
            },
            {
                title: 'Uurimine ja analüüs',
                description: 'Teadlased ja analüütikud kasutavad Deep Think-i keeruliste probleemide lahendamiseks mitmetasandilise põhjendamisega.'
            }
        ],
        category: 'art'
    },
    'seedream': {
        name: 'Seedream 4.0',
        badges: ['ByteDance'],
        tags: ['Image Generation', 'Image Editing', 'AI Art'],
        website: 'https://seed.bytedance.com/en/seedream4_0',
        description: 'Seedream 4.0 on ByteDance\'i tipptasemel pildiloome mudel, mis ühendab ühtses arhitektuuris nii piltide genereerimise kui ka redigeerimise võimalused. Toetab keerukat mitmemõõtmelist põhjendamist ja säilitab viitekooskõla redigeerimiste vahel. Toodab kõrglahutusega pilte kuni 4K resolutsiooniga.',
        features: [
            {
                title: 'Integreeritud genereerimine ja redigeerimine',
                description: 'Ühtne arhitektuur piltide loomiseks ja redigeerimiseks. Toetab loomuliku keele juhiseid täpseks pilditöötluseks.'
            },
            {
                title: '4K kõrglahutus',
                description: 'Toodab kõrglahutusega pilte kuni 4K resolutsiooniga. Professionaalse kvaliteediga väljund loome- ja disainitööks.'
            },
            {
                title: 'Mitmekülgsed kunstistiilid',
                description: 'Toetab erinevaid kunstilikke stiile: fotorealism, anime, maalikunst. Võimaldab üles laadida kuni 3 viitepilti stiilide ülekandmiseks.'
            },
            {
                title: 'Kiire inferents',
                description: 'Oluliselt kiirem töötlemiskiirus võrreldes eelmiste versioonidega. Tugev vihjete järgimine ja esteetiline järjepidevus.'
            },
            {
                title: 'Teadmistepõhine genereerimine',
                description: 'Keerukas põhjendamine ja mitmemõõtmeline ülesannete täitmine. Säilitab viitekooskõla iteratiivse redigeerimise ajal.'
            },
            {
                title: 'Loomuliku keele juhtimine',
                description: 'Kasuta loomuliku keele juhiseid täpseks pilditöötluseks. Intuitiivne kontrollimine ilma tehniliste teadmisteta.'
            }
        ],
        pricing: [
            {
                plan: 'ByteDance Platform',
                price: 'Hind nõudmisel',
                features: ['Seedream 4.0 mudel', 'Kuni 4K resolutsioon', 'Integreeritud redigeerimine', 'API access'],
                featured: true
            },
            {
                plan: 'SeaArt Platform',
                price: 'Tasuta/Tasuline',
                features: ['Tasuta krediidid', 'Seedream 4.0 integratsioon', 'Kogukonna funktsioonid', 'Premium mudelid (tasuline)']
            }
        ],
        kasutusviisid: [
            {
                title: 'Professionaalne disain',
                description: 'Disainerid kasutavad Seedream 4.0 4K kvaliteediga graafilise disaini, illustratsioonide ja visuaalse sisu loomiseks klientide projektidele.'
            },
            {
                title: 'AI kunstiloome',
                description: 'Kunstnikud eksperimenteerivad erinevate stiilidega - fotorealismist anime\'ni, kasutades viitepilte ja iteratiivset redigeerimist.'
            },
            {
                title: 'Turundus ja branding',
                description: 'Turundajad loovad kõrgekvaliteedilisi visuaale reklaamidele, sotsiaalmeedia sisule ja brändi materjalidele loomuliku keele juhistega.'
            }
        ],
        category: 'art'
    },
    'flux': {
        name: 'FLUX.1',
        badges: ['Black Forest Labs'],
        tags: ['Imaging', 'Generative Media', 'API'],
        website: 'https://blackforestlabs.ai/',
        description: 'Black Forest Labs on pioneering startup generatiivse AI valdkonnas. FLUX.1 on tipptasemel pildigeneratsiooni mudel, mis pakub fotorealistlikke tulemusi ja täpset kontrolli.',
        features: [
            {
                title: 'FLUX.2 - 4MP väljund',
                description: 'Tootmisjärgne pildigeneratsioon ja -redigeerimine kuni 4 megapiksli resolutsiooniga. Multi-reference kontroll ja fotorealism.'
            },
            {
                title: 'FLUX.1 Kontext - redigeerimine',
                description: 'Ühtne mudel lokaalseks redigeerimiseks, generatiivseteks muudatusteks ja tekst-pilt genereerimiseks. Säilita karakterite järjepidevus.'
            },
            {
                title: 'API ja Open Weights',
                description: 'Lihtne API integratsioon või deploy FLUX mudeleid oma infrastruktuurile. Täielik kontroll ja kohandamine.'
            },
            {
                title: 'FLUX 1.1 Pro Ultra - Raw režiim',
                description: 'Parim mudel fotorealistlike piltide loomiseks kuni 2K resolutsiooniga. Raw režiim autentse fotograafia esteetika jaoks.'
            }
        ],
        pricing: [
            {
                plan: 'FLUX.1 Dev (API)',
                price: '$0.025/pilt',
                features: ['Destilleeritud mudel', 'Kiire genereerimine', 'API juurdepääs', 'Skaleeritav']
            },
            {
                plan: 'FLUX 1.1 Pro (API)',
                price: '$0.04/pilt',
                features: ['Parim efektiivsus', 'Suuremahuline tootmine', 'State-of-the-art kvaliteet', 'API juurdepääs'],
                featured: true
            },
            {
                plan: 'FLUX.2 Pro (API)',
                price: '$0.03-0.045/MP',
                features: ['4MP väljund', 'Multi-reference', 'Kõrgeim kvaliteet', 'Fotorealism']
            }
        ],
        kasutusviisid: [
            {
                title: 'Professionaalne visualiseerimine',
                description: 'Disainerid ja arhitektid loovad fotorealistlikke visualiseeringuid projektidele, toodetele ja arhitektuursetele kavaprojektidele.'
            },
            {
                title: 'Turundus ja reklaam',
                description: 'Turundusmeeskonnad toodavad kõrgekvaliteedilist visuaalset sisu reklaamideks, kampaaniateks ja brändi materjalideks.'
            },
            {
                title: 'API integratsioon rakendustes',
                description: 'Arendajad integreerivad FLUX API oma rakendustesse, et pakkuda pildigeneratsiooni funktsionaalsust lõppkasutajatele.'
            }
        ],
        category: 'art'
    },
    'nanobananagemini25': {
        name: 'Nano-banana (Gemini 2.5)',
        badges: ['Google'],
        tags: ['Graphics', 'Image Editing', 'Free'],
        website: 'https://deepmind.google/models/gemini-image/',
        description: 'Gemini 2.5 Flash Image, koodinimega Nano Banana, on Google tipptasemel pildigenereerimise ja -redigeerimise mudel. Loo ja muuda pilte kasutades teksti ja pildikäske.',
        features: [
            {
                title: 'Multimodaalne mõistmine',
                description: 'Laadi üles pilte ja jaga tekstijuhiseid Geminile, et luua keerulisi ja detailseid pilte. Sügav keeleline mõistmine.'
            },
            {
                title: 'Vestluslikud sisendid',
                description: 'Kasuta igapäevast keelt piltide loomisel ja jätka vestlust, et täpsustada mudeli genereeritud tulemusi.'
            },
            {
                title: 'Reaalmaailma teadmised',
                description: 'Genereeri pilte, mis järgivad reaalmaailma loogikat tänu Gemini täiustatud põhjendamisvõimetele.'
            },
            {
                title: 'Nano Banana Pro ja Flash',
                description: 'Nano Banana Pro (Gemini 3) stuudio-tasemel täpsuse jaoks või Nano Banana (Gemini 2.5 Flash) kiireks pildigeneratsiooniks.'
            }
        ],
        pricing: [
            {
                plan: 'Tasuta (Gemini App)',
                price: 'Tasuta',
                features: ['Piiratud juurdepääs', 'Gemini 2.5 Flash Image', 'Põhilised funktsioonid', 'Kogukonna tugi']
            },
            {
                plan: 'Google AI Plus',
                price: '€7.99/kuu',
                features: ['Rohkem juurdepääsu', 'Gemini 2.5 Flash Image', '200 AI krediiti', '200 GB salvestusruum'],
                featured: true
            },
            {
                plan: 'Google AI Pro/Ultra',
                price: '€21.99+/kuu',
                features: ['Nano Banana Pro', 'Gemini 3 Pro Image', 'Stuudio-tasemel täpsus', '1000+ AI krediiti']
            }
        ],
        kasutusviisid: [
            {
                title: 'Graafiline disain',
                description: 'Disainerid kasutavad Nano Banana-t kiireks prototüüpimiseks, kontseptsiooni loomiseks ja visuaalse sisu genereerimiseks.'
            },
            {
                title: 'Pildiredigeerimine',
                description: 'Muuda olemasolevaid pilte tekstikäskudega - muuda objekte, värve, lisage elemente või eemalda neid.'
            },
            {
                title: 'Loov eksperimenteerimine',
                description: 'Kunstnikud ja hobinistid eksperimenteerivad erinevate stiilidega - realistlikust kuni mängulis-fantastiliseni.'
            }
        ],
        category: 'art'
    },
    'wananimate': {
        name: 'Wan Animate',
        badges: ['Most Popular'],
        tags: ['Animation', 'Video Generation', 'Freemium'],
        website: 'https://wananimate.com/',
        description: 'Wan Animate on professionaalne AI videogeneratsiooni platvorm, mis loob kõrgekvaliteedilist animatsiooni ja videosisu. Kuni 1250 sekundit videot kuus.',
        features: [
            {
                title: 'AI video genereerimine',
                description: 'Genereeri kõrgekvaliteedilist videosisu kuni 1250 sekundini kuus (Max plaanil). HD kvaliteet ja kommertskasutus lubatud.'
            },
            {
                title: 'Priority töötlus',
                description: 'Kõik plaanid sisaldavad priority töötluskiirust ja kõrget edukuse määra. Kiire video genereerimine.'
            },
            {
                title: 'Commercial use',
                description: 'Kõik plaanid võimaldavad kommertskasutust. Kasuta loodud videoid ärilistel eesmärkidel ilma piiranguteta.'
            },
            {
                title: 'Krediidipõhine süsteem',
                description: 'Paindlik krediidipõhine hinnamudel. Lite 100, Pro 400, Max 1250 krediiti kuus. $0.06-0.14 per krediit.'
            }
        ],
        pricing: [
            {
                plan: 'Lite',
                price: '$13.90/kuu',
                priceNote: '(aastane arve, 30% soodustus)',
                features: ['100 krediiti kuus', 'Kuni 100s video', 'Priority töötlus', 'HD kvaliteet', 'Commercial use', 'Priority tugi']
            },
            {
                plan: 'Pro',
                price: '$27.90/kuu',
                priceNote: '(aastane arve, 30% soodustus)',
                features: ['400 krediiti kuus', 'Kuni 400s video', 'Priority töötlus', 'HD kvaliteet', 'Commercial use', 'Priority tugi'],
                featured: true
            },
            {
                plan: 'Max',
                price: '$69.90/kuu',
                priceNote: '(aastane arve, 30% soodustus)',
                features: ['1250 krediiti kuus', 'Kuni 1250s video', 'Priority töötlus', 'HD kvaliteet', 'Commercial use', 'Priority tugi']
            }
        ],
        kasutusviisid: [
            {
                title: 'Video sisu tootmine',
                description: 'Sisuloojad ja turundajad toodavad AI-põhist videosisu sotsiaalmeediasse, YouTube\'i ja turunduskampaaniatesse.'
            },
            {
                title: 'Animatsioon ja visuaalid',
                description: 'Animaatorid ja disainerid loovad animeeritud videoid, karakterite liikumist ja dünaamilist sisu.'
            },
            {
                title: 'Kommertsprojektid',
                description: 'Ettevõtted kasutavad Wan Animate-i reklaamvideote, tootedemonstratsioonide ja brändi sisu loomiseks.'
            }
        ],
        category: 'art'
    },
    'deepseekr1': {
        name: 'DeepSeek R1',
        badges: ['DeepSeek AI'],
        tags: ['Research', 'Reasoning', 'API'],
        website: 'https://www.deepseek.com/',
        description: 'DeepSeek-R1 (DeepSeek-V3.2) on tipptasemel suur keelemudel DeepSeek AI-lt, mis seab uued standardid põhjendamises, matemaatikas ja kodeerimises. Kättesaadav API kaudu.',
        features: [
            {
                title: 'DeepSeek-V3.2 mudel',
                description: 'Uusim versioon koos täiustatud põhjendamise ja thinking režiimiga. 128K konteksti pikkus, kuni 64K väljund.'
            },
            {
                title: 'Thinking Mode (Reasoner)',
                description: 'DeepSeek-reasoner mudel pakub sügavat samm-sammult põhjendamist keeruliste probleemide lahendamiseks.'
            },
            {
                title: 'Madal hind API',
                description: 'Üks odavamaid AI API-sid turul - $0.28 miljon input tokenit, $0.42 miljon output tokenit.'
            },
            {
                title: 'Tool Calls ja JSON Output',
                description: 'Toetab tööriistade kutsumist, JSON väljundit ja FIM completion-it. Täiustatud integratsioonid.'
            }
        ],
        pricing: [
            {
                plan: 'DeepSeek Chat (API)',
                price: '$0.28/1M tokenit',
                features: ['Non-thinking mode', '128K kontekst', '8K max väljund', 'Tool calls', 'JSON output']
            },
            {
                plan: 'DeepSeek Reasoner (API)',
                price: '$0.42/1M tokenit',
                features: ['Thinking mode', '128K kontekst', '64K max väljund', 'Sügav põhjendamine', 'Tool calls'],
                featured: true
            },
            {
                plan: 'Tasuta veebirakendus',
                price: 'Tasuta',
                features: ['chat.deepseek.com', 'Tasuta kasutamine', 'DeepSeek-V3.2', 'Kogukonna tugi']
            }
        ],
        kasutusviisid: [
            {
                title: 'Koodigenereerimine',
                description: 'Arendajad kasutavad DeepSeek-i koodi genereerimiseks, debug-imiseks ja refaktooringuks. Tipptasemel koodimise võimed.'
            },
            {
                title: 'Matemaatika ja loogika',
                description: 'Teadlased ja insenerid lahendavad keerulisi matemaatilisi probleeme ja loogikamõistatusi thinking režiimiga.'
            },
            {
                title: 'API integratsioon',
                description: 'Ettevõtted integreerivad DeepSeek API oma rakendustesse madalate kuludega kõrge jõudlusega AI lahenduste jaoks.'
            }
        ],
        category: 'art'
    },
    'ideogram': {
        name: 'Ideogram',
        badges: ['Ideogram 3.0'],
        tags: ['Image Generation', 'Graphic Design', 'Text Rendering'],
        website: 'https://ideogram.ai/',
        description: 'Ideogram on juhtiv generatiivne meediaplatvorm, mis võimaldab kasutajatel luua vapustavaid pilte, graafikat ja tekstipõhist disaini lihtsatest tekstikäskudest. Tipptasemel generatiivsed mudelid fotorealismi, stiili järjepidevuse ja täpse teksti renderdamiseks. Ideogram 3.0 toob kaasa märkimisväärseid edusamme pildi-käsu joondamisel.',
        features: [
            {
                title: 'Tekst-pildiks genereerimine',
                description: 'Kõrge fotorealism ja stiili täpsus. Loo visuaale, mis täpselt vastavad kirjeldusele, isegi keerukate või pikkade kompositsioonide puhul.'
            },
            {
                title: 'Viitepiltide üleslaadimine',
                description: 'Laadi üles kuni 3 viitepilti täpseks stiili kontrolliks. Ideogram 3.0 tagab parema pildi-käsu joondamise.'
            },
            {
                title: 'Üle 4.3 miljardi stiili',
                description: 'Juurdepääs üle 4.3 miljardi eelseadistatud stiili ja taaskasutatavate stiili koodidega. Kureeritud esteetika kiireks loominguliseks töövooks.'
            },
            {
                title: 'Täiustatud teksti renderdamine',
                description: 'Tipptasemel teksti renderdamine tüpograafia ja graafilise disaini jaoks. Genereeri loetavat teksti piltidel täpselt.'
            },
            {
                title: 'Batch genereerimine',
                description: 'Kiire prototüüpimine ja suuremahulised projektid. Genereeri mitut pilti korraga efektiivseks töövooks.'
            },
            {
                title: 'Kohandatavad mallid ja koostöö',
                description: 'Meeskonnaprojektide mallid ja koostöö tööriistad. Ekspordi kõrglahutusega failid veebile, trükile ja sotsiaalmeediasse.'
            }
        ],
        pricing: [
            {
                plan: 'Free',
                price: 'Tasuta',
                features: ['Kuni 40 pildigeneratsiooni päevas', 'Põhilised funktsioonid', 'Kogukonna galerii', 'Basic text rendering'],
                featured: true
            },
            {
                plan: 'Basic',
                price: '$8/kuu',
                features: ['Kõrgemad genereerimise limiidid', 'Kiirem töötlemine', 'Täiustatud redigeerimise tööriistad', 'Private image creation', 'Commercial use']
            },
            {
                plan: 'Plus',
                price: '$20/kuu',
                features: ['Suurendatud krediidid', 'Unlimited slow generations', 'Private image creation', 'Batch generation', 'Advanced styles', 'Commercial use']
            },
            {
                plan: 'Pro',
                price: '$60/kuu',
                features: ['Maximum krediidid', 'Unlimited slow generations', 'Bulk generation', 'Priority processing', 'API access', 'Team collaboration', 'Commercial use']
            }
        ],
        kasutusviisid: [
            {
                title: 'Brändimine ja reklaam',
                description: 'Creators, marketers ja ettevõtted loovad kõrgekvaliteedilisi, kohandatavaid visuaale brändimaterjali, reklaamide ja turunduskampaaniate jaoks.'
            },
            {
                title: 'Sotsiaalmeedia sisu',
                description: 'Social media managers genereerivad engaging graafikat ja visuaalset sisu platvormidele nagu Instagram, Facebook, Twitter. 4.3B+ stiili.'
            },
            {
                title: 'Graafiline disain',
                description: 'Disainerid kasutavad Ideogram\'i täiustatud teksti renderdamist tüpograafia, posterite, logo-de ja professionaalse graafilise disaini loomiseks.'
            }
        ],
        category: 'art'
    },
    'googleveo3': {
        name: 'Google Veo 3',
        badges: ['New'],
        tags: ['Video Generation', 'AI Video', 'Freemium'],
        website: 'https://deepmind.google/models/veo/',
        description: 'Veo 3.1 on Google DeepMind\'i uusim videogeneratsiooni mudel, mis võimaldab luua kõrge kvaliteediga videoid koos heliga. SOTA (state-of-the-art) text-to-video ja image-to-video genereerimine.',
        features: [
            {
                title: 'Veo 3.1 Standard',
                description: 'Kõrgeima kvaliteediga video koos audio generatsiooniga. 1080p HD, tipptasemel realism ja füüsika. $0.40 per video.'
            },
            {
                title: 'Veo 3.1 Fast',
                description: 'Kiire videogeneratsioon säilitades hea kvaliteedi. 768p, kiirem genereerimine, madalam hind. $0.15 per video.'
            },
            {
                title: 'Advanced Controls',
                description: 'Camera controls, first/last frame, object insertion/removal, motion controls. Täielik loominguline kontroll.'
            },
            {
                title: 'Native Audio',
                description: 'AI-genereeritud heli, dialoog ja muusika otse video genereerimise käigus. Kõrge kvaliteediga audio sünkroniseerimine.'
            }
        ],
        pricing: [
            {
                plan: 'Tasuta (Google AI Studio)',
                price: 'Tasuta',
                features: ['Testida Google AI Studios', 'Piiratud genereerimised', 'Gemini integratsioon', 'Kogukonna tugi']
            },
            {
                plan: 'Veo 3.1 Standard API',
                price: '$0.40/video',
                features: ['1080p HD kvaliteet', 'Audio generatsioon', 'Advanced controls', 'Ärilisel kasutusel'],
                featured: true
            },
            {
                plan: 'Veo 3.1 Fast API',
                price: '$0.15/video',
                features: ['768p kvaliteet', 'Kiire genereerimine', 'Audio generatsioon', 'Ärilisel kasutusel']
            },
            {
                plan: 'Enterprise (Vertex AI)',
                price: 'Hind nõudmisel',
                features: ['Enterprise tugi', 'Volume discounts', 'SLA garantiid', 'Dedicated support']
            }
        ],
        kasutusviisid: [
            {
                title: 'Filmitootmine',
                description: 'Filmitegijad kasutavad Veo 3.1 cinematic storyboarding, previsualization ja lühifilmide loomiseks. Hollywood partnership Darren Aronofsky\'ga.'
            },
            {
                title: 'Marketing & Reklaamid',
                description: 'Turundajad loovad kiirely videoreklaamid, tootevideod ja sotsiaalmeediat sisu. Professionaalne kvaliteet, kiire turnaround.'
            },
            {
                title: 'Gaming & VFX',
                description: 'Mänguarendajad ja VFX stuudiod kasutavad Veo 3.1 kontseptide, cutscene\'ide ja visuaalefektide loomiseks.'
            }
        ],
        category: 'art'
    },
    'kimik2thinking': {
        name: 'Kimi K2 Thinking',
        badges: ['Reasoning AI'],
        tags: ['Reasoning', 'Open Source', 'Free'],
        website: 'https://www.kimi.com/',
        description: 'Kimi on Moonshot AI intelligent assistent koos K2 Thinking reasoning mudeliga. Tasuta kasutamine kimi.com veebirakenduses. Chain-of-Thought mõtlemine, online otsing ja multi-modal support.',
        features: [
            {
                title: 'Kimi Chat (Free)',
                description: 'Tasuta intelligent assistent kimi.com platvormil. Deep thinking režiim, online search, document analysis. 200K context window.'
            },
            {
                title: 'K2 Thinking Model',
                description: 'Chain-of-Thought reasoning keeruliste probleemide lahendamiseks. Nähtav mõtlemise käik, samm-sammult loogika.'
            },
            {
                title: 'Multi-modal Capabilities',
                description: 'Tekst, pildid ja dokumentide analüüs. Kimi-VL (vision-language) ja Kimi-Audio mudelid integreeritud.'
            },
            {
                title: 'Developer API',
                description: 'Platform.moonshot.cn API arendajatele. Kimi-K2-Instruct open source mudel Hugging Face\'is. Apache 2.0 litsents.'
            }
        ],
        pricing: [
            {
                plan: 'Kimi Free',
                price: 'Tasuta',
                features: ['kimi.com veebirakendus', 'Unlimited chats', 'K2 Thinking režiim', 'Online search', 'Document analysis', '200K context'],
                featured: true
            },
            {
                plan: 'Kimi+ (Pro)',
                price: 'Hind nõudmisel',
                features: ['Premium features', 'Priority access', 'Advanced models', 'Extended context']
            },
            {
                plan: 'Kimi API',
                price: 'Pay-as-you-go',
                features: ['Platform.moonshot.cn', 'API integratsioon', 'Skaleeritav', 'Commercial use']
            },
            {
                plan: 'Open Source',
                price: 'Tasuta',
                features: ['Hugging Face mudelid', 'Kimi-K2-Instruct-0905', 'Apache 2.0 litsents', 'Self-hosting']
            }
        ],
        kasutusviisid: [
            {
                title: 'Research & Analysis',
                description: 'Teadlased ja uurijad kasutavad Kimi deep thinking režiimi keeruliste probleemide analüüsiks ja uurimistööks.'
            },
            {
                title: 'Coding & Development',
                description: 'Arendajad kasutavad Kimi K2 koodi genereerimiseks, debug-imiseks, arhitektuuri planeerimiseks ja dokumentatsiooniks.'
            },
            {
                title: 'Document Processing',
                description: 'Ettevõtted kasutavad Kimi dokumentide analüüsiks, summarization ja information extraction. 200K context window toetab pikki dokumente.'
            }
        ],
        category: 'art'
    },
    'hidreami1': {
        name: 'HiDream-I1',
        badges: ['AI Image'],
        tags: ['Text-to-Image', 'AI Art', 'Freemium'],
        website: 'https://hidream.org/',
        description: 'HiDream-I1 on tipptasemel text-to-image generatsioonimudel, mis loob kõrge kvaliteediga pilte krediiditepõhise süsteemiga. Full model ja dev model saadaval.',
        features: [
            {
                title: 'HiDream-i1 Full Model',
                description: 'Täisfunktsionaalne mudel parima kvaliteediga piltide loomiseks. Nõuab krediite, professionaalne väljund.'
            },
            {
                title: 'HiDream Dev Model',
                description: 'Tasuta arendusmudel testimiseks ja prototüüpimiseks. Hea kvaliteet ilma krediitideta.'
            },
            {
                title: 'Fast Generation',
                description: 'Kiire genereerimiskiirus (5x speed Starter, kiireim Pro plaaniga). No watermarks Pro+ plaanidel.'
            },
            {
                title: 'Credit System',
                description: 'Paindlik krediiditepõhine hinnastus. $0.5-0.7 per image sõltuvalt plaanist. Kehtivusaeg 30 päeva.'
            }
        ],
        pricing: [
            {
                plan: 'Try Now',
                price: '$2.9',
                features: ['1 credit ($2.9/image)', 'Access to full model', 'Valid for 30 days', 'Testi täismudelit']
            },
            {
                plan: 'Starter',
                price: '$6.99',
                features: ['10 credits ($0.7/image)', 'Fast generation (5x)', 'No ads', 'No watermarks', 'Valid for 30 days', 'Priority support']
            },
            {
                plan: 'Pro',
                price: '$9.99',
                features: ['20 credits ($0.5/image)', 'Fastest generation', 'No ads', 'No watermarks', 'Full model access', '4K HD generation', 'Valid for 30 days', 'Priority support'],
                featured: true
            }
        ],
        kasutusviisid: [
            {
                title: 'Professionaalne disain',
                description: 'Disainerid kasutavad HiDream-I1 kõrge kvaliteediga visuaalide, kontseptkunsti ja illustratsioonide loomiseks.'
            },
            {
                title: 'Sotsiaalmeedia sisu',
                description: 'Sisuloojad genereerivad atraktiivseid pilte sotsiaalmeedia postitusteks, reklaamideks ja kampaaniateks.'
            },
            {
                title: 'Kunstiline eksperimenteerimine',
                description: 'Kunstnikud ja hobistid eksperimenteerivad AI kunsti loomisega erinevate stiilide ja kontseptidega.'
            }
        ],
        category: 'art'
    },
    'minimaxhailuo': {
        name: 'Hailuo AI',
        badges: ['Flash Sale'],
        tags: ['Video Generation', 'AI Video', 'Freemium'],
        website: 'https://hailuoai.video/',
        description: 'Hailuo AI on tipptasemel videogeneraator (mitte MiniMax). Loo professionaalseid videoid Hailuo 2.3, Hailuo 2.0, Sora 2.0, Veo 3.1 mudelitega. Krediiditepõhine hinnastus alates $6.99/kuu.',
        features: [
            {
                title: 'Multiple AI Models',
                description: 'Hailuo 2.3 (512p-1080p), Hailuo 2.0 Frames (512p-1080p), Sora 2.0 Audio (720p), Veo 3.1 (720p-1080p). Vali mudel vastavalt vajadusele.'
            },
            {
                title: 'Hailuo Agent Tools',
                description: 'Video Upscale, Lip Sync, Music Generation, Audio Generation. Täielik video production toolkit.'
            },
            {
                title: 'Credit System',
                description: 'Paindlik krediiditepõhine süsteem. 1000-20000 krediiti kuus. Genereeri kuni 83-1080 videot kuus sõltuvalt plaanist.'
            },
            {
                title: 'Flash Sale Discount',
                description: 'Kuni 64% OFF Pro, Master ja Ultra plaanidel. Limited time Max plaan $199.99/kuu. Free Nano Pro kaasas!'
            }
        ],
        pricing: [
            {
                plan: 'Tasuta',
                price: 'Tasuta',
                features: ['Piiratud tasuta krediidid', 'Hailuo 2.3 access', 'Watermark videodel', 'Kogukonna tugi']
            },
            {
                plan: 'Standard',
                price: '$6.99/kuu',
                features: ['1000 credits monthly', 'Generate up to 83 videos', 'Free Nano Pro Until Dec31', '5 tasks queue', '1 task at a time']
            },
            {
                plan: 'Pro',
                price: '$23.99/kuu',
                features: ['4500 credits monthly (64% OFF)', 'Generate up to 375 videos', 'Free Nano Pro', '8 tasks queue', '2 tasks at a time', '6s-10s Hailuo 2.3'],
                featured: true
            },
            {
                plan: 'Master',
                price: '$53.99/kuu',
                features: ['10500 credits monthly (64% OFF)', 'Generate up to 875 videos', 'Free Nano Pro', '10 tasks queue', '2 tasks at a time', '6s-10s Hailuo 2.3']
            },
            {
                plan: 'Ultra',
                price: '$124.99/kuu',
                features: ['12000 credits monthly', 'Hailuo G models Unlimited', 'Free Nano Pro', '10 tasks queue', '2 tasks at a time', '8s-10s Hailuo 2.3']
            },
            {
                plan: 'Max',
                price: '$199.99/kuu',
                features: ['20000 credits monthly - Limited!', 'All Hailuo models Unlimited', 'Free Nano Pro', '10 tasks queue', '2 tasks at a time', 'Flash Sale pricing']
            }
        ],
        kasutusviisid: [
            {
                title: 'Professionaalne videotootmine',
                description: 'Filmitegijad ja stuudiod kasutavad Hailuo AI mitme mudeliga (Hailuo, Sora, Veo) kõrge kvaliteediga video sisu loomiseks.'
            },
            {
                title: 'Sotsiaalmeedia marketing',
                description: 'Bränded ja influentsaarid genereerivad engaging videosisu TikTok, Instagram ja YouTube platvormidele. Agent tools workflow.'
            },
            {
                title: 'E-kaubandus ja reklaamid',
                description: 'Kaupmehed loovad tootevideoid, product demos ja reklaamklippe. Lip Sync ja Music Generation täiustused.'
            }
        ],
        category: 'art'
    },
    'pika': {
        name: 'Pika',
        badges: ['Trending'],
        tags: ['Video Generation', 'AI Video', 'Freemium'],
        website: 'https://pika.art/',
        description: 'Pika on tipptasemel AI videogeneraator, mis võimaldab luua, redigeerida ja muuta videoid tekstipõhiselt. Pika 2.5 mudel täiustatud video editinguga - Pikascenes, Pikaffects, Pikatwists.',
        features: [
            {
                title: 'Pika 2.5',
                description: 'Uusim mudel 480p-1080p resolutsioonidega. Text-to-video ja image-to-video genereerimine. Kuni 25 sekundit videot.'
            },
            {
                title: 'Advanced Video Editing',
                description: 'Pikascenes (scene generation), Pikaffects (effects), Pikatwists (transformations), Pikadditions & Pikaswaps (object manipulation).'
            },
            {
                title: 'Turbo & Pro Models',
                description: 'Turbo režiim kiiremaks genereerimiseks. Pro mudel parima kvaliteedi jaoks. Erinevad kiirused: Fast, Faster, Fastest.'
            },
            {
                title: 'Credit System',
                description: 'Krediiditepõhine hinnastus. 80-6000 krediiti kuus. Rollover credits ostmisvõimalus. Videod ilma watermark\'ita.'
            }
        ],
        pricing: [
            {
                plan: 'Tasuta',
                price: 'Tasuta',
                features: ['Piiratud genereerimised päevas', 'Pika 2.5 (480p)', 'Watermark videodel', 'Kogukonna tugi']
            },
            {
                plan: 'Basic',
                price: '$8/kuu',
                features: ['80 krediitti kuus', 'Pika 2.5 (480p)', 'Pikaffects (Image-to-Video)', 'No watermark', 'Commercial use']
            },
            {
                plan: 'Standard',
                price: '$28/kuu',
                features: ['700 krediitti kuus', 'Pika 2.5, 2.2, Turbo, Pro', 'Kõik Pikaffects', 'Fast generation', 'No watermark', 'Commercial use'],
                featured: true
            },
            {
                plan: 'Pro',
                price: '$76/kuu',
                features: ['2300 krediitti kuus', 'Pika 2.5, 2.2, Turbo, Pro', 'Kõik Pikaffects', 'Faster generation', 'No watermark', 'Commercial use']
            },
            {
                plan: 'Fancy',
                price: 'Hind nõudmisel',
                features: ['6000 krediitti kuus', 'Kõik mudelid ja funktsioonid', 'Fastest generation', 'Priority support', 'Commercial use']
            }
        ],
        kasutusviisid: [
            {
                title: 'Sotsiaalmeedia content',
                description: 'Influentsaarid ja bränded loovad engaging videosisu TikTok, Instagram Reels ja YouTube Shorts jaoks.'
            },
            {
                title: 'Marketing videod',
                description: 'Turundajad genereerivad kiirelt reklaamklippe, product demos ja promotional videos ilma kalliste tootmisteenusteta.'
            },
            {
                title: 'Loominguline video art',
                description: 'Kunstnikud ja hobistid eksperimenteerivad AI video kunstiga, luues surrealistlikke ja unikaalseid visuaale.'
            }
        ],
        category: 'art'
    },
    'sunoai': {
        name: 'Suno AI',
        badges: ['Most Popular'],
        tags: ['Music Generation', 'AI Audio', 'Freemium'],
        website: 'https://suno.com/home',
        description: 'Suno on #1 AI muusikageneraator. Loo täispikkusi laule tekstipõhiselt. Suno Studio DAW, stem export, commercial rights. Pro plaan säästab 21,60 € aastas.',
        features: [
            {
                title: 'AI Music Generation v5',
                description: 'Genereeri täispikkusi laule (kuni 4 min) lihtsalt tekstipõhistest promptidest. Latest v5 model - lyrics, melody, instrumentals AI genereeritud.'
            },
            {
                title: 'Suno Studio (DAW)',
                description: 'First-of-its-kind web-based generative audio workstation. Edit, remix, reorder sections. Upload/record audio, rewrite lyrics, reimagine sound.'
            },
            {
                title: 'Stem Export (12 Stems)',
                description: 'Split songs into up to 12 time-aligned WAV stems. Use seamlessly in Ableton, Logic, or any DAW. Pro workflows.'
            },
            {
                title: 'Granular Creation Controls',
                description: 'Personas, Inspo, exclusions, vocal gender. Weirdness ja style sliders. Upload up to 8 min audio (Pro/Premier).'
            }
        ],
        pricing: [
            {
                plan: 'Free Plan',
                price: '0 €/month',
                features: ['Access to v4.5-all', '50 credits renew daily (10 songs)', 'No commercial use', 'Standard features only', 'Upload up to 1 min of audio', 'Shared creation queue', 'No add-on credit purchases']
            },
            {
                plan: 'Pro Plan',
                price: '7,20 €/month',
                features: ['Access to latest and most advanced v5 model', '2,500 credits (up to 500 songs), refreshes monthly', 'Commercial use rights for new songs made', 'Standard + Pro features (personas and advanced editing)', 'Split songs into up to 12 vocal and instrument stems', 'Upload up to 8 min of audio', 'Add new vocals or instrumentals to existing songs', 'Early access to new features', 'Ability to purchase add-on credits', 'Priority queue, up to 10 songs at once'],
                featured: true
            },
            {
                plan: 'Premier Plan',
                price: '22 €/month',
                features: ['Access to Suno Studio', 'Access to latest and most advanced v5 model', '10,000 credits (up to 2,000 songs), refreshes monthly', 'Commercial use rights for new songs made', 'Standard + Pro features (personas and advanced editing)', 'Split songs into up to 12 vocal and instrument stems', 'Upload up to 8 min of audio', 'Add new vocals or instrumentals to existing songs', 'Early access to new features', 'Ability to purchase add-on credits', 'Priority queue, up to 10 songs at once']
            }
        ],
        kasutusviisid: [
            {
                title: 'Music Production',
                description: 'Muusikud ja produtsendid loovad originaalmuusikat, beats ja background music projektide jaoks. Commercial rights Pro+ plaanides.'
            },
            {
                title: 'Content Creation',
                description: 'YouTuber\'id, podcasterid ja content creators genereerivad custom background music videotele ja projektidele. 4.9★ App Store.'
            },
            {
                title: 'Creative Experimentation',
                description: 'Hobistid ja muusikafännid eksperimenteerivad žanrite, stiilide ja helide loomisega AI abil. Share with millions on Suno app.'
            }
        ],
        category: 'art'
    },
    'stablediffusionxl': {
        name: 'Stable Diffusion XL',
        badges: ['Open Source'],
        tags: ['Text-to-Image', 'Open Source', 'Free'],
        website: 'https://stablediffusionxl.com/',
        description: 'Stable Diffusion XL (SDXL) 1.0 on Stability AI tipptasemel avatud lähtekoodiga text-to-image mudel. Photorealistic outputs, legible text, better composition. Tasuta HuggingFace download.',
        features: [
            {
                title: 'SDXL 1.0 Base Model',
                description: 'Latest image generation model for photorealistic outputs. Improved face generation, legible text within images, aesthetic art using shorter prompts.'
            },
            {
                title: 'Legible Text Generation',
                description: 'Generate images with readable text - significant improvement over previous SD models. Lightyears ahead of most AI art models.'
            },
            {
                title: 'Better Human Anatomy',
                description: 'Fixed issues with extra/missing limbs, deformed faces. Much better quality human generation compared to SD 2.1.'
            },
            {
                title: 'Artistic Styles (16+)',
                description: 'Photographic, Digital Art, Comic book, Fantasy art, Analog film, Neon punk, Isometric, Low poly, Origami, Line Art, Cinematic, 3D model, Pixel Art.'
            }
        ],
        pricing: [
            {
                plan: 'Open Source',
                price: 'Tasuta',
                features: ['Download from HuggingFace', 'SDXL 1.0 base model', 'Use locally with ComfyUI/Automatic1111', 'No usage limits', 'Full commercial rights'],
                featured: true
            },
            {
                plan: 'Online Platforms',
                price: 'Varies',
                features: ['Try on Discord (free)', 'ClipDrop (base model)', 'DreamStudio (paid)', 'NightCafe Studio (paid)']
            }
        ],
        kasutusviisid: [
            {
                title: 'Local AI Art Generation',
                description: 'Artists download SDXL 1.0 ja kasutavad lokaalsel arvutil ComfyUI või Automatic1111\'ga. Täielik kontroll ilma cloud tasudeta.'
            },
            {
                title: 'Commercial Art Projects',
                description: 'Designers ja agencies kasutavad SDXL photorealistic image generation\'it klientide projektides. Full commercial rights.'
            },
            {
                title: 'Research & Development',
                description: 'Researchers ja developers fine-tune\'ivad SDXL mudelit custom use case\'ideks. Open source võimaldab täielikku customization.'
            }
        ],
        category: 'art'
    }
    // Lisa siia rohkem tööriistu vastavalt vajadusele...
};

const tools = {
    'flowgpt': {
        name: 'FlowGPT',
        badges: [],
        tags: ['AI Tools', 'Freemium'],
        website: '',
        description: 'FlowGPT on tugev kogukonna-põhine platvorm, mis parandab digitaalse sisu genereerimise protsessi läbi edasijõudnud keelemudelite.',
        features: [
            {
                title: 'Visuaalne töövoog keelemudelite jaoks',
                description: 'Visuaalne töövoog keelemudelite jaoks.'
            },
            {
                title: 'Kogukonna loodud mallid',
                description: 'Kogukonna loodud mallid.'
            },
            {
                title: 'Laiaulatuslik tööriistakomplekt',
                description: 'Laiaulatuslik tööriistakomplekt.'
            },
            {
                title: 'Mitmekeelsete mudelite tugi',
                description: 'Mitmekeelsete mudelite tugi.'
            },
            {
                title: 'Kohandatavad töövood',
                description: 'Kohandatavad töövood.'
            },
        ],
        pricing: [
            {
                plan: 'Tasuta',
                price: '€0/kuu',
                features: ['Põhilised töövood', 'Kogukonna mallid']
            },
            {
                plan: 'Pro',
                price: '€20/kuu',
                features: ['Premium mallid', 'Prioriteetne töötlus', 'Koostöö tööriistad']
            },
            {
                plan: 'Ettevõte',
                price: 'Kohandatud',
                features: ['Kohandatud lahendused', 'API juurdepääs', 'Spetsiaalne tugi']
            },
        ],
        useCases: [
            {
                title: 'Turundussisu loomine',
                description: 'Turundussisu loomine.'
            },
            {
                title: 'Automatiseeritud kirjutamine',
                description: 'Automatiseeritud kirjutamine.'
            },
            {
                title: 'Sisu optimiseerimine',
                description: 'Sisu optimiseerimine.'
            },
            {
                title: 'Loovtööde genereerimine',
                description: 'Loovtööde genereerimine.'
            },
        ],
    },

    'chatonai': {
        name: 'ChatOnAI',
        badges: [],
        tags: ['AI Tools', 'Freemium'],
        website: '',
        description: 'ChatOn on mitmekülgne digitaalne assistent, mis sujuvalt suurendab produktiivsust ja parandab suhtlust laia ülesannete spektris.',
        features: [
            {
                title: 'Edasijõudnud keelemudelid',
                description: 'Edasijõudnud keelemudelid.'
            },
            {
                title: 'Mitmekeelne tugi',
                description: 'Mitmekeelne tugi.'
            },
            {
                title: 'Konteksti säilitamine',
                description: 'Konteksti säilitamine.'
            },
            {
                title: 'Isikupärastatud vastused',
                description: 'Isikupärastatud vastused.'
            },
            {
                title: 'Integratsioon tööriistadega',
                description: 'Integratsioon tööriistadega.'
            },
        ],
        pricing: [
            {
                plan: 'Tasuta',
                price: '€0/kuu',
                features: ['Põhilised vestlused', 'Piiratud päringud']
            },
            {
                plan: 'Plus',
                price: '€12/kuu',
                features: ['Piiramatud vestlused', 'Premium mudelid', 'Prioriteetne tugi']
            },
            {
                plan: 'Pro',
                price: '€25/kuu',
                features: ['Kõik Plus funktsioonid', 'API juurdepääs', 'Kohandatud seaded']
            },
        ],
        useCases: [
            {
                title: 'Igapäevane produktiivsus',
                description: 'Igapäevane produktiivsus.'
            },
            {
                title: 'Teksti kirjutamine ja toimetamine',
                description: 'Teksti kirjutamine ja toimetamine.'
            },
            {
                title: 'Tõlkimine ja keeleabi',
                description: 'Tõlkimine ja keeleabi.'
            },
            {
                title: 'Ideede genereerimine',
                description: 'Ideede genereerimine.'
            },
        ],
    },

    'scispace': {
        name: 'SciSpace',
        badges: [],
        tags: ['AI Tools', 'Freemium'],
        website: '',
        description: 'SciSpace on edasijõudnud AI-põhine teadusuuringute assistent, mis kiirendab ja lihtsustab akadeemiliste uuringute protsessi.',
        features: [
            {
                title: 'Teadusartiklite analüüs',
                description: 'Teadusartiklite analüüs.'
            },
            {
                title: 'Uurimismeetodite soovitused',
                description: 'Uurimismeetodite soovitused.'
            },
            {
                title: 'Viidete ja tsitaatide haldus',
                description: 'Viidete ja tsitaatide haldus.'
            },
            {
                title: 'Koostööpõhised tööriistad',
                description: 'Koostööpõhised tööriistad.'
            },
            {
                title: 'Statistiliste andmete analüüs',
                description: 'Statistiliste andmete analüüs.'
            },
        ],
        pricing: [
            {
                plan: 'Tasuta',
                price: '€0/kuu',
                features: ['Piiratud analüüs', 'Põhilised funktsioonid']
            },
            {
                plan: 'Premium',
                price: '€20/kuu',
                features: ['Piiramatu analüüs', 'Täpsemad tööriistad', 'Prioriteetne tugi']
            },
            {
                plan: 'Institutsiooniline',
                price: 'Kohandatud',
                features: ['Meeskonna funktsioonid', 'Halduspaneel', 'Spetsiaalne tugi']
            },
        ],
        useCases: [
            {
                title: 'Akadeemiline uurimistöö',
                description: 'Akadeemiline uurimistöö.'
            },
            {
                title: 'Teadusartiklite kirjutamine',
                description: 'Teadusartiklite kirjutamine.'
            },
            {
                title: 'Literatuuri ülevaated',
                description: 'Literatuuri ülevaated.'
            },
            {
                title: 'Andmete analüüs ja tõlgendamine',
                description: 'Andmete analüüs ja tõlgendamine.'
            },
        ],
    },

    'gptforsheets': {
        name: 'GPT For Sheets',
        badges: [],
        tags: ['AI Tools', 'Freemium'],
        website: '',
        description: 'GPT for Sheets™ ja Docs™ on võimas produktiivsuse lisandmoodul, mis integreerib edasijõudnud keelemudelid otse Google tööriistadesse.',
        features: [
            {
                title: 'Otsene integratsioon Google Sheets ja Docs',
                description: 'Otsene integratsioon Google Sheets ja Docs.'
            },
            {
                title: 'Automaatne sisu genereerimine',
                description: 'Automaatne sisu genereerimine.'
            },
            {
                title: 'Andmete töötlemine ja analüüs',
                description: 'Andmete töötlemine ja analüüs.'
            },
            {
                title: 'Kohandatavad funktsioonid',
                description: 'Kohandatavad funktsioonid.'
            },
            {
                title: 'Hulgi töötlemise võimalused',
                description: 'Hulgi töötlemise võimalused.'
            },
        ],
        pricing: [
            {
                plan: 'Starter',
                price: '€8/kuu',
                features: ['Põhilised funktsioonid', '100 päringut kuus']
            },
            {
                plan: 'Pro',
                price: '€16/kuu',
                features: ['1000 päringut kuus', 'Premium funktsioonid', 'Prioriteetne tugi']
            },
            {
                plan: 'Business',
                price: '€40/kuu',
                features: ['Piiramatud päringud', 'Meeskonna funktsioonid', 'API juurdepääs']
            },
        ],
        useCases: [
            {
                title: 'Andmete analüüs ja aruandlus',
                description: 'Andmete analüüs ja aruandlus.'
            },
            {
                title: 'Sisu genereerimine tabelites',
                description: 'Sisu genereerimine tabelites.'
            },
            {
                title: 'Automatiseeritud töövood',
                description: 'Automatiseeritud töövood.'
            },
            {
                title: 'Hulgiandmete töötlemine',
                description: 'Hulgiandmete töötlemine.'
            },
        ],
    },

    'novelai': {
        name: 'Novel AI',
        badges: [],
        tags: ['Writing', 'Storytelling', 'Image Generation', 'Freemium'],
        website: 'https://novelai.net/',
        description: 'Spetsiaalne ilukirjanduse ja lugude kirjutamise tööriist koos pildigeneraatoriga.',
        features: [
            {
                title: 'Pildi genereerimine',
                description: 'AI-põhine illustratsioonide loomine, mis toetab erinevaid kunstistiile ja annab täieliku kontrolli visuaalse sisu üle.'
            },
            {
                title: 'Kirjutamise assisteerimine',
                description: 'Loominguline tekstigeneraator, mis aitab kirjutada lugusid, arendada tegelasi ja luua põnevaid süžeekäike.'
            },
            {
                title: 'Pikk konteksti mälu',
                description: 'Kuni 8192 märki mälu (Opus plaaniga), mis võimaldab AI-l mäletada pikki lugusid ja hoida jutustamise järjepidevust.'
            },
            {
                title: 'Mitmesugused žanrid',
                description: 'Toetab erinevaid kirjandusžanre - fantaasia, sci-fi, romaan, õudus ja palju muud.'
            },
        ],
        pricing: [
            {
                plan: 'Tasuta (Paper)',
                price: '€0',
                features: ['100 tasuta teksti genereerimise sammu', 'Proovimiseks mõeldud', 'Põhifunktsioonid']
            },
            {
                plan: 'Tablet',
                price: '€10/kuu',
                features: ['Piiramatu teksti genereerimine', '1024 märki mälu', 'Väike kogus pildigenererimise punkte']
            },
            {
                plan: 'Scroll',
                price: '€15/kuu',
                features: ['Piiramatu tekst', '2048 märki mälu', 'Rohkem pildigeneratsiooni']
            },
            {
                plan: 'Opus',
                price: '€25/kuu',
                features: ['Parim AI mudel (Kayra)', '8192 märki mälu', 'Piiramatu piltide genereerimine'],
                featured: true
            },
        ],
        useCases: [
            {
                title: 'Ilukirjanduse kirjutamine',
                description: 'Loo ja arenda pikki ilukirjanduslikke teoseid AI abiga, säilitades järjepidevuse ja stiili.'
            },
            {
                title: 'Interaktiivsete lugude loomine',
                description: 'Genereeri dünaamilisi lugusid, kus AI reageerib sinu valikutele ja viib lugu edasi.'
            },
            {
                title: 'Karakterite arendamine',
                description: 'Loo sügavad ja huvitavad tegelased koos tagalugude ja isiksuseomadustega.'
            },
        ],
    },

    'googlegemini': {
        name: 'Google Gemini',
        badges: ['Top Tier'],
        tags: ['Chat', 'LLM', 'Freemium'],
        website: '',
        description: 'Gemini on Google\'i järgmise põlvkonna personaalne assistendiplatvorm, mis on sujuvalt integreeritud mobiilseadmetesse ja Google\'i produktiivsustööriistadesse.',
        features: [
            {
                title: 'Mitmekeelse suhtluse tugi',
                description: 'Mitmekeelse suhtluse tugi.'
            },
            {
                title: 'Integreeritud Google teenustega',
                description: 'Integreeritud Google teenustega.'
            },
            {
                title: 'Edasijõudnud keelemudelid',
                description: 'Edasijõudnud keelemudelid.'
            },
            {
                title: 'Reaalajas vastused',
                description: 'Reaalajas vastused.'
            },
            {
                title: 'Kõikjal kättesaadav',
                description: 'Kõikjal kättesaadav.'
            },
        ],
        pricing: [
            {
                plan: 'Tasuta',
                price: '€0/kuu',
                features: ['Põhilised vestlused', 'Google integratsioon']
            },
            {
                plan: 'Gemini Advanced',
                price: '€20/kuu',
                features: ['Täpsemad mudelid', 'Prioriteetne tugi', 'Laiendatud funktsioonid']
            },
        ],
        useCases: [
            {
                title: 'Igapäevane produktiivsus',
                description: 'Igapäevane produktiivsus.'
            },
            {
                title: 'Teksti kirjutamine ja toimetamine',
                description: 'Teksti kirjutamine ja toimetamine.'
            },
            {
                title: 'Uurimistöö ja analüüs',
                description: 'Uurimistöö ja analüüs.'
            },
            {
                title: 'Loominguline kirjutamine',
                description: 'Loominguline kirjutamine.'
            },
        ],
    },

    'claude35': {
        name: 'Claude 3.5',
        badges: ['Top Tier'],
        tags: ['Chat', 'LLM', 'Freemium'],
        website: '',
        description: 'Claude on uusim vestlusassistent Anthropicult, mis pakub väga täpseid, kontekstitundlikke ja inimlaadseid vastuseid laia ülesannete spektris.',
        features: [
            {
                title: 'Edasijõudnud põhjendamisvõimed',
                description: 'Edasijõudnud põhjendamisvõimed.'
            },
            {
                title: 'Pikk konteksti mälu',
                description: 'Pikk konteksti mälu.'
            },
            {
                title: 'Ohutuse ja usaldusväärsuse fookus',
                description: 'Ohutuse ja usaldusväärsuse fookus.'
            },
            {
                title: 'Keerukate ülesannete lahendamine',
                description: 'Keerukate ülesannete lahendamine.'
            },
            {
                title: 'Mitmekeelne tugi',
                description: 'Mitmekeelne tugi.'
            },
        ],
        pricing: [
            {
                plan: 'Tasuta',
                price: '€0/kuu',
                features: ['Piiratud vestlused', 'Claude 3.5 Haiku']
            },
            {
                plan: 'Pro',
                price: '€20/kuu',
                features: ['Claude 3.5 Sonnet', 'Rohkem vestlusi', 'Prioriteetne ligipääs']
            },
            {
                plan: 'Team',
                price: '€30/kuu',
                features: ['Meeskonna funktsioonid', 'Täpsem kasutusanalüütika']
            },
        ],
        useCases: [
            {
                title: 'Akadeemiline uurimistöö',
                description: 'Akadeemiline uurimistöö.'
            },
            {
                title: 'Keerukate probleemide lahendamine',
                description: 'Keerukate probleemide lahendamine.'
            },
            {
                title: 'Loominguline kirjutamine',
                description: 'Loominguline kirjutamine.'
            },
            {
                title: 'Kood ja tehnilised ülesanded',
                description: 'Kood ja tehnilised ülesanded.'
            },
        ],
    },

    'indextts2': {
        name: 'IndexTTS 2',
        badges: [],
        tags: ['Speech', 'AI Audio', 'Text-to-Speech', 'Freemium'],
        website: '',
        description: 'IndexTTS2 on tööstustaseme kontrollitav ja tõhus zero-shot tekst-kõne süsteem, mis pakub läbimurret emotsionaalselt ekspressiivsetes kõnesünteesis.',
        features: [
            {
                title: 'Zero-shot tekst-kõne süntees',
                description: 'Zero-shot tekst-kõne süntees.'
            },
            {
                title: 'Emotsionaalne ekspressiivsus',
                description: 'Emotsionaalne ekspressiivsus.'
            },
            {
                title: 'Kestuse kontroll',
                description: 'Kestuse kontroll.'
            },
            {
                title: 'Tööstustaseme kvaliteet',
                description: 'Tööstustaseme kvaliteet.'
            },
            {
                title: 'Edasijõudnud häälemudel',
                description: 'Edasijõudnud häälemudel.'
            },
        ],
        pricing: [
            {
                plan: 'Tasuta',
                price: '€0/kuu',
                features: ['Avatud lähtekood', 'Piiramatu kasutus', 'Kogukonna tugi']
            },
        ],
        useCases: [
            {
                title: 'Professionaalne häälesüntees',
                description: 'Professionaalne häälesüntees.'
            },
            {
                title: 'Emotsionaalne narreerimine',
                description: 'Emotsionaalne narreerimine.'
            },
            {
                title: 'Audiobooks ja podcastid',
                description: 'Audiobooks ja podcastid.'
            },
            {
                title: 'Mängude hääletöö',
                description: 'Mängude hääletöö.'
            },
        ],
    },

    'f5tts': {
        name: 'F5-TTS',
        badges: ['Open Source'],
        tags: ['Speech', 'AI Audio', 'Text-to-Speech', 'Freemium', 'Open Source'],
        website: '',
        description: 'F5-TTS on tipptasemel avatud lähtekoodiga tekst-kõne platvorm, mis on loodud pakkuma väga loomulikku, ekspressiivset ja tugevat kõnesünteesi.',
        features: [
            {
                title: 'Mitte-autoregressiivne arhitektuur',
                description: 'Mitte-autoregressiivne arhitektuur.'
            },
            {
                title: 'Väga loomulik kõne',
                description: 'Väga loomulik kõne.'
            },
            {
                title: 'Ekspressiivne süntees',
                description: 'Ekspressiivne süntees.'
            },
            {
                title: 'Tugev jõudlus',
                description: 'Tugev jõudlus.'
            },
            {
                title: 'Kohandatav süsteem',
                description: 'Kohandatav süsteem.'
            },
        ],
        pricing: [
            {
                plan: 'Tasuta',
                price: '€0/kuu',
                features: ['Avatud lähtekood', 'Täielik funktsioonid', 'Kogukonna tugi']
            },
        ],
        useCases: [
            {
                title: 'Tekstist kõne tegemine',
                description: 'Tekstist kõne tegemine.'
            },
            {
                title: 'Hääleassistendid',
                description: 'Hääleassistendid.'
            },
            {
                title: 'Sisutootmine',
                description: 'Sisutootmine.'
            },
            {
                title: 'Ligipääsetavuse lahendused',
                description: 'Ligipääsetavuse lahendused.'
            },
        ],
    },

    'rvcvoiceconversion': {
        name: 'RVC Voice Conversion',
        badges: ['Open Source'],
        tags: ['Speech', 'AI Audio', 'Voice Conversion', 'Freemium', 'Open Source'],
        website: '',
        description: 'Retrieval-based Voice Conversion WebUI on võimas avatud lähtekoodiga platvorm reaalajas hääle teisendamiseks ja hääle kloonimiseks.',
        features: [
            {
                title: 'Reaalajas hääle teisendamine',
                description: 'Reaalajas hääle teisendamine.'
            },
            {
                title: 'Hääle kloonimine',
                description: 'Hääle kloonimine.'
            },
            {
                title: 'Veebi kasutajaliides',
                description: 'Veebi kasutajaliides.'
            },
            {
                title: 'Täpsed mudelid',
                description: 'Täpsed mudelid.'
            },
            {
                title: 'Laiaulatuslik tugi',
                description: 'Laiaulatuslik tugi.'
            },
        ],
        pricing: [
            {
                plan: 'Tasuta',
                price: '€0/kuu',
                features: ['Avatud lähtekood', 'Kõik funktsioonid', 'Kogukonna tugi']
            },
        ],
        useCases: [
            {
                title: 'Hääle muutmine mängudes',
                description: 'Hääle muutmine mängudes.'
            },
            {
                title: 'Sisutootmine',
                description: 'Sisutootmine.'
            },
            {
                title: 'Privaatsuse kaitse',
                description: 'Privaatsuse kaitse.'
            },
            {
                title: 'Loominguline väljendus',
                description: 'Loominguline väljendus.'
            },
        ],
    },

    'diabynari': {
        name: 'Dia by Nari',
        badges: ['Open Source'],
        tags: ['Speech', 'AI Audio', 'Text-to-Speech', 'Freemium', 'Open Source'],
        website: '',
        description: 'Dia on revolutsiooniline avatud lähtekoodiga tekst-kõne mudel Nari Labs\'ilt, mis genereerib väga realistlikku, emotsionaalselt rikast dialoogi tavatekstist.',
        features: [
            {
                title: '1.6B parameetriga mudel',
                description: '1.6B parameetriga mudel.'
            },
            {
                title: 'Emotsionaalselt rikas dialoog',
                description: 'Emotsionaalselt rikas dialoog.'
            },
            {
                title: 'Realistlik kõne',
                description: 'Realistlik kõne.'
            },
            {
                title: 'Tavateksti sisend',
                description: 'Tavateksti sisend.'
            },
            {
                title: 'Kõrge kvaliteet',
                description: 'Kõrge kvaliteet.'
            },
        ],
        pricing: [
            {
                plan: 'Tasuta',
                price: '€0/kuu',
                features: ['Avatud lähtekood', 'Täielik juurdepääs', 'Kogukonna tugi']
            },
        ],
        useCases: [
            {
                title: 'Dialoogi genereerimine',
                description: 'Dialoogi genereerimine.'
            },
            {
                title: 'Emotsionaalne narreerimine',
                description: 'Emotsionaalne narreerimine.'
            },
            {
                title: 'Interaktiivsed rakendused',
                description: 'Interaktiivsed rakendused.'
            },
            {
                title: 'Sisutootmine',
                description: 'Sisutootmine.'
            },
        ],
    },

    'wokadavoicechanger': {
        name: 'W-Okada Voice Changer',
        badges: ['Open Source'],
        tags: ['Speech', 'AI Audio', 'Text-to-Speech', 'Freemium', 'Open Source'],
        website: '',
        description: 'W-Okada Voice Changer on võimas avatud lähtekoodiga reaalajas hääle teisendamise tarkvara, mis võimaldab kasutajatel muuta oma häält reaalajas.',
        features: [
            {
                title: 'Reaalajas hääle muutmine',
                description: 'Reaalajas hääle muutmine.'
            },
            {
                title: 'Mängu integratsioon',
                description: 'Mängu integratsioon.'
            },
            {
                title: 'Voogedastuse tugi',
                description: 'Voogedastuse tugi.'
            },
            {
                title: 'Mitmed häälemudelid',
                description: 'Mitmed häälemudelid.'
            },
            {
                title: 'Madal latentsus',
                description: 'Madal latentsus.'
            },
        ],
        pricing: [
            {
                plan: 'Tasuta',
                price: '€0/kuu',
                features: ['Avatud lähtekood', 'Kõik funktsioonid', 'Regulaarsed uuendused']
            },
        ],
        useCases: [
            {
                title: 'Mängude striimimine',
                description: 'Mängude striimimine.'
            },
            {
                title: 'Voogedastus',
                description: 'Voogedastus.'
            },
            {
                title: 'Virtuaalsed kohtumised',
                description: 'Virtuaalsed kohtumised.'
            },
            {
                title: 'Loominguline sisu',
                description: 'Loominguline sisu.'
            },
        ],
    },

    'elevenlabs': {
        name: 'Eleven Labs',
        badges: [],
        tags: ['Speech', 'AI Audio', 'Text-to-Speech', 'Paid'],
        website: '',
        description: 'ElevenLabs on juhtiv tekst-kõne platvorm, mis pakub ülirealistlikku, emotsionaalselt ekspressiivset kõnesünteesi üle 32 keeles.',
        features: [
            {
                title: '32+ keele tugi',
                description: '32+ keele tugi.'
            },
            {
                title: 'Ülirealistlik kõne',
                description: 'Ülirealistlik kõne.'
            },
            {
                title: 'Emotsionaalne ekspressiivsus',
                description: 'Emotsionaalne ekspressiivsus.'
            },
            {
                title: 'API integratsioon',
                description: 'API integratsioon.'
            },
            {
                title: 'Kohandatud häälekujundus',
                description: 'Kohandatud häälekujundus.'
            },
        ],
        pricing: [
            {
                plan: 'Starter',
                price: '€1/kuu',
                features: ['10,000 tähemärki', '3 kohandatud häält']
            },
            {
                plan: 'Creator',
                price: '€22/kuu',
                features: ['100,000 tähemärki', '10 kohandatud häält', 'Kommertslik kasutus']
            },
            {
                plan: 'Pro',
                price: '€99/kuu',
                features: ['500,000 tähemärki', 'Piiramatud häälekloonid', 'Prioriteetne tugi']
            },
        ],
        useCases: [
            {
                title: 'Audiobooks',
                description: 'Audiobooks.'
            },
            {
                title: 'Podcastid',
                description: 'Podcastid.'
            },
            {
                title: 'Video narreerimine',
                description: 'Video narreerimine.'
            },
            {
                title: 'Klienditeeninduse automatiseerimine',
                description: 'Klienditeeninduse automatiseerimine.'
            },
        ],
    },

    'huggingface': {
        name: 'Hugging Face',
        badges: [],
        tags: ['Speech', 'AI Audio', 'Text-to-Speech', 'Freemium'],
        website: '',
        description: 'Hugging Face on terviklik platvorm, mis toimib masinõppe mudelite, andmekogude ja koostöötööriistade keskse keskusena.',
        features: [
            {
                title: 'Masinõppe mudelite hoidla',
                description: 'Masinõppe mudelite hoidla.'
            },
            {
                title: 'Andmekogude juurdepääs',
                description: 'Andmekogude juurdepääs.'
            },
            {
                title: 'Koostöötööriistad',
                description: 'Koostöötööriistad.'
            },
            {
                title: 'Arendajasõbralik API',
                description: 'Arendajasõbralik API.'
            },
            {
                title: 'Kogukonna tugi',
                description: 'Kogukonna tugi.'
            },
        ],
        pricing: [
            {
                plan: 'Tasuta',
                price: '€0/kuu',
                features: ['Avalikud mudelid', 'Põhilised funktsioonid', 'Kogukonna tugi']
            },
            {
                plan: 'Pro',
                price: '€9/kuu',
                features: ['Privaatsed repod', 'Täpsemad funktsioonid', 'Prioriteetne tugi']
            },
            {
                plan: 'Enterprise',
                price: 'Kohandatud',
                features: ['Ettevõtte lahendused', 'Kohandatud tugi', 'SLA garantii']
            },
        ],
        useCases: [
            {
                title: 'AI mudelite arendamine',
                description: 'AI mudelite arendamine.'
            },
            {
                title: 'Masinõppe uurimistöö',
                description: 'Masinõppe uurimistöö.'
            },
            {
                title: 'Prototüüpide loomine',
                description: 'Prototüüpide loomine.'
            },
            {
                title: 'AI rakenduste integreerimine',
                description: 'AI rakenduste integreerimine.'
            },
        ],
    },

    'aihubdiscord': {
        name: 'AI HUB Discord',
        badges: [],
        tags: ['Speech', 'AI Audio', 'Text-to-Speech', 'Freemium'],
        website: '',
        description: 'AI Hub on dünaamiline Discord kogukond, mis koondab tehisintellekti ja selle rakenduste vastu huvi tundvaid entusiaste, professionaale ja loojaid.',
        features: [
            {
                title: 'Aktiivne AI kogukond',
                description: 'Aktiivne AI kogukond.'
            },
            {
                title: 'Eksperdid ja entusiastid',
                description: 'Eksperdid ja entusiastid.'
            },
            {
                title: 'Uusimad AI uudised',
                description: 'Uusimad AI uudised.'
            },
            {
                title: 'Koostöö võimalused',
                description: 'Koostöö võimalused.'
            },
            {
                title: 'Õppimisressursid',
                description: 'Õppimisressursid.'
            },
        ],
        pricing: [
            {
                plan: 'Tasuta',
                price: '€0',
                features: ['Täielik ligipääs kogukonnale', 'Kõik vestlusroomid', 'Sündmused ja üritused']
            },
        ],
        useCases: [
            {
                title: 'AI kogukonnaga liitumine',
                description: 'AI kogukonnaga liitumine.'
            },
            {
                title: 'Teadmiste jagamine',
                description: 'Teadmiste jagamine.'
            },
            {
                title: 'Koostöö projektid',
                description: 'Koostöö projektid.'
            },
            {
                title: 'AI trendide jälgimine',
                description: 'AI trendide jälgimine.'
            },
        ],
    },

    'gemini3': {
        name: 'Gemini 3',
        badges: [],
        tags: ['Image Generation', 'Art', 'Freemium'],
        website: '',
        description: 'Gemini 3 on Google\'i kõige edasijõudnum AI mudel, mis on loodud ellu viima iga idee erakordse sügavuse ja nüansseeritusega.',
        features: [
            {
                title: 'Multimodaalne AI võimekus',
                description: 'Multimodaalne AI võimekus.'
            },
            {
                title: 'Erakordne sügavus ja täpsus',
                description: 'Erakordne sügavus ja täpsus.'
            },
            {
                title: 'Integreeritud Google teenustega',
                description: 'Integreeritud Google teenustega.'
            },
            {
                title: 'Edasijõudnud põhjendamisvõimed',
                description: 'Edasijõudnud põhjendamisvõimed.'
            },
            {
                title: 'Kohalik käivitamine',
                description: 'Kohalik käivitamine.'
            },
        ],
        pricing: [
            {
                plan: 'Tasuta',
                price: '€0',
                features: ['Avatud lähtekood', 'Kohalik kasutamine', 'Kogukonna tugi']
            },
            {
                plan: 'DreamStudio',
                price: '€10/kuu',
                features: ['Pilve juurdepääs', 'Kiirem genereerimine', 'Premium funktsioonid']
            },
        ],
        useCases: [
            {
                title: 'Kunstiloomine',
                description: 'Kunstiloomine.'
            },
            {
                title: 'Kontseptuaalne disain',
                description: 'Kontseptuaalne disain.'
            },
            {
                title: 'Digitaalkunst',
                description: 'Digitaalkunst.'
            },
            {
                title: 'Prototüüpide loomine',
                description: 'Prototüüpide loomine.'
            },
        ],
    },

    'artlist': {
        name: 'Artlist',
        badges: [],
        tags: ['Video Generation', 'AI Video', 'Freemium'],
        website: '',
        description: 'Artlist on kõik-ühes loomeplatvorm videosisu loojatele. Music & SFX, AI Suite (Veo 3, Sora 2, Nano Banana Pro), stock footage, video templates ja plugins. Alates €9.99/kuu.',
        features: [
            {
                title: 'Music & Sound Effects - üle 100,000 royalty-free',
                description: 'Music & Sound Effects - üle 100,000 royalty-free.'
            },
            {
                title: 'AI Suite (Veo 3, Sora 2, Nano Banana Pro)',
                description: 'AI Suite (Veo 3, Sora 2, Nano Banana Pro).'
            },
            {
                title: 'Stock footage library',
                description: 'Stock footage library.'
            },
            {
                title: 'Video templates ja LUTs',
                description: 'Video templates ja LUTs.'
            },
            {
                title: 'Commercial license - forever',
                description: 'Commercial license - forever.'
            },
        ],
        pricing: [
            {
                plan: 'Music & SFX',
                price: '€9.99/kuu',
                features: ['Music library', 'Stems', 'Sound effects', 'Premiere Pro extension']
            },
            {
                plan: 'AI Suite',
                price: '€10.28/kuu',
                features: ['AI videos (Veo 3, Sora 2)', 'AI images (Nano Banana Pro)', 'AI voiceovers']
            },
            {
                plan: 'Artlist Max',
                price: '€31.99/kuu',
                features: ['All AI tools', 'Music & SFX', 'Stock footage', 'Templates', 'LUTs', 'Plugins']
            },
        ],
        useCases: [
            {
                title: 'Video content creation (YouTube, Films)',
                description: 'Video content creation (YouTube, Films).'
            },
            {
                title: 'Professional production for agencies',
                description: 'Professional production for agencies.'
            },
            {
                title: 'AI-powered creative workflows',
                description: 'AI-powered creative workflows.'
            },
            {
                title: 'Commercial client projects',
                description: 'Commercial client projects.'
            },
        ],
    },

    'klingai': {
        name: 'Kling AI',
        badges: [],
        tags: ['Video Generation', 'AI Video', 'Freemium'],
        website: '',
        description: 'Kling AI on Kuaishou videogeneratsiooni platvorm. Text-to-video, image-to-video, Kling O1 multimodal model. Natural language interface.',
        features: [
            {
                title: 'Kling O1 - Multi-modal Visual Language',
                description: 'Kling O1 - Multi-modal Visual Language.'
            },
            {
                title: 'Text & Image to Video',
                description: 'Text & Image to Video.'
            },
            {
                title: 'Creative Studio - professional tools',
                description: 'Creative Studio - professional tools.'
            },
            {
                title: 'API Platform for developers',
                description: 'API Platform for developers.'
            },
            {
                title: 'Natural language interface',
                description: 'Natural language interface.'
            },
        ],
        pricing: [
            {
                plan: 'Free',
                price: 'Tasuta',
                features: ['Limited daily generations', 'Basic quality', 'Watermark']
            },
            {
                plan: 'Pro',
                price: 'Hind nõudmisel',
                features: ['More generations', 'HD quality', 'No watermark', 'Priority', 'Commercial use']
            },
            {
                plan: 'API',
                price: 'Pay-as-you-go',
                features: ['API integration', 'Scalable', 'Developer support']
            },
        ],
        useCases: [
            {
                title: 'Social media content (TikTok, Reels)',
                description: 'Social media content (TikTok, Reels).'
            },
            {
                title: 'Marketing videos ja product demos',
                description: 'Marketing videos ja product demos.'
            },
            {
                title: 'Creative AI video experimentation',
                description: 'Creative AI video experimentation.'
            },
            {
                title: 'Commercial video production',
                description: 'Commercial video production.'
            },
        ],
    },

    'kling25': {
        name: 'Kling 2.5',
        badges: [],
        tags: ['Video Generation', 'AI Video', 'Freemium'],
        website: '',
        description: 'Kling AI on Kuaishou videogeneratsiooni platvorm. Text-to-video, image-to-video, Kling O1 multimodal model. Natural language interface.',
        features: [
            {
                title: 'Kling O1 - Multi-modal Visual Language',
                description: 'Kling O1 - Multi-modal Visual Language.'
            },
            {
                title: 'Text & Image to Video',
                description: 'Text & Image to Video.'
            },
            {
                title: 'Creative Studio - professional tools',
                description: 'Creative Studio - professional tools.'
            },
            {
                title: 'API Platform for developers',
                description: 'API Platform for developers.'
            },
            {
                title: 'Natural language interface',
                description: 'Natural language interface.'
            },
        ],
        pricing: [
            {
                plan: 'Free',
                price: 'Tasuta',
                features: ['Limited daily generations', 'Basic quality', 'Watermark']
            },
            {
                plan: 'Pro',
                price: 'Hind nõudmisel',
                features: ['More generations', 'HD quality', 'No watermark', 'Priority', 'Commercial use']
            },
            {
                plan: 'API',
                price: 'Pay-as-you-go',
                features: ['API integration', 'Scalable', 'Developer support']
            },
        ],
        useCases: [
            {
                title: 'Social media content (TikTok, Reels)',
                description: 'Social media content (TikTok, Reels).'
            },
            {
                title: 'Marketing videos ja product demos',
                description: 'Marketing videos ja product demos.'
            },
            {
                title: 'Creative AI video experimentation',
                description: 'Creative AI video experimentation.'
            },
            {
                title: 'Commercial video production',
                description: 'Commercial video production.'
            },
        ],
    },

    'hunyuanvideo': {
        name: 'Hunyuan Video',
        badges: ['Open Source'],
        tags: ['Video Generation', 'AI Video', 'Freemium', 'Open Source'],
        website: '',
        description: 'HunyuanVideo, mille on välja töötanud Tencent, on läbimurdeline avatud lähtekoodiga tekst-video genereerimise raamistik, mis seab uued standardid generatiivse videotehnoloogia valdkonnas.',
        features: [
            {
                title: 'Avatud lähtekoodiga',
                description: 'Avatud lähtekoodiga.'
            },
            {
                title: 'Läbimurdeline tehnoloogia',
                description: 'Läbimurdeline tehnoloogia.'
            },
            {
                title: 'Kõrge kvaliteediga väljund',
                description: 'Kõrge kvaliteediga väljund.'
            },
            {
                title: 'Tencent\'i toetus',
                description: 'Tencent\'i toetus.'
            },
            {
                title: 'Kogukonna arendus',
                description: 'Kogukonna arendus.'
            },
        ],
        pricing: [
            {
                plan: 'Tasuta',
                price: '€0',
                features: ['Avatud lähtekood', 'Piiramatu kasutus', 'Kogukonna tugi']
            },
        ],
        useCases: [
            {
                title: 'Uurimistöö ja arendus',
                description: 'Uurimistöö ja arendus.'
            },
            {
                title: 'Kohandatud rakendused',
                description: 'Kohandatud rakendused.'
            },
            {
                title: 'Hariduslikud projektid',
                description: 'Hariduslikud projektid.'
            },
            {
                title: 'Eksperimentaalne videoloomine',
                description: 'Eksperimentaalne videoloomine.'
            },
        ],
    },

    'sora2': {
        name: 'Sora 2',
        badges: [],
        tags: ['Video Generation', 'AI Video', 'Freemium'],
        website: 'https://openai.com/index/sora-2/',
        description: 'Sora 2 on OpenAI uusim lipulaeva video ja heli genereerimise mudel, mis märgib olulist hüpet füüsiliselt täpse ja realistliku video sisu loomisel. See süsteem ületab varasemaid mudeleid, pakkudes keerulisi simulatsioone, mis jäädvustavad füüsikaseadusi nagu ujuvus ja jäikus märkimisväärse täpsusega, võimaldades vapustavaid visuaale nagu olümpiavõimlemise rutiinid. Selle edasijõudnud maailmasimulatsioonivõimed tagavad sügava arusaamise reaalsest füüsikast.',
        features: [
            {
                title: 'Füüsiliselt täpne video genereerimine realistliku füüsikasimulatsiooni ja objektide interaktsioonidega',
                description: 'Füüsiliselt täpne video genereerimine realistliku füüsikasimulatsiooni ja objektide interaktsioonidega.'
            },
            {
                title: 'Sünkroniseeritud dialoog ja heliefektid koos keerukate taustahelipiltide ja realistliku kõnega',
                description: 'Sünkroniseeritud dialoog ja heliefektid koos keerukate taustahelipiltide ja realistliku kõnega.'
            },
            {
                title: 'Kõrge kontrollitavus keeruliste mitme võtte juhiste järgimiseks ja maailma oleku säilitamiseks',
                description: 'Kõrge kontrollitavus keeruliste mitme võtte juhiste järgimiseks ja maailma oleku säilitamiseks.'
            },
            {
                title: 'Võimalus lisada reaalmaailma objekte genereeritud videostseenidesse täpse välimuse ja häälega',
                description: 'Võimalus lisada reaalmaailma objekte genereeritud videostseenidesse täpse välimuse ja häälega.'
            },
            {
                title: 'Sotsiaalne iOS rakendus loomise, remiksimise ja jagamise toetamiseks kohandatavate voogude ja \'cameos\' funktsiooniga',
                description: 'Sotsiaalne iOS rakendus loomise, remiksimise ja jagamise toetamiseks kohandatavate voogude ja \'cameos\' funktsiooniga.'
            },
            {
                title: 'Turvafunktsioonid: kasutaja voo juhtimine, teismeliste kasutuspiirangud, lapsevanem kontroll ja inimlik modereerimine',
                description: 'Turvafunktsioonid: kasutaja voo juhtimine, teismeliste kasutuspiirangud, lapsevanem kontroll ja inimlik modereerimine.'
            },
        ],
        pricing: [
            {
                plan: 'Tasuta',
                price: '€0',
                features: ['Algne tasuta juurdepääs', 'Põhilised funktsioonid'],
                featured: true
            },
            {
                plan: 'Tasuline',
                price: 'Tulekohane',
                features: ['Arvutusvõimsuse nõudluse haldamine', 'Laiendatud juurdepääs', 'Prioriteetne genereerimine']
            },
        ],
        useCases: [
            {
                title: 'Füüsiliselt täpne video sisu loomine',
                description: 'Füüsiliselt täpne video sisu loomine.'
            },
            {
                title: 'Professionaalne video tootmine',
                description: 'Professionaalne video tootmine.'
            },
            {
                title: 'Reklaamid ja turundus',
                description: 'Reklaamid ja turundus.'
            },
            {
                title: 'Hariduslikud ja loomingulised projektid',
                description: 'Hariduslikud ja loomingulised projektid.'
            },
        ],
    },

    'wan25': {
        name: 'Wan 2.5',
        badges: [],
        tags: ['Video Generation', 'AI Video', 'Freemium'],
        website: '',
        description: 'Wan 2.5 on edasijõudnud AI-põhine videogeneraator, mis muudab teksti või pildid professionaalse kvaliteediga videoteks sisseehitatud sünkroniseeritud heliga.',
        features: [
            {
                title: 'Tekst ja pilt videoks',
                description: 'Tekst ja pilt videoks.'
            },
            {
                title: 'Sünkroniseeritud heli',
                description: 'Sünkroniseeritud heli.'
            },
            {
                title: 'Professionaalne kvaliteet',
                description: 'Professionaalne kvaliteet.'
            },
            {
                title: 'Kiire genereerimine',
                description: 'Kiire genereerimine.'
            },
            {
                title: 'Integreeritud töövoog',
                description: 'Integreeritud töövoog.'
            },
        ],
        pricing: [
            {
                plan: 'Basic',
                price: '€25/kuu',
                features: ['20 videot kuus', 'HD kvaliteet']
            },
            {
                plan: 'Pro',
                price: '€75/kuu',
                features: ['100 videot kuus', '4K kvaliteet', 'Kohandatud heli']
            },
            {
                plan: 'Enterprise',
                price: '€200/kuu',
                features: ['Piiramatud videod', 'API integratsioon', 'Prioriteetne tugi']
            },
        ],
        useCases: [
            {
                title: 'Äri esitlused',
                description: 'Äri esitlused.'
            },
            {
                title: 'Turunduse kampaakniad',
                description: 'Turunduse kampaakniad.'
            },
            {
                title: 'Hariduslik sisu',
                description: 'Hariduslik sisu.'
            },
            {
                title: 'Sotsiaalmeedia postitused',
                description: 'Sotsiaalmeedia postitused.'
            },
        ],
    },

    'characterai': {
        name: 'Character AI',
        badges: [],
        tags: ['Chatbots', 'Roleplay', 'Freemium'],
        website: '',
        description: 'Character AI on interaktiivne platvorm, mis võimaldab kasutajatel luua, kohandada ja vestelda virtuaalsete karakteritega, mida juhivad edasijõudnud keelemudelid.',
        features: [
            {
                title: 'Kohandatavad AI karakterid',
                description: 'Kohandatavad AI karakterid.'
            },
            {
                title: 'Loomulikud vestlused',
                description: 'Loomulikud vestlused.'
            },
            {
                title: 'Rollimängude tugi',
                description: 'Rollimängude tugi.'
            },
            {
                title: 'Kogukonna loodud karakterid',
                description: 'Kogukonna loodud karakterid.'
            },
            {
                title: 'Mitmesugused žanrid',
                description: 'Mitmesugused žanrid.'
            },
        ],
        pricing: [
            {
                plan: 'Tasuta',
                price: '€0/kuu',
                features: ['Piiratud vestlused', 'Põhilised karakterid']
            },
            {
                plan: 'Plus',
                price: '€9.99/kuu',
                features: ['Prioriteetne ligipääs', 'Kiiremad vastused', 'Rohkem karaktereid']
            },
        ],
        useCases: [
            {
                title: 'Meelelahutuslik vestlus',
                description: 'Meelelahutuslik vestlus.'
            },
            {
                title: 'Rollimängud',
                description: 'Rollimängud.'
            },
            {
                title: 'Loominguline kirjutamine',
                description: 'Loominguline kirjutamine.'
            },
            {
                title: 'Keeleõpe',
                description: 'Keeleõpe.'
            },
        ],
    },

    'janitor': {
        name: 'JanitorAI',
        badges: [],
        tags: ['Chatbots', 'Roleplay', 'Freemium'],
        website: '',
        description: 'Janitor AI on mitmekülgne chatbot platvorm, mis võimaldab kasutajatel suhelda mitmesuguse AI-genereeritud karakteritega, muutes selle populaarseks nii meelelahutuse kui ka produktiivsuse jaoks.',
        features: [
            {
                title: 'Mitmekülgsed AI karakterid',
                description: 'Mitmekülgsed AI karakterid.'
            },
            {
                title: 'Rollimängude võimalused',
                description: 'Rollimängude võimalused.'
            },
            {
                title: 'Kohandatavad vestlused',
                description: 'Kohandatavad vestlused.'
            },
            {
                title: 'Kogukonna sisu',
                description: 'Kogukonna sisu.'
            },
            {
                title: 'Täiustatud AI mudelid',
                description: 'Täiustatud AI mudelid.'
            },
        ],
        pricing: [
            {
                plan: 'Tasuta',
                price: '€0/kuu',
                features: ['Piiratud sõnumid', 'Põhilised karakterid']
            },
            {
                plan: 'Pro',
                price: '€15/kuu',
                features: ['Piiramatud sõnumid', 'Premium karakterid', 'Kiirem vastamine']
            },
        ],
        useCases: [
            {
                title: 'Interaktiivsed rollimängud',
                description: 'Interaktiivsed rollimängud.'
            },
            {
                title: 'Virtuaalsed kaaslased',
                description: 'Virtuaalsed kaaslased.'
            },
            {
                title: 'Loominguline kirjutamine',
                description: 'Loominguline kirjutamine.'
            },
            {
                title: 'Meelelahutus',
                description: 'Meelelahutus.'
            },
        ],
    },

    'replika': {
        name: 'Replika',
        badges: [],
        tags: ['Chatbots', 'Roleplay', 'Freemium'],
        website: '',
        description: 'Tutvustame Replikat, AI kaaslast, kes on alati siin kuulama ja rääkima. Replika on AI chatbot, kes on innukas õppima ja nägema maailma su silmade läbi.',
        features: [
            {
                title: 'Isikupärastatud AI kaaslane',
                description: 'Isikupärastatud AI kaaslane.'
            },
            {
                title: 'Emotsionaalne tugi',
                description: 'Emotsionaalne tugi.'
            },
            {
                title: 'Õppiv algoritm',
                description: 'Õppiv algoritm.'
            },
            {
                title: '3D avatar',
                description: '3D avatar.'
            },
            {
                title: 'Igapäevased vestlused',
                description: 'Igapäevased vestlused.'
            },
        ],
        pricing: [
            {
                plan: 'Tasuta',
                price: '€0/kuu',
                features: ['Põhilised vestlused', 'Lihtne avatar']
            },
            {
                plan: 'Pro',
                price: '€7.99/kuu',
                features: ['Videokõned', 'Arenenud avatar', 'Rollimängud', 'Kohandatud vestlused']
            },
        ],
        useCases: [
            {
                title: 'Emotsionaalne tugi',
                description: 'Emotsionaalne tugi.'
            },
            {
                title: 'Igapäevased vestlused',
                description: 'Igapäevased vestlused.'
            },
            {
                title: 'Stress ja ärevuse vähendamine',
                description: 'Stress ja ärevuse vähendamine.'
            },
            {
                title: 'Suhtlemisoskuste arendamine',
                description: 'Suhtlemisoskuste arendamine.'
            },
        ],
    },

    'virtualgf': {
        name: 'VirtualGF',
        badges: [],
        tags: ['Chatbots', 'Roleplay', 'Paid'],
        website: '',
        description: 'VirtualGF on AI-põhine platvorm, mis on loodud kohandatavate virtuaalsete kaaslaste loomiseks, võimaldades kasutajatel osaleda tähendusrikkates ja isikupärastatud interaktsioonides.',
        features: [
            {
                title: 'Kohandatavad virtuaalsed kaaslased',
                description: 'Kohandatavad virtuaalsed kaaslased.'
            },
            {
                title: 'Realistlikud vestlused',
                description: 'Realistlikud vestlused.'
            },
            {
                title: 'Visuaalsed avatarid',
                description: 'Visuaalsed avatarid.'
            },
            {
                title: 'Isikupärastatud suhtlus',
                description: 'Isikupärastatud suhtlus.'
            },
            {
                title: 'Emotsionaalne side',
                description: 'Emotsionaalne side.'
            },
        ],
        pricing: [
            {
                plan: 'Basic',
                price: '€9.99/kuu',
                features: ['1 virtuaalne kaaslane', 'Põhilised vestlused']
            },
            {
                plan: 'Premium',
                price: '€19.99/kuu',
                features: ['Mitu kaaslast', 'Täpsemad vestlused', 'Kohandatud välimus']
            },
            {
                plan: 'Ultimate',
                price: '€39.99/kuu',
                features: ['Piiramatud kaaslased', 'Premium funktsioonid', 'Prioriteetne tugi']
            },
        ],
        useCases: [
            {
                title: 'Virtuaalsed suhted',
                description: 'Virtuaalsed suhted.'
            },
            {
                title: 'Emotsionaalne kaaslus',
                description: 'Emotsionaalne kaaslus.'
            },
            {
                title: 'Suhtlemisoskuste harjutamine',
                description: 'Suhtlemisoskuste harjutamine.'
            },
            {
                title: 'Meelelahutus',
                description: 'Meelelahutus.'
            },
        ],
    },

    'yourmove': {
        name: 'YourMove',
        badges: [],
        tags: ['Chatbots', 'Roleplay', 'Freemium'],
        website: '',
        description: 'YourMove on AI-põhine tutvumisassistent, mis on loodud parandama veebitutvumise kogemust, aidates kasutajatel luua kaasahaaravaid profiile ja hõlbustades tähendusrikkaid vestlusi.',
        features: [
            {
                title: 'AI tutvumisassistent',
                description: 'AI tutvumisassistent.'
            },
            {
                title: 'Profiili optimiseerimine',
                description: 'Profiili optimiseerimine.'
            },
            {
                title: 'Sõnumite soovitused',
                description: 'Sõnumite soovitused.'
            },
            {
                title: 'Vestluste analüüs',
                description: 'Vestluste analüüs.'
            },
            {
                title: 'Tutvumisstrateegiad',
                description: 'Tutvumisstrateegiad.'
            },
        ],
        pricing: [
            {
                plan: 'Tasuta',
                price: '€0/kuu',
                features: ['5 soovitust päevas', 'Põhilised funktsioonid']
            },
            {
                plan: 'Pro',
                price: '€14.99/kuu',
                features: ['Piiramatud soovitused', 'Profiili analüüs', 'Premium nõuanded']
            },
        ],
        useCases: [
            {
                title: 'Tutvumisappide optimeerimine',
                description: 'Tutvumisappide optimeerimine.'
            },
            {
                title: 'Sõnumite parandamine',
                description: 'Sõnumite parandamine.'
            },
            {
                title: 'Profiili täiustamine',
                description: 'Profiili täiustamine.'
            },
            {
                title: 'Tutvumisstrateegiate arendamine',
                description: 'Tutvumisstrateegiate arendamine.'
            },
        ],
    },

    'magicvest': {
        name: 'MagicVest',
        badges: [],
        tags: ['Finance', 'Investing', 'Paid'],
        website: '',
        description: 'MagicVest on tipptasemel krüpto intelligentsi tööriist, mis on loodud andma investoritele jõudu memecoin\'ide volatiilses maailmas. See kasutab tehisintellekti jõudu ennustamiseks.',
        features: [
            {
                title: 'Krüptovaluuta analüüs',
                description: 'Krüptovaluuta analüüs.'
            },
            {
                title: 'Memecoin\'ide jälgimine',
                description: 'Memecoin\'ide jälgimine.'
            },
            {
                title: 'AI-põhised ennustused',
                description: 'AI-põhised ennustused.'
            },
            {
                title: 'Volatiilsuse analüüs',
                description: 'Volatiilsuse analüüs.'
            },
            {
                title: 'Reaalajas andmed',
                description: 'Reaalajas andmed.'
            },
        ],
        pricing: [
            {
                plan: 'Basic',
                price: '€29/kuu',
                features: ['Põhilised analüüsid', '5 krüpto jälgimine']
            },
            {
                plan: 'Pro',
                price: '€99/kuu',
                features: ['Täpsemad ennustused', 'Piiramatu jälgimine', 'Signaalid']
            },
            {
                plan: 'Elite',
                price: '€299/kuu',
                features: ['Premium analüütika', 'API juurdepääs', 'Kohandatud hoiatused']
            },
        ],
        useCases: [
            {
                title: 'Krüptovaluuta investeerimine',
                description: 'Krüptovaluuta investeerimine.'
            },
            {
                title: 'Memecoin\'ide kauplemimine',
                description: 'Memecoin\'ide kauplemimine.'
            },
            {
                title: 'Turujälgimine',
                description: 'Turujälgimine.'
            },
            {
                title: 'Riskianalüüs',
                description: 'Riskianalüüs.'
            },
        ],
    },

    'stockgpt': {
        name: 'StockGPT',
        badges: [],
        tags: ['Finance', 'Investing', 'Freemium'],
        website: '',
        description: 'Tutvustame StockGPT-d, teie AI-põhist finantsteaduse assistenti. StockGPT abil saate hõlpsalt analüüsida ettevõtteid ja turge, kasutades AI tehnoloogiat.',
        features: [
            {
                title: 'AI-põhine finantsanalüüs',
                description: 'AI-põhine finantsanalüüs.'
            },
            {
                title: 'Ettevõtete uurimine',
                description: 'Ettevõtete uurimine.'
            },
            {
                title: 'Turuandmete töötlemine',
                description: 'Turuandmete töötlemine.'
            },
            {
                title: 'Finantsküsimuste vastamine',
                description: 'Finantsküsimuste vastamine.'
            },
            {
                title: 'Investeerimissoovitused',
                description: 'Investeerimissoovitused.'
            },
        ],
        pricing: [
            {
                plan: 'Tasuta',
                price: '€0/kuu',
                features: ['10 päringut päevas', 'Põhilised analüüsid']
            },
            {
                plan: 'Pro',
                price: '€19.99/kuu',
                features: ['Piiramatud päringud', 'Täpsemad analüüsid', 'Premium andmed']
            },
        ],
        useCases: [
            {
                title: 'Aktsiaanalüüs',
                description: 'Aktsiaanalüüs.'
            },
            {
                title: 'Investeerimissoovitused',
                description: 'Investeerimissoovitused.'
            },
            {
                title: 'Turuuuringud',
                description: 'Turuuuringud.'
            },
            {
                title: 'Ettevõtete hindamine',
                description: 'Ettevõtete hindamine.'
            },
        ],
    },

    'incite': {
        name: 'Incite AI',
        badges: [],
        tags: ['Finance', 'Investing', 'Paid'],
        website: '',
        description: 'Incite AI on edasijõudnud tehisintellekti platvorm, mis on loodud pakkuma finantsteadmusi aktsia- ja krüptovaluuta kauplemiseks. Incite AI südames on selle võimekus.',
        features: [
            {
                title: 'Aktsia- ja krüpto signaalid',
                description: 'Aktsia- ja krüpto signaalid.'
            },
            {
                title: 'Kauplemisstrateegiad',
                description: 'Kauplemisstrateegiad.'
            },
            {
                title: 'Riskihaldus',
                description: 'Riskihaldus.'
            },
            {
                title: 'Portfelli optimeerimine',
                description: 'Portfelli optimeerimine.'
            },
            {
                title: 'Reaalajas hoiatused',
                description: 'Reaalajas hoiatused.'
            },
        ],
        pricing: [
            {
                plan: 'Starter',
                price: '€49/kuu',
                features: ['Põhilised signaalid', '5 varade jälgimine']
            },
            {
                plan: 'Professional',
                price: '€149/kuu',
                features: ['Täpsemad signaalid', 'Piiramatu jälgimine', 'Kohandatud strateegiad']
            },
            {
                plan: 'Enterprise',
                price: '€399/kuu',
                features: ['Kõik funktsioonid', 'API juurdepääs', 'Prioriteetne tugi']
            },
        ],
        useCases: [
            {
                title: 'Aktsiakauplemimine',
                description: 'Aktsiakauplemimine.'
            },
            {
                title: 'Krüpto investeerimine',
                description: 'Krüpto investeerimine.'
            },
            {
                title: 'Portfelli haldamine',
                description: 'Portfelli haldamine.'
            },
            {
                title: 'Riskianalüüs',
                description: 'Riskianalüüs.'
            },
        ],
    },

    'avanz': {
        name: 'Avanzai',
        badges: [],
        tags: ['Finance', 'Investing', 'Freemium'],
        website: '',
        description: 'Avanzai on AI-põhine platvorm, mis on loodud sujuvdama finantsandmete analüüsi, võimaldades kasutajatel luua tootmisvalmis Python koodi loomulike keele abil.',
        features: [
            {
                title: 'Finantsandmete analüüs',
                description: 'Finantsandmete analüüs.'
            },
            {
                title: 'Python koodi genereerimine',
                description: 'Python koodi genereerimine.'
            },
            {
                title: 'Loomulik keele töötlus',
                description: 'Loomulik keele töötlus.'
            },
            {
                title: 'Tootmisvalmis kood',
                description: 'Tootmisvalmis kood.'
            },
            {
                title: 'Andmete visualiseerimine',
                description: 'Andmete visualiseerimine.'
            },
        ],
        pricing: [
            {
                plan: 'Tasuta',
                price: '€0/kuu',
                features: ['10 koodi genereerimist kuus', 'Põhilised funktsioonid']
            },
            {
                plan: 'Pro',
                price: '€39/kuu',
                features: ['Piiramatu kood', 'Täpsemad analüüsid', 'Export võimalused']
            },
        ],
        useCases: [
            {
                title: 'Finantsandmete analüüs',
                description: 'Finantsandmete analüüs.'
            },
            {
                title: 'Automatiseerimine',
                description: 'Automatiseerimine.'
            },
            {
                title: 'Aruandluse loomine',
                description: 'Aruandluse loomine.'
            },
            {
                title: 'Kvantitatiivne analüüs',
                description: 'Kvantitatiivne analüüs.'
            },
        ],
    },

    'tradt': {
        name: 'Tradt',
        badges: [],
        tags: ['Finance', 'Investing', 'Paid'],
        website: '',
        description: 'Tradt on terviklik AI-põhine kauplemisplatvorm, mis on kohandatud krüptovaluuta kauplejatele. See keskendub edasijõudnud signaalianalüüsi tööriistade pakkumisele.',
        features: [
            {
                title: 'Krüpto kauplemissignaalid',
                description: 'Krüpto kauplemissignaalid.'
            },
            {
                title: 'Tehnilise analüüsi tööriistad',
                description: 'Tehnilise analüüsi tööriistad.'
            },
            {
                title: 'Automatiseeritud kauplemimine',
                description: 'Automatiseeritud kauplemimine.'
            },
            {
                title: 'Portfelli jälgimine',
                description: 'Portfelli jälgimine.'
            },
            {
                title: 'Riskihalduse tööriistad',
                description: 'Riskihalduse tööriistad.'
            },
        ],
        pricing: [
            {
                plan: 'Basic',
                price: '€79/kuu',
                features: ['Põhilised signaalid', '3 vahetust']
            },
            {
                plan: 'Advanced',
                price: '€199/kuu',
                features: ['Täpsemad signaalid', 'Kõik vahetused', 'Automaatne kauplemimine']
            },
            {
                plan: 'Professional',
                price: '€399/kuu',
                features: ['Premium signaalid', 'API integratsioon', 'Kohandatud strateegiad']
            },
        ],
        useCases: [
            {
                title: 'Krüpto kauplemimine',
                description: 'Krüpto kauplemimine.'
            },
            {
                title: 'Signaalide jälgimine',
                description: 'Signaalide jälgimine.'
            },
            {
                title: 'Automatiseerimine',
                description: 'Automatiseerimine.'
            },
            {
                title: 'Portfelli optimeerimine',
                description: 'Portfelli optimeerimine.'
            },
        ],
    },

    'perplexity': {
        name: 'Perplexity',
        badges: [],
        tags: ['AI Search', 'Answer Engine', 'Research', 'Freemium'],
        website: 'https://www.perplexity.ai/',
        description: 'Perplexity on AI-põhine answer engine, mis annab reaalajas vastuseid ja lisab allikad, et saaksid infot kiiresti kontrollida.',
        features: [
            {
                title: 'AI Answer Engine with Sources',
                description: 'Küsi küsimus ja saa kokkuvõtlik vastus koos viidetega/allikatega, et info oleks kontrollitav.'
            },
            {
                title: 'Research Mode',
                description: 'Sügavamad uurimisvastused pikemate päringute jaoks. Pro paketis on “unlimited Research”.'
            },
            {
                title: 'File Uploads',
                description: 'Laadi fail üles “+ Attach” kaudu või drag-and-drop’iga ning lase Perplexityl faili sisu analüüsida thread’i kontekstis.'
            },
            {
                title: 'Thread Context',
                description: 'Jätkuküsimused samas vestluses hoiavad konteksti, et uurimine oleks samm-sammult.'
            }
        ],
        pricing: [
            {
                plan: 'Standard (Free)',
                price: '0 $/month',
                features: [
                    'Free AI-powered answer engine',
                    'Real-time answers',
                    'Source-backed responses'
                ]
            },
            {
                plan: 'Pro',
                price: '20 $/month',
                features: [
                    'Unlimited Research',
                    'Unlimited file uploads',
                    'Exclusive Pro Perks'
                ],
                featured: true
            }
        ],
    },

    'tensorart': {
        name: 'Tensor.Art',
        badges: [],
        tags: ['Image Generation', 'Model Hosting', 'Stable Diffusion', 'Freemium'],
        website: 'https://tensor.art/',
        description: 'Tensor.Art on tasuta online AI-pildigeneraator ja mudelite jagamise/hostimise platvorm, kus saad jooksutada mudeleid, genereerida pilte ning kasutada workflow’sid.',
        features: [
            {
                title: 'Online Image Generation',
                description: 'Genereeri pilte brauseris, kasutades kogukonna mudeleid ja erinevaid stiile.'
            },
            {
                title: 'Model Library & Hosting',
                description: 'Sirvi, kasuta ning hosti AI-mudeleid (nt checkpointid/LoRA-d) ja jaga neid teistega.'
            },
            {
                title: 'Workflows & Tools',
                description: 'Kasuta valmis workflow’sid ja AI tööriistu, et standardiseerida promptimine ja tulemuste tootmine.'
            },
            {
                title: 'Training Capabilities',
                description: 'Platvorm toetab ka mudelite treenimise/fine-tune’i võimalusi (sõltuvalt kontoõigustest ja krediitidest).'
            }
        ],
        pricing: [
            {
                plan: 'Free',
                price: '0 $/month',
                features: [
                    'Free access to the platform',
                    'Credit-based generation (usage depends on available credits)',
                    'Access to public models and workflows'
                ]
            },
            {
                plan: 'Monthly Pro Subscription',
                price: '9.9 $/month',
                features: [
                    'Pro subscription',
                    'Bonus: 1k credits'
                ],
                featured: true
            },
            {
                plan: 'Quarterly Pro Subscription',
                price: '19.9 $/quarter',
                features: [
                    'Pro subscription',
                    'Bonus: 5k credits'
                ]
            },
            {
                plan: 'Yearly Pro Subscription',
                price: '59.9 $/year',
                features: [
                    'Pro subscription',
                    'Bonus: 25k credits',
                    'Special offer pricing (listed as 50% off vs original price on the update page)'
                ]
            },
            {
                plan: 'Credits Packs',
                price: 'Varies',
                features: [
                    'One-time credit pack purchases (sizes depend on current store options)',
                    'Can be purchased multiple times'
                ]
            }
        ],
    },

    'perplexity': {
        name: 'Perplexity',
        badges: ['AI Search'],
        tags: ['AI Search', 'Research', 'Citations', 'Freemium'],
        website: 'https://www.perplexity.ai/',
        description: 'Perplexity on AI-otsingu ja uurimistöö tööriist, mis annab vastused koos allikaviidetega, toetab “focus” otsingurežiime ning sobib kiireks research’iks ja kokkuvõtete tegemiseks.',
        features: [
            { title: 'AI Search + citations', description: 'Vastused koos viidete ja allikatega, et saaksid kiiresti kontrollida, kust info pärineb.' },
            { title: 'Focus modes', description: 'Piira otsingut konkreetsele allikatüübile või veebile, et vähendada müra (nt “Academic”, “Web”).' },
            { title: 'Threads & follow-ups', description: 'Jätkuküsimused samas lõimes, et hoida kontekst ja liikuda samm-sammult tulemuse suunas.' }
        ],

        pricing: [
            {
                plan: 'Free',
                price: '0',
                features: ['Põhiotsing ja vastused', 'Allikaviited', 'Piiratud kasutus / mahud (varieerub)']
            },
            {
                plan: 'Pro',
                price: '$20/month',
                features: ['Rohkem kasutust ja võimekust', 'Kiirem / parem mudeli valik (varieerub)', 'Täiustatud funktsioonid'],
                featured: true
            }
        ]
    },

    'tensorart': {
        name: 'Tensor.Art',
        badges: ['Image Generation'],
        tags: ['AI Art', 'Image Generation', 'Models', 'Freemium'],
        website: 'https://tensor.art/',
        description: 'Tensor.Art on AI-pildigeneraatori platvorm mudelite ja workflow’dega (nt SD/LoRA-stiilis), kus saad genereerida, hallata mudeleid ning kasutada kogukonna jagatud seadeid.',
        features: [
            { title: 'Model & LoRA ecosystem', description: 'Vali ja kasuta erinevaid mudeleid, stiile ja LoRA-sid; impordi kogukonna preset’e.' },
            { title: 'Workflow-friendly generation', description: 'Toetab prompt/negatiivprompt, sampling seaded, upscale, batch, seed jms.' },
            { title: 'Community & sharing', description: 'Sirvi teiste töid, kopeeri seadeid ning loo oma “recipes”.' }
        ],

        pricing: [
            {
                plan: 'Free',
                price: '0',
                features: ['Põhigeneratsioon', 'Piiratud krediidid/päev', 'Kogukonna mudelid']
            },
            {
                plan: 'Pro',
                price: 'From ~$4.99/month (varies)',
                features: ['Rohkem krediite', 'Kiirem järjekord', 'Täiendavad funktsioonid (varieerub)'],
                featured: true
            }
        ]
    },

    'framepack': {
        name: 'FramePack',
        badges: ['Open Source'],
        tags: ['Video Generation', 'Diffusion', 'Research', 'Open Source'],
        website: 'https://github.com/lllyasviel/FramePack',
        description: 'FramePack on video-diffusion’i struktuur ja tööriist, mis “pakib” kaadrite konteksti konstantseks pikkuseks, et teha pikkade videote genereerimine praktilisemaks.',
        features: [
            { title: 'Packed frame context', description: 'Surub sisendkaadrite konteksti fikseeritud pikkuseks, et töökoormus ei kasvaks lineaarselt video pikkusega.' },
            { title: 'Progressive next-frame generation', description: 'Genereerib video järk-järgult järgmise kaadri/sektsiooni ennustamise loogikaga.' },
            { title: 'Anti-drift sampling', description: 'Sisaldab drift’i vähendamise ideid (nt ajas “tagurpidi” ankurdused), et hoida stabiilsust pikemal jooksuajal.' }
        ],
        pricing: [
            { plan: 'Open Source', price: 'Free', features: ['Kood ja mudelid (repo järgi)', 'Kohalik käivitamine', 'Kogukonna tugi'] },
            { plan: 'Hosted APIs', price: 'Varies', features: ['Teenusepakkuja hinnastus', 'Kiirem inference', 'Skaleeritavus'] }
        ]
    },

    'fliki': {
        name: 'Fliki',
        badges: ['Text-to-Video'],
        tags: ['Text to Video', 'AI Voice', 'Avatars', 'Freemium'],
        website: 'https://fliki.ai/',
        description: 'Fliki muudab teksti, blogipostitused või ideed kiiresti videoks koos AI-hääle ja meediateegiga.',
        features: [
            { title: 'Text/Blog to Video', description: 'Loo video skriptist, blogi URL-ist või ideest; lisa automaatselt stseenid ja visuaalid.' },
            { title: 'AI voiceovers', description: 'Sadu hääli ja keeli; sobib sotsiaalmeediale, YouTube’ile ja koolitustele.' },
            { title: 'Editor & assets', description: 'Sisseehitatud editor, stock-assetid, subtiitrid, lihtne export.' }
        ],
        pricing: [
            { plan: 'Free', price: '$0', features: ['Alustamiseks', 'Piiratud krediidid/minutid', 'Vesimärk (tavaliselt)'] },
            { plan: 'Standard', price: '$21/month (annual) or $28/month', features: ['Rohkem krediite', '1080p export', 'Commercial rights', 'No watermark'], featured: true },
            { plan: 'Premium', price: 'Higher tier (see pricing)', features: ['Veel rohkem krediite', 'Pikemad videod', 'Täiendavad pro-funktsioonid'] }
        ]
    },

    'edgehound': {
        name: 'Edge Hound',
        badges: ['Finance'],
        tags: ['Stock Research', 'Sentiment', 'Trade Ideas', 'Freemium'],
        website: 'https://www.edgehound.com/',
        description: 'Edge Hound on AI-põhine investeerimis- ja aktsiauuringu platvorm: vestlus, sentiment, “buzz” ja trade-idea’d koos põhjendustega.',
        features: [
            { title: 'AI investing chat', description: 'Küsi aktsiate/teemade kohta ja saa struktureeritud analüüs ning põhjendus.' },
            { title: 'Sentiment & buzz tracking', description: 'Uudiste ja sotsiaalse sentimenti jälgimine; “buzz talk” ajalugu.' },
            { title: 'Trade ideas & plans', description: 'Trade-ideed, ajalugu ja plaanid; watchlistid ja sündmused.' }
        ],
        pricing: [
            { plan: 'Free', price: '$0', features: ['Põhifunktsioonid', 'Piiratud watchlist/maht', 'Piiratud ajalugu'] },
            { plan: 'Standard', price: '$99/month', features: ['Rohkem watchliste', 'Rohkem trade-ideesid', 'Pikem ajalugu'], featured: true }
        ]
    },

    'craveu': {
        name: 'CraveU AI',
        badges: ['18+'],
        tags: ['Roleplay Chat', 'AI Companions', 'Mobile App', '18+'],
        website: 'https://craveu.ai/',
        description: 'CraveU AI on 18+ rollimängu/AI-seltskonna chat-rakendus, mis keskendub personaalsele karakteri- ja stsenaariumipõhisele vestlusele.',
        features: [
            { title: 'Character roleplay chat', description: 'Vestle AI-karakteritega erinevates rollimängu-stseenides ja stiilides.' },
            { title: 'Custom characters', description: 'Loo oma karaktereid prompt’i ja isiksuse seadistustega.' },
            { title: 'App-first experience', description: 'Mobiilne kasutus, kiired vestlused, järjepidev kontekst (varieerub).' }
        ],
        pricing: [
            { plan: 'Free', price: '0', features: ['Põhikasutus', 'Piirangud sõnumite/energiaga (varieerub)'] },
            { plan: 'Premium', price: 'In-app purchase', features: ['Rohkem sõnumeid/krediite', 'Täiendavad funktsioonid (varieerub)'], featured: true }
        ]
    },

    'makebelieve': {
        name: 'makebelieve',
        badges: ['AI Companions'],
        tags: ['AI Companions', 'Chat', 'Freemium', '18+ optional'],
        website: 'https://makebelieve.lol/',
        description: 'makebelieve pakub AI-digitaalseid kaaslasi pikaajalise mäluga — vestlus, emotsionaalne tugi ja “companions” loomine (sisu sõltub seadistustest).',
        features: [
            { title: 'Companions with memory', description: 'Kaaslased, kes mäletavad varasemaid vestlusi ja eelistusi.' },
            { title: 'Create your own companion', description: 'Ehita oma tegelane isiksuse ja rolli põhjal.' },
            { title: 'Lightweight web app', description: 'Kiire alustamine brauseris; lihtne chat UX.' }
        ],
        pricing: [
            { plan: 'Free', price: '0', features: ['Põhikasutus', 'Piirangud (varieerub)'] },
            { plan: 'Premium', price: 'Subscription (varies)', features: ['Rohkem kasutust', 'Täiendavad companion-funktsioonid'], featured: true }
        ]
    },

    'dittin': {
        name: 'Dittin AI',
        badges: ['18+'],
        tags: ['Roleplay Chat', 'AI Characters', 'Freemium', '18+'],
        website: 'https://dittin.ai/',
        description: 'Dittin AI on karakteripõhine rollimängu chat-platvorm (18+), kus saad luua ja kasutada personaalseid AI-tegelasi.',
        features: [
            { title: 'Character chat', description: 'Vestle AI-tegelastega erinevate rollimängu-stseenide jaoks.' },
            { title: 'Custom character builder', description: 'Loo oma tegelased isiksuse, tausta ja stiilireeglitega.' },
            { title: 'Community presets', description: 'Kasuta kogukonna tehtud tegelasi/preset’e (kui saadaval).' }
        ],
        pricing: [
            { plan: 'Free', price: '0', features: ['Põhikasutus', 'Piiratud mahud'] },
            { plan: 'Premium', price: 'Subscription (varies)', features: ['Rohkem sõnumeid/krediite', 'Prioriteet/kiirem'], featured: true }
        ]
    },

    'brainybear': {
        name: 'BrainyBear',
        badges: ['Customer Support'],
        tags: ['AI Agents', 'Website Chatbot', 'Lead Capture', 'Pay-as-you-go'],
        website: 'https://brainybear.ai/',
        description: 'BrainyBear aitab luua no-code AI-agente veebilehele ja kanalitesse (nt WhatsApp/Slack), et vastata küsimustele ning koguda leade.',
        features: [
            { title: 'AI agents trained on content', description: 'Treeni agent oma veebisisu/andmete peal, et anda täpseid vastuseid.' },
            { title: 'Multi-channel messaging', description: 'Integreeri kanalitega nagu WhatsApp, Slack või embed veebis.' },
            { title: 'Lead capture & handoff', description: 'Püüa kontaktid, eskaleeri inimesele, lisa “step-in” sõnumid.' }
        ],
        pricing: [
            { plan: 'Pay as you go', price: '$50 / 1,000 message credits', features: ['Krediidipõhine kasutus', 'Krediidid kehtivad pikalt (vaata tingimusi)'] },
            { plan: 'Remove branding add-on', price: '$59/month', features: ['Eemaldab BrainyBear branding’u agentidelt'], featured: true }
        ]
    },

    'beebee': {
        name: 'BeeBee AI',
        badges: ['Finance'],
        tags: ['Earnings Calls', 'Stock Research', 'Summaries', 'Paid'],
        website: 'https://beebee.ai/',
        description: 'BeeBee AI keskendub earnings call’ide ja ettevõtte raportite analüüsile: kokkuvõtted, võtmevõtud ja investorile mõeldud “takeaways”.',
        features: [
            { title: 'Earnings call analysis', description: 'Tõmbab välja põhiteemad, riskid, juhtkonna toonid ja numbrid.' },
            { title: 'Structured summaries', description: 'Kiired bulletid “what changed”, “guidance”, “risks/opportunities”.' },
            { title: 'Company coverage', description: 'Jälgi ettevõtteid ning võrdle perioode (kui saadaval).' }
        ],
        pricing: [
            { plan: 'Free', price: '0', features: ['Piiratud analüüsid', 'Põhifunktsioonid'] },
            { plan: 'Pro', price: '$6.99/month (reported)', features: ['Rohkem analüüse', 'Täiustatud tööriistad'], featured: true }
        ]
    },

    'avtaar': {
        name: 'Avtaar.ai',
        badges: ['Avatars'],
        tags: ['AI Avatars', 'Content Creation', 'Video', 'SaaS'],
        website: 'https://avtaar.ai/',
        description: 'Avtaar.ai on AI-avataride ja AI-sisu tööriist, mis aitab luua avataripõhiseid videoid/visuale ning automatiseerida sisu tootmist.',
        features: [
            { title: 'AI avatars', description: 'Loo avatarid ja kasuta neid turundus- või selgitusvideotes.' },
            { title: 'Script to video', description: 'Sisesta tekst/sõnum, genereeri avatariga klipp (võimalustega varieerub).' },
            { title: 'Brand-friendly output', description: 'Stiili ja “brand look” sobitamine preset’ide abil.' }
        ],
        pricing: [
            { plan: 'Starter', price: 'Varies', features: ['Põhifunktsioonid', 'Piiratud mahud'] },
            { plan: 'Business', price: 'Custom', features: ['Meeskonna funktsioonid', 'Skaleerimine', 'SLA'], featured: true }
        ]
    },

    'chatterbox': {
        name: 'Chatterbox TTS',
        badges: ['Text-to-Speech'],
        tags: ['TTS', 'Voice', 'Hugging Face', 'Reference Audio'],
        website: 'https://huggingface.co/spaces/ResembleAI/Chatterbox',
        description: 'Chatterbox on TTS tööriist/mudel, mis teeb tekstist loomuliku kõne ning võib kasutada reference-audiot hääle stiili sobitamiseks.',
        features: [
            { title: 'Natural TTS', description: 'Tekst → realistlik kõne (kasuta default häält või vali stiil).' },
            { title: 'Reference voice style', description: 'Lae üles näidisheli, et sobitada kõne “tone” ja kõla (kui toetatud).' },
            { title: 'Demo-first workflow', description: 'Lihtne testimine HuggingFace Spaces’is; sobib prototüübiks.' }
        ],
        pricing: [
            { plan: 'Free demo', price: '0', features: ['Spaces demo', 'Kogukonna kasutuspiirangud'] },
            { plan: 'API/Enterprise', price: 'Varies', features: ['Tootmiskasutus', 'SLA / mahud sõltuvad pakkujast'], featured: true }
        ]
    },

    'fynt': {
        name: 'Fynt',
        badges: ['Productivity'],
        tags: ['AI Assistant', 'Automation', 'Workflows', 'SaaS'],
        website: 'https://fynt.ai/',
        description: 'Fynt on töövoogudele suunatud AI-assistent, mis aitab automatiseerida korduvaid tegevusi ja koondada infot ühte kohta (funktsioonid sõltuvad paketist).',
        features: [
            { title: 'Workflow automation', description: 'Automatiseeri rutiinsed sammud mallide ja agentide abil.' },
            { title: 'Task & info hub', description: 'Keskne vaade ülesannetele, “notes” ja kokkuvõtetele.' },
            { title: 'Integrations', description: 'Ühendused tööriistadega (varieerub: email, docs, CRM jne).' }
        ],
        pricing: [
            { plan: 'Starter', price: 'Varies', features: ['Põhifunktsioonid', 'Piiratud integratsioonid'] },
            { plan: 'Team', price: 'Varies', features: ['Koostöö', 'Rohkem automatsioone'], featured: true }
        ]
    },

    'bagel': {
        name: 'Bagel AI',
        badges: ['Data'],
        tags: ['Product Intelligence', 'Analytics', 'AI Insights', 'SaaS'],
        website: 'https://bagel.ai/',
        description: 'Bagel AI keskendub toote- ja kliendiandmete “product intelligence” analüüsile: signaalid, insight’id ja soovitused otsuste tegemiseks.',
        features: [
            { title: 'AI insights on product data', description: 'Tuvastab mustrid kasutuses, tagasisides ja eventides; annab “what to do next” signaale.' },
            { title: 'Dashboards & metrics', description: 'Koondab KPI’d ja trendid; kiire drill-down segmentidesse.' },
            { title: 'Team collaboration', description: 'Jaga insight’e, lisa märkmeid ja tee otsused nähtavaks.' }
        ],
        pricing: [
            { plan: 'Starter', price: 'Custom', features: ['Sõltub andmemahust', 'Sõltub integratsioonidest'] },
            { plan: 'Enterprise', price: 'Custom', features: ['SLA', 'Turbevalikud', 'Skaleerimine'], featured: true }
        ]
    },

    'qwen3': {
        name: 'Qwen3',
        badges: ['Open Source'],
        tags: ['LLM', 'Open Source', 'Alibaba', 'Multilingual'],
        website: 'https://qwenlm.github.io/',
        description: 'Qwen3 on Alibaba Qwen perekonna avatud LLM, mida kasutatakse vestluseks, koodi/teksti genereerimiseks ja agentide ehitamiseks (mudeli variandid sõltuvad väljalaskest).',
        features: [
            { title: 'Multilingual LLM', description: 'Toetab mitut keelt ning sobib üldiseks tekstiloomeks ja Q&A jaoks.' },
            { title: 'Tool-use & agents', description: 'Hea alus agentidele, kus mudel kutsub tööriistu ja täidab ülesandeid.' },
            { title: 'Self-host friendly', description: 'Avatud mudelivariandid võimaldavad lokaalset/privaatset deploy’d.' }
        ],
        pricing: [
            { plan: 'Open Source', price: 'Free', features: ['Mudeli kasutus vastavalt litsentsile', 'Self-host'] },
            { plan: 'Hosted API', price: 'Varies', features: ['Pilvepõhine inference', 'Mahupõhine hinnastus'], featured: true }
        ]
    },

    'mypersonas': {
        name: 'MyPersonas',
        badges: ['Marketing'],
        tags: ['Buyer Personas', 'ICP', 'Go-to-Market', 'SaaS'],
        website: 'https://mypersonas.ai/',
        description: 'MyPersonas aitab luua ICP ja buyer persona profiile, et suunata turundust ja müüki selgemate segmentide ja sõnumitega.',
        features: [
            { title: 'Persona builder', description: 'Genereeri persona’d sisendi ja turuinfo põhjal; lisa valu-punktid ja eesmärgid.' },
            { title: 'ICP definition', description: 'Aitab määrata ideaalne kliendiprofiil, segmentide prioriteedid ja “fit” kriteeriumid.' },
            { title: 'Messaging support', description: 'Seob persona’d kanalite ja sõnumi-mallidega (varieerub).' }
        ],
        pricing: [
            { plan: 'Starter', price: 'Varies', features: ['Persona’d ja mallid', 'Piiratud eksport'] },
            { plan: 'Pro', price: 'Varies', features: ['Rohkem persona’sid', 'Koostöö', 'Eksport/integreerimine'], featured: true }
        ]
    },

    'hoops': {
        name: 'Hoops AI',
        badges: ['Finance'],
        tags: ['Investing', 'Stock Analysis', 'AI Chat', 'SaaS'],
        website: 'https://www.hoopsai.com/',
        description: 'Hoops AI pakub investeerimisanalüüsi ja ideede leidmist AI abil: küsimused, kokkuvõtted ja turuinfo struktureerimine.',
        features: [
            { title: 'AI market Q&A', description: 'Küsi ettevõtete/teemade kohta ning saa lühike, loogiline vastus.' },
            { title: 'Idea generation', description: 'Leiuta teemapõhiseid watchliste/ideid (risk sõltub turust).' },
            { title: 'Digest workflows', description: 'Kiired ülevaated ja kokkuvõtted uudistest/raportitest.' }
        ],
        pricing: [
            { plan: 'Free', price: '0', features: ['Põhikasutus', 'Piiratud mahud'] },
            { plan: 'Pro', price: 'Varies', features: ['Rohkem mahte', 'Täiendavad funktsioonid'], featured: true }
        ]
    },

    'verbatik': {
        name: 'Verbatik',
        badges: ['Voice'],
        tags: ['Text-to-Speech', 'Voice Cloning', 'API', 'Freemium'],
        website: 'https://verbatik.com/',
        description: 'Verbatik on TTS ja voice-cloning platvorm, mis teeb tekstist realistliku kõne ning toetab erinevaid keeli ja hääli.',
        features: [
            { title: 'Realistic TTS', description: 'Tekst → loomulik kõne; sobib videotele, podcastile, e-õppele.' },
            { title: 'Voice cloning', description: 'Klooni häält (paketist sõltuvalt) ja hoia brändi/karakteri järjepidevus.' },
            { title: 'API access', description: 'Integreeri TTS oma rakendusse (tavaliselt kõrgemates plaanides).' }
        ],
        pricing: [
            { plan: 'Free', price: '$0', features: ['Testimine', 'Piiratud mahud'] },
            { plan: 'Starter', price: '$9/month', features: ['Suurem maht', 'Paremad ekspordid'] },
            { plan: 'Pro', price: '$39/month', features: ['Veel suurem maht', 'Rohkem pro-funktsioone'], featured: true },
            { plan: 'Unlimited', price: '$99/month', features: ['Maksimaalne maht', 'Prioriteet'] }
        ]
    },

    'klevu': {
        name: 'Klevu',
        badges: ['E-commerce'],
        tags: ['Site Search', 'Product Discovery', 'Merchandising', 'Paid'],
        website: 'https://www.klevu.com/',
        description: 'Klevu on e-kaubanduse AI-otsingu ja discovery platvorm: otsing, kategooria navigeerimine, soovitused ja merch.',
        features: [
            { title: 'AI site search', description: 'Tüpokorrektsioon, sünonüümid, autocomplete, faceted search.' },
            { title: 'Merchandising tools', description: 'Boost reeglid, kampaaniad, kategooriate optimeerimine (paketist sõltuvalt).' },
            { title: 'Analytics', description: 'Otsingu- ja konversioonianalüütika, et parandada “zero result” kohti.' }
        ],
        pricing: [
            { plan: 'Premium', price: 'From ~$499/month', features: ['AI Search', 'Core analytics', 'Cloud'] },
            { plan: 'Premium Plus', price: 'From ~$799/month', features: ['Rohkem funktsioone/mahud', 'Suite add-ons'], featured: true }
        ]
    },

    'nosto': {
        name: 'Nosto',
        badges: ['E-commerce'],
        tags: ['Personalization', 'Recommendations', 'Merchandising', 'Enterprise'],
        website: 'https://www.nosto.com/',
        description: 'Nosto pakub e-kaubanduse personaliseerimist, soovitusi ja merchandising’ut, et tõsta konversiooni ja AOV-d.',
        features: [
            { title: 'Personalized recommendations', description: 'Soovitused ja “next best product” reeglid segmentide ja käitumise põhjal.' },
            { title: 'Merchandising & categories', description: 'Kategooriate järjestus, kampaania boost, automaatne sort.' },
            { title: 'Insights', description: 'Ostja käitumise insight’id ja segmentide jõudlus (sõltub paketist).' }
        ],
        pricing: [
            { plan: 'Growth', price: 'Custom', features: ['Sõltub GMV/trafficust', 'Core personalization'] },
            { plan: 'Enterprise', price: 'Custom', features: ['SLA', 'Advanced controls', 'Skaleerimine'], featured: true }
        ]
    },

    'copy': {
        name: 'Copy.ai',
        badges: ['GTM'],
        tags: ['Copywriting', 'Workflows', 'Go-to-Market', 'Paid'],
        website: 'https://www.copy.ai/',
        description: 'Copy.ai on GTM- ja sisuautomatsiooni platvorm: chat, agentid, workflow’d ja protsesside automatiseerimine müügi/turunduse jaoks.',
        features: [
            { title: 'Chat workspace', description: 'Kiire copy ja ideede genereerimine; projektid ja mallid.' },
            { title: 'Agents & workflows', description: 'Automatiseeri korduvad GTM ülesanded workflow-credit’ide ja agentidega.' },
            { title: 'Team scale', description: 'Suuremate tiimide jaoks turbe- ja skaleerimisvalikud (paketist sõltuvalt).' }
        ],
        pricing: [
            { plan: 'Chat', price: '$29/month', features: ['5 seats', 'Unlimited chat words', 'Access to multiple model providers'] },
            { plan: 'Agents', price: '$249/month', features: ['Up to ~10 seats', 'Workflow credits', 'Automation features'], featured: true },
            { plan: 'Growth', price: '$1,000/month', features: ['~75 seats', 'Higher workflow credits', 'Scale operations'] }
        ]
    },

    'alibabawan21': {
        name: 'Wan 2.1 (Alibaba)',
        badges: ['Open Source'],
        tags: ['Video Generation', 'Open Source', 'Diffusion', 'Model'],
        website: 'https://github.com/Wan-Video/Wan2.1',
        description: 'Wan 2.1 on Alibaba/Wan-Video avatud video genereerimise mudelipakett (self-host), mille variandid ja kasutus sõltuvad repo juhistest.',
        features: [
            { title: 'Video generation model family', description: 'Video loomine prompt’ist; mudelivariandid ja pipeline vastavalt repo’le.' },
            { title: 'Self-host deployment', description: 'Käivita lokaalselt või GPU serveris; kohanda inference seadeid.' },
            { title: 'Community updates', description: 'Uuendused, checkpoints ja näited GitHubis.' }
        ],
        pricing: [
            { plan: 'Open Source', price: 'Free', features: ['Self-host', 'Litsents repo järgi'] },
            { plan: 'Hosted', price: 'Varies', features: ['Kui kasutad kolmanda osapoole hosti/API'], featured: true }
        ]
    },

    'wan22': {
        name: 'Wan 2.2 (Alibaba)',
        badges: ['Open Source'],
        tags: ['Video Generation', 'Open Source', 'Diffusion', 'Model'],
        website: 'https://github.com/Wan-Video/Wan2.2',
        description: 'Wan 2.2 on Wan-Video uuem väljalase samas perekonnas, tuues mudeli- ja pipeline muudatusi vastavalt repo dokumentatsioonile.',
        features: [
            { title: 'Updated checkpoints', description: 'Uuemad mudelid/kaalud (vastavalt release notes’ile).' },
            { title: 'Inference recipes', description: 'Näited ja seaded, et saada parem kvaliteet ja stabiilsus.' },
            { title: 'Extensible pipeline', description: 'Võimalus kohandada pipeline’i ja töövoogusid.' }
        ],
        pricing: [
            { plan: 'Open Source', price: 'Free', features: ['Self-host', 'Litsents repo järgi'] },
            { plan: 'Hosted', price: 'Varies', features: ['Kui kasutad teenusena'], featured: true }
        ]
    },

    'robowork': {
        name: 'RoboWork',
        badges: ['Automation'],
        tags: ['AI Automation', 'Workflows', 'Ops', 'SaaS'],
        website: 'https://robowork.ai/',
        description: 'RoboWork keskendub tööprotsesside automatiseerimisele AI abil (agentid, töövood, integratsioonid) — et vähendada manuaalset tööd.',
        features: [
            { title: 'AI agents for ops', description: 'Agentid, mis täidavad korduvaid ülesandeid ja annavad kokkuvõtteid.' },
            { title: 'Integration-first', description: 'Ühendused tööriistadega (CRM, docs, email jms; paketist sõltuvalt).' },
            { title: 'Workflow builder', description: 'Ehitad sammud ja reeglid visuaalselt või mallidest.' }
        ],
        pricing: [
            { plan: 'Starter', price: 'Varies', features: ['Põhifunktsioonid', 'Piiratud integratsioonid'] },
            { plan: 'Business', price: 'Varies', features: ['Rohkem automatsioone', 'Meeskonna funktsioonid'], featured: true }
        ]
    },

    'hexoloop': {
        name: 'Hexoloop',
        badges: ['Support Automation'],
        tags: ['Customer Support', 'AI Resolution', 'Automation', 'SaaS'],
        website: 'https://www.hexoloop.com/',
        description: 'Hexoloop on AI-tugi platvorm, mis liigub “chatbotist” edasi automaatse probleemilahenduseni — eesmärk on lahendada piletid kiiremini ja vähemate käsitöö sammudega.',
        features: [
            { title: 'Autonomous resolution', description: 'Püüab lahendada kliendi mure automaatselt, mitte ainult vestelda.' },
            { title: 'Support workflow integration', description: 'Ühendub helpdesk’i ja protsessidega, et teha päris toiminguid.' },
            { title: 'Escalation & control', description: 'Eskalatsioon inimesele ja reeglid, et hoida kvaliteet ja turvalisus.' }
        ],
        pricing: [
            { plan: 'Team', price: 'Custom', features: ['Sõltub piletimahust ja integratsioonidest'] },
            { plan: 'Enterprise', price: 'Custom', features: ['SLA', 'Täiendav turve', 'Skaleerimine'], featured: true }
        ]
    },

    'nanobananapro': {
        name: 'Nano Banana Pro (Gemini)',
        badges: ['Image Generation'],
        tags: ['Image Generation', 'Photo Editing', 'Gemini', 'Pro'],
        website: 'https://gemini.google/overview/image-generation/',
        description: 'Nano Banana Pro on Gemini pildigeneraatori ja fototöötluse “pro” tase, mis rõhub täpsemale teksti renderdusele ja paremale kontrollile (nt kaamera nurk, valgustus).',
        features: [
            { title: 'Higher-quality image generation', description: 'Parendatud detailsus ja täpsus; sobib pro-tasemel visuaalideks.' },
            { title: 'Improved text rendering', description: 'Tugevam tekst pildil, vähem “gibberish” ja rohkem kontrolli.' },
            { title: 'Editing controls', description: 'Täpsemad edit’i tööriistad (nt valgustus, nurk, formaat) sõltuvalt ligipääsust.' }
        ],
        pricing: [
            { plan: 'Gemini access', price: 'Varies by Gemini subscription', features: ['Ligipääs sõltub sinu Gemini paketist/piirangutest'] },
            { plan: 'Pro/Enterprise', price: 'Varies', features: ['Suuremad limiidid ja funktsioonid'], featured: true }
        ]
    },

    'vue': {
        name: 'Vue.ai',
        badges: ['Enterprise'],
        tags: ['AI Orchestration', 'Enterprise', 'Automation', 'Platform'],
        website: 'https://www.vue.ai/',
        description: 'Vue.ai positsioneerib end enterprise AI “orchestration” platvormina, mis ühendab andmed ja äpisüsteemid üheks AI-kihiks äritulemuste jaoks.',
        features: [
            { title: 'AI orchestration layer', description: 'Ühendab andmeallikad ja tööriistad; AI teeb otsuseid ja automatiseerib samme.' },
            { title: 'Multi-hub platform', description: 'Platvormi “hubid” erinevate tiimide jaoks (IT/analytics/field jne; sõltub juurutusest).' },
            { title: 'Enterprise go-live', description: 'Fookus kiirel kasutuselevõtul ja mõõdetavatel KPI-del.' }
        ],
        pricing: [
            { plan: 'Enterprise', price: 'Custom', features: ['Juurutus ja integratsioonid', 'SLA', 'Turbevalikud'], featured: true },
            { plan: 'Pilot', price: 'Custom', features: ['Piiratud scope', 'Proof-of-value'] }
        ]
    },

    'inboxpilot': {
        name: 'InboxPilot',
        badges: ['Email'],
        tags: ['Cold Email', 'Inbox Management', 'Deliverability', 'SaaS'],
        website: 'https://www.inboxpilot.co/',
        description: 'InboxPilot aitab automatiseerida e-maili töövooge (nt outreach, haldus, deliverability) ning hoida “inbox” tervena skaleerimisel.',
        features: [
            { title: 'Inbox operations', description: 'Töövood e-kirjade halduseks ja automaatseks triage’iks (paketist sõltuvalt).' },
            { title: 'Outreach support', description: 'Kampaaniad, mallid ja jälgimine (varieerub).' },
            { title: 'Deliverability hygiene', description: 'Soojendus/tervisereeglid ja jälgimine (kui saadaval).' }
        ],
        pricing: [
            { plan: 'Starter', price: 'Varies', features: ['Põhifunktsioonid', 'Piiratud mahud'] },
            { plan: 'Pro', price: 'Varies', features: ['Rohkem kontosid', 'Rohkem automatsioone'], featured: true }
        ]
    },

    'domyshoot': {
        name: 'DoMyShoot',
        badges: ['E-commerce'],
        tags: ['Product Photography', 'AI Editing', 'Catalog', 'Mobile'],
        website: 'https://domyshoot.com/',
        description: 'DoMyShoot on toote-foto tööriist e-kaubandusele: pildista, puhasta taust, ühtlusta kataloog ja tee kiireid batch-toimetusi.',
        features: [
            { title: 'Catalog-ready product shots', description: 'Kiire pildistamine ja standardiseerimine e-poe jaoks.' },
            { title: 'Background removal & edits', description: 'Tausta eemaldus, lihtne retušeerimine ja “clean” look.' },
            { title: 'Batch workflows', description: 'Töötle mitut toodet korraga; kiirem listingute valmistamine.' }
        ],
        pricing: [
            { plan: 'Mobile subscription', price: 'Varies', features: ['Paketid sõltuvad piirkonnast ja mahust'] },
            { plan: 'Business', price: 'Custom', features: ['Tiimid, mahud, SLA'], featured: true }
        ]
    },

    'phrasee': {
        name: 'Jacquard (formerly Phrasee)',
        badges: ['Marketing'],
        tags: ['Brand Messaging', 'Email/SMS Copy', 'Optimization', 'Enterprise'],
        website: 'https://www.jacquard.com/',
        description: 'Phrasee on rebranditud Jacquard’iks — AI platvorm brändikeele genereerimiseks ja optimeerimiseks emaili/SMS/push sõnumites suurel skaalal.',
        features: [
            { title: 'Brand-compliant generation', description: 'Genereerib variatsioone, hoides toonireeglid ja “brand voice” piirangud.' },
            { title: 'Optimization & testing', description: 'Aitab ennustada/optimeerida sõnumi performantsi (nt CTR) andmete põhjal.' },
            { title: 'Enterprise workflows', description: 'Sobib tiimidele, kus vaja audit’i, protsesse ja kooskõlastusi.' }
        ],
        pricing: [
            { plan: 'Enterprise', price: 'Custom', features: ['Demo/POC', 'Juurutus ja integratsioonid', 'SLA'], featured: true },
            { plan: 'Legacy Phrasee', price: 'Invite-only', features: ['Võib eksisteerida legacy login (kui sul on konto)'] }
        ]
    },

    'octane': {
        name: 'Octane AI',
        badges: ['E-commerce'],
        tags: ['Quizzes', 'Personalization', 'Shopify', 'AI Funnels'],
        website: 'https://octaneai.com/',
        description: 'Octane AI aitab teha tootequiz’e ja AI-funneleid, et koguda zero-party data ja tõsta konversiooni Shopify poodides.',
        features: [
            { title: 'Product quizzes', description: 'Interaktiivsed quiz’id, mis suunavad ostjat õige tooteni.' },
            { title: 'AI-powered personalization', description: 'Kasutab krediite/AI loogikat, et personaliseerida teekond ja soovitused.' },
            { title: 'Shopify-friendly', description: 'Disainitud Shopify brändidele; integreerub turunduse tööriistadega (varieerub).' }
        ],
        pricing: [
            { plan: 'Basic', price: '$50/month', features: ['Quiz + pop-ups', 'AI credits (piiratud)', 'Trial'] },
            { plan: 'Plus', price: '$200/month', features: ['Rohkem funktsioone', 'Rohkem AI credits'], featured: true },
            { plan: 'Growth', price: '$500/month', features: ['Scaled credits', 'Account support (tüüpiliselt)'] },
            { plan: 'Unlimited', price: 'From $2,000/month', features: ['Kõrged mahud', 'Demo/quote'] }
        ]
    },

    'aidaptive': {
        name: 'Aidaptive',
        badges: ['E-commerce', 'Enterprise'],
        tags: ['Personalization', 'Predictive Recommendations', 'Predictive Search', 'Predictive Pricing'],
        website: 'https://aidaptive.com/',
        description: 'Aidaptive on autonoomne AI-personaliseerimise platvorm digitaalsele kaubandusele ja hospitality’le, mis loob 1:1 relevantsi (soovitused, publikud, otsing, hinnastus) reaalajas.',
        features: [
            {
                title: 'Predictive Recommendations',
                description: 'Personaliseeritud tootesoovitused ja “next best” pakkumised, et tõsta konversiooni ja AOV-d.'
            },
            {
                title: 'Predictive Audiences',
                description: 'Prognoosivad publikud/segmendid, et sihtida turundust ja pakkumisi tõenäosuspõhiselt.'
            },
            {
                title: 'Predictive Search',
                description: 'AI-põhine otsing, mis tõstab relevantsi ja vähendab “zero results” olukordi.'
            },
            {
                title: 'Predictive Pricing',
                description: 'Hinnastamise optimeerimine ML-i abil, et parandada marginaali ja müüki (use-case’i põhine).'
            },
            {
                title: 'Hospitality personalization',
                description: 'Personaliseerimine hospitality brändidele, et suurendada otseseid broneeringuid ja booking value’t.'
            }
        ],
        pricing: [
            {
                plan: 'Enterprise',
                price: 'Custom',
                features: [
                    'Contact sales / custom rollout',
                    'Sõltub integratsioonidest ja mahust',
                    'Enterprise-level support (varieerub)'
                ],
                featured: true
            },
            {
                plan: 'Shopify app install',
                price: 'Free to install (Shopify)',
                features: [
                    'Shopify App Store’is “free to install” kirje',
                    'Teenuse tegelik hinnastus võib sõltuda lepingust/mahust'
                ]
            }
        ]
    },


    'jasper': {
        name: 'Jasper',
        badges: ['Marketing'],
        tags: ['AI Copywriting', 'Brand Voice', 'Marketing', 'Paid'],
        website: 'https://www.jasper.ai/',
        description: 'Jasper on turundusele ehitatud AI sisuplatvorm, mis rõhub brändihäälele, kampaaniatele ja meeskonna töövoogudele.',
        features: [
            { title: 'Brand voice & knowledge', description: 'Hoia toon ja terminid kooskõlas brändiga; kasuta “knowledge assets”.' },
            { title: 'Marketing workflows', description: 'Mallid ja tööriistad kampaaniateks, reklaamideks, blogideks, landing’uteks.' },
            { title: 'Team collaboration', description: 'Koostöö ja õigused; enterprise kontrollid Business plaanis.' }
        ],
        pricing: [
            { plan: 'Creator', price: '$49/month or $39/month (annual)', features: ['Solopreneur/creator', 'Core writing features'] },
            { plan: 'Pro', price: '$69/month or $59/month (annual)', features: ['Teams & collaboration', 'Advanced features'], featured: true },
            { plan: 'Business', price: 'Custom', features: ['Enterprise controls', 'Security', 'Support'] }
        ]
    },

    'kits': {
        name: 'Kits AI',
        badges: ['Audio'],
        tags: ['Voice Conversion', 'Singing', 'AI Vocals', 'Freemium'],
        website: 'https://www.kits.ai/',
        description: 'Kits AI pakub stuudiokvaliteediga AI-vokaali tööriistu: voice conversion, generatiivsed vokaalid, separatsioon ja muud muusikatöövood.',
        features: [
            { title: 'Voice conversion', description: 'Konverteeri vokaal teise hääle stiili; sobib demo’deks ja produktsiooniks (reeglid paketist sõltuvalt).' },
            { title: 'Generative vocals', description: 'Loo AI-vokaale ja harmooniaid; kombineeri teiste tööriistadega.' },
            { title: 'Developer APIs', description: 'API-d voice conversion’i, separatsiooni ja TTS-i jaoks (kui kasutad arenduses).' }
        ],
        pricing: [
            { plan: 'Free', price: '$0/month', features: ['~15 conversion minutes', 'Eksperimenteerimiseks'] },
            { plan: 'Converter', price: '$11.99/month (reported)', features: ['Unlimited conversions', 'Piiratud WAV download minutes'] },
            { plan: 'Professional', price: '$60/month', features: ['Pro workflow’d', 'Suuremad limiidid', 'Kõik Producer funktsioonid'], featured: true }
        ]
    },
    'prisync': {
        name: 'Prisync',
        badges: ['E-commerce', 'Dynamic Pricing'],
        tags: ['Competitor Price Tracking', 'Dynamic Pricing', 'Price Monitoring', 'E-commerce'],
        website: 'https://prisync.com/',
        description: 'Prisync on e-kaubanduse konkurentide hinnajälgimise ja dünaamilise hinnastamise tarkvara. Jälgib konkurentide hindu ning laoseisu, saadab teavitusi ja võimaldab hinnareeglitega automaatset hinnamuutust.',
        features: [
            {
                title: 'Competitor Price Monitoring',
                description: 'Monitoorib konkurentide hinnamuutusi ja laoseisu infot, et näha oma positsiooni turul ja reageerida kiiremini.'
            },
            {
                title: 'Dynamic Pricing Engine',
                description: 'Automatiseeri hinnastamine reeglitega (kulupõhine ja konkurendipõhine), et hoida hinnad “dünaamilised” ja konkurentsivõimelised.'
            },
            {
                title: 'Alerts & Notifications',
                description: 'Hinnamuutuste teavitused emailiga (päevased või kohesed plaanist sõltuvalt), et kriitilisi muutusi mitte maha magada.'
            },
            {
                title: 'Reporting & Export',
                description: 'Aruanded ja analüütika (nt hinnapositsiooni võrdlus), lisaks Excel raportite eksport töövoogudeks.'
            },
            {
                title: 'Marketplace & Channel Tracking',
                description: 'Toetab ka marketplace’i hinnajälgimist (plaanist sõltuvalt), et võrrelda hindu eri kanalites.'
            }
        ],
        pricing: [
            {
                plan: 'Professional',
                price: '99 $/month',
                features: [
                    'Unlimited competitors',
                    'Price updates 3 times a day',
                    'Excel reports',
                    'Price position comparison',
                    'Stock availability monitoring',
                    'Free trial available (no credit card required)'
                ]
            },
            {
                plan: 'Premium',
                price: '199 $/month',
                features: [
                    'Dynamic pricing engine',
                    'Daily email notifications',
                    'Marketplace price tracking',
                    'Product variant price tracking',
                    'API access available (API access may add +20% fee on top of monthly plan)',
                    'Free trial available (no credit card required)'
                ],
                featured: true
            },
            {
                plan: 'Platinum',
                price: '399 $/month',
                features: [
                    'Instant email notifications',
                    'Price history',
                    'Supplier features (MAP monitoring, recommended price module)',
                    'API access available (API access may add +20% fee on top of monthly plan)',
                    'Free trial available (no credit card required)'
                ]
            },
            {
                plan: 'Shopify App (Prisync AI | Dynamic Pricing)',
                price: '399 $/month',
                features: [
                    'Up to 5,000 products/variants (as listed on Shopify)',
                    'Price history',
                    'Instant price change notifications',
                    'Advanced pricing reports & analytics',
                    'Optional add-ons: +200 $/month (channel-based tracking), +400 $/month (hybrid model tracking) (as listed on Shopify)',
                    '14-day free trial (Shopify listing)'
                ]
            }
        ]
    },

    'shopifymagic': {
        name: 'Shopify Magic',
        badges: ['Built-in Shopify AI'],
        tags: ['E-commerce', 'AI Copywriting', 'Shopify', 'Product Descriptions', 'Email Marketing'],
        website: 'https://www.shopify.com/magic',
        description: 'Shopify Magic on Shopify sisse-ehitatud AI-tekstigeneraator, mis aitab e-kaubanduses kiiremini kirjutada ja kohandada sisu — nt tootekirjeldused, emaili subject/body ja kliendivestluste vastused Shopify Inboxis.',
        features: [
            {
                title: 'AI Product Descriptions',
                description: 'Genereeri või kirjuta ümber tootekirjeldusi Shopify Adminis, kasutades sisendina toote pealkirja ja märksõnu ning lisades “tone”/instruktsioonid.'
            },
            {
                title: 'Shopify Email Subject + Body Generation',
                description: 'Shopify Email / Messaging kampaaniate loomisel genereeri automaatselt subject line ja emaili sisu ning kohanda seda oma brändihäälele.'
            },
            {
                title: 'Shopify Inbox Suggested Replies',
                description: 'Genereeri personaalseid vastuseid kliendi küsimustele Shopify Inboxis, et vastata kiiremini ja ühtlasema tooniga.'
            },
            {
                title: 'Online store copy suggestions',
                description: 'Loo tekstiettepanekuid nagu pealkirjad ja muud poe tekstiosad Shopify’s, et kiirendada copywriting’u tööd.'
            },
            {
                title: 'FAQ content suggestions',
                description: 'Genereeri FAQ stiilis sisu poe jaoks, et vähendada korduvaid küsimusi ja tõsta info leitavust.'
            }
        ],
        pricing: [
            {
                plan: 'Included with Shopify',
                price: 'Varies by Shopify plan',
                features: [
                    'Kasutatav Shopify Adminis (seal, kus funktsioon on saadaval)',
                    'Tootekirjelduste genereerimine Products vaates',
                    'Emaili subject/body genereerimine Shopify Emailis',
                    'Kliendivastuste genereerimine Shopify Inboxis'
                ],
                featured: true
            }
        ]
    },

};

const kasutusviisidByTool = {
    'perplexity': [
        { title: 'Kiire research', description: 'Leia vastused ja allikad kiiresti, et teha uurimistööd ja kontrollida fakte.' },
        { title: 'Konkurendi ja turu ülevaade', description: 'Koosta kiire turu/konkurendi kokkuvõte, et võrrelda valikuid ja trende.' },
        { title: 'Kokkuvõtted ja outline’id', description: 'Tee pikkadest teemadest lühikokkuvõte või struktuur (outline) enne kirjutamist.' }
    ],

    'tensorart': [
        { title: 'Kontseptsioonipildid', description: 'Loo ideekunst ja stiilivariatsioonid (character, environment, product moodboard).' },
        { title: 'Sotsiaalmeedia visuaalid', description: 'Genereeri postituste visuaale ja bannereid, et testida erinevaid stiile.' },
        { title: 'Mudelite katsetamine', description: 'Testi erinevaid mudeleid/LoRA-sid ja seadeid, et leida parim “look”.' }
    ],

    'framepack': [
        { title: 'Pikema video prototüüp', description: 'Eksperimenteeri pikemate AI-video klippidega, kui tahad ajas stabiilsemat tulemust.' },
        { title: 'Uurimis- ja R&D testid', description: 'Katseta video-diffusion pipeline’e ja sampling ideid teaduslikuks võrdluseks.' },
        { title: 'Animatsiooniloopid', description: 'Loo lühikesi loop’e ja B-roll tüüpi liikuvaid klippe disaini prototüübiks.' }
    ],

    'fliki': [
        { title: 'Blogi → video', description: 'Muuda blogipostitus või skript automaatselt videoks koos stseenide ja häälega.' },
        { title: 'Sotsiaalmeedia klipid', description: 'Tee lühivideod Reels/TikTok/Shorts jaoks kiiresti ühest tekstist.' },
        { title: 'Õppe- ja juhendvideod', description: 'Loo e-õppe või tootejuhendi videoid AI-voiceover’i ja subtiitritega.' }
    ],

    'edgehound': [
        { title: 'Aktsia “quick check”', description: 'Tee kiire ülevaade ettevõttest, katalüsaatoritest ja riskidest.' },
        { title: 'Sentimendi jälgimine', description: 'Vaata, kuidas uudised ja “buzz” võivad mõjutada lühiajalist huvi.' },
        { title: 'Ideede avastamine', description: 'Leia watchlist’i ideid ja teemasid, et edasi käsitsi analüüsida.' }
    ],

    'hoops': [
        { title: 'Turu “digest”', description: 'Koosta kiire kokkuvõte turu teemadest, sektoritest ja ettevõtetest.' },
        { title: 'Ettevõtete võrdlus', description: 'Võrdle kahte ettevõtet (positiivsed/negatiivsed punktid) enne süva-analüüsi.' },
        { title: 'Watchlist’i koostamine', description: 'Koosta teemapõhised watchlist’id ja jälgi signaale lihtsamalt.' }
    ],

    'beebeeai': [
        { title: 'Earnings call kokkuvõtted', description: 'Tõmba välja “takeaways”, guidance muutused ja juhtkonna toon.' },
        { title: 'Riskide ja võimaluste kaardistus', description: 'Koonda riskid/opportunities ühte vaatesse, et teha otsuseid kiiremini.' },
        { title: 'Kvartalite võrdlus', description: 'Võrdle peamisi muutusi perioodide vahel (teemad, KPI’d, suunised).' }
    ],

    'craveu': [
        { title: 'Karakteripõhine rollimäng', description: 'Vestle AI-tegelastega rollimängu-stseenides meelelahutuseks.' },
        { title: 'Loovkirjutamise ideed', description: 'Loo dialooge ja stseenikontseptsioone kirjutamiseks või mängudele.' },
        { title: 'Keelepraktika', description: 'Harjuta võõrkeelt dialoogiga, kasutades kindlaid rolle ja olukordi.' }
    ],

    'makebelieve': [
        { title: 'Pikaajaline “companion” vestlus', description: 'Hoia järjepidevat vestlust kaaslasega, et säilitada teema ja eelistused.' },
        { title: 'Ideede peegeldamine', description: 'Aruta mõtteid ja otsuseid neutraalses vestluses, et selgust saada.' },
        { title: 'Rollimängu stsenaariumid', description: 'Loo ja testi karakterite stiile ning suhtlusmustreid loo arendamiseks.' }
    ],

    'dittin': [
        { title: 'Rollimängu stseenid', description: 'Tee stsenaariumid ja dialoogid karakteripõhiseks vestluseks.' },
        { title: 'Karakterite testimine', description: 'Proovi eri isiksuseid ja reegleid, et leida parim “persona”.' },
        { title: 'Loov dialoogikirjutus', description: 'Genereeri dialooge ning narratiivi elemente loominguliste projektide jaoks.' }
    ],

    'brainybear': [
        { title: 'KKK ja klienditoe chatbot', description: 'Vasta levinud küsimustele automaatselt, kasutades sinu sisu/andmeid.' },
        { title: 'Lead capture', description: 'Kogu huviliste kontaktid ja suuna nad müügi või support’i tiimile.' },
        { title: 'Triage ja eskaleerimine', description: 'Filtreeri päringud, suuna raskemad juhtumid inimesele.' }
    ],

    'avtaar': [
        { title: 'Selgitus- ja demo videod', description: 'Loo avatariga selgitusklipid toodete/teenuste tutvustamiseks.' },
        { title: 'Onboarding ja sisekoolitus', description: 'Tee ühtse tooniga onboarding videod uutele töötajatele või klientidele.' },
        { title: 'Kliendisuhtluse videod', description: 'Loo personaalsed videod müügile või klienditoele (use-case’i põhine).' }
    ],

    'chatterbox': [
        { title: 'Voiceover prototüübid', description: 'Tee kiire testhääleline narratsioon video või demo jaoks.' },
        { title: 'Ligipääsetavus', description: 'Muuda tekst heliks, et toetada kuulamist ja ligipääsetavust.' },
        { title: 'Mitmekeelne TTS test', description: 'Katseta eri keeli ja stiile, enne kui valid tootmislahenduse.' }
    ],

    'verbatik': [
        { title: 'Video ja reklaami voiceover', description: 'Loo reklaamidele ja videotele TTS hääled erinevates keeltes.' },
        { title: 'IVR ja bot’hääled', description: 'Kasuta TTS-i klienditeeninduse menüüdes ja vestlusrobotites.' },
        { title: 'Audioteksti prototüüp', description: 'Tee audioversioon artiklist või skriptist enne lõplikku salvestust.' }
    ],

    'fynt': [
        { title: 'Töövoo automatiseerimine', description: 'Automatiseeri korduvad sammud ja protsessid mallide/agentidega.' },
        { title: 'Ülesannete koondamine', description: 'Koonda tööülesanded ja info üheks “hub’iks”, et vähendada killustatust.' },
        { title: 'Rutiinsete raportite tugi', description: 'Valmista lihtsad kokkuvõtted ja status-raportid sisendite põhjal.' }
    ],

    'bagel': [
        { title: 'Toote kasutuse insight’id', description: 'Tõlgenda evente ja kasutusmustreid, et leida peamised probleemid.' },
        { title: 'Churn signaalid', description: 'Tuvasta riskisegmendid ja põhjused, miks kasutajad lahkuvad.' },
        { title: 'Roadmapi prioriseerimine', description: 'Seosta probleemid KPI-dega ja tee prioriteedijärjestus lihtsamaks.' }
    ],

    'qwen3': [
        { title: 'Chatbot prototüüp', description: 'Ehita lihtne vestlusassistent veebilehele või sisetööriistale.' },
        { title: 'Koodi- ja tekstiabi', description: 'Aita kirjutada koodi, refaktoreerida või teha tehnilisi selgitusi.' },
        { title: 'Tõlge ja kokkuvõte', description: 'Tõlgi ning kokkuvõta dokumente või pikki tekste mitmes keeles.' }
    ],

    'mypersonas': [
        { title: 'ICP ja buyer persona loomine', description: 'Koosta profiilid segmentide, valupunktide ja eesmärkidega.' },
        { title: 'Sõnumi raamistik', description: 'Loo messaging matrix ja väärtuspakkumised erinevatele rollidele.' },
        { title: 'Sales enablement', description: 'Koosta kõnepunktid ja vastuväidete käsitlemine persona lõikes.' }
    ],

    'klevu': [
        { title: 'Poe otsingu parandamine', description: 'Vähenda “zero results” ja paranda relevantsi autocomplete/sünonüümidega.' },
        { title: 'Toote leidmise kiirendamine', description: 'Aita kasutajal kiiremini leida sobiv toode filtrite ja soovitustega.' },
        { title: 'Otsingu analüütika', description: 'Kaardista otsingusõnade trendid ja paranda kataloogi vastavalt.' }
    ],

    'nosto': [
        { title: 'Personaliseeritud soovitused', description: 'Näita ostjale 1:1 relevantsed tooted ja tõsta konversiooni.' },
        { title: 'Merchandising kampaaniates', description: 'Boost’i kampaania tooted ja korrasta kategooriate järjestus.' },
        { title: 'Segmentide sihtimine', description: 'Kasuta segmente, et kohandada pakkumisi ja sisu eri klientidele.' }
    ],

    'copy': [
        { title: 'Cold email ja sequence’id', description: 'Genereeri outreach-kirjad ja järelkirjad erinevatele ICP segmentidele.' },
        { title: 'Turunduscopy ja reklaamid', description: 'Loo reklaamtekstid, landing copy ja CTA variandid kiireks testimiseks.' },
        { title: 'GTM töövood', description: 'Automatiseeri korduvad GTM ülesanded (briefid, kokkuvõtted, mallid).' }
    ],

    'jasper': [
        { title: 'Brändihääle copy', description: 'Kirjuta brändi tooniga blogid, landingud ja kampaaniate tekstid.' },
        { title: 'Kampaania asset’id', description: 'Genereeri reklaamid, social postid ja emaili variatsioonid ühtses stiilis.' },
        { title: 'SEO sisu', description: 'Loo SEO outline’id ja artiklid märksõnade järgi (enne toimetust).' }
    ],

    'kits': [
        { title: 'Voice conversion demo’deks', description: 'Muuda vokaali stiili, et testida ideid enne lõplikku salvestust.' },
        { title: 'AI-vokaalid ja harmooniad', description: 'Loo vokaalikihtide ideid lauludele ja produktsioonile.' },
        { title: 'Muusika workflow prototüüp', description: 'Katseta vokaali töötluse töövooge, enne kui lähed lõplikule mixile.' }
    ],

    'alibabawan21': [
        { title: 'Self-host video generatsioon', description: 'Käivita video-gen mudel lokaalselt või GPU serveris, kui vajad kontrolli.' },
        { title: 'R&D prototüübid', description: 'Katseta prompt-to-video pipeline’i ja võrdle kvaliteeti eri seadetega.' },
        { title: 'Sisuloomise testid', description: 'Tee lühikesi kontseptsioonklippe enne lõpliku produktsiooni otsust.' }
    ],

    'wan22': [
        { title: 'Uuema mudeli test', description: 'Katseta värskemaid checkpoints’e ja parendusi võrreldes eelversiooniga.' },
        { title: 'Inference “recipe” võrdlus', description: 'Võrdle sampling seadeid ja pipeline variatsioone, et leida parim tulemus.' },
        { title: 'Self-host kontrollitud keskkonnas', description: 'Kasuta privaatset käitust, kui sisu või andmed on tundlikud.' }
    ],

    'robowork': [
        { title: 'Back-office automatiseerimine', description: 'Automatiseeri korduvad toimingud (vormid, süsteemide sisestus, kontrollid).' },
        { title: 'Ops töövood', description: 'Loo agentid, mis teevad rutiinseid kontrollsammu ja annavad kokkuvõtte.' },
        { title: 'Raportite abi', description: 'Koonda tegevused ja tulemused lihtsaks status/weekly raportiks.' }
    ],

    'hexoloop': [
        { title: 'Piletite automaatlahendus', description: 'Automatiseeri kliendipäringute lahendamine, mitte ainult vastamine.' },
        { title: 'Support “resolution playbooks”', description: 'Kasuta töövooge, mis teevad päris samme (nt konto kontroll, muudatused).' },
        { title: 'Eskalatsioonireeglid', description: 'Suunamine inimesele, kui kindlad tingimused täituvad või risk kasvab.' }
    ],

    'nanobananapro': [
        { title: 'Turundusvisuaalid', description: 'Loo reklaamipildid, hero-bannerid ja kampaania variatsioonid.' },
        { title: 'Mockupid ja kontseptsioonid', description: 'Tee kiiresti toote- või UI-mockupe enne disainitiimi tööd.' },
        { title: 'Pildi variatsioonid ja edit', description: 'Genereeri variatsioonid (valgus, stiil, nurk) sama idee alusel.' }
    ],

    'vue': [
        { title: 'Enterprise AI orkestreerimine', description: 'Ühenda AI, andmed ja süsteemid, et automatiseerida tööprotsesse.' },
        { title: 'Andmete koondamine', description: 'Koonda mitmest allikast info ühte AI-kihile, et teha paremaid otsuseid.' },
        { title: 'Töövoogude standardiseerimine', description: 'Muuda käsitöö protsessid reeglite ja agentidega korduvaks ja mõõdetavaks.' }
    ],

    'inboxpilot': [
        { title: 'Outreach haldus', description: 'Aita hallata cold outreach’i ja kampaaniate töövooge (kui kasutusel).' },
        { title: 'Inbox triage', description: 'Aita sortida ja prioriseerida sissetulevaid kirju, et reageerida kiiremini.' },
        { title: 'Deliverability tugi', description: 'Hoia konto “hügieen” ja tervis, et vältida spämmikausta (võimekus sõltub tootest).' }
    ],

    'domyshoot': [
        { title: 'Tootekataloogi pildid', description: 'Pildista ja standardiseeri tootefotod e-poe kataloogi jaoks.' },
        { title: 'Tausta eemaldus', description: 'Tee puhas valge/ühtlane taust ja ühtlusta pildistiil.' },
        { title: 'Batch töötlus', description: 'Töötle palju tooteid korraga, et kiirendada listingute valmimist.' }
    ],

    'phrasee': [
        { title: 'Emaili subject line optimeerimine', description: 'Genereeri ja testi subject variatsioone brändikeele raamides.' },
        { title: 'SMS ja push copy', description: 'Loo lühisõnumite variatsioone, mis sobivad brändi tooniga.' },
        { title: 'Brändikeele kontroll', description: 'Hoia väljund kooskõlas “brand voice” reeglite ja poliitikaga.' }
    ],

    'octane': [
        { title: 'Tootequizid', description: 'Juhi ostja õige tooteni interaktiivse quiz’i abil.' },
        { title: 'Zero-party data kogumine', description: 'Kogu eelistused ja vajadused quiz’i kaudu ning kasuta personaliseerimiseks.' },
        { title: 'Lead capture', description: 'Kogu email/SMS kontaktid ja suuna need kampaaniatesse.' }
    ],

    'aidaptive': [
        { title: 'Predictive audiences reklaamideks', description: 'Loo prognoosivad segmendid, et suunata kampaaniaid täpsemalt.' },
        { title: 'Soovitused e-poes', description: 'Näita 1:1 soovitusi, et tõsta konversiooni ja ostukorvi väärtust.' },
        { title: 'Predictive search', description: 'Paranda otsingu relevantsi ja vähenda “zero results” isikupõhiselt.' }
    ],

    'prisync': [
        { title: 'Konkurentide hinnajälgimine', description: 'Jälgi konkurentide hinnamuutusi ja laoseisu, et reageerida kiiresti.' },
        { title: 'Dünaamiline hinnastamine', description: 'Seadista reeglid, mis uuendavad hindu automaatselt (marginaal, konkurent, piirangud).' },
        { title: 'Hinnahoiatused', description: 'Saa teavitusi kriitiliste hinnamuutuste kohta, et vältida müügi kaotust.' }
    ],

    'shopifymagic': [
        { title: 'Tootekirjelduste kirjutamine', description: 'Genereeri ja paranda Shopify Adminis tootekirjeldusi kiiremini.' },
        { title: 'Emaili tekstid', description: 'Koosta Shopify Emailis subject + body mustandeid kampaaniateks.' },
        { title: 'Kliendivastused Inboxis', description: 'Kasuta Shopify Inboxis suggested replies, et vastata kiiremini ja ühtlaselt.' }
    ]
};

Object.entries(kasutusviisidByTool).forEach(([key, usages]) => {
    if (toolsData[key]) toolsData[key].kasutusviisid = usages;
});

window.toolsData = { ...tools, ...toolsData };
