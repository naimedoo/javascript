// 01 - Format


 function formatDate(dateText) {
    let date = new Date(dateText);
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
   
     // console.log(date)
     console.log(day + "/" + month + "/" + year);
   

 }
 formatDate("2022-03-02")

// 02 - Age

function calculateAge(dateBirthday) {
    let date = new Date();
    let age = date.getFullYear() - dateBirthday
    
    console.log(age)

}
calculateAge("2000")


// 03  - Validator
 var prompt = require ("prompt");

 function checkProfile (email, userName, password) {
   
}