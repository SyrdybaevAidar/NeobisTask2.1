function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getWeekDay(date) {
    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  
    return days[date.getDay()];
  }

function th_name(date)
{
  let Months = ['January', 'February', 'March', 'April', 'May', 'June', 'Jule', 'August', 'September', 'October', 'November', 'December'];
  return Months[date.getMonth()];
}

function reverseNumbers(num)
{
  let numTxt = num + "";
  let numRevTxt = "";
  for(let i = numTxt.length; i > 0 ; i--)
  {
    numRevTxt += numTxt[i-1];
  }
  return numRevTxt;

}

function Factorial(n)
{
  if(n <= 1)
  {
    return n;
  }
  else{
    return n * Factorial(n - 1);
  }
}

function MergeMassText(arr)
{
  let newArr = [];
  newArr[0] = '\"';
  newArr[1] = '\"';
  for(let i = 0; i < arr.length; i++)
  { 
    newArr[0] += arr[i];
    if(i < arr.length - 1)
      newArr[0] +=  ', '
  }

  for(let i = 0; i < arr.length; i++)
  { 
    newArr[1] += arr[i];
    if(i < arr.length - 1)
      newArr[1] +=  ' + '
  }
  newArr[0] += '\"';
  newArr[1] += '\"';
  return newArr;
}

function smile()
{
  console.log('._            _ .')
  console.log(' .|__________| . ')
  console.log('  . | | | | | .  ')
  console.log('   .+-+-+-+-+.   ')
  console.log('    . | | | .    ')
  console.log('     .+_+_+.     ')
}



document.write('<h1>2.1</h1>');
document.write(`<p>Today is: ${getWeekDay(new Date())}</p>`);
document.write(`<p>Local time: ${new Date().getHours() + ' PM : ' + new Date().getMinutes() + ' : ' + new Date().getSeconds()}</p>`);


let ReverseNumber = getRandomInt(2000000000);
document.write('<h1>2.2</h1>');
document.write(`<p>Number: ${ReverseNumber}</p>`);
document.write(`<p>ReverseNumber: ${reverseNumbers(ReverseNumber)}</p>`);

let FactorialIndex = getRandomInt(20);
document.write('<h1>2.3</h1>');
document.write(`<p>Factorial Index: ${FactorialIndex}</p>`);
document.write(`<p>ReverseNumber: ${Factorial(FactorialIndex)}</p>`);

let TxtMass =  ["Red", "Green", "White", "Black"];
let PrepareTxtMass = MergeMassText(TxtMass);
document.write('<h1>2.4</h1>');
document.write(`ExampleMass: [${TxtMass}]`);
document.write(`<p>First-Version: ${PrepareTxtMass[0]}</p>`);
document.write(`<p>Second-Version: ${PrepareTxtMass[1]}</p>`);

document.write('<h1>2.5</h1>');
document.write(`<p>Month: ${th_name(new Date())}</p>`);

document.write('<h1>2.6</h1>');
document.write(`<p>Call /'smile/' function in browser console</p>`);



