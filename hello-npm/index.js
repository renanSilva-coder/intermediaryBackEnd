import inquirer from "inquirer";

inquirer.prompt([
    {
        type: 'input',
        name: 'nome',
        message: 'Qual seu nome?'
    },
    {
        type: 'list',
        name: 'idade',
        message: 'Qual sua idade?',
        choices: [
            '29 a 39',
            '40 a 50',
            '50+'
        ]
    }
]).then((resp) => {
    console.log(
        "Oi " + resp.nome + " com " + resp.idade + " anos!"
    );
})