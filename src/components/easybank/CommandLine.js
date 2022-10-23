import React, { useState } from 'react';
import { AiOutlineRight } from 'react-icons/ai';

const CommandLine = ({ delBank }) => {
  const [command, setCommand] = useState('');
  const [commandError, setCommandError] = useState('');
  const [commandSuccess, setCommandSuccess] = useState('');

  // command submit handler
  const commandSubmitHandler = () => {
    let errorText = '';
    let successText = '';

    if (command.trim()) {
      let cmd = command.split(' ');

      // delete bank
      if (cmd[0] === 'del') {
        // check command is valid or not
        if (cmd.length !== 2) return commandNotFound();
        // delete bank
        let result = delBank(cmd[1] - 1);

        if (result[0]) {
          // delete failed
          successText = result[1];
        } else {
          errorText = result[1];
        }
      }
      setCommandError(errorText);
      setCommandSuccess(successText);
      setCommand('');
    }
  };
  // command not found
  const commandNotFound = () => {
    setCommandError(`Unknown command: ${command}`);
  };

  return (
    <div className="flex items-center border border-lightGray rounded-sm px-1 relative">
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
