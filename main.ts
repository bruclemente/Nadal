for (let index = 0; index < 4; index++) {
    basic.showLeds(`
        . . # . .
        . . # . .
        . # # # .
        # # # # #
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        # # # # #
        . . # . .
        `)
}
for (let index = 0; index < 4; index++) {
    basic.showLeds(`
        . . # . .
        . # # # .
        # # . # #
        . # # # .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
}
images.createBigImage(`
    # . . # . . . . . #
    . # # . . . # # # #
    . # # # # # # # . .
    . # # . . . # # # #
    # . . # . . . . . #
    `).scrollImage(1, 200)
basic.showString(" Bon Nadal !!!")
basic.forever(function () {
	
})
