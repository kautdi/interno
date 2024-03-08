const nodemailer = require('nodemailer');
const transporterConfig = {
    service: 'gmail',
    auth: {
        user: 'kautdi@gmail.com',
        pass: 'ivgg utmh ueqg iwxy'
    }
};
const transporter = nodemailer.createTransport(transporterConfig);

class MailController {
    async JoinMail(req, res, next) {
        const { email } = req.body;

        const mailOptions = {
            from: 'kautdi@gmail.com',
            to: 'kautdi@gmail.com',
            subject: 'Join',
            text: 'You subscribe to our letters'
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error:', error);
                res.status(500).json({ error: 'Ошибка при отправке электронной почты' });
            } else {
                console.log('Email sent:', info.response);
                res.json({ message: 'Письмо успешно отправлено' });
            }
        });
    }

    async ContactUs(req, res, next) {
        const { name, email, subject, phone,  message } = req.body;
        const mailOptions = {
            from: 'kautdi@gmail.com',
            to: 'kautdi@gmail.com',
            subject: 'Contact Us',
            text: 'Имя:'+ name + '\nEmail:'+ email + '\nТелефон:'+ phone + '\nСообщение:'+ message + '\n\n'
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error:', error);
                res.status(500).json({ error: 'Ошибка при отправке электронной почты' });
            } else {
                console.log('Email sent:', info.response);
                res.json({ message: 'Письмо успешно отправлено' });
            }
        });
    }
}

module.exports = new MailController();
