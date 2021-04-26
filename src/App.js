import logo from './logo1.png';
import title from './title.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div>
      <div class="row">
        <div class="col">
          <div class="container">
            <div class="row justify-content-center">
              <img src={logo}></img>
            </div>
          </div>
        <div class="col">
          <p class="glitch">
            <span aria-hidden="true">Get ready for Nothing.</span>
            Get ready for Nothing.
            <span aria-hidden="true">Get ready for Nothing.</span>
          </p>
        </div> 
        </div>
      </div>
      <div class="row justify-content-center">
      <p class="glitch">
            <span aria-hidden="true">Spring 2021</span>
              <a href="https://water.org/">Spring 2021</a>
            <span aria-hidden="true">Spring 2021</span>
          </p>
      </div>
    </div>
  );
}

export default App;
