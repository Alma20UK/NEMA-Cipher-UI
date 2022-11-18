/*
**
Redirect functionality based on user screen size. The website won't display properly on screens that are too small. 
**
*/

function redirectMobileHandler() {
    const width = Math.max(document.clientWidth || 0, window.innerWidth || 0);
    const height = Math.max(document.clientHeight || 0, window.innerHeight || 0);
    if (width < 1000 || height < 650) { // Screens less than 1100 in width OR 650 in height will redirect to a different URL
        window.location = 'mobileMessage.html';
    }
}

window.onload = redirectMobileHandler();
window.onresize = () => redirectMobileHandler();






/* 
**
This is the JS for all of the help functionlity on the page including the tooltips and the pop up help window.
**
*/


window.onload = highlightHelp(); // initiating this code as soon as the page is loaded

// This function highlights the 10 selectable 'cryptex wheel' inputs and the red 'crypex lock' lever when any key is pressed but the cryptex lock is set to false
function highlightHelp() {

    document.addEventListener("keydown", (event) => {

        if (cryptexLocked === false) {
            // All of the styling required for highlighting
            lockLever.style.boxShadow = 'inset 0px 4px 5px -3px white, inset 0px -2px 10px 4px #460d06, 0px 0px 10px 1px white';
            lockLever.style.transition = '0.2s';
            cryptexWheel1.style.boxShadow = '0px 0px 15px 1px white';
            cryptexWheel1.style.transition = '0.2s';
            cryptexWheel2.style.boxShadow = '0px 0px 15px 1px white';
            cryptexWheel2.style.transition = '0.2s';
            cryptexWheel3.style.boxShadow = '0px 0px 15px 1px white';
            cryptexWheel3.style.transition = '0.2s';
            cryptexWheel4.style.boxShadow = '0px 0px 15px 1px white';
            cryptexWheel4.style.transition = '0.2s';
            cryptexWheel5.style.boxShadow = '0px 0px 15px 1px white';
            cryptexWheel5.style.transition = '0.2s';
            cryptexWheel6.style.boxShadow = '0px 0px 15px 1px white';
            cryptexWheel6.style.transition = '0.2s';
            cryptexWheel7.style.boxShadow = '0px 0px 15px 1px white';
            cryptexWheel7.style.transition = '0.2s';
            cryptexWheel8.style.boxShadow = '0px 0px 15px 1px white';
            cryptexWheel8.style.transition = '0.2s';
            cryptexWheel9.style.boxShadow = '0px 0px 15px 1px white';
            cryptexWheel9.style.transition = '0.2s';
            cryptexWheel10.style.boxShadow = '0px 0px 15px 1px white';
            cryptexWheel10.style.transition = '0.2s';

            // This time out removes the highlighting and returns the styling to normal 
            setTimeout(function () {
                lockLever.style.boxShadow = 'inset 0px 4px 5px -3px white, inset 0px -2px 10px 4px #460d06';
                cryptexWheel1.style.boxShadow = '0px 0px 2px 0.5px white';
                cryptexWheel2.style.boxShadow = '0px 0px 2px 0.5px white';
                cryptexWheel3.style.boxShadow = '0px 0px 2px 0.5px white';
                cryptexWheel4.style.boxShadow = '0px 0px 2px 0.5px white';
                cryptexWheel5.style.boxShadow = '0px 0px 2px 0.5px white';
                cryptexWheel6.style.boxShadow = '0px 0px 2px 0.5px white';
                cryptexWheel7.style.boxShadow = '0px 0px 2px 0.5px white';
                cryptexWheel8.style.boxShadow = '0px 0px 2px 0.5px white';
                cryptexWheel9.style.boxShadow = '0px 0px 2px 0.5px white';
                cryptexWheel10.style.boxShadow = '0px 0px 2px 0.5px white';

            }, 250);
        }


    })
};


document.getElementById('questionMark').onclick = helpPage; // Clicking on the question mark UI button will open the help page.
document.getElementById('closeHelp').onclick = closeHelp; // Close button for the help page.

function helpPage() { // Makes the help page visbile (set to hidden in CSS)
    document.getElementById("helpPage").style.visibility = 'visible';
}

function closeHelp() { // Makes the help page hidden again
    document.getElementById("helpPage").style.visibility = 'hidden';
}

// Tool tip help made visbile (initated 'onmouseover' in my HTML)
function tooltip1() { 
    if (cryptexLocked === false) {
        document.getElementById("tooltip1").style.opacity = '1';
    }
}

// Tool tip help made hidden (initated 'onmouseout' in my HTML)
function hideTooltip1() {
    document.getElementById("tooltip1").style.opacity = '0';
}

function tooltip2() {
    document.getElementById("tooltip2").style.opacity = '1';
}

function hideTooltip2() {
    document.getElementById("tooltip2").style.opacity = '0';
}







/*
**
This functionality is used to set the NEMA starting 'key' (10 letter sequence based on the letters selected on each cryptex wheel)
**
*/

// These variables represent the 'selected' letter of each of the 10 cryptex 'wheels'
var select1 = document.querySelector('#cryptexWheel1');
var select2 = document.querySelector('#cryptexWheel2');
var select3 = document.querySelector('#cryptexWheel3');
var select4 = document.querySelector('#cryptexWheel4');
var select5 = document.querySelector('#cryptexWheel5');
var select6 = document.querySelector('#cryptexWheel6');
var select7 = document.querySelector('#cryptexWheel7');
var select8 = document.querySelector('#cryptexWheel8');
var select9 = document.querySelector('#cryptexWheel9');
var select10 = document.querySelector('#cryptexWheel10');

// An array for every letter in the alphabet that can be called upon to update all of the letters of each cryptex wheel.
alphabetArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// This array is used to represent the 10 cryptex wheels
arrayList = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];


// This key down event is used to update all of the letters on all of the cryptex wheels. Providing the illusion of a rotating cryptex wheel.
document.addEventListener("keydown", (event) => {

    // I added a short delay to this so that the selected letter value has time to update before the rest of the letters on the wheel are changed
    setTimeout(function () {

        // The cryptex key is a 10 letter comination of each of the selected cryptex wheel values
        var cryptexKey = select1.value + select2.value + select3.value + select4.value + select5.value + select6.value + select7.value + select8.value + select9.value + select10.value;
        console.log(cryptexKey);

        // This for loop Iterates through each cryptex wheel 1-10 and updates all of the letters
        for (var number of arrayList) {

            var i = (Number(number) + 1); // 'Number()' is a method used that takes a string variable and turns it into a variable. 'i' is just the number (0-9) + 1 which gives a number 1-10 which I can use to select one of the ten cryptex wheels
            var wheelSelected = cryptexKey[number] // wheelSeleted is all 10 of my machine state values
            var n = wheelSelected.charCodeAt(0) - 65; // 'n' is all 10 of the machine state values converted into a JavaScipt character code using charCodeAt()
        
            // Going from A 'backwards' to Z, Y, X on the displayed cryptex characters requires a different amount added to the character code for A, B, C and D
            if (cryptexKey[number] === 'A') {
                document.querySelector('#wheel' + i + 'Key1').innerHTML = alphabetArray[n + 25];
                document.querySelector('#wheel' + i + 'Key2').innerHTML = alphabetArray[n + 24];
                document.querySelector('#wheel' + i + 'Key3').innerHTML = alphabetArray[n + 23];
                document.querySelector('#wheel' + i + 'Key4').innerHTML = alphabetArray[n + 22];
            } else if (cryptexKey[number] === 'B') {
                document.querySelector('#wheel' + i + 'Key1').innerHTML = alphabetArray[n - 1];
                document.querySelector('#wheel' + i + 'Key2').innerHTML = alphabetArray[n + 24];
                document.querySelector('#wheel' + i + 'Key3').innerHTML = alphabetArray[n + 23];
                document.querySelector('#wheel' + i + 'Key4').innerHTML = alphabetArray[n + 22];
            } else if (cryptexKey[number] === 'C') {
                document.querySelector('#wheel' + i + 'Key1').innerHTML = alphabetArray[n - 1];
                document.querySelector('#wheel' + i + 'Key2').innerHTML = alphabetArray[n - 2];
                document.querySelector('#wheel' + i + 'Key3').innerHTML = alphabetArray[n + 23];
                document.querySelector('#wheel' + i + 'Key4').innerHTML = alphabetArray[n + 22];
            } else if (cryptexKey[number] === 'D') {
                document.querySelector('#wheel' + i + 'Key1').innerHTML = alphabetArray[n - 1];
                document.querySelector('#wheel' + i + 'Key2').innerHTML = alphabetArray[n - 2];
                document.querySelector('#wheel' + i + 'Key3').innerHTML = alphabetArray[n - 3];
                document.querySelector('#wheel' + i + 'Key4').innerHTML = alphabetArray[n + 22];
            } else { // If the selected letter is anything other than A, B, C or D then this code will execute.
                document.querySelector('#wheel' + i + 'Key1').innerHTML = alphabetArray[n - 1];
                document.querySelector('#wheel' + i + 'Key2').innerHTML = alphabetArray[n - 2];
                document.querySelector('#wheel' + i + 'Key3').innerHTML = alphabetArray[n - 3];
                document.querySelector('#wheel' + i + 'Key4').innerHTML = alphabetArray[n - 4];
            }
        }
    }

    );

}, 100);

    


/*
**
This functionality is used to create a 'true' or 'false' boolean value based on whether the 'cryptex lock' is in an up or down position.
When the lock is up (false), the 'key' can be selected and the selected values for each wheel can be changed.
When the lock is down (true), much of the functionality below is able to be executed. 
**
*/

var cryptexLocked = false;

document.getElementById('lockLever').onclick = moveLockLeaver;

function moveLockLeaver() { //

    // This enables or disables the selected input for each of the 10 cryptex wheels based on whether 'cryptexLocked' is true or false.
    if (cryptexLocked === true) {
        document.getElementById('cryptexWheel1').disabled = false;
        document.getElementById('cryptexWheel2').disabled = false;
        document.getElementById('cryptexWheel3').disabled = false;
        document.getElementById('cryptexWheel4').disabled = false;
        document.getElementById('cryptexWheel5').disabled = false;
        document.getElementById('cryptexWheel6').disabled = false;
        document.getElementById('cryptexWheel7').disabled = false;
        document.getElementById('cryptexWheel8').disabled = false;
        document.getElementById('cryptexWheel9').disabled = false;
        document.getElementById('cryptexWheel10').disabled = false;
    } else if (cryptexLocked === false) {
        document.getElementById('cryptexWheel1').disabled = true;
        document.getElementById('cryptexWheel2').disabled = true;
        document.getElementById('cryptexWheel3').disabled = true;
        document.getElementById('cryptexWheel4').disabled = true;
        document.getElementById('cryptexWheel5').disabled = true;
        document.getElementById('cryptexWheel6').disabled = true;
        document.getElementById('cryptexWheel7').disabled = true;
        document.getElementById('cryptexWheel8').disabled = true;
        document.getElementById('cryptexWheel9').disabled = true;
        document.getElementById('cryptexWheel10').disabled = true;

    }

    // If the cryptex lock is false, this function will animate the lever, play a sound and change the boolean value to 'true'
    if (cryptexLocked === false) { 
        var counterLever = document.getElementById('lockLever');
        var audio = new Audio('Media/lockDown.wav');
        audio.volume = 0.9;
        counterLever.style.top = '65%';
        counterLever.style.transition = '0.5s';
        audio.play();
        cryptexLocked = true; // Change the status of whether the cryptex is locked to true
        document.getElementById("typewriterText").innerHTML = "";

    // If the cryptex lock is true it will move the lever back to the top of the slider and change the boolean value to 'false'
    } else {
        var counterLever = document.getElementById('lockLever');
        var audio = new Audio('Media/lockDown.wav');
        audio.volume = 0.3;
        counterLever.style.top = '0%';
        counterLever.style.transition = '0.5s';
        audio.play();
        cryptexLocked = false;
    };

};




/*
**
This keydown event starts a number of events related to the NEMA UI functionality but only when the cryptex lock is 'true'.
In that way the user is able to select their cryptex 'key', engage the cryptex lock and then use the machine as it is intended.
**
*/

document.addEventListener("keydown", (event) => {
    var keyName = event.key;
    console.log(keyName);

    if (event.repeat) { return } // Stops the keydown event firing repeatedly if you hold down a key. Taken from: https://stackoverflow.com/questions/6087959/prevent-javascript-keydown-event-from-being-handled-multiple-times-while-held-do#:~:text=To%20avoid%20repeated%20keydown%20event,in%20older%20version%20of%20JS.

    if (cryptexLocked === true) {

        // Only key codes between 65 and 90 are valid. Meaning only A-Z keys will affect the NEMA machine.
        var keycode;
        if (window.event) keycode = window.event.keyCode;
        if (window.event.keyCode < 65) return false;
        if (window.event.keyCode > 90) return false;

        increment(); // function to increase the analogue counter if key pressed between A-Z

        // Key down and key up audio recorded from an actual NEMA machine.
        var audio = new Audio('Media/keydown.m4a');
        audio.play();
        audio.volume = 0.3;

        setTimeout(function () {
            var audio = new Audio('Media/keyup.m4a');
            audio.play();
            audio.volume = 0.3;

        }, 400); // Delay functionality before the 'key up' audio is played.

        // Means that if caps lock is on, the key press functionality will still work.
        if (keyName === keyName.toUpperCase()) {
            keyName = keyName.toLowerCase();
        };



        /* This was my first attempt at extracting 'letter' and 'machinestate' values from the JSON. I have rewritten the same functionality below.
           I do no believe I need this JS any longer but have kept it to be safe.
        
        const getData = async () => { // using 'fetch' to send a URL to the API.
            const response = await fetch('https://api.ciphermachine.co.uk/typeLetter/' + machineState + '/' + keyName.toUpperCase());
            const data = await response.json();
            letter = data.letter; // Extracting the relevant letter value from the JSON recieved from the API
            machineState = data.machineState; // Extracting the 'machine state' from the JSON recieved from the API
            return data.letter;
            return data.machineState;
        };

        (async () => {
            await getData();
            console.log(letter);
            console.log(machineState);
        })();*/


        // Functionality for animating an alpahabetical key being pressed on the keyboard.
        document.getElementById(keyName + "Key").style.height = "2.5vw";
        document.getElementById(keyName + "Key").style.width = "2.5vw";
        document.getElementById(keyName + "KeyText").style.fontSize = "95%";
        document.getElementById(keyName + "Key").style.boxShadow = "-2px 3px 10px 5px black";
        document.getElementById(keyName + "Key").style.marginRight = "0.5vw";

        /*
        **
        This fetch function takes the 'machine state' (the ten letter combination created by each of the selected cryptex wheels) as well as the users keypad entry and sends it to Rapid 7's API.
        The function then waits for the JSON data to be returned from the API and updates the two global variables for 'letter' and 'machineState'.
        When the machine state is updated, all of the values of each of the ten cryptex wheels are updated.
        The 'letter' variable that is returned, is then used to light up the corresponding letter on the NEMA UI dashboard.
        The information recieved from the API is a representation of the functionality of a traditional NEMA machine and was written by Marcus Eaton of Rapid 7. 
        **
        */

        var machineState; // This is the 10 selected letters at the bottom of each cryptex wheel
        var letter; // This is the keypad entry of the user

        // The 'machine state' operates in exactly the same way as the cryptexKey, written above
        machineState = select1.value + select2.value + select3.value + select4.value + select5.value + select6.value + select7.value + select8.value + select9.value + select10.value;
        console.log(machineState)

        fetch('https://api.ciphermachine.co.uk/typeLetter/' + machineState + '/' + keyName.toUpperCase()).then(function (response) {
            return response.json();
        }).then(function (data) {
            var { machineState, letter } = data;
            console.log(machineState);
            console.log(letter);


            /* THis functionality takes the returned 'letter' from the API (which is now 'encrypted') and does two things:
            1. Lights up the corresponding dashboard letter.
            2. Types out the letter on the notepad.
            */
            document.getElementById("typewriterText").insertAdjacentHTML('beforeend', data.letter);
            document.getElementById(data.letter + 'LightContainer').style.boxShadow = "0px 0px 20px 0.2px #fff4ce";
            document.getElementById(data.letter + 'Light').style.color = "#f6da7b";
            document.getElementById(data.letter + 'Light').style.textShadow = "0 0 20px #fff4ce";
            document.getElementById(data.letter + 'Light').style.textShadow = "0 0 2px #fff4ce";

            // This 'key up' functionality removes the 'depressed' keyboard styling upon the key being released.
            document.addEventListener("keyup", (event) => {
                var keyName = event.key;

                if (keyName === keyName.toUpperCase()) {
                    keyName = keyName.toLowerCase();
                }; // Means that if caps lock is on, the key press functionality will still work

                var keycode;
                if (window.event) keycode = window.event.keyCode;
                if (window.event.keyCode < 65) return false;
                if (window.event.keyCode > 90) return false;

                document.getElementById(keyName + "Key").style.height = "3vw";
                document.getElementById(keyName + "Key").style.width = "3vw";
                document.getElementById(keyName + "KeyText").style.fontSize = "120%";
                document.getElementById(keyName + "Key").style.boxShadow = "-0.5px 2px 2px grey";
                document.getElementById(keyName + "Key").style.marginRight = "0vw";
                });


            // An array created to split the 10 letter machine state into individual, accesible bits of data
            var machineStateArray = machineState.split('');
            console.log(machineState);

            select1.value = machineStateArray[0];
            select2.value = machineStateArray[1];
            select3.value = machineStateArray[2];
            select4.value = machineStateArray[3];
            select5.value = machineStateArray[4];
            select6.value = machineStateArray[5];
            select7.value = machineStateArray[6];
            select8.value = machineStateArray[7];
            select9.value = machineStateArray[8];
            select10.value = machineStateArray[9];



            /*
            This functionality has been explained above.
            It is used to update every input on each of the 10 cryptex wheels.
            It is repeated here so that there is a cryptex 'key' that can be initally set before the cryptex lock is engaged.
            And then that there is then a subsequent 'machine state' that can be continaully updated based on each individual key press.
            */
            for (var number of arrayList) { 

                var i = (Number(number) + 1);
        
                var wheelSelected = machineState[number]
                var n = wheelSelected.charCodeAt(0) - 65;
        
                if (machineState[number] === 'A') {
                    document.querySelector('#wheel' + i + 'Key1').innerHTML = alphabetArray[n + 25];
                    document.querySelector('#wheel' + i + 'Key2').innerHTML = alphabetArray[n + 24];
                    document.querySelector('#wheel' + i + 'Key3').innerHTML = alphabetArray[n + 23];
                    document.querySelector('#wheel' + i + 'Key4').innerHTML = alphabetArray[n + 22];
                } else if (machineState[number] === 'B') {
                    document.querySelector('#wheel' + i + 'Key1').innerHTML = alphabetArray[n - 1];
                    document.querySelector('#wheel' + i + 'Key2').innerHTML = alphabetArray[n + 24];
                    document.querySelector('#wheel' + i + 'Key3').innerHTML = alphabetArray[n + 23];
                    document.querySelector('#wheel' + i + 'Key4').innerHTML = alphabetArray[n + 22];
                } else if (machineState[number] === 'C') {
                    document.querySelector('#wheel' + i + 'Key1').innerHTML = alphabetArray[n - 1];
                    document.querySelector('#wheel' + i + 'Key2').innerHTML = alphabetArray[n - 2];
                    document.querySelector('#wheel' + i + 'Key3').innerHTML = alphabetArray[n + 23];
                    document.querySelector('#wheel' + i + 'Key4').innerHTML = alphabetArray[n + 22];
                } else if (machineState[number] === 'D') {
                    document.querySelector('#wheel' + i + 'Key1').innerHTML = alphabetArray[n - 1];
                    document.querySelector('#wheel' + i + 'Key2').innerHTML = alphabetArray[n - 2];
                    document.querySelector('#wheel' + i + 'Key3').innerHTML = alphabetArray[n - 3];
                    document.querySelector('#wheel' + i + 'Key4').innerHTML = alphabetArray[n + 22];
                } else {
                    document.querySelector('#wheel' + i + 'Key1').innerHTML = alphabetArray[n - 1];
                    document.querySelector('#wheel' + i + 'Key2').innerHTML = alphabetArray[n - 2];
                    document.querySelector('#wheel' + i + 'Key3').innerHTML = alphabetArray[n - 3];
                    document.querySelector('#wheel' + i + 'Key4').innerHTML = alphabetArray[n - 4];
                }
            };


            // This is the delay functionality before the correspending letter lightbulb is turned off on the dashboard.
            setTimeout(function () {
                document.getElementById(letter + 'Light').style.color = "#3c3918";
                document.getElementById(letter + 'Light').style.textShadow = "none";
                document.getElementById(letter + 'LightContainer').style.boxShadow = "4px -3px 11.5px -6.5px white , -0.5px 0px 3px 2px black";
            }, 300);
        }, false);
    }
});




    


/*
**
Animation and functionality if the space bar is pressed
**
*/

document.addEventListener("keydown", (event) => {
    var keyName = event.key;

    if (event.repeat) { return }
    if (cryptexLocked === true) {

        if (event.code === 'Space') {
            console.log(keyName);
            document.getElementById("typewriterText").insertAdjacentHTML('beforeend', " ");
            document.getElementById("spaceKey").style.height = "1.8vw";
            document.getElementById("spaceKey").style.width = "58vw";

            var audio = new Audio('Media/keydown.m4a');
            audio.play();
            audio.volume = 0.3;

            setTimeout(function () {
                var audio = new Audio('Media/keyup.m4a');
                audio.play();
                audio.volume = 0.3;
            }, 400);

        };
    }
}, false);


document.addEventListener("keyup", (event) => {
    var keyName = event.key;
    if (event.code === 'Space') {
        console.log(keyName);
        document.getElementById("spaceKey").style.height = "2vw";
        document.getElementById("spaceKey").style.width = "60vw";
    };
}, false);





/*
**
Creates the animation for clicking the analogue counter lever and also resets any typed out text or any increase in the analogue counter
**
*/

document.getElementById('lever').onclick = moveCounterLeaver;

// Function to animate the counter lever and play the lever sound
function moveCounterLeaver() {
    var counterLever = document.getElementById('lever');
    var audio = new Audio('Media/leverClick.wav');
    audio.volume = 0.3;
    counterLever.style.top = '70%';
    counterLever.style.transition = '0.4s';
    audio.play();
    document.getElementById("typewriterText").innerHTML = "";
    document.getElementById("counter").innerHTML = "0";
    document.getElementById("counter2").innerHTML = "0";
    document.getElementById("counter3").innerHTML = "0";
    document.getElementById("pseudoCounter").innerHTML = "0";

    setTimeout(function () {
        counterLever.style.top = '5%';
        counterLever.style.transition = '0.5s';
    }, 400);

}


// The 'pseudo' counter is hidden. This JS extracts the values from that number array[0,1,2] and puts them into my visible key press counter to create an analogue based counter.
var pseudoCounter = document.querySelector('#pseudoCounter');
var counter = document.querySelector('#counter');
var counter2 = document.querySelector('#counter2');
var counter3 = document.querySelector('#counter3');

function increment() {

    var number = parseInt(pseudoCounter.innerHTML);
    number++;
    pseudoCounter.innerText = number;

    counter.innerText = number;

    if (number > 9) {
        counter.innerText = number.toString()[1];
        counter2.innerText = number.toString()[0];
    }

    if (number > 99) {
        counter.innerText = number.toString()[2];
        counter2.innerText = number.toString()[1];
        counter3.innerText = number.toString()[0];

    }

};
