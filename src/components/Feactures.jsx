import React from 'react'

function Feactures() {
  return (
    <>
      <section className='features'>
        <div className='container'>
          <div className='wrapper'>
            <div className='gif-wrapper' >
              <img src='/lightspeed-10958_256.gif'></img>
            </div>
            <div class="curved-text-wrapper">
              <svg viewBox="0 0 600 300" class="curved-text-svg" xmlns="http://www.w3.org/2000/svg">

                <path id="curve" d="M1 841V311C1 139.792 135.315 1 301 1C466.685 1 601 139.792 601 311V841" fill="none" />


                <text font-size="64" fill="black">
                  <textPath href="#curve" startOffset="50%" text-anchor="middle">
                    And we are Lazy-Friendly
                  </textPath>
                </text>
              </svg>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Feactures
