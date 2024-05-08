import { useState,useRef } from "react";
function Form({onClose}) {
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
        window.alert("Kayıt gerçekleşti");
        // İşlem başarılıysa gerekli adımları buraya ekleyebilirsiniz.
      } else {
        console.error('Failed to save employee.');
        window.alert("Kayıt gerçekleşmedi");
        // İşlem başarısızsa kullanıcıya bir hata mesajı gösterebilirsiniz.
      }
    } catch (error) {
      console.error('Error while saving employee:', error);
    }
  };

  return (
    <div>
      <form>
        <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroup-sizing-default">İsim:</span>
        <input type="text" className="form-control" name="name" required value={formData.name} onChange={handleChange}/>
        </div>

        <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroup-sizing-default">Soy İsim:</span>
        <input type="text" className="form-control"  name="surname" required value={formData.surname} onChange={handleChange}/>
        </div>

        <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroup-sizing-default">Departman:</span>
        <input type="text" className="form-control" name="department" required value={formData.department} onChange={handleChange} />
        </div>

        <div className="input-group mb-3">
        <div className="input-group-text">
          <input type="checkbox" className="form-check-input" name="isReferance" required checked={formData.isReferance} onChange={handleChange}/>
        </div>
        <label className="form-control">Referansı var mı?</label>
        </div>

        <button type="button" className="btn btn-secondary w-20 h-30" onClick={handleSave}>Kaydet</button>
      </form>
    </div>
  );
}

export default Form;