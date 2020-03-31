// var hasil = 10
// if (true) {
//     var hasil = 5
// } console.log(hasil);


// let hasil1 = 10
// if (true) {
//     let hasil1 = 5;
// }console.log(hasil1);


// var foo = 5
// var foo = 10 
// console.log(foo);

// let foo = 5
// let foo = 10
// console.log(foo1);


console.log('Start Program Checking Value')

    const valueInput = window.prompt('What is the value i am this subject?');
    const value = Number(valueInput);

    if(value <= 100 && value >= 90) {
        window.alert('sangat baik');
    }

    else if(value <= 89 && value >= 75) {
        window.alert('baik');
    }

    else if(value <= 74 && value > 60) {
        window.alert('cukup');
    }

    else if(value <= 60 && value >= 55) {
        window.alert('kurang');
    }

    else if(value < 55){
        window.alert('Remedial');
    }

    else {
        window.alert('Max Nilai hanya 100')
    }

    console.log('Stop Program Checking Value');

