import { Fragment, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Container, Header } from 'semantic-ui-react'
import { Activity } from '../models/activity'
import NavBar from './NavBar'
import ActivityDashboard from '../../Features/activities/dashboard/ActivityDashboard'



function App() {
/*   const [activities, setActivities] = useState<Activity[]>([])
  useEffect(()=>{
    axios.get<Activity[]>('http://localhost:5000/api/activities')
    .then(response =>{
      console.log(response);
      setActivities(response.data)
    })
  },[]) */


  return (
    <>
      <NavBar/>
      <Container style={{marginTop: '7em'}}>
        {/* <ActivityDashboard activities={activities}/> */}
      </Container>
    </>
  )
}

export default App
