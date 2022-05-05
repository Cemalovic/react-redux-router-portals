import { useParams } from 'react-router-dom'

const Card = () => {
  const params = useParams()

  return (
    <div
      className='ui raised very padded text container segment'
      style={{ marginTop: '80px' }}
    >
      <h3 className='ui header'>{params.user}</h3>
    </div>
  )
}

export default Card
