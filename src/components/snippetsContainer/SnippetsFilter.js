import React, { useContext } from "react";
import { SnippetContext } from "../../globalContext/SnippetsContext";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";

const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    padding: "10px",
    justifyContent: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
}));

const SnippetsFilter = () => {
  const classes = useStyles();

  const { snippetsContent, filterTech } = useContext(SnippetContext);

  let techs = getUnique(snippetsContent, "tech");

  techs = ["all", ...techs];

  techs = techs.map((item, index) => {
    return (
      <Chip
        label={item}
        clickable
        color="primary"
        key={index}
        onClick={() => {
          filterTech(item);
        }}
      />
    );
  });

  return <div className={classes.root}>{techs}</div>;
};

export default SnippetsFilter;
