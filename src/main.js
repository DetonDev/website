var i = 0;
var txt = "Samuel Giles"; /* The text */
/* var speed = 50; The speed/duration of the effect in milliseconds */

function type() {
  if (i < txt.length) {
    document.getElementById("title").innerHTML += txt.charAt(i);
    i++;
    speed = Math.floor(Math.random() * (70 - 30 + 1) + 30);
    setTimeout(type, speed);
  }
}

type();