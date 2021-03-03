import Container from "../../Container";
import Card from "../../Card";
import Flex from "../../Flex";
import Grid from "../../Grid";

export default function CardLatihan(props) {
  return (
    <Card className="rounded-xl shadow-z12-light-shadow">
      <Container className="px-2 w-full">
        <Flex className="flex-col justify-center py-4">
          <Flex className="flex-col justify-center font-semibold text-sm text-textColor-primary-light mt-4">
            <Grid className="grid-cols-12 bg-grey-200 rounded-xl py-3 px-2 items-center inline-grid text-textColor-secondary-light">
              <div className="col-span-1 rounded-full flex items-center justify-center invisible">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="focus:outline-none"
                />
              </div>
              <h2 className="col-span-5 ">Nama</h2>
              <h2 className="col-span-2">Status</h2>
              <h2 className="col-span-2">Deadline</h2>
              <h2 className="col-span-1">Bobot</h2>
              <h2 className="col-span-1">Level</h2>
            </Grid>
            {props.children}
          </Flex>
        </Flex>
      </Container>
    </Card>
  );
}