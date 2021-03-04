import TabPanel from "../../TabPanel";
import CardPathPelajaran from "./CardPathPelajaran";

export default function PathPelajaran(props) {
  return (
    <TabPanel
      className={`${
        props.openTab == "pelajaran" ? `flex` : `hidden`
      } flex-col space-y-8`}
    >
      <CardPathPelajaran />
    </TabPanel>
  );
}
