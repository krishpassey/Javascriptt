// write a function getGrade(score) that:
// takes a student's marks (0-100)
// returns the grade based on this logic:
// 90-100 A+
// 80-89 A
// 70-79 B
// 60-69 C
// 33-59 D
// 0-32 Fail 
// anything else  Invalid marks 


function getGrade (score) { 
    if (score >= 90 && score <= 100) return 'A+';
    if (score >= 80 && score <= 89) return 'A';
    if (score >= 70 && score <= 79) return 'B';
    if (score >= 60 && score <= 69) return 'C';
    if (score >= 33 && score <= 59) return 'D';
    if (score >= 0 && score <= 32) return 'Fail'; 
    return "Invalid marks";
    } 
        

    console.log (getGrade(54));





   // Rock paper scissor logic 

   function rpc(user, computer){
    if ( user === computer) return "draw";

    if(user === "rock" && computer === "scissor") return "user";
    if (user === "scissor" && user === "paper") return "user";
    if (user === "paper" && computer === "rock") return "user";

    return "computer"
   }
   console.log(rps("rock", "scissor"));
   