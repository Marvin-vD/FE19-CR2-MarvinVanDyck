const image =document.getElementById("image");
const taskname =document.getElementById("taskname");
const descript =document.getElementById("descript");
const priLvl =document.getElementById("priLvl");
const deadl =document.getElementById("deadl");
let tasks = [
    {
        picture:"../images/cooking.jpg",
        taskName:"Cooking",
        description:"cook so you don't starve!",
        priorityLevel: 4,
        deadline: "10.06.2023",
    },
    {
        picture:"../images/bake.jpg",
        taskName:"Bake",
        description:"bake a delicious cake",
        priorityLevel: 0,
        deadline: "28.06.2023",
    },
    {
        picture:"../images/clean.jpg",
        taskName:"Cleaning",
        description:"clean the apartment",
        priorityLevel: 3,
        deadline : "14.06.2023",
    },
    {
        picture:"../images/grocery.jpg",
        taskName:"Grocery",
        description:"go to the grocery and buy food",
        priorityLevel: 3,
        deadline: "14.06.2023",
    },
    {
        picture:"../images/learn.jpg",
        taskName:"Learn",
        description:"learn to do a good Code Review",
        priorityLevel: 5,
        deadline: "09.06.2023",
    },
    {
        picture:"../images/plant.jpg",
        taskName:"Water",
        description:"Water your plants that already feel like they're in the desert",
        priorityLevel: 3,
        deadline: "15.06.2023",
    },
    {
        picture:"../images/sport.jpg",
        taskName:"Sport",
        description:"do sports and make a stop at the fridge ",
        priorityLevel: 2,
        deadline: "12.06.2023",
    },
    {
        picture:"../images/vacuuming.jpg",
        taskName:"Vacuuming",
        description:"vacuuming your apartment",
        priorityLevel: 3,
        deadline: "13.06.2023",
    },
    {
        picture:"../images/repot.jpg",
        taskName:"Repot",
        description:"repot your Plants",
        priorityLevel: 1,
        deadline: "20.07.2023",
    }
];
let sortType = 0;
let sortTasks = document.getElementById("mySortBtn");
sortTasks.addEventListener("click", function(){
    console.log(tasks);
    if(sortType == 0){
        sortTasks.innerHTML=`Sort by priority<img src="../images/downSort.png">`;
        sortType =1;
        tasks.sort((a, b) => a.priorityLevel - b.priorityLevel);
        Refresh();
        return;
    }
    else{
        sortTasks.innerHTML=`Sort by priority<img src="../images/sort.png">`;
        sortType =0;
        tasks.sort((a, b) => b.priorityLevel - a.priorityLevel);
        Refresh();
        return;
    }
})
let addTask = document.getElementById("myAddBtn");
addTask.addEventListener("click",function(){
    let newTask={
        picture: image.value,
        taskName: taskname.value,
        description:descript.value,
        priorityLevel: priLvl.value,
        deadline: deadl.value,
    };
    tasks.push(newTask);
    Refresh();
    console.log(tasks);
})

Refresh();
function Refresh(){
    document.getElementById("result").innerHTML = ""; 
    for(let task of tasks){
        document.getElementById("result").innerHTML += `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
               <div class="card-top">
                    <h6 class="card-task">Task</h6>
                    <div class="card-icons">
                        <img src="../images/bookmark.png">
                        <img src="../images/settings.png">
                    </div>
               </div>
               <img src="${task.picture}" class="card-img-top" alt="taskImg.png">
               <h5 class="card-title">${task.taskName}</h5>
               <p class="card-description">${task.description}</p>
              <hr>
              <div class="card-text">
                   <img src="../images/warning.png">PriorityLevel: 
                   <a class="btn btn-primary  myPriorityLevel">${task.priorityLevel}</a>
                   <p class="card-text myLikes"><img src="../images/calendar.png">Deadline: ${task.deadline}</p>
              </div>
              <hr>
              <a class="btn btn-primary myDeleteBtn"><img src="../images/trash.png">Delete</a>
              <a class="btn btn-primary myDoneBtn"><img src="../images/circleCheck.png">Done</a>
            </div>
        </div>`;
        //
    }
    let btns = document.getElementsByClassName("myPriorityLevel");
    for(let i = 0; i < btns.length; i++){
        if(tasks[i].priorityLevel <= 1 ){
            btns[i].style.backgroundColor = 'green';
        }
        else if(tasks[i].priorityLevel <= 3){
            btns[i].style.backgroundColor = 'darkgoldenrod';
        }
        else if(tasks[i].priorityLevel <= 5){
            btns[i].style.backgroundColor = 'red';
        }
        btns[i].addEventListener("click", function(){
            tasks[i].priorityLevel++;
            if(tasks[i].priorityLevel > 5){
                tasks[i].priorityLevel=0;
            }
            if(tasks[i].priorityLevel <= 1 ){
                let btn = document.getElementsByClassName("myPriorityLevel")[i].innerHTML = tasks[i].priorityLevel;
                btns[i].style.backgroundColor = 'green';
            }
            else if(tasks[i].priorityLevel <= 3){
                let btn = document.getElementsByClassName("myPriorityLevel")[i].innerHTML = tasks[i].priorityLevel;
                btns[i].style.backgroundColor = 'darkgoldenrod';
            }
            else if(tasks[i].priorityLevel <= 5){
                let btn = document.getElementsByClassName("myPriorityLevel")[i].innerHTML = tasks[i].priorityLevel;
                btns[i].style.backgroundColor = 'red';
            }
        })
    }
    let deleteBtns = document.getElementsByClassName("myDeleteBtn");
    for(let i = 0; i < deleteBtns.length; i++){
        deleteBtns[i].addEventListener("click", function(){
            tasks.splice(i,1);
            Refresh();
            console.log(tasks);
        })
    }
}