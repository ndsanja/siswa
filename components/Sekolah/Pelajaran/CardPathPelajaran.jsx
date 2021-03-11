import Grid from "../../Atom/Grid";
import CardPelajaran from "../Pelajaran/CardPelajaran";

export default function CardPathPelajaran() {
  const namaPelajaran = ["Sosiologi", "Geografi", "Ekonomi", "Sejarah"];
  return (
    <Grid className="grid-cols-12 gap-6">
      {namaPelajaran.map((nama) => (
        <CardPelajaran key={nama} namaPelajaran={nama} />
      ))}
    </Grid>
  );
}
