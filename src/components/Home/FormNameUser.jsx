import React, {useRef} from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTrainerName } from "../../store/slices/trainerName.slice";
import { useNavigate } from "react-router-dom";
import "./style/formuserstyle.css"

const FormNameUser = () => {
  
 const inputName = useRef();
 const dispatch = useDispatch()
 
 const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setTrainerName(inputName.current.value.trim()))
    navigate("/pokedex")
  };
  
  return (
    <form onSubmit={handleSubmit}  className="form-container">
      <div className="contain">
      <input className="input-container" ref={inputName} type="text" />
      <button className="btn-form-user">Start</button>
      </div>
    </form>
  );
};

export default FormNameUser;