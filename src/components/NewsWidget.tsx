import { List } from './List';
import { INewsListItem, NewsListItem } from './NewsListItem';
import { StockExchangeWidget, IStockExchangeWidget } from './StockExchangeWidget';

export interface INewsSection {
  id: number;
  name: string;
}

export interface INewsWidget {
  sectionList: Array<INewsSection>;
  section: INewsSection;
  items: Array<INewsListItem>;
  stockExchange: IStockExchangeWidget;
}

/**
 * Компонент NewsWidget используется для отображения блока новостей
 */
export const NewsWidget : React.FC<INewsWidget> = (props) => {

  function handleSectionClick(event: React.SyntheticEvent<EventTarget>) : void {
    if (!(event.target instanceof HTMLButtonElement)) return;
  }

  return (
    <div className='news-widget'>
      <div className='news-section-list'>
        {
          props.sectionList.map((section) => (
            <button className='news-section_button' onClick={handleSectionClick} data-section-id={section.id}>
              {section.name}
            </button>
          ))
        }
        <span className='news-datetime'>{(new Date()).toLocaleString()}</span>
      </div>
      <div className='news-list'>
        <List>
          {props.items.map((item) => (
            <NewsListItem {...item} />
          ))}
        </List>
      </div>
      <StockExchangeWidget items={props.stockExchange.items} />
    </div>
  )
}
