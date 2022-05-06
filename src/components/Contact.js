import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
// import Modal from './Modal'

const Contact = ({ cards }) => {
  return (
    <div>
      {/* <Modal /> */}

      {cards.map((card) => (
        <div
          className='ui raised very padded text container segment'
          style={{ marginTop: '80px' }}
          key={card.id}
        >
          <Link to={`/${card.title}`} className='ui header'>
            {card.title}
          </Link>
          <p>{card.body}</p>
        </div>
      ))}

      {/* <div
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
      </div> */}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    cards: state.cards
  }
}

export default connect(mapStateToProps)(Contact)
