import { List } from './List';
import { AdvancedString } from './AdvancedString';

export interface IStockExchangeWidget {
  items: Array<{
    name: string;
    value: string;
    change: string;
  }>;
}

/**
 * Компонент StockExchangeWidget используется для отображения списка изменений фондовой биржы
 * @component
 * @example
 * const items = [
 *  { name: 'USD MOEX', value: '63.52', change: '+0.09 %' }
 * ]
 * return (
 *   <StockExchangeWidget items={items} />
 * )
 */
 
export const StockExchangeWidget : React.FC<IStockExchangeWidget> = (props) => {
  return (
    <div className='stockexchange-widget'>
      <List>
          {props.items.map(({name, value, change}) =>(
            <AdvancedString text={`${name} ${value}`} description={change} />
          ))}
      </List>
      <button className='button stockexchange-more_button'>...</button>
    </div>
  )
}
