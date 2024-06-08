// // Promise Chaining
// new Promise((resolve, reject) => {
//     console.log('initial');
//     resolve();
// })
//     .then(
//         () => {
//             console.log('resolved');
//         },
//         () => {
//             console.log('rejected');
//         }
//     )

// Promise Chaining
// new Promise((resolve, reject) => {
//     console.log('initial');
//     reject();
// })
//     .then(() => {
//         console.log('resolved 1');
//     })
//     .catch(() => {
//         console.log('rejected');
//     })
//     .then(() => {
//         console.log('do this no matter what happens before 2');
//         throw new Error();
//     })
//     .then(() => {
//         console.log('execute this as well 3');
//     })
//     .catch(() => {
//         console.log('skipped the above then block');
//     })
//     .then(() => {
//         console.log('do this no matter what happens before 4');
//     })
//     .catch(() => {
//         console.log('this will not be executed ');
//     });
// 
// Promise.resolve(4)
// .then((x) => x + 1)
// .then((x) => {
//     console.log(x);
// throw new Error('My Error');
// })
// .catch(() => console.log('Caught'))
// .then(() => console.log('Done'));

let p = new Promise((resolve, reject) => {
    reject('Failed');resolve('Success');
    
})
.then(result => console.log(result))
.catch(error => console.log(error));