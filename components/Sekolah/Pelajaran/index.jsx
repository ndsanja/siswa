import Grid from "../../Atom/Grid";
import TabPanel from "../../Atom/TabPanel";
import CardPelajaran from "./CardPelajaran";

export default function Index(props) {
  const namaPelajaran = [
    "Matematika",
    "Sosiologi",
    "Kimia",
    "Ekonomi",
    "Sejarah",
    "Pkn",
    "Biologi",
    "Fisika",
    "Bahasa Indonesia",
    "Bahasa Inggris",
    "Agama",
    "BK",
  ];
  return (
    <TabPanel
      className={`${props.openTab == "pelajaran" ? "block" : "hidden"}`}
    >
      <div className="h-8"></div>
      <Grid className={`grid-cols-12 gap-6`}>
        {namaPelajaran.map((nama) => (
          <CardPelajaran key={name} namaPelajaran={nama} />
        ))}
      </Grid>
    </TabPanel>
  );
}
