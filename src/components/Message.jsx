import React, { useState } from "react";
import {toast} from 'react-hot-toast'

const Message = ({ name }) => {
  const [message, setMessage] = useState("");

  const [focus, setFocus] = useState(false);

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    const res = await fetch("/message", {
      method: "POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        message
      }),
     
      
    });
    console.log(res);

    if(res.status === 200) {
        toast.success('Message sent')
    }
    return toast.error('Message not sent');
  };
  return (
    <div id="contact" className="my-28 px-[3rem]">
      <h4 className="flex justify-center text-[2rem] font-bold">{name}</h4>
      <form action="" onSubmit={handleSendMessage} className="mt-2">
        <div className={`flex flex-col gap-4 mt-8`}>
          <div className={`relative flex flex-col  gap-4`}>
            <label
              htmlFor=""
              className={`absolute text-sm font-medium ${
                focus || message.trim() !== ""
                  ? "text-blue-500 -top-1 left-2 text-[0.69rem]"
                  : "top-[0.85rem] text-gray-400 left-4"
              } 
                                            transition-all duration-300 pointer-events-none`}
            >
              Message*
            </label>
            <textarea
              style={{ height: "150px" }}
              onFocus={() => setFocus(true)}
              onBlur={(e) => e.target.value.trim() === "" && setFocus(false)}
              placeholder={`${focus ? "send me a message" : ""}`}
              className={`${
                focus
                  ? "bg-[#2a2252] outline-none p-3 border-b-[2.5px] border-purple-500 resize-none rounded-md"
                  : "resize-none bg-transparent border-[1.5px] outline-none border-purple-500 rounded-md p-3"
              }`}
              name="message"
              id=""
              cols="30"
              rows="10"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button
            className="rounded-md p-3 font-semibold text-lg bg-gradient-to-r from-purple-500 to-indigo-600"
            type="submit"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Message;
