// Declare the notes in message1 variable
const message1: string = "Note: this is a message, Note: this is the second message, Note: this is the last message";

// Split the message1 into an array of notes
const splitNotes: string[] = message1.split(', ');

// Keep only the last note
const lastNote: string = splitNotes[splitNotes.length - 1];

// Print the last note
console.log(lastNote);
