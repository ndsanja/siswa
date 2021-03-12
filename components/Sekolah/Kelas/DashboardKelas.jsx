import Card from "../../Atom/Card";
import Flex from "../../Atom/Flex";
import Grid from "../../Atom/Grid";
import Button from "../../Atom/Button";
import Avatar from "../../Atom/Avatar";

export default function Profile() {
  const avatar = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  return (
    <div>
      <div className="h-8"></div>
      <Grid className="grid-cols-12 gap-6">
        <div className="col-span-4">
          <Grid className="gap-6">
            <Card className=" bg-white font-semibold text-sm  space-y-4 mb-4 leading-relaxed">
              <div className="relative rounded-xl border text-warning-main border-warning-main p-3 pb-8 space-y-1 shadow-warning-light-shadow">
                <h1 className="uppercase">Perhatian !!!</h1>
                <p className="mb-4">
                  Tugas Prasyarat harus sudah diselesaikan semua untuk dapat
                  mengikuti Ujian Tengah Semester(UTS)
                </p>
                <span className="text-xs font-medium absolute bottom-1 right-2 block italic">
                  created at 15/3/2021
                </span>
              </div>
              <div className="relative rounded-xl border text-info-main border-info-main p-3 pb-8 space-y-1 shadow-info-light-shadow">
                <h1 className="uppercase">Info !!</h1>
                <p>
                  Ujian Tengah Semester(UTS) akan dilakukan secara daring mulai
                  tanggal 12 april 2021. info selengkapnya silahkan kunjungi{" "}
                  <a href="#" className="underline">
                    TAUTAN INI
                  </a>
                </p>
                <span className="text-xs font-medium absolute bottom-1 right-2 block italic">
                  updated at 15/3/2021
                </span>
              </div>
            </Card>
            <Card className=" bg-white shadow-z12-light-shadow rounded-xl px-6 py-4">
              <div className="mb-4">
                <h1 className="text-textColor-secondary-light font-semibold text-sm">
                  Members of class
                </h1>
              </div>
              <Grid className="grid-cols-4 gap-4 ">
                {avatar.map((i) => (
                  <Avatar
                    key={i}
                    className="relative h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center overflow-visible"
                  >
                    <h1 className="text-textColor-primary-dark font-semibold text-2xl uppercase">
                      {i}
                    </h1>
                    <img src="" alt="" />
                    <span className="absolute z-10 bottom-0 right-0 uppercase flex items-center justify-center h-4 w-4 text-xs font-semibold text-textColor-primary-light bg-warning-main rounded-full">
                      M
                    </span>
                  </Avatar>
                ))}
              </Grid>
            </Card>
            <Card className=" bg-white shadow-z12-light-shadow rounded-xl h-72"></Card>
          </Grid>
        </div>
        <div className="col-span-8">
          <Grid className="gap-6">
            <Card className=" bg-white shadow-z12-light-shadow rounded-xl">
              <Flex className="flex-col p-6 space-y-6">
                <textarea
                  name=""
                  id=""
                  placeholder="Kirim sesuatu di kelas ini..."
                  className="w-full h-36 rounded-lg border border-grey-400 focus:outline-none p-4 resize-none"
                ></textarea>
                <Flex className="flex-row justify-between items-center">
                  <div className="space-x-4">
                    <span>icon</span>
                    <span>icon</span>
                  </div>
                  <Button className="bg-primary-main shadow-z12-light-shadow text-textColor-primary-dark font-semibold text-sm px-3 py-2 rounded-lg">
                    Post
                  </Button>
                </Flex>
              </Flex>
            </Card>
            <Card className=" bg-white shadow-z12-light-shadow rounded-xl">
              <Flex className="flex-col p-6 space-y-6">
                <Flex className="flex-row items-center justify-between">
                  <Flex className="flex-row items-center space-x-3">
                    <Avatar className="h-10 w-10 bg-red-500 rounded-full">
                      <img src="" alt="" />
                    </Avatar>
                    <div>
                      <h1 className="font-semibold text-sm text-textColor-primary-light">
                        SMA Negeri 1 Srengat
                      </h1>
                      <p className="text-xs font-medium text-textColor-secondary-light">
                        20 Maret 2012
                      </p>
                    </div>
                  </Flex>
                  <div className="p-2 rounded-full hover:bg-grey-200 cursor-pointer">
                    icon
                  </div>
                </Flex>
                <div>
                  <p className="text-textColor-primary-light">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Architecto, reprehenderit?
                  </p>
                </div>
                <div className="overflow-hidden w-full h-60 bg-blue-500 rounded-lg">
                  <img src="" alt="" />
                </div>
                <Flex className="flex-row items-center justify-between">
                  <div>icon likes</div>
                  <div className="space-x-4">
                    <span>comment</span>
                    <span>share</span>
                  </div>
                </Flex>
                <Flex className="flex-col space-y-4">
                  <Flex className="flex-row items-start space-x-4">
                    <div>
                      <Avatar className="h-10 w-10 bg-yellow-500 rounded-full">
                        <img src="" alt="" className="w-10" />
                      </Avatar>
                    </div>
                    <div className="bg-grey-200 rounded-lg p-4 space-y-2 w-full">
                      <Flex className="flex-row items-center justify-between">
                        <h1 className="text-sm font-semibold text-textColor-primary-light">
                          Nila Dwi Sanja
                        </h1>
                        <p className="text-textColor-secondary-light text-xs">
                          21 Maret 2021
                        </p>
                      </Flex>
                      <p className="text-sm text-textColor-secondary-light font-semibold">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Officia placeat ab modi quibusdam laboriosam dolore sit
                        hic corporis tenetur ducimus!
                      </p>
                    </div>
                  </Flex>
                  <Flex className="flex-row items-start space-x-4">
                    <div>
                      <Avatar className="h-10 w-10 bg-pink-500 rounded-full">
                        <img src="" alt="" className="w-10" />
                      </Avatar>
                    </div>
                    <div className="bg-grey-200 rounded-lg p-4 space-y-2 w-full">
                      <Flex className="flex-row items-center justify-between">
                        <h1 className="text-sm font-semibold text-textColor-primary-light">
                          Kiki Dwi Ratna
                        </h1>
                        <p className="text-textColor-secondary-light text-xs">
                          22 Maret 2021
                        </p>
                      </Flex>
                      <p className="text-sm text-textColor-secondary-light font-semibold">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                    </div>
                  </Flex>
                </Flex>
                <Flex className="flex-row items-center space-x-4">
                  <div>
                    <Avatar className="h-10 w-10 rounded-full bg-primary-main">
                      <img src="" alt="" />
                    </Avatar>
                  </div>
                  <input
                    type="text"
                    placeholder="Tulis Komentar..."
                    className="rounded-lg border border-grey-400 py-2 px-4 w-full focus:outline-none"
                  />
                  <span className="text-textColor-secondary-light font-semibold text-sm cursor-pointer">
                    Send
                  </span>
                </Flex>
              </Flex>
            </Card>

            <Card className=" bg-white shadow-z12-light-shadow rounded-xl">
              <Flex className="flex-col p-6 space-y-6">
                <Flex className="flex-row items-center justify-between">
                  <Flex className="flex-row items-center space-x-3">
                    <Avatar className="h-10 w-10 bg-red-500 rounded-full">
                      <img src="" alt="" />
                    </Avatar>
                    <div>
                      <h1 className="font-semibold text-sm text-textColor-primary-light">
                        Nadiem Makarim
                      </h1>
                      <p className="text-xs font-medium text-textColor-secondary-light">
                        20 Maret 2012
                      </p>
                    </div>
                  </Flex>
                  <div className="p-2 rounded-full hover:bg-grey-200 cursor-pointer">
                    icon
                  </div>
                </Flex>
                <div>
                  <p className="text-textColor-primary-light">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Architecto, reprehenderit?
                  </p>
                </div>
                <div className="overflow-hidden w-full h-60 bg-purple-500 rounded-lg">
                  <img src="" alt="" />
                </div>
                <Flex className="flex-row items-center justify-between">
                  <div>icon likes</div>
                  <div className="space-x-4">
                    <span>comment</span>
                    <span>share</span>
                  </div>
                </Flex>
                <Flex className="flex-col space-y-4">
                  <Flex className="flex-row items-start space-x-4">
                    <div>
                      <Avatar className="h-10 w-10 bg-yellow-500 rounded-full">
                        <img src="" alt="" className="w-10" />
                      </Avatar>
                    </div>
                    <div className="bg-grey-200 rounded-lg p-4 space-y-2 w-full">
                      <Flex className="flex-row items-center justify-between">
                        <h1 className="text-sm font-semibold text-textColor-primary-light">
                          Nila Dwi Sanja
                        </h1>
                        <p className="text-textColor-secondary-light text-xs">
                          21 Maret 2021
                        </p>
                      </Flex>
                      <p className="text-sm text-textColor-secondary-light font-semibold">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Officia placeat ab modi quibusdam laboriosam dolore sit
                        hic corporis tenetur ducimus!
                      </p>
                    </div>
                  </Flex>
                  <Flex className="flex-row items-start space-x-4">
                    <div>
                      <Avatar className="h-10 w-10 bg-pink-500 rounded-full">
                        <img src="" alt="" className="w-10" />
                      </Avatar>
                    </div>
                    <div className="bg-grey-200 rounded-lg p-4 space-y-2 w-full">
                      <Flex className="flex-row items-center justify-between">
                        <h1 className="text-sm font-semibold text-textColor-primary-light">
                          Kiki Dwi Ratna
                        </h1>
                        <p className="text-textColor-secondary-light text-xs">
                          22 Maret 2021
                        </p>
                      </Flex>
                      <p className="text-sm text-textColor-secondary-light font-semibold">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                    </div>
                  </Flex>
                </Flex>
                <Flex className="flex-row items-center space-x-4">
                  <div>
                    <Avatar className="h-10 w-10 rounded-full bg-primary-main">
                      <img src="" alt="" />
                    </Avatar>
                  </div>
                  <input
                    type="text"
                    placeholder="Tulis Komentar..."
                    className="rounded-lg border border-grey-400 py-2 px-4 w-full focus:outline-none"
                  />
                  <span className="text-textColor-secondary-light font-semibold text-sm cursor-pointer">
                    Send
                  </span>
                </Flex>
              </Flex>
            </Card>
          </Grid>
        </div>
      </Grid>
    </div>
  );
}
