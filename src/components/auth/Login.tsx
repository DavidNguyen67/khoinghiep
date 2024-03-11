import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';

function LoginComponent(props: any) {
  const [id, setId] = useState('');
  const handleLogin = () => {
    if (id.trim() === '2722225231') {
      toast.success('Login thanh cong');
      localStorage.setItem('isLogged', 'true');
      props?.setIsLogged(true);
    } else toast.error('Login that bai');
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>MaSinhVien</Form.Label>
        <Form.Control
          type="text"
          value={id}
          onChange={(event) => {
            setId(event.target?.value);
          }}
          placeholder="Nhap ma sinh vien"
        />
      </Form.Group>
      <Button variant="primary" type="button" onClick={handleLogin}>
        Submit
      </Button>
    </Form>
  );
}

export default LoginComponent;
