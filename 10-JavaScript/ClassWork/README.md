# 1. Movie Playlist Manager Exercise

## Exercise Questions

### 1. HTML Structure
- Create an HTML file with a basic structure.
- Include input fields for entering a movie name and priority.
- Add a button to add movies to the playlist.
- Use an unordered list to display the movies.

### 2. CSS Styling
- Style the unordered list to remove bullet points.
- Add margin to list items.
- Create classes for different priority levels:
  - `.priority-high` should have red text color.
  - `.priority-medium` should have yellow text color.
  - `.priority-low` should have green text color.
- Create a class for watched movies with a strikethrough and gray color.

### 3. JavaScript Functionality
- Initialize two arrays: one for movies and one for priorities.
- Create a function to add a movie:
  - Validate that the movie name is not empty.
  - Validate that the priority is a number between 1 and 3.
  - Add the movie and its priority to their respective arrays.
  - Create a list item (`<li>`) for the movie.
  - Add the appropriate class based on the priority.
  - Add buttons to mark the movie as watched, edit the movie, and remove the movie.
- Create a function to mark a movie as watched:
  - Toggle the watched class on the list item.
- Create a function to edit a movie:
  - Prompt the user to enter a new movie name and priority.
  - Validate the new inputs.
  - Update the movie and priority arrays.
  - Update the list item's text and class.
- Create a function to remove a movie:
  - Remove the list item from the DOM.
  - Remove the movie and its priority from the arrays.
- Ensure that the input fields are cleared after adding a movie.
- Display an alert if the movie name is empty or the priority is not between 1 and 3.


## Instructions
- Create a new project directory.
- Create separate files for HTML, CSS, and JavaScript.
- Follow the questions to implement the Movie Playlist Manager.
- Test each feature thoroughly.


# 2. Expense Tracker Application

## Objective
Create an Expense Tracker application where users can add, edit, complete, and remove expenses. Each expense should have a description, an amount, and a category (1-Food, 2-Transport, 3-Entertainment). The application should use type conversion and arrays to manage the expenses and their categories.

## Requirements

### HTML Structure
- An input field for the expense description.
- An input field for the expense amount.
- An input field for the expense category.
- A button to add the expense.
- A list to display the expenses.

### JavaScript Functionality
- Add an expense with description, amount, and category.
- Display expenses with different colors based on category (Food - green, Transport - blue, Entertainment - purple).
- Mark an expense as "completed" by striking through the text and changing the color to gray.
- Edit the description of an expense.
- Remove an expense from the list.
- Use arrays to keep track of expenses and their categories.
- Use type conversion to ensure the amount and category are handled correctly.

