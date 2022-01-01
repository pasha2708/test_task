import React from 'react';
import Form from './Form';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

import './App.css';

function App() {

  const [openForm, setOpenForm] = React.useState(false);

return (
    <div>
      <div className='mainPage'>
        <Button onClick={()=>setOpenForm(true)} className='buttonStart' variant="primary">Задать вопрос</Button>
      </div>
      {openForm && <Form />}
    </div>
  );}

export default App;
