import TabPanel from "../../TabPanel";
import CardSilabus from "../Pelajaran/CardSilabus";

export default function Silabus(props) {
  return (
    <TabPanel
      className={`${
        props.openTab == "silabus" ? `flex` : `hidden`
      } flex-col space-y-8`}
    >
      <CardSilabus />
      <CardSilabus />
      <CardSilabus />
      <CardSilabus />
      <CardSilabus />
      <CardSilabus />
      <CardSilabus />
      <CardSilabus />
      <CardSilabus />
      <CardSilabus />
      <CardSilabus />
      <CardSilabus />
    </TabPanel>
  );
}
