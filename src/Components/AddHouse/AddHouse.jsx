import axios from "axios";
import { useState} from "react";
export const AddHouse = () => {
  const [inputData, setInputData] = useState({
    name : '',
    ownerName : '',
    address : '',
    areaCode : 0,
    rent : 0,
    bachelor : false,
    married : false,
    image :  '',
  })
  const handleChange = (event, checked) => {
    if(event.target.name ==='married' || event.target.name === 'bachelor'){
      console.log(event.target.name, checked)
      if(checked){
        setInputData({...inputData, [event.target.name] : checked})
      } else {
        setInputData({...inputData, [event.target.name] : checked})
      }
    }
    else {

      const { name, value} = event.target;
      setInputData({
        ...inputData, 
        [name] : value,
      })
    }
  }
  const handleSubmit = (e) => {
      e.preventDefault();
      console.log(inputData)
      axios.post('http://localhost:8080/houses', inputData)
      setInputData({
        name : '',
      ownerName : '',
      address : 0,
      areaCode : 0,
      rent : 0,
      bachelor : false,
      married : false,
      image :  '',
      })
  }
  return (
    <div className="addHouseContainer">
      <form onSubmit={(e)=>{handleSubmit(e)}}>
        <label>name</label>
        <input type="text" className="name" name="name" required  onChange={(e)=>{handleChange(e)}}/>
        <br />
        <label>ownerName</label>
        <input name="ownerName" type="text" className="ownerName" required onChange={(e)=>{handleChange(e)}}/>
        <br />
        <label>address</label>
        <input name="address" type="text" className="address" required onChange={(e)=>{handleChange(e)}}/>
        <br />
        <label>areaCode</label>
        <input name="areaCode" type="text" className="areaCode" required onChange={(e)=>{handleChange(e)}}/>
        <br />
        <label>rent</label>
        <input name="rent" type="text" className="rent" required onChange={(e)=>{handleChange(e)}}/>
        <br />
        <label>preferredTenant</label>
        <br />
        <label>bachelor</label>
        <input name='bachelor'  type="checkbox" className="bachelor" onChange={(e)=>{
          let checked = e.target.checked;
          if(checked === true){
            handleChange(e,checked)
          }
          else{
            handleChange(e,checked)
          }
          if(checked){
            checked = !checked;
          }
          else {
            checked = !checked;
          }
        }}/>
        <br />
        <label>married</label>
        <input name='married'  type="checkbox" className="married"  onChange={(e)=>{
          let checked = e.target.checked;
          if(checked === true){
            handleChange(e,checked)
          }
          else {
            handleChange(e, checked)
          }
          if(checked){
            checked = !checked;
          }
          else {
            checked = !checked
          }
        }}/>
        <br />
        <label>image</label>
        <input name="image" type="text" className="image" required onChange={(e)=>{handleChange(e)}}/>
        <br />
        <input className="submitBtn" type="submit" />
      </form>
    </div>
  );
};
