import { ChangeEvent, useEffect, useState } from 'react';
import { ComicType } from '../../constants/genericTypes';

import * as S from './styles';

export type SearchInputProps = {
  placeholder: string;
  value: string;
  options?: ComicType[];
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  display: boolean;
  onClick: () => void;
};

export const SearchInput = ({
  placeholder,
  value,
  onChange,
  options,
  display,
  onClick,
}: SearchInputProps) => {
  const [showAutocomplete, setShowAutocomplete] = useState(false);

  useEffect(() => {
    if (display && options?.length) {
      setShowAutocomplete(true);
    } else {
      setShowAutocomplete(false);
    }
  }, [display, options]);

  return (
    <S.SearchInputWrapper>
      <S.StyledInput
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onClick={onClick}
      />
      {showAutocomplete && (
        <S.AutoComplete>
          {options &&
            options.map((option: ComicType) => (
              <S.StyledLink
                key={option.id}
                to={`/comic/${option.id}`}
                onClick={() => setShowAutocomplete(false)}
              >
                <p>{option.title}</p>
              </S.StyledLink>
            ))}
        </S.AutoComplete>
      )}
    </S.SearchInputWrapper>
  );
};
