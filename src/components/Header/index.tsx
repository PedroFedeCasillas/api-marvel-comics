import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import debounce from 'lodash/debounce';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

import { MarvelLogo, MarvelLogoSmall } from '../../assets/images';
import { comicsOperations, hooks } from '../../state';
import { SearchInput } from '../SearchInput';

import * as S from './styles';

export const Header = () => {
  const { useAppDispatch } = hooks;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { searchComics, getComics, getAutocompleteOptions } = comicsOperations;

  const [search, setSearch] = useState('');
  const [width, setWidth] = useState<number>();
  const [options, setOptions] = useState([]);
  const [display, setDisplay] = useState(false);
  const wrapperRef: any = useRef(null);

  const widthChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    if (!width) {
      widthChange();
    }
    window.addEventListener('resize', widthChange);
    return () => {
      window.removeEventListener('resize', widthChange);
    };
  }, [width]);

  const onSearchChanged = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    if (search) {
      const searchParams = {
        search: search,
        offset: 0,
      };
      dispatch(searchComics(searchParams));
      navigate(`/search/${search}/1`);
      setDisplay(false);
    }
  };

  const handleClearSearch = () => {
    dispatch(getComics(0));
  };

  const debouncedSearch = useRef(
    debounce(async (criteria) => {
      if (criteria.length > 2) {
        const options: any = await dispatch(getAutocompleteOptions(criteria));
        setOptions(options.payload.data.data.results);
        setDisplay(true);
      } else {
        setOptions([]);
        setDisplay(false);
      }
    }, 250)
  ).current;

  useEffect(() => {
    if (search) {
      debouncedSearch(search);
    }
  }, [search, debouncedSearch]);

  useEffect(() => {
    window.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
  });

  const handleClickOutside = (event: any) => {
    const { current: wrap } = wrapperRef;
    if (wrap && !wrap.contains(event.target)) {
      setDisplay(false);
    }
  };

  return (
    <S.Wrapper>
      <S.StyledLink onClick={() => handleClearSearch()} to={'/1'}>
        {width && width >= 760 ? <MarvelLogo /> : <MarvelLogoSmall />}
      </S.StyledLink>
      <S.StyledForm ref={wrapperRef}>
        <SearchInput
          placeholder='Search for the comic title here'
          value={search}
          onChange={onSearchChanged}
          options={options}
          display={display}
          onClick={() => setDisplay(!display)}
        />
        <S.StyledButton onClick={handleSearch}>
          {width && width >= 760 ? 'COMIC SEARCH' : <SearchRoundedIcon />}
        </S.StyledButton>
      </S.StyledForm>
      <Link to={'/favorites'}>
        <S.StyledFavoriteIcon fontSize='large' />
      </Link>
    </S.Wrapper>
  );
};
