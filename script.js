var normalArray = [
    73, 12, 45, 9, 88, 34, 67, 21, 56, 3,
    91, 17, 42, 64, 28, 75, 6, 39, 83, 14,
    52, 31, 97, 25, 61, 8, 44, 70, 19, 86,
    35, 11, 58, 93, 26, 49, 2, 78, 63, 16,
    37, 81, 5, 68, 23, 95, 32, 54, 7, 89,
    41, 18, 76, 29, 60, 4, 84, 47, 20, 99,
    13, 53, 71, 36, 10, 62, 24, 80, 43, 15,
    57, 69, 27, 92, 38, 66, 1, 50, 79, 30,
    85, 22, 48, 94, 33, 59, 74, 40, 87, 55,
    65, 90, 46, 100, 51, 72, 82, 98, 96, 77
];


var sparseArray = new Array(100);


for (var i = 0; i < sparseArray.length; i++) {

    if (i % 7 !== 0 && i % 11 !== 0) {
        sparseArray[i] = normalArray[i];
    }
}


function arrayToString(array) {

    var text = "";

    for (var i = 0; i < array.length; i++) {

        if (array[i] === undefined) {
            text = text + "undefined";
        } else {
            text = text + array[i];
        }

        if (i < array.length - 1) {
            text = text + ", ";
        }
    }

    return text;
}


function showResult(name, result) {

    var output = document.getElementById("output");

    var block = document.createElement("div");

    block.className = "result";


    var title = document.createElement("h3");

    title.innerHTML = name;

    block.appendChild(title);


    var information = document.createElement("p");

    information.innerHTML =
        "Кількість порівнянь: " +
        result.comparisons +
        "<br>" +

        "Кількість обмінів/переміщень: " +
        result.movements +
        "<br>" +

        "Кількість undefined: " +
        result.undefinedCount;

    block.appendChild(information);


    var resultTitle = document.createElement("p");

    resultTitle.innerHTML =
        "<b>Результат сортування:</b>";

    block.appendChild(resultTitle);


    var resultText = document.createElement("p");

    resultText.innerHTML =
        arrayToString(result.array);

    block.appendChild(resultText);


    output.appendChild(block);
}


function showArrayInfo(name, array) {

    var output = document.getElementById("output");

    var title = document.createElement("h2");

    title.innerHTML = name;

    output.appendChild(title);


    var information = document.createElement("p");

    var undefinedCount = 0;

    for (var i = 0; i < array.length; i++) {

        if (array[i] === undefined) {
            undefinedCount++;
        }
    }

    information.innerHTML =
        "Довжина масиву: " +
        array.length +
        "<br>" +

        "Кількість undefined: " +
        undefinedCount;

    output.appendChild(information);
}


function runAscending() {

    var output = document.getElementById("output");

    output.innerHTML = "";


    showArrayInfo(
        "Нерозріджений масив",
        normalArray
    );


    showResult(
        "Сортування обміном",
        SortingLibrary.bubbleSort(
            normalArray,
            true
        )
    );


    showResult(
        "Сортування мінімальних елементів",
        SortingLibrary.selectionSort(
            normalArray,
            true
        )
    );


    showResult(
        "Сортування вставками",
        SortingLibrary.insertionSort(
            normalArray,
            true
        )
    );


    showResult(
        "Сортування Шелла",
        SortingLibrary.shellSort(
            normalArray,
            true
        )
    );


    showResult(
        "Швидке сортування Хоара",
        SortingLibrary.quickSort(
            normalArray,
            true
        )
    );


    showArrayInfo(
        "Розріджений масив",
        sparseArray
    );


    showResult(
        "Сортування обміном",
        SortingLibrary.bubbleSort(
            sparseArray,
            true
        )
    );


    showResult(
        "Сортування мінімальних елементів",
        SortingLibrary.selectionSort(
            sparseArray,
            true
        )
    );


    showResult(
        "Сортування вставками",
        SortingLibrary.insertionSort(
            sparseArray,
            true
        )
    );


    showResult(
        "Сортування Шелла",
        SortingLibrary.shellSort(
            sparseArray,
            true
        )
    );


    showResult(
        "Швидке сортування Хоара",
        SortingLibrary.quickSort(
            sparseArray,
            true
        )
    );
}


function runDescending() {

    var output = document.getElementById("output");

    output.innerHTML = "";


    showArrayInfo(
        "Нерозріджений масив",
        normalArray
    );


    showResult(
        "Сортування обміном",
        SortingLibrary.bubbleSort(
            normalArray,
            false
        )
    );


    showResult(
        "Сортування мінімальних елементів",
        SortingLibrary.selectionSort(
            normalArray,
            false
        )
    );


    showResult(
        "Сортування вставками",
        SortingLibrary.insertionSort(
            normalArray,
            false
        )
    );


    showResult(
        "Сортування Шелла",
        SortingLibrary.shellSort(
            normalArray,
            false
        )
    );


    showResult(
        "Швидке сортування Хоара",
        SortingLibrary.quickSort(
            normalArray,
            false
        )
    );


    showArrayInfo(
        "Розріджений масив",
        sparseArray
    );


    showResult(
        "Сортування обміном",
        SortingLibrary.bubbleSort(
            sparseArray,
            false
        )
    );


    showResult(
        "Сортування мінімальних елементів",
        SortingLibrary.selectionSort(
            sparseArray,
            false
        )
    );


    showResult(
        "Сортування вставками",
        SortingLibrary.insertionSort(
            sparseArray,
            false
        )
    );


    showResult(
        "Сортування Шелла",
        SortingLibrary.shellSort(
            sparseArray,
            false
        )
    );


    showResult(
        "Швидке сортування Хоара",
        SortingLibrary.quickSort(
            sparseArray,
            false
        )
    );
}
