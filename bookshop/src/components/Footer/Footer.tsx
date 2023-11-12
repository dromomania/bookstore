import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <Container style={{ marginTop: "100%" }}>
      <footer className="py-5">
        <div className="row">
          <div className="col-6 col-md-2 mb-3">
            <h5>Categories</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Psychology</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Self-help</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Romance</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Mystery</a></li>
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3">
            <h5>E-books</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Fiction</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Historical</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Horror</a></li>
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3">
            <h5>Help & Contacts</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary"><i className="bi bi-telephone-fill me-2"></i>+375 29 XXX-XX-XX</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary"><i className="bi bi-clock-fill me-2"></i>Mo-Fri, 9AM to 11PM</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary"><i className="bi bi-envelope-fill me-2"></i>b-world@gmail.com</a></li>
            </ul>
          </div>

          <div className="col-md-5 offset-md-1 mb-3">
            <form>
              <h5>Subscribe to our newsletter</h5>
              <p>Monthly digest of what's new and exciting from us.</p>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <label className="visually-hidden">Email address</label>
                <input id="newsletter1" type="text" className="form-control" placeholder="Email address"></input>
                <button className="btn btn-primary" type="button">Subscribe</button>
              </div>
            </form>
          </div>
        </div>

        <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
          <p>&copy; 2023 Company, Inc. All rights reserved.</p>
          <ul className="list-unstyled d-flex">
            <li className="ms-3"><a className="link-body-emphasis" href="#"><i className="bi bi-twitter-x"></i></a></li>
            <li className="ms-3"><a className="link-body-emphasis" href="#"><i className="bi bi-instagram"></i></a></li>
            <li className="ms-3"><a className="link-body-emphasis" href="#"><i className="bi bi-facebook"></i></a></li>
          </ul>
        </div>
      </footer>
    </Container>
  )
}


export { Footer }
