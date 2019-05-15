import React, { useState ,useEffect  } from 'react';



function useStateHooks(){

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
  
    const onSubmit = e => {
      e.preventDefault();
      alert(`${name} (${description})`);
      setName('');
      setDescription('');
    };
    
    useEffect(()=>{
        console.log('use Effect');
    });
    return (
      <form onSubmit={onSubmit}>
        <input
          placeholder="이름"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          placeholder="설명"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <button type="submit">확인</button>
      </form>
    );
}


export default useStateHooks;

