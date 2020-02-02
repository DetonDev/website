/* var txt = "Samuel Giles"; The text */

function type(txt) {

  let i = 0;
  txt.toString();

  if (i < txt.length) {

    let speed = Math.floor(Math.random() * (70 - 30 + 1) + 30);
    document.getElementById("title").innerHTML += txt.charAt(i);
    i++;
    setTimeout(type, speed);

  };

};

type("Samuel Giles");