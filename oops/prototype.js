let myHeros = ["thor", "spiderman"]


let HeroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function() {
        console.log(`spidy power is ${this.spiderman}`);
    }

}

Object.prototype.krish = function() {
    console.log(`krish is present in all objects`);
}

Array.prototype.heyKrish = function () {
    console.log(`krish says Hello`);
}

// heroPower.krish()
myHeros.krish()
myHeros.heyKrish()
//HeroPower.heyKrish()