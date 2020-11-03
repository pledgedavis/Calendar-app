    class Month {
        constructor(id, name, year){
            this.id = id
            this.name = name;
            this.year = year;
            // this.days = []
        }
        renderMonth(){
            // let m = document.getElementById("month-dropdown")
     
            // let optionValue = document.createElement("option")
            //    let month = document.createTextNode(this.name);

            //          optionValue.appendChild(month)
            //          m.appendChild(optionValue)

        // }

        let monthsDiv = document.getElementById("months-container")
        
   
        monthsDiv.innerHTML +=
        `
        <div id="list-month" data-id=${this.id}>
          <hr>
          <br>
        <h3> ${this.name}'s activities: </h3>
            <ul id=${this.id}'>
                <li> Year: ${this.year}</li><br>
                <div id="sign-container" data-id=${this.id}> </div>
            </ul>
        </div>
        <button class="delete-bttn" data-id=${this.id} onclick="deleteMonth()">Delete ${this.name}</button>
        `
    
    }
    };

    