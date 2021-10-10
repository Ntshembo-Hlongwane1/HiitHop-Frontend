import React from 'react'
import { useHistory } from 'react-router-dom'
import Navigation from '../Components/Navigation.component';

const Hit = () => {
  const history = useHistory();
  React.useEffect(()=>{
    history.push('/')
  }, [])
  return (
    <div>
      <Navigation />
    </div>
  )
}

export default Hit
