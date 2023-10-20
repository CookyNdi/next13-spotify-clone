import React from "react";
import Header from "@/components/Header";
import QueueContent from "./components/queueContent";
import getQueueSongs from "@/actions/getQueueSongs";

export const revalidate = 0;

const Queue = async () => {
  const songs = await getQueueSongs(["1","2","3","4"])
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
