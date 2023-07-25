import React from 'react';
import TestList from "./components/testlist";
import TestForm from "./components/testform";
import { useState } from 'react';
import './App.css';

const App = () => {
  const [yazar, setYazar] = useState("");
  const [kitap, setKitap] = useState("");
  const [tarih, setTarih] = useState("");
  const [list, setList] = useState([]);
  const [editId, setEditId] = useState(null);

  const generateRandomId = () => {
    return Math.floor(Math.random() * 1000);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const yazarMaxKarakter = 20;
    const kitapMaxKarakter = 15;
    const selectedDate = new Date(tarih);
    const currentDate = new Date();

    if (selectedDate > currentDate) {
      alert("Gelecekteki bir tarih seçilemez!");
      return;
    }

    if (yazar.length === 0) {
      alert("Yazar İsmini Giriniz!")
      return;
    }
    else if (yazar.length > yazarMaxKarakter) {
      alert("Yazar İsmi En Fazla 20 Karakterden Oluşmalıdır");
      return
    }

    if (kitap.length === 0) {
      alert("Lütfen Kitap İsmi Giriniz")
      return;
    }
    else if (kitap.length > kitapMaxKarakter) {
      alert("Kitap İsmi En Fazla 15 Karakterden Oluşmalıdır!")
      return;
    }

    const updatedList = editId !== null
      ? list.map((item) => item.id === editId ? { ...item, yazar, kitap, tarih } : item)
      : [...list, { id: generateRandomId(), yazar, kitap, tarih }];

    setList(updatedList);
    setEditId(null);
    setYazar("");
    setKitap("");
    setTarih("");
  };

  const handleDelete = (id) => {

    const updatedList = list.filter((t) => t.id !== id);

    setList(updatedList);
  };

  const handleEdit = (id) => {

    const selectedBilgiler = list.find((t) => t.id === id);

    setYazar(selectedBilgiler.yazar);
    setKitap(selectedBilgiler.kitap);
    setTarih(selectedBilgiler.tarih);

    setEditId(id);
  };

  return (
    <div className="App">
      <h1>~Kütüphane~</h1>

      <TestForm
        yazar={yazar}
        setYazar={setYazar}
        kitap={kitap}
        setKitap={setKitap}
        tarih={tarih}
        setTarih={setTarih}
        handleSubmit={handleSubmit}


      />

      <TestList
        list={list}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </div>
  );
};

export default App;
