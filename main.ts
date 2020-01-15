function backround () {
    scene.setBackgroundColor(9)
}
function score () {
	
}
function enemy () {
    tree = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . f f . . . . . . . . . . . 
. . . . . . . . . . f 8 8 f . . . . . . . . . . 
. . . . . . . . . f f 8 8 f f . . . . . . . . . 
. . . . . . . . . f 2 2 2 2 f . . . . . . . . . 
. . . . . . . . f 2 2 2 2 2 2 f . . . . . . . . 
. . . . . . f f 2 2 2 2 2 2 2 2 f f . . . . . . 
. . . . . f 2 2 2 2 2 2 2 2 2 2 2 2 f . . . . . 
. . . . . f f 2 2 2 2 2 2 2 2 2 2 f f . . . . . 
. . . . . f 2 2 2 2 2 2 2 2 2 2 2 2 f . . . . . 
. . . . f 2 2 f f 2 2 2 2 2 f f f 2 2 f . . . . 
. . . . f f f f 2 2 f f f 2 2 f 2 f f f . . . . 
. . . . . f 2 f 2 f f 2 f f 2 f 2 2 f . . . . . 
. . . . f 2 2 f f f 2 2 f f f f f 2 f . . . . . 
. . . . f 2 f f f f 2 f f f f f f f f f . . . . 
. . . . f f f 2 2 f f f f f f 2 2 f f f . . . . 
. . . . f 2 2 2 f f f f 2 f f f 2 2 2 f . . . . 
. . . f 2 2 2 f f 2 f 2 2 f 2 f f 2 2 2 f . . . 
. . f 2 2 2 2 2 2 2 2 2 2 f 2 2 2 2 2 2 f . . . 
. f 2 2 f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f . . 
. f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 2 f . 
. f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f . 
. . f f 2 2 f 2 2 2 f 2 2 f 2 2 2 2 f 2 2 2 f . 
. . f 2 f f 2 2 f f f 2 2 f f 2 f 2 2 f f 2 2 f 
. f 2 2 f f 2 f f 2 f 2 f 2 2 f f f 2 f f f f f 
f 2 2 f f 2 f f 2 2 f f f f 2 2 f f f f 2 f . . 
f f f f 2 2 f 2 2 f f f f f f 2 f 2 f f 2 2 f . 
. f f f f f f f f f f f f f f f f 2 2 f f 2 f . 
. f f 2 2 2 f f 2 2 f f 2 f f 2 f f 2 f 2 f f . 
. f 2 2 2 f f 2 2 2 f f 2 2 f 2 2 2 2 2 2 2 f f 
f 2 2 2 2 2 2 2 2 2 f 2 2 2 2 2 2 2 2 2 2 2 2 f 
f f f 2 2 2 f 2 2 2 2 2 2 2 2 2 2 f 2 2 2 f f . 
. . f f f f 2 2 f 2 2 2 2 2 2 2 2 2 f f f f . . 
. . . . . f 2 f f 2 2 f 2 2 2 f f 2 f . . . . . 
. . . . . . f f f 2 f f f 2 2 f f f f . . . . . 
. . . . . . . . . f f 8 8 f f . . . . . . . . . 
. . . . . . . . . f 8 8 8 8 f . . . . . . . . . 
. . . . . . . . . f 8 8 8 8 f . . . . . . . . . 
. . . . . . . . f 8 8 8 f 8 8 f . . . . . . . . 
. . . . . . . . f 8 f 8 f f 8 f . . . . . . . . 
`, 100, 0)
    tree.setPosition(31, 51)
}
function player () {
    bob = sprites.create(img`
. . . . . . f f f f . . . . . . . . . . . . . . 
. . . . f f f 2 2 f f f . . . . . . . . . . . . 
. . . f f f 2 2 2 2 f f f . . . . . . . . . . . 
. . f f f e e e e e e f f f . . . . . . . . . . 
. . f f e 2 2 2 2 2 2 e e f . . . . . . . . . . 
. . f e 2 f f f f f f 2 e f . . . . . . . . . . 
. . f f f f e e e e f f f f . . . . . . c c c . 
. f f e f 8 f 4 4 f 8 f e f f . . . . c f f c . 
. f f e 8 8 f 4 4 f 8 f e f f . . . c f f c . . 
. f e e 4 8 8 8 8 8 8 4 e e f . c c f f c . . . 
f f f e e 8 8 8 8 8 4 e e f f e c f f c . . . . 
f e f f e e 4 4 4 4 e e 4 f d d c c c . . . . . 
f e f 4 f e e e e e e f f e d d e . . . . . . . 
f e f . f e e e e e e f 4 4 e e . . . . . . . . 
. f f . f 4 4 8 8 4 4 f . . . . . . . . . . . . 
. . . . f f f f f f f f . . . . . . . . . . . . 
. . . . . f f . . f f . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
    controller.moveSprite(bob)
    bob.setPosition(122, 64)
}
let bob: Sprite = null
let tree: Sprite = null
backround()
player()
enemy()
score()
game.onUpdateInterval(1000, function () {
    enemy()
})
