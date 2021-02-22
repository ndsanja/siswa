import React from "react";
import Card from "../Card";

export default function HeaderProfile() {
  return (
    <>
      <div className="flex flex-col space-y-4">
        <h1 className="font-semibold text-2xl text-textColor-primary-light">
          Profile
        </h1>
        <div className="flex text-textColor-primary-light text-sm space-x-4 font-semibold">
          <div>Dashboard</div>
          <div>.</div>
          <div>Management</div>
          <div>.</div>
          <div>User</div>
          <div>.</div>
          <div className="text-textColor-secondary-light">Nila Dwi Sanja</div>
        </div>
      </div>
      <div className="h-8"></div>
      <div className="grid grid-cols-12">
        <Card className="col-span-full rounded-xl bg-info-dark h-64 overflow-hidden relative shadow-z12-light-shadow">
          <div className="z-10 absolute bottom-6 left-6 flex items-center space-x-6">
            <div className="h-28 w-28 rounded-full bg-error-main ring-white ring-2 ">
              <img src="" alt="" />
            </div>
            <div>
              <h1 className="font-semibold text-xl text-textColor-primary-dark">
                Nila Dwi Sanja
              </h1>
              <h4 className="font-semibold text-textColor-secondary-dark">
                Siswa - XI-IPS 3
              </h4>
            </div>
          </div>
          <div className="flex items-center justify-end space-x-12 absolute bottom-0 right-0 z-10 px-6 leading-10 font-semibold text-textColor-secondary-light">
            <div className="border-b-2 border-primary-main text-textColor-primary-light">
              Profile
            </div>
            <div>Info</div>
            <div>Kesiswaan</div>
            <div>Administrasi</div>
          </div>
          <div className="bg-white absolute bottom-0 w-full h-12"></div>
        </Card>
      </div>
    </>
  );
}
