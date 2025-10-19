let myArray = [1, 2, 3, 4, 5];
const newArray = []



function filterEven(arr) {

    doubleEven = [];

    function double(num){
        return num * 2;
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            newArray.push(arr[i]);
            doubleEven.push(double(arr[i]));
            console.log(newArray);
            console.log(doubleEven);
        }
    }
}

filterEven(myArray)
