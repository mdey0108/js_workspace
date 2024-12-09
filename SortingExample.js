// Helper function to print arrays
function printArray(arr) {
    console.log(arr.join(" "));
}

// Bubble Sort algorithm
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let swapped = false;
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap arr[j] and arr[j + 1]
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }
        if (!swapped) break;
    }
}

// Merge Sort algorithm
function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

function merge(left, right) {
    let result = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            result.push(left[i++]);
        } else {
            result.push(right[j++]);
        }
    }

    return result.concat(left.slice(i)).concat(right.slice(j));
}

// Quick Sort algorithm
function quickSort(arr) {
    if (arr.length <= 1) return arr;

    let pivot = arr[arr.length - 1];
    let left = arr.filter((el, idx) => el <= pivot && idx !== arr.length - 1);
    let right = arr.filter(el => el > pivot);

    return [...quickSort(left), pivot, ...quickSort(right)];
}

// Insertion Sort algorithm
function insertionSort(arr) {
    let n = arr.length;
    for (let i = 1; i < n; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
}

// Main Program
const originalArray = [5, 2, 8, 4, 1, 9, 7];

console.log("Original Array:");
printArray(originalArray);

// Bubble Sort
let bubbleSortedArray = [...originalArray];
console.time("Bubble Sort Time");
bubbleSort(bubbleSortedArray);
console.timeEnd("Bubble Sort Time");
console.log("Array Sorted Using Bubble Sort:");
printArray(bubbleSortedArray);

// Merge Sort
let mergeSortedArray = [...originalArray];
console.time("Merge Sort Time");
mergeSortedArray = mergeSort(mergeSortedArray);
console.timeEnd("Merge Sort Time");
console.log("Array Sorted Using Merge Sort:");
printArray(mergeSortedArray);

// Quick Sort
let quickSortedArray = [...originalArray];
console.time("Quick Sort Time");
quickSortedArray = quickSort(quickSortedArray);
console.timeEnd("Quick Sort Time");
console.log("Array Sorted Using Quick Sort:");
printArray(quickSortedArray);

// Insertion Sort
let insertionSortedArray = [...originalArray];
console.time("Insertion Sort Time");
insertionSort(insertionSortedArray);
console.timeEnd("Insertion Sort Time");
console.log("Array Sorted Using Insertion Sort:");
printArray(insertionSortedArray);
