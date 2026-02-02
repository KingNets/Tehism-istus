const nodemailer = require('nodemailer');

// Email configuration - Using Gmail (FREE)
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER || 'tehismoistus@gmail.com',
        pass: process.env.EMAIL_PASSWORD || '' // Gmail App Password (16 characters)
    }
});

// Verify connection configuration
transporter.verify(function (error, success) {
    if (error) {
        console.log('❌ Email server connection error:', error.message);
    } else {
        console.log('✅ Email server is ready to send messages');
    }
});

// Send email function
const sendEmail = async (to, subject, html, text) => {
    try {
        const mailOptions = {
            from: `"Tehismõistus" <${process.env.EMAIL_USER || 'tehismoistus@gmail.com'}>`,
            to: to,
            subject: subject,
            text: text,
            html: html
        };

        const info = await transporter.sendMail(mailOptions);
        console.log('✅ Email sent:', info.messageId);
        return { success: true, messageId: info.messageId };
    } catch (error) {
        console.error('❌ Error sending email:', error);
        return { success: false, error: error.message };
    }
};

// Send contact form notification
const sendContactFormNotification = async (formData) => {
    const { name, email, message } = formData;
    
    const subject = `🔔 Uus kontakti sõnum: ${name}`;
    
    const html = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333;">Uus kontakti vorm</h2>
            <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <p><strong>Nimi:</strong> ${name}</p>
                <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                <p><strong>Sõnum:</strong></p>
                <p style="background: white; padding: 15px; border-radius: 4px;">${message}</p>
            </div>
            <p style="color: #666; font-size: 12px;">Saadud: ${new Date().toLocaleString('et-EE')}</p>
        </div>
    `;
    
    const text = `
Uus kontakti vorm

Nimi: ${name}
Email: ${email}

Sõnum:
${message}

Saadud: ${new Date().toLocaleString('et-EE')}
    `;
    
    return await sendEmail('tehismoistus@gmail.com', subject, html, text);
};

// Send feedback form notification
const sendFeedbackNotification = async (formData) => {
    const { type, message, rating, email } = formData;
    
    const typeEmoji = {
        bug: '🐛',
        feature: '💡',
        improvement: '✨',
        other: '💬'
    };
    
    const subject = `${typeEmoji[type] || '💬'} Uus tagasiside: ${type}`;
    
    const html = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333;">Uus tagasiside</h2>
            <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <p><strong>Tüüp:</strong> ${typeEmoji[type]} ${type}</p>
                ${rating ? `<p><strong>Hinnang:</strong> ${'⭐'.repeat(rating)} (${rating}/5)</p>` : ''}
                ${email ? `<p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>` : ''}
                <p><strong>Sõnum:</strong></p>
                <p style="background: white; padding: 15px; border-radius: 4px;">${message}</p>
            </div>
            <p style="color: #666; font-size: 12px;">Saadud: ${new Date().toLocaleString('et-EE')}</p>
        </div>
    `;
    
    const text = `
Uus tagasiside

Tüüp: ${type}
${rating ? `Hinnang: ${rating}/5` : ''}
${email ? `Email: ${email}` : ''}

Sõnum:
${message}

Saadud: ${new Date().toLocaleString('et-EE')}
    `;
    
    return await sendEmail('tehismoistus@gmail.com', subject, html, text);
};

// Send bug report notification
const sendBugReportNotification = async (bugData) => {
    const { title, description, category, severity, steps, expected, actual, browser, os, url, username } = bugData;
    
    const subject = `🐛 Uus vearaport: ${title}`;
    
    const html = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #d32f2f;">🐛 Uus vearaport</h2>
            <div style="background: #fff3f3; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #d32f2f;">
                <h3 style="margin-top: 0;">${title}</h3>
                <p><strong>Kategooria:</strong> ${category}</p>
                <p><strong>Tõsidus:</strong> ${severity}</p>
                ${username ? `<p><strong>Kasutaja:</strong> ${username}</p>` : ''}
            </div>
            
            <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <p><strong>Kirjeldus:</strong></p>
                <p>${description}</p>
                
                ${steps ? `
                <p><strong>Sammud probleemi tekitamiseks:</strong></p>
                <ol>${steps.split('\n').map(step => `<li>${step}</li>`).join('')}</ol>
                ` : ''}
                
                ${expected ? `<p><strong>Oodatud tulemus:</strong> ${expected}</p>` : ''}
                ${actual ? `<p><strong>Tegelik tulemus:</strong> ${actual}</p>` : ''}
            </div>
            
            <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <p><strong>Tehniline info:</strong></p>
                <p>Brauser: ${browser || 'N/A'}</p>
                <p>OS: ${os || 'N/A'}</p>
                <p>URL: ${url || 'N/A'}</p>
            </div>
            
            <p style="color: #666; font-size: 12px;">Raporteeritud: ${new Date().toLocaleString('et-EE')}</p>
        </div>
    `;
    
    const text = `
Uus vearaport: ${title}

Kategooria: ${category}
Tõsidus: ${severity}
${username ? `Kasutaja: ${username}` : ''}

Kirjeldus:
${description}

${steps ? `Sammud:\n${steps}` : ''}

${expected ? `Oodatud: ${expected}` : ''}
${actual ? `Tegelik: ${actual}` : ''}

Tehniline info:
Brauser: ${browser || 'N/A'}
OS: ${os || 'N/A'}
URL: ${url || 'N/A'}

Raporteeritud: ${new Date().toLocaleString('et-EE')}
    `;
    
    return await sendEmail('tehismoistus@gmail.com', subject, html, text);
};

module.exports = {
    transporter,
    sendEmail,
    sendContactFormNotification,
    sendFeedbackNotification,
    sendBugReportNotification
};
