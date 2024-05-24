//type 'any'
// let someVar : any; //'any' kokhono use korbo na. 

// someVar = "asdhbkjdh";

// someVar= 9;

// //object destructiuring
// const{name, age}= userA


//'for of loop'; will be used only for array
const userNames : string[]=["name1","name2","name3"];

for(let userName of userNames){

    console.log(userName); //shob run korbe and each loop er jonno every value print korbe. jotogula value ache totobar loop cholbe. indexing er jhamela nai.

}

//'function'

function functionName(param1: number, param2 : number):number{   //here ':number' is the return type ; return type can be anything ex: string, number

    return param1 + param2;

}

//'void' if we don't want to return anything just to print 
function functionName2(param1: number, param2 : number):void{   //here ':void' is the return type ;

    console.log(param1 + param2);

}
 


