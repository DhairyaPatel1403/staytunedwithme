import React, {useState} from 'react'

export default function Navbar(props) {
    const [name, setText] = useState("Dhairya");    //Use {text} in every place we need "Enter".
    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light py-3">
  <div className="container-fluid">
    <h2 className="px-4">StayTunedWithME</h2>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">



      <form action="mailto:dpvp1403@gmail.com">
        <button type="submit" className="mx-2 btn btn-success" aria-expanded="false" data-bs-auto-close="outside">
          Contact Us
        </button>
      </form>


        <div className="dropdown">
</div>
      
      {props.searchbar ? <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-primary" type="submit">Search</button>
      </form>: ""}
    </div>
  </div>
</nav>



</>
  )
}


Navbar.defaultProps = {
  searchbar: "true"
}