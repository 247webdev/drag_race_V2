(function() {
// this class manages the xmas tree
  var ChristmasTree = function() {
    // get a reference to the pre stage lights html element
    this.$preStageLights = document.getElementById('pre-stage');
    this.$stageLights = document.getElementById('stage');
    this.$lights = document.getElementsByClassName('lights');
    this.$foul = document.getElementsByClassName('foul');
    // reset the christmas tree every time it's initialized
    this.reset();
  };  
  ChristmasTree.prototype.reset = function() {
    // append the css on class to the pre stage lights
    // so that they show up as yellow
    this.$preStageLights.className += " on";
    this.$stageLights.className += " off";
    this.$lights.forEach(function(elem){ elem.className += " off" });
    // for (var i = 0; i < this.$lights.length; i++) {
    //   this.$lights[i].className += " off";
    // }
    this.$foul[0].className += " off";
  };

// this class manages the racetrack
  var RaceTrack         = function() {
    // this class manages the race track
    this.$preStagedLine = document.getElementById('pre-staged') ;
    this.$stagedLine = document.getElementById('staged');
    this.$startLine = document.getElementById('start');
    this.$finishLine = document.getElementById('finish');
    console.log("preStagedLine" + this.$preStagedLine.style.left + "\n" +
                "stagedLine" + this.$stagedLine.style.left + "\n" +
                "startLine" + this.$startLine.style.left + "\n" +
                "finishLine" + this.$finishLine.style.left );
  };

// this class manages the dragster
  var Dragster          = function() {
    // grab the car element
    this.$el = document.getElementById('dragster');
    // set the starting position of the dragster
    this.$el.style.left = "0px";
    // set the starting position of the engine
    this.engine = false;
  };
  Dragster.prototype.advance = function() {
    // this should move the car across the screen
    var finishLine = 500;
    var carLocation = this.$el.style.left;
    if( parseInt(carLocation) + 15 < finishLine ){
      carLocation = parseInt(carLocation) + 15 + "px";
    } else {
// this car passed the finish line
    }
  };

//   Dragster.prototype.start = function() {
// //    console.log("starting engine" + this.engine);
//     // this starts the car's engine
//     this.engine = true;
//   };

// this class manages the game
  var Game              = function() {
    // this class manages game state
    // initialize a christmas tree
    this.tree = new ChristmasTree();
    // initialize the race track
    this.track = new RaceTrack();
    // initialize the player dragster
    this.dragster = new Dragster();

    this.attachListeners();
  };
  Game.prototype.attachListeners = function() {
    var self = this;
    // listen for user input, specifically
    // for the user pressing the right arrow key
    window.addEventListener('keydown', function(event) {
      if (event.keyCode === 39) {
        self.dragster.advance();
      }
      if (event.keyCode === 13) {
        self.dragster.engine = true; //start();
        console.log("Engine: "+self.dragster.engine);
      }
    });
  };

  new Game();
})();
