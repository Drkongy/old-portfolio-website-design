const form = document.getElementById('form');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const Phone = document.getElementById('Phone');
const contact = document.getElementById('custom_venuetype_private');
const query = document.getElementById('query');
const email = document.getElementById('email');
const Cemail = document.getElementById('Cemail');
const date = document.getElementById('date')
var error = document.getElementById('error');
// these varibles above get all the data from the input boxes so we can manipulate them.




// for hiding and showing errors
let hideme = document.querySelector('.hideme');
let contactMe = document.querySelector('.contactMe');




// varibles for the dates


var d = new window.Date();

// gets the current day, this will be comparted the the values the user returns.
var currentDay = d.getDate() + 1;
var currentMonth = (d.getMonth() + 1);
var currentYear = d.getFullYear();






console.log(currentDay, currentMonth, currentYear)


form.addEventListener('submit', (e) => { // when the form submit button is clicked
    e.preventDefault();

    const em = email.value.trim(); // makes sure that the two emails can be used in string form
    const cem = Cemail.value.trim();
    console.log(date);
    const d = date.value;
    console.log(d);

    var temp = d.split('-');


    const pickedDay = temp[2];
    const pickedMonth = temp[1]; // splits all of the data 
    const pickedYear = temp[0];
    var t = false;
    var t2 = false;





    console.log(pickedDay);



    if (em != cem) {
        console.log("email doesn not match!")
        document.getElementById('error').innerHTML = "The Email Does Not Match!";


    } else {

        console.log("all good");

    }

    // && (pickedMonth >= currentMonth) && (pickedDay >= currentDay)
    if ((pickedYear > currentYear) || ((pickedYear == currentYear) && (pickedMonth > currentMonth)) || ((pickedYear == currentYear) && (pickedMonth == currentMonth) || (pickedDay >= currentDay))) {
        console.log("t");
    } else {

        document.getElementById('error').innerHTML = "Please Choose A Correct Date In The Future!";
    }

    if (((pickedYear > currentYear) || ((pickedYear == currentYear) && (pickedMonth > currentMonth)) || ((pickedYear == currentYear) && (pickedMonth == currentMonth) || (pickedDay >= currentDay))) && (em == cem)) {
        document.getElementById('error').innerHTML = "🦍";
        console.log("MOVE ON CUHHH");

        // add the code that hides the box here.
        // $('#contactMe').css('display', 'none');
        // $('#hideme').show();

        hideme.style.display = 'flex';
        contactMe.style.display = 'none';
        console.log("test")


        const txtFName = firstName.value.trim();
        const txtLName = lastName.value.trim();
        const txtEmail = email.value.trim(); // new text varibles that will be used to display the text to h2's
        const txtPhone = Phone.value.trim();
        const txtContact = contact.value.trim();
        const txtQuery = query.value.trim();


        document.getElementById('1').innerHTML = "Name: " + txtFName + " " + txtLName;
        document.getElementById('2').innerHTML = "Email: " + txtEmail;
        document.getElementById('3').innerHTML = "Phone: " + txtPhone;
        document.getElementById('4').innerHTML = "Contact Method: " + txtContact;
        document.getElementById('5').innerHTML = "Date: " + pickedDay + "/" + pickedMonth + "/" + pickedYear; // updates all of the text fields
        document.getElementById('6').innerHTML = "Query: " + txtQuery;




    }






});



let btn = document.getElementById('button'); // connects the new button to the script


btn.addEventListener('click', () => {
    document.getElementById('7').innerHTML = "Query Sent! "; // confirms and sends the email 

});