import React from "react";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import LaunchIcon from "@material-ui/icons/Launch";
import Chip from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/core/styles";
import "./snippets.css";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100px",
    height: "20px",
    fontSize: "0.5rem",
    marginBottom: "20px",
  },
  button: {
    marginRight: "8px",
  },
}));

const SnippetsCard = ({ content, deleteSnippets }) => {
  const ToPages = useHistory();
  const classes = useStyles();

  return (
    <div className="card">
      <div className="cardHead">
        <Chip label={content.tech} color="primary" className={classes.root} />
        <h1>{content.title}</h1>
      </div>

      <div className="cardAction">
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          size="small"
          startIcon={<EditIcon />}
          onClick={() => {
            return ToPages.push(`/edit/${content._id}`);
          }}
        >
          Edit
        </Button>

        <Button
          className={classes.button}
          variant="contained"
          color="default"
          size="small"
          startIcon={<LaunchIcon />}
          onClick={() => {
            return ToPages.push(`/readmore/${content._id}`);
          }}
        >
          Open
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          startIcon={<DeleteIcon />}
          onClick={() => {
            return deleteSnippets(content._id);
          }}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default SnippetsCard;
