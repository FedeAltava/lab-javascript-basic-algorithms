// Iteration 1: Names and Input
const hacker1 = 'Antonio';
console.log(`the draiver\'s name is ${hacker1}`);

const hacker2 = 'Laura';
console.log(`the navigator\'s name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name,it has ${hacker1.length} characters`)
       } else if(hacker2.length > hacker1.length){
            console.log(`It seems that the navigator has the longest name,it has ${hacker2.length} characters`)
            }
                else{
        console.log(`Wow, you both have equally long names, ${hacker1.length}characters!`)
             }
// Iteration 3: Loops
for (let i = 0; i< hacker1.length; i++) {
    console.log(hacker1.toUpperCase()[i]);
    
    
  }

  for (let i = hacker2.length; i>=0; i--){
    
    console.log(hacker2[i])
}



  let hackers = [hacker1, hacker2];
  console.log(hackers.sort()); 
   if (hacker1>hacker2){
       console.log('The driver\'s name goes first.')
      } else if (hacker1<hacker2){console.log('Yo, the navigator goes first definitely.')
  }else {'What?! You both have the same name?'}
  

