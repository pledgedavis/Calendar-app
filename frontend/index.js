const BASE_URL = "http://localhost:3000/months"

document.addEventListener("DOMContentLoaded", () => {
fetchMonths()

});


function fetchMonths(){
    fetch(`${BASE_URL}/month`)
    .then(response => response.json())
       .then(months => {
        for (const month of months){
            let u = new Month(month.id, month.name)
            u.rendermonth();
            
          
        }
      
    })
    

    const rendermonth(){
        Month.all.forEach(m => m.name)
    }