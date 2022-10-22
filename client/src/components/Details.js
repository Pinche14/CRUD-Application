import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import DeleteOutlineIcon from '@mui/icons-material';
import CreateIcon from '@mui/icons-material/Create';
const Details = () => {
  return (
    <div className='container mt-3'>
        <h1 style={{fontWeight:400}}>Welcome Shubham Pathak</h1>

        <Card sx={{maxWidth:600}}>
            <CardContent>
            <div className='add-btn'>
              <button className='btn btn-primary mx-2'>Create</button>
              <button className='btn btn-danger'>Delete</button>
            </div>
              <div className='row'>
                <div className='left_view col-lg-6 col-md-6 col-12'>
                  <img src='/profile.png' style={{width:50}} alt="profile"/>
                  <h3 className='mt-3'>Name: <span>Shubham Pathak</span></h3>
                  <h3 className='mt-3'>Age: <span>21</span></h3>
                  <p className='mt-3'>Email: <span>shubham70254@email.com</span></p>
                  <p className='mt-3'>Occupation: <span>Web Developer</span></p>
                </div>
                <div className='right_view col-lg-6 col-md-6 col-12'>
                  <p className='mt-5'>mobile: <span>+91 9376442394</span></p>
                  <p className='mt-3'>location: <span>Delhi</span></p>
                  <p className='mt-3'>Description: <span></span>FrontEnd Developer</p>
                </div>
              </div>
            </CardContent>
        </Card>  
    </div>
  )
}

export default Details