import React from "react";

export default function Sidebar() {
  return (
    <div className="w-1/4 border-r border-grey-400 fixed overflow-y-auto top-0 left-0 h-screen z-30">
      <div className="container px-8 py-24">
        {/* <div className="h-24"></div> */}
        <div className="flex justify-start items-center space-x-4 rounded-xl bg-grey-200 p-4">
          <div className="h-10 w-10 rounded-full overflow-x-hidden bg-red-400">
            <img src="" alt="" />
          </div>
          <div className="space-y-1">
            <h4 className="text-textColor-primary-light text-sm font-semibold">
              Nila Dwi Sanja
            </h4>
            <h5 className="text-textColor-secondary-light text-sm font-semibold">
              siswa
            </h5>
          </div>
        </div>
        <div className="h-10"></div>
        <div className="flex flex-col space-y-4 text-textColor-secondary-light font-semibold">
          <div>Dashboard</div>
          <div className="flex flex-col">
            <ul className="list-disc list-inside space-y-3">
              <li>Dashboard</li>
              <li>Analisa</li>
              <li>E-Raport</li>
            </ul>
          </div>
        </div>
        <div className="h-10"></div>
        <div className="flex flex-col space-y-4 text-textColor-secondary-light font-semibold">
          <div>Users</div>
          <div className="flex flex-col">
            <ul className="list-disc list-inside space-y-3">
              <li>Profil</li>
              <li>Akun</li>
              <li>Kalender</li>
              <li>Catatan</li>
            </ul>
          </div>
        </div>
        <div className="h-10"></div>
        <div className="flex flex-col space-y-4 text-textColor-secondary-light font-semibold">
          <div>Sekolah</div>
          <div className="flex flex-col">
            <ul className="list-disc list-inside space-y-3">
              <li>Kelas</li>
              <li>Pelajaran</li>
              <li>Kelompok Belajar</li>
              <li>Learning Path</li>
              <li>Laboratorium</li>
              <li>Ekstrakurikuler</li>
              <li>Perpustakaan</li>
            </ul>
          </div>
        </div>
        <div className="h-10"></div>
        <div className="flex flex-col space-y-4 text-textColor-secondary-light font-semibold">
          <div>Blog</div>
          <div className="flex flex-col">
            <ul className="list-disc list-inside space-y-3">
              <li>Membuat Post</li>
              <li>Daftar Post</li>
              <li>Media</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
