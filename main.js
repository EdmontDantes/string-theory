function crazyCase(str) {
  let answer = '';
  for (let i = 0; i < str.length; i++){
      if (i % 2 === 0) {
      answer = answer + str[i].toLowerCase();
    }   else if (i % 2 === 1) {
        answer = answer + str[i].toUpperCase();
    }
  }
  return answer;
}

crazyCase('Hello')

function ciEmailify(str) {
  let answer = '';
  for (let i = 0 ; i < str.length; i++){
    if (str[i] === ' ') { 
      answer = answer + '.';
    } else {
      answer = answer + str[i]; 
    }
  }
return answer.toLowerCase() + '@codeimmersives.com';
}





function exclaim(str) {
  let answer = '';
  for (let i = 0 ; i < str.length; i++){
    if (str[i] === '?' || str[i] === '.') { 
      answer = answer + '!';
    } else {
      answer = answer + str[i]; 
    }
  }
return answer;
}



// function exclaim('I am the best');

function reverse(str){
  let reversed = "";    
  for (let i = str.length - 1; i >= 0; i--){        
    reversed += str[i];
  }    
  return reversed;
}

function crazyCase2ReturnOfCrazyCase(str) {
  let answer  = '';
for (i = 0; i < str.length; i++) {
  if (i % 2 === 0 && str[i] !== ' ') {

  answer = answer + str[i].toLowerCase();

  } else if (i % 2 === 1 && str[i] === ' ') {
    answer = answer + str[i].toUpperCase();

  } else if (i % 2 === 0) {

  answer = answer + str[i].toLowerCase();

  } else if (i % 2 === 1) {
    
    answer = answer + str[i].toUpperCase();
  }
}

  return answer;
}

function titleCase(str) {  
  let answer = '';

// for (let i=0; i<str.length; i++){
//   if(i = 0) {
//     str.toUpperCase();
//   } else if ()
//     output += ch.toLowerCase()
//   }else{
//     output += ch.toUpperCase()
//   }
// }
return output
}


function onlyVowels(str) {
  let answer = ''
  for (i = 0; i < str.length; i++) {
    if (('aeoiuAEOIU'.includes(str.charAt(i))) === true) {
      answer = answer + str[i];
    }
  } 
  return answer;
}

function crazyCase3SonOfCrazyCase() {
}


module.exports = {
  crazyCase,
  exclaim,
  ciEmailify,
  reverse,
  crazyCase2ReturnOfCrazyCase,
  titleCase,
  onlyVowels,
  crazyCase3SonOfCrazyCase
}