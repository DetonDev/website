function type(selectedElement, typeText) {

  let i = 0; /* set i to 0 beforehand */

  if (i < typeText.length) {

    let speed = Math.floor(Math.random() * (70 - 30 + 1) + 30); /* vary the typing time between each letter */
    document.getElementById(selectedElement).innerHTML += typeText.charAt(i); /* add a letter of the text to the selected element */
    i++; /* increment to next letter */
    setTimeout(type, speed); /* wait a few miliseconds before typing again */

  };

};

type("title", "Samuel Giles");
