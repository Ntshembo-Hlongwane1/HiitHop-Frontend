import axios from "axios";
import React from "react";
import { useHistory } from "react-router-dom";
import Navigation from "../Components/Navigation.component";
import "../Stylesheet/Pages/Videos.scss";

export type Video = {
  name: string;
  description: string;
  video: string;
  _id: string;
  category: string;
};

const Workoutvideos = () => {
  const history = useHistory();
  const [videos, setVideos] = React.useState<Array<Video>>([]);
  const [category, setCategory] = React.useState<string>("None");
  const [categories, setCategories] = React.useState<any>([]);
  React.useEffect(() => {
    const token = localStorage.getItem("token");
    // setToken(token)
    if (token === null) {
      history.push("/signin");
      return;
    }
    const base = {
      dev: "http://localhost:5000/api/video",
      prod: "https://hiithop-server.herokuapp.com/api/video",
    };
    const url = process.env.NODE_ENV === "production" ? base.prod : base.dev;

    axios
      .get(url, { headers: { token: token } })
      .then((response) => {
        setVideos(response.data.videos);
        console.log(response.data);
        let v_categories: any = [];
        response.data.videos.forEach((video: any, idx: number) => {
          if (!v_categories.includes(video.category)) {
            v_categories.push(video.category);
          }
        });
        setCategories(v_categories);
      })
      .catch((error) => {
        history.push("/membership");
      });
  }, [history]);

  const addToPlaylist = (id: string) => {
    const base = {
      dev: "http://localhost:5000/api/create-playlist",
      prod: "https://hiithop-server.herokuapp.com/api/create-playlist",
    };
    const url = process.env.NODE_ENV === "production" ? base.prod : base.dev;
    const token = localStorage.getItem("token");
    axios
      .get(url, {
        headers: {
          token: token,
          id: id,
        },
      })
      .then((response) => {
        console.log(response);
        history.push("/playlist");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <Navigation />
      <label id="filter-header" htmlFor="">
        Filter by Category
      </label>
      <select
        onChange={(e) => setCategory(e.target.value)}
        value={category}
        name=""
        id="filter"
      >
        <option value={"None"}>None</option>
        {categories.map((v_category: any, idx: number) => {
          return (
            <option key={idx} value={v_category}>
              {v_category}
            </option>
          );
        })}
      </select>
      <div>
        {videos.length === 0 ? null : (
          <div id="video-container">
            {videos.map((video, idx) => {
              return (
                <div key={video._id} className="video">
                  {category === "None" || category === video.category ? (
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
                  ) : null}
                  {category === "None" || category === video.category ? (
                    <div>
                      <h3>{video.name}</h3>
                      <p>{video.description}</p>
                      <button
                        onClick={() => addToPlaylist(video._id)}
                        style={{ padding: ".4rem 1rem", cursor: "pointer" }}
                      >
                        Add To Playlist
                      </button>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Workoutvideos;
