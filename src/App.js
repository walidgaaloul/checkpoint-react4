
import './App.css';
import ProfileComponent from "../src/profile/Profile.js";

function App() {
   const fullname="Walid Gaaloul"
   const bio="etudiant in Go My Code"
   const profession="etudiant"
   const src="./logo192.png"
   const alertMe=()=> {
     alert('Gaaloul walid')
   }
  return (
    <div className="App">
    <ProfileComponent fullname={fullname} bio={bio} profession={profession} src={src} alertMe={alertMe} />
    </div>
  );
}

export default App;
