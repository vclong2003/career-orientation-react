import { useContext, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { UserContext, UserProvider } from "../../Services/Firebase";
import styles from "./style.module.css";

export default function AdminPage() {
  return (
    <UserProvider>
      <AdminConsoleRender />
    </UserProvider>
  );
}

function AdminConsoleRender() {
  const navigate = useNavigate();
  const user = useContext(UserContext);

  if (user == null) {
    navigate("/login");
    return;
  } else if (user.email === "vclong2003@gmail.com") {
    return <Container>welcome, admin</Container>;
  } else {
    return <Container>Not admin</Container>;
  }
}
