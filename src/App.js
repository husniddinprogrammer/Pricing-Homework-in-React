import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar container-fluid border-bottom border-1 pe-5">
        <h4 className='navbar-brand ms-4 mt-2 fw-normal text-dark'>Company name</h4>
        <div className='d-flex justify-between-around'>
          <ul className='nav me-auto'>
            <li class="nav-item">
              <a class="nav-link text-dark fs-5" aria-current="page" href="#">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-dark fs-5" aria-current="page" href="#">Enterprise</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-dark fs-5" aria-current="page" href="#">Support</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-dark fs-5" aria-current="page" href="#">Pricing</a>
            </li>
          </ul>
          <a class="btn btn-outline-primary">Sign up</a>
        </div>
      </nav>
      <div className="pricing-header text-center mx-auto w-50 mt-5">
        <h1 className='display-4'>Pricing</h1>
        <p className='p-3 fs-5 text-dark fw-normal'>
          Quickly build an effective pricing table for your potential customers with this Bootstrap example. It's built with default Bootstrap components and utilities with little customization.
        </p>
      </div>
      <div className='row w-75 m-auto g-4 justify-content-around border-1'>
        <div className="card text-center col-3">
          <div class="card-header"><h2 className='fw-normal'>Free</h2></div>
          <div class="card-body">
            <h2 class="card-title">$0 / mo</h2>
            <p class="card-text w-75 m-auto p-3">
              10 users included
              2 GB of storage
              Email support
              Help center access
            </p>
            <a href="#" class="btn btn-primary p-2">Get Started</a>
          </div>
        </div>
        <div className="card text-center col-3">
          <div class="card-header"><h2 className='fw-normal'>Pro</h2></div>
          <div class="card-body">
            <h2 class="card-title">$15 / mo</h2>
            <p class="card-text w-75 m-auto p-3">
              20 users included
              10 GB of storage
              Priority email support
              Help center access
            </p>
            <a href="#" class="btn btn-primary p-2">Get Started</a>
          </div>
        </div>
        <div className="card text-center col-3">
          <div class="card-header"><h2 className='fw-normal'>Enterprise</h2></div>
          <div class="card-body">
            <h2 class="card-title">$29 / mo</h2>
            <p class="card-text w-75 m-auto p-3">
              30 users included
15 GB of storage
Phone and email support
Help center access
            </p>
            <a href="#" class="btn btn-primary p-2">Get Started</a>
          </div>
        </div>
      </div>
      <footer class="pt-4 my-md-5 pt-md-5 border-top w-75 m-auto">
        <div class="row">
          <div class="col-12 col-md">
            <img class="mb-2" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="24" height="24"></img>
            <small class="d-block mb-3 text-muted">&copy; 2017-2018</small>
          </div>
          <div class="col-6 col-md">
            <h5>Features</h5>
            <ul class="list-unstyled text-small">
              <li><a class="text-muted" href="#">Cool stuff</a></li>
              <li><a class="text-muted" href="#">Random feature</a></li>
              <li><a class="text-muted" href="#">Team feature</a></li>
              <li><a class="text-muted" href="#">Stuff for developers</a></li>
              <li><a class="text-muted" href="#">Another one</a></li>
              <li><a class="text-muted" href="#">Last time</a></li>
            </ul>
          </div>
          <div class="col-6 col-md">
            <h5>Resources</h5>
            <ul class="list-unstyled text-small">
              <li><a class="text-muted" href="#">Resource</a></li>
              <li><a class="text-muted" href="#">Resource name</a></li>
              <li><a class="text-muted" href="#">Another resource</a></li>
              <li><a class="text-muted" href="#">Final resource</a></li>
            </ul>
          </div>
          <div class="col-6 col-md">
            <h5>About</h5>
            <ul class="list-unstyled text-small">
              <li><a class="text-muted" href="#">Team</a></li>
              <li><a class="text-muted" href="#">Locations</a></li>
              <li><a class="text-muted" href="#">Privacy</a></li>
              <li><a class="text-muted" href="#">Terms</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
