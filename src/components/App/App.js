import './App.css';
import animals from '../Data'
import AnimalCard from '../AnimalCard/AnimalCard';


function App() {
  return (
    <div className="wrapper">
      {animals.map(animal => <AnimalCard 
                                diet={animal.diet} 
                                name={animal.name} 
                                size={animal.size}
                                scientificName={animal.scientificName}
                              />)}
    </div>
  );
}

export default App;
