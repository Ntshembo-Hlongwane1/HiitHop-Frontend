import axios from "axios";
import React from "react";
import Navigation from "../Components/Navigation.component";

export type Video = {
  name: string;
  description: string;
  video: string;
  _id: string;
};

const Playlist = () => {
  const [playlist, setPlaylist] = React.useState<Array<Video>>([]);
  React.useEffect(() => {
    const base = {
      dev: "http://localhost:5000/api/playlist",
      prod: "https://hiithop-server.herokuapp.com/api/playlist",
    };
    const url = process.env.NODE_ENV === "production" ? base.prod : base.dev;

    const token = localStorage.getItem("token");

    axios
      .get(url, { headers: { token: token } })
      .then((response) => {
        setPlaylist(response.data.data.playlist);
        console.log(response);
      })
      .catch((error) => {
        alert(
          "Upgrade to premium to add videos to playlist, If you have premium try again later or contact support"
        );
      });
  });

  const remove = (id: string) => {
    const base = {
      dev: "http://localhost:5000/api/video/playlist",
      prod: "https://hiithop-server.herokuapp.com/api/video/playlist",
    };
    const token = localStorage.getItem("token");

    const url = process.env.NODE_ENV === "production" ? base.prod : base.dev;
    axios
      .delete(url, {
        headers: {
          token: token,
          id: id,
        },
      })
      .then((response) => {
        window.location.reload();
      })
      .catch(() => {
        alert("Network Error: Failed to remove video please try again later");
      });
  };

  return (
    <div>
      <Navigation />
      {playlist.length === 0 ? null : (
        <h3
          style={{
            textTransform: "uppercase",
            textAlign: "center",
            marginTop: "5rem",
            letterSpacing: "3px",
            fontSize: "2.5rem",
          }}
        >
          Your Playlist
        </h3>
      )}
      <div>
        {playlist.length === 0 ? (
          <div>
            <h1
              style={{
                textAlign: "center",
                marginTop: "10rem",
                letterSpacing: "3px",
                textTransform: "uppercase",
              }}
            >
              Playlist Empty
            </h1>
          </div>
        ) : (
          <div id="video-container">
            {playlist.map((video, idx) => {
              return (
                <div key={video._id} className="video">
                  <div className="video__container">
                    <iframe
                      title={video.name}
                      src={video.video}
                      width="640"
                      height="564"
                      frameBorder="0"
                      allow="autoplay; fullscreen"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div>
                    <h3>{video.name}</h3>
                    <p>{video.description}</p>
                    <button
                      onClick={() => remove(video._id)}
                      style={{ padding: ".4rem 1rem", cursor: "pointer" }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Playlist;
