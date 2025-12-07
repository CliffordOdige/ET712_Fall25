import './App.css';
import mountain from "./images/image_1.jpg"

function App() {
  return (
    <>
    <h1 className='title'>Welcome to React JS</h1>
    <h2 className='author'>By Clifford Odige</h2>
    <h2 style={{color:"green", textAlign : "center"}}>Inline styling</h2>
    <section>
      <label for="user_email">Enter email</label>
      <input type='email' id='user_email' placeholder='Enter email address...'></input>
    </section>
    <figure className='imgcontainer'>
      <img src={mountain} />
    </figure>
    </>
  );
}

export default App;
