import { createContext, useCallback, useEffect, useRef, useState } from 'react'

import Cookies from 'js-cookie';

export const AuthContext = createContext()
/**
 *     "email" : "admin@mail.com",
    "password": "123456789"
 * 
 */
export const AuthProvider = ( { children } ) => {
    const intialToken = Cookies.get( 'token' );
    const [token, setToken] = useState( intialToken );
    const handleSetToken = t => {

        if ( t ) {
            setToken( t )
            Cookies.set( 'token', t, { expires: 30 } )
        } else {
            setToken( null )
            Cookies.remove( 'token' )
        }
    }

    const login = async ( body ) => {

        const res = await fetch( 'http://localhost:5000/v1/api/auth/login', {
            method: 'POST',
            body: JSON.stringify( body ),
            headers: {
                'Content-Type': 'application/json'
            }
        } )

        const data = await res.json()

        if ( res.ok ) {
            handleSetToken( data.token )
        } else {
            handleSetToken( null )
            throw Error( data.message )
        }
        console.log( 'data', data )
    }


    const checkLogin = useCallback( async () => {
        if ( !token ) return;
        try {
            const res = await fetch( 'http://localhost:5000/v1/api/auth/me', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token

                }
            })
            if ( !res.ok ) {
                handleSetToken( null );
                
            }
        } catch ( error ) {
            handleSetToken( null );
        }
    }, [token] );
        
    const isMount =useRef(false)
    useEffect( () => {
        if ( !isMount.current ) {
            console.log( token )
            checkLogin()
            isMount.current = true;
        }
    }, [checkLogin] );


    const logout = () => {
        handleSetToken( null )
    };
    return (
        <AuthContext.Provider value={{ isAuth: !!token, login,logout }} >
            {children}
        </AuthContext.Provider>
    )
}