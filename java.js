function findMin(arr) {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

function findMax(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

let nums = [];
for (let i = 0; i < 100; i++) {
    nums[i] = Math.floor(Math.random()*101);
    console.log(nums);
}

let minValue = findMin(nums);
let maxValue = findMax(nums);
document.write("The minimum value is: " + minValue + "<br/>" + "The maximum value is: " + maxValue);