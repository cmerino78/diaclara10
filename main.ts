input.onButtonPressed(Button.A, function () {
    radio.sendString("IZQUIERDA")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("RECTO")
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "IZQUIERDA") {
        cuteBot.motors(0, 30)
        basic.pause(100)
        cuteBot.motors(0, 0)
    }
    if (receivedString == "DERECHA") {
        cuteBot.motors(30, 0)
        basic.pause(100)
        cuteBot.motors(0, 0)
    }
    if (receivedString == "RECTO") {
        cuteBot.motors(30, 30)
        basic.pause(100)
        cuteBot.motors(0, 0)
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("DERECHA")
})
