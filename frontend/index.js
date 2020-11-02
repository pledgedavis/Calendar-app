const BASE_URL = "http://localhost:3000/months"

document.addEventListener("DOMContentLoaded", () => {
fetchMonths()
createDaysForm()
});


function fetchMonths(){
    fetch(`${BASE_URL}`)
    .then(response => response.json())
       .then(months =>{
        for (let month of months){
            let m = new Month(month.id, month.name)
            m.renderMonth();    
          }
        })


     
    
    // const rendermonth(){
    //     Month.all.forEach(m => m.name)
    // }  
}


function createDaysForm(){
    let daysDiv = document.getElementById("day-form")
   
  
}



function daysFormSubmit(){

    event.preventDefault();

    let name = document.getElementById("name").value
 
    let task = document.getElementById("task").value

    let month_id = document.getElementById("month_id").value
    
    let priority = document.getElementById("priority").value

    let user = {
        name: name,
        task: task,
        month_id: month_id,
        priority: priority,
    
}
}


const renderMonth = () => {
    Month.all.forEach(m => m.name)
}
