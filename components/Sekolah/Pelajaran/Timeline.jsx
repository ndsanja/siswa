import TabPanel from "../../TabPanel";
import CardTimeline from "./CardTimeline";

export default function Timeline(props) {
  return (
    <TabPanel
      className={`${
        props.openTab == "timeline" ? `flex` : `hidden`
      } flex-col space-y-8`}
    >
      <CardTimeline />
      <CardTimeline />
      <CardTimeline />
      <CardTimeline />
      <CardTimeline />
      <CardTimeline />
      <CardTimeline />
      <CardTimeline />
      <CardTimeline />
      <CardTimeline />
      <CardTimeline />
    </TabPanel>
  );
}
