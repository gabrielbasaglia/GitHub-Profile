import React, { useContext } from 'react';

import { Container } from '../Components/container/styles';
import Header from '../Components/header';
import UserContainer from '../Components/userContainer';
import UserPicture from '../Components/userPicture';
import UserDatails from '../Components/userDatails';
import UserNumbers from '../Components/userNumbers';

import { context } from '../context';

export default function Home() {
  const ctx = useContext(context);
  return (
    <Container>
      <Header />
      <UserContainer>
        <UserPicture url={ctx.userData?.avatar_url} alternativeText={ctx.userData?.Login} />
        <UserDatails name={ctx.userData?.name} login={ctx.userData?.Login} bio={ctx.userData?.bio} />
        <UserNumbers
          repos={ctx.userData?.public_repos}
          followers={ctx.userData?.followers}
          following={ctx.userData?.following}
        />
      </UserContainer>
    </Container>
  );
}
