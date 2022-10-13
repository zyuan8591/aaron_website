import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { AiOutlineCloseCircle, AiOutlineCheckCircle } from 'react-icons/ai';
import { IconContext } from 'react-icons';

const TodoList = () => {
  const [newTodo, setNewTodo] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [finishList, setFinishList] = useState([]);

  useEffect(() => {
    let localTodo = localStorage.getItem('aaron_w_todo');
    if (localTodo) setTodoList(JSON.parse(localTodo));
  }, []);

  // add new todo handler
  const addTodoHandler = () => {
    if (!newTodo.trim()) return;
    let todo = { id: uuidv4(), content: newTodo, status: false };
    let newTodoList = [todo, ...todoList];
    setTodoList(newTodoList);
    setNewTodo('');
    localStorage.setItem('aaron_w_todo', JSON.stringify(newTodoList));
  };
  // delete todo handler
  const delTodoHandler = (id) => {
    let newTodoList = [...todoList].filter((t) => t.id !== id);
    setTodoList(newTodoList);
    localStorage.setItem('aaron_w_todo', JSON.stringify(newTodoList));
  };
  // complete & cancel todo handler
  const completeHandler = (id) => {
    let newTodoList = [...todoList].map((t) => {
      if (t.id === id) {
        return { ...t, status: !t.status };
      }
      return t;
    });
    setTodoList(newTodoList);
    localStorage.setItem('aaron_w_todo', JSON.stringify(newTodoList));
  };

  return (
    <div className="max-w-todo mx-auto px-8 py-6 text-mainContent flex flex-col gap-2">
      {/* add new todo */}
      <div className="flex gap-2">
        <input
          type="text"
          className="border border-subContent focus:outline-none p-1 placeholder:text-subContent flex-grow"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter Todo Item"
          onKeyDown={(e) => {
            if (e.key === 'Enter') addTodoHandler();
          }}
        />
        <button
          className="border border-subContent px-2 hover:border-accentClr hover:text-accentClr ease-linear"
          onClick={addTodoHandler}
        >
          新增
        </button>
      </div>
      {/* todo list */}
      <h2 className="font-bold text-lg text-accentClr">
        TODO LIST ({todoList.length})
      </h2>
      <ul className="flex flex-col gap-2">
        {todoList.map((todo) => (
          <li
            key={todo.id}
            className={`border border-subContent rounded px-2 py-1 flex items-center justify-between ${
              todo.status && 'line-through bg-successClr'
            } text-base`}
          >
            <span>{todo.content}</span>
            {/* check button */}
            <div className="flex gap-1">
              <div
                className={`cursor-pointer ${
                  todo.status ? '' : 'text-successClr'
                }`}
                onClick={() => completeHandler(todo.id)}
              >
                <AiOutlineCheckCircle />
              </div>
              {/* delete button */}
              <div
                onClick={() => delTodoHandler(todo.id)}
                className="cursor-pointer"
              >
                <AiOutlineCloseCircle />
              </div>
            </div>
          </li>
        ))}
      </ul>
      {/* Finish List */}
      <h2 className="font-bold text-lg text-accentClr">
        FINISH ({todoList.length})
      </h2>
    </div>
  );
};

export default TodoList;
