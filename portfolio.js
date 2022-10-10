// was trying to use pacman javascript to speed up adding an animation to my picture 
//but wasnt able to work on it enough with dealing with housing issues


var pos = 0;
let pageWidth = left.innerWidth;
const profilepic = "./profile.jpg";
var direction = 0;
var focus = 0;

function Run() {
  let img = document.getElementById("profilepic");
  let pageWidth = window.innerWidth;
  focus = (focus + 1) % 2;
  direction = checkPageBounds(direction, imgWidth, pos, pageWidth);
  img.src = profilepic[direction][focus];
  if (direction) {
    pos -= 20;
    img.style.left = pos + "px";
  } else {
    pos += 20;
    img.style.left = pos + "px";
  }
}
setInterval(Run, 300);

function checkPageBounds(direction, imgWidth, pos, pageWidth) {
  if (direction == 0 && pos + imgWidth > pageWidth) direction = 1;
  if (direction == 1 && pos < 0) direction = 0;

  return direction;
}
