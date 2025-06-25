import React from 'react'
import { useSelector } from 'react-redux'

function Agenda() {

    const themeType = useSelector((state) => state.counter.value)

  let bgType, textType, darkType;

  themeType == "ligth" ? bgType = "bg-ligth" : bgType = "bg-black"
  themeType == "ligth" ? textType = "primary" : textType = "text-bg-dark"
  themeType == "ligth" ? darkType = "" : darkType = "bg-dark"

  return (
    <>
    <section id="team" className={"Agenda pb-5" + " " + bgType + " " + textType}>
        <div className="container mb-2 mt-5">

            <div className="section-title pt-5 mt-5">
                <h2 className="section-title">Agenda</h2>
                <p className='mb-5 text-center fs-4>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
                

            </div>

            <div className="row">
                
                    
                    
                    
                    

            </div>

        </div>
    </section>

    </>
  )
}

export default Agenda
