function takeANumber(array, name) {
  array.push(`${name}`);
  return(`Welcome, ${name}. You are number ${array.length} in line.`);
  //You need to use ` not ' when using the ${} 
}

function nowServing(array) {
  if (array.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else {
    return (`Currently serving ${array.shift()}.`);
  }
  //You need to use ` not ' when using the ${} 
}

function currentLine(array) {
  var people = [];
  let i = 0;
  
  while (i < array.length) {
    people.push(` ` + [i+1] + `. `  + array[i])
    i++;
  }
  
  if (array.length === 0) {
    return "The line is currently empty.";
  } 
  else {
    return(`The line is currently:` + people);  
  }
  //You need to use ` not ' when using the ${} 
}