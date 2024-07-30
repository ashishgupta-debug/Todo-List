# A brief overview of the system design
The Todo List application is designed using React for the frontend, with the following core features:

1. Create Task: Allows users to add new tasks.
2. Update Task: Allows users to edit existing tasks.
3. Mark as Done: Allows users to mark tasks as completed.
4. Delete Task: Allows users to remove tasks.
5. Search Tasks: Implements search functionality to filter tasks based on a 
   search query.
6. Expandable List: Displays tasks in an expandable list format, showing a 
   description and a timestamp of the last update when expanded.
7. Reset Search: Provides a button to reset the search input and clear the 
   filter.

# Implementation Explanation
## Component Structure
### App.js
   1. Manages the overall state of the application.
   2. Handles the creation, updating, toggling completion, deletion, and 
       filtering of tasks.
   3.   Passes necessary props to TaskList, TaskForm, and SearchBar
   
### TaskList.js
   1. Receives the list of tasks and necessary handlers as props.
   2. Maps through the tasks and renders individual Task components.

### Task.js
   1.  Represents an individual task.
   2.  Contains logic for editing, toggling completion, deleting, and 
       expanding/collapsing the task details.
        
### TaskForm.js
   1. Provides a form for creating new tasks.
   2. Calls the onCreateTask handler passed down from App.js.

### SearchBar.js
   1. Contains the search input and reset button.
   2. Updates the URL parameters and filters tasks based on the search 
       query.

## Data Handling
1. Uses a dummy JSON file (tasks.json) as the initial data source.
2. Manages tasks in the state of the App component.
3. Filters tasks based on the search query present in the URL parameters.

# Instructions to Set Up and Run the Application
## Prerequisites
1. Node.js and npm (Node Package Manager) installed on your machine.

## Steps to Set Up and Run
1. Clone the Repository
```sh
    git clone <repository_url>
    cd <repository_directory>
```
2. Install Dependencies
```sh
    npm install
```
3. Run the Application
```sh
    npm start
```
This will start the development server and open the application in your default web browser at http://localhost:3000.
