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
  let tuto = tutorials.map(function toTitleCase(string = '') {
    const regex = /^[a-z]{0,1}|\s\w/gi;
  
  
    string.match(regex).forEach((char) => {
      string = string.replace(char, char.toUpperCase());
    });
  
    return string;
  }
  
  )
  
 
  
 

return tuto;
  
}
