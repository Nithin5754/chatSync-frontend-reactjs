
/**
 * 
 * @param char ["it should be number or string"]
 * @description it accept string or number by char keyword and find the appropriate color 
 * @returns string object eg:{color:"red"}
 */


export function changeColor(char: number | string) {

  
  let color='';
  if (typeof char === "number") {
    color = getColorForNumber(char);
  } else if (typeof char === "string" && /[A-Za-z]/.test(char)) {
    color = getColorForLetter(char);
  } else {
    color = "black";
  }

  return color
}

function getColorForNumber(num: number) {
  const colors = [
    "red",
    "green",
    "blue",
    "orange",
    "purple",
    "pink",
    "brown",
    "cyan",
    "magenta",
    "yellow",
  ];
  return colors[num];
}

function getColorForLetter(letter: string) {
  const colors: { [key: string]: string } = {
    a: "red",
    b: "orange",
    c: "yellow",
    d: "green",
    e: "blue",
    f: "indigo",
    g: "violet",
    h: "yellow",
    i: "brown",
    j: "cyan",
    k: "pink",  
    l: "lime",
    m: "yellow", 
    n: "red",
    o: "orange", 
    p: "teal",
    q: "red",   
    r: "purple", 
    s: "blue",    
    t: "red",     
    u: "yellow",  
    v: "purple", 
    w: "pink",    
    x: "indigo",  
    y: "green",   
    z: "purple",  
  };

  return colors[letter.toLowerCase()] || "gray"; // Default color if letter not found
}

  

