    class Month {
        constructor(id, name, year){
            this.id = id;
            this.name = name;
            this.year = year;
           
        }
        renderMonth(){

        let monthsDiv = document.getElementById("months-container")
        
   
        monthsDiv.innerHTML +=
        `
        <div id="list-month" data-id=${this.id}>
         
          <br>
              <strong> ${this.name}'s activities </strong>
                <p><em> ${this.day}</em></p>
            <ul id=${this.id}>
                <li></li><br>
                <div id="days-container" data-id=${this.id}> </div>
            </ul>
        </div>
        <button class="delete-bttn" data-id=${this.id} onclick="deleteMonth()">Delete ${this.name}</button>
        `
    
    }
    };

    