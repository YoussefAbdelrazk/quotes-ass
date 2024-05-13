//Use an array to hold the value of the quotes
const arrayOfQuotes = [
    {'author': 'Jim Rohn', 
     'quote': 'Beware of what you become in pursuit of what you want.'
    },
    {'author': 'Epictetus', 
     'quote': 'It\'s not what happens to you, but how you react to it that matters.'
    },
    {'author': 'Frank Sinatra', 
     'quote': 'The best revenge is massive success.'
    },
    {'author': 'Wayne Gretzy', 
     'quote': 'You miss 100% of the shots you don\'t take.'
    },
    {'author': 'Nelson Mandela', 
     'quote': 'Resentment is like drinking poison and waiting for your enemies to die.'
    },
    {'author': 'Elbert Hubbard', 
     'quote': 'Do not take life too seriously. You will not get out alive.'
    },
];

function generateQuote(){
    const random = Number.parseInt(Math.random()*arrayOfQuotes.length + 1);
    document.querySelector('#quoteOutput').textContent = `"${arrayOfQuotes[random].quote}"`;
    document.querySelector('#authorOutput').textContent = `${arrayOfQuotes[random].author}`;
    
}




////////// another way to solve this problem //////////////////////////////////



// let index = 0 ;
// let quoteOutput = document.getElementById('quoteOutput');
// let authorOutput = document.getElementById('authorOutput');

// let btn = document.getElementById('btn');

// btn.addEventListener('click', () =>{
//   quoteOutput.innerHTML = arrayOfQuotes[index].quote;
//   authorOutput.innerHTML = arrayOfQuotes[index].author;
// index++;
// if(index == quoteOutput.length){
//   index = 0;
// }
// })





