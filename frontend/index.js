const BASE_URL = "http://localhost:3000"


document.addEventListener("DOMContentLoaded", () => {
   
    fetchMonths()
//    fetchDays()
   createDaysForm()
//    deleteDay()
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
    



// function fetchDays(){
//     // debugger
//     fetch(`${BASE_URL}/days`)
    
//     .then(response => response.json())
    
//        .then(days =>{
//         for (const day of days){
//             // debugger
//             let d = new Day(day.id, day.name, day.task, day.month_id, day.priority, day.length)
//             d.renderDay();    
//           }
//         })

// }

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
      <option value="12">January</option>
      <option value="11">Febuary</option>
      <option value="3">March</option>
      <option value="8">April</option>
      <option value="9">May</option>
      <option value="5">June</option>
      <option value="1">July</option>
      <option value="4">August</option>
      <option value="6">September</option>
      <option value="7">October</option>
      <option value="10">November</option>
      <option value="2">December</option> 
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












// function deleteDay() {
//      debugger
    
//     fetch(`${BASE_URL}/months/:id`, {
//         method: 'DELETE',
//         headers:{
//             'Content-Type': 'application/json',
//              'Accept': 'application/json'
//              }
//        })
//        .then(resp => resp.json())
//        .then(obj =>{
//            debugger
//        }
            
//        )




function deleteDay(id){
    // fetch(`${BASE_URL}/days/${id}`)
    // debugger
    fetch(`${BASE_URL}/days/${id}`, {method: "DELETE",
    headers:{
        'Content-Type': 'application/json',
         'Accept': 'application/json'
     },

     })
    .then(res => res.text())
    .then(() => location.reload())
    .then(data => console.log(data))

    // debugger
    // .then(() => window.href=`${BASE_URL}/days`)
}