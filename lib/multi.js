"use strict";

var tourSelect = function tourSelect(object) {
  document.getElementById("tour-image").src = object.image;
  document.getElementById("tour-content").innerHTML = object.description;
  document.getElementById("tour-subheading").innerHTML = object.title;
};

var tile1B = document.getElementById('tile1B');
tile1B.title = "Seljalandsfoss";
tile1B.description = "Seljalandsfoss is yet another incredible waterfall offering" + "in the land of the midnight sun. Situated on an ancient inlet, the result of the recession" + "of oceans many millenia ago, few natural sites can match its splendor. Finally get a look at the backside" + "of water with this fantastic opportunity to walk behind a waterfall. ";
tile1B.image = 'images/Tours/Seljalands.jpg';

var tile2B = document.getElementById('tile2B');
tile2B.title = "Skogafoss";
tile2B.description = "Along the Southern Coast of Iceland lies" + " one of the most magnificent water features in all of Europe." + " Skogafoss presents a unique experience to nature lovers in that " + " it is viewable from both the base of the falls as well as " + " elevation. A short but steep hike from the base of the falls leads " + " up a hundred yard stair path ending in a can't miss outlook over the edge" + " of Skogafoss";
tile2B.image = 'images/Tours/SkogafossWide.jpg';

var tile3B = document.getElementById('tile3B');
tile3B.title = "Reynisfjara";
tile3B.description = "Reynisfjara is undoubtedly one of the greatest pulls" + " for tourists to Iceland. Lying on the tan sun perhaps has its charms, but nothing" + "quite compares to walking along a beach of flint black sand, watching arctic waves create" + "a symphonic contrast with pure white swells all with magnificent rock faces millions of years in the making, " + "highlighting the background...";
tile3B.image = 'images/Tours/blacksand.jpg';

var tile4B = document.getElementById('tile4B');
tile4B.title = "SolheimaJokull";
tile4B.description = "Speaking of splendor, Solheimajokull stands as a looming frozen river in time." + " There are scarcely words to describe the magnificence of a Glacier. The power, the size, the stark contrast" + "of volcanic ash, the remnant of Icelands fiery birth, with the cold blue intensity of the glacier. Don't miss out" + " on a natural spectacle that you must truly see to believe.";
tile4B.image = 'images/Tours/Jokull.jpg';

var tile5B = document.getElementById('tile5B');
tile5B.title = "Vik";
tile5B.description = "Quaint. picturesque. You might think you were stuck in a fairy tale. Vik is a charming town situated on a" + " magnificent inlet bay. Whether you're interested in folklore or a place to sit down, relax, and enjoy an authentic Viking meal, there" + " is no better place than Vik.";
tile5B.image = 'images/Tours/Vik.jpg';

var tile6B = document.getElementById('tile6B');
tile6B.title = "Dyrholaey";
tile6B.description = "The natural stone walls of Dyraholaey are themselves, a site worthy of the travel." + "But they are just the beginning of the magic that this natural sanctuary has to offer. Puffins, the national" + "bird of Iceland, flock to Dyrholaey to nest and amaze citizenry with their incredible natural beauty.";
tile6B.image = 'images/Tours/dyrholaey.jpeg';

var tile7B = document.getElementById('tile7B');
tile7B.title = "Seljavallalaug";
tile7B.description = "As the oldest natural pool in Iceland, Seljavallalaug is " + "not something you simply see, its a must have experience. After all, when is the next time" + "you will have the opportunity to swim in a natural spring water pool tucked up against the rugged" + ", wild mountains of the Icelandic wilderness.";
tile7B.image = 'images/Tours/seljavallalaug.jpg';

var tile8B = document.getElementById('tile8B');
tile8B.title = "Svartifoss";
tile8B.description = "Seljalandsfoss is yet another incredible waterfall offering" + "in the land of the midnight sun. Situated on an ancient inlet, the result of the recession" + "of oceans many millenia ago, few natural sites can match its splendor. Finally get a look at the backside" + "of water with this fantastic opportunity to walk behind a waterfall.";
tile8B.image = 'images/Tours/svartifoss.jpg';

var tile9B = document.getElementById('tile9B');
tile9B.title = "Kirkjubaejarklaustur";
tile9B.description = "The crevasse at Kirkjubaejarklaustur (try saying that 2 times fast) is perhaps" + " one of the most uniquely beautiful natural sceneries in a land that is famous for beautiful natural sceneries." + "See the inner workings of the earth as twists to and fro over millenia to create art that surpasses any that many " + "might create.";
tile9B.image = 'images/Tours/klaustur.jpg';

document.addEventListener('DOMContentLoaded', function () {

  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach(function (el) {
      el.addEventListener('click', function () {

        // Get the target from the "data-target" attribute
        var target = el.dataset.target;
        var $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  }
});