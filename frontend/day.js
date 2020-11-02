class Day{
    // let daysDiv = document.getElementById("day-form")

    constructor(id, name, task, month_id, priority, length){
        this.id = id
        this.name = name;
        this.task = task;
        this.month_id = month_id;
        this.priority = priority;
        this.length = length;
    }

   


//    function createForm(){
//       let daysDiv = document.getElementById("day-form")
     
//       daysDiv.innerHTML +=
//       <form onsubmit="setTimeout(function)){window.location.reload();},10);">
//            Name: <input type="text" id="name"><br><br>
//            Task: <input type="text" id="task"><br><br>
//            month: <input type="month_id" id="month_id"><br>
//            priority: <input type="number" id="priority" style="width: 40px" min="1" max="12"> 
//         length: <input type="number" id="length" style="width: 40px" min="1" max="31"><br><br>
//         <input type="submit" value="Find Your Zodiac Sign"></input>
//       </form>



renderDay(){
    // let m = document.getElementById("month-dropdown")

    // let optionValue = document.createElement("option")
    //    let month = document.createTextNode(this.name);

    //          optionValue.appendChild(month)
    //          m.appendChild(optionValue)

// }

let daysDiv = document.getElementById("months-container")

    daysDiv.innerHTML +=
`
<div id="list-day" data-id=${this.id}>
  <hr>
  <br>
<h3> ${this.name}'s activities: </h3>
    <ul>
    
        <li> Day name: ${this.name} </li><br>
        <div id="sign-container" data-id=${this.id}> </div>
    </ul>
</div>
<button class="delete-bttn" data-id=${this.id} onclick="deleteDay()">Delete ${this.name}</button>
// <button class="day-page-bttn" data-id=${this.id} onclick="deleteMonth()">Delete ${this.name}</button>

`
}
};






    
