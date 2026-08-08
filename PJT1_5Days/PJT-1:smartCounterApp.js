/*WITHOUT USING ANY 'THIS' 

function CounterApp()
{
    let counter=0;

    return{
        increment: ()=> ++counter,
        decrement: ()=> --counter,
        reset: ()=>counter=0,
        get:()=>counter,
        incrementBy:(value) => counter+value

    }
}

const result1 = CounterApp();
console.log(result1.increment());
console.log(result1.get());
const result2=CounterApp();
console.log(result2.decrement());
console.log(result2.get());
console.log(result2.incrementBy(2));*/


//SCENARIO-2: INTRODUCE THIS , BUT USE NORMAL FUNCTIONS
function createApp()
{
    return{
        counter:0,
       increment:  function()
        {
            console.log(this);// to show what is the value of this.
            return ++this.counter;
        },

        decrement: function(){
            return --this.counter;
        }

    }
}

const result = createApp();
console.log(result.increment());

