// Define a class for the Nokia button phone
class NokiaButtonPhone {
    // Properties to store contacts, messages and game status
    contacts: string[];
    messages: {
        contact: string,
        message: string
    }[];
    snakeGame: SnakeGame;
    isPowerOn: boolean;

    // Constructor to initialize properties
    constructor() {
        this.contacts = [];
        this.messages = [];
        this.snakeGame = new SnakeGame();
        this.isPowerOn = false;
    }

    // Method to power ON/OFF status of the phone
    powerButton = () => {
        this.isPowerOn = !this.isPowerOn;
        console.log(this.isPowerOn ? "Phone is now ON." : "Phone is now OFF.");
    }

    // Method to make a call to a contact numbeer
    makeCall = (contact: string) => {
        if (this.isPowerOn) {
            console.log(`Calling ${contact}`);
        } else {
            console.log("Phone is OFF. GHUMAY.");
        }
    }

    // Method to send a message to a contact number
    sendMessage = (contact: string, message: string) => {
        if (this.isPowerOn) {
            this.messages.push({ contact, message });
            console.log(`Message sent to ${contact}.`);
        } else {
            console.log("Phone is OFF. Shomvob na!");
        }
    }

    // Method to start playing the Shaper Khela
    shaperKhela = () => {
        if (this.isPowerOn) {
            this.snakeGame.startGame();
        } else {
            console.log("Phone is OFF. Cannot play games.");
        }
    }

    // Getter method to check the high score of the Snake game
    getHighScore = () => {
        return this.snakeGame.highScore;
    }

    // Method to throw the phone out of frustration
    throwPhone = () => {
        console.log("Phone thrown! It might break!");
        this.isPowerOn = false;
    }
}

// Define a class for the Snake game
class SnakeGame {
    // Properties to store game state
    highScore: number;
    currentScore: number;
    isGameOver: boolean;

    // Constructor to initialize properties
    constructor() {
        this.highScore = 0;
        this.currentScore = 0;
        this.isGameOver = false;
    }

    // Method to start the game
    startGame = () => {
        this.currentScore = 0;
        this.isGameOver = false;
        console.log("Yeee! Starting the Snake game...");
        // Implement game logic here 
    }

    // Method to end the game
    endGame = () => {
        this.isGameOver = true;
        console.log("Game Over! Your score:", this.currentScore);
    }

    // Method to handle snake eating food
    eatFood = () => {
        // Implement logic for when snake eats food (e.g., increase score, generate new food)
    }
}

// Example usage:
const myNokiaPhone = new NokiaButtonPhone();
myNokiaPhone.powerButton();  // Turn the phone ON
myNokiaPhone.shaperKhela();  // Start playing the Snake game
myNokiaPhone.throwPhone();  //getting frustrated and throw the phone
//calling another class
const kothinShaperKhela = new SnakeGame();
kothinShaperKhela.endGame();
console.log("High Score:", myNokiaPhone.getHighScore());

