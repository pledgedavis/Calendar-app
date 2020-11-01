const BASE_URL = "http://localhost:3000/months"

document.addEventListener("DOMContentLoaded", () => {
fetchMonths()

});


function fetchMonths(){
    fetch(`${BASE_URL}/month`)
    .then(response => response.json())
       .then(m => {

            m = new Month(month.id, month.name)
            m.rendermonth();
            
          
        
      
    })


    



    // function grabUsers() {
    //     fetch(`${BASE_URL}/users`)
    //     .then(res => res.json())
    //     .then(users =>{
    //         for (let user of users){
    //             let u = new User(user.id, user.username, user.total)
    //             u.renderUser();
    //         }
    //     })
    // } 

    

    // const rendermonth(){
    //     Month.all.forEach(m => m.name)
    // }

    const rendermonth = () => {
        Month.all.forEach(m => m.name)
    }

}