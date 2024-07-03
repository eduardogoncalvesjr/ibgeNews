import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function Painel() {
  const [user, setUser] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const name = localStorage.getItem('user');
    const nameString = name && JSON.parse(name);

    setUser(nameString.email);
  }, []);

  return (
    <div>
      <h5>Olá,</h5>
      <h3 className="text-center">{user}</h3>
      <div className="d-flex justify-content-center mt-5">
        <Button
          variant="danger"
          onClick={ () => {
            navigate('/');
          } }
        >
          Sair
        </Button>
      </div>
    </div>
  );
}
