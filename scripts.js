// Store dom elements in variables here

var colorBox1 = document.querySelector('.color-box-1')
var colorBox2 = document.querySelector('.color-box-2')
var colorBox3 = document.querySelector('.color-box-3')
var colorBox4 = document.querySelector('.color-box-4')
var colorBox5 = document.querySelector('.color-box-5')
var colorLabel1 = document.querySelector('.color-label-1')
var colorLabel2 = document.querySelector('.color-label-2')
var colorLabel3 = document.querySelector('.color-label-3')
var colorLabel4 = document.querySelector('.color-label-4')
var colorLabel5 = document.querySelector('.color-label-5')
var newPaletteButton = document.querySelector('.new-palette-button')


// classes belong here
class Color {
    constructor() {
        this.locked = false;
        this.hexCode = this.createHexCode();
    }
    createHexCode() {
      let hexValues = ["A", "B", "C", "D", "E", "F", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
      let hexArray = [];
        for (var i = 0; i < 6; i++) {
            var randomIndex = getRandomIndex(hexValues);
            var randomValue = hexValues[randomIndex];
            hexArray.push(randomValue);
            var commaSeparated = hexArray.join("")
            commaSeparated = `#${commaSeparated}`
        }
        return commaSeparated
    }
}

class Palette {
  constructor(){
    this.colors = [new Color, new Color, new Color, new Color, new Color]
    this.id = Date.now()
  }

  changeColors() {
    for (var i=0; i < this.colors.length; i++)
    if (this.colors[i].locked === false){
      this.colors[i] = new Color;
    }
  }
  /// this needs work!!!!!!!!!!!!
  lockColor() {
    if (this.locked === false) {
      this.locked = true
    }
  }
}

//global variables live here
var currentPalette = null;
var savedPalettesList = [];
var displayOnLoadPalette = new Palette()
currentPalette = displayOnLoadPalette


// event listeners live here
window.addEventListener('load', displayPalette)
newPaletteButton.addEventListener('click', newPalette)

// event handlers belong here
function displayPalette(){
  colorBox1.style.backgroundColor = currentPalette.colors[0].hexCode
  colorLabel1.innerText = currentPalette.colors[0].hexCode
  if (currentPalette.colors[0].locked === false){
    colorLabel1.innerText += "🔓"
  } else {
    colorLabel1.innerText += "🔒"
  }
  colorBox2.style.backgroundColor = currentPalette.colors[1].hexCode
  colorLabel2.innerText = currentPalette.colors[1].hexCode
  if (currentPalette.colors[1].locked === false){
    colorLabel2.innerText += "🔓"
  } else {
    colorLabel2.innerText += "🔒"
  }
  colorBox3.style.backgroundColor = currentPalette.colors[2].hexCode
  colorLabel3.innerText = currentPalette.colors[2].hexCode
  if (currentPalette.colors[2].locked === false){
    colorLabel3.innerText += "🔓"
  } else {
    colorLabel3.innerText += "🔒"
  }
  colorBox4.style.backgroundColor = currentPalette.colors[3].hexCode
  colorLabel4.innerText = currentPalette.colors[3].hexCode
  if (currentPalette.colors[3].locked === false){
    colorLabel4.innerText += "🔓"
  } else {
    colorLabel4.innerText += "🔒"
  }
  colorBox5.style.backgroundColor = currentPalette.colors[4].hexCode
  colorLabel5.innerText = currentPalette.colors[4].hexCode
  if (currentPalette.colors[4].locked === false){
    colorLabel5.innerText += "🔓"
  } else {
    colorLabel5.innerText += "🔒"
  }
}

function newPalette() {
  currentPalette.changeColors()
  displayPalette()
}

//additional functions live here

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

// TESTING!!!!
// function testOnlyChangeUnlocked (){
//   currentPalette.
// }
