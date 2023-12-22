import { Box, useMediaQuery } from "@mui/material";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";

const gridTemplateLargeScreens = `
"a b c"
"a b c"
"a b c"
"a b f"
"d e f"
"d e f"
"d h i"
"g h i"
"g h j"
"g h j"
`;

const gridTemplateSmallScreens = `
"a"
"a"
"a"
"a"
"b"
"b"
"b"
"b"
"c"
"c"
"c"
"d"
"d"
"d"
"e"
"e"
"f"
"f"
"f"
"g"
"g"
"g"
"h"
"h"
"h"
"h"
"h"
"i"
"i"
"j"
"j"
`;

const Dashboard = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1200px)");
  return (
    <Box
      width="100%"
      height="100%"
      display="grid"
      gap="1.5rem"
      sx={
        isAboveMediumScreens
          ? {
              gridTemplateColumns: "repeat(3, minmax(370px, 1fr))",
              gridTemplateRows: "repeat(10, minmax(60px, 1fr))",
              gridTemplateAreas: gridTemplateLargeScreens,
            }
          : {
              gridAutoColumns: "1fr",
              gridAutoRows: "80px",
              gridTemplateAreas: gridTemplateSmallScreens,
            }
      }
    >
      <Row1 />
      <Row2 />
      <Row3 />
      Dashboard
    </Box>
  );
};

export default Dashboard;

// gridtemplatecolumns - when we are on the big screen we are gonna split this columns in 3  - repeat(3 - because it's gonna be three columns
// minmax(370px - never smaller than this because it doesn't look good, 1fr - split into three when we have big screen it's gonna split evenly))
//box gridArea represents each element so we need a lot of those boxes to match every element
// to make it responsive we can grab useMediaQuery from MUI built in hook for rwd