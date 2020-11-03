class Day{
    constructor(id, name, task, priority, length){
        this.id = id
        this.name = name;
        this.task = task;
        this.priority = priority;
        this.length = length;
    }

    

renderDay(){
   

let daysDiv = document.getElementById("days-container")
//   debugger
    daysDiv.innerHTML +=
    
`
<div id="list-day" data-id=${this.id}>
  <hr>
  <br>
<h3> ${this.name}'s activities: </h3>
    <ul>
    
        <li>  ${this.task} </li><br>
         <li>  ${this.length} <</li><br>
        <div id="sign-container" data-id=${this.id}> </div>
        
       
    </ul>
    
</div>
<button class="delete-bttn" data-id=${this.id} onclick="deleteDay()">Delete ${this.name}</button>

`
}

};
{/* <li>  ${this.priority} </li><br></br> */}






    
