import React from "react";
// import Navbar from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Image, Col } from "react-bootstrap";

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
    console.log(data);
    this.setState({ albums: data, loading: false });
  }

  render() {
    const { loading } = this.state;
    return (
      <div className="Home">
        {/* <Navbar /> */}
        <div className="main-page row mt-5">
          {loading ? (
            <h4>{loading}</h4>
          ) : (
            <>
              {this.state.albums.data.map((album, key) => (
                <Row className="albums-wrapper mx-2 my-3" key={key}>
                  <Col className="item-wrapper">
                    <Image className="album-cover" src={album.album.cover} />
                    <h4 className="d-flex justify-content-center">
                      {album.album.title}
                    </h4>
                  </Col>
                </Row>
              ))}
            </>
          )}
        </div>
      </div>
    );
  }
}

export default Home;
