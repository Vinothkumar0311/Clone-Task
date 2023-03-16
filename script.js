function submit() {
    let fn = document.getElementById("fn").value;
    var letters = /^[A-Za-z]+$/;
    firstName(fn, letters);


    let ln = document.getElementById("ln").value;
    lastName(ln, letters);

    let mail = document.getElementById("email").value;
    let checkLetter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
    mailCheck(mail, checkLetter);

    let number = document.getElementById("number").value;
    var no = /^\d{10}$/;
    checkNumber(number,no);

    var gender = document.querySelector( 'input[name="gender"]:checked');
    checkGender(gender);

}

function firstName(fn, letters) {
    let lenghtfn = fn.length;
    if (lenghtfn == 0) {
        document.getElementById('fnout').innerHTML = "Kindly fill the first name"
    }
    else {

        if (lenghtfn < 50) {
            if (fn.match(letters)) {
                return true;
            }
            else {
                document.getElementById('fnout').innerHTML = "Enter only a alphabet";
            }
        }
        else {
            document.getElementById('fnout').innerHTML = "Enter lessthan 50 alphabet "
        }
    }
}

function lastName(ln, letters) {
    let lenghtln = ln.length;
    if (lenghtln == 0) {
        document.getElementById('lnout').innerHTML = "Kindly fill the first name"
    }
    else {

        if (lenghtln < 50) {
            if (ln.match(letters)) {
                return true;
            }
            else {
                document.getElementById('lnout').innerHTML = "Enter only a alphabet";
            }
        }
        else {
            document.getElementById('lnout').innerHTML = "Enter lessthan 50 alphabet "
        }
    }
}

function mailCheck(mail, checkLetter) {

    if (mail.match(checkLetter)) {
        return true;
    }
    else {
        document.getElementById('mailout').innerHTML = "Enter Vaild Email-ID     "
    }

}

function checkNumber(number,no){
    var lenghtno = number.length;

    if(lenghtno<10){
        document.getElementById('noout').innerHTML = "Enter mobile number less 10 number "
    }
    else{
        if(number.match(no)){
            return true;
        }
        else{
            document.getElementById('noout').innerHTML = "Enter Vaild number"
        }
    }
}

function checkGender(){
    
}