import Card from "../Atom/Card";
import Container from "../Atom/Container";
import Flex from "../Atom/Flex";
import IconButton from "../Atom/IconButton";
import Avatar from "../Atom/Avatar";

export default function CardSiswa() {
  return (
    <Card className="col-span-4  shadow-z12-light-shadow rounded-xl">
      <Container className="px-4 relative">
        <Flex className="flex-col space-y-6 items-center justify-center pb-10 pt-6">
          <IconButton className="absolute right-4 top-4">icon</IconButton>
          <Avatar className="h-16 w-16 rounded-full bg-primary-main">
            <img src="" alt="" />
          </Avatar>
          <Flex className="flex-col items-center justify-center space-y-1 text-textColor-primary-light">
            <h2 className="font-semibold text-sm">Nila Dwi Sanja</h2>
            <p className="text-textColor-secondary-light text-sm">XII-IPA 4</p>
            <p className="text-textColor-secondary-light text-sm">1234567</p>
          </Flex>
          <Flex className="flex-row items-center justify-center space-x-6">
            <IconButton>icon</IconButton>
            <IconButton>icon</IconButton>
            <IconButton>icon</IconButton>
            <IconButton>icon</IconButton>
          </Flex>
        </Flex>
      </Container>
    </Card>
  );
}
