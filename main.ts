input.onGesture(Gesture.Shake, function () {
    if (randint(1, 6) == 1) {
        music.playMelody("C5 B A G F E D C ", 120)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
    if (randint(1, 6) == 2) {
        music.playMelody("C5 B A G F E D C ", 120)
        basic.showLeds(`
            . . . . .
            . . . # .
            . . . . .
            . # . . .
            . . . . .
            `)
    }
    if (randint(1, 6) == 3) {
        music.playMelody("C5 B A G F E D C ", 120)
        basic.showLeds(`
            . . . . #
            . . . . .
            . . # . .
            . . . . .
            # . . . .
            `)
    }
    if (randint(1, 6) == 4) {
        music.playMelody("C5 B A G F E D C ", 120)
        basic.showLeds(`
            # . . . #
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            `)
    }
    if (randint(1, 6) == 5) {
        music.playMelody("C5 B A G F E D C ", 120)
        basic.showLeds(`
            # . . . #
            . . . . .
            . . # . .
            . . . . .
            # . . . #
            `)
    }
    if (randint(1, 6) == 6) {
        music.playMelody("C5 B A G F E D C ", 120)
        basic.showLeds(`
            . . . . .
            # . # . #
            . . . . .
            # . # . #
            . . . . .
            `)
    }
})
