import React, { useState } from "react"

function Say (){
    const [massage , setmassage] = useState();
    const onClickEnter = () => setmassage('안녕하세요');
    const onClickLive = () => setmassage('안녕히계세요');

    return (
        <div>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLive}>퇴장</button>
            <h1>{massage}</h1>
        </div>
    )
}

export default Say;

