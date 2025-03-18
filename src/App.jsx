import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import './App.css'
import Root from './components/Root/Root';


const router = createBrowserRouter( createRoutesFromElements(
  <Route path="/" element={<Root />}>
    
  </Route>
));

function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App;
