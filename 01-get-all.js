const pets = require("./pets-data.js");
const petsData = require("./pets-data.js");

/**
 * getAllPetNames()
 * -----------------------------
 * Returns all names from an array of pets. If the inputted `pets` array is empty, return `[]`.
 * @param {Object[]} pets - An array of pets.
 * @returns {string[]} An array of strings, which are pet names.
 *
 * EXAMPLE: getAllPetNames(pets);
 * > ["Deloba", "Tuba", "Percy", "Monkey", "Gia", "Gumby"]
 */

function getAllPetNames(pets) {
    let newArr = []
    for (let i=0; i < pets.length; i++){
    newArr.push(pets[i].petName) 
    }
    return newArr

}
console.log(getAllPetNames(pets))
/**
 * getAllCaretakerNames()
 * -----------------------------
 * Returns all of the pets' caretaker's names from an array of pets. If the inputted `pets` array is empty, return `[]`.
 * @param {Object[]} pets - An array of pets.
 * @returns {string[]} An array of strings, which are the names of the pets' caretakers.
 *
 * EXAMPLE: getAllCaretakerNames(pets);
 * > ["Sam", "Ari", "Nicole", "Katie", "Steven", "John"]
 */

function getAllCaretakerNames(pets) {
    let caretakerArr = []
    for(let pet of pets){
        caretakerArr.push(pet.caretakerName)
    }
    return caretakerArr
}
console.log(getAllCaretakerNames(pets))
/**
 * getAllFavoriteFoods()
 * -----------------------------
 * Returns all favorite foods from an array of pets. If the inputted `pets` array is empty, return `[]`.
 * @param {Object[]} pets - An array of pets.
 * @returns {string[]} An array of strings, which are pets' favorite foods.
 *
 * EXAMPLE: getAllFavoriteFoods(pets);
 * > ["watermelon", "mealworms", "fish", "dog food", "salami", "bacon"]
 */

function getAllFavoriteFoods(pets) {
    let allFoods =[]
    for (let pet of pets){
     allFoods.push(pet.favoriteFood)   
    }
    return allFoods
}
console.log(getAllFavoriteFoods(pets))
/**
 * getAllPetSpecies()
 * -----------------------------
 * Returns all pet species from an array of pets. If the inputted `pets` array is empty, return `[]`.
 * @param {Object[]} pets - An array of pets.
 * @returns {string[]} An array of strings, which are the pets' species.
 *
 * EXAMPLE: getAllPetSpecies(pets);
 * > ["dog", "spotted gecko", "cat", "cat", "dog", "cat"]
 */

function getAllPetSpecies(pets) {
    let allSpeciesArr = []
    for (let i=0; i < pets.length;i++){
        allSpeciesArr.push(pets[i].species)
    }
    return allSpeciesArr
}
console.log(getAllPetSpecies(pets))
/**
 * getAllPetAges()
 * -----------------------------
 * Returns all ages from an array of pets. If the inputted `pets` array is empty, return `[]`.
 * @param {Object[]} pets - An array of pets.
 * @returns {number[]} An array of numbers, which are pet ages.
 *
 * EXAMPLE: getAllPetAges(pets);
 * > [8, 2, 1, 10, 3, 6]
 */

function getAllPetAges(pets) {
    let petAgeArr = []
    for(let i=0; i<pets.length;i++){
        petAgeArr.push(pets[i].age)
    }
    return petAgeArr
}
console.log(getAllPetAges(pets))
/**
 * totalAllPetAges()
 * -----------------------------
 * Returns a total of all ages from an array of pets. If the inputted `pets` array is empty, return 0.
 * @param {Object[]} pets - An array of pets.
 * @returns {number} A number, which is a total of all the pets' ages.
 *
 * EXAMPLE: getAllPetAges(pets);
 * > 30
 */

function totalAllPetAges(pets) {
    let total = 0
    for (let pet of pets){
        total += pet.age
    }
    return total
}
console.log(totalAllPetAges(pets))
/**
 * averageAllPetAges()
 * -----------------------------
 * Returns an average of all ages from an array of pets. If the inputted `pets` array is empty, return 0.
 * @param {Object[]} pets - An array of pets.
 * @returns {number} A number, which is an average of all the pets' ages.
 *
 * EXAMPLE: getAllPetAges(pets);
 * > 5
 */

function averageAllPetAges(pets) {
    let total = 0
    for(let i=0;i<pets.length;i++){
        total += pets[i].age/pets.length
    }
    return total
}
console.log(averageAllPetAges(pets))
/**
 * averageAllCaretakerAges()
 * -----------------------------
 * Returns an average of all caretakers' ages from an array of pets. If the inputted `pets` array is empty, return 0.
 * @param {Object[]} pets - An array of pets.
 * @returns {number} A number, which is an average of all the pets' caretakers' ages.
 *
 * EXAMPLE: getAllCaretakerAges(pets);
 * > 32.3333333
 */

function averageAllCaretakerAges(pets) {
    let total = 0
    for (let pet of pets){
        total+= pet.caretakerAge/pets.length
    }
    return total
}
console.log(averageAllCaretakerAges(pets))
