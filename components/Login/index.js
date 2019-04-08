import React, { Component } from "react";
import PropTypes from "prop-types";
import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import withStyles from "@material-ui/core/styles/withStyles";
import { Formik } from "formik";
import { string, object } from "yup";
import LoginForm from "./Component";
import styles from "./styles";

const schema = object().shape({
  email: string()
    .required("YO! Email is a required field!")
    .email("YO! Your email format is incorrect!"),
  password: string()
    .required("HEY! Password is required!")
    .min(3, "HEY! Password needs more characters!")
    .max(9, "HEY! Password has too many characters!"),
});

class Login extends Component {
  loginSubmit = (values, actions) => {
    const { email, password } = values;

    alert(`Login submit: ${email} - ${password}`);
    setTimeout(() => {
      actions.resetForm();
      actions.setSubmitting(false);
    }, 3000);
  };

  render() {
    const { classes } = this.props;

    return (
      <main className={classes.main}>
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={schema}
            onSubmit={this.loginSubmit}
            component={LoginForm}
          />
        </Paper>
      </main>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);
