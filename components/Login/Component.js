import React from "react";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./styles";

const LoginForm = ({
  handleBlur,
  handleChange,
  handleSubmit,
  isSubmitting,
  isValid,
  values,
  errors,
  touched,
  classes,
}) => {
  const emailError = errors.email && touched.email && errors.email;
  const passwordError = errors.password && touched.password && errors.password;

  return (
    <form method="post" onSubmit={handleSubmit} className={classes.form}>
      <FormControl margin="normal" required fullWidth error={!!emailError}>
        <InputLabel htmlFor="email">Email Address</InputLabel>
        <Input
          id="email"
          name="email"
          value={values.email}
          autoComplete="email"
          autoFocus
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <FormHelperText error={!!emailError}>{emailError}</FormHelperText>
      </FormControl>
      <FormControl margin="normal" required fullWidth error={!!passwordError}>
        <InputLabel htmlFor="password">Password</InputLabel>
        <Input
          name="password"
          type="password"
          id="password"
          value={values.password}
          autoComplete="current-password"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <FormHelperText error={!!passwordError}>{passwordError}</FormHelperText>
      </FormControl>
      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="Remember me"
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
        disabled={!isValid || isSubmitting}
      >
        Sign in
      </Button>
    </form>
  );
};

export default withStyles(styles)(LoginForm);
