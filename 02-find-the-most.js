const petsData = require("./pets-data.js");

/**
 * getHighestPetAge()
 * -----------------------------
 * Returns the highest `age` of all pets. If the inputted `pets` array is empty, return 0.
 * @param {Object[]} pets - An array of pets.
 * @returns {number} The highest `age` of all pets.
 *
 * EXAMPLE:
 *  getHighestPetAge(pets);
 *  > 10
 */
function getHighestPetAge(pets) {
    let highest = 0
    for (let i=0; i<pets.length;i++){
        if(pets[i].age > highest){
            highest=pets[i].age
        }
    }
    return highest
}
console.log(getHighestPetAge(petsData))
/**
 * getLowestPetAge()
 * -----------------------------
 * Returns the lowest `age` of all pets. If the inputted `pets` array is empty, return 0.
 * @param {Object[]} pets - An array of pets.
 * @returns {number} The lowest `age` of all pets.
 *
 * EXAMPLE:
 *  getLowestPetAge(pets);
 *  > 1
 */
function getLowestPetAge(pets) {
    let lowest = pets[0].age 
    for(let i=0 ;i<pets.length ;i++){
        if(pets[i].age < lowest){
            lowest = pets[i].age
        }
        else if (!pets){
            lowest = 0
        }  
    }
    return lowest
}
console.log(getLowestPetAge(petsData))
/**
 * getHeaviestPet()
 * -----------------------------
 * Returns the pet object with the highest `weightInPounds` of all pets. If the inputted `pets` array is empty, return {}.
 * @param {Object[]} pets - An array of pets.
 * @returns {Object} The pet with the highest `weightInPounds`.
 *
 * EXAMPLE:
 *  getHeaviestPet(pets);
 *  > {
        petName: "Gia",
        species: "dog",
        caretakerName: "Steven",
        age: 3,
        favoriteFood: "salami",
        caretakerAge: "34",
        weightInPounds: 25
    }
 */
function getHeaviestPet(pets) {
    let heaviestpet = pets[0].weightInPounds
    
    for (let i=0;i< pets.length;i++){
        if (pets[i].weightInPounds > heaviestpet){
            heaviestpet = pets[i]
            // delete heaviestpet.friendsWith
            // delete heaviestpet.dueForCheckup
        }
        else if (!pets){
            heaviestpet = {}
        }
    }
    return heaviestpet
}
console.log(getHeaviestPet(petsData))
/**
 * getLightestPet()
 * -----------------------------
 * Returns the pet object witht the lowest `weightInPounds` of all pets. If the inputted `pets` array is empty, return {}.
 * @param {Object[]} pets - An array of pets.
 * @returns {Object} The pet with the lowest `weightInPounds`.
 *
 * EXAMPLE:
 *  getLightestPet(pets);
 *  > {
        petName: "Tuba",
        species: "spotted gecko",
        caretakerName: "Ari",
        age: 2,
        favoriteFood: "mealworms",
        caretakerAge: "26",
        weightInPounds: 0.1
    }
 */
function getLightestPet(pets) {
    let lightestPet = pets[0].weightInPounds
    
    for (let i=0;i< pets.length;i++){
        if (pets[i].weightInPounds < lightestPet){
            lightestPet = pets[i]
            // delete lightestPet.friendsWith
            // delete lightestPet.dueForCheckup
        }
        else if (!pets){
            lightestPet = {}
        }
    }
    return lightestPet
}
console.log(getLightestPet(petsData))
/**
 * getLowestCaretakerAge()
 * -----------------------------
 * Returns the `caretakerAge` of the pet with the lowest `caretakerAge`. If the inputted `pets` array is empty, return 0.
 * @param {Object[]} pets - An array of pets.
 * @returns {number} The lowest `caretakerAge` of all pets as a number (not a string).
 *
 * EXAMPLE:
 *  getLowestCaretakerAge(pets);
 *  > 17
 */
function getLowestCaretakerAge(pets) {
    let lowestAge = pets[0].caretakerAge
    for (pet of pets){
        if(pet.caretakerAge < lowestAge){
            lowestAge = pet.caretakerAge
        }
        else if(!pets){
            lowestAge =0
        }
    }
    return Number(lowestAge)

}
console.log(getLowestCaretakerAge(petsData))
/**
 * getNameOfYoungestCaretaker()
 * -----------------------------
 * Returns the `caretakerName` of the pet with the lowest `caretakerAge`. If the inputted `pets` array is empty, return an empty string: ''.
 * @param {Object[]} pets - An array of pets.
 * @returns {string} The `caretakerName` of the pet with the lowest `caretakerAge` of all pets.
 *
 * EXAMPLE:
 *  getNameOfYoungestCaretaker(pets);
 *  > "Katie"
 */
function getNameOfYoungestCaretaker(pets) {
    let lowestAge = pets[0].caretakerAge
    let name = ""
    for (pet of pets){
        if(pet.caretakerAge < lowestAge){
            name = pet.caretakerName
        }
    
    }
    return name
}
console.log(getNameOfYoungestCaretaker(petsData))