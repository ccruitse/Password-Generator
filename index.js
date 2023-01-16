let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S",
"T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q",
"r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!",
"@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordLength = 11
let passwordOne = ""
let passwordTwo = ""

let passButton = document.getElementById("pass-button")
let passOne = document.getElementById("pass-one")
let passTwo = document.getElementById("pass-two")


passButton.addEventListener("click", function() {
    for (let i = 0; i < passwordLength; i++) {
        let randomOne = Math.floor( Math.random() * characters.length )
        let randomTwo = Math.floor( Math.random() * characters.length )

        passwordOne += characters[randomOne]
        passwordTwo += characters[randomTwo]

        passOne.textContent = passwordOne
        passTwo.textContent = passwordTwo
    }
})
/*passButton.addEventListener("click", function() {
    for (let i = 0; i < passwordLength; i++) {
        let randomOne = Math.floor( Math.random() * characters.length );
        password += characters[randomOne]
    }
    passOne.textContent = password 
})

passButton.addEventListener("click", function() {
    for (let i = 0; i < passwordLength; i++) {
        let randomTwo = Math.floor( Math.random() * characters.length );
        password += characters[randomTwo]
    }
    passTwo.textContent = characters[randomTwo] 
})*/