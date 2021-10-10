import {
  Facebook,
  Instagram,
  LinkedIn,
  YouTube,
  Twitter,
} from "@material-ui/icons";
import { FaTumblr, FaTiktok } from "react-icons/fa";

const Footer = () => {
  const redirect = (path: string) => {
    window.open(path, "_blank");
  };
  return (
    <div>
      <h3 style={{ textAlign: "center", fontWeight: 300, marginTop: "2rem" }}>
        Copyright © 2021 HiitHop | All Rights Reserved
      </h3>
      <div
        style={{
          textAlign: "center",
          justifyContent: "space-evenly",
          alignItems: "center",
          display: "flex",
          width: "30%",
          margin: "auto",
        }}
      >
        <Facebook
          onClick={() => redirect("https://www.facebook.com/HIITHop")}
          style={styles.icon}
        />
        <Instagram
          onClick={() =>
            redirect("https://www.instagram.com/hiithop.hardcorefun")
          }
          style={styles.icon}
        />
        <LinkedIn
          onClick={() => redirect("https://www.linkedin.com/in/hiithop")}
          style={styles.icon}
        />
        <YouTube
          onClick={() => redirect("https://www.youtube.com/c/HIITHop")}
          style={styles.icon}
        />
        <Twitter
          onClick={() => redirect("https://twitter.com/laura73705381")}
          style={styles.icon}
        />
        <FaTumblr
          onClick={() => redirect("https://www.tumblr.com/blog/hiit-hop")}
          style={styles.icon}
        />
        <FaTiktok
          onClick={() => redirect("https://www.tiktok.com/@hiit.hop?lang=en")}
          style={styles.icon}
        />
      </div>
    </div>
  );
};

const styles = {
  header: {
    textAlign: "center",
    fontWeight: 300,
    marginTop: "2rem",
  },
  icons: {
    textAlign: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  icon: {
    marginLeft: "20px",
    cursor: "pointer",
  },
};

export default Footer;
