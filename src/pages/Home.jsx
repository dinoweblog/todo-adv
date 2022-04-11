import { useNavigate } from "react-router-dom";
import styled from "styled-components";

 const Div = styled.div`
   width: 60%;
   margin: auto;
   text-align: center;
   div {
     display: flex;
     justify-content: space-around;
     margin-top: 60px;
     border: dashed green 1px;
     border-radius: 8px;
     padding: 50px;
   }
   button {
     background-color: tomato;
     border: none;
     cursor: pointer;
     border-radius: 5px;
     padding: 10px;
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

   .button2 {
     background-color: #00c897;
   }
 `;


export const Home = () => {
  const Navigate = useNavigate();
 
  return (
    <Div>
      <h1>Welcome</h1>

      <div>
        <button
          onClick={() => {
            Navigate("/registration/one");
          }}
        >
          Enter User Details
        </button>
        <button
          className="button2"
          onClick={() => {
            Navigate("/users");
          }}
        >
          Show User Details
        </button>
      </div>
    </Div>
  );
};
