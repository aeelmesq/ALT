import { Button } from "@chakra-ui/react";

export default function ButtonMore() {
  return (
    <Button
      h={"30px"}
      w={"30px"}
      transition={"0.4s"}
      cursor={"pointer"}
      bgColor={"transparent"}
      outline={"none"}
      border={"none"}
      borderRadius={"100%"}
      fontSize={"13pt"}
      _hover={{ bgColor: "#E6E6E6" }}
    >
      <i class="bi bi-three-dots"></i>
    </Button>
  );
}