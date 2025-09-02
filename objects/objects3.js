// destructuring of object 

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "krish"
}

// course.courseInstructor


const {courseInstructor: instructor} = course
console.log(courseInstructor);
console.log(instructor);


// {
// "name": "krish",
// "coursename": "js in hindi",
// "price": "free"
// }


