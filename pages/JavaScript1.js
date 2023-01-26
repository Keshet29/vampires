//שם משתמש
function user() {
    if (userN.value == "ערפד1000") {
        div1.innerHTML = " ";
        return true;
    }
    else {
        div1.innerHTML = "שם משתמש שגוי";
        return false;
    }
}
//סיסמה
function password() {
    if (password1.value == "קלאוס123") {
        div2.innerHTML = " ";
        return true;
    }
    else {
        div2.innerHTML = "סיסמה שגויה";
        return false;
    }
}
//בדיקה סופית
function ending() {
    var result = true;
    result = user() && result;
    result = password() && result;
    return result;
}

