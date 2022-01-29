// TODO: Create 4-String variables to introduce develop your story.
let greetings = "The destruction of the world looms, and the only person who can save it is you!";
let name = "Dandorff";
let cause = "Machines have taken over";
let cure = "JavaScript";

// TODO: Create 3-String variables to set the time period of your story or discuss other number elements.
let numberOfYears = 3021;
let numberOfPeople = 1000;
let numberOfMachines = 1000000;

// TODO: Create 1-Array variable to show a collection of items your character might have.
let knownLanguages = ['Python', 'Java', 'C#'];

// TODO: Create 1-Boolean variable to demonstrate a true or false scenario.
let hasJavaScriptKnowledge = true;

// TODO: Print your story to the console.
console.log("Dan: " + greetings + " What is your name?");
console.log("Me:  My name is " + name + ". How can I help?");
console.log("Dan: " + cause + ", and mankind is down to " + numberOfPeople + " people.");
console.log("     For " + numberOfYears + " years, machines have waged war on humanity.");
console.log("     There are " + numberOfMachines + " machines, and they are all programmed in " + cure);
console.log("     I have heard that you know how to program in " + cure + ".");
console.log("     Is this true?");
if (hasJavaScriptKnowledge) {
    console.log("Me:  Yes, I know it, along with " + knownLanguages[2] + ".");
    console.log("Dan: Excellent! Let's save the world together!");
} else {
    console.log("Me:  No, that is a dead language. I only know " + knownLanguages[0]);
    console.log("Dan: Then we are doomed!");
}