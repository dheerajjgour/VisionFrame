import React from 'react'
import ModelViewer from '../ModeViewer';
import Spinner from '../Spinner';
function Model() {
  return (
    <>
      <section className='modelviewer'>
        <div className='container'>
          <div className='row-1'>
            <ModelViewer />
          </div>
          <div className='row-2'>
            <div className='col-1'>
              <h3>Lorem ipsum dolor</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className='row-3'>
            <div className='col-1'  >
              <h3>Lorem ipsum dolor</h3>
              <p style={{
    marginBottom:"50px",       
  }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
              </p >
              <Spinner text="Lorem ipsum"/>
            </div>
          </div>
           <div className='row-4'>
            <div className='col-1'>
              <h3>Lorem ipsum dolor</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Model
