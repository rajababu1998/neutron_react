import logo from './logo.svg';
import './App.css';


function App() {
  var name = "Newton School";
  var num1 = 3;
  var num2 = 5;
  let obj = {
    name: 'name',
    age: 50
  }
  var arr = [1,2,3,4,5,6];

  const fn = () => {
    console.log('asdfghlk');
  }
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h2>{name}</h2>
        sum = {5+7}

        temp = {num1 + num2};

        {/* obj = {obj}
        arr = {arr} */}

        {fn()}

        {arr.map((item) => (
          <div>{item}</div>
        ))}

        <a
          className="App-link"
          href="https://www.newtonschool.co/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Newton School Website
        </a>
      </header>
    </div>
  );
}

export default App;
