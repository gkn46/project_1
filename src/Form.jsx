import { useState } from "react";
import "./App.css";

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    department: '',
    isReferance: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSave = async () => {
    try {
      const response = await fetch('http://employee-api.runasp.net/api/Employee', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        console.log('Employee successfully saved.');
        // İşlem başarılıysa gerekli adımları buraya ekleyebilirsiniz.
      } else {
        console.error('Failed to save employee.');
        // İşlem başarısızsa kullanıcıya bir hata mesajı gösterebilirsiniz.
      }
    } catch (error) {
      console.error('Error while saving employee:', error);
    }
  };

  return (
    <div>
      <form>
        <label>
          İsim:
          <input type="text" name="name" value={formData.name} onChange={handleChange}/>
        </label>
        <br /><br />
        <label>
          Soy İsim:
          <input type="text" name="surname" value={formData.surname} onChange={handleChange}/>
        </label>
        <br /><br />
        <label>
          Departman:
          <input type="text" name="department" value={formData.department} onChange={handleChange} />
        </label>
        <br /><br />
        <label>
          Referansı var mı?
          <input type="checkbox" name="isReferance" checked={formData.isReferance} onChange={handleChange}/>
        </label>
        <br /><br />
        <button type="button" onClick={handleSave}>Kaydet</button>
      </form>
    </div>
  );
}

export default Form;