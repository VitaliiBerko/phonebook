
import {Routes, Route} from 'react-router-dom'
import { Layout } from './components/Layout/Layout'
import HomePage from './pages/HpmePage/HomePage'
import ContactsPage from './pages/ContactsPage/ContactsPage'
import JoinPage from './pages/JoinPage/JoinPage'




function App() {
 

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element = {<HomePage/>}/>

          <Route path='/register' element={<JoinPage/>}/>
          <Route path='/login' element={''}/>

          <Route path='/contacts' element= {<ContactsPage/>}/>

          <Route path='*' element= {<HomePage/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
