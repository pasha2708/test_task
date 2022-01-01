function Input(props) {

  const Type = props.type;
      return(
      <div>
        {Type === "text" ? (<div className="form-floating mb-3">
          <input 
            required={props.required} 
            className="form-control" 
            name={props.name}
            type={props.type}
            id="floatingInput" 
            placeholder={props.placeholder}
            value={props.value}>
          </input>
          <label for="floatingInput">{props.placeholder}</label>
          {(props.status === 400) && <p>{props.errors}</p>}
          </div>) : ""}
        
        {Type === "email" ? (<div className="form-floating mb-3">
          <input 
            required={props.required} 
            className="form-control" 
            name={props.name}
            type={props.type}
            id="floatingInput" 
            placeholder={props.placeholder}
            value={props.value}>
          </input>
          <label for="floatingInput">{props.placeholder}</label>
          {(props.status === 400) && <p>{props.errors}</p>}
          </div>) : ""}

        {Type === "select" ? (
          <div>
            <select className="form-select form-select-sm mb-3">
              <option selected value={props.value} >{props.placeholder}</option>
              {props.options.map((item, index)=>(
              <option>{item.order}</option>))}
            </select>
            {(props.status === 400) && <p>{props.errors}</p>}
          </div>): ""}           
                
        {Type === "textarea" ? (<div className="form-floating mb-3">
          <textarea 
            required={props.required} 
            className="form-control" 
            name={props.name}
            type={props.type}
            id="floatingInput" 
            placeholder={props.placeholder}
            value={props.value}>
          </textarea>
          <label for="floatingInput">{props.placeholder}</label>
          {(props.status === 400) && <p>{props.errors}</p>}
        </div>) : ""}
      </div>
      
    )
  } 


export default Input;