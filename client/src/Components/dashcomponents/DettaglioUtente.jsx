import React from 'react'
import { useSelector } from 'react-redux'

function DettaglioUtente() {

    const themeType = useSelector((state) => state.counter.value)

  let bgType, textType, darkType;

  themeType == "ligth" ? bgType = "bg-ligth" : bgType = "bg-black"
  themeType == "ligth" ? textType = "primary" : textType = "text-bg-dark"
  themeType == "ligth" ? darkType = "" : darkType = "bg-dark"

  return (
    <>
    <section id="team" className={"team pb-5" + " " + bgType + " " + textType}>
        <div className="container mb-2">

            <div>
                <h2 className="section-title">Team</h2>
                <p className='mb-5 text-center'>We are a small team with great skills.</p>
                <p className='text-center mb-5'>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>

            </div>

            <div className="row">

                <div className={"col-lg-6 mb-3" + " " + bgType + " " + textType}>
                    <div className={"member d-flex align-items-start"+ " " + darkType + " " + textType}>
                        <div className="pic">
                            <img src="https://placehold.co/400x400" className="img-fluid" alt=""/>
                        </div>
                        <div className="member-info">
                        <h4 className='text-primary'>John Doe</h4>
                        <span>Chief Executive Officer</span>
                        <p>Explicabo voluptatem mollitia et repellat qui dolorum quasi</p>
                        <div className="social">
                            <a href=""><i className="bi bi-instagram"></i></a>
                            <a href=""><i className="bi bi-facebook"></i></a>
                            <a href=""> <i className="bi bi-envelope"></i> </a>
                        </div>
                        </div>
                    </div>
                </div>

                <div className={"col-lg-6 mb-3" + " " + bgType + " " + textType}>
                    <div className={"member d-flex align-items-start"+ " " + darkType + " " + textType}>
                        <div className="pic">
                            <img src="https://placehold.co/400x400" className="img-fluid" alt=""/>
                        </div>
                        <div className="member-info">
                        <h4 className='text-primary'>Jeff White</h4>
                        <span>H.R. Manager</span>
                        <p>Explicabo voluptatem mollitia et repellat qui dolorum quasi</p>
                        <div className="social">
                            <a href=""><i className="bi bi-instagram"></i></a>
                            <a href=""><i className="bi bi-facebook"></i></a>
                            <a href=""> <i className="bi bi-envelope"></i> </a>
                        </div>
                        </div>
                    </div>
                </div>

                <div className={"col-lg-6 mb-3" + " " + bgType + " " + textType}>
                    <div className={"member d-flex align-items-start"+ " " + darkType + " " + textType}>
                        <div className="pic">
                            <img src="https://placehold.co/400x400" className="img-fluid" alt=""/>
                        </div>
                        <div className="member-info">
                        <h4 className='text-primary'>Tom Reed</h4>
                        <span>Product Manager</span>
                        <p>Explicabo voluptatem mollitia et repellat qui dolorum quasi</p>
                        <div className="social">
                            <a href=""><i className="bi bi-instagram"></i></a>
                            <a href=""><i className="bi bi-facebook"></i></a>
                            <a href=""> <i className="bi bi-envelope"></i> </a>
                        </div>
                        </div>
                    </div>
                </div>

                <div className={"col-lg-6 mb-3" + " " + bgType + " " + textType}>
                    <div className={"member d-flex align-items-start"+ " " + darkType + " " + textType}>
                        <div className="pic">
                            <img src="https://placehold.co/400x400" className="img-fluid" alt=""/>
                        </div>
                        <div className="member-info">
                        <h4 className='text-primary'>Shawn Stephen</h4>
                        <span>Finance Manager</span>
                        <p>Explicabo voluptatem mollitia et repellat qui dolorum quasi</p>
                        <div className="social">
                            <a href=""><i className="bi bi-instagram"></i></a>
                            <a href=""><i className="bi bi-facebook"></i></a>
                            <a href=""> <i className="bi bi-envelope"></i> </a>
                        </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </section>

    </>
  )
}

export default DettaglioUtente
