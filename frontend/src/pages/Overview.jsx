import React, { useState } from "react";
import bell from "../assets/Overview/notif.svg";
import profile_pic from "../assets/Overview/Profil.png";
import running_task from "../assets/Overview/patient.svg";
import activity from "../assets/Overview/Activity.svg";
import task_image from "../assets/Overview/task_images/Image.png";

import calender from "../assets/Overview/Calender.svg";

import TaskDisplay from "../components/TaskDisplay";

const tasks = [
  {
    id: 1,
    name: "Creating Mobile App Design",
    image: task_image,
    progress: 75,
    timeLeft: "3 days left",
    profilePictures: [profile_pic, profile_pic],
    subtitle: "UI/UX Design",
  },
  {
    id: 2,
    name: "Creating Perfect Website",
    image: task_image,
    progress: 50,
    timeLeft: "7 days left",
    profilePictures: [profile_pic, profile_pic],
    subtitle: "Web Developer",
  },
  {
    id: 3,
    name: "Creating Perfect Website",
    image: task_image,
    progress: 20,
    timeLeft: "7 days left",
    profilePictures: [profile_pic, profile_pic],
    subtitle: "Web Developer",
  },
  {
    id: 4,
    name: "Creating Perfect Website",
    image: task_image,
    progress: 30,
    timeLeft: "7 days left",
    profilePictures: [profile_pic, profile_pic],
    subtitle: "Web Developer",
  },
  {
    id: 5,
    name: "Creating Perfect Website",
    image: task_image,
    progress: 90,
    timeLeft: "7 days left",
    profilePictures: [profile_pic, profile_pic],
    subtitle: "Web Developer",
  },
  // ... more tasks
];

const taskToday = [
  {
    id: 1,
    name: "Creating Awesome Mobile Apps",
    image: task_image,
    progress: 90,
    timeLeft: "1 hour left",
    profilePictures: [profile_pic, profile_pic],
    subtitle: "UI/UX Designer",
  },
];

const Overview = () => {
  return (
    <>
      <div className="flex space-x-10">
        {/* Main Bar  */}
        <div className="flex-grow  bg-[#F5F5F7] h-screen pt-8 px-3">
          {/* Profile Details */}
          <div className="flex justify-between mb-12">
            <div>
              <h2 className="font-bold text-xl">Hi, Skylar Dias</h2>
              <p>Let us finish your task today!</p>
            </div>
            <div className="flex space-x-6 items-center">
              <img src={bell} alt="notification icon" className="h-6" />
              <img src={profile_pic} alt="profile picture" className="h-6" />
            </div>
          </div>
          {/* Activity and Running Task  */}
          <div className="flex justify-between px-4">
            <img src={running_task} alt="" />
            <img src={activity} alt="" />
          </div>

          {/* Upcoming Tasks */}
          <TaskDisplay tasks={tasks} cardsToShow={3} />
        </div>
        {/* Side Bar  */}
        <div className="mt-8">
          <div className="mb-10">
            <img src={calender} alt="" />
          </div>

          <div className="bg-white py-3 px-3">
            <div className="mb-4">
              <h3 className="font-bold">Today's Task</h3>
            </div>
            {/* Task Today  */}
            {taskToday.map((task, index) => {
              return (
                <div
                  key={task.id}
                  className="task-card h-fit mb-4 shadow-md rounded-lg "
                >
                  <div className="image-container h-2/5 relative">
                    <img
                      src={task.image}
                      className="w-full h-full object-cover rounded-t-lg"
                    />
                  </div>
                  <div className=" px-4 py-2  rounded-bl-lg rounded-br-lg text-black">
                    <span className="text-lg font-medium block">
                      {task.name}
                    </span>
                    <span className="text-sm">{task.subtitle}</span>
                  </div>
                  <div className="progress-section px-4 mt-4 flex justify-between items-center">
                    <div className="text-sm">Progress</div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold">{task.progress}%</span>
                    </div>
                  </div>
                  {/* Progress Bar  */}
                  <div className="px-4">
                    <div className="bg-gray-200  h-2 rounded-full w-full">
                      <div
                        className="bg-blue-500 h-full rounded-full"
                        style={{ width: `${task.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="time-left px-4 flex justify-between items-center mt-2">
                    <span className="text-sm">{task.timeLeft}</span>
                    <div className="flex -space-x-3">
                      {task.profilePictures.map((profilePicture) => (
                        <img
                          key={profilePicture}
                          src={profilePicture}
                          alt=""
                          className="w-8 h-8 rounded-full object-cover border-2 border-white"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Task Details */}
            <div>
              <div className="flex justify-between items-center mb-5">
                <h2 className="font-bold">Task Details</h2>
                <p className="text-xs">UI/UX Designer</p>
              </div>

              {/* Task Details List */}
              <>
                <table className="table-auto">
                  <tbody>
                    <tr className=" *:pb-5 ">
                      <td>
                        <div className="bg-[#F5F5F7] rounded-full px-3 py-1 mr-3">
                          1
                        </div>
                      </td>
                      <td>Understandng the tools in Figma</td>
                    </tr>
                    <tr className=" *:pb-5 ">
                      <td>
                        <div className="bg-[#F5F5F7] rounded-full px-3 py-1 mr-3">
                          2
                        </div>
                      </td>
                      <td>Understand the basics of making designs</td>
                    </tr>
                    <tr className=" *:pb-5 ">
                      <td>
                        <div className="bg-[#F5F5F7] rounded-full px-3 py-1 mr-3">
                          3
                        </div>
                      </td>
                      <td>Design a mobile application with figma</td>
                    </tr>
                  </tbody>
                </table>
              </>

              <button className="bg-[#546FFF] mt-6 w-full rounded-lg py-2 text-white">
                Go to Detail
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
