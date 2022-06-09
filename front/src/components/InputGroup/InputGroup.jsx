import './InputGroup.scss';

const InputGroup = ({ label, id, name, type, placeholder, register }) => {
  return (
    <div className="form-input">
      <label className="form-input__label" htmlFor={id}></label>
      <input className="form-input__input" type={type} id={id} placeholder={placeholder} {...register(id)}></input>
    </div>
  )
}

export default InputGroup;
