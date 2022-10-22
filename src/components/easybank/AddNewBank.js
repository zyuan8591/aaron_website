import React, { useState } from 'react';

const AddNewBank = ({ addBankHandler, error }) => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  const inputChangeHandler = (e) => {
    const name = e.target.name;
    let value = e.target.value;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'amount':
        value = value < 0 ? 0 : value;
        setAmount(value);
        break;
      default:
        break;
    }
  };

  const submitHandler = () => {
    if (name.trim() && amount.trim()) {
      addBankHandler(name, amount);
      setName('');
      setAmount('');
    }
  };

  return (
    <div className="flex gap-3">
      <div className="flex">
        <input
          type="text"
          value={name}
          name="name"
          onChange={inputChangeHandler}
          onKeyDown={(e) => {
            if (e.key === 'Enter') submitHandler(e);
          }}
          className="border border-subContent focus:outline-0   rounded-tl-sm rounded-bl-sm px-2 py-1 border-r-0"
          placeholder="Bank Name"
        />
        <input
          type="number"
          value={amount}
          name="amount"
          onChange={inputChangeHandler}
          onKeyDown={(e) => {
            if (e.key === 'Enter') submitHandler(e);
          }}
          className="border border-subContent focus:outline-0 rounded-tr-sm rounded-br-sm px-2 py-1"
          placeholder="Amount"
        />
      </div>
      <button
        className="border-2 border-accentClr px-3 text-white bg-accentClr hover:bg-white hover:text-accentClr ease-linear duration-100 font-bold"
        onClick={submitHandler}
      >
        Add bank
      </button>
      {error && (
        <span className="flex items-center text-accentClr self-center border border-dashed border-accentClr px-1">
          {error}
        </span>
      )}
    </div>
  );
};

export default AddNewBank;
