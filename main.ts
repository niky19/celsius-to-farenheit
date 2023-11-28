function getUserChoice(): number {
    game.showLongText("Welcome to the Celsius/Farenheit Convertor!", DialogLayout.Bottom)
    let choice = game.askForNumber(" Press 1 -> C to F | Press 2 -> F to C", 1)
    return choice
}

function getUserTemp(): number {
    let temp = game.askForNumber("Write the temperature:", 5)
    return temp
}

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

function menu(choice: number, temp: number) {
    if (choice == 1) {
        game.showLongText("Result: " + ("" + toFar(temp)), DialogLayout.Bottom)
    } else if (choice == 2) {
        game.showLongText("Result: " + ("" + toCel(temp)), DialogLayout.Bottom)
    } else {
        game.showLongText("Invalid choice. Please try again.", DialogLayout.Bottom)
    }
    
}

scene.setBackgroundImage(assets.image`mybg`)
menu(getUserChoice(), getUserTemp())
