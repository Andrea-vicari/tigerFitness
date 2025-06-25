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
                <div className="month">
                      <ul>
                        <li className="prev">&#10094;</li>
                        <li className="next">&#10095;</li>
                        <li>August<br><span style="font-size:18px">2021</span></li>
                      </ul>
                    </div>
                    
                    <ul className="weekdays">
                      <li>Mo</li>
                      <li>Tu</li>
                      <li>We</li>
                      <li>Th</li>
                      <li>Fr</li>
                      <li>Sa</li>
                      <li>Su</li>
                    </ul>
                    
                    <ul className="days">
                      <li>1</li>
                      <li>2</li>
                      <li>3</li>
                      <li>4</li>
                      <li>5</li>
                      <li>6</li>
                      <li>7</li>
                      <li>8</li>
                      <li>9</li>
                      <li><span className="active">10</span></li>
                      <li>11</li>
                      
                    </ul>

            </div>

        </div>
    </section>

    </>
  )
}

export default Agenda
