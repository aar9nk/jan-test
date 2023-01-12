import { useState } from "react";

export default function App() {
  const [text, setText] = useState('');
  const [input, setInput] = useState('');

  const getData = async () => {
    const response = await fetch(`https://aztro.sameerkumar.website/?sign=${input}&day=today`, {
      method: 'POST'
    });
    const data = await response.json();

    return data.description;
  };

  return (
    <>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z"
        crossOrigin="anonymous"
      />

      <div id="container" className="container">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "24px",
          }}
        >
          <h1>Today's horoscope</h1>
          <p id="date"></p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p>Today we are learnign about javascript...</p>
          <input type="text" className="input" id="input" onChange={(e) => {
            setInput(e.target.value);
          }} />
          <button id="button" className="btn btn-primary" onClick={async () => {
            const serverResponse = await getData();
            setText(serverResponse);
          }}>
            Click to get todays horroscope
          </button>
          <p id="content">{text}</p>
        </div>
      </div>

      <script
        src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
        crossOrigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
        integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN"
        crossOrigin="anonymous"
      ></script>
      <script
        src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"
        integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV"
        crossOrigin="anonymous"
      ></script>
    </>
  );
}
