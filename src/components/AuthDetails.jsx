import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut()
      .then(() => {
        console.log("Signed Out Successfully");
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div>
        <h1>
          {authUser ? (
            <>
              <p>{`Signed In as ${authUser.email}`}</p>{" "}
              <button onClick={userSignOut}>Sign Out</button>
            </>
          ) : (
            <p>Not Signed In</p>
          )}
        </h1>
      </div>
    </>
  );
};

export default AuthDetails;
