
import Navigation from './components/Navigation'
import Page from './pages/Page'
import {BrowserRouter} from 'react-router-dom'
import Search from './components/Search';


function App() {
  return (
   <BrowserRouter>
<Navigation/>
<Search/>
<Page/>
   </BrowserRouter>
  );
}

export default App;
   

