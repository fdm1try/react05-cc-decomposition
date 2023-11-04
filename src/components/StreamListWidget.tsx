import { Widget } from './Widget';
import { AdvancedString } from './AdvancedString';
import { TImage } from '../types';

export interface IStreamListWidget {
  items: Array<{
    channel: string;
    name: string;
  }>;
}

/**
 * Компонент StreamListWidget используется для отображения виджета списка стримов (Эфир)
 * @component
 * @example
 * const items = [
 *  { name: 'Управление как искусство', channel: 'Успех' }
 * ]
 * return (
 *   <StreamListWidget items={items} />
 * )
 */
 
export const StreamListWidget : React.FC<IStreamListWidget> = (props) => {
  const icon : TImage = {
    src: './img/icons/stream.svg',
    alt: 'эфир'
  }
  return (
    <div className='streamlist-widget'>
      <Widget title='Эфир'>
        <div className='streamlist-list'>
          {props.items.map(({channel, name}) =>(
            <div className='streamlist-list-item'>
              <AdvancedString image={icon} text={name} description={channel} />
            </div>
          ))}
        </div>
      </Widget>
    </div>
  )
}
