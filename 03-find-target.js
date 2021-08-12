const petsData = require("./pets-data.js");

/**
 * findPetById()
 * -----------------------------
 * Returns a pet object from an array of objects based on the input `id`. If the inputted `pets` array is
 * empty or the `id` does not match any pets, return error message: `Could not find pet with ID of '${id}'.`
 * @param {Object[]} pets - An array of pets. See the `pets-data.js` file for an example of this array.
 * @param {number} id - A unique pet `petId`.
 * @returns {Object||string} The pet object with the matching `petId`. || If input `id` cannot be found, return error message string.
 *
 * EXAMPLE:
 *  findPetById(pets, 104);
 *  > {
        petName: "Monkey",
        id: 104,
        species: "cat",
        caretakerName: "Katie",
        age: 10,
        favoriteFood: "dog food",
        caretakerAge: "17",
        weightInPounds: 14
    }

EXAMPLE:
 *  findPetById(pets, 100);
 *  > "Could not find pet with ID of '100'."
 */
function findPetById(pets,id) {
    let foundPet = ""

    for (let i=0; i<pets.length; i++){
        if (pets[i].petId === id){
            foundPet = pets[i]
            // delete foundPet.friendsWith
            // delete foundPet.dueForCheckup
            return foundPet
        }
        
    } 
    return  `Could not find pet with ID of '${id}'.`                        
}
console.log(findPetById(petsData, 104))
/**
 * findPetByName()
 * -----------------------------
 * Returns a pet object from an array of objects based on the input `petName`. If the inputted `pets` array is
 * empty or the `petName` does not match any pets, return error message: `Could not find pet with name of '${name}'.`
 * @param {Object[]} pets - An array of pets. See the `pets-data.js` file for an example of this array.
 * @param {string} name - A unique pet `petName`.
 * @returns {Object||string} The pet object with the matching `petName`. || If input `name` cannot be found, return error message string.
 *
 * EXAMPLE:
 *  findPetByName(pets, "Gumby");
 *  > {
        petName: "Gumby",
        petId: 106,
        species: "cat",
        caretakerName: "John",
        age: 6,
        favoriteFood: "bacon",
        caretakerAge: "61",
        weightInPounds: 18
    }

EXAMPLE:
 *  findPetByName(pets, "Steven");
 *  > "Could not find pet with name of 'Steven'."
 */
function findPetByName(pets, name) {
    let byName = ""
    for(let i=0; i<pets.length; i++){
        if(pets[i].petName === name){
            byName = pets[i]
            // delete byName.friendsWith
            // delete byName.dueForCheckup
            return byName
        }
    }
    return `Could not find pet with name of '${name}'.`
}
console.log(findPetByName(petsData, "Gumby"))
/**
 * findPetByCaretaker()
 * -----------------------------
 * Returns a pet object from an array of objects based on the input `caretaker`. If the inputted `pets` array is
 * empty or the `caretakerName` does not match any pets, return error message: `Could not find pet with caretaker named '${name}'.`
 * @param {Object[]} pets - An array of pets. See the `pets-data.js` file for an example of this array.
 * @param {string} name - A pet `caretakerName`.
 * @returns {Object||string} The pet object with the matching `petName`. || If input `name` cannot be found, return error message string.
 *
 * EXAMPLE:
 *  findPetByCaretaker(pets, "Nicole");
 *  > {
        petName: "Percy",
        petId: 103,
        species: "cat",
        caretakerName: "Nicole",
        age: 1,
        favoriteFood: "fish",
        caretakerAge: "29",
        weightInPounds: 12
    }

    EXAMPLE:
 *  findPetByCaretaker(pets, "Sabrina");
 *  > "Could not find pet with caretaker named 'Sabrina'."
 */
function findPetByCaretaker(pets, name) {
    let byCaretaker = ""
    for (let i=0;i<pets.length;i++)
    if (pets[i].caretakerName === name){
        byCaretaker = pets[i]
        // delete byCaretaker.friendsWith
        // delete byCaretaker.dueForCheckup
        return byCaretaker
    }
    return `Could not find pet with caretaker named '${name}'.`
}
console.log(findPetByCaretaker(petsData,"Nicole"))
/**
 * findPetByFavoriteFood()
 * -----------------------------
 * Returns a `petName` from an array of pets based on the input `FavoriteFood`. If the inputted `pets` array is
 * empty or the inputted `food` does not match any pets, return null
 * @param {Object[]} pets - An array of pets. See the `pets-data.js` file for an example of this array.
 * @param {string} food - A pet's `favoriteFood`.
 * @returns {string || null} The `petName` of the pet whose `favoriteFood` matches the input `food`
 * if the input doesn't match any pets `favoriteFood`, return null
 *
 * EXAMPLE:
 *  findPetByFavoriteFood(pets, "watermelon");
 *  > "Deloba"
 *
 * EXAMPLE:
 *  findPetByFavoriteFood(pets, "steak");
 *  > null
 */
function findPetByFavoriteFood(pets, food) {
    let byFood = null
    for(let i=0; i<pets.length; i++)
    if(pets[i].favoriteFood === food){
         byFood = pets[i].petName
       
        
    }
    return byFood
}
console.log(findPetByFavoriteFood(petsData, "watermelon"))