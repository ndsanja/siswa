import Flex from "../../Flex";
import Grid from "../../Grid";
import Avatar from "../../Avatar";

export default function ListItemsTugasKelas(props) {
  return (
    <Grid className="grid-cols-12 rounded-xl py-4 px-2 items-center inline-grid font-semibold text-textColor-primary-light hover:bg-grey-200">
      <div className="col-span-1 rounded-full flex items-center justify-center">
        <Avatar className="h-6 w-6 bg-info-main rounded-full">
          <img src="" alt="" />
        </Avatar>
      </div>
      <Flex className="col-span-3 flex-col justify-center space-y-1">
        <h2 className="cursor-pointer hover:underline">{props.nama}</h2>
        <p className="font-normal">{props.deskripsi}</p>
      </Flex>
      <Flex className="col-span-2 flex-col justify-center space-y-1">
        <h2 className="cursor-pointer hover:underline">{props.mapel}</h2>
        <p className="font-normal">{props.guru}</p>
      </Flex>
      <h2 className="col-span-2">{props.status}</h2>
      <Flex className="col-span-2 flex-col justify-center space-y-1">
        <h2 className="">{props.deadline}</h2>
        <p className="font-normal">{props.jam}</p>
      </Flex>
      <h2 className="col-span-1">{props.bobot}</h2>
      <Flex className="col-span-1 flex-col justify-center space-y-1">
        <h2 className="">{props.nilai}</h2>
        <p className="font-normal">{props.keterangan}</p>
      </Flex>
    </Grid>
  );
}
