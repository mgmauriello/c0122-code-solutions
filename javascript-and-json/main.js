var bookList = [
  {
    isbn: '9780044403371',
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien'
  },
  {
    isbn: '9780345325815',
    title: 'The Silmarillion',
    author: 'J.R.R. Tolkien'
  },
  {
    isbn: '9780007136568',
    title: 'The Lord of the Rings: The Two Towers',
    author: 'J.R.R. Tolkien'
  }
];
console.log('List of books:', bookList, 'typeof list of books:', typeof bookList);

var jsonBookList = JSON.stringify(bookList);
console.log('JSON string:', jsonBookList, 'JSON typeof:', typeof jsonBookList);

var jsonString = `{
  "student": {
  "Student ID": "123945666",
  "String Name": "Legolas"
  }
}`;
console.log('JSON string:', jsonString, 'typeof JSON:', typeof jsonString);

var jsonObj = JSON.parse(jsonString);
console.log('JSON parse:', jsonObj, 'typeof JSON.parse:', jsonObj);
