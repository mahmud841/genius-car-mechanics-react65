import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ManageServices.css';

const ManageServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/services/')
      .then(res => res.json())
      .then(data => setServices(data))
  }, []);


  const handleDelete = id => {
    const proceed = window.confirm('Are you sure, u want to delete?');
    if (proceed) {
      const url = `http://localhost:5000/services/${id}`;
      fetch(url, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => {
          // console.log(data);
          if (data.deletedCount) {
            alert('Deleted')
            const remaining = services.filter(service => service._id !== id);
            setServices(remaining);

          }
        })
    }
  }

  return (
    <div className="service">
      <h2>Manage Services Page </h2>
      {
        services.map(service => <div key={service._id}>
          <h4>{service.name} </h4>
         <Link to={`services/update/${service._id}`}> <button>Update</button></Link>
          <button style={{ marginLeft: '10px' }} onClick={() => handleDelete(service._id)}>Delete</button>
        </div>)
      }
    </div>
  );
};

export default ManageServices;