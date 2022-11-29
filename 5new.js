
function count(text) {
    let matchingInstances = text.match(/[aeiou]/gi);
  
    if (matchingInstances) {
      console.log(matchingInstances.length)
      return matchingInstances.length;
    } 
    
    else {
      return 0;
    }
}

count("SUIIIIIII") //Input