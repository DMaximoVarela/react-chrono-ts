import { Grid2, Typography } from "@mui/material";
import { ElementType, FC, ReactNode } from "react";

interface SectionProps {
  title: string;
  Icon: ElementType;
  children: ReactNode;
}

const Section: FC<SectionProps> = ({ title, Icon, children }) => {
  return (
    <Grid2
      container
      flexDirection="column"
      justifyContent="start"
      alignItems="start"
      spacing={1}
      padding={3}
      width="100%"
      sx={{
        backgroundColor: "background.paper",
        borderRadius: ".5rem",
        border: "solid 1px",
        borderColor: "divider",
      }}
    >
      <Grid2 container spacing={2}>
        <Icon />
        <Typography component="h2" variant="subtitle1">
          {title}
        </Typography>
      </Grid2>
      <Grid2>{children}</Grid2>
    </Grid2>
  );
};

export default Section;
