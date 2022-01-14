let input = prompt(
  "WHAT WOULD YOU LIKE TO DO?\n\nnew - add to-do item\nlist - list all to-do items\ndelete - remove to-do item\nquit - quit app"
);

const todos = [
  "Yoga",
  "Workout",
  "Meditate",
  "Practice coding",
  "Clean the litter box",
];
while (input !== "quit" && input !== "q") {
  if (input === "list") {
    console.log("- - - - - To-Do List - - - - -");
    for (let i = 0; i < todos.length; i++) {
      console.log(`${i + 1}: ${todos[i]}`);
    }
    console.log("- - - - - - - - - - - - - - -");
  } else if (input === "new") {
    const newTodo = prompt("What is the new To-Do Item?");
    todos.push(newTodo);
    console.log(`${newTodo} was added to the list!`);
  } else if (input === "delete") {
    const index = parseInt(prompt("Enter an Item to delete:"));
    if (!Number.isNaN(index)) {
      const deleted = todos.splice(index - 1, 1);
      console.log(`Successfully deleted ${deleted[0]}`);
    } else {
      console.log("Unknown Item number");
    }
  }
  input = prompt(
    "WHAT WOULD YOU LIKE TO DO?\n\nnew - add to-do item\nlist - list all to-do items\ndelete - remove to-do item\nquit - quit app"
  );
}
console.log("You have quit the app successfully");
alert("You have quit the app successfully");
