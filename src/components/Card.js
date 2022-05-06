import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'

const Card = (props) => {
  const params = useParams()
  const { title, body } = props.card

  return (
    <div
      className='ui raised very padded text container segment'
      style={{ marginTop: '80px' }}
    >
      <h3 className='ui header'>{title}</h3>
      <p>{body}</p>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  // let title = ownProps.params.user
  let title = ownProps.match.user
  return {
    card: state.cards.find((card) => card.title === title)
  }
}

export default connect(mapStateToProps)(Card)
