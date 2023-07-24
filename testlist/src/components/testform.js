import React from "react";

const TestForm = ({ yazar, setYazar, editId, kitap, setKitap, tarih, setTarih, handleSubmit }) => {
  return (

    <form className="testform" onSubmit={handleSubmit}>
      <label>Yazar İsmi:
        <input
          type="text"
          value={yazar}
          onChange={(e) => setYazar(e.target.value)} 
          placeholder="Yazar İsmini Giriniz"
          maxLength={21}
        
        />
      </label><br /><br />
      <label>Kitap İsmi:
        <input
          type="text"
          value={kitap}
          onChange={(e) => setKitap(e.target.value)}
          placeholder="Kitap İsmini Giriniz"
          maxLength={16}

        />
      </label><br /><br />
      <label>Basım Tarihi:
        <input
          type="date"
          value={tarih}
          onChange={(e) => setTarih(e.target.value)}
        />
      </label><br /><br />
      <button type="submit">Kaydet</button>
    </form>
  );
};

export default TestForm;