
import {Routes, Route} from 'react-router-dom'
import { Layout } from './components/Layout/Layout'
import HomePage from './pages/HomePage'

function App() {
 

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element = {<HomePage/>}/>

          <Route path='/contacts' element= {''}/>

          <Route path='*' element= {<HomePage/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
