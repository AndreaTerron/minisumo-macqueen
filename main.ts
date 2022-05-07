basic.forever(function () {
    // siguelíneas para no salir del tatami
    while (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
        // ultrasonido para empujar obstáculos
        if (maqueen.Ultrasonic(PingUnit.Centimeters) < 10) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
            // Led de ataque
            maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
        } else {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 40)
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
            maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
        }
    }
    if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 40)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
    } else {
        if (maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1) {
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 40)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
        }
    }
})
