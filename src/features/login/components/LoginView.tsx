import React from 'react';
import { useActions, useMappedState } from 'typeless';
import { Text, Button, Form, FormField } from 'grommet';

import { GrommetFormHandler } from '@app/types';

import { LoginActions } from '../interface';

export const LoginView = () => {
  const { login } = useActions(LoginActions);
  const loginError = useMappedState(state => state.login.error);

  const handleSubmit: GrommetFormHandler<{
    username: string;
    password: string;
  }> = e => {
    e.preventDefault();
    login(e.value);
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
