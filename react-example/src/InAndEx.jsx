import React, { useEffect, useState } from 'react';
import api from './services/api';
import './InAndEx.css';

const InAndEx = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    api.get('/expenses')
      .then(res => setItems(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: '20px', color: '#fff', backgroundColor: '#ffffffff', minHeight: '100vh' }}>
      <h2>รายการรายจ่าย</h2>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <button onClick={() => window.location.href = '/add'}>เพิ่มรายการ</button>
      </div>
      <table style={{ width: '100%', marginTop: '20px' }}>
        <thead>
          <tr>
            <th>ลำดับ</th>
            <th>รายการ</th>
            <th>รายรับ</th>
            <th>รายจ่าย</th>
            <th>หมายเหตุ</th>
            <th>รวม</th>
            <th>จัดการ</th>
          </tr>
        </thead>
        <thead className="thead-brown">
            <tr>
                <th width="5%" class="text-center">No.</th>
                <th width="5%">Pic</th>
                <th width="35%">Product Name & Type </th>
                <th width="45%" class="text-center">Detail</th>
                <th width="5%" class="text-center">edit</th>
                <th width="5%" class="text-center">delete</th>
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
                <button onClick={() => window.location.href = `/edit/${item.id}`}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InAndEx;