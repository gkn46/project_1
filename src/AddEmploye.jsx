import React,{useEffect,useRef,useState} from 'react';
import { CircleX } from 'lucide-react';
import Form from"./Form.jsx"

function AddEmploye({onClose}) {
  const modalRef = useRef();
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  }
  return (
    <div ref={modalRef} onClick={closeModal} className='fixed inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
      <div className='mt-10 flex-col gap-5 text-black'>
      <button onClick={onClose} className='place-self-end'><CircleX size={25}/></button>
      <div className='bg-gray-700 rounded-xl px-20 py-10 flex flex-col gap-5 items-center mx-4 text-white'>
      <h1 className='text-3xl font-extrabold'>Kayıt Sayfası</h1>
      <Form onClose={()=> setShowModal(false)}/>
      </div>
      </div>
    </div>
  );
}

export default AddEmploye;
