import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Container from './components/Container';
import CvContextProvider from './context/CvContext';
import DisplayFinalCV from './components/DisplayFinalCV';

function App() {
  return (
    <CvContextProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Container} exact />
          <Route path="/display-cv" component={DisplayFinalCV} exact />
        </Switch>
      </BrowserRouter>
    </CvContextProvider>

  );
}

export default App;
