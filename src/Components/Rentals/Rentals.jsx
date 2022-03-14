import {useEffect,useState} from 'react'
import "./Rentals.css";
import axios from 'axios'
export const Rentals = () => {
  const [data, setData] = useState([]);
  const getDataFromServer = async () => {
    try {
      const get = await axios.get('http://localhost:8080/houses');
      setData(get.data);
    }
    catch(e){
      console.log('error in getDataFromServer', e);
    }
  }
  useEffect(()=>{
    getDataFromServer();
  }, [])
  return (
    <div className="rentalContainer">
      <div className="sortingButtons">
        <button className="sortById">Sort by ID</button>
        <button className="sortByRentAsc">Rent Low to high</button>
        <button className="sortByRentDesc">Rent High to low</button>
        <button className="sortByAreaAsc">Area Low to high</button>
        <button className="sortByAreaDesc">Area High to Low</button>
      </div>
      <input
        className="searchAddress"
        type="text"
        placeholder="Search Address"
      />
      <table className="table" border="1">
        <thead>
          <tr>
            <th>Sl.no.</th>
            <th>Name</th>
            <th>Owner Name</th>
            <th>Address</th>
            <th>Area Code</th>
            <th>Rent</th>
            <th>Available For</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {data.map((house, index) => {
            
            return (
              <tr key={house.id} className="houseDetails">
                <td className="houseId">{house.id}</td>
                <td className="houseName">{house.name} </td>
                <td className="ownersName">{house.ownerName}</td>
                <td className="address">{house.address}</td>
                <td className="areaCode">{house.areaCode}</td>
                <td className="rent">{house.rent}</td>
                <td className="preferredTenants">
                  {
                    (e)=>{
                      let value = e.target.value
                      console.log(value)
                      console.log(house.married)
                      // if(house.married === true && house.bachelor === true){
                      //    value= 'for Bachelor and married'
                      // }
                      // else if(house.married === true){
                      //    value='for married'
                      // }
                      // else if(house.bachelor === true){
                      //    value='for Bachelor'
                      // } else {
                      //    value = 'not Available'
                      // }
                    }
                  }
                </td>
                <td className="houseImage">
                  <img src={house.image} alt="house" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
