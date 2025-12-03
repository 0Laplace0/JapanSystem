import React, { useEffect, useState } from 'react';
import api from '../services/api';
import './InAndEx.css';
import { useNavigate } from "react-router-dom";

const InAndEx = () => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    api.get('/expenses')
      .then(res => setItems(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: '20px', color: '#000000ff', backgroundColor: '#ffffffff', minHeight: '100vh' }}>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <h2>Income and Expenses</h2>
        <button onClick={() => navigate('/add-item')} className="btn btn-brown btn-sm">Add Item</button>
      </div>
      <table style={{ width: '100%', marginTop: '20px' }}>
        <thead className="thead-brown">
            <tr>
                <th width="5%" className="text-center">No.</th>
                <th width="35%">Item</th>
                <th width="10%">Income</th>
                <th width="10%">Expenses</th>
                <th width="10%" className="text-center">Total</th>
                <th width="20%" className="text-center">Note</th>
                <th width="5%" className="text-center">Edit</th>
                <th width="5%" className="text-center">Delete</th>
            </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.income}</td>
              <td>{item.expense}</td>
              <td>{item.note}</td>
              <td>{item.total}</td>
              <td>
                <button onClick={() => window.location.href = `/edit/${item.id}`} className="btn btn-brown btn-sm">Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InAndEx;