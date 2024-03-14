import React, { useEffect, useState } from "react";
import { auth } from "../firebase";

const AuthDetails = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {}, []);

  return (
    <>
      <div>
        <h1>AuthDetails</h1>
      </div>
    </>
  );
};

export default AuthDetails;
