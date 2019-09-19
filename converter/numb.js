const numbers = [-1, 2, -4, 0, -5, 7, 12, 13, 33, 0, -45];

function oddEven(numbers) {
    let newArr = [];

    for (let i = 0; i < numbers.length; i++) {
        if(numbers[i] < 0 && ( -numbers[i] % 2 === 0) || (-numbers[i] % 2 === 1)){

            if (numbers[i] < 0 && (-numbers[i] % 2 ===1)){
            newArr.push('negative tek',numbers[i]);
            }

    }
    if (numbers[i] < 0 && (numbers[i] % 2 === 0)) {
    newArr.push('negative çift',numbers[i]);        
    }

    if(numbers[i] > 0 && (numbers[i] % 2 === 1)) {
        newArr.push('positive tek',numbers[i]);
    }

    if(numbers[i] > 0 && (numbers[i] % 2 === 0)) {
        newArr.push('positive çift',numbers[i]);

    }
 
    if(numbers[i] === 0 ) {
        newArr.push('sıfır',numbers[i]);
        
    }
    
}

console.log(newArr);

}
oddEven(numbers);

            