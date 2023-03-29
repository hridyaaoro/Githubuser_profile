import React, { useState }  from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import DisplayTable from "./DisplayTable";
import Nav from 'react-bootstrap/Nav';

  const Profile = () => {
  const [data, setData] = useState({});
  const [username, setUsername] = useState("");
  const [repositories, setRepositories] = useState([]);

  const onChangeHandler = e => {
    setUsername(e.target.value);
  };

  const submitHandler = async e => {
    e.preventDefault();

    const profile = await fetch(`https://api.github.com/users/${username}`);
    const profileJson = await profile.json();
    // console.log(profileJson);

    const repositories = await fetch(profileJson.repos_url);
    const repoJson = await repositories.json();
    console.log(repoJson);

    if (profileJson) {
      setData(profileJson);
      setRepositories(repoJson);
    }
  };
  return (
    <>
    <div style={{ padding:5}}>
        <Navbar bg="light" expand="lg">
        <Container fluid>
        <Form className="d-flex">
                
                <input className="d-flex me-2" placeholder="search username here..." type="text" size="50" value={username} onChange={onChangeHandler}/>
                <Button variant="dark" onClick={submitHandler}>Search</Button>
                <Nav.Link  href="https://github.com/hridyaaoro" style={{color: 'black',fontSize: '20px',position: "absolute", top: "0", right: "0"}}>Developed by- Hridya A</Nav.Link>
            </Form>
        </Container>
        </Navbar>
    </div>
    <DisplayTable data={data} repositories={repositories} />
    </>
  )
}

export default Profile;

// import React, { useState } from "react";
// import DisplayTable from "./DisplayTable";




//   return (
//     <>
      
//         <div style={{ padding: 20 }}>
//           <div >
//            <input placeholder="search username here..." type="text" size="50" value={username} onChange={onChangeHandler}/>
//            <button className="btn btn-info" type="submit" onClick={submitHandler}>Search</button>
//           </div>
                  
//         </div>
//         <DisplayTable data={data} repositories={repositories} />
//     </>
//   );
// };
// export default Profile;
