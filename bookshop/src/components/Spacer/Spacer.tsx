import { Container } from "react-bootstrap"



const Spacer = () => {

  return (
    <Container className="d-flex gap-3 flex-directin-row justify-content-center align-items-center">
      <div className="d-flex gap-3 fw-bold fs-3">
        <i className="bi bi-truck"></i>
        <span>Free shipping over $50</span>
      </div>
      <div className="vr"></div>
      <div className="d-flex gap-3 fw-bold fs-3">
        <i className="bi bi-star"></i>
        <span>Save with loyalty points</span>
      </div>
      <div className="vr"></div>
      <div className="d-flex gap-3 fw-bold fs-3">
        <i className="bi bi-book"></i>
        <span>Read a few pages</span>
      </div>
    </Container>
  )
}

export { Spacer }
