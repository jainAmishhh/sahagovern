// PostCard.jsx

import React, { useState } from "react";
import {
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
  MoreVertical,
  ThumbsUp,
  AlertCircle,
} from "lucide-react";

const PostCard = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState(post.comments || []);
  const [newComment, setNewComment] = useState("");

  const toggleLike = () => setLiked(!liked);
  const toggleBookmark = () => setBookmarked(!bookmarked);
  const toggleComments = () => setShowComments(!showComments);

  const addComment = () => {
    if (!newComment.trim()) return;
    setComments([
      ...comments,
      { id: Date.now(), user: "You", text: newComment },
    ]);
    setNewComment("");
  };

  return (
    <div className="relative rounded-2xl bg-white/70 backdrop-blur-sm border border-gray-200 shadow-md p-6 transition-all hover:shadow-lg">
      {/* Post Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <img
            src={post.user.avatar}
            alt={post.user.name}
            className="h-10 w-10 rounded-full border border-gray-200"
          />
          <div>
            <p className="font-semibold text-gray-800">{post.user.name}</p>
            <p className="text-xs text-gray-400">
              {post.timestamp} · {post.location}
            </p>
          </div>
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          <MoreVertical className="h-5 w-5" />
        </button>
      </div>

      {/* Post Content */}
      <div className="mb-4">
        <p className="text-gray-700">{post.content}</p>
        {post.image && (
          <img
            src={post.image}
            alt="Issue"
            className="mt-3 rounded-xl w-full object-cover"
          />
        )}
      </div>

      {/* Metadata */}
      {post.status && (
        <div className="flex flex-wrap gap-2 mb-3">
          <span
            className={`px-2 py-1 text-xs rounded-full font-medium ${
              post.status === "Resolved"
                ? "bg-green-100 text-green-700"
                : "bg-yellow-100 text-yellow-700"
            }`}
          >
            {post.status}
          </span>
          {post.priority && (
            <span className="px-2 py-1 text-xs rounded-full bg-red-100 text-red-700 font-medium">
              Priority: {post.priority}
            </span>
          )}
          {post.ticket && (
            <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-700 font-medium">
              Ticket: {post.ticket}
            </span>
          )}
        </div>
      )}

      {/* Tags */}
      {post.tags?.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-3">
          {post.tags.map((tag, i) => (
            <span
              key={i}
              className="px-2 py-1 text-xs rounded-lg bg-gray-100 text-gray-600"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}

      {/* Post Actions */}
      <div className="flex items-center justify-between mt-4 border-t border-gray-200 pt-3">
        <button
          onClick={toggleLike}
          className={`flex items-center space-x-2 transition ${
            liked ? "text-red-500" : "text-gray-500 hover:text-red-500"
          }`}
        >
          <Heart className={`h-5 w-5 ${liked && "fill-current"}`} />
          <span className="text-sm">{liked ? "Liked" : "Like"}</span>
        </button>

        <button
          onClick={toggleComments}
          className="flex items-center space-x-2 text-gray-500 hover:text-blue-500 transition"
        >
          <MessageCircle className="h-5 w-5" />
          <span className="text-sm">
            {showComments ? "Hide" : "Comment"}
          </span>
        </button>

        <button className="flex items-center space-x-2 text-gray-500 hover:text-green-500 transition">
          <Share2 className="h-5 w-5" />
          <span className="text-sm">Share</span>
        </button>

        <button
          onClick={toggleBookmark}
          className={`flex items-center space-x-2 transition ${
            bookmarked
              ? "text-blue-600"
              : "text-gray-500 hover:text-blue-500"
          }`}
        >
          <Bookmark
            className={`h-5 w-5 ${bookmarked && "fill-current"}`}
          />
          <span className="text-sm">
            {bookmarked ? "Saved" : "Save"}
          </span>
        </button>
      </div>

      {/* Comments Section */}
      {showComments && (
        <div className="mt-4 border-t border-gray-200 pt-3">
          <div className="space-y-3 mb-3">
            {comments.length > 0 ? (
              comments.map((c) => (
                <div
                  key={c.id}
                  className="flex items-start space-x-2 text-sm"
                >
                  <span className="font-semibold text-gray-800">
                    {c.user}:
                  </span>
                  <span className="text-gray-600">{c.text}</span>
                </div>
              ))
            ) : (
              <p className="text-gray-400 text-sm">No comments yet.</p>
            )}
          </div>

          {/* Add Comment */}
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Write a comment..."
              className="flex-1 border rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={addComment}
              className="px-3 py-1 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600 transition"
            >
              Post
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostCard;
