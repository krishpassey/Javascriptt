/* let btn1 = document.querySelector("#btn1");
btn1.onclick = () => {
    console.log("btn1 was clicked");
    let a = 25;
    a++;
    console.log(a); //26
} */

   const button1 = (evt) => {
        console.log("btn1 was clicked")
        console.log("evt.type");
    };

    btn1.addEventListener ("click", button1);

    btn1.removeEventListener("click", button1);

