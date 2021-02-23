import Card from "../components/Card";
import MainContent from "../components/MainContent";
import Grid from "../components/Grid";

export default function index() {
  return (
    <div className="bg-white">
      <MainContent>
        <Grid className="grid-cols-12 gap-6">
          <Card className="rounded-xl bg-gradient-to-br from-primary-light to-primary-main shadow-z12-light-shadow h-60 col-span-8"></Card>
          <Card className="rounded-xl bg-grey-500 h-60 shadow-z12-light-shadow col-span-4"></Card>

          <Card className="rounded-xl bg-white shadow-z12-light-shadow h-36 col-span-4"></Card>
          <Card className="rounded-xl bg-white shadow-z12-light-shadow h-36 col-span-4"></Card>
          <Card className="rounded-xl bg-white shadow-z12-light-shadow h-36 col-span-4"></Card>

          <Card className="rounded-xl bg-white shadow-z12-light-shadow h-96 col-span-4"></Card>
          <Card className="rounded-xl bg-white shadow-z12-light-shadow h-96 col-span-8"></Card>

          <Card className="rounded-xl bg-white shadow-z12-light-shadow h-96 col-span-8"></Card>
          <Card className="rounded-xl bg-white shadow-z12-light-shadow h-96 col-span-4"></Card>

          <Card className="rounded-xl bg-white shadow-z12-light-shadow h-96 col-span-4"></Card>
          <Card className="rounded-xl bg-white shadow-z12-light-shadow h-96 col-span-4"></Card>
          <Grid className="gap-6 col-span-4">
            <Card className="rounded-xl bg-white shadow-z12-light-shadow h-44"></Card>
            <Card className="rounded-xl bg-white shadow-z12-light-shadow h-44"></Card>
          </Grid>
        </Grid>
      </MainContent>
    </div>
  );
}
