import React from "react";
import "./profile.css";

const ProfileSocial = ({ social, icon, nameSocial }) => {
  return (
    <>
      {social.length > 0 ? (
        <a
          href={social}
          target="_blank"
          rel="noopener noreferrer"
          className={`socialLink ${
            nameSocial === "facebook"
              ? "facebook"
              : nameSocial === "linkedin"
              ? "linkedin"
              : nameSocial === "github"
              ? "github"
              : null
          }`}
        >
          {icon}
        </a>
      ) : null}
    </>
  );
};

export default ProfileSocial;
