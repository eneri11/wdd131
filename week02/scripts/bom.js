const input = document.querySelector('favchap');
const button = document.querySelector('button');
const list = document.querySelector('_________'); //Fill in the blank to reference the unordered list element.

button.addEventListener("click", function () {

  const chapter = input.value.trim();

  if (chapter !== "") {

    // Create list item
    const li = document.createElement('li');

    // Create text
    const chapterText = document.createElement("span");
    chapterText.textContent = chapter;

    // Create delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = "✖";
    deleteButton.classList.add("delete-btn");

    // Delete item when clicked
    deleteButton.addEventListener("click", function () {
      list.removeChild(li);
    });

    // Add elements to li
    li.appendChild(chapterText);
    li.appendChild(deleteButton);

    // Add li to ul
    list.appendChild(li);

    // Clear input
    input.value = "";

    // Return focus to input
    input.focus();
  }

});