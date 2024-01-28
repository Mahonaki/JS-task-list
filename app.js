// TODO: next project
/**
    Create an array of objects and assign each one a date. When the date reached the object item should hide.

    (create a list of cards and each card should have an expiry date and once it reaches it then that card becomes expired/invalid)
*/


// const listContainer = document.querySelector('.list_wrapper');

//create an array of objects
const tasks = [
    {
        img: "/images/olivier-collet-VDGBFiaM6Cs-unsplash.jpg",
        title: "Find desktop cover",
        description: "Look for a desktop cover to protect our desktops from Sushi",
        duedate: "2024-02-17",
    },
    {
        img: "/images/olivier-collet-VDGBFiaM6Cs-unsplash.jpg",
        title: "Do laundry",
        description: "Empty the current load and load the dryer instead",
        duedate: "2024-01-28",
    },
]

// create the template literal
let displayTasks = tasks.map((task) => {
    return `
        <div class="list_item">
            <img class="item_image" src="${task.img}"/>
            <div class="item_description">
                <h1>${task.title}</h1>
                <p>${task.description}</p>
            </div>
            <p class="DueDate">Due on ${task.duedate}</p>
        </div>
    `
});

for (let i=0; i < tasks.length; i++) {
    document.querySelector('.list_wrapper').insertAdjacentHTML( 'beforeend', displayTasks);

    console.log(`${tasks[i].title} by ${tasks[i].duedate}`);

    const currentDate = new Date();
    let taskDate = new Date(tasks[i].duedate);

    if (currentDate < taskDate) {
        console.log("expires later");
    } 
    else if (currentDate === taskDate) {
        console.log("task expires TODAY");
    }
    else {
        console.log("Sorry task is already expired");
    }
};


  