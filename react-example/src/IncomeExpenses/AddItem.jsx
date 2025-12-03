import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import "./AddItem.css";

const AddItem = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");
  const navigate = useNavigate();

  const handleAdd = async () => {
    if (!name || !amount) return;
    await api.post("/expenses", { name, amount, note });
    navigate("/inandex");
  };

  return (
    <div className="add-item-wrapper">
      <div className="add-item-card">
        <div className="add-item-header">
          <h1>Add Item</h1>
          <p>เพิ่มข้อมูลรายการรายรับรายจ่าย</p>
        </div>

        <div className="add-item-body">
          <div className="add-item-form">
            <div className="form-row">
              <label className="form-label">
                Item Name <span className="required">*</span>
              </label>
              <input
                className="form-input"
                placeholder="เช่น ค่าอาหาร, ค่าเดินทาง"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </div>

            <div className="form-row">
              <label className="form-label">
                Amount <span className="required">*</span>
              </label>
              <div className="amount-group">
                <span className="amount-prefix">THB</span>
                <input
                  className="form-input amount-input"
                  type="number"
                  min="0"
                  placeholder="0.00"
                  value={amount}
                  onChange={e => setAmount(e.target.value)}
                />
              </div>
            </div>

            <div className="form-row">
              <label className="form-label">Note</label>
              <textarea
                className="form-textarea"
                placeholder="รายละเอียดเพิ่มเติม เช่น จ่ายเป็นเงินสด, โอน, หมายเหตุอื่น ๆ"
                value={note}
                onChange={e => setNote(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="add-item-footer">
          <button className="btn-add" onClick={handleAdd}>
            Add
          </button>
          <button
            className="btn-cancel"
            type="button"
            onClick={() => navigate("/inandex")}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddItem;