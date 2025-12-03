import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Header';
import Card from './Components/Card';
import Footer from './Components/Footer';

const dataCards = [
  {
    id: 1,
    name: "Free",
    price: 0,
    description: "10 users included 2 GB of storage Email support Help center access",
    link: "#"
  },
  {
    id: 2,
    name: "Pro",
    price: 15,
    description: "20 users included 10 GB of storage Priority email support Help center access",
    link: "#"
  },
  {
    id: 3,
    name: "Enterprise",
    price: 29,
    description: "30 users included 15 GB of storage Phone and email support Help center access",
    link: "#"
  }
]

function App() {
  return (
    <div className="App">
      <Header />
      <div className="pricing-header text-center mx-auto w-50 mt-5">
        <h1 className='display-4'>Pricing</h1>
        <p className='p-3 fs-5 text-dark fw-normal'>
          Quickly build an effective pricing table for your potential customers with this Bootstrap example. It's built with default Bootstrap components and utilities with little customization.
        </p>
      </div>
      <div className='row w-75 m-auto g-4 justify-content-around border-1'>
        {
          dataCards.map((value, index) => {
            return <Card {...value} />
          })
        }
      </div>
      <Footer />
    </div>
  );
}

export default App;
