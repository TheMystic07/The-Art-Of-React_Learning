import React, { useState, useCallback , useEffect,useRef } from 'react';

function App() {
  const [len, setLen] = useState(8);
  const [num, setNum] = useState(false);
  const [char, setChar] = useState(false);
  const [pass, setPass] = useState('')

//useRef hook
const passRef = useRef(null);


  const handleNumChange = useCallback((e) => {
    setNum((prev) => !prev);
  }, []);

  const handleCharChange = useCallback((e) => {
    setChar((prev) => !prev);
  }, []);

  const copyToClipboard = useCallback(()=>{
    passRef.current?.select();
    passRef
    window.navigator.clipboard.writeText(pass)
  },[pass])

  const passGen = useCallback(() => {
    let passw = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if (num) str += '1234657890';
    if (char) str += '!@#$%^&*(){}[]_+-=<>/؟';

    for (let i = 1; i <= len; i++) {
      const c = Math.floor(Math.random() * str.length + 1);
      passw += str.charAt(c);
    }

    setPass(passw);
  }, [len, num, char, setPass]);

  useEffect(() => {
    passGen();
  }, [passGen,num,char,len]);

  return (
    <>
      <div className='w-full text-3xl text-center max-w-md mx-auto shadow-lg rounded-md  px-5 my-10 text-orange-400 bg-gray-800'>
        Password Generator
        <div className="flex  shadow-md rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={pass}
            className='outline-none w-full  py-2 px-1 my-2'
            placeholder='Password'
            readOnly
            ref={passRef}
          />
          <button 
          onClick={copyToClipboard}
          className='outline-none bg-green-400 text-white px-3 py-1 text-lg shrink-0'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={6}
              max={50}
              value={len}
              className='cursor-pointer'
              onChange={(e) => {
                setLen(parseInt(e.target.value));
              }}
            />
            <label htmlFor="">Length:{len}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={num}
              id="numberInput"
              onChange={handleNumChange}
            />
            <label htmlFor="">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={char}
              id="charnput"
              onChange={handleCharChange}
            />
            <label htmlFor="">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
