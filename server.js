const express = require('express')
 require('dotenv').config();
 const {sendMail} = require('/email')

const port = 5000;

 const app = express();

 
 app.use(express.json());

 app.use(express.urlencoded({extended:false}))
 

 app.post('/message', async(req, res) => {
    const {senderName, senderContacts, subject, body} = req.body;

    if(!message || message === "") return res.status(500).json({message:"a message must be proided"})

    const sendRes = await sendMail(senderName, senderContacts, subject,message);

    if(!sendRes){
        return res.status(500)
    }
    return res.status(200).json((sendRes));
    
 })

 app.listen(port);