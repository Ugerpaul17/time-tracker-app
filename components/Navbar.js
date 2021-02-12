import Link from 'next/link';


function Navbar() {
      

    return (
     <nav className="navbar navbar-expand-lg bg-primary navbar-dark bg-dark mb-4">
      <a className="navbar-brand" href="#">
        Clocking
      </a>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link href="/">
              <a className="nav-link">Home</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/report">
              <a className="nav-link">Report</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/users">
              <a className="nav-link">User</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/logout">
              <a className="nav-link">Log Out</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    );
}

export default Navbar