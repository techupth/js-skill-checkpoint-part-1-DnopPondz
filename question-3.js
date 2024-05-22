// Question #3
let userPassword = "";
// เริ่มเขียนโค้ดตรงนี้




function checkPasswordStrength(userPassword) {
    let password = userPassword.length;
    if (password < 6 ) {
        return "Weak"
    } else if (password >= 6 && password <= 10) {
        return "Medium"
    } else {
        return "Strong"
    } 
}

userPassword = "swnalWadqQ"
userPassword = "TechUp"
userPassword = "abcde"


console.log(checkPasswordStrength(userPassword));