
import {BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Home from './pages/Home'
import Books from './pages/Books'
import Book from './pages/Book'
import NewBook from './pages/NewBook'

import Login from './pages/Login'
import NotFound from './pages/NotFound'
import BooksLayout from './layouts/BooksLayout'
import DefaultLayout from './layouts/DefaultLayout'
import AuthLayout from './layouts/AuthLayout'
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
const App = () => {
  const { isAuth } = useContext( AuthContext );
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<DefaultLayout />} >      
          <Route index element={<Home/>} />
        </Route>
        {isAuth ? (
        
          <Route path="/books" element={<BooksLayout />}>
            <Route path="" element={<Books />} />
            <Route path=":id" element={<Book />} />
            <Route path="new" element={<NewBook />} />
          </Route>
        ) : (
            <Route path="/books" element={<Navigate to='/login' replace />}/>
        )}
        {!isAuth ? (
          <Route path="/login" element={<AuthLayout />} >
            <Route path="" element={<Login />} />

          </Route>
        ) : (
          <Route path="/login" element={<Navigate to='/' replace />} />
        )}
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>  

  );
}

export default App;
