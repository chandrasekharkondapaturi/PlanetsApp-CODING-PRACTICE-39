// Write your code here
import './index.css'

const PlanetItem = props => {
  const {item} = props
  const {name, description, imageUrl} = item

  return (
    <div className="planet-container">
      <img src={imageUrl} alt={`planet ${name}`} className="image" />
      <h1 className="heading">{name}</h1>
      <p className="description">{description}</p>
    </div>
  )
}

export default PlanetItem
