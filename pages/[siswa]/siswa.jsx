import MainContent from "../../components/MainContent";
import CardSiswa from "../../components/Users/CardSiswa";
import Grid from "../../components/Atom/Grid";

export default function siswa() {
  return (
    <div className="bg-white">
      <MainContent>
        <Grid className="grid-cols-12 gap-4">
          <CardSiswa />
          <CardSiswa />
          <CardSiswa />
          <CardSiswa />
          <CardSiswa />
        </Grid>
      </MainContent>
    </div>
  );
}
