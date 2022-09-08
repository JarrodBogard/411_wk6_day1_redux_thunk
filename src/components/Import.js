import React, { useEffect } from "react";
import CustomTable from "./Table";
import Button from "@mui/material/Button";

const Import = (props) => {
  // console.log(props, "props");
  // console.log(props.makes);
  useEffect(() => {
    // console.log(props.makes);
  }, [props.makes]);

  return (
    <>
      <Button variant="contained" color="primary" onClick={props.fetchMakes}>
        Import
      </Button>
      <CustomTable makes={props.makes} deleteMake={props.deleteMake} />;
    </>
  );
};

export default Import;
