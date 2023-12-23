import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import { useLocation } from "react-router-dom";
const socket = io.connect("http://localhost:3001");

export const ChatPage = () => {
  const { search } = useLocation();
  const [params, setParams] = useState(null);
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    const searchParams = Object.fromEntries(new URLSearchParams(search));
    setParams(searchParams);
    socket.emit("join", searchParams);
  }, [search]);
  useEffect(() => {
    socket.on("message", ({ data }) => {
      setMessages((state) => [...state, data]);
      alert(messages[0].userLogin.name + " " + messages[0].message);
    });
  }, []);
  console.log(messages);
  return <div>ChatPage</div>;
};
