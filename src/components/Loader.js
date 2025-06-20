import React from 'react';

const Loader = () => {
  return (
    <>
      <div className="loader mx-auto my-5"></div>
      <style>{`
        .loader {
          width: 50px;
          aspect-ratio: 1;
          color: #000;
          border: 2px solid;
          display: grid;
          box-sizing: border-box;
          animation: l1 4s infinite linear;
        }
        .loader::before,
        .loader::after {
          content: "";
          grid-area: 1/1;
          margin: auto;
          width: 70.7%;
          aspect-ratio: 1;
          border: 2px solid;
          box-sizing: content-box;
          animation: inherit;
        }
        .loader::after {
          width: 50%;
          aspect-ratio: 1;
          border: 2px solid;
          animation-duration: 2s;
        }
        @keyframes l1{
          100% {transform:rotate(1turn)}
        }
      `}</style>
    </>
  );
};

export default Loader;
