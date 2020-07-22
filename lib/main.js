"use strict";

// const { render } = require("node-sass");

// let modal = document.getElementById("imageModal");


// let imageClicked  = function(){

//   let title;
//   let description;

//   switch(tile){
//       case "tile1":
//         title = jokulsarlon.title;
//         description = jokulsarlon.description;
//         break;
//   }
//   document.getElementById("modalHeader").innerHTML = title;
//   document.getElementById("tourDescription").innerHTML = description;


// modal.style.display="block";
// var id = setInterval(modalTransition, 10);
// var opacity = 0.0;
// function modalTransition() {
//   console.log("inside modalTransition");
//     if (opacity > .6){
//       console.log("in condition");
//       clearInterval(id);
//     } else{
//       modal.style.opacity = opacity + .01;
//       opacity += .01;
//       console.log(opacity);
//     }
// }
// }

var heartClicked = function heartClicked() {
  if (document.getElementById("heart").style.color == "red") {
    console.log("already red");
    document.getElementById("heart").style.color = "grey";
  } else {
    document.getElementById("heart").style.color = "red";
  }
};

var modalPopUp = function modalPopUp(object) {
  var id = object.getAttribute('id');
  var modal = document.getElementById('modal');

  document.getElementById('modalTitle').innerHTML = object.title;
  document.getElementById('modalPic').src = object.image;
  document.getElementById('modalDescription').innerHTML = object.description;

  modal.className = "modal is-active";
};

var deactivateModal = function deactivateModal() {
  var modal = document.getElementById('modal').className = 'modal';
};

/************ image tiles */

var tile1 = document.getElementById('tile1');
tile1.title = "Jokulsarlon";
tile1.description = "Along the scenic-rich southern coast of Iceland lies the " + "breath-taking Glacier Bay (Jokulsarlon in native Icelandic) " + "where the Breidamerkur glacier meets the arctic ocean. " + "Come see this breath-taking display of nature in its ever" + "changing beauty.";
tile1.image = 'images/Jokulsarlon.jpg';

var tile2 = document.getElementById('tile2');
tile2.title = "The Golden Circle";
tile2.description = "Venture Iceland's most popular tour. From the Kerid crater lake to Geysir the legendary geyser field" + "to Thingvellir national park which lies along the fault line of the North American and EuroAsian plates to Europes most powerful waterfall" + ", Gullfoss this is a must-see for every adventurer.";
tile2.image = 'images/Geysir.jpg';

var tile3 = document.getElementById('tile3');
tile3.title = "Hidden Wonders Tour";
tile3.description = "Want an authentic experience with nature without the hastle of jostling with endless torrents of tourists?" + "The Hidden Wonders Tour takes you along the south coast to see the dozens of spectacular sites that as of yet have remained hidden" + "from the overhwhelming number of visitors.";
tile3.image = 'images/Kvernufoss.jpg';

var tile4 = document.getElementById('tile4');
tile4.title = "Southern Coast";
tile4.description = "The eastern route along the Ringroad in the southwest of Iceland is one of the most breath-taking and magnificent" + " natural spectacles not just in Iceland, but in all of the world. Come see Skogafoss, one of Icelands largest and most beautiful waterfalls, as well as" + " Seljalandsfoss, a unique waterfall located on the edge of a cliff where you can actually walk behind, and the beautiful coastal city of Vik.";
tile4.image = 'images/Skogafoss.jpg';

var tile5 = document.getElementById('tile5');
tile5.title = "The Icelandic Highlands";
tile5.description = "Scarcely does a more alien and celestial environment exist on the earth than The Icelandic Highlands" + "Dive straight into the remote and exhilirating inland environment of Iceland and prepare to be transported to another world." + " Explore the incredible hiking routes through Landmannalaugar and the quaint and rustic history of the ancient viking village at" + " Kirjubaejarklaustur along with a myriad of unspoiled waterfalls (there are always a few of those lying around) and magnificent natural phenomena.";
tile5.image = 'images/landmannalaugar.jpg';

var tile6 = document.getElementById('tile6');
tile6.title = "Perlan";
tile6.description = "Need a day of relaxation and respite from the elements? Enjoy the Perlan, one of Reykjaviks most interesting pieces of architecture" + "inside you enjoy a historical museum describing Icelands original habitats and a delicious rooftop restaurant serving all of Iceland's most popular delicacies.";
tile6.image = 'images/Perlan.jpg';

var tile7 = document.getElementById('tile7');
tile7.title = "Reykjavik City";
tile7.description = "Enjoy a day long tour of the world's northern most capital City. Reykjavik possesses all the small town charm" + " as well as the dining and attractions offered of bustling city.";
tile7.image = 'images/Downtown.jpg';

var tile8 = document.getElementById('tile8');
tile8.title = "Blue Lagoon";
tile8.description = "Come and pamper yourself in the beautiful blue waters of the Blue Lagoon. Its waters are rich in silica, a " + "material known for revitilizing and renewing skin. Only a few minutes from Keflavik international airport, this one tops the list.";
tile8.image = 'images/Blue-Lagoon2.jpg';

var tile9 = document.getElementById('tile9');
tile9.title = "Glymur";
tile9.description = "Glymur offers a truly unique and special hike that takes approximately 2 hours round trip and offers spectacular" + " views of the narrow canyon cut from the earth by the potent cocktail of water and time.";
tile9.image = 'images/Glymur.jpg';

/********************* Hamburger Toggle ***************/

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