import { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export const Users = () => {
  const Div = styled.div`
    width: 60%;
    margin: auto;
    margin-top: 40px;
    div {
      margin: 20px 0;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      i {
        font-size: 30px;
        cursor: pointer;
        margin-right: 40px;
        color: white;
        transition: 0.5s;
        :hover {
          color: tomato;
        }
      }
    }
    #users {
      font-family: Arial, Helvetica, sans-serif;
      border-collapse: collapse;
      width: 100%;
    }
    #users td,
    #users th {
      border: 1px solid #ddd;
      padding: 8px;
    }

    #users tr:nth-child(even) {
      /* background-color: #f2f2f2; */
    }

    #users th {
      padding-top: 12px;
      padding-bottom: 12px;
      text-align: left;
      background-color: #00c897;
      color: white;
    }
  `;

  const [data, setData] = useState([]);
  const Navigate = useNavigate();
  useEffect(() => {
    showUsers();
  }, []);

  const showUsers = () => {
    fetch("http://localhost:3000/Users")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <Div>
      <div>
        <i
          onClick={() => {
            Navigate("/");
          }}
          class="bx bxs-home"
        ></i>
        <h1>Users Details</h1>
      </div>

      <table id="users">
        <thead>
          <tr>
            <th>S.N.</th>
            <th>Name</th>
            <th>Age</th>
            <th>Date of Birth</th>
            <th>Residence</th>
            <th>Address</th>
            <th>Pincode</th>
          </tr>
        </thead>
        <tbody>
          {data.map((e) => (
            <tr key={e.id}>
              <td>{e.id}</td>
              <td>{e.name}</td>
              <td>{e.age}</td>
              <td>{e.dob}</td>
              <td>{e.residence}</td>
              <td>{e.address}</td>
              <td>{e.pincode}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Div>
  );
};
