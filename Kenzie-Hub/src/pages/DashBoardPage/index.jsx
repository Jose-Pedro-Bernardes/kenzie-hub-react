import React from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function DashBoardPage() {
  const { name } = useParams();
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  function handleForm(e) {
    e.preventDefault();

    navigate(`/dashboard/${username}`);
  }
  return (
    <>
      <div className="container"></div>
    </>
  );
}
