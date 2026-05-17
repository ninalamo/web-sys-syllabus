import{j as e}from"./index-Dh6XhhbZ.js";function a(){return e.jsxs("div",{className:"page-content code-page",children:[e.jsxs("div",{className:"code-header",children:[e.jsx("span",{className:"code-filename",children:"calculator-solution.cs"}),e.jsx("span",{className:"code-lang",children:"CSHARP"})]}),e.jsx("pre",{className:"language-csharp",children:e.jsx("code",{className:"language-csharp",children:`// Calculator — Solution
while (true)
{
    Console.Write("Enter first number (or 'exit' to quit): ");
    var input = Console.ReadLine();
    if (input.ToLower() == "exit") break;

    Console.Write("Enter second number: ");
    var input2 = Console.ReadLine();

    Console.Write("Enter operation (+, -, *, /): ");
    var op = Console.ReadLine();

    var num1 = double.Parse(input);
    var num2 = double.Parse(input2);
    var result = op switch
    {
        "+" => num1 + num2,
        "-" => num1 - num2,
        "*" => num1 * num2,
        "/" => num2 != 0 ? num1 / num2 : double.NaN,
        _ => double.NaN
    };

    if (double.IsNaN(result))
        Console.WriteLine("Invalid operation or division by zero.");
    else
        Console.WriteLine($"{num1} {op} {num2} = {result}");
}
`})})]})}export{a as default};
