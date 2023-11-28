def getUserChoice():
    game.show_long_text("Welcome to the Celsius/Farenheit Convertor!", DialogLayout.BOTTOM)
    choice = game.ask_for_number(" Press 1 -> C to F | Press 2 -> F to C", 1)
    return choice

def getUserTemp():
    temp = game.ask_for_number("Write the temperature:", 5)
    return temp

def toFar(temp : Double):
    farConversion = (temp * 9/5) + 32
    roundedFar = Math.round_with_precision(farConversion, 2)
    return roundedFar

def toCel(temp : Double):
    celConversion = (temp - 32) * 5/9
    roundedCel = Math.round_with_precision(celConversion, 2)
    return roundedCel

def menu(choice :Int, temp: Double):
    if(choice == 1):
        game.show_long_text("Result: " + str(toFar(temp)), DialogLayout.BOTTOM)

    elif(choice == 2):
        game.show_long_text("Result: " + str(toCel(temp)), DialogLayout.BOTTOM)
      
    else:
        game.show_long_text("Invalid choice. Please try again.", DialogLayout.BOTTOM)


scene.set_background_image(assets.image("""mybg"""))
menu(getUserChoice(), getUserTemp())