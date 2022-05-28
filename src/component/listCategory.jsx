import React from 'react';

function Category() {
  return (
    <div>
      <section className="flex justify-center px-6 my-10 flex-wrap -m-4">
        <div className="p-2 md:w-40 ">
          <a
            href="#"
            className="flex items-center p-4 bg-blue-200 rounded-lg shadow-xs cursor-pointer hover:bg-blue-500 hover:text-gray-100"
          >
            <div>
              <p className=" text-xs font-medium ml-2 ">Title</p>
            </div>
          </a>
        </div>
        <div className="p-2 md:w-40 ">
          <a
            href="#"
            className="flex items-center p-4 bg-blue-200 rounded-lg shadow-xs cursor-pointer hover:bg-blue-500 hover:text-gray-100"
          >
            <div>
              <p className=" text-xs font-medium ml-2 ">Title</p>
            </div>
          </a>
        </div>
        <div className="p-2 md:w-40 ">
          <a
            href="#"
            className="flex items-center p-4 bg-blue-200 rounded-lg shadow-xs cursor-pointer hover:bg-blue-500 hover:text-gray-100"
          >
            <div>
              <p className=" text-xs font-medium ml-2 ">Title</p>
            </div>
          </a>
        </div>
        <div className="p-2 md:w-40 ">
          <a
            href="#"
            className="flex items-center p-4 bg-blue-200 rounded-lg shadow-xs cursor-pointer hover:bg-blue-500 hover:text-gray-100"
          >
            <div>
              <p className=" text-xs font-medium ml-2 ">Title</p>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Category;
