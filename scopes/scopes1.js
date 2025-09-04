// var = 200
let a = 300
if(true) {
    let a = 10
    const b = 20
    console.log("INNER: " , a );
}

console.log(a);
//console.log(b);
//console.log(c);



function one(){
    const username = "krish"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}
one()




if (true) {
    const username = "krish"
    if(username === "krish") {
        const website = "youtube"
        console.log(username + website);
    }
    //console.log(website);
}
// console.log(username);



// ++++++++++++++++++++++++++ interesting +++++++++++++++++++++++++++=

addone(5)
function addone(value) {
      return num + 1 
}
//  addone(5); // can be accessed this way 


addTwo(5) // not accessed this way
 const addTwo = function(num){
    return num + 2 
 }
  
