import React from "react";
import { createUseStyles } from "react-jss";
import LinkIcon from "./LinkIcon";
import { Link } from "../../types";

const useStyles = createUseStyles({
  linkContainer: {
    cursor: "pointer",
    background: "#F3F3F3",
    border: "1px solid #CECECE",
    color: "#707070",
    borderRadius: "2px",
    padding: "2px 12px 4px 8px",
    display: "inline-block",
    marginRight: "8px",
    marginTop: "4px",
    marginBottom: "4px",
    "&:hover": {
      background: "#EAEAEA",
      border: "1px solid #B9B9B9",
    },
  },
  linkTitle: {
    verticalAlign: "middle",
  },
});

type MyProps = Link;

const LinkButton: React.FC<MyProps> = ({ title, link }) => {
  const classes = useStyles();
  const onClick = () => {
    window.open(link, "_blank");
  };

  return (
    <div className={classes.linkContainer} onClick={onClick}>
      <LinkIcon link={link} />
      <small className={`${classes.linkTitle} ml-1`}>{title}</small>
    </div>
  );
};

export default LinkButton;
