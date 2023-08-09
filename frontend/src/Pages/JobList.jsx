import JobCard from "../components/JobCard";
import { useState, useEffect } from "react";
import axios from "axios";

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
    <div className="grid grid-cols-2 gap-2">
      {posts.map((post) => (
        <JobCard post={post} />
      ))}
    </div>
  );
}
export default JobList;
