var ctx = document.getElementById('canvas').getContext('2d')

    ctx.lineWidth = 10

    ctx.fillStyle ='red'
    ctx.strokeStyle = 'black'
    ctx.fillRect(430, 50, 150, 120)
    ctx.strokeRect(430, 50, 150, 120)

    ctx.fillStyle = 'pink'
    ctx.strokeStyle = 'black'
    ctx.arc(500, 280, 70,0, 2*Math.PI)
    ctx.fill()
    ctx.stroke()

    ctx.fillStyle = 'blue'
    ctx.strokeStyle = 'black'
    ctx.beginPath()
    ctx.moveTo(300, 40)
	ctx.lineTo(230, 175)
	ctx.lineTo(370, 175)
    ctx.closePath()
    ctx.fill()
    ctx.stroke()

    ctx.fillStyle = 'orange'
    ctx.strokeStyle = 'black'
    ctx.beginPath()
    ctx.moveTo(45, 230)
    ctx.lineTo(135, 230)
    ctx.lineTo(165, 345)
    ctx.lineTo(15, 345)
    ctx.closePath()
    ctx.fill()
    ctx.stroke()

    ctx.fillStyle = 'green'
    ctx.strokeStyle = 'black'
    ctx.beginPath()
    ctx.moveTo(290, 220)
    ctx.lineTo(355, 268)
    ctx.lineTo(330, 340)
    ctx.lineTo(250, 340)
    ctx.lineTo(225, 268)
    ctx.closePath()
    ctx.fill()
    ctx.stroke()
    
    ctx.fillStyle = 'purple'
    ctx.strokeStyle = 'black'
    ctx.beginPath()
    ctx.moveTo(65, 35)
    ctx.lineTo(128, 35)
    ctx.lineTo(158, 75)   
    ctx.lineTo(157, 125)
    ctx.lineTo(128, 160)
    ctx.lineTo(65, 160)
    ctx.lineTo(35, 128)
    ctx.lineTo(35, 75)
    ctx.closePath()
    ctx.fill()
    ctx.stroke()
