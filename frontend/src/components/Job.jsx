import React, { useEffect, useState } from "react";
import JobCard from "./JobCard";
import Filter from "./Filter";
import axios from "axios";

function Job() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/post/")
      .then((res) => {
        setPosts(res.data.foundPosts);
      })
      .catch((err) => {
        console.error(err);
      });
    // fetch("http://localhost:8000/post/")
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((data) => {
    //     console.log(data);
    //   });
  });
  return (
    <div>
      <div className="flex mt-32 justify-between mx-32 items-start">
        <div className="">
          <h1 className="mb-5 text-center font-bold text-xl">
            Job Opportunities{" "}
            <span className="font-light text-gray-400">22</span>
          </h1>
          {posts.map((post) => (
            <JobCard post={post} />
          ))}
        </div>
        <div className="">
          <Filter />
        </div>
      </div>
    </div>
  );
}

export default Job;
