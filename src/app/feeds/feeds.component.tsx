"use client";

import { useEffect, useState } from "react";
import { makeBrowserClient } from "@/utils/supabaseBrowserClient.utils";
import { Button } from "@mantine/core";
import Link from "next/link";
import { Comments } from "./comments.component";
import { Likes } from "./likes.component";

const FeedsComponent = (myUserId) => {
  const [feeds, setFeeds] = useState([]);

  const supabase = makeBrowserClient();

  useEffect(() => {
    const fetchFeeds = async () => {
      const { data, error } = await supabase
        .from("feeds")
        .select("*, users(username)")
        .order("created_at", { ascending: false });
      console.log(data);
      if (error) {
        console.error("error fetching feeds:", error.message);
      } else {
        setFeeds(data || []);
      }
    };

    fetchFeeds();
  }, [supabase]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  };

  return (
    <div>
      {feeds.map((feed) => (
        <div key={feed.id} style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
          <p>피드 생성자: {feed.users.username}</p>
          <img src={feed.image_url} alt="피드 이미지" style={{ maxWidth: "500px" }} />
          <p>내용: {feed.content}</p>
          <p>작성일: {formatDate(feed.created_at)}</p>
          <Comments feedId={feed.id} myUserId={myUserId}/>
          <Likes feedId={feed.id} myUserId={myUserId}/>
        </div>
      ))}
    </div>
  );
};

FeedsComponent.displayName = "Feeds";

export const Feeds = FeedsComponent;
