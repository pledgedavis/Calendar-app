const BASE_URL = "http://localhost:3000"


document.addEventListener("DOMContentLoaded", () => {
   
    fetchMonths()
   createDaysForm()
});





function fetchMonths(){
    fetch(`${BASE_URL}/months`)
    .then(response => response.json())
       .then(months =>{
        for (let month of months){
            // debugger
            let m = new Month(month.id, month.name, month.year, month.days)
          let renderedMonths = m.renderMonth();    
                  let renderedDayss= m.renderDays()   
          }
        })
    }
    


function createDaysForm(){
    let daysDiv = document.getElementById("day-form")
        
   
    daysDiv.innerHTML +=
    `
    <form>
         Day of week: <input type="text" id="name"><br><br>
         Task: <input type="text" id="task"><br><br>
         Priority: <input type="number" id="priority" min="1" max="5"><br><br>
         Length: <input type="text" id="length"><br><br>
      Month: <select id="month_id" >
    //   name="select-month
      <option value="1">January</option>
      <option value="2">Febuary</option>
      <option value="3">March</option>
      <option value="4">April</option>
      <option value="5">May</option>
      <option value="6">June</option>
      <option value="7">July</option>
      <option value="8">August</option>
      <option value="9">September</option>
      <option value="10">October</option>
      <option value="11">November</option>
      <option value="12">December</option> 
      <input type="submit" value="Create your activity"></input>
    </form>
    `
     let daysDivForm = daysDiv.querySelector("form")
     
    daysDivForm.addEventListener("submit", daysFormSubmit)

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




function deleteDay(id){
    
    fetch(`${BASE_URL}/days/${id}`, {method: "DELETE",
    headers:{
        'Content-Type': 'application/json',
         'Accept': 'application/json'
       },
     })
    .then(res => res.text())
    .then(() => console.log("deleted"))
    .then(() => window.location.reload({forcedReload:true}))
     .catch(
         err =>(console.log(err))
     )
      
}
