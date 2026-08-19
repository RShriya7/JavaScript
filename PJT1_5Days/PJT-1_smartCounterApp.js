//SCENARIO -1: WITHOUT USING ANY 'THIS' 

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

console.log("Scenario -1 Output");
const result1 = CounterApp();
console.log(result1.increment());
console.log(result1.get());
const result2=CounterApp();
console.log(result2.decrement());
console.log(result2.get());
console.log(result2.incrementBy(2));


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
console.log("Scenario -2 Output");
console.log(result.increment());

//SCENARION-3: USE THIS WITH AArrow functions

function createCounterApp()
{
    return{
        counter:0,

        increment : ()=>
        {
            return ++this.counter;
        }
    }
}
console.log("Scenario -3 Output");
const counter= createCounterApp();
console.log(counter.increment());


//SCENARIO -4: SOLUTION TO SCENARIO 3:- Asynchromous + this

function createCounterApp() {
    return {
        counter: 0,

        increment: function () {
            setTimeout(() => {
                console.log(++this.counter);
            }, 1000);
        }
    };
}

console.log("Scenario -4 Output");
const counter1 = createCounterApp();

counter1.increment();
