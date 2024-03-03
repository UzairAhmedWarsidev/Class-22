// var x = prompt("Please put a number")

function checkCharacter(char) {
    const charCode = char.charCodeAt(0);
    if (charCode >= 65 && charCode <= 90) {
        console.log(`${char} is an uppercase letter.`);
    } else if (charCode >= 97 && charCode <= 122) {
        console.log(`${char} is a lowercase letter.`);
    } else if (charCode >= 48 && charCode <= 57) {
        console.log(`${char} is a number.`);
    } else {
        console.log(`${char} is not an alphabetic character.`);
    }
}

const inputChar = 'b'; // Replace with your desired input character
checkCharacter(inputChar);

