function moveForward () {
    wuKong.setAllMotor(-80, -80)
}
function turnLeft () {
    wuKong.setAllMotor(0, -80)
}
function turnRight () {
    wuKong.setAllMotor(-80, 0)
}
basic.showIcon(IconNames.Heart)
pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
pins.setPull(DigitalPin.P2, PinPullMode.PullUp)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P1) == 0 && pins.digitalReadPin(DigitalPin.P2) == 0) {
        moveForward()
    } else if (pins.digitalReadPin(DigitalPin.P1) == 1 && pins.digitalReadPin(DigitalPin.P2) == 0) {
        turnLeft()
    } else if (pins.digitalReadPin(DigitalPin.P1) == 0 && pins.digitalReadPin(DigitalPin.P2) == 1) {
        turnRight()
    }
})
