function fruits() {
    if (true) {
        var fruit = 'apple';  //function scope
        let fruit2 = 'banana'; //block scope
        const fruit3 = 'kiwi'; //block scope

        console.log(fruit2);
        console.log(fruit3);
    }
    console.log(fruit);
    /*console.log(fruit2);
    console.log(fruit3);*/
}

fruits();