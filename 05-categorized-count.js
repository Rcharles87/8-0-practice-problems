const petsData = require("./pets-data.js");

/**
 * speciesCount()
 * -----------------------------
 * Returns the an object with the number of each species in the given `pets` array. If the inputted `pets` array is empty, return {}.
 * @param {Object[]} pets - An array of pets.
 * @returns {Object} An object with keys representing each species in the `pets` array, and values that represent a count for each species.
 *
 * EXAMPLE:
 *  speciesCount(pets);
 *  > {
 * dog: 2,
 * 'spotted gecko': 1,
 * cat: 3
 * }
 */
function speciesCount(pets) {
    let speciesObj = {}
    for (pet of pets){
        if(!speciesObj[pet.species]){
            speciesObj[pet.species]=1
        }
        else {
            speciesObj[pet.species]+= 1
        }
    }
    return speciesObj
}
// console.log(speciesCount(petsData))
/**
 * dueForCheckupCount()
 * -----------------------------
 * Returns the an object with a count on which pets in the `pets` array are `dueForCheckup` and which ones are not. If the inputted `pets` array is empty, return {}.
 * @param {Object[]} pets - An array of pets.
 * @returns {Object} An object with keys `true` and `false` representing which pets are due for a checkup (true) and which pets are not due for a checkup (false).
 *  The values represent a count for each.
 *
 * EXAMPLE:
 *  dueForCheckupCount(pets);
 *  > {
 * true: 4,
 * false:2
 * }
 */
function dueForCheckupCount(pets) {
    let trueObj={}
    // let trueCount = 0 
    // let falseCount = 0
    // for (let i=0; i<pets.length; i++){
    //     if (pets[i].dueForCheckup === true){
    //         trueCount++
    //         trueObj[true]=trueCount
            
    //     }
    //      if (pets[i].dueForCheckup === false){
    //         falseCount++
    //         trueObj[false]=falseCount
            
    //     }
        
    // }
        for (let pet of pets){
            if (!trueObj[pet.dueForCheckup]){
                trueObj[pet.dueForCheckup]= 1
            }
            else {
                trueObj[pet.dueForCheckup]+=1
            }
        }
    return trueObj
} 
// console.log(trueObj)
console.log(dueForCheckupCount(petsData))
/**
 * friendsWithCount()
 * -----------------------------
 * Returns an object with keys representing a length of each pet's `friendsWith` array and values representing how many pets have that exact number of friends.
 *  If the inputted `pets` array is empty, return null.
 * @param {Object[]} pets - An array of pets.
 * @returns {Object} An object with keys representing each different `friendsWith` length in the `pets` array, and values that represent a count of pets with each length.
 *
 * EXAMPLE:
 *  friendsWithCount(pets);
 *  > {
 * 3: 4,
 * 2: 1,
 * 8: 1
 * }
 */
function friendsWithCount(pets) {
    countObj = {}
    for(let pet of pets){
        if(!countObj[pet.friendsWith.length]){
        countObj[pet.friendsWith.length] = 1
        }
        else {
            countObj[pet.friendsWith.length]+=1
        } 
    }

    return countObj
}
console.log(friendsWithCount(petsData))