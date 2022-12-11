import React, { useState, useEffect } from "react";
import axios from "axios";
function Penduduk() {
  const serverHost = "http://localhost:5000";
  const [nama, setNama] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append("nama", nama);
    axios.post(serverHost, formData).then(() => {
        setNama(nama)
    });
  }
  return (
    <div>
      <h1>{nama}</h1>
      <form onSubmit={(event) => handleSubmit(event)}>
        <input
          type={"text"}
          value={nama}
          onChange={(event) => setNama(event.target.value)}
        />
        <input style={{ marginTop: "10px" }} type={"submit"} value={"Simpan"} />
      </form>
    </div>
  );
}
export default Penduduk;
