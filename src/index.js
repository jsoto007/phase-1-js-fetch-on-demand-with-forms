// https://github.com/jsoto007/phase-1-js-fetch-on-demand-with-forms

const init = () => {
    const inputForm = document.querySelector('form');
    inputForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const input = document.querySelector('input#searchByID');
        fetch(`http://localhost:3000/movies/${input.value}`)
            .then(response => response.json())
            .then(data => {
                const title = document.querySelector('section#movieDetails h4');
                const summary = document.querySelector('section#movieDetails p')

                title.innerText = data.title;
                summary.innerText = data.summary;
            })
        inputForm.reset();

    })


}

document.addEventListener('DOMContentLoaded', init);


/*
-- Practice Using forms to trigger fetch request
-- Add content to the DOM based on user input
-- Override default form habavior using javaScript
- To start a json server:       json-server --watch db.json
- Event listeners require two arguments: the type of event, a string, and the listener, a callback function.
Even event is triggered, the call back function we've provided will execute and an object representing the event will be passed in as a argument. we can expext this to happen and can write a parameter in our code to store the event object in a variable:
- Access Input Value fron an Event Object
To get the value from our event object, we first want to access event.target
event.target return the DOM element targeted by our event, a <form> in our case. 
event.target
// =>   <form>..</form>

*/

/* 
Event.target has a property, children, that returns an HTMLCollection containing all the nested elements of the event.target element.

event.target.children
// => HTMLCollection(3) [label, input#searchByID, input, seatchByID: (....and so on)]
to get the value we do 
event.target.children[1].value;

= We dont need to use the event to get the value we need. We can also use choose to access the input element directly

inputForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const input = document.querySelector('input#searchByID');
    console.log(input.value);
})
*/

/*
-- Display Fetched Data on the Page

*/