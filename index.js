/**
 * VARIABLES
 * CONST - konstant, ehk väärtus, mida ei saa muuta hiljem
 * LET - muutuja, mida saab hiljem koodis muuta
 */

const myFirstVariable = "This one we cant change later in code.";
let mySecondVariable = "This one we can change later in code.";
console.log(mySecondVariable);

mySecondVariable = "Just like this";
console.log(mySecondVariable);

/**
 * ANDMETÜÜBID
 * String => "Tere"
 * Number => 43
 * Boolean => true/false
 * Array => ["string", 32, true, {}, []],
 * Object => { key: "value", key2: "value2"}
 */

// Objektid - andmestruktuur, mis koosneb võtmetest ja nendega seotud väärtustest. (key-value pairs)

const whiteboard = {
    width: 1280,
    height: 900,
    brand: "iiyama",
    system: "iOS",
    "screen color": "black",
};

/**
 * TYPE CONVERSIONS
 * Muuda andmetüüp teiseks andmetüübiks
 *
 * String()
 * Number()
 * Boolean()
 */

let matiiasID = "50624120019";
console.log(typeof matiiasID);

matiiasID = Number(matiiasID);
console.log(typeof matiiasID);

/**
 * Comparisons
 * Võrdlus - võrdle andmeid ja andmetüüpe
 *
 * == - Võrdleb väärtust ning tagastab Booleani
 * === - Võrdleb väärtust ja andmetüüpe ning tagastab Booleani
 */

const myAge = "55";
const myRealAge = 55;

console.log(myAge == myRealAge);
console.log(myAge === myRealAge);
