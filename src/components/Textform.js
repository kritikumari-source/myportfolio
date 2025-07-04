import React  from 'react';
import PhotoFinal from './PhotoFinal.jpg';



export default function textform(props)
{
    return(
      <>
      {/* style={{width: '18rem', height: '18rem', top: '2rem', marginLeft: '30px'}} */}
      <section id={`image-${props.mode} bg-${props.mode}`} style={{ width: '30%', height: '10rem', borderRadius: '8px' }} >
        <div className={`card mx-2 my-4-${props.mode === 'light'? 'Dark': 'light'}`} style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}}   >
  <div className="card-body" rows="5" column="8"  style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}}  >
    {/* <h5 className="card-title">Card title</h5> */}
    {/* <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6> */}
    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
    {/* <a href="/" className="card-link">Card link</a>
    <a href="/" className="card-link">Another link</a> */}
    <img src={PhotoFinal} alt="MYPORTFOLIO" style={{ width: '35%', height: '20rem', borderRadius: '8px' }} />
    </div>
   <div className="Details my-5" style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}}   >
    <b> Name= Kriti Kumari</b>
    <b>
    <br /> phone: +91-8296137139</b>
    <b><br />Email: kritikumari75@gmail.com</b>


    <br />Thankyou for hiring me.
    
  </div>
  </div>
  </section>
  
  <section id="data" >
  
  <div className="d-flex justify-content-end" >
    <div className="card mx-6 my-8 " style={{ backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}}>
      {/* <div className="card-body"> */}
    <h5 className="card-title">Card title</h5>
    <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
</div>
{/* </div> */}
</section>

</>
    )
}

