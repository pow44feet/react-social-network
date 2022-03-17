import './App.css';
import Card from './components/card/Card';
import Greeting from './components/greeting/Greeting';
import Menu from './components/menu/Menu';
import About from './components/about/About';
import Posts from './components/posts/Posts';

const App = () => {
   return (
      <div className="container">
         <div className="page">
            <div className="page__info">
               <Card />
               <About />
            </div>
            <div className="page__content">
               <Greeting />
               <Menu />
               <Posts />
            </div>
         </div>
      </div>
   );
}

export default App;
