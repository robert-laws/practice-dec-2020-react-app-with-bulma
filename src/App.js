import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header, Main, Footer } from './layout';
import {
  Home,
  Stores,
  Menu,
  Order,
  Data,
  Concepts,
  Resources,
  About,
  Week1,
  Week2,
  Week3,
  Week4,
  Week5,
  NotFound,
} from './pages';
import { Modal } from './components';

function App() {
  return (
    <Router>
      <div
        className='is-flex is-flex-direction-column'
        style={{ height: '100vh', width: '100%' }}
      >
        <Header />
        <Main>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/stores'>
              <Stores />
            </Route>
            <Route path='/order'>
              <Order />
            </Route>
            <Route path='/menu'>
              <Menu />
            </Route>
            <Route path='/order'>
              <Home />
            </Route>
            <Route path='/data'>
              <Data />
            </Route>
            <Route path='/concepts'>
              <Concepts />
            </Route>
            <Route path='/resources'>
              <Resources />
            </Route>
            <Route path='/about'>
              <About />
            </Route>
            <Route path='/week1'>
              <Week1 />
            </Route>
            <Route path='/week2'>
              <Week2 />
            </Route>
            <Route path='/week3'>
              <Week3 />
            </Route>
            <Route path='/week4'>
              <Week4 />
            </Route>
            <Route path='/week5'>
              <Week5 />
            </Route>
            <Route path='/*'>
              <NotFound />
            </Route>
          </Switch>
        </Main>
        <Footer />
        <Modal />
      </div>
    </Router>
  );
}

export default App;
