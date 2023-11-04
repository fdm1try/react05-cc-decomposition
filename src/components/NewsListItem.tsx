import { TImage } from '../types';
import { AdvancedString } from './AdvancedString';

export interface INewsListItem {
  id: number;
  text: string;
  url: string;
  icon: TImage;
}

/**
 * Компонент NewsListItem представляет собой компонент AdvancedString без блока описания.
 *
 * @component
 * @example
 * const items = [{ id: 1, text: 'Заголовок', link='https://news.website.com/news', image='/image.jpg'}]
 * return (
 *   <NewsList items={items} />
 * )
 */
export const NewsListItem : React.FC<INewsListItem> = (props) => {
  const link = { url: props.url };
  return (
    <AdvancedString image={props.icon} text={props.text} link={link} />
  )
}
