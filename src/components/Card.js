import { useEffect } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { deleteCard, fetchUsers } from '../actions/cardActions'

const Card = (props) => {
  console.log(props)
  const navigate = useNavigate()
  const { users } = props
  useEffect(() => {
    props.fetchUsers()
  }, [props])

  const onButtonClick = () => {
    navigate('/contact')
    let id = props.card.id
    props.deleteCard(id)
  }

  return users.map((user) => (
    <div
      className='ui raised very padded text container segment'
      style={{ marginTop: '80px' }}
    >
      <h3 className='ui header'>{user.name}</h3>
      <p>{user.email}</p>
      <button
        className='ui primary right floated button'
        onClick={onButtonClick}
      >
        Delete
      </button>
    </div>
  ))
}

const mapStateToProps = (state, ownProps) => {
  // let title = ownProps.params.user
  let title = ownProps.user
  return {
    card: state.cards.find((card) => card.title === title),
    users: state.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteCard: (id) => {
      dispatch(deleteCard(id))
    },
    fetchUsers: () => {
      dispatch(fetchUsers())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)
