/* this file contains the code for my website */

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
    "desc": "A fun [REDACTED] hole to get lost in if you haven't already."
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
  },
  {
    "link": "https://www.yourworldoftext.com/",
    "desc": "A site with an infinite textfield that anyone can edit."
  },
  {
    "link": "https://candybox2.github.io/",
    "desc": ">O<"
  },
  {
    "link": "https://ayolland.itch.io/trevor",
    "desc": "An awesome Bitsy game."
  },
  {
    "link": "https://nitter.net/cavern_caravan",
    "desc": "A Twitter bot that describes the journeys of a caravan wandering through the Earth's depths."
  },
  {
    "link": "https://www.alexanderperrin.com.au/paper/shorttrip/",
    "desc": "A nice little trip. :)"
  },
  {
    "link": "https://amazondating.co/",
    "desc": "When Amazon gets into the dating business."
  },
  {
    "link": "http://www.stealthboats.com/",
    "desc": "The web's #1 site for stealth boat images."
  },
  {
    "link": "https://www.ovaprima.org/",
    "desc": "The chicken or the egg?"
  },
  {
    "link": "https://www.stonebalancing.com/",
    "desc": "Pretty pretty."
  },
  {
    "link": "https://www.how-to-waste-your-time.com/",
    "desc": "A helpful site that will teach you how to waste your time."
  },
  {
    "link": "https://orteil.dashnet.org/nested",
    "desc": "A cool web-based universe exploration simulator."
  },
  {
    "link": "https://www.1112.net/lastpage.html",
    "desc": "final.txt"
  },
  {
    "link": "http://www.madsci.org/cgi-bin/lynn/jardin/SCG",
    "desc": "A surrealist compliment generator."
  },
  {
    "link": "https://kevan.org/wikitext/",
    "desc": "Wikipedia, but as an old-school text adventure."
  },
  {
    "link": "https://www.koalastothemax.com/",
    "desc": "OCD simulator."
  },
  {
    "link": "https://www.uliwestphal.de/elephas-anthropogenus/index.html",
    "desc": "An intresting history of vintage elephant illustrations."
  },
  {
    "link": "https://www.factslides.com/",
    "desc": "A slideshow of facts."
  },
  {
    "link": "https://blog.ncase.me/curse-of-the-chocolate-covered-broccoli-or-emotion-in-learning/",
    "desc": "chocolate-covered brocoli"
  },
  {
    "link": "https://beepbox.co",
    "desc": "A helpful tool that lets you make retro video game music online!"
  },
  {
    "link": "https://www.hermit-crabs.com/",
    "desc": "Hermit crabs."
  },
  {
    "link": "https://mirror.ifarchive.org/if-archive/games/competition2013/web/solarium/solarium.html#1e",
    "desc": "A cool game made in Twine."
  },
  {
    "link": "https://informationisbeautiful.net/visualizations/intermental/",
    "desc": "A list of possible tech-induced cognitive-behavioral disorders."
  },
  {
    "link": "https://simonstalenhag.se/",
    "desc": "An artist who makes interesting art."
  },
  {
    "link": "https://perchance.org/welcome",
    "desc": "A tool for creating random generators."
  },
  {
    "link": "http://yokai.com/",
    "desc": "A repository of Japanese folklore."
  },
  {
    "link": "https://www.zooniverse.org/",
    "desc": "A website that allows you to help scientists with their research."
  },
  {
    "link": "https://dangermouse.net/esoteric/chef.html",
    "desc": "A programming language where all the programs are recipies."
  },
  {
    "link": "https://invidio.us/watch?v=Rv9hn4IGofM&autoplay=0&continue=0&dark_mode=true&listen=0&local=1&loop=0&nojs=0&player_style=youtube&quality=dash&thin_mode=false",
    "desc": "dat lizard tho"
  },
  {
    "link": "https://psychology.wikia.org/wiki/Cultural_universals",
    "desc": "A list of some things that every known culture has."
  },
  {
    "link": "https://www.iterary.com/",
    "desc": "A cool site that lets you quickly prototype card & RPG games."
  },
  {
    "link": "https://distrotest.net",
    "desc": "A helpful site that allows you to test out different distributions of Linux."
  },
  {
    "link": "https://2bit.neocities.org/docs/thorn.html",
    "desc": "Well þats quite an interesting proposal!"
  },
  {
    "link": "https://mitpress.mit.edu/sites/default/files/sicp/full-text/book/book-Z-H-9.html#%_chap_1",
    "desc": "An interesting old textbook about programming."
  },
  {
    "link": "https://www.conservethesound.de/",
    "desc": "An online project dedicated to preserving the sounds of obsolete technology."
  },
  {
    "link": "https://outrider.org/nuclear-weapons/interactive/bomb-blast/?airburst=true&bomb=3&lat=40.72&location=New%20York%2C%20New%20York%2010002%2C%20United%20States&long=-73.99",
    "desc": "An interactive site showing what would happen if you dropped a nuclear bomb anywhere in the world."
  },
  {
    "link": "https://www.thispersondoesnotexist.com/",
    "desc": "An AI that generates a random picture of a person everytime you reload the page."
  },
  {
    "link": "http://presidentialham.com/",
    "desc": "Paintings of every U.S president, but holding a ham."
  },
  {
    "link": "https://joshworth.com/dev/pixelspace/pixelspace_solarsystem.html",
    "desc": "A website that shows the true scale of the Solar System."
  },
  {
    "link": "http://www.bash.org/",
    "desc": "An archive of old IRC chatlogs."
  },
  {
    "link": "https://cuberule.com/",
    "desc": "The proper method for classifying food."
  },
  {
    "link": "https://geon.github.io/programming/2016/03/03/dsxyliea",
    "desc": "A website that simulates what it's like to have dyslexia."
  },
  {
    "link": "https://gcemetery.co/",
    "desc": "A list of every product that Google has discontinued."
  },
  {
    "link": "https://www.howacarworks.com/",
    "desc": "An educational site that will teach you about how cars work."
  },
  {
    "link": "https://www.fieggen.com/shoelace/",
    "desc": "The #1 site on the internet for shoelace-related content."
  },
  {
    "link": "https://traffic-simulation.de/ring.html",
    "desc": "A tiny simulation of traffic."
  },
  {
    "link": "https://www.howmanypeopleareinspacerightnow.com/",
    "desc": "A cool site that lists all the people currently in space."
  },
  {
    "link": "https://www.rhymezone.com/",
    "desc": "A helpful site that allows you to look up any word and find another word that rhymes with it."
  },
  {
    "link": "https://www.random.org/",
    "desc": "The best website for random number generation on the internet."
  },
  {
    "link": "https://en.m.wikipedia.org/wiki/Wikipedia:Unusual_articles",
    "desc": "All of Wikipedia's weirdest content in one place."
  }
];

let textPrinted = 0;

/* this function types out text */
function type(selected, txt, speedMin, speedMax) {

  let i = 0; /* set i to 0 beforehand */
  let speed = Math.floor(Math.random() * (speedMax - speedMin + 1) + speedMin); /* vary the typing time between each letter */

  let mainLoop = setInterval(function() {

    if (i < txt.length) {

     document.getElementById(selected).innerHTML += txt.charAt(i); /* add a letter of the text to the selected element */
     i++; /* increment to next letter */
     speed = Math.floor(Math.random() * (speedMax - speedMin + 1) + speedMin); /* vary the typing time between each letter */

    } else {

      clearInterval(mainLoop);
      textPrinted++;
      console.log(textPrinted)

    };
  
  }, speed);

};

type("title", "This is a test.", 30, 70);
if (textPrinted == 1) {
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
};