// Your task is to make two functions (max and min, or maximum and minimum, etc., depending on the language) that receive a list of integers as input and return, respectively, the largest and lowest number in that list.

var min = function(list){
    let minSorted = list.sort((a,b) => a-b)
    return list[0];
}

var max = function(list){
    let minSorted = list.sort((a,b) => a-b)

    return list[minSorted.length-1];
}