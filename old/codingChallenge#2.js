const numArray = [5, 10, 15, 20];

function double(num){
    return num * 2;
}

function square(num){
    return num * num;
}


function processNumbers(arr, callback){
    for (let i = 0; i < arr.length; i++){
        console.log(callback(arr[i]))

    }    
}

processNumbers(numArray, double);
processNumbers(numArray, square);


// Using map

function MapProcessNumbers(arr, callback){
    const result =arr.map(n => callback(n))
    console.log(result) 
}

MapProcessNumbers(numArray, double)
MapProcessNumbers(numArray, square)