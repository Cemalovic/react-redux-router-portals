import { Link } from 'react-router-dom'
import Modal from './Modal'

const Contact = () => {
  return (
    <div>
      <Modal />
      <div
        className='ui raised very padded text container segment'
        style={{ marginTop: '80px' }}
      >
        <Link to='/alex' className='ui header'>
          Alex
        </Link>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque natus
          libero illum ducimus unde consectetur aspernatur accusantium harum
          voluptas nostrum.
        </p>
      </div>
      <div
        className='ui raised very padded text container segment'
        style={{ marginTop: '80px' }}
      >
        <Link to='/willma' className='ui header'>
          Willma
        </Link>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque natus
          libero illum ducimus unde consectetur aspernatur accusantium harum
          voluptas nostrum.
        </p>
      </div>
    </div>
  )
}

export default Contact
