import React, { useState } from 'react';
import axios from 'axios';

const UpdateUser = () => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [department, setDepartment] = useState('');
  const [isReference, setIsReference] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleUpdate = async () => {
    try {
      const url = `http://employee-api.runasp.net/api/Employee/${id}`;
      const data = {
        name,
        surname,
        department,
        isReference
      };
      const result = await axios.put(url, data);
      setResponse(result.data);
      setError(null);
    } catch (err) {
      setError(err.message);
      setResponse(null);
    }
  };

  return (
    <div>
      <h1>Update Employee</h1>
      <form onSubmit={(e) => { e.preventDefault(); handleUpdate(); }}>
        <div>
          <label>ID:</label>
          <input type="text" value={id} onChange={(e) => setId(e.target.value)} required />
        </div>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Surname:</label>
          <input type="text" value={surname} onChange={(e) => setSurname(e.target.value)} required />
        </div>
        <div>
          <label>Department:</label>
          <input type="text" value={department} onChange={(e) => setDepartment(e.target.value)} required />
        </div>
        <div>
          <label>Is Reference:</label>
          <input type="checkbox" checked={isReference} onChange={(e) => setIsReference(e.target.checked)} />
        </div>
        <button type="submit">Update Employee</button>
      </form>
      {response && <div>Update Successful: <pre>{JSON.stringify(response, null, 2)}</pre></div>}
      {error && <div>Error: {error}</div>}
    </div>
  );
};

export default UpdateUser;
