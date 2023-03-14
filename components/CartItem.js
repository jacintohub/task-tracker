import React from "react";
import {
  ChatAlt2Icon,
  PaperClipIcon,
  PlusIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import { Draggable } from "react-beautiful-dnd";

function CartItem({ data }) {
  return (
    <Draggable index={data.id} draggableId={data.id.toString()}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="bg-white rounded-md p-3 mt-3"
        >
          <label
            className={`bg-gradient-to-r from-blue-500 to-blue-200 px-2 py-1 rounded text-white text-sm ${
              data.priority === 0
                ? "from-blue-500 to-blue-200"
                : data.priority === 1
                ? "from-green-500 to-green-200"
                : "from-red-500 to-red-200"
            }`}
          >
            {data.priority === 0
              ? "Low Priority"
              : data.priority === 1
              ? "Medium Priority"
              : "High Priority"}
          </label>

          <h5 className="text-md leading-6 my-3 font-medium">{data.title}</h5>
          <div className="flex justify-between">
            <div className="flex items-center space-x-4">
              <span className="flex items-center space-x-2">
                <ChatAlt2Icon className="w-4 h-4 text-gray-500 mr-2" />
                <span>{data.chat}</span>
              </span>
              <span className="flex items-center space-x-2">
                <PaperClipIcon className="w-4 h-4 text-gray-500 mr-2" />
                <span>{data.attachment}</span>
              </span>
            </div>

            <ul className="flex space-x-3">
              {data.assignees.map((ass, index) => {
                return (
                  <li>
                    <Image
                      key={index}
                      src={ass.avt}
                      width={30}
                      height={30}
                      alt="profile-user"
                      className="rounded-full cursor-pointer"
                    />
                  </li>
                );
              })}

              <li>
                <button className="border border-dashed flex items-center justify-center w-8 h-8 border-gray-500 rounded-full">
                  <PlusIcon className="w-5 h-5 text-gray-500" />
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </Draggable>
  );
}

export default CartItem;
