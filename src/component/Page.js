import React from "react";
import { Table } from "react-bootstrap";

function Page({ data }) {
  let rows = data.map((value) => {
    return (
      <tr>
        {/* <td>{value.userId}</td> */}
        <td>{value.id}</td>
        <td>{value.title}</td>
        <td>{value.body}</td>
      </tr>
    );
  });

  return (
    <div className="App">
      <Table striped bordered hover>
        <thead>
          <tr>
            {/* <th>User Id</th> */}
            <th>Id</th>
            <th>title</th>
            <th>body</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </div>
  );
}

export default Page;
