import React, { useState, useRef } from 'react';
import './App.css';
import { LinkedInIcon, SpotifyIcon, PhotosIcon, PodcastsIcon } from './Icons';
import { 
  ArrowSquareIn, 
  Queue,
  Rewind,
  Play,
  Pause,
  FastForward,
  SpeakerHigh,
  SpeakerSimpleSlash,
  SquaresFourIcon,
  GameControllerIcon,
  HeartIcon,
  MapTrifoldIcon
} from "@phosphor-icons/react";

function About() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="grid grid-cols-[1.4fr_1fr_1fr] grid-rows-2 gap-5 px-25 pt-30 pb-20">
      {/* About*/}
      <div className="row-span-2 bg-zinc-100 rounded-2xl min-h-150">
        <div className="font-bold text-2xl pt-5 text-left px-10">What I'm Bout.</div>
        <hr className="m-4 border-zinc-400" />
      </div>

      {/* Sosmed*/}
      <div className='bg-zinc-100/70 p-5 rounded-3xl shadow-sm border border-zinc-200/50 flex flex-col justify-between'>
        <div className="flex justify-between items-start">
          <div className="w-15 h-15 bg-white p-1 rounded-full shadow-md flex items-center justify-center">
            <img 
              src="../src/assets/wk.jpeg" 
              alt="profile" 
              className="w-full h-full object-cover rounded-full"
            />
          </div>
            <span className='text-xs pr-15 pt-3 font-bold'>
              <p >Alfan Nasrulloh</p>
              <p className='pr-7'>@alfaann__</p>
            </span>

        <div className="w-12 h-12 bg-gradient-to-tr from-green-500 to-green-500 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30">
          <LinkedInIcon size={56} />
        </div>
        </div>

        {/* Floating Player Controls Bar */}
        <div className="mt-2 bg-white/70 backdrop-blur-md border border-zinc-300/40 rounded-full px-4 py-2.5 flex items-center justify-between text-zinc-600 shadow-sm">
        <span>Read my LinkedIn</span>
          <ArrowSquareIn size={20} />
        </div>
      </div>

      {/* Music*/}
      <div className='bg-zinc-100/70 p-5 rounded-3xl shadow-sm border border-zinc-200/50 flex flex-col justify-between'>
        <audio 
          ref={audioRef} 
          src="../src/assets/music.mp3" 
          onEnded={() => setIsPlaying(false)} 
        />

        {/* Top Section: Album Cover & Logo */}
        <div className="flex justify-between items-start">
          <div className="w-30 h-30 bg-white p-2 rounded-2xl shadow-md flex items-center justify-center">
            <img 
              src="../src/assets/wk.jpeg" 
              alt="Album Cover" 
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          {/* Spotify Logo */}
        <div className="w-12 h-12 bg-gradient-to-transform from-green-500 to-green-500 rounded-2xl flex items-center justify-center shadow-lg shadow-black-500/30">
          <SpotifyIcon size={56} />
        </div>
        </div>

        {/* Track Info */}
        <div className="text-left mt-5">
            <div className="flex items-center gap-1.5">
                <span className="font-bold text-xl text-zinc-900 tracking-tight">RUNITUP</span>
            </div>
            <p className="text-zinc-500 text-sm font-lg mt-0.5 truncate">
                Tyler, The Creator — CALL ME IF...
            </p>
        </div>

        {/* Floating Player Controls Bar */}
        <div className="mt-2 bg-white/70 backdrop-blur-md border border-zinc-300/40 rounded-full px-4 py-2.5 flex items-center justify-between text-zinc-600 shadow-sm">
          <button className="hover:text-zinc-900 transition-colors">
            <Queue size={18} weight="bold" />
          </button>
          
          <button className="hover:text-zinc-900 transition-colors">
            <Rewind size={20} weight="fill" />
          </button>
          
          <button onClick={togglePlay} className="text-zinc-900 hover:scale-105 transition-transform">
            {isPlaying ? (
              <Pause size={24} weight="fill" />
            ) : (
              <Play size={24} weight="fill" />
            )}
          </button>

          <button className="hover:text-zinc-900 transition-colors">
            <FastForward size={20} weight="fill" />
          </button>
          
          <button onClick={toggleMute} className="hover:text-zinc-900 transition-colors">
            {isMuted ? (
              <SpeakerSimpleSlash size={20} weight="bold" />
            ) : (
              <SpeakerHigh size={20} weight="bold" />
            )}
          </button>
        </div>
      </div>

      {/* Photo*/}
      <div className='bg-zinc-100/70 p-5 rounded-3xl shadow-sm border border-zinc-200/50 flex flex-col justify-between'>
        <audio 
          ref={audioRef} 
          src="../src/assets/music.mp3" 
          onEnded={() => setIsPlaying(false)} 
        />

        {/* Top Section: Album Cover & Logo */}
        <div className="flex justify-between items-start">
          <div className="w-50 h-30 bg-white p-2 rounded-2xl shadow-md flex items-center justify-center">
            <img 
              src="../src/assets/album-cover.jpg" 
              alt="Album Cover" 
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          {/* Apple Music Logo */}
        <div className="w-12 h-12 bg-gradient-to-tr from-green-500 to-green-500 rounded-2xl flex items-center justify-center shadow-lg shadow-green-500/30">
            <PhotosIcon size={56} />
        </div>
        </div>

        {/* Floating Player Controls Bar */}
        <div className="mt-2 bg-white/70 backdrop-blur-md border border-zinc-300/40 rounded-full px-6 py-2.5 flex items-center justify-between text-zinc-600 shadow-sm">
          <button className="hover:text-zinc-900 transition-colors">
            <SquaresFourIcon size={35} color="#141414" weight="fill" />
          </button>
          
          <button className="hover:text-zinc-900 transition-colors">
            <MapTrifoldIcon size={35} color="#141414" weight="fill" />
          </button>
          <button className="hover:text-zinc-900 transition-colors">
            <HeartIcon size={35} color="#141414" weight="fill" />
          </button>
          <button className="hover:text-zinc-900 transition-colors">
            <GameControllerIcon size={35} color="#141414" weight="fill" />
          </button>
          
        </div>
      </div>

      {/* Podcast*/}
      <div className='bg-zinc-100/70 p-5 rounded-3xl shadow-sm border border-zinc-200/50 flex flex-col justify-between'>
        <audio 
          ref={audioRef} 
          src="../src/assets/music.mp3" 
          onEnded={() => setIsPlaying(false)} 
        />

        {/* Top Section: Album Cover & Logo */}
        <div className="flex justify-between items-start">
          <div className="w-30 h-30 bg-white p-2 rounded-2xl shadow-md flex items-center justify-center">
            <img 
              src="../src/assets/album-cover.jpg" 
              alt="Album Cover" 
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          {/* Apple Music Logo */}
        <div className="w-12 h-12 bg-gradient-to-tr from-green-500 to-green-500 rounded-2xl flex items-center justify-center shadow-lg shadow-green-500/30">
           <PodcastsIcon size={56} />
        </div>
        </div>

        {/* Track Info */}
        <div className="text-left mt-5">
            <div className="flex items-center gap-1.5">
                <span className="font-bold text-xl text-zinc-900 tracking-tight">RUNITUP</span>
            </div>
            <p className="text-zinc-500 text-sm font-lg mt-0.5 truncate">
                Tyler, The Creator — CALL ME IF...
            </p>
        </div>

        {/* Floating Player Controls Bar */}
        <div className="mt-2 bg-white/70 backdrop-blur-md border border-zinc-300/40 rounded-full px-4 py-2.5 flex items-center justify-between text-zinc-600 shadow-sm">
          <button className="hover:text-zinc-900 transition-colors">
            <Queue size={18} weight="bold" />
          </button>
          
          <button className="hover:text-zinc-900 transition-colors">
            <Rewind size={20} weight="fill" />
          </button>
          
          <button onClick={togglePlay} className="text-zinc-900 hover:scale-105 transition-transform">
            {isPlaying ? (
              <Pause size={24} weight="fill" />
            ) : (
              <Play size={24} weight="fill" />
            )}
          </button>

          <button className="hover:text-zinc-900 transition-colors">
            <FastForward size={20} weight="fill" />
          </button>
          
          <button onClick={toggleMute} className="hover:text-zinc-900 transition-colors">
            {isMuted ? (
              <SpeakerSimpleSlash size={20} weight="bold" />
            ) : (
              <SpeakerHigh size={20} weight="bold" />
            )}
          </button>
        </div>
      </div>

    </div>
  );
}

export default About;