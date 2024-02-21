const nodemailer = require("nodemailer");
const google = require("googleapis");

const {
  GOOGLE_CLIENT_ID,
  GOOGLE_SECRETE_KEY,
  GOOGLE_REFRESH_TOKEN,
  MESSAGE_RECEIVER_EMAIL_ADDRESS,
} = process.env;

const authClient = new google.auth.OAuth2(GOOGLE_CLIENT_ID, GOOGLE_SECRETE_KEY);

authClient.setCredentials({refresh_token:GOOGLE_REFRESH_TOKEN});

async function sendMail(senderName, senderContacts, subject, message) {
    try {
        const transport = nodemailer.createTransport({
            service:"gmail",
            auth:{
                type:"OAUTH2",
                user:"danielboadu594@gmail.com",
                clientId:GOOGLE_CLIENT_ID,
                clientSecret: GOOGLE_SECRETE_KEY,
                refreshToken : GOOGLE_REFRESH_TOKEN,
                accessToken: await authClient.getAccessToken(),
            },
        })

        const emailResponse = await transport.sendMail({
            from: `${senderName || ""} <some@gmail.com>`,
            to: MESSAGE_RECIEVER_EMAIL_ADDRESS,
            subject: `${senderName || ""} ${subject ? `- ${subject}` : ""}`,
            text: `
                ${(senderContacts || senderName) ?
                    `message from: ${senderName || ""} ${(senderContacts && senderContacts.lenght !== 0) ? `< ${senderContacts?.join(" / ")} >` : ""}` : "(anonymous)"
                }

                ${message}
            `,
        })
         return emailResponse || false
    } catch (error) {
        console.log(error);
        
    }
}

module.exports = {sendMail}
