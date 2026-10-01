let array = [
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

let sparseArray = new Array(100);

for (let i = 0; i < sparseArray.length; i++) {

    if (i % 7 !== 0 && i % 11 !== 0) {
        sparseArray[i] = array[i];
    }
}

function showResult(name, result) {

    let output = document.getElementById("output");

    output.innerHTML += `
        <div class="result">
            <h3>${name}</h3>

            <p>
                <b>Порівнянь:</b>
                ${result.comparisons}
            </p>

            <p>
                <b>Обмінів/переміщень:</b>
                ${result.movements}
            </p>

            <p>
                <b>Undefined:</b>
                ${result.undefinedCount}
            </p>

            <p>
                <b>Результат:</b><br>
                ${result.array.join(", ")}
            </p>
        </div>
    `;
}

function runProgram() {

    let output = document.getElementById("output");

    output.innerHTML = "";

    output.innerHTML += `
        <h2>Нерозріджений масив</h2>
    `;

    showResult(
        "Сортування обміном",
        SortingLibrary.bubbleSort(array, true)
    );

    showResult(
        "Сортування мінімальних елементів",
        SortingLibrary.selectionSort(array, true)
    );

    showResult(
        "Сортування вставками",
        SortingLibrary.insertionSort(array, true)
    );

    showResult(
        "Сортування Шелла",
        SortingLibrary.shellSort(array, true)
    );

    showResult(
        "Швидке сортування Хоара",
        SortingLibrary.quickSort(array, true)
    );

    output.innerHTML += `
        <h2>Розріджений масив</h2>
    `;

    showResult(
        "Сортування обміном",
        SortingLibrary.bubbleSort(sparseArray, true)
    );

    showResult(
        "Сортування мінімальних елементів",
        SortingLibrary.selectionSort(sparseArray, true)
    );

    showResult(
        "Сортування вставками",
        SortingLibrary.insertionSort(sparseArray, true)
    );

    showResult(
        "Сортування Шелла",
        SortingLibrary.shellSort(sparseArray, true)
    );

    showResult(
        "Швидке сортування Хоара",
        SortingLibrary.quickSort(sparseArray, true)
    );
}

runProgram();