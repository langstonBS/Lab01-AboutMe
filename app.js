//take in imput and send somthing liek a test back out


//global Dom elements
const testButten = document.getElementById('startTest');

const resalt = document.getElementById('resalts');


// Initialization (setup, state variables)†


// Event Handlers
function runTest(){
    //varables from me 

    let name = ' ';
    let score = '';


    //starting allert
    alert("helow from me ");

    //ask if wants to play 
    const play = confirm(" do you want to play");

    if (play === false){
        return;
    }

    //get name 
    const firstName = prompt("What's your first name?");
    name = firstName;
    console.log(firstName);
    
    name = firstName;

    const lastName = prompt("What is your last name");
    name = name + ' ' + lastName;
    console.log(name);

    



}

testButten.addEventListener('click', runTest);


  // show the user a message. only options is 'OK'




   // returns: true for 'OK', and false for 'Cance+++