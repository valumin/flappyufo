var canvas = document.getElementById("background-canvas")
var ctx = canvas.getContext("2d")


// Canvas Settings
const screenWidth = 1000
const screenheight = 700


canvas.width = screenWidth
canvas.height = screenheight

ctx.moveTo(0, 0)
ctx.lineTo(700, 600)
ctx.stroke()


setInterval(() => {
    UFO.Start()
    UFO.Update()
}, 1000 / 1);

let UFO = 
{
    sprite: {
        url: "assets/images/canvas-game/ufo.png",
        isLoaded: false,
        size: {
            x: 64,
            y: 64
        },
        image: null
    },
    LoadSprite: function() {
        this.sprite.image = new Image(null, this.sprite.size.x, this.sprite.size.y)
        this.sprite.image.src = this.sprite.url
        this.sprite.image.onload = function () {
            this.sprite.isLoaded = true
        }
    },
    Start: function() {
        this.LoadSprite()
    },
    Update: function() {
        this.Draw()
    },
    Draw: function() {
        if(!this.sprite.isLoaded) return

        ctx.drawImage(this.sprite.image, this.sprite.size.x, this.sprite.size.y)
    }

}