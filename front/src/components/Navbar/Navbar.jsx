import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-main" aria-label="Third navbar example">
    <div className="container">
      <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="navbar-collapse collapse" id="navbarsExample03">
        <ul className="navbar-nav me-auto mb-2 mb-sm-0">
          <li className="nav-item">
            <a className="nav-link active white-color" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link white-color" href="/new-product">New Product</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  )
}

export default Navbar;