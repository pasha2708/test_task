import React from 'react';
import { Button } from 'react-bootstrap';
import basicForm from './backend/customer-message-form.json'
import successForm from './backend/customer-message-form-success'
import errorForm from './backend/customer-message-form-error'
import Input from './Input';

function Form() {

  let [data, setData] = React.useState(basicForm);
  
  const onClickSuccess = () => {
    setData(successForm);
    alert(successForm.message)
    
  }

  const onClickError = () => {
    setData(errorForm); 
  }

  return(
    <div>
        <div className='overlay'>
          <div className='form'>
            {data.form.map((item) =>(
              <Input
                required = {item.attrs.required}
                name={item.name}
                type={item.type} 
                placeholder={item.attrs.placeholder}
                label={item.label}
                options={item.options}
                value={item.value}
                status={data.status}
                errors={item.errors}
              />))}
            <div className='buttonsForm'>
              <Button 
                className='btn btn-primary buttonSuccess' 
                onClick={onClickSuccess}>
                Отправить с успехом
              </Button>
              <Button 
                className='btn btn-warning buttonError' 
                onClick={onClickError}>
                Отправить с ошибкой
              </Button>
            </div>
          </div>
        </div>
    </div>
  );};

export default Form;