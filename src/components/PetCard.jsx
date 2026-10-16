
export default function PetCard({ nome, especie }) {
  return (
    <div className="pet-card">
      <h2>{nome}</h2>
      <p>{especie}</p>
    </div>
  )
}
