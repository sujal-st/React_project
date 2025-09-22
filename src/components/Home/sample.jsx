import React, { useState } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'
function sample() {
    // const [status,setStatus] =useState([])
    // const [ishidden, setHidden] = useState(true)
    const [hiddenStatus, setHiddenStatus] = useState([true, true])
    const ques = [
        { id: 1, title: "abc", descrip: "acss",status:hiddenStatus},
        { id: 2, title: "ab", descrip: "css",status:hiddenStatus}
    ]
    const changestatus = (index) => {
        const newstate = [...hiddenStatus]
        newstate[index]=!newstate[index]
        setHiddenStatus(newstate)
    }
    return (
        <div className='flex flex-col justify-center w-1/2 border mx-auto'>
            {ques.map((e, key=e.id) => {
                return (
                    <div key={key}>
                        {hiddenStatus[key]?
                        <div className='flex items-center justify-between px-4 w-full'>
                            <div>
                                {e.title}
                            </div>
                            <FaPlus className='cursor-pointer' onClick={()=>{changestatus(key)}} />
                        </div>
                        :
                        <div className='flex items-center justify-between px-4 w-full'>
                            <div>
                                {e.title}
                            </div>
                            <FaMinus className='cursor-pointer' onClick={()=>{changestatus(key)}} />
                        </div>
                        }
                        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${hiddenStatus[key] ? 'max-h-0 opacity-0' : 'max-h-40 opacity-100'}`}>{e.descrip}</div>
                    </div>
                )
            })}


        </div >
    )
}

export default sample
