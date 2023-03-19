// Write your code here
import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'
import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props
  const setting = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div className="slider-container" data-testid="planets">
      <h1 className="planet">PLANETS</h1>
      <Slider {...setting}>
        {planetsList.map(each => (
          <PlanetItem key={each.id} item={each} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
