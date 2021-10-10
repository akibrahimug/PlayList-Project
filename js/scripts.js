// 1: Set the text of the <h1> element
const h1 = document.querySelector('h1');
h1.textContent = 'My Playlist'

// 2: Set the color of the <h1> to a different color
h1.style.color = 'red'

// 3: Set the content of the '.desc' paragraph
// The content should include at least one HTML tag
const paragraph = document.querySelector('.desc');
paragraph.insertAdjacentHTML('afterbegin', `<p>This is the <strong>Paragraph</strong> of this Website</p>`)

// 4: Set the class of the <ul> to 'list'
const ul = document.querySelector('ul');
ul.className = 'list'

// 5: Create a new list item and add it to the <ul>
const listItem = document.createElement('li');
listItem.textContent = 'This is the list that will delete'
ul.appendChild(listItem)

// 6: Change all <input> elements from text fields to checkboxes
const input = document.querySelectorAll('input');
for(let i = 0; i < input.length; i++){
  input[i].type = 'checkbox';
}

// 7: Create a <button> element, and set its text to 'Delete'
// Add the <button> inside the '.extra' <div>
const button = document.createElement('button');
button.textContent = 'Delete';

const extra = document.querySelector('.extra');
extra.appendChild(button)

// 8: Remove the '.extra' <div> element from the DOM when a user clicks the 'Delete' button

button.addEventListener('click', () => {
  extra.remove();

})