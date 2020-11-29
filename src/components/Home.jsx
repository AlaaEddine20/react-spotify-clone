import React from "react";
// import { Container, Nav, Row } from "react-bootstrap";
import Sidebar from "./Sidebar";
// import Navbar from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Image } from "react-bootstrap";

class Home extends React.Component {
  state = {
    albums: [],
    loading: true,
  };

  async componentDidMount() {
    const getAlbum = await fetch(
      "https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem",
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "7058b459femsh8bbc3e5e09ff45bp16ae10jsnaa8151340a4c",
          "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        },
      }
    );
    const data = await getAlbum.json();
    this.setState({ albums: data, loading: false });
    console.log(data);
  }

  render() {
    const { albums, loading } = this.props;
    return (
      <div className="Home">
        {/* <Navbar /> */}
        <div className="main-page">
          {loading ? (
            <h4>{loading}</h4>
          ) : (
            <>
              {albums.map((album) => (
                <Col>
                  <Image src={album.album.cover} />
                </Col>
              ))}
            </>
          )}
        </div>
        <Sidebar />
      </div>
    );
  }
}

export default Home;
