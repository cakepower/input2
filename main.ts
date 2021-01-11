let count2 = 0
let count = 0
let light_Sensor = 0
let strip = neopixel.create(DigitalPin.P11, 24, NeoPixelMode.RGB)
strip.setBrightness(20)
strip.showColor(neopixel.colors(NeoPixelColors.Black))
basic.pause(100)
basic.forever(function () {
    for (let index2 = 0; index2 <= 24; index2++) {
        light_Sensor = input.acceleration(Dimension.X) / 5
        strip.setPixelColor(index2, neopixel.colors(NeoPixelColors.White))
        strip.show()
        basic.pause(light_Sensor)
        strip.setPixelColor(index2, neopixel.colors(NeoPixelColors.Black))
        strip.show()
        count = index2 + 1
        if (count == 24) {
            count = 0
        } else {
            strip.setPixelColor(count, neopixel.colors(NeoPixelColors.White))
            strip.show()
            basic.pause(light_Sensor)
        }
        if (index2 == 24) {
            count2 += 1
        }
    }
    if (count2 % 10 == 0) {
        strip.setBrightness(20)
        strip.showColor(neopixel.colors(NeoPixelColors.Indigo))
        basic.pause(500)
        strip.setBrightness(20)
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
    }
})
