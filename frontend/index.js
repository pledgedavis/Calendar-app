const BASE_URL = "http://localhost:3000"

document.addEventListener("DOMContentLoaded", () => {
fetchMonths()
// fetchDays()
// createDaysForm()
});


function fetchMonths(){
    fetch(`${BASE_URL}/months`)
    .then(response => response.json())
       .then(months =>{
        for (let month of months){
            // debugger
            let m = new Month(month.id, month.name)
          let renderedMonths = m.renderMonth();    
        //    renderedMonths.renderDay();
            
          }
        })
    }


     



function fetchDays(){
    fetch(`${BASE_URL}/days`)
    .then(response => response.json())
       .then(days =>{
        for (const day of days){
            // debugger
            let d = new Day(day.id, day.name, day.task, day.month_id, day.priority, day.length)
            d.renderDay();    
          }
        })

}



function createDaysForm(){
    let daysDiv = document.getElementById("day-form")
   
    daysDiv.innerHTML +=
    `
    <form onsubmit="setTimeout(function)){window.location.reload();},10);">
         Day of week: <input type="text" id="name"><br><br>
         Task: <input type="text" id="task"><br><br>
         Month: <input type="month_id" id="month_id"><br><br>
         Priority: <input type="number" id="priority" min="1" max="5"><br><br>
      Number: <input type="number" id="number"  min="1" max="31"><br><br>
      <input type="submit" value="Create your activity"></input>
    </form>
    `
    daysDiv.addEventListener("submit", daysFormSubmit)

  
}



function daysFormSubmit(){

    event.preventDefault();

    let name = document.getElementById("name").value

    let task = document.getElementById("task").value

    let priority = document.getElementById("priority").value

    let length = document.getElementById("length").value
    

    let day = {
        name: name,
        task: task,
        priority: priority,
        length: length
    
}
}
