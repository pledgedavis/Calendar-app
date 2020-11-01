const BASE_URL = "http://localhost:3000/months"

document.addEventListener("DOMContentLoaded", () => {
fetchMonths()

});


function fetchMonths(){
    fetch("http://localhost:3000/months")
    .then(function(response) {
       .then(months => {
        for (const month of months){
            let u = new Month(month.id, month.name)
            u.rendermonth();
            
          
        }
    })

