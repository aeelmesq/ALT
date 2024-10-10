import { Grid } from "@chakra-ui/react";

export default function GrayCont({ children }) {
  return (
    <Grid
      bgColor={"#F5F5F5"}
      m={"auto"}
      h={"auto"}
      w={"93%"}
      p={"30px"}
      rowGap={"15px"}
      columnGap={"45px"}
      gridTemplateColumns={"calc(100% - 90px)"}
      justifyContent={"center"}
      borderRadius={"10px"}
    >
      {children}
    </Grid>
  );
}