import Grid from "../../Grid";
import CardPelajaran from "./CardPelajaran";
import HeaderPelajaran from "./HeaderPelajaran";

export default function Index() {
  return (
    <div>
      <HeaderPelajaran />
      <div className="h-8"></div>
      <Grid className="grid-cols-12 gap-6">
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
    </div>
  );
}
