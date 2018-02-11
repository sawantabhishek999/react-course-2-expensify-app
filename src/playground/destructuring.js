console.log('destructuring');

//oBject destructuring  
const person={
    name:'Abishek',
    age:25 ,
    location:{
        city:'Mumbai',
        temp:25
    }
};

//console.log(`${person.name} is ${person.age}`); 
const { name:firstname='Anonymous', age}= person;  //object destrucutring
console.log(`${firstname} is ${age}`);

const { temp, city } = person.location;  //order is not importnat but the local variables must match the object keys. eg: cannot use temp1 instead of temp
 if(city && temp){
     console.log(`It's ${temp} in ${city}.`)
 }

 //renaming syntax
 const { temp:temperature, city:cityname } = person.location;  
 if(cityname && temperature){
     console.log(`It's ${temperature} in ${cityname}.`)
 }


 const book ={
     title:'Ego is the Enemy',
     author:'Ryan Holiday',
     publisher:{
        name:'Penguin'
     }
 };

const { name: publishername= 'Self-published'} = book.publisher;
 console.log(publishername);


 ////Array Destructuring
 const address = ['B-19, Biwing,003', 'Goregaon, Mumbai','Maharashtra','400063'];

 const[ street, citynm, state = 'Delhi', zip ]= address;

 //const [, citynm, state,] = address;   //ignore first array element and take only 2nd and 3rd eement
 
//matching is done by order

console.log(`U r in ${citynm} , ${state}.`)