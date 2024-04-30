import { useState } from "react";

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
    <>
      <form>
        <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroup-sizing-default">İsim:</span>
        <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange}/>
        </div>

        <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroup-sizing-default">Soy İsim:</span>
        <input type="text" className="form-control"  name="surname" value={formData.surname} onChange={handleChange}/>
        </div>

        <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroup-sizing-default">Departman:</span>
        <input type="text" className="form-control" name="department" value={formData.department} onChange={handleChange} />
        </div>

        <div className="input-group mb-3">
        <div className="input-group-text">
          <input type="checkbox" className="form-check-input" name="isReferance" checked={formData.isReferance} onChange={handleChange}/>
        </div>
        <label className="form-control">Referansı var mı?</label>
        </div>

        <button type="button" className="btn btn-secondary" onClick={handleSave}>Kaydet</button>
      </form>
    </>
  );
}

export default Form;