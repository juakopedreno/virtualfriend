import React, { useEffect, useState } from "react";
import "./index.css";
import Slider from "./Components/slider";
import Home from "./Components/home";
import "bootstrap/dist/css/bootstrap.min.css";
import ChatSection from "./Components/ChatSection";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [gender, setGender] = useState("male");
  const [girlName, setGirlName] = useState("");
  const [numberJealousy, setNumberJealousy] = useState(2);
  const [numberLoving, setNumberLoving] = useState(3);
  const [showReplicaForm, setShowReplicaForm] = useState(false);
  const [response, setResponse] = useState([]);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const onSubmit = async () => {
    setLoading(true);
    if (message && message.length) {
      setResponse((oldRes) => [...oldRes, { message, myMsg: true }]);
    }
    setMessage("");
    await fetch("http://localhost:3001", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message, girlName, numberJealousy, numberLoving }),
    })
      .then((res) => res.json())
      .then((data) => {
        setIsChatOpen(true);
        setResponse((oldRes) => [
          ...oldRes,
          { message: data.message, myMsg: false },
        ]);
      });
    setLoading(false);
  };
  useEffect(() => {
    console.log("dfdsfdfdsf");
    setResponse([]);
  }, []);

  useEffect(() => {
    console.log("response", response);
  }, [response]);
  return (
    <>
      {!isChatOpen && !showReplicaForm && (
        <Home createYourReplika={setShowReplicaForm}></Home>
      )}
      {!isChatOpen && showReplicaForm && (
        <Slider
          gender={gender}
          setGender={setGender}
          girlName={girlName}
          setGirlName={setGirlName}
          numberJealousy={numberJealousy}
          setNumberJealousy={setNumberJealousy}
          numberLoving={numberLoving}
          setNumberLoving={setNumberLoving}
          handleSubmit={onSubmit}
          loading={loading}
        />
      )}
      {isChatOpen && (
        <ChatSection
          handleSubmit={onSubmit}
          message={message}
          setMessage={setMessage}
          response={response}
        />
      )}
    </>
  );
};
export default App;
