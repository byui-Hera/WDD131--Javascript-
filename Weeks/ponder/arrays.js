let courses = ["WDD131", "ITM220", "WDD231", "CSE212"];
// arrays start at index 0
console.log(courses[0]);
console.log(courses[4]);

// javascript object 
// let courseAndGPA = {
//     courseName: "WDD131",
//     courseGPA: 3.7,
//     professor: "Brother Warner"
// }

// console.log(courseAndGPA);
// // access variables inside the object
// console.log(courseAndGPA.courseName);


// array of objects
let coursesAndGPA = [
    {
        courseName: "WDD131",
        courseGPA: 3.7,
        professor: "Brother Warner",
        assignments: [
            {
                assignmentName: "W01 Prove",
                assignmentGrade: 89
            }
        ]
    },
    {
        courseName: "WDD231",
        courseGPA: 3.7,
        professor: "Brother Warner"
    }
]


// Challenge: Retrieve the course name for the second item in the array of objects and print to the screen
console.log(coursesAndGPA[0].assignments[0].assignmentName);

//looping through an array
for (let i = 0; i < coursesAndGPA.length; i++) {
    console.log(coursesAndGPA[i].courseName);
    console.log(coursesAndGPA[i].courseGPA)
}


// looping through with a foreach loop
coursesAndGPA.forEach(item => {
    console.log(item.courseName),
        console.log(item.courseGPA)
});


let body = document.querySelector('body');

// build out HTML dynamically based on the array contents

coursesAndGPA.forEach(course => {
    let dynamicHTML = `
    <div>
        <h1>${course.courseName}</h1>
        <h2>${course.courseGPA}</h2>
    </div>
    `;
    body.innerHTML += dynamicHTML;
});