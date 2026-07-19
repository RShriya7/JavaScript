//modifications: 1. add a menu 2. caluclate sum depending on item category

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function createExpenseTracker()
{
    let expense=[];
    let id =0;

    return{
        addExpense : (expName, expCat, expAmt) => 
        {
            const newExpense = {
                id : ++id,
                expName,
                expCat, 
                expAmt
            };
            expense.push(newExpense);


        },

        deleteExpense : () =>
        {
            expense.pop();
        },
        
        showExpenses : ()=>
        {
            for(let i=0; i < expense.length ; i++)
            {
                console.log("Id :",expense[i]. id);
                console.log("Item :",expense[i]. expName);
                console.log("Item Category :",expense[i]. expCat);
                console.log("Amount :",expense[i]. expAmt);
                console.log("==============================================");
            }
        },

        totalExpenses : ()=>
        {
            let totalExp =0;
            for( let i=0; i<expense.length; i++)
            {
                totalExp += expense[i].expAmt;
            }

            console.log("Total Expense:",totalExp);
        }

    }
        
}

function main()
{
    const result = createExpenseTracker();
    
    function showMenu()
    {
       
        console.log("MENU");
        console.log("1. Add Expense");
        console.log("2. Delete Expense ");
        console.log("3. Show all expenses");
        console.log("4. Caculate total amount");
        console.log("5. EXIT");

        rl.question("Enter ypur choice", function(choice){
            switch(choice)
            {
                case "1":
                    rl.question("Enter item name:", function(name){
                        rl.question("Enter the item category:", function(category){
                            rl.question("Enter the amount:",function(amount){
                                result.addExpense(name, category, Number(amount));
                                showMenu();
                            });
                        });
                    });
                    break;

                case "2":
                    result.deleteExpense();
                    showMenu();
                    break;

                case "3":
                    result.showExpenses();
                    showMenu();
                    break;

                case "4":
                    result.totalExpenses();
                    showMenu();
                    break;

                case "5":
                    console.log('Exiting Expense Tracker.....');
                    rl.close();
                    
                    break;

                default:
                    console.log("Invalid choice");
                    showMenu();
                    
            }
        });
       
    }

    showMenu();
    
    
    
   

    
}

main();


