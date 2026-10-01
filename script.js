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


/*
    Перетворення масиву у текст
*/
function arrayToString(array) {

    var text = "";

    for (var i = 0; i < array.length; i++) {

        if (array[i] === undefined) {text = text + "undefined";
        } else {text = text + array[i];
        }

        if (i < array.length - 1) {text = text + ", ";
        }
    }

    return text;
}


/*
    Виведення результату
    на HTML-сторінку та у консоль
*/
function showResult(name, result, arrayType, direction) {

    console.log(" ");
    console.log("Тип масиву:", arrayType);
    console.log("Напрямок:", direction);
    console.log("Алгоритм:", name);
    console.log("Порівнянь:", result.comparisons);
    console.log("Обмінів/переміщень:", result.movements);
    console.log("Undefined:", result.undefinedCount);
    console.log("Результат:", result.array);
    console.log(" ");


    var output = document.getElementById("output");

    var block = document.createElement("div");

    block.className = "result";

    var title = document.createElement("h3");

    title.innerHTML = name;

    block.appendChild(title);

    var typeText = document.createElement("p");

    typeText.innerHTML =
        "<b>Тип масиву:</b> " +
        arrayType +
        "<br>" +

        "<b>Напрямок:</b> " +
        direction;

    block.appendChild(typeText);

    var information = document.createElement("p");

    information.innerHTML =
        "<b>Кількість порівнянь:</b> " +
        result.comparisons +
        "<br>" +

        "<b>Кількість обмінів/переміщень:</b> " +
        result.movements +
        "<br>" +

        "<b>Кількість undefined:</b> " +
        result.undefinedCount;

    block.appendChild(information);

    var resultTitle = document.createElement("p");

    resultTitle.innerHTML =
        "<b>Результат сортування:</b>";

    block.appendChild(resultTitle);

    var resultText = document.createElement("p");

    resultText.className = "array";

    resultText.innerHTML =arrayToString(result.array);

    block.appendChild(resultText);

    output.appendChild(block);
}

/*
    Інформація про масив
*/
function showArrayInfo(name, array) {

    var output = document.getElementById("output");

    var title = document.createElement("h2");

    title.innerHTML = name;

    output.appendChild(title);


    var undefinedCount = 0;

    for (var i = 0; i < array.length; i++) {

        if (array[i] === undefined) {undefinedCount++;
        }
    }


    var information = document.createElement("p");

    information.innerHTML =
        "<b>Довжина масиву:</b> " +
        array.length +
        "<br>" +

        "<b>Кількість undefined:</b> " + undefinedCount;

    output.appendChild(information);
}

/*
    Тестування всіх алгоритмів за зростанням
*/
function runAscending() {

    var output = document.getElementById("output");

    output.innerHTML = "";

    console.clear();

    console.log(" ");
    console.log("ТЕСТОВИЙ ЗАПУСК");
    console.log("Сортування за зростанням");
    console.log(" ");

    /*
        Нерозріджений масив
    */

    showArrayInfo("Нерозріджений масив",normalArray);

    showResult("Сортування обміном",SortingLibrary.bubbleSort(normalArray,true),
        "Нерозріджений",
        "За зростанням"
    );


    showResult("Сортування мінімальних елементів",SortingLibrary.selectionSort(normalArray,true),
        "Нерозріджений",
        "За зростанням"
    );

    showResult("Сортування вставками",SortingLibrary.insertionSort(normalArray,true),
        "Нерозріджений",
        "За зростанням"
    );

    showResult("Сортування Шелла",SortingLibrary.shellSort(normalArray,true),
        "Нерозріджений",
        "За зростанням"
    );

    showResult("Швидке сортування Хоара",SortingLibrary.quickSort(normalArray,true),
        "Нерозріджений",
        "За зростанням"
    );

    /*
        Розріджений масив
    */

    showArrayInfo("Розріджений масив",sparseArray);

    showResult("Сортування обміном",SortingLibrary.bubbleSort(sparseArray,true),
        "Розріджений",
        "За зростанням"
    );

    showResult("Сортування мінімальних елементів",SortingLibrary.selectionSort(sparseArray,true),
        "Розріджений",
        "За зростанням"
    );

    showResult("Сортування вставками",SortingLibrary.insertionSort(sparseArray,true),
        "Розріджений",
        "За зростанням"
    );

    showResult("Сортування Шелла",SortingLibrary.shellSort(sparseArray,true),
        "Розріджений",
        "За зростанням"
    );

    showResult("Швидке сортування Хоара",SortingLibrary.quickSort(sparseArray,true),
        "Розріджений",
        "За зростанням"
    );
}

/*
    Тестування всіх алгоритмів
    за спаданням
*/
function runDescending() {

    var output = document.getElementById("output");

    output.innerHTML = "";

    console.clear();

    console.log(" ");
    console.log("ТЕСТОВИЙ ЗАПУСК");
    console.log("Сортування за спаданням");
    console.log(" ");

    /*
        Нерозріджений масив
    */

    showArrayInfo(
        "Нерозріджений масив",normalArray);

    showResult("Сортування обміном",SortingLibrary.bubbleSort(normalArray,false),
        "Нерозріджений",
        "За спаданням"
    );

    showResult("Сортування мінімальних елементів",SortingLibrary.selectionSort(normalArray,false),
        "Нерозріджений",
        "За спаданням"
    );

    showResult("Сортування вставками",SortingLibrary.insertionSort(normalArray,false),
        "Нерозріджений",
        "За спаданням"
    );

    showResult("Сортування Шелла",SortingLibrary.shellSort(normalArray,false),
        "Нерозріджений",
        "За спаданням"
    );

    showResult("Швидке сортування Хоара",SortingLibrary.quickSort(normalArray,false),
        "Нерозріджений",
        "За спаданням"
    );

    /*
        Розріджений масив
    */

    showArrayInfo("Розріджений масив",sparseArray);


    showResult("Сортування обміном",SortingLibrary.bubbleSort(sparseArray,false),
        "Розріджений",
        "За спаданням"
    );

    showResult("Сортування мінімальних елементів",SortingLibrary.selectionSort(sparseArray,false),
        "Розріджений",
        "За спаданням"
    );

    showResult("Сортування вставками",SortingLibrary.insertionSort(sparseArray,false),
        "Розріджений",
        "За спаданням"
    );

    showResult("Сортування Шелла",SortingLibrary.shellSort(sparseArray,false),
        "Розріджений",
        "За спаданням"
    );

    showResult("Швидке сортування Хоара",SortingLibrary.quickSort(sparseArray,false),
        "Розріджений",
        "За спаданням"
    );
}
