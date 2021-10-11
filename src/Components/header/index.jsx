import React, { useState, useContext } from 'react';

import { FiSearch } from 'react-icons/fi';
import { HeaderInput, HeaderInputContainer, HeaderSearchButton, HeaderSection, HeaderTitle } from './styles';

import client from '../../services/client';
import { context } from '../../context';

const Header = () => {
  const ctx = useContext(context);
  const [searchedValue, setSearchedValue] = useState('');

  async function getUserData() {
    try {
      const response = await client.get(`/${searchedValue}`);
      const repos = await client.get(`/${searchedValue}/repos`);

      ctx.setUserData(response.data);
      ctx.setRepos(repos.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <HeaderSection>
      <HeaderTitle>Github Profile</HeaderTitle>
      <HeaderInputContainer>
        <HeaderInput value={searchedValue} onChange={(e) => setSearchedValue(e.target.value)} />
        <HeaderSearchButton onClick={getUserData}>
          <FiSearch size={16} />
        </HeaderSearchButton>
      </HeaderInputContainer>
    </HeaderSection>
  );
};

export default Header;
