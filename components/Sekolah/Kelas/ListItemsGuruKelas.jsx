import Flex from "../../Atom/Flex";
import IconButton from "../../Atom/IconButton";
import Grid from "../../Atom/Grid";
import Avatar from "../../Atom/Avatar";

export default function ListItemsGuruKelas(props) {
  return (
    <Grid className="grid-cols-12 rounded-xl py-4 px-2 items-center inline-grid font-semibold hover:bg-grey-200">
      <div className="col-span-1 rounded-full flex items-center justify-center">
        <input type="checkbox" name="" id="" className="focus:outline-none" />
      </div>
      <Flex className="col-span-4 items-center space-x-4">
        <Avatar className="h-10 w-10 bg-info-main rounded-full">
          <img src="" alt="" />
        </Avatar>
        <h2 className="cursor-pointer hover:underline">{props.nama}</h2>
      </Flex>
      <h2 className="col-span-2">{props.mapel}</h2>
      <h2 className="col-span-2">{props.nip}</h2>
      <h2 className="col-span-1">{props.status}</h2>
      <h2 className="col-span-1">{props.deskripsi}</h2>
      <IconButton className="col-span-1">icon</IconButton>
    </Grid>
  );
}
