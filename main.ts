basic.showString("kalibrando")
for (let index = 0; index < 10; index++) {
    basic.pause(1000)
}
basic.showString("ok")
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        pins.digitalWritePin(DigitalPin.P1, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.clearScreen()
    }
    basic.pause(100)
})
