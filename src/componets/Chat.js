import './chatbox.css';
import { useState } from 'react';
import React from 'react'
import axios from "axios"

export default function Chat() {

    const config ={
        headers:{
            Authorization:`Bearer ${`EAATl8Sl6kWIBAFGtOxA3MpKaa36nrmqL1xi1vEqPZCKBjifqtiaQR4hUkB6Gq54PDi7HzZCsdGroFEIUmryj82XcrIuctoOKC8Ok0TG1C5Y9eNQO40JgKPU47ft5ZB9UoYMsxi4oE6CMxtX4iKXIzVrm3F8a8nZB9v7i0fg0HkGjhPFXvKakFMWghlKVwpmXZA7ekJH0s715OYT7IOuOA`} 
            `} //paste your token here
    };
    const [message,setMessage]= useState("")
    const [text,setText]= useState([])
        const handleTr =(e)=>{
        e.preventDefault();
        const data ={message}
        if(message){
            setText((li)=>[...li, data])
            setMessage("")
        }
        axios.post(
            'https://graph.facebook.com/v13.0/104553042290610/messages',{
                "messaging_product":"whatsapp",
                "to":"92300000000", //paste your number here
                "type":"text",
                "text":{
                    "preview_url":false,
                    "body":`${message}`
                }
            },
            config
        ).then((resp)=>{
            console.log(resp.data)
        }).catch((err)=>{
            console.log(err)
        })
    }

  return (
<>
<div className='msger-chat'>
    {
        text.map((itm)=>{
            return ( 
            <>
            <div
            className="msg-img"
            style={{
              backgroundImage:
                "url(back.jpg)"
            }}
          />
          <div className="msg-bubble">
            <div className="msg-info">
              <div className="msg-info-name">Sender</div>
            </div>
            <div className="msg-text">
              {itm.message}
            </div>
          </div>
          
          </>
            )
        })
    }


  {/* <div className="msg right-msg">
    <div
      className="msg-img"
      style={{
        backgroundImage:
          "url(back.jpg)"
      }}
    />
    <div className="msg-bubble">
      <div className="msg-info">
        <div className="msg-info-name">Reciver</div>
      </div>
      <div className="msg-text">msg here</div>
    </div>
  </div> */}
  <form  onSubmit={handleTr} className="msger-inputarea">
    <input
    value={message}
      type="text"
      name='message'
      className="msger-input"
      placeholder="Enter your message..."
      onChange={(e)=>setMessage(e.target.value)}
    />
    <button type="submit" className="msger-send-btn">
      Send
    </button>
  </form>
  </div>
</>

    
  )
}

