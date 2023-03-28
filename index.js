const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  let finalResult = [];
        let currTitle;
        let removedSpaces = tutorials.map(function(element){
            return element.split(" ");
        })

        for(let i = 0; i < removedSpaces.length; i++){
            for(let k = 0; k < removedSpaces[i].length; k++){
                removedSpaces[i][k] = removedSpaces[i][k][0].toUpperCase() + removedSpaces[i][k].slice(1,removedSpaces[i][k].length);
            }
        }

        for(let j = 0; j < removedSpaces.length; j++){
            currTitle = removedSpaces[j];
            finalResult.push(currTitle.join(" "));
        }

        return finalResult;
}

console.log(titleCased())
