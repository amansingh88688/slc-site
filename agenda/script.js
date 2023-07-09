// mytoken value should of that email from which you want to send OTP
const mytoken = "7abd8e4d-dc08-439e-8e8b-bc0fbb6ecb9d";
//   ch21b011@smail.iitm.ac.in

function OTPgenerator(digits) {
    var range = (Math.random() * 9) + 1;
    var OTP = Math.floor(range * (10**(digits - 1)));
    return OTP;
}
function sendmail(otp_num){
    Email.send({
        SecureToken : mytoken,
        To : smail.value,
        From : "amankrj12345@gmail.com",
        Subject : "OTP for verification",
        Body : `<h4>Your OTP for login is ${otp_num}</h4><br>`
    }).then(
        message => alert("OTP sent to your smail")
    );
}

function sendotp(){
    const smail = document.getElementById('smail');
    const agenda = document.getElementById('agenda');
    const otpverify = document.getElementsByClassName('otpverify')[0];
    const send = document.getElementById('sendbtn');
    const resend = document.getElementById('otp-resend');

let otp_num = OTPgenerator(4);

sendmail(otp_num);

    
//now make otp input visible
otpverify.style.display = 'block';
send.classList.add('disabled');
const otp_inp = document.getElementById('otp_inp');
const otp_btn = document.getElementById('otp-btn');
otp_inp.value = "";
otp_btn.addEventListener('click', ()=>{
    //now check whether OTP is valid or not
    if(otp_inp.value == otp_num){
        alert('Smail verified and Agenda submitted successfully');

        let emailbody2 = `<b>Agenda By:</b> ${smail.value} <br><br> <b>Agenda:</b> ${agenda.value} <br><br>`
        Email.send({
            SecureToken : mytoken,
            To : "amankrj12345@gmail.com",
            From : "amankrj12345@gmail.com",
            Subject : "Agenda for SLC",
            Body : emailbody2,
        }).then(
            window.location.href = "../index.html"
            );
    }
    else{
        alert('Invalid OTP');
        otp_inp.value = "";
        resend.style.display = 'block';   
    }
    resend.addEventListener('click', ()=>{
        alert("New OTP has been sent!")
        new_otp = OTPgenerator(4);
        otp_num = new_otp;
        sendmail(otp_num);
    });
    });
}
