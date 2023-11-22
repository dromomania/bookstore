import { Navbar, Container, Nav, InputGroup, Form, Button } from 'react-bootstrap';
import { useSelector } from "react-redux"
import { IStoreState } from "../../types"
import { User } from '../User';
import { Link } from 'react-router-dom';
import { setSearch, setUser } from '../../redux/action-creators';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';

const NavigationBar = () => {

  const user = useSelector((state: IStoreState) => state.user.user)
  const ref: React.MutableRefObject<HTMLInputElement | null> = useRef<HTMLInputElement>(null)
  const dispatch = useDispatch();

  const handleSearchClick = () => {
    if (ref.current !== null) {
      dispatch(setSearch(ref.current.value))
    }
  }

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">B-World</Navbar.Brand>
        <Nav className="gap-2">
          <InputGroup >
            <Form.Control
              placeholder="Type any book here"
              aria-label="Type any book here"
              ref={ref}
            />
            <Button variant="outline-secondary" id="button-addon2">
              <Link onClick={handleSearchClick} to="/search"><i className="bi bi-search"></i></Link>
            </Button>
          </InputGroup>
          <Nav.Link href="/cart"><i className="bi bi-cart4"></i></Nav.Link>
          <div className="vr"></div>
          <Nav.Link href="#liked"><i className="bi bi-heart-fill"></i></Nav.Link>
          <div className="vr"></div>
          <Nav.Link href="/sign-up"> {user ?
            <User
              userName={user.username}
            /> : <i className="bi bi-person-fill"></i>}</Nav.Link>
        </Nav>
      </Container>
    </Navbar >
  );
}




export { NavigationBar }
