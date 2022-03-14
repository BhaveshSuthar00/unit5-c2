import { useState} from "react";
export const AddHouse = () => {
  const [inputData, setInputData] = useState({
    name : '',

  })
  const handleSubmit = () => {

  }
  return (
    <div className="addHouseContainer">
      <form onSubmit={()=>{handleSubmit()}}>
        <label>name</label>
        <input type="text" className="name" value="name" required />
        <br />
        <label>ownerName</label>
        <input value="ownerName" type="text" className="ownerName" required />
        <br />
        <label>address</label>
        <input value="address" type="text" className="address" required />
        <br />
        <label>areaCode</label>
        <input value="areaCode" type="text" className="areaCode" required />
        <br />
        <label>rent</label>
        <input value="rent" type="text" className="rent" required />
        <br />
        <label>preferredTenant</label>
        <br />
        <label>bachelor</label>
        <input  type="checkbox" className="bachelor" onChange={(e)=>{
          let checked = e.target.checked;
          if(checked === ''){
            checked = 'bachelor'
          }
          else {
            checked = ''
          }
        }}/>
        <br />
        <label>married</label>
        <input  type="checkbox" className="married"  onChange={(e)=>{
          let checked = e.target.checked;
          if(checked === ''){
            checked = 'married'
          }
          else {
            checked = ''
          }
        }}/>
        <br />
        <label>image</label>
        <input value="image" type="text" className="image" required />
        <br />
        <input className="submitBtn" type="submit" />
      </form>
    </div>
  );
};
