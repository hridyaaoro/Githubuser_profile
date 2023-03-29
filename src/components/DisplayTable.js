import React from "react";
import Table from 'react-bootstrap/Table';

const DisplayTable = ({ data, repositories }) => {

  return (
    <>
    <Table striped bordered hover variant="dark">
    <thead>
      <tr>
        <th>Name</th>
        <th>Avatar</th>
        <th>Location</th>
        <th>Bio</th>
        <th>Repositories</th>
      </tr>
    </thead>
    <tbody >
      <tr>
        <td>{data.name}</td>
        <td>{!data.avatar_url ? (" ") : (<img src={data.avatar_url} alt={data.avatar_url}/>)}</td>
        <td>{data.location}</td>
        <td>{data.bio}</td>
        <td>{repositories.map(repo => (
              <div  key={repo.name}>
                <div >
                  <i ></i>
                  <div >
                    <a href={repo.html_url} className="header" target="_blank">
                      {repo.name}
                    </a>
                  </div>
                </div>
              </div>
            ))}</td>
      </tr>
      
    </tbody>
  </Table>
  </> 
  );
};
export default DisplayTable;
