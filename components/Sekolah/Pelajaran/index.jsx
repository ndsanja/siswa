import Grid from "../../Atom/Grid";
import TabPanel from "../../Atom/TabPanel";
import CardPelajaran from "./CardPelajaran";

export default function Index(props) {
  return (
    <TabPanel
      className={`${props.openTab == "pelajaran" ? "block" : "hidden"}`}
    >
      <div className="h-8"></div>
      <Grid className={`grid-cols-12 gap-6`}>
        <CardPelajaran />
        <CardPelajaran />
        <CardPelajaran />
        <CardPelajaran />
        <CardPelajaran />
        <CardPelajaran />
        <CardPelajaran />
        <CardPelajaran />
        <CardPelajaran />
        <CardPelajaran />
        <CardPelajaran />
        <CardPelajaran />
        <CardPelajaran />
        <CardPelajaran />
        <CardPelajaran />
        <CardPelajaran />
        <CardPelajaran />
      </Grid>
    </TabPanel>
  );
}
