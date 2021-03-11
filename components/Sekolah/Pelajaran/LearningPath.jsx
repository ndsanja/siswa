import Grid from "../../Atom/Grid";
import TabPanel from "../../Atom/TabPanel";
import CardLearningPath from "./CardLearningPath";
import CardPelajaran from "./CardPelajaran";

export default function LearningPath(props) {
  const namaPath = [
    "UTBK Ilmu Pengetahuan Sosial",
    "UTBK Ilmu Pengetahuan Alam",
    "Lancar Bahasa Ingris",
    "Pengantar Machine Learning",
    "Pengantar Bisnis",
    "Pengantar Penulisan Ilmiah",
  ];
  return (
    <TabPanel
      className={`${props.openTab == "learning-path" ? "block" : "hidden"}`}
    >
      <div className="h-8"></div>
      <Grid className={`grid-cols-12 gap-6`}>
        {namaPath.map((nama) => (
          <CardLearningPath key={nama} nama={nama} />
        ))}
      </Grid>
    </TabPanel>
  );
}
