import React from "react";
import bell from "../assets/Overview/notif.svg";
import profile_pic from "../assets/Overview/Profil.png";
import category_logo from "../assets/Tasks/element-1.svg";
import sort_logo from "../assets/Tasks/sort.svg";
import TaskDisplay from "../components/TaskDisplay";
import task1 from "../assets/Overview/task_images/Image.png";
import task2 from "../assets/Overview/task_images/Image (1).png";
import task3 from "../assets/Overview/task_images/Image (2).png";
import task4 from "../assets/Overview/task_images/Image (3).png";
import task5 from "../assets/Overview/task_images/Image (4).png";
import task6 from "../assets/Overview/task_images/Image (5).png";

const profile1 = "https://i.pravatar.cc/150?img=64";
const profile2 = "https://i.pravatar.cc/150?img=59";
const profile3 = "https://i.pravatar.cc/150?img=51";
const profile4 = "https://i.pravatar.cc/150?img=7";

const timeLimit = [
  {
    id: 1,
    name: "Creating Mobile App Design",
    image: task1,
    progress: 75,
    timeLeft: "1 hour left",
    profilePictures: [profile2, profile4],
    subtitle: "UI/UX Design",
  },
  {
    id: 2,
    name: "Creating Perfect Website",
    image: task3,
    progress: 50,
    timeLeft: "2 hours left",
    profilePictures: [profile1, profile3],
    subtitle: "Web Developer",
  },
  {
    id: 3,
    name: "Creating Perfect Website",
    image: task6,
    progress: 20,
    timeLeft: "1 hour left",
    profilePictures: [profile3, profile2],
    subtitle: "Web Developer",
  },
  {
    id: 4,
    name: "Creating Perfect Website",
    image: task5,
    progress: 30,
    timeLeft: "4 hours left",
    profilePictures: [profile1, profile4],
    subtitle: "Web Developer",
  },
  {
    id: 5,
    name: "Creating Perfect Website",
    image: task2,
    progress: 90,
    timeLeft: "5 hourss left",
    profilePictures: [profile2, profile1],
    subtitle: "Web Developer",
  },
  // ... more tasks
];

const newTask = [
  {
    id: 1,
    name: "Creating Mobile App Design",
    image: task4,
    progress: 75,
    timeLeft: "3 days left",
    profilePictures: [profile2, profile4],
    subtitle: "UI/UX Design",
  },
  {
    id: 2,
    name: "Creating Perfect Website",
    image: task2,
    progress: 50,
    timeLeft: "7 days left",
    profilePictures: [profile1, profile3],
    subtitle: "Web Developer",
  },
  {
    id: 3,
    name: "Creating Perfect Website",
    image: task6,
    progress: 20,
    timeLeft: "7 days left",
    profilePictures: [profile3, profile2],
    subtitle: "Web Developer",
  },
  {
    id: 4,
    name: "Creating Perfect Website",
    image: task1,
    progress: 30,
    timeLeft: "7 days left",
    profilePictures: [profile1, profile4],
    subtitle: "Web Developer",
  },
  {
    id: 5,
    name: "Creating Perfect Website",
    image: task3,
    progress: 90,
    timeLeft: "7 days left",
    profilePictures: [profile3, profile2],
    subtitle: "Web Developer",
  },
  // ... more tasks
];

const Tasks = () => {
  return (
    <div className="h-screen overflow-y-auto">
      {/* Header Section */}
      <div className="mt-5">
        {/* Top Header */}
        <div className="flex justify-between mb-12">
          <div>
            <h2 className="font-bold text-xl">Explore Task</h2>
          </div>
          <div className="flex space-x-6 items-center mr-7">
            <img src={bell} alt="notification icon" className="h-6" />
            <img src={profile_pic} alt="profile picture" className="h-8" />
          </div>
        </div>
        {/* Bottom Header */}
        <div className="flex justify-between gap-3 lg:gap-12">
          {/* Search Field */}
          <div className="flex-grow">
            <form class="flex items-center">
              <div class="relative w-full">
                <input
                  type="text"
                  id="voice-search"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search Tasks"
                  required
                />
                <button
                  type="submit"
                  class="absolute inset-y-0 end-0 flex items-center pe-3"
                >
                  <svg
                    class="w-4 h-4 me-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>

          {/* Category and Sort By buttons */}
          <div className="flex space-x-2 lg:space-x-6 mr-7">
            {/* Category Button */}
            <div>
              <button className="flex space-x-2 border-2 px-4 py-3 rounded-lg">
                <img src={category_logo} alt="" />
                <h3>Category</h3>
              </button>
            </div>
            {/* Sort By Button */}
            <div>
              <button className="flex space-x-2 border-2 px-4 py-3 rounded-lg">
                <img src={sort_logo} alt="" />
                <h3>Sort by: Deadline</h3>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Body Section */}
      <div>
        {/* Time Limit Tasks */}
        <TaskDisplay
          tasks={timeLimit}
          cardsToShow={4}
          headerText="Time Limit"
        />
        {/* New Tasks */}
        <TaskDisplay tasks={newTask} cardsToShow={4} headerText="New Tasks" />
      </div>
    </div>
  );
};

export default Tasks;
