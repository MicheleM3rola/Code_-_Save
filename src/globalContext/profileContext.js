import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  useCallback,
} from "react";
import Axios from "axios";
import { useForm } from "react-hook-form";
import { UserContext } from "./Context";
export const ProfileContext = createContext();

const ProfileContextProvider = ({ children }) => {
  {
    /** Profile State with React hook form and post request  Create Profile*/
  }

  const { register, handleSubmit, reset } = useForm();
  const { userData } = useContext(UserContext);

  const onSubmit = async (data) => {
    await Axios.post("http://localhost:5000/createprofile/create", data, {
      headers: {
        "x-auth-token": userData.token,
      },
    });

    await getProfileData();
  };

  {
    /** Get request Profile Data with state to store the data */
  }

  const [profileData, setProfileData] = useState([]);

  const getProfileData = useCallback(async () => {
    try {
      const res = await Axios.get("http://localhost:5000/createprofile", {
        headers: {
          "x-auth-token": userData.token,
        },
      });

      setProfileData(await res.data);
    } catch (error) {
      console.log(error.message);
    }
  }, [setProfileData, userData.token]);

  useEffect(() => {
    getProfileData();
  }, [userData.token, getProfileData]);

  {
    /**EditingProfile GET */
  }

  const editProfile = useCallback(async () => {
    try {
      const resEdit = await Axios.get("http://localhost:5000/createprofile", {
        headers: {
          "x-auth-token": userData.token,
        },
      });

      const [obj] = resEdit.data;

      return reset({
        nickname: obj.nickname,
        image: obj.image,
        stack: obj.stack,
        favlanguage: obj.favlanguage,
        linkedin: obj.linkedin,
        facebook: obj.facebook,
        github: obj.github,
      });
    } catch (error) {
      console.log(error.message);
    }
  }, [userData.token, reset]);

  {
    /** Edit Sumbit Profile */
  }

  const idProfile = profileData.map((obj) => obj._id).join("");

  const editSubmit = async (data) => {
    await Axios.post(
      `http://localhost:5000/createprofile/update/${idProfile}`,
      data,
      {
        headers: {
          "x-auth-token": userData.token,
        },
      }
    );

    await getProfileData();
  };

  {
    /** Delete Profile */
  }
  const deleteProfile = async (id) => {
    try {
      await Axios.delete(`http://localhost:5000/createprofile/delete/${id}`, {
        headers: {
          "x-auth-token": userData.token,
        },
      });
      setProfileData([]);

      await getProfileData();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ProfileContext.Provider
      value={{
        register,
        handleSubmit,
        onSubmit,
        profileData,
        getProfileData,
        editProfile,
        reset,
        editSubmit,
        setProfileData,
        deleteProfile,
        idProfile,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileContextProvider;
