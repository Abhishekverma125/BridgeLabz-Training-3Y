// console.log("hi");


//scope 
//global
//block-let
//functional-var



// const pi=3.14;
//pi=4;


// {
//     var a="hello";
//     console.log(a);

// }
// console.log(a);

// var a="hello";
// var a="hello";
// function fun(){
    
//     console.log(a);
// }
// fun()
// console.log(a);
//==check only value
//===check value+data types



let name="raj";
let age=18;


// console.log("My name is "+name +" and my age is "+age);


let result=`my name is ${name} and age is ${age}`;
console.log(result);

let username=" Abhishek Verma ";
console.log(username.trim());
console.log(username.toUpperCase());//string object method --predefined
console.log(username.toLowerCase());
console.log(username.indexOf("h"));

console.log(username.includes("Verma"));
console.log(username.includes("kumar"));
console.log(username.slice(2,5));
console.log(username.slice(2));
console.log(username.split(""));
console.log(username.trim().toUpperCase().split(" "));




let password="   qwerty   ";

function checkPassword(password){
    //password has atleast 8 character
    //one uppercase 
    //one lowercase
    //one digit
    //one special symbol
    let checkedPassword=password.trim();
    if(checkedPassword.length<6) return false;
    let upper=false;
    let lower=false;
    let special=false;
    let digit=false;

    for(let i=0;i<checkPassword.length;i++){
        let ch=checkedPassword.charAt(i);
        if(ch>="A" && ch<="Z"){
            upper=true;

        }
        else if(ch>="0" && ch<=9){
            digit=true;

        }
        else if(ch>="a" && ch<="z"){
            special=true;

        }
        else{
            special=true;

        }
        console.log(lower,upper,digit,special);
        

        return false;

        }
        if(lower && upper && digit && special){
            return true;
        }
}
console.log(checkPassword(password));




//Math







