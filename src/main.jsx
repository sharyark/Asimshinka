import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route,createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
// import Contact from './components/Contact/Contact.jsx';
import Contact from './components/Contact/Contact.jsx';
import Login from './components/Login/Login.jsx'
import Logout from './components/Logout/Logout.jsx'

const router = createBrowserRouter(
 createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='/home' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/logout' element={<Logout />}></Route>
      {/* <Route path='/user/:uid' element={<User />}/> */}
    </Route>
 )
);

ReactDOM.createRoot(document.getElementById('root')).render(
 <React.StrictMode>
    <RouterProvider router={router}/>
 </React.StrictMode>,
);
