import { List } from './List';
import { TLink } from '../types';
export interface ILinkList {
  links: Array<TLink>;
}

/**
 * Компонент LinkList представляет собой список List из ссылок.
 * Элементы списка должны быть переданы в props.links, каждый элемент представлен объектом типа TLink.
 * Используется для отображения основного меню навигации.
 *
 * @component
 * @example
 * const links = [{ link='https://news.website.com/news', text: 'News', target='_blank', rel='noreferrer'}]
 * return (
 *   <LinkList links={links} />
 * )
 */
export const LinkList : React.FC<ILinkList> = (props) => {
  return (
    <List>
      {props.links.map((link, index) => (
          <a className='link' key={index} target={link.target || ''} rel={link.rel || ''} href={link.url}>
            {link.text}
          </a>
      ))}
    </List>
  )
}
