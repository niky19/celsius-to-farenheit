scene.setBackgroundImage(assets.image`
    mybg
`)
function toFar(temp: number): number {
    let farConversion = temp * 9 / 5 + 32
    let roundedFar = Math.roundWithPrecision(farConversion, 2)
    return roundedFar
}

function toCel(temp: number): number {
    let celConversion = (temp - 32) * 5 / 9
    let roundedCel = Math.roundWithPrecision(celConversion, 2)
    return roundedCel
}

function menu() {
    game.showLongText("Welcome to the Celsius/Farenheit Convertor!", DialogLayout.Bottom)
    let userChoice = game.askForNumber(" Press 1 -> C to F | Press 2 -> F to C", 1)
    let userTemp = game.askForNumber("Write the temperature:", 5)
    if (userChoice == 1) {
        game.showLongText("Result: " + ("" + toFar(userTemp)), DialogLayout.Bottom)
    } else if (userChoice == 2) {
        game.showLongText("Result: " + ("" + toCel(userTemp)), DialogLayout.Bottom)
    } else {
        game.showLongText("Invalid choice. Please try again.", DialogLayout.Bottom)
    }
    
}

menu()
