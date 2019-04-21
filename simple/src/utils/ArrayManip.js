export function getMostOccuring(array){
    /*

        Takes in an array of strings. and counts occurences of each string in the array,
        returns an array of unique strings sorted in order of occurence 

    */

    let counts = {};

    for (let item of array){
        if (!counts[item]){
            counts[item] = 0;
        }

        counts[item]+= 1;
    }

    let most = Object.keys(counts);

    return most.sort((a, b) => counts[a] > counts[b] ? -1 : 1)
}