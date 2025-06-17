import React from "react";

type VideoCardProps = {
  url: string;
  thumbnail: string;
  name: string;
  subtitle?: string;
  onClick?: () => void;
};

export const VideoCard: React.FC<VideoCardProps> = ({ url, thumbnail, name, subtitle, onClick }) => (
  <div
    onClick={onClick}
    className="cursor-pointer block group bg-[#f5f8f9] rounded-[2rem] overflow-hidden transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary h-full"
  >
    <div className="relative aspect-[3/4] w-full h-full">
      <img
        src={thumbnail}
        alt={name}
        className="absolute inset-0 w-full h-full object-cover group-hover:opacity-90 transition"
      />
      <span className="absolute inset-0 flex items-center justify-center">
        <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M25.4974 0.916504C11.9421 0.916504 0.914062 11.9446 0.914062 25.4998C0.914062 39.0551 11.9421 50.0832 25.4974 50.0832C39.0526 50.0832 50.0807 39.0551 50.0807 25.4998C50.0807 11.9446 39.0526 0.916504 25.4974 0.916504ZM25.4974 45.1665C14.6537 45.1665 5.83073 36.3435 5.83073 25.4998C5.83073 14.6561 14.6537 5.83317 25.4974 5.83317C36.3411 5.83317 45.1641 14.6561 45.1641 25.4998C45.1641 36.3435 36.3411 45.1665 25.4974 45.1665Z" fill="white"/>
          <path d="M18.1224 37.7915L37.7891 25.4998L18.1224 13.2082V37.7915Z" fill="white"/>
        </svg>
      </span>
      <div className="absolute left-0 bottom-0 p-5 w-full">
        <div className="text-white font-bold text-lg leading-tight">
          {name}
        </div>
      </div>
    </div>
  </div>
);
export default VideoCard; 