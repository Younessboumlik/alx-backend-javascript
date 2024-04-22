export default function returnHowManyArguments(...args) {
  let i = 0;
  for(let arg of args){
      i+=1;
  }
  return i;
}
