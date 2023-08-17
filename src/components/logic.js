import { time, customStyle } from './DateStyle';

let greeting;
 export const showGreetings =() => {
  let hour = time.getHours();
  if(hour < 12){
    greeting = 'Good Morning!'
    customStyle.color = 'red'
  } else if(hour < 18 ){
   greeting = 'Good  Afternoon'
   customStyle.color = 'green'
  } else {
    greeting = 'Good Night'
    customStyle.color = 'blue'
  }

  return greeting;
}