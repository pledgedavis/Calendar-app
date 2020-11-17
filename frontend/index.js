const BASE_URL = "http://localhost:3000"
let appState = []

document.addEventListener("DOMContentLoaded", () => {
    // marks when dom is ready^
    fetchMonths()
   createDaysForm()
   filterForm()
});


function fetchMonths(){
    fetch(`${BASE_URL}/months`)


    // then returns a promise for this async operation
    .then(response => response.json())
       .then(months =>{
         appState = [...months]
         console.log("appState", appState)
        for (let month of months){
  
            let m = new Month(month.id, month.name, month.days)
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
    // gets values and sets = to corresponding days params
    // debugger
    let day = {
        name: name,
        task: task,
        priority: priority,
        length: length,
        month_id: month_id
    
          }

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
    
    fetch(`${BASE_URL}/days/${id}`, {
        method: "DELETE",
        headers:{
        'Content-Type': 'application/json',
         'Accept': 'application/json'
       },
     })
    //  thens only run iff the previous operation is succesful and if all thens fails run catch
    .then(res => res.text())
    .then(() => console.log("deleted"))
    .then(() => window.location.reload({forcedReload:true}))
     .catch(
         err =>(console.log(err))
     )
      
}























function filterForm(){
  let monthDivForm = document.getElementById("month-bar")

  monthDivForm.innerHTML += `

  <form>
  Filter by month: <select id="month_name" >

  <option value="1" selected>January</option>
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
  <input type="button" id="newbttn" value="Filter by month"></input>

  </form>
  `
  
  // type="button" 
  // let name = document.getElementById("name").value
  // let month = {
  //   name: name
  //   }

 let filterFormH = monthDivForm.querySelector('form')
   input = filterFormH.querySelector("input")

 input.addEventListener("click", function() {
  filterFormSubmit()
  displayDays()
  debugger
  // monthContainer.querySelector("div")
  monthContainer = document.getElementById("months-container")

  debugger
       monthContainer.innerHTML =`
  
   
    <strong>${selectedMonth.name}'s activities</strong>
     <p>${selectedMonth.days[0].name}</p>  <p>${selectedMonth.days[1].name}</p>
  
   `
// debugger
 

 });


}



function displayDays(days = selectedMonth.days){
  event.preventDefault();
  debugger
filterFormSubmit()
  if (days != "undefined"){
   
    days.forEach(function(day){
      console.log(day)
      return day
  //  debugger
    })
  
  }
   else{
        return "No activities here yet"
   }

  
}


function filterFormSubmit(){
 
  event.preventDefault();
  // debugger
  // monthsCont = document.getElementById("months-container")
   month_id = document.getElementById("month_name").value
  
   if((month_id == 1)){
    //  debugger
    selectedMonth = appState[0]
   return selectedMonth
   }  else if ((month_id == 2)){
    selectedMonth = appState[1]
    return selectedMonth
   }
   else if ((month_id == 3)){
    selectedMonth = appState[2]
    return selectedMonth
  }else if ((month_id == 4)){
    selectedMonth = appState[3]
    return selectedMonth
  }else if ((month_id == 5)){
    selectedMonth = appState[4]
   return selectedMonth
  }else if ((month_id == 6)){
    selectedMonth = appState[5]
    return selectedMonth
  }else if ((month_id == 7)){
    selectedMonth = appState[6]
   return selectedMonth
  }else if ((month_id == 8)){
    selectedMonth = appState[7]
   return selectedMonth
  }else if ((month_id == 9)){
    selectedMonth = appState[8]
   return selectedMonth
  }else if ((month_id == 10)){
    selectedMonth = appState[9]
   return selectedMonth
  }else if ((month_id == 11)){
    selectedMonth = appState[10]
   return selectedMonth
  }else if ((month_id == 12)){
    selectedMonth = appState[11]
   return selectedMonth
  }

}
  



































//   event.preventDefault();

//   let name = document.getElementById("name").value
//   let task = document.getElementById("task").value
//   let priority = document.getElementById("priority").value
//   let length = document.getElementById("length").value
//   let month_id = document.getElementById("month_id").value
//   // gets values and sets = to corresponding days params
//   // debugger
//   let day = {
//       name: name,
//       task: task,
//       priority: priority,
//       length: length,
//       month_id: month_id
  
//         }

//   fetch(`${BASE_URL}/days`, {
//            method: `POST`,
//            headers:{
//               'Content-Type': 'application/json',
//                'Accept': 'application/json'
//            },
//            body: JSON.stringify(day)
//   })
//   .then(resp => resp.json())
//   .then(day =>{
      
//       let d = new Day(day.id, day.name, day.task, day.priority, day.length, day.month_id)
//          d.renderDay();
//   })

// }

// // function filterBy(id){

// //   fetch(`${BASE_URL}/days/${id}`, {
// //     method: "SHOW",
// //     headers:{
// //     'Content-Type': 'application/json',
// //      'Accept': 'application/json'
// //    },
// //  })
// //  .then(res => res.text())
// //     .then(() => console.log("months"))
// //    debugger

// // }
























































// function filterForm(){
//   let monthDivForm = document.getElementById("month-bar")

//   monthDivForm.innerHTML += `

//   <form>
//   Filter by month: <select id="name" >

//   <option value="January" selected>January</option>
//   <option value="Febuary">Febuary</option>
//   <option value="March">March</option>
//   <option value="April">April</option>
//   <option value="May">May</option>
//   <option value="June">June</option>
//   <option value="July">July</option>
//   <option value="August">August</option>
//   <option value="September">September</option>
//   <option value="October">October</option>
//   <option value="November">November</option>
//   <option value="December">December</option> 
//   <input type="button" id="newbttn" value="Filter by month"></input>
// </form>
//   `
 






//   document.getElementById("newbttn").onclick = () => {
//     let select = document.getElementById("name")
//     let options = getSelectedOptions(select);
//     debugger
//        console.log("hello", options);
//          filterMonths(options)
//   }

//   function getSelectedOptions(select) {
//     let result = [];
//     let options = select.querySelectorAll('option');
//         //  debugger
//     console.log("options", options)
//     for (let i = 0; i < options.length; i++) {
//         if (options[i].selected)
//             result.push(options[i].value);
//     };
//       console.log("result", result)
//     return result;
  
// }

// }



// function filterMonths(selectedMonth, selectedDay){
//   console.log("filterMonths", selectedMonth, selectedDay)
// debugger
//   if ( appState.length > 0 ){
//     appState.map(month =>{
//       console.log("hello1", month.days) 
          
      
//     })
//      debugger
     


//     const newMonth = appState.filter(month => {
//       // month.name === selectedMonth
//       // debugger
//       // console.log("?", month)
//   const  i = month.name === selectedMonth[0]
//       // console.log("monthname", typeof(month.name), month.name)
//     let      monthDays = month.days
    
    

//     // p = i + monthDays
//    console.log("days", monthDays)
//   //  debugger
      
//       // console.log("selectedMonth", typeof(selectedMonth[0]), selectedMonth[0])
//       return i
//     })
//   }
//   // debugger

//   let months = document.getElementById("months-container")
//   debugger
//   months.innerHTML = selectedMonth

 
// }

// //   create dropdown render that month 

