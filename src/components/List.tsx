import React from 'react';

interface IProps {
  children: React.ReactNode;
}

/**
 * Компонент List оборачивает вложенные в него дочерние эелементы в список <ul>.
 *
 * @component
 * @example
 * return (
 *   <List>
 *      <a href='#'>Some link</a>
 *      <p> some text </p>
 *   </List>
 * )
 */
export const List : React.FC<IProps> = (props) => {
  return (
    <ul className='list'>
      {React.Children.map(props.children, (child, index) => (
        <li className='list-item' key={index}>
          { child }
        </li>
      ))}
    </ul>
  )
}
