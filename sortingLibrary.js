let SortingLibrary = {

    prepareArray: function(array) {
        let result = [];
        let undefinedCount = 0;

        for (let i = 0; i < array.length; i++) {
            if (array[i] === undefined) {
                undefinedCount++;
            } else {
                result.push(array[i]);
            }
        }

        return {
            array: result,
            undefinedCount: undefinedCount
        };
    },

    compare: function(a, b, ascending) {
        if (ascending) {
            return a > b;
        }

        return a < b;
    },

    finishArray: function(array, originalLength) {
        while (array.length < originalLength) {
            array[array.length] = undefined;
        }

        return array;
    },

    bubbleSort: function(array, ascending) {
        let prepared = this.prepareArray(array);
        let arr = prepared.array;

        let comparisons = 0;
        let movements = 0;

        for (let i = 0; i < arr.length - 1; i++) {

            for (let j = 0; j < arr.length - i - 1; j++) {

                comparisons++;

                if (this.compare(arr[j], arr[j + 1], ascending)) {

                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;

                    movements++;
                }
            }
        }

        arr = this.finishArray(arr, array.length);

        console.log("Сортування обміном");
        console.log("Порівнянь:", comparisons);
        console.log("Обмінів:", movements);

        if (prepared.undefinedCount > 0) {
            console.log(
                "У масиві було",
                prepared.undefinedCount,
                "undefined-елементів."
            );
        }

        return {
            array: arr,
            comparisons: comparisons,
            movements: movements,
            undefinedCount: prepared.undefinedCount
        };
    },

    selectionSort: function(array, ascending) {
        let prepared = this.prepareArray(array);
        let arr = prepared.array;

        let comparisons = 0;
        let movements = 0;

        for (let i = 0; i < arr.length - 1; i++) {

            let index = i;

            for (let j = i + 1; j < arr.length; j++) {

                comparisons++;

                if (this.compare(arr[index], arr[j], ascending)) {
                    index = j;
                }
            }

            if (index !== i) {

                let temp = arr[i];
                arr[i] = arr[index];
                arr[index] = temp;

                movements++;
            }
        }

        arr = this.finishArray(arr, array.length);

        console.log("Сортування мінімальних елементів");
        console.log("Порівнянь:", comparisons);
        console.log("Обмінів:", movements);

        if (prepared.undefinedCount > 0) {
            console.log(
                "У масиві було",
                prepared.undefinedCount,
                "undefined-елементів."
            );
        }

        return {
            array: arr,
            comparisons: comparisons,
            movements: movements,
            undefinedCount: prepared.undefinedCount
        };
    },

    insertionSort: function(array, ascending) {
        let prepared = this.prepareArray(array);
        let arr = prepared.array;

        let comparisons = 0;
        let movements = 0;

        for (let i = 1; i < arr.length; i++) {

            let value = arr[i];
            let j = i - 1;

            while (j >= 0) {

                comparisons++;

                if (this.compare(arr[j], value, ascending)) {

                    arr[j + 1] = arr[j];
                    movements++;

                    j--;
                } else {
                    break;
                }
            }

            arr[j + 1] = value;
        }

        arr = this.finishArray(arr, array.length);

        console.log("Сортування вставками");
        console.log("Порівнянь:", comparisons);
        console.log("Переміщень:", movements);

        if (prepared.undefinedCount > 0) {
            console.log(
                "У масиві було",
                prepared.undefinedCount,
                "undefined-елементів."
            );
        }

        return {
            array: arr,
            comparisons: comparisons,
            movements: movements,
            undefinedCount: prepared.undefinedCount
        };
    },

    shellSort: function(array, ascending) {
        let prepared = this.prepareArray(array);
        let arr = prepared.array;

        let comparisons = 0;
        let movements = 0;

        let gap = Math.floor(arr.length / 2);

        while (gap > 0) {

            for (let i = gap; i < arr.length; i++) {

                let value = arr[i];
                let j = i;

                while (j >= gap) {

                    comparisons++;

                    if (this.compare(arr[j - gap], value, ascending)) {

                        arr[j] = arr[j - gap];
                        movements++;

                        j = j - gap;
                    } else {
                        break;
                    }
                }

                arr[j] = value;
            }

            gap = Math.floor(gap / 2);
        }

        arr = this.finishArray(arr, array.length);

        console.log("Сортування Шелла");
        console.log("Порівнянь:", comparisons);
        console.log("Переміщень:", movements);

        if (prepared.undefinedCount > 0) {
            console.log(
                "У масиві було",
                prepared.undefinedCount,
                "undefined-елементів."
            );
        }

        return {
            array: arr,
            comparisons: comparisons,
            movements: movements,
            undefinedCount: prepared.undefinedCount
        };
    },

    quickSort: function(array, ascending) {
        let prepared = this.prepareArray(array);
        let arr = prepared.array;

        let comparisons = 0;
        let movements = 0;

        function compare(a, b) {
            comparisons++;

            if (ascending) {
                return a < b;
            }

            return a > b;
        }

        function swap(i, j) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;

            movements++;
        }

        function quick(left, right) {

            if (left >= right) {
                return;
            }

            let pivot = arr[Math.floor((left + right) / 2)];

            let i = left;
            let j = right;

            while (i <= j) {

                while (compare(arr[i], pivot)) {
                    i++;
                }

                while (compare(arr[j], pivot)) {
                    j--;
                }

                if (i <= j) {

                    if (i !== j) {
                        swap(i, j);
                    }

                    i++;
                    j--;
                }
            }

            if (left < j) {
                quick(left, j);
            }

            if (i < right) {
                quick(i, right);
            }
        }

        if (arr.length > 1) {
            quick(0, arr.length - 1);
        }

        arr = this.finishArray(arr, array.length);

        console.log("Швидке сортування Хоара");
        console.log("Порівнянь:", comparisons);
        console.log("Обмінів:", movements);

        if (prepared.undefinedCount > 0) {
            console.log(
                "У масиві було",
                prepared.undefinedCount,
                "undefined-елементів."
            );
        }

        return {
            array: arr,
            comparisons: comparisons,
            movements: movements,
            undefinedCount: prepared.undefinedCount
        };
    }
};