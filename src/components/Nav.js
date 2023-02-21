import React from "react";
import { useState } from "react";

function Nav() {
     const [input, setInput] = useState({
          name: "",
          email:""
     })
     function handleChange(e) {
          console.log(e.target.value);
     }
     
     return (
          <>
     <nav class="navbar navbar-light bg-light">
  <a class="navbar-brand">PEOPLE DETAILS</a>
  <form class="form-inline" >
    <input class="form-control mr-sm-2" type="text" onChange={handleChange}  name="userName" value={input.name}/>
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit" onSubmit={()=>{}}>ADD</button>
  </form>
</nav>

          </>
     )
}
export default Nav;