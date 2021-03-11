import Card from "../Atom/Card";
import Flex from "../Atom/Flex";
import Grid from "../Atom/Grid";
import Button from "../Atom/Button";
import Avatar from "../Atom/Avatar";

export default function Profile() {
  return (
    <div>
      <div className="h-8"></div>
      <Grid className="grid-cols-12 gap-6">
        <div className="col-span-4">
          <Grid className="gap-6">
            <Card className=" bg-white shadow-z12-light-shadow rounded-xl h-28">
              <Flex className="flex-row divide-x justify-center items-center h-full w-full text-center font-semibold">
                <div className="px-8 py-4 space-y-1">
                  <h1 className="font-bold text-warning-main text-xl">
                    KURANG
                  </h1>
                  <p className="text-sm text-textColor-secondary-light">
                    performa
                  </p>
                </div>
                <div className="px-8 py-4 space-y-1">
                  <h1 className="font-bold text-textColor-primary-light text-xl">
                    3 / 20
                  </h1>
                  <p className="text-sm text-textColor-secondary-light">
                    tugas
                  </p>
                </div>
              </Flex>
            </Card>
            <Card className=" bg-white shadow-z12-light-shadow rounded-xl h-72"></Card>
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
                  placeholder="Apa yang kamu pikirkan hari ini..."
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
