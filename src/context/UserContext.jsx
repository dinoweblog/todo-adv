import { createContext, useReducer, useState } from "react";
export const UserContext = createContext();

const initialState = {
  name: "",
  age: "",
  dob: "",
  residence: "",
  address: "",
  pincode: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "NAME":
      return { ...state, name: action.payload };
    case "AGE":
      return { ...state, age: action.payload };
    case "DOB":
      return { ...state, dob: action.payload };
    case "RESIDENCE":
      return { ...state, residence: action.payload };
    case "ADDRESS":
      return { ...state, address: action.payload };
    case "PINCODE":
      return { ...state, pincode: action.payload };
    default:
      throw new Error();
  }
};

// function Counter({ initialCount }) {

//   return (
//     <>
//       Count: {state.count}
//       <button
//         onClick={() => dispatch({ type: "reset", payload: initialCount })}
//       >
//         Reset
//       </button>
//       <button onClick={() => dispatch({ type: "decrement" })}>-</button>
//       <button onClick={() => dispatch({ type: "increment" })}>+</button>
//     </>
//   );
// }
export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleSubmit = () => {
    fetch(`http://localhost:3000/Users`, {
      method: "POST",
      body: JSON.stringify(state),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .catch((error) => console.log(error));
  };
  console.log(state);
  const { name, age, dob, residence, address, pincode } = state;
  console.log(state);
  return (
    <UserContext.Provider
      value={{
        name,
        age,
        dob,
        residence,
        address,
        pincode,
        dispatch,
        handleSubmit,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
