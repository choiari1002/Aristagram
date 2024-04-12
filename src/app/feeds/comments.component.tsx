"use client";

import { useEffect, useState } from "react";
import { makeBrowserClient } from "@/utils/supabaseBrowserClient.utils";
import { Button, TextInput } from "@mantine/core";

const CommentsComponent = ({ feedId, myUserId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const supabase = makeBrowserClient();

  useEffect(() => {
    fetchComments();
  }, [feedId]);

  const fetchComments = async () => {
    try {
      const { data, error } = await supabase
        .from("comments")
        .select("*")
        .eq("feed_id", feedId)
        .order("created_at", { ascending: true });

      if (error) {
        console.error("Error fetching comments:", error.message);
      } else {
        setComments(data || []);
      }
    } catch (error) {
      console.error("Error fetching comments:", error.message);
    }
  };

  const handleAddComment = async () => {
    try {
      const { data, error } = await supabase.from("comments").insert([
        {
          feed_id: feedId,
          user_id: myUserId.myUserId,
          content: newComment,
          created_at: new Date().toISOString(),
        },
      ]);

      if (error) {
        console.error("Error adding comment:", error.message);
      } else {
        setNewComment("");
        fetchComments();
      }
    } catch (error) {
      console.error("Error adding comment:", error.message);
    }
  };

  const formatTime = (timestamp) => {
    const now = new Date();
    const commentTime = new Date(timestamp);
    const diff = now.getTime() - commentTime.getTime();
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
      return `${days} day${days > 1 ? "s" : ""} ago`;
    } else if (hours > 0) {
      return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    } else if (minutes > 0) {
      return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
    } else {
      return "Just now";
    }
  };

  return (
    <div>
      <h2>Comments</h2>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <div>{comment.content}</div>
            <div>By: {comment.user_id}</div>
            <div>{formatTime(comment.created_at)}</div>
          </li>
        ))}
      </ul>
      <TextInput
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Add a comment..."
      />
      <Button onClick={handleAddComment}>Add Comment</Button>
    </div>
  );
};

CommentsComponent.displayName = "Comments";

export const Comments = CommentsComponent;

