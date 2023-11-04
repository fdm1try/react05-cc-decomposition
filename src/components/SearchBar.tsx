import { useState } from 'react';

export interface ISearchBar {
  placeholder?: string;
  buttonText: string;
  onSubmit: (value: string) => void;
}

/**
 * Компонент SearchBar представляет собой элемент поиска, текст кнопки действия необходимо указать в props.buttonText.
 * После совершения действия поиска вызывается callback onSubmit(), переданный в props.
 * Можно указать placeholder для поля ввода, если это необходимо.
 * Используется для отображения блока поиска.
 *
 * @component
 * @example
 * const placeholder = 'Type keywords'
 * const buttonText = 'Search'
 * const onSubmit = (value) => console.log(value)
 * return (
 *   <SearchBar placeholder={placeholder} buttonText={buttonText} onSubmit={onSubmit} />
 * )
 */
export const SearchBar : React.FC<ISearchBar> = (props) => {
  const [searchText, setSearchText] = useState<string>('');
  const placeholder = props.placeholder || '';

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) : void {
    event.preventDefault();
    props.onSubmit(searchText);
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) : void {
    setSearchText(event.target.value);
  }

  return (
    <div className='searchbar'>
      <form className='searchbar-form' onSubmit={handleSubmit}>
        <input placeholder={placeholder} required onChange={handleInputChange} type='text' name='search' />
        <button type='button' className='searchbar-keyboard_button'></button>
        <button className='searchbar-submit_button'>Найти</button>
      </form>      
    </div>
  )
}
