import { useContext, useRef } from "react"
import { AuthContext } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"

const Login = () => {

  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  const { login } = useContext( AuthContext );
  const nav = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault()
    const email = emailRef.current.value
    const password = passwordRef.current.value
    const body = { email, password }
    console.log('body: ', body)
    // add validation 

    // submit
    try {
      nav('/books',{replace:true})
      await login( body );

    } catch (error) {
      alert( error.message );
    }

  }
  return (
    <div>
      <div className="card">
        <h1> Login </h1>
        <form onSubmit={handleSubmit} >
          <label>
            <input type='email' name='email' placeholder="email..." ref={emailRef} />
          </label>
          <label>
            <input type='password' name='password' placeholder="password..." ref={passwordRef} />
          </label>
          <button className="btn"> login </button>
        </form>
      </div>
    </div>
  )
}

export default Login