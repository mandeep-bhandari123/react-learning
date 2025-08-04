
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
console.log("hi my name is mandeep ")
function App() {
  return (
  <>
    <Navbar title = "TextUtils" aboutText="About"></Navbar>
    <div className="container my-3">
      <TextForm heading="Enter your text." />
    </div>

</> 

   );
 
  }
export default App;
