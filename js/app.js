"use strict"

// ****** SELECT ITEMS **********
const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const grocery = document.getElementById('grocery');
const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');

// edit option
let editElement;
let editFlag = false;
let editID = "";

// ****** EVENT LISTENERS **********

// submit form
form.addEventListener('submit', addItem);
// clear list

// display items onload


// ****** FUNCTIONS **********

// add item
function addItem(e) {
    e.preventDefault();
    const value = grocery.value;
    const id = new Date().getTime().toString();

    if (value !== '' && editFlag === false) {
        console.log("add item to the list");
    } else if (value !== '' && editFlag === true) {
        console.log("editing value");
    } else {
        console.log("empty value");
    }
}
// display alert
function displayAlert(text, action) {
    alert.textContent = 'empty value';
    alert.classList.add("alert-danger");

}

// clear items


// delete item


// edit item


// ****** local storage **********

// add to local storage



// ****** setup items **********