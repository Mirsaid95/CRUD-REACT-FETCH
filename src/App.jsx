import { useEffect, useState } from "react";
import "./App.css";
import { request } from "./components/config/request";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData();
  }, []);

  const getData = () => {
    request.get("/todos").then((res) => setData(res.data));
  };

  return <></>;
}

export default App;
