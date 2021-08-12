const pets = require("./pets-data.js");
const petsData = require("./pets-data.js");

/**
 * filterBySpecies()
 * -----------------------------
 * Returns all pet objects with a matching species. If the inputted `pets` array is empty or no pets match the inputted `species`, return `[]`.
 * @param {Object[]} pets - An array of pets. See the `pets-data.js` file for an example of this array.
 * @param {string} species - The species of a pet.
 * @returns {Object[]} An array of pets where the species matches the `species` inputted.
 *
 * EXAMPLE:
 *  filterBySpecies(pets, "cat");
 *  > [
 * {
        petName: "Percy",
        petId: 103,
        species: "cat",
        caretakerName: "Nicole",
        age: 1,
        favoriteFood: "fish",
        caretakerAge: "29",
        weightInPounds: 12
    },
    {
        petName: "Monkey",
        petId: 104,
        species: "cat",
        caretakerName: "Katie",
        age: 10,
        favoriteFood: "dog food",
        caretakerAge: "17",
        weightInPounds: 14
    },
    {
        petName: "Gumby",
        petId: 106,
        species: "cat",
        caretakerName: "John",
        age: 6,
        favoriteFood: "bacon",
        caretakerAge: "61",
        weightInPounds: 18
    }
 * ]
 *
 * EXAMPLE:
 *  filterBySpecies(pets, "parakeet")
 *  > []
 */
function filterBySpecies(petsData, species) {
    speciesArr = []
    for (let i=0; i<pets.length; i++){
        if(pets[i].species === species){
            speciesArr.push(pets[i])
            // delete pets[i].friendsWith
            // delete pets[i].dueForCheckup
        }
    }
    return speciesArr
}
console.log(filterBySpecies(petsData, "cat"))
/**
 * getNamesBySpecies()
 * -----------------------------
 * Returns all pets' `petNames` that match the species. If the inputted `pets` array is empty or no pets match the inputted `species`, return `[]`.
 * @param {Object[]} pets - An array of pets. See the `pets-data.js` file for an example of this array.
 * @param {string} species - The species of a pet.
 * @returns {String[]} An array of pets' `petNames` where the species matches the `species` inputted.
 *
 * EXAMPLE:
 *  getNamesBySpecies(pets, "dog");
 *  > ["Deloba", "Gia"]
 *
 * EXAMPLE:
 *  getNamesBySpecies(pets, "parakeet")
 *  > []
 */
function getNamesBySpecies(pets, species) {
    let speciesName = []
    for (let pet of pets){
        if(pet.species === species){
            speciesName.push(pet.petName)
        }
    }
    return speciesName
}
console.log(getNamesBySpecies(pets, "dog"))
/**
 * filterByMinAge()
 * -----------------------------
 * Returns all pet objects with an `age` greater than or equal to the given number. If the inputted `pets` array is empty or all pets are younger than the given number, return `[]`.
 * @param {Object[]} pets - An array of pets. See the `pets-data.js` file for an example of this array.
 * @param {number} minAge - The minimum acceptable age.
 * @returns {Object[]} An array of pets with an `age` greater than or equal to `minAge`.
 *
 * EXAMPLE:
 *  filterByMinAge(pets, 5);
 *  > [
 * {
        petName: "Deloba",
        petId: 101,
        species: "dog",
        caretakerName: "Sam",
        age: 8,
        favoriteFood: "watermelon",
        caretakerAge: '27',
        weightInPounds: 15
    },
    {
        petName: "Monkey",
        petId: 104,
        species: "cat",
        caretakerName: "Katie",
        age: 10,
        favoriteFood: "dog food",
        caretakerAge: "17",
        weightInPounds: 14
    },
 * {
        petName: "Gumby",
        petId: 106,
        species: "cat",
        caretakerName: "John",
        age: 6,
        favoriteFood: "bacon",
        caretakerAge: "61",
        weightInPounds: 18
    },
 * ]
 *
 * EXAMPLE:
 *  filterByMinAge(pets, 12)
 *  > []
 */
function filterByMinAge(pets, minAge ) {
    let minAgeArr = []
    for (let i=0; i<pets.length; i++){
        if (pets[i].age >= minAge){
            minAgeArr.push(pets[i])
            // delete pets[i].friendsWith
            // delete pets[i].dueForCheckup
        }
    }
    return minAgeArr
}
console.log(filterByMinAge(pets, 5))
/**
 * filterByMaxAge()
 * -----------------------------
 * Returns all pet objects with an `age` less than or equal to the given number. If the inputted `pets` array is empty or all pets are older than the given number, return `[]`.
 * @param {Object[]} pets - An array of pets. See the `pets-data.js` file for an example of this array.
 * @param {number} maxAge - The maximum acceptable age.
 * @returns {Object[]} An array of pets with an `age` less than or equal to `maxAge`.
 *
 * EXAMPLE:
 *  filterByMaxAge(pets, 3);
 *  > [
 *   {
        petName: "Tuba",
        petId: 102,
        species: "spotted gecko",
        caretakerName: "Ari",
        age: 2,
        favoriteFood: "mealworms",
        caretakerAge: "26",
        weightInPounds: 0.1
    },
    {
        petName: "Percy",
        petId: 103,
        species: "cat",
        caretakerName: "Nicole",
        age: 1,
        favoriteFood: "fish",
        caretakerAge: "29",
        weightInPounds: 12
    },
      {
        petName: "Gia",
        petId: 105,
        species: "dog",
        caretakerName: "Steven",
        age: 3,
        favoriteFood: "salami",
        caretakerAge: "34",
        weightInPounds: 25
    }
 * ]
 *
 * EXAMPLE:
 *  filterByMaxAge(pets, 0)
 *  > []
 */
function filterByMaxAge(pets, maxAge) {
    maxAgeArr = []
    for (let i=0; i<pets.length; i++){
        if(pets[i].age <= maxAge){
            maxAgeArr.push(pets[i])
            // delete pets[i].friendsWith
            // delete pets[i].dueForCheckup
        }
    }
    return maxAgeArr
}
console.log(filterByMaxAge(pets, 0))
/**
 * findFriendsOf()
 * -----------------------------
 * Returns all pets' `petNames` that include the inputted `friend` in their `friendsWith` array. If the inputted `pets` array is empty or no pets match the inputted `friend`, return `[]`.
 * @param {Object[]} pets - An array of pets. See the `pets-data.js` file for an example of this array.
 * @param {string} friend - A name to check for in the pets' `friendsWith` arrays.
 * @returns {String[]} An array of pets' `petNames` where the pet's `friendsWith` array includes the inputted `friend`.
 *
 * EXAMPLE:
 *  findFriendsOf(pets, "Remy");
 *  > ["Percy", "Monkey", "Gumby"]
 *
 * EXAMPLE:
 *  findFriendsOf(pets, "Kevin")
 *  > []
 */
function findFriendsOf(pets,friend) {
    friendsArr = []
    for (let i=0; i<pets.length;i++){
        if(pets[i].friendsWith.includes(friend)){
       friendsArr.push(pets[i].petName)
        }
    }
    return friendsArr
}
console.log(findFriendsOf(pets, "Remy"))
/**
 * maxNumberOfFriends()
 * -----------------------------
 * Returns all pets' `petNames` whose`friendsWith` array length is less than or equal to given number. If the inputted `pets` array is empty or all pets have more friends than given `maxFriends` number, return `[]`.
 * @param {Object[]} pets - An array of pets. See the `pets-data.js` file for an example of this array.
 * @param {string} maxFriends - A maximum acceptable number of friends.
 * @returns {String[]} An array of pets' `petNames` where the pet's `friendsWith` array is shorter than the given `maxFriends` number.
 *
 * EXAMPLE:
 *  maxNumberOfFriends(pets, 3);
 *  > ["Deloba", "Tuba", "Percy", "Monkey", "Gia"]
 *
 * EXAMPLE:
 *  maxNumberOfFriends(pets, 0)
 *  > []
 */
function maxNumberOfFriends(pets,maxFriends) {
    let maxFriendsArr = []
    for (let i=0; i<pets.length; i++){
        if(pets[i].friendsWith.length <= maxFriends){
            maxFriendsArr.push(pets[i].petName)
        }
    }
    return maxFriendsArr
}
console.log(maxNumberOfFriends(pets,3))
