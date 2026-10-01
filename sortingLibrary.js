var SortingLibrary = {

    prepareArray: function(array) {

        var result = [];
        var undefinedCount = 0;

        for (var i = 0; i < array.length; i++) {

            if (array[i] === undefined) {
                undefinedCount++;
            } else {
                result[result.length] = array[i];
            }
        }

        return {
            array: result,
            undefinedCount: undefinedCount
        };
    },


    compare: function(a, b, ascending) {

        if (ascending === true) {
            return a > b;
        } else {
            return a < b;
        }
    },


    finishArray: function(array, originalLength) {

        while (array.length < originalLength) {
            array[array.length] = undefined;
        }

        return array;
    },


    bubbleSort: function(array, ascending) {

        var prepared = this.prepareArray(array);
        var arr = prepared.array;

        var comparisons = 0;
        var movements = 0;

        for (var i = 0; i < arr.length - 1; i++) {

            for (var j = 0; j < arr.length - i - 1; j++) {

                comparisons++;

                if (this.compare(arr[j], arr[j + 1], ascending)) {

                    var temp = arr[j];

                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;

                    movements++;
                }
            }
        }

        arr = this.finishArray(arr, array.length);

        return {
            array: arr,
            comparisons: comparisons,
            movements: movements,
            undefinedCount: prepared.undefinedCount
        };
    },


    selectionSort: function(array, ascending) {

        var prepared = this.prepareArray(array);
        var arr = prepared.array;

        var comparisons = 0;
        var movements = 0;

        for (var i = 0; i < arr.length - 1; i++) {

            var selectedIndex = i;

            for (var j = i + 1; j < arr.length; j++) {

                comparisons++;

                if (this.compare(
                    arr[selectedIndex],
                    arr[j],
                    ascending
                )) {
                    selectedIndex = j;
                }
            }

            if (selectedIndex !== i) {

                var temp = arr[i];

                arr[i] = arr[selectedIndex];
                arr[selectedIndex] = temp;

                movements++;
            }
        }

        arr = this.finishArray(arr, array.length);

        return {
            array: arr,
            comparisons: comparisons,
            movements: movements,
            undefinedCount: prepared.undefinedCount
        };
    },


    insertionSort: function(array, ascending) {

        var prepared = this.prepareArray(array);
        var arr = prepared.array;

        var comparisons = 0;
        var movements = 0;

        for (var i = 1; i < arr.length; i++) {

            var value = arr[i];
            var j = i - 1;

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

        return {
            array: arr,
            comparisons: comparisons,
            movements: movements,
            undefinedCount: prepared.undefinedCount
        };
    },


    shellSort: function(array, ascending) {

        var prepared = this.prepareArray(array);
        var arr = prepared.array;

        var comparisons = 0;
        var movements = 0;

        var gap = Math.floor(arr.length / 2);

        while (gap > 0) {

            for (var i = gap; i < arr.length; i++) {

                var value = arr[i];
                var j = i;

                while (j >= gap) {

                    comparisons++;

                    if (this.compare(
                        arr[j - gap],
                        value,
                        ascending
                    )) {

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

        return {
            array: arr,
            comparisons: comparisons,
            movements: movements,
            undefinedCount: prepared.undefinedCount
        };
    },


    quickSort: function(array, ascending) {

        var prepared = this.prepareArray(array);
        var arr = prepared.array;

        var comparisons = 0;
        var movements = 0;


        function compareValues(a, b) {

            comparisons++;

            if (ascending === true) {
                return a < b;
            } else {
                return a > b;
            }
        }


        function swap(i, j) {

            var temp = arr[i];

            arr[i] = arr[j];
            arr[j] = temp;

            movements++;
        }


        function quick(left, right) {

            if (left >= right) {
                return;
            }

            var pivot = arr[
                Math.floor((left + right) / 2)
            ];

            var i = left;
            var j = right;


            while (i <= j) {

                while (i <= right && compareValues(arr[i], pivot)) {
                    i++;
                }

                while (j >= left && compareValues(arr[j], pivot)) {
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

        return {
            array: arr,
            comparisons: comparisons,
            movements: movements,
            undefinedCount: prepared.undefinedCount
        };
    }
};
