import Grid from "../../Grid";
import CardKelas from "./CardKelas";
import HeaderKelas from "./HeaderKelas";

export default function Index() {
  return (
    <div>
      <HeaderKelas />
      <div className="h-8"></div>
      <Grid className="grid-cols-12 gap-6">
        <CardKelas />
        <CardKelas />
        <CardKelas />
        <CardKelas />
        <CardKelas />
      </Grid>
    </div>
  );
}
