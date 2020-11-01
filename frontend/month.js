// class User {
//     constructor(id, username, total){
//     this.id = id
//     this.username = username;
//     this.total = total;


    class Month {
        constructor(id, name){
            this.id = id
            this.name = name;
        }


        renderMonth(){
            let m = document.getElementById("month-dropdown")
     
            let optionValue = document.createElement("option")
               let month = document.createTextNode(this.name);

                     m.appendChild(month)
        }
    };