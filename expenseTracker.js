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

const result= createExpenseTracker();
result.addExpense("maggie", "food", 10);
result.addExpense("fab", "detergent", 10);
result.addExpense("shoes", "footwear", 10);
result.addExpense("pencil", "stationary", 10);
result.addExpense("kurti", "fashion", 10);

result.showExpenses();
result.totalExpenses();

result. deleteExpense();
result.showExpenses();
result.totalExpenses();