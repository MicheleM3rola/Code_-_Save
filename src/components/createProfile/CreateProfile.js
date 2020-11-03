import React, { useContext, useEffect } from "react";
import { ProfileContext } from "../../globalContext/profileContext";
import { UserContext } from "../../globalContext/Context";
import "./createProfile.css";

const CreateProfile = ({ handleClose }) => {
  const {
    register,
    handleSubmit,
    onSubmit,
    editProfile,

    profileData,
    editSubmit,
    deleteProfile,
    idProfile,
  } = useContext(ProfileContext);

  const { userData } = useContext(UserContext);

  useEffect(() => {
    editProfile();
  }, [userData.token, editProfile]);

  return (
    <div className="form-control-container">
      <h1>Create Your Profile</h1>
      <form
        className="form-controll-profile"
        onSubmit={
          profileData.length === 0
            ? handleSubmit(onSubmit)
            : handleSubmit(editSubmit)
        }
      >
        <div className="flex-style-block">
          <label htmlFor="nickname">Nickname</label>
          <input
            type="text"
            name="nickname"
            placeholder="Nickname"
            ref={register}
          />
        </div>
        <div className="flex-style-block">
          <label htmlFor="Profile-Picture">Profile Picture</label>
          <input
            type="text"
            name="image"
            placeholder="Link image"
            ref={register}
          />
        </div>
        <div className="flex-style-block">
          <label htmlFor="stack">Stack</label>
          <input
            type="text"
            name="stack"
            placeholder="What is your stack"
            ref={register}
          />
        </div>
        <div className="flex-style-block">
          <label htmlFor="favourite-lang">Favourite Language</label>
          <input
            type="text"
            name="favlanguage"
            placeholder="What is your favourite language"
            ref={register}
          />
        </div>
        <div className="flex-style-block">
          <label htmlFor="linkedin">Linkedin</label>
          <input
            type="text"
            name="linkedin"
            placeholder="linkedin account"
            ref={register}
          />
        </div>
        <div className="flex-style-block">
          <label htmlFor="facebook">Facebook</label>
          <input
            type="text"
            name="facebook"
            placeholder="facebook account"
            ref={register}
          />
        </div>
        <div className="flex-style-block">
          <label htmlFor="codeSandbox">GitHub</label>
          <input
            type="text"
            name="github"
            placeholder="Github Link"
            ref={register}
          />
        </div>
        <input
          type="submit"
          value={profileData.length > 0 ? "Update Prfile" : "Create Profile"}
          onClick={() => {
            setTimeout(() => {
              handleClose();
            }, 200);
          }}
        />
        {profileData.length > 0 ? (
          <button
            onClick={() => {
              deleteProfile(idProfile);
              setTimeout(() => {
                handleClose();
              }, 200);
            }}
          >
            {" "}
            Delete Profile
          </button>
        ) : null}
      </form>
    </div>
  );
};

export default CreateProfile;
