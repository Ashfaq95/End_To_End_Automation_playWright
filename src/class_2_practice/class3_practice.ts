//answer of assignment 2; task-6

interface Dog {
    name: string;
    age: number;
    breed: string;
    isVaccinated: boolean;
    sound: string;
  }
  
  const dogs: Dog[] = [
    {
      name: "Buddy",
      age: 3,
      breed: "Bulldog",
      isVaccinated: true,
      sound: "Woof",
    },
    {
      name: "Bella",
      age: 5,
      breed: "Greyhound",
      isVaccinated: true,
      sound: "Bark",
    },
    {
      name: "Max",
      age: 2,
      breed: "Dachshund",
      isVaccinated: false,
      sound: "Arf",
    },
    {
      name: "Luna",
      age: 4,
      breed: "Poodle",
      isVaccinated: true,
      sound: "Woof",
    },
  ];


//topic "filter"
//   const filtereddogs : Dog[] = dogs.filter((dog) => dog.age>3)

//   console.log(filtereddogs);

//topic "map"
// const dogNames: string[] =dogs.map((dog)=> dog.name); //map er kaj transform kora

// console.log(dogNames);

//topic "every"
const isTrueForAll: boolean =dogs.every((dog)=> dogs.isVaccinated ===true); //map er kaj transform kora

console.log(isTrueForAll);

//topic 'some"



////////////////////////////////////////////////////////////////////////////////////////////
//class 3

//topic "class"

enum Gender{
    Male,
    Female,
}

enum MaritialStatus{
    Married,
    Single,
    Is
}

class Person{ //class always upper case

    firstName : string;
    middleName : string;
    lastName : string;
    age: number;
    gender: string; 
    occupation : string;
    nid: number;
    maritialStatus : MaritialStatus;

    constructor(  //kaj: jei properties gula define kora hoise oigulake initialize kora.
        firstName: string, 
        middleName: string, 
        lastname : string ,
        age: number,
        gender: Gender, 
        occupation : string,
        nid: number,
        maritialStatus : MaritialStatus

    ){ 

        this.firstName: firstName, 
        this.middleName: middleName, 
        this.lastname :lastname ,
        this.age: age,
        this.gender: gender, 
        this.occupation : occupation,
        nid: number,
        maritialStatus : MaritialStatus

    }

    //data


    //behavior
}