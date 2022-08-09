// Function that waits for the JSON data to be returned from the API and then updates the two global variables for 'letter' and 'machineState'.

    var letter;
    var machineState;

    document.addEventListener("keydown", (event) => {
        var keyName = event.key;
        console.log(keyName);

        const getData = async () => {
            const response = await fetch("https://api.ciphermachine.co.uk/typeLetter/FHSLFUSLSM/" + keyName.toUpperCase());
            const data = await response.json();
            letter = data.letter;
             machineState = data.machineState;
            return data.letter;
            return data.machineState;
        };

        (async () => {
            await getData();
            console.log(letter);
            console.log(machineState);
        })();

    });



// Typewriter keys, fetches 'Letter' and 'Machine State' from API, lights up corresponding letter and types out message on parchment paper

    document.addEventListener("keydown", (event) => {
        var keyName = event.key;
        document.getElementById(keyName + "Key").style.height = "2.5vw";
        document.getElementById(keyName + "Key").style.width = "2.5vw";
        document.getElementById(keyName + "KeyText").style.fontSize = "95%";
        document.getElementById(keyName + "Key").style.boxShadow = "-2px 3px 10px 5px black";
        document.getElementById(keyName + "Key").style.marginRight = "0.5vw";

    fetch('https://api.ciphermachine.co.uk/typeLetter/FHSLFUSLSM/' + keyName.toUpperCase()).then(function (response) {
        return response.json();
            }).then(function (data) {
                var { machineState, letter } = data;
                console.log(machineState);
                console.log(letter);

        document.getElementById("typewriterText").insertAdjacentHTML('beforeend', data.letter);
        document.getElementById(data.letter + 'LightContainer').style.boxShadow = "0px 0px 20px 0.2px #fff4ce";
        document.getElementById(data.letter + 'Light').style.color = "#f6da7b";
        document.getElementById(data.letter + 'Light').style.textShadow = "0 0 20px #fff4ce";
        document.getElementById(data.letter + 'Light').style.textShadow = "0 0 2px #fff4ce";

    document.addEventListener("keyup", (event) => {
        var keyName = event.key;
        document.getElementById(keyName + "Key").style.height = "3vw";
        document.getElementById(keyName + "Key").style.width = "3vw";
        document.getElementById(keyName + "KeyText").style.fontSize = "120%";
        document.getElementById(keyName + "Key").style.boxShadow = "-0.5px 2px 2px grey";
        document.getElementById(keyName + "Key").style.marginRight = "0vw";
        document.getElementById(data.letter + 'Light').style.color = "#3c3918";
        document.getElementById(data.letter + 'Light').style.textShadow = "none";
        document.getElementById(data.letter + 'LightContainer').style.boxShadow = "4px -3px 11.5px -6.5px white , -0.5px 0px 3px 2px black";
    });

/* Added a delay function as a catch all, rather than just having 'key up' but bugs remain - holding
    down a key causes the light to 'blink'*/

        setTimeout(function () {
            document.getElementById(keyName + "Key").style.height = "3vw";
            document.getElementById(keyName + "Key").style.width = "3vw";
            document.getElementById(keyName + "KeyText").style.fontSize = "120%";
            document.getElementById(keyName + "Key").style.boxShadow = "-0.5px 2px 2px grey";
            document.getElementById(keyName + "Key").style.marginRight = "0vw";
            document.getElementById(letter + 'Light').style.color = "#3c3918";
            document.getElementById(letter + 'Light').style.textShadow = "none";
            document.getElementById(letter + 'LightContainer').style.boxShadow = "4px -3px 11.5px -6.5px white , -0.5px 0px 3px 2px black";
        }, 400);
    }, false);

// Changing the Cryptex wheel, code manipulated from https://alvarotrigo.com/blog/javascript-select-option/#:~:text=In%20order%20to%20change%20the,updating%20a%20select%20box%20state.

    var machineStateArray = machineState.split('');
    console.log(machineStateArray);

    const $select1 = document.querySelector('#cryptexWheel1');
    $select1.value = machineStateArray[0];
    const $select2 = document.querySelector('#cryptexWheel2');
    $select2.value = machineStateArray[1];
    const $select3 = document.querySelector('#cryptexWheel3');
    $select3.value = machineStateArray[2];
    const $select4 = document.querySelector('#cryptexWheel4');
    $select4.value = machineStateArray[3];
    const $select5 = document.querySelector('#cryptexWheel5');
    $select5.value = machineStateArray[4];
    const $select6 = document.querySelector('#cryptexWheel6');
    $select6.value = machineStateArray[5];
    const $select7 = document.querySelector('#cryptexWheel7');
    $select7.value = machineStateArray[6];
    const $select8 = document.querySelector('#cryptexWheel8');
    $select8.value = machineStateArray[7];
    const $select9 = document.querySelector('#cryptexWheel9');
    $select9.value = machineStateArray[8];
    const $select10 = document.querySelector('#cryptexWheel10');
    $select10.value = machineStateArray[9];

});

























//Space Bar

document.addEventListener("keydown", (event) => {
    var keyName = event.key;
    if (event.code === 'Space') {
        console.log(keyName);
        document.getElementById("typewriterText").insertAdjacentHTML('beforeend', " ");
        document.getElementById("spaceKey").style.height = "1.8vw";
        document.getElementById("spaceKey").style.width = "58vw";

    };
}, false);

document.addEventListener("keyup", (event) => {
    var keyName = event.key;
    if (event.code === 'Space') {
        console.log(keyName);
        document.getElementById("spaceKey").style.height = "2vw";
        document.getElementById("spaceKey").style.width = "60vw";
    };
}, false);



// JS to disable keypad entry within a select element.Taken from https://stackoverflow.com/questions/1227146/disable-keyboard-in-html-select-tag

function IgnoreAlpha(e) {
    if (!e) {
        e = window.event;
    }
    if (e.keyCode >= 65 && e.keyCode <= 90) // A to Z
    {
        e.returnValue = false;
        e.cancel = true;
    }
}
