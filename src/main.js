/*

this file contains the code for my website

*/

/* a collection of interesting links */
const links = [
  {
    "link": "https://dannyvankooten.com/website-carbon-emissions/",
    "desc": "A thought-provoking read about the internet's effect on climate change."
  },
  {
    "link": "https://digitalpsychology.io/",
    "desc": "An educational and mildly creepy site that teaches psychological principles, complete with examples."
  },
  {
    "link": "https://100r.co/site/home.html",
    "desc": "The website of two very awesome people and their projects. Leads off to many related intresting sites if you dig deep enough."
  },
  {
    "link": "http://www.aaronsw.com/weblog/rawnerve",
    "desc": "An interesting series of blogposts."
  },
  {
    "link": "http://www.rinkworks.com/bookaminute/",
    "desc": "A site that offers classic books, but shortened down to a few sentences for easy reading."
  },
  {
    "link": "https://www.kiwix.org/en/",
    "desc": "A very useful project that allows you to download Wikipedia and read it offline."
  },
  {
    "link": "https://www.kiwix.org/en/",
    "desc": "A very useful project that allows you to download Wikipedia and read it offline."
  },
  {
    "link": "https://www.gutenberg.org/",
    "desc": "An online library with lots of public domain ebooks to read."
  },
  {
    "link": "https://collapseos.org/",
    "desc": "A curious little project to make an OS for the apocalypse."
  },
  {
    "link": "https://www.opensourceecology.org/",
    "desc": "A cool project to open source the technology that modern civilization depends on."
  },
  {
    "link": "https://www.hathitrust.org/",
    "desc": "A digital library that has lots of books you can read freely. (Note: some content that you cannot read freely is here too)"
  },
  {
    "link": "https://explorabl.es/",
    "desc": "An awesome site that has a collection of educational video games, blogposts, diagrams, and all sorts of other interactive educational resources."
  },
  {
    "link": "https://explorabl.es/",
    "desc": "An awesome site that has a collection of educational video games, blogposts, diagrams, and all sorts of other interactive educational resources."
  },
  {
    "link": "https://artsandculture.google.com/partner",
    "desc": "A large collection of virtual museum tours created by Google."
  },
  {
    "link": "https://wiki.archlinux.org/",
    "desc": "The only Linux learning resource you will actually ever need, despite being specifically for Arch Linux."
  },
  {
    "link": "https://archive.org/",
    "desc": "Have fun exploring! (and never coming back out...)"
  },
  {
    "link": "https://www.khanacademy.org/",
    "desc": "A free, high quality learning resource."
  },
  {
    "link": "https://science.nasa.gov/",
    "desc": "NASA's official website for teaching astrophysics. Lots of fun learning here!"
  },
  {
    "link": "https://www.privacytools.io/",
    "desc": "An informative website about the human right of privacy."
  },
  {
    "link": "https://www.cavestory.org/download/cave-story.php",
    "desc": "An influential indie game from a while ago. Also it's free."
  },
  {
    "link": "https://iplayif.com/?story=http%3A%2F%2Fwww.ifarchive.org%2Fif-archive%2Fgames%2Fzcode%2Fphotopia.z5",
    "desc": "An old, freely-avaliable text adventure that influenced game storytelling."
  },
  {
    "link": "https://doublespeakgames.github.io/adarkroom/",
    "desc": "A minimalist adventure."
  },
  {
    "link": "https://www.theworldsworstwebsiteever.com/",
    "desc": "A website purposely made to be as bad as possible to teach viewers about bad website design."
  },
  {
    "link": "http://www.scp-wiki.net/",
    "desc": "A fun rabbit hole to get [REDACTED] in if you haven't already."
  },
  {
    "link": "http://endless.horse/",
    "desc": "horse"
  },
  {
    "link": "http://www.placebobutton.com/",
    "desc": "Your new favorite button."
  },
  {
    "link": "https://www.telegraphpoleappreciationsociety.org/",
    "desc": "Telegraph poles are the most underappreciated things in the world."
  },
  {
    "link": "https://cat-bounce.com/",
    "desc": "Yes"
  },
  {
    "link": "https://neal.fun/",
    "desc": "Fun things for people who have way too much time on their hands."
  },
  {
    "link": "https://motherfuckingwebsite.com/",
    "desc": "10/10"
  },
  {
    "link": "https://llamafont.com/",
    "desc": "Llama body language."
  },
  {
    "link": "https://oldcomputers.net/",
    "desc": "An educational site about vintage computing."
  },
  {
    "link": "https://lostmediawiki.com/Home",
    "desc": "A wiki about media that is missing or has been lost."
  },
  {
    "link": "https://www.handspeak.com/",
    "desc": "A website that will help you learn American Sign Language(ASL)."
  },
  {
    "link": "https://en.m.wikipedia.org/wiki/Mad_Gasser_of_Mattoon",
    "desc": "A wikipedia arcticle about a very peculiar occurence."
  },
  {
    "link": "https://en.m.wikipedia.org/wiki/Dancing_plague_of_1518",
    "desc": "A wikipedia arcticle about a very groovy plague."
  },
  {
    "link": "https://en.m.wikipedia.org/wiki/Guerrilla_gardening",
    "desc": "A wikipedia arcticle about the coolest form of rebellion."
  },
  {
    "link": "https://en.m.wikipedia.org/wiki/Jedi_census_phenomenon",
    "desc": "A wikipedia arcticle about the power of the internet."
  },
  {
    "link": "https://en.m.wikipedia.org/wiki/Raymond_Robinson_(Green_Man)",
    "desc": "A wikipedia arcticle about a chap who really just wanted to take a walk."
  },
  {
    "link": "https://askabiologist.asu.edu/plosable/zombie-ants",
    "desc": "A biologist describes a very unusual fungus."
  },
  {
    "link": "https://spider.zone/blog/economies.html",
    "desc": "An interesting blogpost about video games and their economies."
  },
  {
    "link": "https://historicalgames.neocities.org/",
    "desc": "An educational site about various games from antiquity and how to play them."
  },
  {
    "link": "https://castlecyberskull.neocities.org/",
    "desc": "ENTER THE CASTLE"
  },
  {
    "link": "https://edlinfan.neocities.org/blog/posts/converge.htm",
    "desc": "An interesting blogpost about techology."
  },
  {
    "link": "https://en.m.wikipedia.org/wiki/Great_Molasses_Flood",
    "desc": "Remember the Boston Molassacre?"
  },
  {
    "link": "https://www.britannica.com/topic/Antikythera-mechanism",
    "desc": "An awesome Ancient Greek machine."
  },
  {
    "link": "https://electricarchaeology.ca/",
    "desc": "An intresting blog about archaeology and techology."
  },
  {
    "link": "https://waitbutwhy.com/",
    "desc": "A cool blog with lots of stick figures."
  },
  {
    "link": "https://invidio.us/feed/trending",
    "desc": "Don't want Google tracking what you watch? This alternate Youtube frontend will help you watch with improved privacy."
  },
  {
    "link": "https://en.m.wikipedia.org/wiki/Beard_Liberation_Front",
    "desc": "Ending discrimination, one beard at a time."
  },
  {
    "link": "https://www.amusingplanet.com/2017/06/heikegani-crab-with-human-face.html",
    "desc": "Woah."
  },
  {
    "link": "https://www.esa.int/Science_Exploration/Space_Science/Mars_Express/Cydonia_-_the_face_on_Mars",
    "desc": "Mars is a pretty cool planet."
  },
  {
    "link": "https://libraryofbabel.info/",
    "desc": "An online adaptation of the library from the Jorge Luis Borges short story."
  },
  {
    "link": "https://en.m.wikipedia.org/wiki/Georgia_Guidestones",
    "desc": "The tale of some weird Stonehenge clone some anonymous people paid for."
  },
  {
    "link": "https://www.mercuryos.com/",
    "desc": "An interesting design."
  },
  {
    "link": "https://kolibrios.org/en/index",
    "desc": "KolibriOS is the world's smallest existing OS with a GUI."
  },
  {
    "link": "https://qntm.org/suicide",
    "desc": "It's like Linux but your hard drive gets wiped if you mess up a command."
  },
  {
    "link": "http://hannahmontana.sourceforge.net/",
    "desc": "It's like Linux but with more Hannah Montanna."
  },
  {
    "link": "https://www.templeos.org/",
    "desc": "An OS created by a schizophrenic programmer."
  },
  {
    "link": "https://twinery.org/",
    "desc": "An easy-to-use tool that allows almost anyone to make a text-based game."
  },
  {
    "link": "https://ledoux.itch.io/bitsy",
    "desc": "An easy-to-use tool that allows almost anyone to make a grid-based game."
  },
  {
    "link": "https://longestjokeintheworld.com/",
    "desc": "('-')7"
  }
];

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