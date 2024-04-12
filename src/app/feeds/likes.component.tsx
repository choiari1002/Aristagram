"use client";

import { useEffect, useState } from "react";
import { makeBrowserClient } from "@/utils/supabaseBrowserClient.utils";
import { Button } from "@mantine/core";

const LikeComponent = ({ feedId, myUserId }) => {
  const [liked, setLiked] = useState(false);
  const supabase = makeBrowserClient();

  useEffect(() => {
    checkLiked();
  }, [feedId]);

  const checkLiked = async () => {
    try {
      const { data, error } = await supabase
        .from("likes")
        .select("*")
        .eq("feed_id", feedId)
        .eq("user_id", myUserId.myUserId);


      if (error) {
        console.error("Error checking liked:", error.message);
      } else {
        setLiked(data.length > 0);
      }
    } catch (error) {
      console.error("Error checking liked:", error.message);
    }
  };

  const handleLike = async () => {
    try {
      if (!liked) {
        await supabase.from("likes").insert([
          {
            feed_id: feedId,
            user_id: myUserId.myUserId,
            created_at: new Date().toISOString(),
          },
        ]);
      } else {
        await supabase
          .from("likes")
          .delete()
          .eq("feed_id", feedId)
          .eq("user_id", myUserId.myUserId);
      }
      setLiked(!liked);
    } catch (error) {
      console.error("Error handling like:", error.message);
    }
  };

  return (
    <div>
      <Button onClick={handleLike}>{liked ? "Unlike" : "Like"}</Button>
    </div>
  );
};

LikeComponent.displayName = "Likes";

export const Likes = LikeComponent;

