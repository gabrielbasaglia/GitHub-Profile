import React, { useContext } from 'react';

import Container from '../Components/container';
import ReposContainer from '../Components/reposContainer';

import { context } from '../context';

const Repos = () => {
  const ctx = useContext(context);

  return (
    <Container>
      <ReposContainer name="Anthony Vinicius" repos={ctx.userRepos} />
    </Container>
  );
};

export default Repos;
