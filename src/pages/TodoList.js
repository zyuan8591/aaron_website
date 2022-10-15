import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Todoitem from '../components/todolist/Todoitem';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { IconContext } from 'react-icons';

const TodoList = () => {
  const [newTodo, setNewTodo] = useState('');
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    let localTodo = localStorage.getItem('aaron_w_todo');
    if (localTodo) setTodoList(JSON.parse(localTodo));
  }, []);

  // add new todo handler
  const addTodoHandler = () => {
    if (!newTodo.trim()) return;
    let todo = { id: uuidv4(), content: newTodo, status: false, edit: false };
    let newTodoList = [...todoList, todo];
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
  // edit handler
  const editHandler = (id) => {
    let newTodoList = [...todoList].map((t) => {
      if (t.id === id) {
        return { ...t, edit: true };
      }
      return t;
    });
    setTodoList(newTodoList);
    localStorage.setItem('aaron_w_todo', JSON.stringify(newTodoList));
  };
  // dragHandler
  const onDragEnd = (e) => {
    const { source, destination } = e;
    if (!destination) return;
    if (
      destination.index === source.index &&
      destination.droppableId === source.droppableId
    )
      return;
    let newTodo = [...todoList];
    let add = newTodo[source.index];
    if (destination.droppableId === 'todoFinList') {
      // DRAG TO FINISH
      newTodo = newTodo.map((todo) => {
        if (todo.id === add.id) return { ...todo, status: true };
        return todo;
      });
    } else {
      // SORT TODOLIST
      newTodo.splice(source.index, 1);
      newTodo.splice(destination.index, 0, add);
    }
    setTodoList(newTodo);
    localStorage.setItem('aaron_w_todo', JSON.stringify(newTodo));
  };
  // updateHandler
  const updateHandler = (id, content) => {
    let newTodoList = [...todoList].map((t) => {
      if (t.id === id) {
        return { ...t, content, edit: false };
      }
      return t;
    });
    setTodoList(newTodoList);
    localStorage.setItem('aaron_w_todo', JSON.stringify(newTodoList));
  };

  return (
    <IconContext.Provider value={{ size: '1.25rem' }}>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="max-w-todo mx-auto px-8 py-6 text-mainContent flex flex-col gap-2">
          {/* add new todo */}
          <div className="flex gap-2 relative ">
            {/* use Description  */}
            <div className="flex items-center absolute right-full top-1/2 -translate-y-1/2 mr-2 group">
              <AiOutlineQuestionCircle />
              <div className="absolute hidden top-full left-1/2 bg-lightGray opacity-90 group-hover:block mt-2 min-w-todoQ p-2 rounded">
                <h2>使用說明：</h2>
                <ul className="list-decimal pl-4 pt-1">
                  <li>
                    待辦事項左側圖示為拖曳排序，也可拖曳至 FINISH 完成該事項。
                  </li>
                  <li>待辦事項右方圖示依序為－編輯、完成、刪除。</li>
                  <li>完成事項右方圖示依序為－返回未完成狀態、刪除。</li>
                </ul>
              </div>
            </div>
            <input
              type="text"
              className="border border-subContent focus:outline-none p-1 placeholder:text-subContent flex-grow focus:border-accentClr"
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
            TODO LIST ({todoList.filter((todo) => !todo.status).length})
          </h2>
          <Droppable droppableId="todoList">
            {(provided) => (
              <ul
                className="flex flex-col gap-2"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {todoList.map((todo, i) => {
                  if (todo.status) return;
                  return (
                    <Todoitem
                      i={i}
                      key={todo.id}
                      todo={todo}
                      completeHandler={completeHandler}
                      delTodoHandler={delTodoHandler}
                      editHandler={editHandler}
                      updateHandler={updateHandler}
                    ></Todoitem>
                  );
                })}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
          {/* Finish List */}
          <h2 className="font-bold text-lg text-accentClr">
            FINISH ({todoList.filter((todo) => todo.status).length})
          </h2>
          <Droppable droppableId="todoFinList">
            {(provided) => (
              <ul
                className="flex flex-col gap-2 min-h-todo"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {todoList.map((todo, i) => {
                  if (!todo.status) return;
                  return (
                    <Todoitem
                      i={i}
                      key={todo.id}
                      todo={todo}
                      completeHandler={completeHandler}
                      delTodoHandler={delTodoHandler}
                    ></Todoitem>
                  );
                })}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </div>
      </DragDropContext>
    </IconContext.Provider>
  );
};

export default TodoList;
