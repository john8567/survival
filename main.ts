controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    fire = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . 
. . . . . . 4 4 4 4 . . . . . . 
. . . . 4 4 4 4 4 4 4 4 . . . . 
. . . 2 2 2 2 4 4 4 4 4 4 . . . 
. . 4 2 2 2 2 2 2 2 2 2 4 4 . . 
. . 2 2 2 2 2 2 2 2 2 2 4 4 . . 
. 4 2 2 2 2 2 2 2 2 2 4 4 4 4 . 
. 4 2 2 2 2 2 2 4 4 4 4 4 4 4 . 
. 4 4 2 2 2 2 4 4 4 4 4 4 4 4 . 
. 4 2 2 2 2 2 4 4 4 4 4 4 4 4 . 
. . 4 2 2 2 2 4 4 4 4 4 2 4 . . 
. . 4 2 2 2 2 2 4 4 4 2 4 4 . . 
. . . 4 2 2 2 2 2 2 2 2 4 . . . 
. . . . 4 4 2 2 2 2 4 4 . . . . 
. . . . . . 4 4 4 4 . . . . . . 
. . . . . . . . . . . . . . . . 
`, -50, 0)
})
let villian: Sprite = null
let fire: Sprite = null
game.splash("Directions for Game:Survive The Wave")
let hero = sprites.create(img`
. . . . f f f f f . . . . . . . 
. . . f 2 2 2 2 2 f . . . . . . 
. . f f f f f 2 2 2 f . . . . . 
. 8 f 8 f 8 f f 2 2 f f . . . . 
. 8 f f f f f f 2 2 f f f . . . 
8 f 2 2 f f f f 2 2 8 f 8 . . . 
8 f f f f 8 f f 2 2 8 f 8 . . . 
8 8 8 8 8 f f 2 2 2 f 8 . . . . 
. f f f f f 2 2 2 f f . . . . . 
. . f f f f f 2 2 2 2 f . . . . 
. . . . f f 2 2 2 2 2 2 f . f f 
. . . f 2 2 f 2 2 f 2 2 f . 2 f 
. . f 2 2 f 2 2 f 2 2 2 f . 2 f 
. f 8 f f f 8 f 8 8 f 2 f f 2 f 
. f f f f f f f f f 8 2 f f f f 
. . f f f f f f f f f f f f f . 
`, SpriteKind.Player)
hero.x = 150
controller.moveSprite(hero, 0, 100)
hero.setFlag(SpriteFlag.StayInScreen, true)
info.startCountdown(50)
forever(function () {
    villian = sprites.create(img`
. . . . . . . . . . 8 2 8 . . . 
. . . . . . . . . 8 2 8 . . . . 
. . . . . . 8 8 8 8 8 8 . . . . 
. . . . . 8 8 2 2 2 2 2 8 . . . 
. . . . 8 8 2 f 8 f 2 f 2 c . . 
. . . . 8 2 2 8 f f f f 2 2 2 8 
. . . . 8 2 2 f f 8 2 2 2 2 8 . 
. . . 8 f 2 2 2 2 2 2 2 2 8 . . 
. . 8 f f 2 2 2 2 2 2 2 2 8 . . 
. 8 f f f f 2 2 2 2 2 2 2 2 8 . 
8 f f f 8 8 8 2 2 2 2 2 2 2 8 . 
8 f f 8 2 2 f 8 2 2 2 2 2 2 8 . 
8 8 8 f 2 f 8 f 2 2 2 2 2 2 8 . 
. 8 2 2 8 8 f f 2 2 2 2 2 f 8 . 
8 8 8 8 8 f f f f 2 2 2 8 8 . . 
. . . 8 8 8 8 8 8 8 8 8 8 . . . 
`, SpriteKind.Enemy)
    villian = sprites.create(img`
. . . . . . . . . . 8 2 8 . . . 
. . . . . . . . . 8 2 8 . . . . 
. . . . . . 8 8 8 8 8 8 . . . . 
. . . . . 8 8 2 2 2 2 2 8 . . . 
. . . . 8 8 2 f 8 f 2 f 2 8 . . 
. . . . 8 2 2 8 f f f f 2 2 2 8 
. . . . 8 2 2 f f 8 2 2 2 2 8 . 
. . . 8 f 2 2 2 2 2 2 2 2 8 . . 
. . 8 f f 2 2 2 2 2 2 2 2 8 . . 
. 8 f f f f 2 2 2 2 2 2 2 2 8 . 
8 f f f 8 8 8 2 2 2 2 2 2 2 8 . 
8 f f 8 2 2 f 8 2 2 2 2 2 2 8 . 
8 8 8 f 2 f 8 f 2 2 2 2 2 2 8 . 
. 8 2 2 8 8 f f 2 2 2 2 2 f 8 . 
8 8 8 8 8 f f f f 2 2 2 8 8 . . 
. . . 8 8 8 8 8 8 8 8 8 8 . . . 
`, SpriteKind.Player)
    villian.setPosition(0, Math.randomRange(0, 120))
    villian.vx = 80
    pause(500)
})
