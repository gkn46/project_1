/*import React,{ useState } from 'react'
import Employes from "./Employes.jsx"
import AddEmploye from './AddEmploye'

function MainPage() {
  const [showModal, setShowModal]=useState(false)
  return (
    <div className='h-screen flex flex-col items-center gap-6 bg-white text-black'>
            <h1 className='text-5xl font-bold mt-4'>Personel Kayıt Sayfası</h1>
            <button onClick={()=> setShowModal(true)} className='bg-gray-600 px-4 py-2 rounded-lg text-lg text-white'>Yeni Kayıt</button>
            {showModal && <AddEmploye onClose={()=> setShowModal(false)}/>}
      <Employes />
    </div>
  )
}

export default MainPage*/
import React, { useState } from 'react';
import Employes from "./Employes.jsx";
import AddEmploye from './AddEmploye';
import UpdateUser from './UpdateUser.jsx';

function MainPage() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  return (
    <div className='h-screen flex flex-col items-center gap-6 bg-white text-black'>
      <h1 className='text-5xl font-bold mt-4'>Personel Kayıt Sayfası</h1>
      <div className='flex gap-4'>
        <button 
          onClick={() => setShowAddModal(true)} 
          className='bg-gray-600 px-4 py-2 rounded-lg text-lg text-white'>
          Yeni Kayıt
        </button>
        <button 
          onClick={() => setShowUpdateModal(true)} 
          className='bg-blue-600 px-4 py-2 rounded-lg text-lg text-white'>
          Kullanıcı Güncelle
        </button>
      </div>
      {showAddModal && <AddEmploye onClose={() => setShowAddModal(false)} />}
      {showUpdateModal && <UpdateUser onClose={() => setShowUpdateModal(false)} />}
      <Employes />
    </div>
  );
}

export default MainPage;
