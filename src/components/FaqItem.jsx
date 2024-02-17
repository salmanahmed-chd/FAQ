import React, { useState } from 'react';

const FaqItem = ({ item, initial }) => {

  const [show, setShow] = useState(initial)

  const { question, answer } = item;

  const handleShow = () => {
    setShow((prev) => !prev)
  }

  return (
    <div className="mb-5">
      <div className="mx-6 px-4  py-4 rounded font-medium bg-gray-200 shadow-md cursor-pointer" onClick={handleShow}>
        <div className="flex items-center">
          {show ? <i className="ri-arrow-down-s-line font-extrabold text-xl pr-2"> </i> : <i className="ri-arrow-right-s-line font-extrabold text-xl pr-2"></i>}<p className="mb-1 font-bold py-2">{question}</p>
        </div>
        {show && <p className="mt-3 ml-8 mr-4 pl-4 pr-4 bg-gray-100 py-2 rounded-md">{answer}</p>}

      </div>
    </div>
  );
};

export default FaqItem;
