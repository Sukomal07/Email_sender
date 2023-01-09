const mailer = require('nodemailer')

let transport = mailer.createTransport({
    service:'gmail',
    auth:{
        user:'hypersukomal@gmail.com',
        pass:''
    }
})

let message = {
    from:'hypersukomal@gmail.com',
    to:'hypersukomal@gmail.com',
    subject:'Testing Email using Node.js',
    text:'Thia mail is sending from Node.js'
}

transport.sendMail(message, (error , info) =>{
    if(error){
        console.log(error)
    }else{
        console.log("Email send")
        console.log(info.response)
    }
})
