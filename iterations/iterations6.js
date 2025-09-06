// map

const coding = ["js", "ruby", "java", "python"]


const values = coding.forEach( (item) => {
    console.log(item);
    return item
})

console.log(values);



// filter 

const myNums = [1, 2, 3, 4, 5, 6, 7]

const newNums = myNums.filter( (num) => num > 3)
console.log(newNums);


// const newNums = myNums.filter( (num) => {
// return num > 3
// })
// IF WE OPEN SCOPE THEN WE HAVE TO WRITE RETURN KEYWORD UNLESS IT WILL PRINT EMPTY ARRAY




// print the books who's genre is history

const books = [ 
    {title: 'book one', genre: 'fiction', publish: 1981, edition: 2004 },
    {title: 'book two', genre: 'non-fiction', publish: 1992, edition: 2008 },
    {title: 'book three', genre: 'history', publish: 1999, edition: 2006},
    {title: 'book four', genre: 'non-fiction', publish: 1991, edition: 2010 },
    {title: 'book five', genre: 'science', publish: 1990, edition: 20014 },
    {title: 'book six', genre: 'fiction', publish: 1989, edition: 2006 },
    {title: 'book one', genre: 'history', publish: 1999, edition: 2003 },
    {title: 'book one', genre: 'science', publish: 1986, edition: 2009 },
];

let userBooks = books.filter ( (bk) => bk.genre === 'history')
console.log(userBooks);


// print the data of books which are published after 2005

userBooks = books.filter ( (bk) => bk.edition >= 2005)
console.log(userBooks);


