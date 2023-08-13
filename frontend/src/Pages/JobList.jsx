import JobCard from "../components/JobCard";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function JobList() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/job/post")
      .then((res) => {
        setPosts(res.data.foundPosts);
      })
      .catch((err) => {
        console.error(err);
      });
  });
  return (
    <div>
      <div className="w-full bg-gray-900 h-20 flex items-end justify-center gap-x-2">
        <Link to="/jobs" className="text-white">
          Jobs
        </Link>{" "}
        <Link to="blogs" className="text-white">
          Blogs
        </Link>
      </div>
      <div className="flex flex-wrap gap-x-4 mx-20">
        {posts.map((post) => (
          <JobCard post={post} />
        ))}
      </div>
    </div>
  );
}
export default JobList;
