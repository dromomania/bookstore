import { Container } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { useState } from "react"
import { signIn } from "../../redux/action-creators"


const SignIn = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailFull, setEmailFull] = useState(false);
  const [passwordFull, setPasswordFull] = useState(false);
  const [emailError, setEmailError] = useState('Email не может быть пустым');
  const [passwordError, setPasswordError] = useState('Пароль не может быть пустым');

  const dispatch = useDispatch();

  const handleSignIn = () => {
    dispatch(signIn({
      email,
      password,
    }))
  }

  const handleEmail = (e: any) => {
    setEmail(e.target.value)
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError('Email некорректный')
    } else {
      setEmailError('')
    }
  }

  const handlePassword = (e: any) => {
    setPassword(e.target.value)
    if (e.target.value.length < 6) {
      setPasswordError('Пароль должен быть больше 6 символов')
    } else if (e.target.value.length > 20) {
      setPasswordError('Пароль должен быть меньше 20 символов')
    } else {
      setPasswordError('')
    }
  }

  const handleBlur = (e: any) => {
    switch (e.target.name) {
      case 'email':
        setEmailFull(true)
        break
      case 'password':
        setPasswordFull(true)
        break
    }
  }


  return (
    <Container>
      <section className="vh-100">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: '25px' }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign in</p>

                      <div className="mx-1 mx-md-4">

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0 d-flex gap-3 align-items-center">
                            <i className="bi bi-envelope-fill"></i>

                            <label>
                              {(emailFull && emailError) && <div style={{ color: 'red' }}>{emailError}</div>}
                              <input type="email" value={email} onChange={e => handleEmail(e)} onBlur={e => handleBlur(e)} placeholder="Email" className="form-control" />
                            </label>

                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0 d-flex gap-3 align-items-center">
                            <i className="bi bi-lock-fill"></i>

                            <label>
                              {(passwordFull && passwordError) && <div style={{ color: 'red' }}>{passwordError}</div>}
                              <input value={password} onChange={e => handlePassword(e)} onBlur={e => handleBlur(e)} type="password" placeholder="Password" className="form-control" />
                            </label>

                          </div>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button onClick={handleSignIn} type="button" className="btn btn-primary btn-lg">Sign In</button>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  )
}

export { SignIn }
