import { useState } from "react";
import { LC, NC, SC, UC } from "./data/passwordData";

function App() {
  const [length, setLength] = useState(10);
  const [uppercase, setUppercase] = useState(false);
  const [lowercase, setLowwercase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [special, setSpecial] = useState(false);
  const [password, setPassword] = useState();
  let finalResult = "";
  let char = "";
  const generatePassword = () => {
    if (uppercase || lowercase || numbers || special) {
      console.log("ok");
      if (uppercase) char += UC;
      if (lowercase) char += LC;
      if (numbers) char += NC;
      if (special) char += SC;
      for (let i = 0; i < length; i++) {
        finalResult += char.charAt(Math.floor(Math.random() * char.length));
      }
      console.log(finalResult);
      setPassword(finalResult);
    } else {
      alert("please select atleast on option");
    }
  };
  const copyPassword = () => {
    navigator.clipboard.writeText(password);
  };
  return (
    <>
      <div className="flex h-screen bg-pink-900 w-100 ">
        <div className="w-3/12 p-6 m-auto bg-white rounded shadow">
          <div className="">
            <h3 className="mb-5 text-2xl font-bold text-center">
              {" "}
              Password Generator{" "}
            </h3>
          </div>
          <div className="flex mb-5">
            <input
              type="text"
              className="border border-gray-300 basis-3/4 ps-4"
              readOnly
              value={password}
            />
            <body
              className="p-2 px-5 font-semibold text-center bg-gray-300 cursor-pointer basis-1/4"
              onClick={copyPassword}
            >
              Copy
            </body>
          </div>
          <div className="flex items-center justify-between mb-5">
            <p className="">Length of password</p>{" "}
            <input
              className="w-16 h-12 p-2 border border-gray-300"
              type="number"
              min="10"
              max="30"
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
          </div>
          <div className="flex justify-between mb-5">
            <p className="">Allow Uppercase Letter</p>{" "}
            <input
              type="checkbox"
              value={uppercase}
              onClick={() => setUppercase(!uppercase)}
            />
          </div>
          <div className="flex justify-between mb-5">
            <p className="">Allow Lowercase Letter</p>{" "}
            <input
              type="checkbox"
              value={lowercase}
              onClick={() => setLowwercase(!lowercase)}
            />
          </div>
          <div className="flex justify-between mb-5">
            <p className="">Allow Numbers</p>{" "}
            <input
              type="checkbox"
              value={numbers}
              onClick={() => setNumbers(!numbers)}
            />
          </div>
          <div className="flex justify-between mb-5">
            <p className="">Allow Special Character</p>{" "}
            <input
              type="checkbox"
              value={special}
              onClick={() => setSpecial(!special)}
            />
          </div>
          <div>
            <button
              className="w-full p-2 text-xl text-center text-white bg-pink-600 border-2"
              onClick={generatePassword}
            >
              Generate Password
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
