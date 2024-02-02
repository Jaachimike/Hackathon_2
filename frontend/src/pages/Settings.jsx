import React, { useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import bell from "../assets/Overview/notif.svg";
import profile_pic from "../assets/Overview/Profil.png";
import Dropdown from "../components/DropdownInput/Dropdown";

const Languages = [
  { id: 0, label: "Yoruba" },
  { id: 1, label: "Igbo" },
  { id: 2, label: "Hausa" },
  { id: 3, label: "Efik" },
];

const Timezones = [
  { id: 0, label: "UTC-12:00" },
  { id: 1, label: "UTC-11:00" },
  { id: 2, label: "UTC-10:00" },
  { id: 3, label: "UTC-09:00" },
  { id: 4, label: "UTC-08:00" },
  { id: 5, label: "UTC-07:00" },
];

const Settings = () => {
  const [selectedTab, setSelectedTab] = useState("General");

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="h-screen overflow-y-auto">
      {/* Header */}
      <div className="bg-white py-1 px-3 rounded-lg mb-20">
        <div className="flex justify-between mb-7 mt-8">
          <div>
            <h2 className="font-bold text-xl">Settings</h2>
          </div>
          <div className="flex space-x-6 items-center">
            <img src={bell} alt="notification icon" className="h-6" />
            <img src={profile_pic} alt="profile picture" className="h-8" />
          </div>
        </div>
      </div>

      {/* Settings */}
      <div className="bg-white rounded-lg">
        <div className=" flex border-b-2 pt-3 pl-10">
          <div
            className={`px-2 py-2 mr-3 ${
              selectedTab === "General"
                ? "border-b-2 border-[#546FFF]"
                : "border-b-0 "
            } `}
          >
            <button onClick={() => handleTabClick("General")}>General</button>
          </div>
          <div
            className={` px-2 py-2 ${
              selectedTab === "Notification"
                ? "border-b-2 border-[#546FFF]"
                : "border-b-0 "
            } `}
          >
            <button onClick={() => handleTabClick("Notification")}>
              Notification
            </button>
          </div>
        </div>
        {/* General and Notification Tab */}
        <div>
          {/* General Tab */}
          {selectedTab === "General" && (
            <div className=" *:mb-10 pl-10 mt-9">
              {/* Language dropdown  */}
              <div>
                Language
                <Dropdown data={Languages} defaultLabel="English (Default)" />
              </div>

              {/* Language dropdown  */}
              <div>
                Timezones
                <Dropdown data={Timezones} defaultLabel="GMT +4 (Default)" />
              </div>

              <button
                type="button"
                className="bg-[#546FFF] text-white px-9 py-2 rounded-lg"
              >
                Save Changes
              </button>
            </div>
          )}

          {/* Notification Tab */}
          {selectedTab === "Notification" && (
            <div>
              <FormGroup className="*:mb-8 pl-10 mt-9">
                <FormControlLabel
                  control={<Switch defaultChecked />}
                  label="Message"
                />
                <FormControlLabel control={<Switch />} label="Task Update" />
                <FormControlLabel
                  control={<Switch defaultChecked />}
                  label="Task Deadline"
                />
                <FormControlLabel control={<Switch />} label="Mentor Help" />
              </FormGroup>
              <button
                type="button"
                className="bg-[#546FFF] text-white mb-6 ml-10 px-9 py-2 rounded-lg"
              >
                Save Changes
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Settings;
