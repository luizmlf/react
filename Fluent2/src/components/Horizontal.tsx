import {
    makeStyles,
    shorthands,
    Tab,
    TabList,
    TabListProps,
  } from "@fluentui/react-components";
  import * as React from "react";

  
  const useStyles = makeStyles({
    root: {
      alignItems: "flex-start",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      ...shorthands.padding("50px", "20px"),
      rowGap: "20px",
    },
  });
  
  const Horizontal = (props: Partial<TabListProps>) => {
    const styles = useStyles();
  
    return (
      <div className={styles.root}>
        <TabList vertical defaultSelectedValue="tab1">
          <Tab value="tab1">First Tab</Tab>
          <Tab value="tab2">Second Tab</Tab>
          <Tab value="tab3">Third Tab</Tab>
          <Tab value="tab4">Fourth Tab</Tab>
        </TabList>
      </div>
    );
  };
  
  export default Horizontal