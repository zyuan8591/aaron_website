import React, { useEffect, useState } from 'react';
import AddNewBank from '../components/easybank/AddNewBank';
import CommandLine from '../components/easybank/CommandLine';
import { v4 as uuidv4 } from 'uuid';

const EasyBank = () => {
  const [bankList, setBankList] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    // get localstorage banklist
    let initData = localStorage.getItem('aaron_w_bank');
    if (initData) setBankList(JSON.parse(localStorage.getItem('aaron_w_bank')));
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

  // DEL bank => setBankList & localstorage => return [error or success, msg]
  const delBankHandler = (i) => {
    // delete failed
    if (i > bankList.length - 1) return [false, 'bank not found'];

    // delete success
    let newBankList = [...bankList];
    newBankList = newBankList.filter((bank, index) => i !== index);

    // setstate & localstorage
    setBankList(newBankList);
    localStorage.setItem('aaron_w_bank', JSON.stringify(newBankList));
    return [true, 'bank delete'];
  };

  return (
    <div className="max-w-main mx-auto px-8 py-6 text-mainContent flex flex-col gap-2">
      <h1 className="text-5xl font-bold underline font-mono text-mainContent">
        <span className="text-accentClr">E</span>asy
        <span className="text-accentClr">B</span>ank
      </h1>
      <AddNewBank addBankHandler={addNewBankHandler} error={error} />
      <CommandLine delBank={delBankHandler} />
      <ul className="px-2 flex gap-3 flex-wrap">
        {bankList.map((bank, i) => (
          <li
            key={bank.id}
            className="flex items-center outline outline-2 outline-offset-2 outline-subContent"
          >
            {/* bank name */}
            <div className="bg-accentClr text-white px-5 py-3 font-bold  text-center relative">
              <span className="absolute top-0 left-0 pl-1 text-xs">
                {i + 1}
              </span>
              {bank.name}
            </div>
            {/* bank amount */}
            <div className=" text-mainContent pl-5 pr-3 py-3 font-bold text-end">
              $ {bank.amount.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EasyBank;
