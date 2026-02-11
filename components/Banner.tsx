import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Info, Star, Clock, Monitor } from 'lucide-react';
import { Movie } from '../types';

interface BannerProps {
  movie: Movie;
  onClick: (movie: Movie) => void;
  onPlay: (movie: Movie) => void;
}

const Banner: React.FC<BannerProps> = ({ movie, onClick }) => {
  return (
    <div 
        onClick={() => onClick(movie)}
        className="relative w-full overflow-hidden mb-6 group select-none cursor-pointer"
        style={{ aspectRatio: '16/9', maxHeight: '75vh' }}
    >
      <AnimatePresence mode="wait">
        <motion.div 
          key={movie.id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full"
        >
          {/* 16:9 Background Image */}
          <div className="absolute inset-0 w-full h-full">
            <img 
              src={movie.detailBanner || movie.thumbnail} 
              alt={movie.title}
              className="w-full h-full object-cover pointer-events-none"
              style={{ objectPosition: 'center top' }}
            />
            
            {/* Gradient Overlays */}
            <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-black/80 via-black/30 to-transparent z-10" />
            <div className="absolute bottom-0 inset-x-0 h-[70%] bg-gradient-to-t from-black via-black/90 to-transparent z-10" />
            <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black/60 to-transparent z-10" />
          </div>
          
          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-5 pb-10 z-20">
            <div className="max-w-xl">
              
              {/* Badges */}
              <motion.div
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-2 mb-3"
              >
                <span className="bg-gradient-to-r from-gold via-yellow-400 to-gold text-black text-[9px] font-black px-2.5 py-1 rounded-md uppercase tracking-widest shadow-[0_0_15px_rgba(255,215,0,0.5)]">
                  🔥 Trending
                </span>
                <span className="text-[9px] font-bold text-white/90 uppercase bg-white/10 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/20">
                  {movie.category}
                </span>
                {movie.videoQuality && (
                  <span className="text-[9px] font-bold text-blue-300 uppercase bg-blue-500/20 backdrop-blur-md px-2.5 py-1 rounded-md border border-blue-400/30">
                    {movie.videoQuality}
                  </span>
                )}
              </motion.div>
              
              {/* Title */}
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-3xl md:text-4xl font-brand leading-[1.0] mb-3 text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-400 drop-shadow-[0_4px_20px_rgba(255,255,255,0.3)]"
              >
                {movie.title}
              </motion.h1>
              
              {/* Metadata Row */}
              <motion.div
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-3 mb-4 text-xs font-semibold text-gray-300 flex-wrap"
              >
                {movie.rating && (
                  <div className="flex items-center gap-1">
                    <Star size={12} fill="#FFD700" className="text-gold" />
                    <span className="text-white font-bold">{movie.rating}</span>
                  </div>
                )}
                {movie.year && (
                  <>
                    <span className="w-1 h-1 bg-gray-500 rounded-full" />
                    <span>{movie.year}</span>
                  </>
                )}
                {movie.duration && (
                  <>
                    <span className="w-1 h-1 bg-gray-500 rounded-full" />
                    <div className="flex items-center gap-1">
                      <Clock size={10} className="text-gray-400" />
                      <span>{movie.duration}</span>
                    </div>
                  </>
                )}
                {movie.audioLanguage && (
                  <>
                    <span className="w-1 h-1 bg-gray-500 rounded-full" />
                    <div className="flex items-center gap-1">
                      <Monitor size={10} className="text-blue-300" />
                      <span className="text-blue-300">{movie.audioLanguage}</span>
                    </div>
                  </>
                )}
              </motion.div>
              
              {/* Description */}
              {movie.description && (
                <motion.p
                  initial={{ y: 15, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.45 }}
                  className="text-gray-300 text-xs line-clamp-2 mb-5 font-medium max-w-sm leading-relaxed opacity-85"
                >
                  {movie.description}
                </motion.p>
              )}
              
              {/* Buttons */}
              <motion.div
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-3"
              >
                <button 
                  className="relative overflow-hidden bg-white text-black px-6 py-2.5 rounded-lg font-black text-xs flex items-center gap-2 hover:scale-105 transition-all shadow-[0_0_25px_rgba(255,255,255,0.3)] active:scale-95 group/btn z-30"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
                  <Play size={15} fill="black" className="relative z-10" />
                  <span className="relative z-10">PLAY NOW</span>
                </button>
                
                <button 
                  className="relative bg-white/10 backdrop-blur-md text-white px-5 py-2.5 rounded-lg font-bold text-xs flex items-center gap-2 border border-white/20 hover:bg-white/20 transition-all active:scale-95"
                >
                  <Info size={13} />
                  <span>More Info</span>
                </button>
              </motion.div>
              
            </div>
          </div>
          
          {/* Vignette */}
          <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_80px_rgba(0,0,0,0.5)] z-[5]" />
          
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Banner;
