document.addEventListener("DOMContentLoaded", () => {
fetchMonths()

});

function fetchMonths(){
    fetch("http://localhost:3000/months")
    .then(function(response) {
        return response.json();
      })
      .then(function(json){
         console.log(json)
      });
      }
    

      

      