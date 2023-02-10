import { SearchInput, Button } from 'ui';

import { Container } from './styles';

import searchLogo from '@/assets/images/search_devs.svg';
import searchIcon from '@/assets/icons/search_icon.svg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Search = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');

  return (
    <>
      <Container>
        <img src={searchLogo} alt="search devs logo" />
        <div className="search-container">
          <SearchInput
            className="search-input"
            icon={searchIcon}
            placeholder="Search"
            onChange={e => setUserName(e.currentTarget.value)}
          />
          <Button
            height="48px"
            padding="10px 57px"
            disabled={userName.trim() === ''}
            onClick={() => navigate(`/profile/${userName}`)}
          >
            Search
          </Button>
        </div>
      </Container>
    </>
  );
};
