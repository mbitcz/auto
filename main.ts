basic.showIcon(IconNames.Heart)
basic.pause(2000)
RingbitCar.init_wheel(AnalogPin.P1, AnalogPin.P2)
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    RingbitCar.freestyle(40, 40)
    if (RingbitCar.ringbitcar_sonarbit(RingbitCar.Distance_Unit.Distance_Unit_cm) < 30) {
        RingbitCar.freestyle(-50, -50)
        basic.showIcon(IconNames.Surprised)
        basic.pause(2000)
        RingbitCar.brake()
        basic.showIcon(IconNames.Happy)
    }
})
