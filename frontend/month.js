class Month {
    constructor(id, name, year, days){
        this.id = id;
        this.name = name;
        this.year = year;
        this.days = days;
       
    }

    
    renderMonth(){

      let monthsDiv = document.getElementById("months-container")
    
    
      monthsDiv.innerHTML +=
      `
       <div id="list-month" data-id=${this.id}>
    
         <br>
            <strong> ${this.name}'s activities </strong>
         
          <ul id=${this.id} data-link='${this.id}'  >
            <p>  </p> <br>
              <div id="days-container" data-id=${this.id}> </div>
          </ul>
       </div>
    
      `
    }
  
  
    renderDays(){
       // grab div for current month by data id 
      // inside of iteration create an elemnt then stick to months div 
      for(const day of this.days ){
       
         let ptag = document.createElement("P");
               ptag.innerHTML = day.name;
        let  monthDiv = document.querySelector(`[data-link='${day.month_id}']`);
           //   monthDiv.appendChild(ptag)
           monthDiv.innerHTML +=
          `
                 <li> <p> <br>Day of the Week: <br>${day.name} <br><br>
                   Task:${day.task}<br><br> Length:${day.length}<br><br></p></li>
                  <button class="delete-bttn" data-id=${day.id} onclick="deleteDay(${day.id})">Delete ${day.name}</button>
    
          `     
       }
     }

};
    
    