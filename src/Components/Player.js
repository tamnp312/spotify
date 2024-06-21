import React from "react";


import { useState } from "react";
import Navbar from "./Navbar";
import DetailSong from "./DetailSong";
import ListSongs from "./ListSongs";
import { Songs } from "../Context";
import DataSongs from "../data/songs.json"
import Playing from "./Playing";


function Player() {
  const [song, setSong] = useState(DataSongs[0])

  const handleSetSong = (idSong) => {
    const song = DataSongs.find(song => song.id === idSong)
    if(!song) 
           setSong(DataSongs[0])
    else
           setSong(song)
  }
    return (
      // <div className="player">
      //   <div className="player_body">
      //     <Sidebar />
      //     <Body />
      //   </div>
      //   <Footer />
      // </div>
      <div>
        <Songs.Provider value={{ DataSongs, song, handleSetSong}}>
        <Navbar />
        <div className="grid grid-cols-4 bg-slate-700 h-screen-navbar-player overflow-hidden">
          {/* span 1 */}
          <DetailSong />
          {/* span 2 */}
          <ListSongs />
        </div>
        <Playing/>
      </Songs.Provider>
      </div>
    );
  }
export default Player;