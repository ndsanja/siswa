import Container from "../../Atom/Container";
import Card from "../../Atom/Card";
import Flex from "../../Atom/Flex";
import IconButton from "../../Atom/IconButton";
import Grid from "../../Atom/Grid";

export default function ListGuruKelas(props) {
  return (
    <Card className="rounded-xl shadow-z12-light-shadow">
      <Container className="px-2 w-full">
        <Flex className="flex-col justify-center py-4">
          <Flex className="flex-row items-center justify-between px-4">
            <input
              type="text"
              placeholder="Search..."
              className="p-4 rounded-lg ring-1 ring-textColor-secondary-light focus:outline-none"
            />
            <IconButton>icon</IconButton>
          </Flex>
          <Flex className="flex-col justify-center font-semibold text-sm text-textColor-primary-light mt-4">
            <Grid className="grid-cols-12 bg-grey-200 rounded-xl py-3 px-2 items-center inline-grid text-textColor-secondary-light">
              <div className="col-span-1 rounded-full flex items-center justify-center">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="focus:outline-none"
                />
              </div>
              <h2 className="col-span-4 text-textColor-primary-light">Nama</h2>
              <h2 className="col-span-2">Mapel</h2>
              <h2 className="col-span-2">NIP</h2>
              <h2 className="col-span-1">Status</h2>
              <h2 className="col-span-1">deskripsi</h2>
              <IconButton className="invisible col-span-1">icon</IconButton>
            </Grid>
            {props.children}
          </Flex>
        </Flex>
      </Container>
    </Card>
  );
}
