import React from 'react'
import './GetInTouch.scss'
import {Button} from '@material-ui/core'
import { useState } from 'react'
//import { useMutation } from 'react-query' 

export default function GWS() {
    const schema = {name:'',email:'',subject:'',message:''}
    const [get,setGet] = useState(schema)

    const handleGet = (e)=>{
        setGet({
            ...get,[e.target.name]:e.target.value
        })
    }
    const [status,setStatus] = useState({})
    const getIn = ()=>{
        return(
            fetch('/api/getInTouch',{
                method:'POST',
                body: JSON.stringify(get),
                headers: {
                    'Content-Type': 'application/json'
                  },
            }).then(res=>res.json()).then(res=>{
                setStatus(res)
            }).catch(err => {
                console.log(err);
            })
        )
    }
    //const [getInTouch,meta] = useMutation(getIn)


    return (
        <div className="get" >
            <div className="in" >
               <h1>Get In <span style={{fontWeight:'bold'}} >Touch</span></h1>
               <h3>Contact Us if any queries. We will get back to you Soon!!</h3>
               <div style={{margin:'1em auto',display:'flex',justifyContent:'center'}} >
                     <form onSubmit={(e)=>{e.preventDefault();getIn()}} >
                         <div className="form_get">
                         <input type="text" name="name" onChange={handleGet} placeholder="Name" required />
                         <input type="email" name="email" onChange={handleGet} placeholder="Email" required />
                         <input type="text" name="subject" onChange={handleGet} placeholder="Subject" />
                         <textarea className="t_area" name="message" onChange={handleGet} placeholder="Message" required ></textarea>
                         </div>
                         <Button variant="contained" type="submit" color="inherit" className="btn4" >Send Message</Button>
                     </form>
               </div>
               {status.status===200?<div style={{color:'green',textAlign:'center',fontWeight:'bold'}} > {status.message} </div>:null}
            </div>
        </div>
    )
}