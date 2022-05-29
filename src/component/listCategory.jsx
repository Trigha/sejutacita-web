import React, { useEffect, useState } from 'react';
// import AllStore from '../Store/action/index';
// import { useSelector, useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Category() {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const category = useSelector(({ ListCategory }) => ListCategory);
  const [data, setData] = useState([]);
  // const express = require('express');
  // const cors = require('cors');
  // const app = express();
  // app.use(cors());
  // const { createProxyMiddleware } = require('http-proxy-middleware');

  // useEffect(() => {
  //   dispatch(AllStore.fetchAllGenre());
  // }, [dispatch]);

  useEffect(() => {
    axios
      .get(
        'https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-categories',
        {
          headers: {
            // access-control-allow-origin: '*',
            'Content-Type': 'application/json',
          },
        }
      )
      .then(({ data }) => {
        setData(data.data);
        console.log(data.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

  return (
    <div>
      <section className="flex justify-center px-6 my-10 flex-wrap -m-4">
        {/* {Object.keys(category).map((key) => ( */}
        <div className="p-2 md:w-40 ">
          <a
            href="#"
            className="flex items-center p-4 bg-blue-200 rounded-lg shadow-xs cursor-pointer hover:bg-blue-500 hover:text-gray-100"
            // key={key}
          >
            <div>
              <p className=" text-xs font-medium ml-2 ">
                {/* {category[key].name} */}
              </p>
            </div>
          </a>
        </div>
        {/* ))} */}
      </section>
    </div>
  );
}

export default Category;
