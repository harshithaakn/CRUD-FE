import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Table from "@mui/material/Table";

function Content() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://63dcc99d367aa5a7a401ee2e.mockapi.io/peoples")
      .then((res) => {
        // console.log(res.data);
        setData(res.data);
      });
  }, []);
  return (
    <div>
      <table
        class="table table-striped"
        style={{ width: "50%", margin: "auto 25%" }}
      >
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>email</th>
            <th>view</th>
            <th>edit</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((people) => (
            <tr>
              <td>{people.id}</td>
              <td>{people.name}</td>
              <td>{people.email}</td>
              <td>
                <button>
                  <i class="fa fa-eye" aria-hidden="true"></i>
                </button>
              </td>
              <td>
                <button>
                  <i class="fa fa-pencil" aria-hidden="true"></i>
                </button>
              </td>
              <td>
                <button>
                  <i class="fa fa-trash" aria-hidden="true"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Content;
