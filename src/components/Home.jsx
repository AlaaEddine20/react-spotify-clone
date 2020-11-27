import React from "react";
// import { Container, Nav, Row } from "react-bootstrap";
import Sidebar from "./Sidebar";
// import Navbar from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

class Home extends React.Component {
  state = {
    linkinPark: [],
  };

  componentDidMount() {
    this.fetchSongs();
  }
  fetchSongs = () => {
    fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=linkin%20park", {
      method: "GET",
      headers: {
        "x-rapidapi-key": "7058b459femsh8bbc3e5e09ff45bp16ae10jsnaa8151340a4c",
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
      },
    })
      .then((response) => response.json())
      .then(
        (resp) => this.setState({ linkinPark: resp.data.title }),
        () => console.log(this.state.linkinPark)
      )
      .catch((err) => {
        console.error(err);
      });
  };
  render() {
    return (
      <div className="Home">
        {/* <Navbar /> */}
        <Sidebar />
      </div>
    );
  }
}

export default Home;
