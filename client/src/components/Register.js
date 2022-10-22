import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

const Register = () => {

    const [inpval, setINP] = useState({
        name:"",
        email:"",
        mobile:"",
        work:"",
        add:"",
        desc:""
    })
    const setdata = (e) =>{
        console.log(e.target.value)
        const {name,value} = e.target
        setINP((preval)=>{
            return{
                ...preval,
                [name]:value
            }
        })
    }
    
    const addinpdata = async(e)=>{
        e.preventDefault();
        const {name,email,work,add,mobile,desc} = inpval;
        const res = await fetch("/register",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,email,work,add,mobile,desc
            })
        })

        const data = await res.json();
        console.log(data)

        if(res.status === 404 || !data){
            alert("error")
            console.log("error ")
        }else{
            alert("data added")
            console.log('data added')
        }
    }
    return (
        <div className='container'>
            <NavLink to="/">home</NavLink>
            <form className='mt-4'>
                <div className='row'>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputEmail1">Name</label>
                        <input type="text" value={inpval.name} onChange={setdata}  name= "name" class="form-control" id="1"/>
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" value={inpval.email}  onChange={setdata} name="email" class="form-control" id="2" aria-describedby="emailHelp"/>
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" value={inpval.password} onChange={setdata} name="password" class="form-control" id="3"/>
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Mobile</label>
                        <input type="text" value={inpval.mobile} onChange={setdata} name="mobile" class="form-control" id="4"/>
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Work</label>
                        <input type="text" value={inpval.work} onChange={setdata}  name="work" class="form-control" id="5"/>
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Address</label>
                        <input type="text" value={inpval.add}  onChange={setdata} name="add" class="form-control" id="6"/>
                    </div> 
                    <div class="mb-3 col-lg-12 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Description</label>
                        <textarea name='desc' value={inpval.desc}  className="form-control" id="" cols="30" rows="10"></textarea>
                    </div>
                    <button type="submit" onClick={addinpdata} class="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
  )
}

export default Register