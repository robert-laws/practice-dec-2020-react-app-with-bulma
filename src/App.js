import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header, Main, Footer } from './layout';
import { Home, Stores, Menu, Order, Data, NotFound } from './pages';

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
            <Route path='/*'>
              <NotFound />
            </Route>
          </Switch>
        </Main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
