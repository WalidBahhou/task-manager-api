const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'w.bahhou@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app!`
    })
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'w.bahhou@gmail.com',
        subject: 'We are sad to see you go :(',
        text: `We are sad you are leaving the plateform, ${name}. Please do write us if you have encountered some issues for us to resolve.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}