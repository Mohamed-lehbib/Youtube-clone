import React, { useState } from "react";
import YoutubeSidebar from "../../components/youtube-sidebar/YoutubeSidebar";
import YoutubeNavbar from "../../components/youtube-navbar/YoutubeNavbar";
import VideoCard from "../../components/video-card/VideoCard";

export default function YoutubeHome() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="bg-black min-h-screen relative">
      <YoutubeNavbar
        icon="images/youtube-svgrepo-com.svg"
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      <div className="absolute left-0 top-0 h-full ml-16">
        <YoutubeSidebar />
      </div>
      <div
        className={
          sidebarOpen ? "fixed inset-0 bg-black opacity-25 z-0" : "md:ml-16"
        }
      >
        <VideoCard />
      </div>
    </div>
  );
}
