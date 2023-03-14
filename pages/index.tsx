import Head from "next/head";
import Layout from "../components/Layout";
import CartItem from "../components/CartItem";
import {
  ChevronDownIcon,
  DotsVerticalIcon,
  PlusCircleIcon,
  PlusIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import BoardData from "../data/board-data.json";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useState, useEffect } from "react";

export default function Home() {
  const [ready, setReady] = useState(false);
  const [boardData, setBoardData] = useState(BoardData);
  useEffect(() => {
    if (process.browser) {
      setReady(true);
    }
  }, []);

  const onDragEnd = (response) => {

    let newBoardData = boardData;
    var dragItem =
      newBoardData[parseInt(response.source.droppableId)].items[response.source.index];
      newBoardData[parseInt(response.source.droppableId)].items.splice(response.source.index,1);
      newBoardData[parseInt(response.destination.droppableId)].items.splice(re.destination.index,0, dragItem);
      setBoardData(newBoardData);
  };

  return (
    <div className="min-w-full min-h-screen bg-blue-100">
      <Head>
        <title>Task - Tracker App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className="p-10">
          {/* Board Header */}
          <div className="flex justify-between">
            <div className="flex items-center">
              <h4 className="text-3xl font-bold text-gray-600">Studio Board</h4>
              <ChevronDownIcon className="w-7 h-7 text-gray-500 rounded-full bg-white p-1 ml-5 shadow-xl" />
            </div>

            <ul className="flex space-x-3">
              <li>
                <Image
                  src="https://randomuser.me/api/portraits/men/75.jpg"
                  width={36}
                  height={36}
                  alt="profile-user"
                  className="rounded-full cursor-pointer"
                />
              </li>

              <li>
                <Image
                  src="https://randomuser.me/api/portraits/women/75.jpg"
                  width={36}
                  height={36}
                  alt="profile-user"
                  className="rounded-full cursor-pointer"
                />
              </li>

              <li>
                <Image
                  src="https://randomuser.me/api/portraits/men/80.jpg"
                  width={36}
                  height={36}
                  alt="profile-user"
                  className="rounded-full cursor-pointer"
                />
              </li>

              <li>
                <button className="border border-dashed flex items-center justify-center w-9 h-9 border-gray-500 rounded-full">
                  <PlusIcon className="w-5 h-5 text-gray-500" />
                </button>
              </li>
            </ul>
          </div>

          {/* Board Colums */}

          {ready && (
            <DragDropContext onDragEnd={onDragEnd}>
              <div className="grid grid-cols-4 gap-5 my-5">
                {BoardData.map((board, index) => {
                  return (
                    <div key={index}>
                      <Droppable droppableId={board.name}>
                        {(provider) => (
                          <div
                            {...provider.droppableProps}
                            ref={provider.innerRef}
                            className="bg-gray-100 p-4 rounded-md shadow-md flex flex-col relative overflow-hidden"
                          >
                            <span className="w-full h-1 bg-gradient-to-tr from-pink-700 to-red-200 absolute inset-x-0 top-0 "></span>
                            <h4 className="flex justify-between items-center mb-2">
                              <span className="text-xl text-gray-600 font-bold">
                                {board.name}
                              </span>
                              <DotsVerticalIcon className="w-5 h-5 text-gray500" />
                            </h4>

                            {board.items.length > 0 &&
                              board.items.map((item, iIndex) => {
                                return <CartItem key={iIndex} data={item} />;
                              })}

                            <button className="flex justify-center items-center mt-6 space-x-2 text-lg font-medium hover:text-purple-500 hover:font-bold">
                              <span>Add task</span>
                              <PlusCircleIcon className="w-5 h-5 text-gray-500 hover:text-purple-500" />
                            </button>
                          </div>
                        )}
                      </Droppable>
                    </div>
                  );
                })}
              </div>
            </DragDropContext>
          )}
        </div>
      </Layout>
    </div>
  );
}
