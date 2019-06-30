/**
 * 
 * @param {*} target 
 * @param {*} x 
 * @param {*} y 
 */

function AnimateScroll(target, x, y = 0) {
    let currentX = target.scrollLeft;
    let distance = currentX + x;
    // console.log(currentX, distance)
    let speed = 2;
    if (x >= 106 || x <= -106) speed = 3;
    if (x >= 150 || x <= -150) speed = 4;
    let timer = setInterval(() => {
        if (distance > currentX) {
            currentX += speed;
            if (currentX >= distance) clearInterval(timer);
        } else {
            currentX -= speed;
            if (currentX <= distance) clearInterval(timer);
        }
        target.scrollTo(currentX, y);
    }, 1);
}

export default AnimateScroll;