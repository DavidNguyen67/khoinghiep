'use client';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavbarHeader(props: any) {
  return (
    <Navbar
      expand="lg"
      className={props.className ?? 'bg-body-tertiary'}
      sticky={props.sticky}
    >
      <Container className="m-l-64px">
        <Navbar.Brand className="d-flex">
          <Link
            href={'/'}
            className={props.color ?? 'text-decoration-none text-black'}
          >
            {props.title ?? 'Nhóm 6'}
          </Link>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavbarHeader;
