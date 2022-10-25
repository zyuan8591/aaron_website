import React, { useState } from 'react';
import { AiOutlineRight, AiOutlineQuestionCircle } from 'react-icons/ai';

const CommandLine = ({ delBank, updateAmount }) => {
  const [command, setCommand] = useState('');
  const [commandError, setCommandError] = useState('');
  const [commandSuccess, setCommandSuccess] = useState('');

  // command submit handler
  const commandSubmitHandler = () => {
    let errorText = '';
    let successText = '';

    if (command.trim()) {
      let cmd = command.split(' ');
      let result = null;
      let commandValid = true;

      // check command
      if (cmd[0] === 'del') {
        // check command is valid or not
        if (cmd.length !== 2) {
          commandValid = false;
          errorText = `Unknown command: ${command}`;
        }
      } else if (
        cmd[0] === 'update' ||
        cmd[0] === 'add' ||
        cmd[0] === 'minus'
      ) {
        // check command is valid or not
        if (cmd.length !== 3) {
          commandValid = false;
          errorText = `Unknown command: ${command}`;
        }
      }

      // update amount
      if (commandValid) {
        switch (cmd[0]) {
          case 'del':
            // delete bank
            result = delBank(cmd[1] - 1);
            break;
          case 'update':
            // update amount
            result = updateAmount(cmd[1] - 1, cmd[2], 0);
            break;
          case 'add':
            // add amount
            result = updateAmount(cmd[1] - 1, cmd[2], 1);
            break;
          case 'minus':
            // minus amount
            result = updateAmount(cmd[1] - 1, cmd[2], 2);
            break;
          default:
            break;
        }
        // command result
        if (result[0]) {
          // command failed
          successText = result[1];
        } else {
          // command success
          errorText = result[1];
        }
      }

      setCommandError(errorText);
      setCommandSuccess(successText);
      setCommand('');
    }
  };

  return (
    <div className="flex items-center border border-lightGray rounded-sm px-1 relative">
      {/* command description */}
      <div className="flex items-center absolute right-full top-1/2 -translate-y-1/2 mr-2 group z-50 text-base  ">
        <AiOutlineQuestionCircle />
        <div className="absolute hidden top-full left-1/2 bg-mainContent opacity-90 group-hover:block mt-2 min-w-todoQ p-2 rounded text-white">
          <h2 className="text-white">Command：</h2>
          <ul className="list-decimal pl-4 pt-1">
            <li>
              刪除：del [id] <br /> ex. del 1
            </li>
            <li>
              更新：update [id] amount <br /> ex. update 1 5566{' '}
            </li>
            <li>
              加減：add/minus [id] amount <br /> ex. add 1 800
            </li>
          </ul>
        </div>
      </div>
      {/* command input */}
      <AiOutlineRight />
      <input
        type="text"
        className="grow focus:outline-0"
        value={command}
        onChange={(e) => setCommand(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            commandSubmitHandler();
          }
        }}
      />
      <span className="text-accentClr text-xs">{commandError}</span>
      <span className="text-successClr text-xs">{commandSuccess}</span>
    </div>
  );
};

export default CommandLine;
