import Grid from "../../Atom/Grid";
import Tab from "../../Atom/Tab";

export default function DiskusiTab(props) {
  return (
    <Grid className="grid-cols-12 rounded-lg shadow-z12-light-shadow overflow-hidden">
      {props.menu.map((item) => (
        <Tab
          onClick={() => props.setOpenTabMenu(item)}
          key={item}
          className={`col-span-4 text-center font-semibold text-textColor-secondary-light py-2 ${
            props.openTabMenu == item && "border-b-2 border-primary-main py-2"
          }`}
        >
          <h1
            className={`${
              props.openTabMenu == item && "text-textColor-primary-light"
            }`}
          >
            {item}
          </h1>
        </Tab>
      ))}
    </Grid>
  );
}
