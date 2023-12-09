function scrollToForm(){
    let form = document.getElementsByClassName('join-page')[0];

    form.scrollIntoView({behavior: 'smooth', block: 'start'});
}

function scrollToNew(){
    let info = document.getElementsByClassName('info-page')[0];

    info.scrollIntoView({behavior: 'smooth', block: 'start'});
}

function scrollToPopular(){
    let popular = document.getElementsByClassName('gift-items-page')[0];

    popular.scrollIntoView({behavior: 'smooth', block: 'start'});
}

function scrollToGifts(){
    let gifts = document.getElementsByClassName('about-page')[0];

    gifts.scrollIntoView({behavior: 'smooth', block: 'start'});
}

function getFormData(){
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let subject = document.getElementById('subject').value;

    return { name, email, subject };
}

function setCookie(name, email, subject){
    var expirationDays = 30;

    var d = new Date();
    d.setTime(d.getTime() + (expirationDays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();

    document.cookie = "name" + regCount + "=" + name + ";" + expires + ";path=/";
    document.cookie = "email" + regCount + "=" + email + ";" + expires + ";path=/";
    document.cookie = "subject" + regCount + "=" + subject + ";" + expires + ";path=/";

}

function getCookieSize(){
    let cookies = document.cookie.split(';');
    return cookies.length;
}

function getRandData(cookieSize){
    console.log(cookieSize);
    let randNum = regCount;
    while(randNum == regCount){
        console.log(randNum);
        randNum = Math.floor(Math.random() * (cookieSize / 3 - 1)) + 1;
    }

    return randNum;
}

function getCookieValue(cookieName){
    var cookies = document.cookie.split(';');

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();

        var cookieParts = cookie.split('=');
        var name = cookieParts[0];
        var value = cookieParts[1];

        if (name === cookieName) {
            return value;
        }
    }

    return null;
}

function getAnswer(){
    let cookieSize = getCookieSize(); 
    if(cookieSize / 3 > 1){
        let randNum = getRandData(cookieSize);
        console.log(randNum);
        let name = getCookieValue("name" + randNum);
        let email = getCookieValue("email" + randNum);
        let subject = getCookieValue("subject" + randNum);

        alert("Your special mission\n\nName: " + name + "\nEmail: " + email + "\nSubject: " + subject);
    }
    else {
        alert("You have successfully registered.\nWe will send a ward later <3")
    }
}

let regCount = 1;

function joinTheParty(){
    if(document.cookie.length <= 0){
        regCount = 1;
    }
    let { name, email, subject } = getFormData();
    setCookie(name, email, subject);
    getAnswer();

    regCount++;
}