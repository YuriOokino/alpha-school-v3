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
    className="cursor-pointer block group bg-[#f5f8f9] rounded-[2rem] overflow-hidden focus:outline-none focus:ring-2 focus:ring-primary h-full"
  >
    <div className="relative aspect-[3/4] w-full h-full overflow-hidden">
      <img
        src={thumbnail}
        alt={name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 scale-105 group-hover:scale-100"
      />
      {/* Black overlay with 35% opacity */}
      <div className="absolute inset-0 bg-black bg-opacity-35"></div>
      <span className="absolute inset-0 flex items-center justify-center">
        <div className="w-12 h-12 md:w-16 md:h-16 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-gray-800 ml-1 md:w-8 md:h-8">
            <path d="M8 5v14l11-7z"/>
          </svg>
        </div>
      </span>
      <div className="absolute left-0 bottom-0 p-5 w-full">
        <div className="text-white font-medium heading-style-h6">
          {name}
        </div>
      </div>
    </div>
  </div>
);
export default VideoCard; 