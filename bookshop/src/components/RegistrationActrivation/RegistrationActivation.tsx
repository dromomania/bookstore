import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { activateRegistration } from "../../redux/action-creators";
import { Container } from "react-bootstrap";

const RegistrationActivation = () => {

  const { uid = '', token = '' } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(activateRegistration({ uid, token }))
  }, [uid, token])

  return (
    <Container className="vh-100 d-flex justify-content-center align-items-center" >...Loading
      <h1>Registration confirmed!</h1>
      <Link style={{textDecoration: 'none'}} to="/sign-in">Sign in</Link>
    </Container>
  )
}

export { RegistrationActivation };
