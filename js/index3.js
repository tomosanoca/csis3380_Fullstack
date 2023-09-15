const links = Array.from( document.querySelectorAll( 'nav.main a' ));
//sayHi = () => alert("Hi!");  //arrow function has to be before using it  

//links[0].addEventListener('click',sayHi);

//function sayHi(){ alert('Hi!')}  //if using normal function, need to be before the invoking the function

links.map(item => item.addEventListener("click",createAward));

function createAward(e){     //use e or event
    e.preventDefault();
    //console.log(e.target);
    clientName = e.target      //e.properties, one example is target 
    clientName = e.clientX  //ex) where users click in 
    console.log(clientName)

    console.log(this)

    //e.target.innerHTML = createCertificate(clientName);
} 

function createCertificate(myClient){
    `<h1> Congrats ${myClient} for passing this course </h1>`
}

document.addEventListener( 'mousemove', logMousePosition);  
function logMousePosition(e) {
console.log( e.clientX + ' x ' + e.clientY );
}

 