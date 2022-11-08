import './App.css';
import Layout from './components/layout/Layout'
import ReactGA from 'react-ga';
  const TRACKING_ID = "UA-219947598-1"; // OUR_TRACKING_ID
  ReactGA.initialize(TRACKING_ID);
  ReactGA.pageview(window.location.pathname + window.location.search);

function App() {

  return (
    <>
      <Layout/>
    </>
  );
}

export default App;
