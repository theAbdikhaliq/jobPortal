import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Job() {
  const [post, setPost] = useState({
    title: "",
    description: "",
    user: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  const handleOnClick = (e) => {
    e.preventDefault();
    console.log(post);
    try {
      axios
        .post("http://localhost:8000/job/post", post)
        .then((res) => console.log(res.data.message))
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="bg-primary p-5">
        <Link to="/" className="font-bold  mb-20 mx-60">
          ← Back
        </Link>
        <form className="bg-white rounded-lg shadow-lg w-[35rem] mx-auto p-10">
          <h1 className="font-bold text-2xl mb-2">Post New Job</h1>
          <p className="font-light text-xs">
            The following is required and will be shared with opeepi
          </p>

          {/* Name */}
          <div className="mt-5 mb-3">
            <p className="font-light mb-2 text-xs text-gray-400">Job Title</p>
            <input
              type="text"
              className="w-full p-1.5 rounded-md bg-[#f6f6f6]"
              name="title"
              value={post.title}
              id=""
              placeholder="Enter your job title"
              onChange={handleOnChange}
            />
          </div>

          <div className="mt-5 mb-3">
            <p className="font-light mb-2 text-xs text-gray-400">User ID</p>
            <input
              type="text"
              className="w-full p-1.5 rounded-md bg-[#f6f6f6]"
              name="user"
              value={post.user}
              id=""
              placeholder="Enter your UserID"
              onChange={handleOnChange}
            />
          </div>

          {/* Description */}
          <div>
            <p className="font-light text-xs text-gray-400 mb-3">
              Job Description
            </p>
            <textarea
              type="text"
              name="description"
              value={post.description}
              id=""
              placeholder="Enter job description"
              className="w-full p-1.5 rounded-md bg-[#f6f6f6] h-64"
              onChange={handleOnChange}
            ></textarea>
          </div>
          {/* 
          Job Type
          <div className="flex justify-between mt-5 mb-3">
            <div>
              <p className="font-light text-xs text-gray-400 mb-3">Job Type</p>
              <select
                className="w-56 p-1.5 rounded-md bg-[#f6f6f6]"
                placeholder="Enter job type"
              >
                <option value="" disabled selected>
                  Select your option
                </option>
                <option className="w-56 p-1.5 rounded-md bg-[#f6f6f6]">
                  Full-Time
                </option>
                <option className="w-56 p-1.5 rounded-md bg-[#f6f6f6]">
                  Part-Time
                </option>
                <option className="w-56 p-1.5 rounded-md bg-[#f6f6f6]">
                  Internship
                </option>
              </select>

            Experience
            </div>
            <div>
              <p className="font-light text-xs text-gray-400 mb-3">
                Experience
              </p>
              <select
                className="w-56 p-1.5 rounded-md bg-[#f6f6f6]"
                placeholder="Enter job experience"
              >
                <option value="" disabled selected>
                  Select your option
                </option>
                <option>Junior</option>
                <option>Senior</option>
                <option>Expert</option>
              </select>
            </div>
          </div>

          <div>
            <p className="font-light text-xs text-gray-400 mb-3">
              Job Location
            </p>
            <select
              type="password"
              className="w-full p-1.5 rounded-md bg-[#f6f6f6]"
            >
              <option value="" disabled selected>
                Select your option
              </option>
              <option>Onsite</option>
              <option>Remote</option>
            </select>
          </div>
 */}
          <div className="flex justify-center">
            <button
              className="px-10 py-3 mt-10  bg-black text-white rounded-md"
              onClick={handleOnClick}
            >
              Post Job
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Job;
