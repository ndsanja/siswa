import Grid from "../../Atom/Grid";
import TabPanel from "../../Atom/TabPanel";
import CardLearningPath from "./CardLearningPath";
import CardPelajaran from "./CardPelajaran";

export default function LearningPath(props) {
  return (
    <TabPanel
      className={`${props.openTab == "learning-path" ? "block" : "hidden"}`}
    >
      <div className="h-8"></div>
      <Grid className={`grid-cols-12 gap-6`}>
        <CardLearningPath />
        <CardLearningPath />
        <CardLearningPath />
        <CardLearningPath />
        <CardLearningPath />
        <CardLearningPath />
        <CardLearningPath />
      </Grid>
    </TabPanel>
  );
}
