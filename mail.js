const mailer = require('nodemailer');

const getEmailData =(to, clientName, clientTerminal, senderName, clientId, tpn, numDevices, shvaUser, shvaPass, message)=>{
    let data ={
        clientName: clientName,
        senderName: senderName,
        clientTerminal: clientTerminal,
        clientId: clientId,
        tpn: tpn,
        numDevices: numDevices,
        shvaUser: shvaUser,
        shvaPass: shvaPass,
    }

     message ={
        from:`${senderName} <avivposisrael@gmail.com>`,
        to ,
        subject:`${clientName} ח"פ\ע"מ ${clientId} ***שידור ידני***`,
        text: 'Its an Auto message please Enable HTML',
        html:'<p></p>',
        amp:`
        <table style="direction: rtl; border-collapse: collapse; width: 100.091%; height: 98px;" border="1">
<tbody>
<tr style="height: 18px;">
<td style="width: 16.3778%; height: 18px; text-align: center;">שם הלקוח</td>
<td style="width: 16.3778%; height: 18px; text-align: center;">ח"פ</td>
<td style="width: 16.3778%; height: 18px; text-align: center;">מספר מסוף</td>
<td style="width: 16.3778%; height: 18px; text-align: center;">שם משתמש בשב"א</td>
<td style="width: 16.3778%; height: 18px; text-align: center;">סיסמא בשב"א</td>
<td style="width: 16.3835%; height: 18px; text-align: center;">סיסמא קבועה</td>
</tr>
<tr style="height: 18px;">
<td style="width: 16.3778%; height: 18px; text-align: center;">${clientName}</td>
<td style="width: 16.3778%; height: 18px; text-align: center;">${clientId}</td>
<td style="width: 16.3778%; height: 18px; text-align: center;">${clientTerminal}</td>
<td style="width: 16.3778%; height: 18px; text-align: center;">${shvaUser}</td>
<td style="width: 16.3778%; height: 18px; text-align: center;">${shvaPass}</td>
<td style="width: 16.3835%; height: 18px; text-align: center;">&nbsp;</td>
</tr>
</tbody>
</table>
<table style="border-collapse: collapse; width: 32.5455%; height: 58px;" border="1">
<tbody>
<tr>
<td style="width: 49.6818%;">TPN</td>
<td style="width: 24.8409%;">UID</td>
<td style="width: 24.8409%;">מספר מכשירים</td>
</tr>
<tr>
<td style="width: 49.6818%;">${tpn[0]}</td>
<td style="width: 24.8409%;">&nbsp;</td>
<td style="width: 24.8409%;">${numDevices}</td>
</tr>
<tr>
<td style="width: 49.6818%;">${tpn[1]}</td>
<td style="width: 24.8409%;">&nbsp;</td>
<td style="width: 24.8409%;">&nbsp;</td>
</tr>
<tr>
<td style="width: 49.6818%;">${tpn[2]}</td>
<td style="width: 24.8409%;">&nbsp;</td>
<td style="width: 24.8409%;">&nbsp;</td>
</tr>
<tr>
<td style="width: 49.6818%;">${tpn[3]}</td>
<td style="width: 24.8409%;">&nbsp;</td>
<td style="width: 24.8409%;">&nbsp;</td>
</tr>
<tr>
<td style="width: 49.6818%;">${tpn[4]}</td>
<td style="width: 24.8409%;">&nbsp;</td>
<td style="width: 24.8409%;">&nbsp;</td>
</tr>
<tr>
<td style="width: 49.6818%;">${tpn[5]}</td>
<td style="width: 24.8409%;">&nbsp;</td>
<td style="width: 24.8409%;">&nbsp;</td>
</tr>
<tr>
<td style="width: 49.6818%;">${tpn[6]}</td>
<td style="width: 24.8409%;">&nbsp;</td>
<td style="width: 24.8409%;">&nbsp;</td>
</tr>
<tr>
<td style="width: 49.6818%;">${tpn[7]}</td>
<td style="width: 24.8409%;">&nbsp;</td>
<td style="width: 24.8409%;">&nbsp;</td>
</tr>
<tr>
<td style="width: 49.6818%;">${tpn[8]}</td>
<td style="width: 24.8409%;">&nbsp;</td>
<td style="width: 24.8409%;">&nbsp;</td>
</tr>
<tr>
<td style="width: 49.6818%;">${tpn[9]}</td>
<td style="width: 24.8409%;">&nbsp;</td>
<td style="width: 24.8409%;">&nbsp;</td>
</tr>
<tr>
<td style="width: 49.6818%;">${tpn[10]}</td>
<td style="width: 24.8409%;">&nbsp;</td>
<td style="width: 24.8409%;">&nbsp;</td>
</tr>
<tr>
<td style="width: 49.6818%;">${tpn[11]}</td>
<td style="width: 24.8409%;">&nbsp;</td>
<td style="width: 24.8409%;">&nbsp;</td>
</tr>
</tbody>
</table>`
    }
}

const sendEmail = (to, clientName, clientTerminal, senderName, clientId, tpn, numDevices, shvaUser, shvaPass)=>{

    const smtpTransport = mailer.createTransport({
        service:'Gmail',
        auth:{
            user:'avivposisrael@gmail.com',
            pass:'Eliran2021'
        }
    })
        const mail = getEmailData(to, clientName, clientTerminal, senderName, clientId, tpn, numDevices, shvaUser, shvaPass)

    smtpTransport.sendMail(mail, function(error, response) {
        if(error) {
            console.log(error)
        } else {
            console.log( " email sent successfully")
        }
        smtpTransport.close();
    })
}
module.exports={sendEmail}