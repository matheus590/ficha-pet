
import PetCard from './components/PetCard'
import './App.css'

export default function App() {
  return (
    <main className="container">
      <h1>Ficha de Pets</h1>

      <PetCard nome="Bidu" especie="Cachorro" />
      <PetCard nome="Mimi" especie="Gato" />
      <PetCard nome="Nina" especie="Coelho" />
    </main>
  )
}
