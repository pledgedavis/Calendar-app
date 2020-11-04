const BASE_URL = "http://localhost:3000"

document.addEventListener("DOMContentLoaded", () => {
fetchMonths()
// fetchDays()
createDaysForm()
});


function fetchMonths(){
    fetch(`${BASE_URL}/months`)
    .then(response => response.json())
       .then(months =>{
        for (let month of months){
            // debugger
            let m = new Month(month.id, month.name, month.year)
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
         Priority: <input type="number" id="priority" min="1" max="5"><br><br>
         Length: <input type="text" id="length"><br><br>
      Year: <input type="number" id="year"  min="2020" max="99999"><br><br>
      
      Month: <select id="month_id" name="select-month><br><br>
      <option value="January">January</option>
      <option value="Month.create(name: "July", year: "2021")
      Month.create(name: "December", year: "2021")
      Month.create(name: "March", year: "2022")
      ">Febuary</option>
      <option value="3">March</option>
      <option value="April">April</option>
      <option value="May">May</option>
      <option value="June">June</option>
      <option value="1">July</option>
      <option value="August">August</option>
      <option value="September">September</option>
      <option value="October">October</option>
      <option value="November">November</option>
      <option value="2">December</option> 
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
    let month_id = document.getElementById("month_id").value
    // debugger
    let day = {
        name: name,
        task: task,
        priority: priority,
        length: length,
        month_id: month_id
    
    }
// debugger
    fetch(`${BASE_URL}/days`, {
             method: `POST`,
             headers:{
                'Content-Type': 'application/json',
                 'Accept': 'application/json'
             },
             body: JSON.stringify(day)
    })
    .then(resp => resp.json())
    .then(day =>{
        let d = new Day(day.id, day.name, day.task, day.priority, day.length, day.month_id)
           d.renderDay();
    })

}

// function monthsForm(){

// }