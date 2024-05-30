import inquirer from "inquirer";
let { num1, num2, operation } = await inquirer.prompt([
    {
        name: "num1",
        type: "number",
        message: "Enter your frist number:"
    },
    {
        name: "num2",
        type: "number",
        message: "Enter second number:"
    },
    {
        name: "operation",
        type: "list",
        choices: ["addition", "subtraction", "multiplication", "division"],
        message: "enter your choices operation"
    },
]);
if (operation === "addition") {
    console.log(`yuor result = ${num1 + num2}`);
}
else if (operation === "subtraction") {
    console.log(`your result= ${num1 - num2}`);
}
else if (operation === "multipication") {
    console.log(`your result = ${num1 * num2}`);
}
else if (operation === "division") {
    console.log(`your result = ${num1 % num2}`);
}
