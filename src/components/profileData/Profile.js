import React, { useContext } from "react";

import { ProfileContext } from "../../globalContext/profileContext";

import "./profile.css";
import ProfileSocial from "./ProfileSocial";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Profile = () => {
  const { profileData } = useContext(ProfileContext);

  return (
    <div className="outerDataProfile">
      {profileData.length >= 1 ? (
        profileData.map(
          ({
            nickname,
            _id,
            stack,
            favlanguage,
            linkedin,
            facebook,
            github,
          }) => (
            <React.Fragment key={_id}>
              <div className="details">
                <div className="dataProfile">
                  <h1>{nickname}</h1>
                  <p>
                    Stack : <span>{stack}</span>
                  </p>
                  <p>
                    {" "}
                    Favourite Language : <span>{favlanguage}</span>{" "}
                  </p>
                </div>
                <div className="dataSocial">
                  <ProfileSocial
                    social={linkedin}
                    icon={<FaFacebookSquare />}
                    nameSocial="linkedin"
                  />
                  <ProfileSocial
                    social={facebook}
                    icon={<FaLinkedin />}
                    nameSocial="facebook"
                  />
                  <ProfileSocial
                    social={github}
                    icon={<FaGithub />}
                    nameSocial="github"
                  />
                </div>
              </div>
            </React.Fragment>
          )
        )
      ) : (
        <div className="dataProfile">
          <h1>Create your Profile</h1>
          <p>Stack : ....</p>
          <p>Favourite Language : ..</p>
        </div>
      )}
    </div>
  );
};

export default Profile;
