import React, { useContext, useEffect, useState } from "react";
import { Songs } from "../Context";

export default function ListSongs() {
  const { DataSongs, handleSetSong, song } = useContext(Songs);
  const [idSong, setidSong] = useState(0);
  const handlePlaySong = (idSong) => {
    setidSong(idSong)
    handleSetSong(idSong)
  };
  useEffect(() => {
    setidSong(song.id)
  }, [song]) 
  return (
    <div className="col-span-3 overflow-y-scroll">
      <table className="table-auto w-full">
        <thead className="text-white h-12">
          <tr>
            <th className="w-[10%]">#</th>
            <th className="text-left">Title</th>
            <th className="w-[10%]">Author</th>
            <th className="w-[10%]">
              <i className="fa fa-download"></i>
            </th>
          </tr>
        </thead>
        <tbody>
          {DataSongs.map((song, index) => (
            <tr
              key={index}
              className={`bg-slate-800 h-12 text-gray-500 hover:bg-slate-600 ${idSong === song.id && 'bg-slate-600 text-teal-400'}`}
              onClick={() => handlePlaySong(song.id)}
            >
              <td className="text-center">{index + 1}</td>
              <td>{song.name}</td>
              <td className="text-center">{song.author}</td>
              <td className="text-center">
                <a href={song.url}>
                  <i className="fa fa-download"></i>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// import React, { useContext, useEffect, useState } from "react";
// import { Songs } from "../Context";

// export default function ListSongs() {
//   const { DataSongs, handleSetSong, song } = useContext(Songs);
//   const [idSong, setidSong] = useState(0);
//   const handlePlaySong = (idSong) => {
//     setidSong(idSong);
//     handleSetSong(idSong);
//   };
//   useEffect(() => {
//     setidSong(song.id);
//   }, [song]);

//   // Lưu trữ danh sách URL tập tin nhạc đã tải xuống
//   useEffect(() => {
//     // Kiểm tra nếu trình duyệt hỗ trợ Web Storage
//     if (typeof Storage !== "undefined") {
//       // Lấy danh sách URL tập tin nhạc đã tải xuống từ Local Storage
//       const savedSongs = localStorage.getItem("offlineSongs");
//       const offlineSongs = savedSongs ? JSON.parse(savedSongs) : [];

//       // Kiểm tra xem tất cả các URL trong danh sách có tồn tại hay không
//       const updatedOfflineSongs = offlineSongs.filter(url =>
//         DataSongs.some(song => song.url === url)
//       );

//       // Cập nhật danh sách URL tập tin nhạc đã tải xuống
//       localStorage.setItem("offlineSongs", JSON.stringify(updatedOfflineSongs));
//     }
//   }, [DataSongs]);

//   // Xử lý sự kiện tải xuống
//   const handleDownload = (event, song) => {
//     event.preventDefault();
//     const { url } = song;

//     // Kiểm tra nếu trình duyệt hỗ trợ Web Storage
//     if (typeof Storage !== "undefined") {
//       // Lấy danh sách URL tập tin nhạc đã tải xuống từ Local Storage
//       const savedSongs = localStorage.getItem("offlineSongs");
//       const offlineSongs = savedSongs ? JSON.parse(savedSongs) : [];

//       // Kiểm tra xem URL tập tin đã tồn tại trong danh sách chưa
//       const isSongDownloaded = offlineSongs.includes(url);

//       if (!isSongDownloaded) {
//         // Thêm URL tập tin nhạc mới vào danh sách
//         const updatedOfflineSongs = [...offlineSongs, url];
//         localStorage.setItem("offlineSongs", JSON.stringify(updatedOfflineSongs));
//         console.log("Tải xuống thành công!");
//       } else {
//         console.log("Bài hát đã được tải xuống trước đó!");
//       }
//     }
//   };

//   return (
//     <div className="col-span-3 overflow-y-scroll">
//       <table className="table-auto w-full">
//       <thead className="text-white h-12">
//   <tr>
//     <th className="w-[10%]">#</th>
//     <th className="text-left">Title</th>
//     <th className="w-[10%]">Author</th>
//     <th className="w-[10%]">
//       <i className="fa fa-download"></i>
//     </th>
//   </tr>
// </thead>
// <tbody>
//   {DataSongs.map((song, index) => (
//     <tr
//       key={index}
//       className={`bg-slate-800 h-12 text-gray-500 hover:bg-slate-600 ${
//         idSong === song.id && "bg-slate-600 text-teal-400"
//       }`}
//       onClick={() => handlePlaySong(song.id)}
//     >
//       <td className="text-center">{index + 1}</td>
//       <td>{song.name}</td>
//       <td className="text-center">{song.author}</td>
//       <td className="text-center">
//         {typeof Storage !== "undefined" ? (
//           // Kiểm tra xem tập tin đã tải xuống hay chưa
//           localStorage.getItem("offlineSongs") &&
//           JSON.parse(localStorage.getItem("offlineSongs")).includes(song.url) ? (
//             <span>Bài hát đã tải xuống</span>
//           ) : (
//             <a href={song.url} onClick={(e) => handleDownload(e, song)}>
//               <i className="fa fa-download"></i>
//             </a>
//           )
//         ) : (
//           <a href={song.url} onClick={(e) => handleDownload(e, song)}>
//             <i className="fa fa-download"></i>
//           </a>
//         )}
//       </td>
//     </tr>
//   ))}
// </tbody>
//       </table>
//    </div>
//   );
// }

