import './App.css';
import Header from './components/Header';
import Reproductor from './components/Reproductor';
import Footer from './components/Footer';

function App() {
  return (
      <section className='app'>
        <Header/>
        <div className='space'></div>

        <div className='main'>
          <Reproductor/>
        </div>

        <div className='space'></div>
        
        <Footer/>
      </section>
    
    
  )
}

export default App;
