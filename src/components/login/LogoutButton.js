import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SGID_BACKEND_URL } from "../../config/constants";

const LogOutButton = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const handleLogout = useCallback(() => {
    setIsLoading(true);
    fetch(`https://cors-anywhere.herokuapp.com/${SGID_BACKEND_URL}/api/logout`, {
      credentials: "include",
    })
      .then(() => {
        navigate("/");
      })
      .catch((e) => {
        setIsLoading(false);
        if (e instanceof Error) {
          return alert("ERROR");
        }
      }, []);
  });
  return (<button onClick={handleLogout}>Log out</button>
  );
};

export default LogOutButton;
