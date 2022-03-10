import { NavLink } from 'react-router-dom'

const NotFound = () => {
  return(
    <div style={{ textAlign: 'center', marginTop: 30 }}>
        <h1>404</h1>
        <p>Error. Not found</p>
        <NavLink to='/'>Visit home</NavLink>
    </div>
  )
}

export default NotFound