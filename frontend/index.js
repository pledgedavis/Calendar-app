const BASE_URL = "http://localhost:3000/months"

document.addEventListener("DOMContentLoaded", () => {
fetchFormMonths()

});


function fetchFormMonths(){
    fetch(`${BASE_URL}`)
    .then(response => response.json())
       .then(months =>{
        for (let month of months){
            let m = new Month(month.id, month.name)
            m.renderMonth();    
          }
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

    
}

const renderMonth = () => {
    Month.all.forEach(m => m.name)
}
