import { Route, Routes } from 'react-router';
import './App.css'
import { CreateEmployee } from './components/CreateEmployee/CreateEmployee';
import Header from './components/Header/Header';
import ViewEmployee from './components/ViewEmployee/ViewEmployee';
import { EditEmployee } from './components/EditEmployee/EditEmployee';
import ViewEmpdata from './components/ViewEmpdata/ViewEmpdata';

function App() {
  const data = [{ name: "yash", email: "yr56035@gmail.com", contact: "5685996565", age: "65" },
  { name: "gautam", email: "gk56@gmail.com", contact: "50326562326", age: "95" },
  { name: "fhiehfeh", email: "kehfie35@gmail.com", contact: "5685996565", age: "65" }]
  return (
    <>
      <Header data={data} />
     
      <Routes>
        <Route element={<CreateEmployee/>} path='/'/>
        <Route element={<ViewEmployee/>} path='/View'/>
        <Route element={<EditEmployee/>} path='/Edit'/>
        <Route element={<ViewEmpdata/>} path='/ViewEmpData'/>
      </Routes>
    </>
  )
}

export default App
