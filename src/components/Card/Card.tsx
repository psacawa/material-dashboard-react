import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import styles from "assets/jss/material-dashboard-react/components/cardStyle";

const useStyles = makeStyles(styles);

interface Props  {
  className: string,
  plain: boolean,
  profile: boolean,
  chart: boolean,
  children: JSX.Element,
};

export default function Card(props: Props) {
  const classes = useStyles();
  const { className, children, plain, profile, chart, ...rest } = props;
  const cardClasses = classNames({
    [classes.card]: true,
    [classes.cardPlain]: plain,
    [classes.cardProfile]: profile,
    [classes.cardChart]: chart,
    [className]: className !== undefined
  });
  return (
    <div className={cardClasses} {...rest}>
      {children}
    </div>
  );
}
