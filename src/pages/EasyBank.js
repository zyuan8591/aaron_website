import React, { useEffect, useState } from 'react';
import AddNewBank from '../components/easybank/AddNewBank';
import { v4 as uuidv4 } from 'uuid';

const EasyBank = () => {
  const [bankList, setBankList] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    // get localstorage banklist
    setBankList(JSON.parse(localStorage.getItem('aaron_w_bank')));
  }, []);

  // ADD new bank => setBankList & error & localstorage
  const addNewBankHandler = (name, amount) => {
    // check bank is exist or not
    if (checkBankValid(name)) return setError('Bank is already exist.');
    // add new bank to state
    let newBankList = [{ id: uuidv4(), name, amount }, ...bankList];
    setBankList(newBankList);
    // update localstorage
    localStorage.setItem('aaron_w_bank', JSON.stringify(newBankList));
    // clear error
    setError('');
  };
  // (boolean) CHECK bank is valid or not
  const checkBankValid = (name) => {
    let result = false;
    bankList.forEach((bank) => {
      if (name === bank.name) {
        result = true;
        return;
      }
    });
    return result;
  };

  return (
    <div className="max-w-main mx-auto px-8 py-6 text-mainContent flex flex-col gap-2">
      <h1 className="text-5xl font-bold underline font-mono text-mainContent">
        <span className="text-accentClr">E</span>asy
        <span className="text-accentClr">B</span>ank
      </h1>
      <AddNewBank addBankHandler={addNewBankHandler} error={error} />
      <ul className="px-2">
        {bankList.map((bank) => (
          <li key={bank.id}>
            {bank.name}：$ {bank.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EasyBank;
