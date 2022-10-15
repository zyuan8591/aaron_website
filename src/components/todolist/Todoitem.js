import React, { useState } from 'react';
import {
  AiOutlineCloseCircle,
  AiOutlineCheckCircle,
  AiOutlineEdit,
  AiOutlineMenu,
} from 'react-icons/ai';
import { Draggable } from 'react-beautiful-dnd';

const Todoitem = ({
  i,
  todo,
  completeHandler,
  delTodoHandler,
  editHandler,
  updateHandler,
}) => {
  const [edit, setEdit] = useState(todo.content || '');

  return (
    <Draggable draggableId={`todo${todo.id}`} index={i}>
      {(provided) => (
        <li
          className={`border border-subContent rounded px-2 py-1 flex items-center justify-between ${
            todo.status && 'line-through bg-successClr'
          } text-base`}
          ref={provided.innerRef}
          {...provided.draggableProps}
        >
          <div className="flex items-center gap-2">
            {/* SORT TODO ITEM BUTTON */}
            <div className="cursor-move" {...provided.dragHandleProps}>
              {!todo.status && <AiOutlineMenu />}
            </div>
            {/* TODO content */}
            {todo.edit ? (
              // EDIT INPUT
              <input
                type="text"
                className="border border-subContent focus:outline-none  flex-grow"
                value={edit}
                onChange={(e) => setEdit(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && edit.trim()) {
                    updateHandler(todo.id, edit);
                  }
                }}
              />
            ) : (
              <span>{todo.content}</span>
            )}
          </div>

          <div className="flex gap-1">
            {/* TODO EDIT BUTTON */}
            {!todo.status && !todo.edit && (
              <div
                className="cursor-pointer"
                onClick={() => editHandler(todo.id)}
              >
                <AiOutlineEdit />
              </div>
            )}
            {/* TODO FINISH BUTTON */}
            <div
              className={`cursor-pointer ${
                todo.status ? '' : 'text-successClr'
              }`}
              onClick={() => {
                if (!todo.edit) return completeHandler(todo.id);
                if (!edit.trim()) return;
                updateHandler(todo.id, edit);
              }}
            >
              <AiOutlineCheckCircle />
            </div>
            {/* TODO DELETE BUTTON */}
            <div
              onClick={() => delTodoHandler(todo.id)}
              className="cursor-pointer"
            >
              <AiOutlineCloseCircle />
            </div>
          </div>
        </li>
      )}
    </Draggable>
  );
};

export default Todoitem;
