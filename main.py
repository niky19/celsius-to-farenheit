scene.set_background_image(assets.image("""
    mybg
"""))

def toFar(temp : Double):
    farConversion = (temp * 9/5) + 32
    roundedFar = Math.round_with_precision(farConversion, 2)
    return roundedFar

def toCel(temp : Double):
    celConversion = (temp - 32) * 5/9
    roundedCel = Math.round_with_precision(celConversion, 2)
    return roundedCel

def menu():
    
    game.show_long_text("Welcome to the Celsius/Farenheit Convertor!", DialogLayout.BOTTOM)
    userChoice = game.ask_for_number(" Press 1 -> C to F | Press 2 -> F to C", 1)
    userTemp = game.ask_for_number("Write the temperature:", 5)

    if(userChoice == 1):
        game.show_long_text("Result: " + str(toFar(userTemp)), DialogLayout.BOTTOM)

    elif(userChoice == 2):
        game.show_long_text("Result: " + str(toCel(userTemp)), DialogLayout.BOTTOM)
      
    else:
        game.show_long_text("Invalid choice. Please try again.", DialogLayout.BOTTOM)

menu()