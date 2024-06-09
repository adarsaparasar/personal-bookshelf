# Personal Bookshelf

This is a React application that allows users to search for books using the Open Library API and maintain a personal bookshelf in the browser using localStorage.

## Features

- **Book Search Page**: Users can search for books by typing the book's name. Search results are displayed in real-time as the user types.
- **Personal Bookshelf Page**: Users can add books from the search results to a "My Bookshelf" page. The bookshelf is stored persistently using localStorage.

## Tech Stack

- **React**: JavaScript library for building user interfaces.
- **Axios**: Promise-based HTTP client for making API requests.
- **React Router**: Library for routing in React applications.
- **CSS**: Styling the components.

## Getting Started

### Prerequisites

- Node.js and npm (Node Package Manager) should be installed.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/personal-bookshelf.git

2. Navigate to the project directory::

   ```bash
   cd personal-bookshelf

3. Install the dependencies:

     ```bash
     npm install

## Running the Application

1. Start the development server:

    ```bash
      npm start

2. Open your browser and go to http://localhost:3000 to view the application.

## Project Structure

* src
   * components
         * BookCard.js: Component to display individual book details.
         *  SearchBooks.js: Component to handle book search and display results.
  
* pages
       * SearchPage.js: Page for searching books.
       * BookshelfPage.js: Page for displaying the personal bookshelf.
  
* App.js: Main application component.
* index.js: Entry point for the React application.
* App.css: CSS file for styling the components.
  
* Usage
  
 * Search for Books: Type the name of the book in the search bar. The results will be displayed in real-time.
 *  Add to Bookshelf: Click the "Add to Bookshelf" button on a book card to add it to your personal bookshelf.
 *  View Bookshelf: Click the "Go to My Bookshelf" button at the top of the search page to view your personal bookshelf.

## Deployment

To deploy the application on a hosting platform like Netlify, follow these steps:

* Build the Application
  
```bash
      npm run build

* Deploy the contents of the `build` folder to your chosen hosting platform.
