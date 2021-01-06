input.onGesture(Gesture.TiltRight, function () {
    radio.sendValue("servoS0angle", 45)
    radio.sendValue("servoS1angle", 135)
})
input.onGesture(Gesture.LogoDown, function () {
    radio.sendValue("servoS0angle", 45)
    radio.sendValue("servoS1angle", 135)
})
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . # . # .
        . # # # .
        . # . # .
        . # . # .
        `)
    radio.sendValue("servoS0angle", randint(0, 180))
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendValue("servoS0angle", 45)
    radio.sendValue("servoS1angle", 135)
})
input.onSound(DetectedSound.Loud, function () {
    basic.showLeds(`
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        . # # # .
        `)
})
input.onGesture(Gesture.LogoUp, function () {
    radio.sendValue("servoS0angle", 135)
    radio.sendValue("servoS1angle", 45)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . # # # .
        # . # . #
        # # # # .
        # . # . #
        # . # # .
        `)
    radio.sendValue("redLed", 5)
})
input.onButtonPressed(Button.B, function () {
    radio.sendValue("servoS1angle", randint(0, 180))
    basic.showLeds(`
        . # # . .
        . # . # .
        . # # . .
        . # . # .
        . # # . .
        `)
})
input.onGesture(Gesture.Shake, function () {
    radio.sendValue("servoS0angle", 0)
    radio.sendValue("servoS1angle", 180)
})
radio.onReceivedValue(function (name, value) {
    basic.showNumber(value)
    basic.showString(name)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showLeds(`
        . # # # .
        . # . # .
        . # # # .
        . # . . .
        . # . . .
        `)
    radio.sendValue("stopAll", 0)
})
radio.setGroup(86)
basic.showIcon(IconNames.Tortoise)
basic.forever(function () {
	
})
