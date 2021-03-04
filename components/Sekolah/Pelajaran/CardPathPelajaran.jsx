import Grid from "../../Grid";
import CardPelajaran from "../Pelajaran/CardPelajaran";

export default function CardPathPelajaran() {
  return (
    <Grid className="grid-cols-12 gap-6">
      <CardPelajaran />
      <CardPelajaran />
      <CardPelajaran />
      <CardPelajaran />
      <CardPelajaran />
    </Grid>
  );
}
