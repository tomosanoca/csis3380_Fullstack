//console.log(document.getElementById('content'))

// Gets the div with id of "content"
const content = document.querySelector(`#content`);
// Gets <h1>Header 1</h1>
const header = document.querySelector(`h1`);
// Gets <strong>fill</strong>
const bold = document.querySelector(`p strong`);
// Gets the div with the class of "featured"
const featured = document.querySelector(`.featured`);
// Gets all the <p> tags and what is inside them
const paragraphs = document.querySelectorAll(`p`);
// Gets all the <div> tags and what is inside them
const divs = document.querySelectorAll(`div`);

console.log('content id:' + content.outerHTML );
console.log('bold:' + bold.innerHTML);


//document.querySelectorAll('p');
//document.querySelector('p');

const headers = Array.from( document.querySelectorAll(`p`) )
headers.map (header => console.log(header));   //using arrow function to execute one line 

const myArray = ["Tom","Bob","Cand"];
myArray.map(header => console.log(header));

const hh2 = ducument.querySelector('h2');
hh2.className = 'regular-title';

