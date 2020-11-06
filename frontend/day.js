class Day{
    constructor(id, name, task, priority, length, month_id){
        this.id = id
        this.name = name;
        this.task = task;
        this.priority = priority;
        this.length = length;
        this.month_id = month_id
    }

    

renderDay(){
//    debugger
   let monthsDiv = document.getElementById("months-container").childNodes[1]
          let monthsDivUl = monthsDiv.querySelector('ul')
   debugger
     let daysPtag = monthsDiv.querySelector('p')
  
    daysPtag.innerHTML +=
    
`
<div id="list-day" data-id=${this.id}>
  <br>
<strong> ${this.name}'s activities: </strong>
     
    <ul>
    
        <li>  ${this.task} </li><br>
         <li>  ${this.length} </li><br>
        <div id="sign-container" data-id=${this.id}> </div>
        
       
    </ul>
    
</div>
<button class="delete-bttn" data-id=${this.id} onclick="deleteDay()">Delete ${this.name}</button>

`

}

};




    
