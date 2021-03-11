import Grid from "../../Atom/Grid";
import CardKelas from "./CardKelas";
import HeaderKelas from "./HeaderKelas";

export default function Index() {
  const namaKelas = [
    "X-A",
    "XI-IPS 2",
    "XII-IPA 4",
    "Siap UTBK",
    "Matrikulasi",
  ];
  return (
    <div>
      <HeaderKelas />
      <div className="h-8"></div>
      <Grid className="grid-cols-12 gap-6">
        {namaKelas.map((nama) => (
          <CardKelas key={nama} namaKelas={nama} />
        ))}
      </Grid>
    </div>
  );
}
