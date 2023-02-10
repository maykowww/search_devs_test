import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';

import { Container } from './styles';

import searchLogo from '@/assets/images/search_devs.svg';
import searchIcon from '@/assets/icons/search_icon.svg';

import { Button, SearchInput, Repositories, CardProfile, Loader } from 'ui';
import { User } from '@/services/models/user_model';
import { useEffect, useState } from 'react';
import { apiService } from '@/services/api_service';
import { Repository } from '@/services/models/repository_model';
import { AxiosError, isAxiosError } from 'axios';

export const Profile = ({}) => {
  const [user, setUser] = useState<User>();
  const [repositories, setRepositories] = useState<Repository[]>();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const { userName } = useParams();

  const { pathname } = useLocation();

  const navigate = useNavigate();

  const [name, setName] = useState('');

  const getUser = async () => {
    setLoading(true);
    const { data: userResut } = await apiService.get<User>(`/users/${userName}`);
    setUser(userResut);
    setLoading(false);
  };

  const getRepositories = async () => {
    const { data: repostoriesResult } = await apiService.get<Repository[]>(
      `/users/${userName}/repos`
    );
    setRepositories(repostoriesResult);
  };

  const getAllData = async () => {
    setLoading(true);
    try {
      await getUser();
      await getRepositories();
      setError('');
      setLoading(false);
    } catch (e) {
      setLoading(false);

      if (isAxiosError(e)) {
        setError(
          e.response?.status === 404
            ? 'Usuáro não encontrado.'
            : 'Ocorreu um erro desconhecido.'
        );
      }
    }
  };

  useEffect(() => {
    setName(userName!);
    getAllData();
  }, [pathname]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Container>
          <div className="navbar">
            <Link to={'/'}>
              <img src={searchLogo} width={194} height={44} alt="" />
            </Link>
            <div className="search-actions">
              <SearchInput
                className="search-input"
                icon={searchIcon}
                placeholder="Search"
                onChange={e => setName(e.currentTarget.value)}
                defaultValue={name}
              />
              <Button
                height="48px"
                padding="10px 57px"
                onClick={() => navigate(`/profile/${name}`)}
                disabled={name?.trim() === ''}
              >
                Search
              </Button>
            </div>
          </div>

          {error ? (
            <p className="error">Nenhum usuário encontrado.</p>
          ) : (
            <div className="user-data">
              <div className="card-container">
                <CardProfile className="card" {...user}></CardProfile>
                <a href={user?.html_url} target={'_blank'}>
                  <Button block={true}>Contato</Button>
                </a>
              </div>
              {repositories && <Repositories repositories={repositories} />}
            </div>
          )}
        </Container>
      )}
    </>
  );
};
