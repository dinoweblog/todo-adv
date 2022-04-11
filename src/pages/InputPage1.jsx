import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import styled from "styled-components";

const Div = styled.div`
  width: 30%;
  margin: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  padding: 40px;
  padding-top: 55px;
  background-color: white;
  border-radius: 10px;
  margin-top: 100px;

  button {
    width: 100px;

    background-color: #4fd3c4;
    border: none;
    cursor: pointer;
    border-radius: 4px;
    padding: 8px;
    font-size: 20px;
    color: white;
    transition: background-color 1s;
    :hover {
      background-color: #004369;
    }
    :focus,
    :active {
      background-color: black;
      transition: none;
    }
  }

  input {
    margin-bottom: 20px;
    height: 38px;
    border: #e5e3c9 solid 1px;
    border-radius: 4px;
    padding-left: 7px;
    box-sizing: border-box;
    transition: 0.5s;
    outline: none;
    background-color: #f7f7f7;
  }
  input:focus {
    border: 1px solid #555;
  }
  .bx {
    position: absolute;
    margin-top: -47px;
    margin-left: -35px;
    font-size: 30px;
    color: #8f8f8e;
    cursor: pointer;
    :hover {
      color: #474747;
    }
  }
`;

export const InputPage1 = () => {
  const { name, age, dob, dispatch } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <Div>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => dispatch({ type: "NAME", payload: e.target.value })}
        type="text"
      />
      <input
        placeholder="Age"
        value={age}
        onChange={(e) => dispatch({ type: "AGE", payload: e.target.value })}
        type="number"
      />
      <input
        placeholder="Date of Birth"
        value={dob}
        onChange={(e) => dispatch({ type: "DOB", payload: e.target.value })}
        type="date"
      />
      <button
        disabled={!name || !age || !dob}
        onClick={() => {
          navigate("/registration/two");
        }}
      >
        Next
      </button>
      <i
        onClick={() => {
          navigate("/");
        }}
        className="bx bx-left-arrow-alt"
      ></i>
    </Div>
  );
};
