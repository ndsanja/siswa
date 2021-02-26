import Container from "../Container";
import Card from "../Card";
import Flex from "../Flex";
import IconButton from "../IconButton";
import Grid from "../Grid";
import Avatar from "../Avatar";

export default function ListItemsSiswa(props) {
  return (
    <Grid className="grid-cols-12 rounded-xl py-4 px-2 items-center inline-grid font-semibold hover:bg-grey-200">
      <div className="col-span-1 rounded-full flex items-center justify-center">
        <input type="checkbox" name="" id="" className="focus:outline-none" />
      </div>
      <Flex className="col-span-4 items-center space-x-4">
        <Avatar className="h-10 w-10 bg-info-main rounded-full">
          <img src="" alt="" />
        </Avatar>
        <h2>{props.nama}</h2>
      </Flex>
      <h2 className="col-span-2">{props.kelas}</h2>
      <h2 className="col-span-2">{props.nis}</h2>
      <h2 className="col-span-1">{props.status}</h2>
      <h2 className="col-span-1">{props.deskripsi}</h2>
      <IconButton className="col-span-1">icon</IconButton>
    </Grid>
  );
}
