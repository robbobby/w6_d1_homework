                    // ##### Number 1 #####/
const scenario = {
    murderer: 'Miss Scarlet',
    room: 'Library',
    weapon: 'Rope'
};

const declareMurderer = function() {
    return `The murderer is ${scenario.murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);
/* Don't think there is an error here, you can assign a const to another variable
* you just can't redeclare a const */

                    // ##### Number 2 #####/
const murderer = 'Professor Plum';

const changeMurderer = function() {
    murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
    return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

/* The murderer is not declared correctly as a 'property?' of the scenario object
* */

                    // ##### Number 3 #####/
let murderer = 'Professor Plum';

const declareMurderer = function() {
    let murderer = 'Mrs. Peacock';
    return `The murderer is ${murderer}.`;
}

const firstVerdict = declareMurderer();
console.log('First Verdict: ', firstVerdict);

const secondVerdict = `The murderer is ${murderer}.`;
console.log('Second Verdict: ', secondVerdict);

/* The first one will read  the functions murderer because it is creating a new local variable
* called 'murder', and the second will read its local variable which has not changed since it's
* initial declaration */

                    // ##### Number 4 #####/
let suspectOne = 'Miss Scarlet';
let suspectTwo = 'Professor Plum';
let suspectThree = 'Mrs. Peacock';

const declareAllSuspects = function() {
    let suspectThree = 'Colonel Mustard';
    return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
}

const suspects = declareAllSuspects();
console.log(suspects);
console.log(`Suspect three is ${suspectThree}.`);
/* This has created suspect 3 in the function and then assigned the 'suspectOne' and 'suspectTwo'
*  to the return statement from the outer scope, then used its local variable in the return statement
*  so the function will read The suspects are 'Miss Scarlet, 'Professor Plum' and 'Colonel Mustard
*  The final log will print out its local variable of 'Mrs. Peacock' */

                    // ##### Number 5 #####/
const scenario = {
    murderer: 'Miss Scarlet',
    room: 'Kitchen',
    weapon: 'Candle Stick'
};

const changeWeapon = function(newWeapon) {
    scenario.weapon = newWeapon;
}

const declareWeapon = function() {
    return `The weapon is the ${scenario.weapon}.`;
}

changeWeapon('Revolver');
const verdict = declareWeapon();
console.log(verdict);

/* We can change the values inside of const objects so when we call the 'changeWeapon' function
*  it will change the value of weapon to the 'Revolver', The way is assigns const verdict to the function
*  seems a little funky but makes sense. */

                    // ##### Number 6 #####/
let murderer = 'Colonel Mustard';

const changeMurderer = function() {
    murderer = 'Mr. Green';

    const plotTwist = function() {
        murderer = 'Mrs. White';
    }
    plotTwist();
}

const declareMurderer = function () {
    return `The murderer is ${murderer}.`;
}
changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

/* The Change murderer changes the value of murderer twice on call, which is of no use in this function
*  The code could be edited in future to do something more useful with the murderer on the first call
*  First is assigns the value to 'Mr. Green' then it comes to 'plotTwist()' and calls the function
*  which is inside itsself, if this wasn't there it murderer would end been 'Mr. Green' */

                    // ##### Number 7 #####/
let murderer = 'Professor Plum';

const changeMurderer = function() {
    murderer = 'Mr. Green';

    const plotTwist = function() {
        let murderer = 'Colonel Mustard';

        const unexpectedOutcome = function() {
            murderer = 'Miss Scarlet';
        }
        unexpectedOutcome();
    }
    plotTwist();
}

const declareMurderer = function() {
    return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

/* Same as above aside from when the plotTwist is called, it is making a new local variable
*  of murderer ans assigning it to 'Colonel Mustard' and then another function is called
*  which changes this local variable also, the original murderer is not changes at any point
*  when inside a function it seems it chooses the most local variable to work with. */

                    // ##### Number 8 #####/
const scenario = {
    murderer: 'Mrs. Peacock',
    room: 'Conservatory',
    weapon: 'Lead Pipe'
};

const changeScenario = function() {
    scenario.murderer = 'Mrs. Peacock';
    scenario.room = 'Dining Room';

    const plotTwist = function(room) {
        if (scenario.room === room) {
            scenario.murderer = 'Colonel Mustard';
        }

        const unexpectedOutcome = function(murderer) {
            if (scenario.murderer === murderer) {
                scenario.weapon = 'Candle Stick';
            }
        }
        unexpectedOutcome('Colonel Mustard');
    }
    plotTwist('Dining Room');
}

const declareWeapon = function() {
    return `The weapon is ${scenario.weapon}.`
}

changeScenario();
const verdict = declareWeapon();
console.log(verdict);
/*  First we call the changeScenario function which alters the scenario properties
*   then inside that function it also calls the 'plotTwist' function which also changes the scenario properties,
*   finally inside that function it calls the 'unexpectedOutcome' function which changes the weapon to
*   'Candle Stick'
*   It then assins the declareWeapon function to the verdict which uses the scenario.weapon
*   which as re-assigned in the previous line*/


                    // ##### Number 9 #####/
let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
    let murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
    return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);

/* The murderer is never changed as in the if statement is creates a new murderer variable
*  assigns it to 'Mrs. Peacock' and then it disapears after the if statement is finished. */