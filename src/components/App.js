import "../css/App.css";
import ListContacts from "./ListContacts";
import CreateContact from "./CreateContact";
import { BrowserRouter as Router,Routes, Route} from "react-router-dom";
import Details from "./Details";

const App = () => { 
  return(
    <Router>
    <Routes>
        <Route exact path="/" element={
          <ListContacts />
        } />
        <Route path="/create" element={
          <CreateContact />
        } />
     <Route path='/viewDetails/:id' element={<Details/>} />

    </Routes>
    </Router>
  )
};

export default App;
