import Card from "../Card";
import Grid from "../Grid";
import HeaderProfile from "./HeaderProfile";

export default function Profile() {
  return (
    <div>
      <HeaderProfile />
      <div className="h-8"></div>
      <Grid className="grid-cols-12 gap-6">
        <div className="col-span-4">
          <Grid className="gap-6">
            <Card className=" bg-white shadow-z12-light-shadow rounded-xl h-32"></Card>
            <Card className=" bg-white shadow-z12-light-shadow rounded-xl h-72"></Card>
            <Card className=" bg-white shadow-z12-light-shadow rounded-xl h-72"></Card>
          </Grid>
        </div>
        <div className="col-span-8">
          <Grid className="gap-6">
            <Card className=" bg-white shadow-z12-light-shadow rounded-xl h-52"></Card>
            <Card className=" bg-white shadow-z12-light-shadow rounded-xl h-96"></Card>
            <Card className=" bg-white shadow-z12-light-shadow rounded-xl h-96"></Card>
          </Grid>
        </div>
      </Grid>
    </div>
  );
}
