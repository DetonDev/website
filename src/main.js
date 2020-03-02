/*

this file contains the code for my website

*/

/* this function types out text */
function type(selected, txt, speedMin, speedMax) {

  let i = 0; /* set i to 0 beforehand */
  let speed = Math.floor(Math.random() * (speedMax - speedMin + 1) + speedMin); /* vary the typing time between each letter */

  setInterval(function() {

    if (i < txt.length) {

     document.getElementById(selected).innerHTML += txt.charAt(i); /* add a letter of the text to the selected element */
     i++; /* increment to next letter */
     speed = Math.floor(Math.random() * (speedMax - speedMin + 1) + speedMin); /* vary the typing time between each letter */

    } else {

      clearInterval();

    };
  
  }, speed);

};

type("title", "This is a test.", 30, 70);
type(
  "description", 
  `
  This is a test. This entire site is a test. The text above this paragraph is a test. 
  This text itself is a test, too. All of the actual stuff I am going to put on this 
  site is being worked on and will be released here soon. Stay tuned!                        
  `,
  15,
  30
);