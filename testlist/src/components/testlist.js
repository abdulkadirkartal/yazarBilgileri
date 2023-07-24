import React from "react";
const TestList = ({ list, handleDelete, handleEdit }) => {
    return (
        <ul className="testlist">
            {list.map((t) => (
                <li key={t.id}>
                    <span>Yazar : {t.yazar}</span><br/>
                    <span>Kitap Adı :{t.kitap}</span><br/>
                    <span>Basım Tarihi : {t.tarih}</span><br/>
                    <button onClick={() => handleEdit(t.id)}>Düzenle</button> 
                    <button onClick={() => handleDelete(t.id)}>Sil</button>
                </li>
            ))}
        </ul>
    );
};

export default TestList;
