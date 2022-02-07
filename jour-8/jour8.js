//  01 - Countries

var request = require('request')

const apiBase = "https://restcountries.com/v3.1/all" 

const country1 ="";
// const country2 = "";

const apiUrlCountry1 = apiBase + country1;
// const apiUrlCountry2 = apiBase + country2;

// console.log(apiUrlCountries1);
// console.log(apiUrlCountry2);
let countriesNames = [];

request.get(apiUrlCountry1,(err,res,body)=> {
    if(err) {
        console.log(err)
        return
    }
//    console.log("GET body >>>", body);
   const country = JSON.parse(body);

   for(let i = 0; i < country.length; i++) {
    let countryName = (country[i].name.common);
    countriesNames.push("-- " + countryName)
   }
console.log(countriesNames)
 })
 

 //02 - Chuck Norris
 //À l'aide de l'api suivante (lisez bien la documentation) : [https://api.chucknorris.io/](https://api.chucknorris.io/)

//- Créez une fonction asynchrone `getFact` qui récupèrera une blague Chuck Norris aléatoire à chaque fois que la fonction est lancée,
 //et qui l'affichera dans la console

var request = require('request')
const apiBase = "https://api.chucknorris.io/jokes/random";

request.get(apiBase,(err,res,body) => {
     if(err) {
         console.log(err);
         return
     }
     const jokes = JSON.parse(body);
        console.log(jokes.value);
})

// 03 - Pokemon

var request = require("request")
const apiBase = "https://pokeapi.co/api/v2/pokemon/ditto"

