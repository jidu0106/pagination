import { useEffect, useState } from "react";
import "./App.css";
import Page from "./component/Page";
import { data } from "./data";
const itemsPerPage = 10;
function App() {
  let [pageData, setPageData] = useState([]);
  let noOfPages = Math.ceil(data.length / itemsPerPage);
  let buttons = [];
  for (let i = 1; i < noOfPages; i++) {
    buttons.push(
      <button
        name={i}
        onClick={(e) => {
          let pageNo = parseInt(e.target.name);
          let startIndex = itemsPerPage * pageNo;
          setPageData(data.slice(startIndex, startIndex + itemsPerPage));
        }}
      >
        {i}
      </button>
    );
  }

  useEffect(() => {
    setPageData(data.slice(0, itemsPerPage));
  }, []);

  return (
    <div className="App">
      <Page data={pageData}></Page>
      {buttons}
    </div>
  );
}

export default App;
