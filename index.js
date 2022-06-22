// 1 - Nombre pairs
// let total = 0
// for(let i = 11; i < 47; i++){
//     if(i % 2 === 0){
//         console.log(i)
//         total += i
//     }
// }
// console.log(total)

// 2 - Nombre impairs
// let total = 0
// for(let i = 109; i < 588; i++){
//     if(i % 2 === 1){
//         console.log(i)
//         total += i
//     }
// }
// console.log(total)

// 3 - Puissance et racine carrée
// const numbers = [1, 2, 3, 4, 5]
// const squares = []
// const roots = []

// for(let i = 0; i < numbers.length; i++){
//     squares[i] = numbers[i] ** 2
// }
// console.log(squares)

// for(let j = 0; j < numbers.length; j++){
//     roots[j] = Math.sqrt(squares[j])
// }
// console.log(roots)

// 4 - Table de multiplication
// let res = 0
// for(let i = 0; i <= 10; i++){
//     res = 3 * i
//     console.log(`3 x ${i} = ${res}`)
// }

// 5 - Plusieurs tables de multiplication
// let res = 0
// for(let i = 0; i <= 10; i++){
//     for(let j = 0; j <= 10; j++){
//         res = i * j
//         console.log(`${i} x ${j} = ${res}`)
//     }
//     console.log("")
// }

// 6 - Factorielle v1
// const number = 7
// let fact = 1

// for(let i = number; i >= 1; i--){
//     fact = i * fact
//     console.log(fact)
// }

// 7 - Factorielle v2
// for(let i = 1; i <= 8; i++){
//     total = 0
//     for(let j = 0; j <= i; j++){
//         total = total * j 
//         if(total === 0){
//             total = 1
//         }
//     }
//     console.log(total)
// }

// 8 - Somme des carrés
// let res = 0
// for(let i = 5; i <= 10; i++){
//     res = res + (i * i)
//     console.log(res)
// }

// 9 - Comptons
// let res = 0

// for(let i = 100; i <= 1000; i++){
//     if(i % 7 === 0){
//         res += 1
//     }
// }
// console.log(res)

// 10 - Chanceux
// let res = 0
// for(let i = 0; i < 20; i++){
//     res = res + (Math.floor(Math.random() * 6) + 1)
//     console.log(res)
// }

// 11 - Des boites
// var box1 = 12;
// var box2 = 5;

// for (var i = 12; i < 14; i++) {
//     box1 = box2;
//     console.log(box1 + box2);
//     box2 = box1 + i;
// }

// console.log(box1);
// console.log(box2);
// console.log(i);

// 12 - D'autres boites
// var box1 = 12;

// for (var i = 12; i !== 0; i = i - 3) {
//     console.log(box1);
//     box1 = box1 + i;
// }

// console.log(box1);
// console.log(i);

// 13 - Encore des boites
// var box1 = 0;
// var box2 = 3;

// for (var i = 0; i > -4; i--) {
//     if (i % 2 === 0) {
//         console.log(box1 + i);
//         box2++;
//     } else {
//         console.log(box2 + i);
//         box1--;
//     }
// }

// console.log(box1);
// console.log(box2);
// console.log(i);

// 14 - Amstrong Number
// for(i = 0; i <= 1000; i++){
//     let amString = i.toString()
//     let array = amString.split("")
//     let total = 0
//     for(let j = 0; j < array.length; j++){
//         let a = array[j]
//         a = Number (a) ** 3
//         total = total + a
//     }
//     if(total === i){
//         console.log(`${i} est un nombre d'Amstrong`)
//     }
// }

// 15 - Amstrong Number générique
for(i = 0; i <= 10000; i++){
    let amString = i.toString()
    let array = amString.split("")
    let total = 0
    for(let j = 0; j < array.length; j++){
        if(array.length === 3){
            let a = array[j]
            a = Number (a) ** 3
            total = total + a
        }else{
            let a = array[j]
            a = Number (a) ** 4
            total = total + a
        }
    }
    if(total === i){
        console.log(`${i} est un nombre d'Amstrong`)
    }
}



