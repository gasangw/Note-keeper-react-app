
function App() {
  let time = new Date(2023, 1,1,10)
  

  const customStyle = {
    color: ''
  }
  
  let greeting;
  const showGreetings =() => {
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
  return (
    <div className="App">
       <h1 style={customStyle}>{showGreetings()}</h1>
    </div>
  );
}

export default App;
