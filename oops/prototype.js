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



// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvaliable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User


// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher);



let AnotherUsername = "ChaiAurCode   "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`true length is: ${this.trim().length}`);
}

AnotherUsername.trueLength()
"krish".trueLength()

