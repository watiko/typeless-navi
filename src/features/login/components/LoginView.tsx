import React from 'react';
import { useActions } from 'typeless';
import { Text, Button, Form, FormField } from 'grommet';

import { LoginActions, getLoginState, LoginFormValue } from '../interface';

export const LoginView = () => {
  const { login } = useActions(LoginActions);
  const { error: loginError } = getLoginState.useState();

  // TODO: use formik
  const handleSubmit = (e: any) => {
    e.preventDefault();
    login(e.value as LoginFormValue);
  };

  return (
    <Form onSubmit={handleSubmit}>
      {loginError ? (
        <Text color="status-error" weight="bold">
          {loginError}
        </Text>
      ) : null}
      <FormField name="username" label="username" required />
      <FormField name="password" label="password" type="password" required />
      <Button primary type="submit" label="login" />
    </Form>
  );
};
