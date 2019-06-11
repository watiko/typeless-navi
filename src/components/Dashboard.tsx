import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-navi';
import { useActions } from 'typeless';
import { GlobalActions, getGlobalState } from 'features/global/interface';

const Header = styled.div`
  display: flex;
  padding: 1rem 1.5rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
`;

const AppName = styled.h1`
  font-weight: 400;
  margin: 0;
  margin-right: auto;
  font-size: 1.25rem;
`;

const Main = styled.main`
  padding: 20px;
`;

const Links = styled.div`
  > * {
    margin: 3px;
  }
`;

interface Props {
  className?: string;
  children: React.ReactNode;
}

export const Dashboard = ({ children }: Props) => {
  const { logout } = useActions(GlobalActions);
  const { user } = getGlobalState.useState();

  return (
    <>
      <Header>
        <AppName>Starter</AppName>
        <Links>
          <Link href="/">sample1</Link>
          <Link href="/sample2">sample2</Link>
        </Links>
        {user ? <button onClick={logout}>logout</button> : <Link href="/login">login</Link>}
      </Header>
      <Main>{children}</Main>
    </>
  );
};
