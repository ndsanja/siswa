import TabPanel from "../../TabPanel";
import ListLatihan from "./ListLatihan";
import ListItemsLatihan from "./ListItemsLatihan";
import Card from "../../Card";
import Flex from "../../Flex";

export default function Silabus(props) {
  return (
    <TabPanel
      className={`${
        props.openTab == "latihan" ? `flex` : `hidden`
      } flex-col space-y-8`}
    >
      <Card className="rounded-xl shadow-z12-light-shadow p-8">
        <Flex className="flex-row items-center space-x-4">
          <div className="w-24 h-32 bg-primary-main"></div>
          <h1 className="text-textColor-secondary-light font-semibold">
            There are 12 assignments coming up. Be sure to submit them before
            the deadline.
          </h1>
        </Flex>
      </Card>

      <ListLatihan>
        <ListItemsLatihan
          nama="Pelajaran 1"
          deskripsi="Kuis"
          status="Terkumpul"
          deadline="17 Feb"
          jam="20.00 WIB"
          bobot="2%"
          nilai="73 / B-"
        />
        <ListItemsLatihan
          nama="Pelajaran 1"
          deskripsi="Kuis"
          status="Terkumpul"
          deadline="17 Feb"
          jam="20.00 WIB"
          bobot="2%"
          nilai="73 / B-"
        />
        <ListItemsLatihan
          nama="Pelajaran 1"
          deskripsi="Kuis"
          status="Terkumpul"
          deadline="17 Feb"
          jam="20.00 WIB"
          bobot="2%"
          nilai="73 / B-"
        />
        <ListItemsLatihan
          nama="Pelajaran 1"
          deskripsi="Kuis"
          status="Terkumpul"
          deadline="17 Feb"
          jam="20.00 WIB"
          bobot="2%"
          nilai="73 / B-"
        />
        <ListItemsLatihan
          nama="Pelajaran 1"
          deskripsi="Kuis"
          status="Terkumpul"
          deadline="17 Feb"
          jam="20.00 WIB"
          bobot="2%"
          nilai="73 / B-"
        />
        <ListItemsLatihan
          nama="Pelajaran 1"
          deskripsi="Kuis"
          status="Terkumpul"
          deadline="17 Feb"
          jam="20.00 WIB"
          bobot="2%"
          nilai="73 / B-"
        />
        <ListItemsLatihan
          nama="Pelajaran 1"
          deskripsi="Kuis"
          status="Terkumpul"
          deadline="17 Feb"
          jam="20.00 WIB"
          bobot="2%"
          nilai="73 / B-"
        />
      </ListLatihan>
    </TabPanel>
  );
}
