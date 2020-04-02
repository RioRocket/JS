//usage of Array.from()
//Array.from(arrayLike [, mapFn [, thisArg]])
//creates a new shallow copied Array instance from an iterable object

const alpha = Array.from("abc");
// >[ 'a', 'b', 'c' ]

const beta = Array.from({length:3, 0:"a", 1:"b", 2:"c"})
// >[ 'a', 'b', 'c' ]

const delta = Array.from(["a", "b", "c"].entries());
// >[ [ 0, 'a' ], [ 1, 'b' ], [ 2, 'c' ] ]

const gamma = Array.from(Array(26).keys());
//converts the array-like iterator object into an array  
//array of numbers from 0-25

const epsilon = Array.from([1, 2, 3], x => x + x); 
// >[2, 4, 6]

const zeta = [...Array(26)].map((a,c) => String.fromCharCode(c+65));
//array of letters from A-Z

const eta = Array.from(Array(26).keys(), (a,c) => String.fromCharCode(c+65));
//array of letters from A-Z

const chunk = (arr, size) => Array.from({
    length: Math.ceil(arr.length/size)
}, (a,c) => arr.slice(c*size, c * size + size));

let chunks = chunk([1,2,3,4,6,7,8,9,10], 3);
//

function* fib(n) {
    let[x,y] = [0,1];
    for (let i=0; i<n; i++) {
        yield x; 
        [x,y] = [y, x+y];
    }
    return x;
}

const fib8 = Array.from(fib(8));
// >[0, 1, 1, 2, 3, 5, 8, 13]

