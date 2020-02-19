
let poly = document.body.querySelector('polygon')
let box = document.body.querySelector('svg')


function clicked(evt) {
    var e = evt.target;
    var dim = e.getBoundingClientRect();
    var x = evt.clientX - dim.left;
    var y = evt.clientY - dim.top;
    penTool({x: x, y: y})
}

function penTool(coordinates){
    x = coordinates.x
    y = coordinates.y
    let view = document.getElementById("view-port")
    let newCircle = document.createElement("CIRCLE")
    newCircle.style.fill = "white"
    newCircle.style.stroke = "black"
    newCircle.style.cx = 170
    newCircle.style.cy = 50
    newCircle.style.r = x
    debugger
    poly.parentNode.appendChild(newCircle)

}