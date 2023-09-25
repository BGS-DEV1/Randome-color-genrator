const button = document.querySelector('button');
function rgbToHex(r, g, b) {
    return "#" + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1);
}
  
  
button.addEventListener('click', function () {
    console.log(this) 
    // genrate random value 0-255 for a color
    const red = Math.floor(Math.random()*255);
    const greenb = Math.floor(Math.random()*255);
    const blue = Math.floor(Math.random()*255);

    // make string as rgb sentex
    const color = `rgb(${red},${greenb},${blue});`;

    // set previousElement in this string
    button.previousElementSibling.innerHTML= color;
    document.querySelector('.hex').innerHTML = rgbToHex(red, greenb, blue);
    // now set this string as background color 
    const nextSibling = button.nextElementSibling
    nextSibling.setAttribute('style', `background-color:${color}`)
    console.log()

})
