'use client';

import LoginComponent from '@/components/auth/Login';
import Content from '@/components/content/Content';
import NavbarHeader from '@/components/header/NavbarHeader';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Toaster } from 'react-hot-toast';

export default function Home() {
  const [isLogged, setIsLogged] = useState(() => {
    const data = localStorage.getItem('isLogged');
    if (data) return JSON.parse(data);
    return false;
  });

  return (
    <main>
      {isLogged ? (
        <>
          <NavbarHeader sticky={'top'} />
          <div className="py-2 backgroundColor">
            <Container className="text-white m-l-64px">HOME</Container>
          </div>
          <Container>
            <Content />
          </Container>
          <NavbarHeader
            className="backgroundColor"
            color="text-decoration-none text-white"
            sticky={'bottom'}
            title={'TH27.40'}
          />
        </>
      ) : (
        <Container>
          <Row>
            <div className="col-6 m-auto mt-4">
              <LoginComponent setIsLogged={setIsLogged} />
            </div>
          </Row>
        </Container>
      )}
      <Toaster position="top-right" reverseOrder={false} />
    </main>
  );
}
