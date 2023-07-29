//Create a function to hold arrays and differentiate those arrays to be able to use them 
//more easily.

const randomWords = {
    countries: ['Spain', 'Portugal', 'Ireland', 'Malta', 'Italy', 'Poland'],
    year: [2024, 2025, 2026, 2027, 2028],
    activity: ['eat icecream,', 'travel around all famous places', 'learn local phrases']
};

//create a function to generate a random number to iterate through array to make the output
//build as randomly as possible.

function generateRandomNumber(num) {
    return Math.floor(Math.random() * num)
};
//create an array to hold the output of the random words picked up from 3 arrays.

let travelPlan = [];

//create a loop to iterate through arrays and use a switch function to add personalised static
//output with each array (countries, year, activity.)
for(let word in randomWords) {
    let index = generateRandomNumber(randomWords[word].length)

switch (word) {
    case 'countries':
        travelPlan.push(`You should travel to ${randomWords[word][index]}`)
        break
    case 'year':
        travelPlan.push(`You should visit there in ${randomWords[word][index]}`)
        break
    case 'activity':
        travelPlan.push(`And most importantly while there you should ${randomWords[word][index]}`)
        break
    default:
        travelPlan.push('Something went wrong')
    }

}

//create function to format the message output generated randomly in a travelPlan array.
//(/n) indicates new line. 
function newAdventure(adventure) {
    const formatted = travelPlan.join('\n')
    console.log(formatted)
}
//call function newAdventure which formates the data inside the array of travelPlan that 
//holds random iterated data from 3 arrays (countries, year, activity.)
newAdventure(travelPlan);