import axios from "axios";
import React, { useRef } from "react";

const Data = () => {
  let party_name = useRef();
  let party_logo = useRef();
  let short_code = useRef();
  function handle(e) {}

  async function submit() {
    let data = {
      party_name: party_name.current.value,
      party_logo: party_logo.current.files[0],
      short_code: short_code.current.value,
    };

    let formdata = new FormData();

    formdata.append("party_name", data.party_name);
    formdata.append("party_logo", data.party_logo);
    formdata.append("short_code", data.short_code);

    let res = await axios.post(
      "http://13.127.211.205:8000/v1/party/create_party",
      formdata
    );

    console.log(res);
  }

  return (
    <div>
      Data
      <input type="text" ref={party_name} />
      <input type="file" onChange={handle} ref={party_logo} />
      <input type="text" ref={short_code} />
      <button onClick={submit}>Submit</button>
    </div>
  );
};

export default Data;
