import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPostData } from "../redux/postSlice.js";
import { getAllPosts } from "../apiCalls/authCalls.js";

function useAllPosts() {
  const dispatch = useDispatch();
  const postData = useSelector((state) => state.post.postData);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const result = await getAllPosts();
        dispatch(setPostData(result));
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
    };
    fetchPosts();
  }, [dispatch]);

  return postData;
}

export default useAllPosts;
