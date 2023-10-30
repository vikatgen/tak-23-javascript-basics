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

/**
 * HOISTING
 * Hoisting tähendab tõlkes tõstmine.
 * Javascript tõstab muutujate deklaratsioone oma skoobi algusesse (koodi teostamise ajal - RUNTIME).
 */

/**
 * SCOPES
 * Tüübid - GLOBAL | LOCAL | BLOCK
 * Koodibloki tähis on alati {} - kogu kood nende märgiste sees elab koodiblokis ehk BLOCK SCOPE.
 * GLOBAL skoop on elemendid, mis ei asu ühegi koodibloki sees, vaid on faili rootis.
 * Skoopimine määrab ära, kuidas meie kood pääseb ligi erinevatele muutujatele ja funktsioonidele.
 * Skoopimine määrab ära, millises kontekstis on meie muutujad "nähtamatud".
 * Lahendab probleemi, kus välditakse muutujate soovimatut ülekirjutamist.
 * NÄIDE: Funktsiooni sees tehtud muutujaid saab kasutada vaid selle funktsiooni sees.
 */

function thisIsBlockScope() {
    const blockScopedVariable =
        "This is created inside block scoped (Function). Logging it out outside of this scope will give us an ReferenceError.";
}
// Proovi seda välja logida. Meie keskkond annab meile errori.
// console.log(blockScopedVariable);

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
 * Andmetüüpe saab kontrollida võtmesõnaga typeof
 * (typeof Something)
 *
 * String()
 * Number()
 * Boolean()
 * Error()
 * Math()
 * Date()
 * Function()
 */

let studentID = "50624120019";
console.log(typeof studentID);

studentID = Number(studentID);
console.log(typeof studentID);

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
