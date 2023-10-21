"use client"
import React from "react";
import Header from "@/components/Header";
import QueueContent from "./components/queueContent";
import getQueueSongs from "@/actions/getQueueSongs";
import usePlayer from "@/hooks/usePlayer";

export const revalidate = 0;

// eslint-disable-next-line @next/next/no-async-client-component
const Queue = async () => {
  const player = usePlayer();
  const songs = await getQueueSongs(player.ids);
  return (
    <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      <Header className="from-bg-neutral-900">
        <div className="mb-2 flex flex-col gap-y-6">
          <h1 className="text-white text-3xl font-semibold">Queue</h1>
        </div>
      </Header>
      <QueueContent songs={songs} />
    </div>
  );
};

export default Queue;
