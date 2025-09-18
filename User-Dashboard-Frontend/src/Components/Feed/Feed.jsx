import React from "react";
import PostCard from "../UI/PostCard.jsx";

const Feed = ({ posts, selectedCategory, currentUser, onToggleLike }) => {
  // If posts are filtered by category
  const filteredPosts = selectedCategory
    ? posts.filter((post) => post.categoryId === selectedCategory)
    : posts;

  return (
    <div className="space-y-6">
      {filteredPosts.length > 0 ? (
        filteredPosts.map((post) => (
          <PostCard
            key={post.id}
            post={post}
            currentUser={currentUser}
            onLike={() => onToggleLike(post.id)}
          />
        ))
      ) : (
        <div className="text-center text-gray-500">No posts available.</div>
      )}
    </div>
  );
};

export default Feed;
