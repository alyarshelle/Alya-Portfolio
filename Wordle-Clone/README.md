# Wordle Clone

Welcome to the **Wordle Clone**! This project replicates the popular word-guessing game, Wordle, with some custom features and a clean interface. Test your vocabulary and enjoy the challenge of guessing a 5-letter word within 6 attempts.

## Features

- **5-Letter Word Guesses:** Input 5-letter guesses to match the target word.
- **Hard Mode:** Enforce rules where revealed letters must be included in subsequent guesses.
- **User Interface:** Simple and intuitive design with pop-ups for rules, results, and errors.
- **Dark Mode:** Toggle between light and dark themes.
- **Error Handling:** Clear messages for invalid guesses and actions.

## Getting Started

To run the Wordle Clone locally, follow these steps:

1. **Clone the Repository:**

    ```bash
    git clone https://github.com/yourusername/wordle-clone.git
    cd wordle-clone
    ```

2. **Open in Browser:**

    Open `wordlePage.html` in your web browser to start playing the game.

3. **Customize Word Bank:**

    Edit the `wordBank` array in the script to include your own list of 5-letter words.

## How to Play

1. **Enter Your Guess:**

    Type a 5-letter word and press ENTER to submit your guess.

2. **Check Feedback:**

    - **Green:** Correct letter and position.
    - **Yellow:** Correct letter but wrong position.
    - **Gray:** Letter is not in the word.

3. **Hard Mode:**

    If enabled, ensure that guessed words include letters from previous guesses as required.

4. **Restart the Game:**

    Click the "Restart" button to start a new game at any time.

## Development

- **JavaScript:** Main logic for handling game mechanics, hard mode rules, and user interactions.
- **CSS:** Styling for the game interface and themes.
- **HTML:** Structure of the game including the grid and pop-ups.

## Contributing

Feel free to fork the repository and submit pull requests. If you have suggestions or encounter any issues, please open an issue on GitHub.
