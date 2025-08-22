// closures => ek function jo return kare ek aur function aur return hone wala function hmesha use krega parent function ka koi variable

function abcd() {
    let a = 12;
    return function() {
        console.llog(a);
    }
}

// lexical scoping => 


function abcd(){
    let a = 12;
    function defg() {
        let b = 13;
        function ghij() {
            let c = 14;
        }
    }
}