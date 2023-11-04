import { Widget } from './Widget';
import { List } from './List';

export interface IVisitWidget {
  items: Array<{
    section: string;
    name: string;
  }>;
}

/**
 * Компонент VisitWidget используется для отображения виджета наиболее посещаемых ресурсов
 * @component
 * @example
 * const items = [
 *  { section: 'Недвижимость', name: 'о сталинках'}
 * ]
 * return (
 *   <VisitWidget items={items} />
 * )
 */
 
export const VisitWidget : React.FC<IVisitWidget> = (props) => {
  return (
    <div className='visit-widget'>
      <Widget title='Посещаемое'>
        <List>
          {props.items.map(({section, name}) =>(
            <><span className='visit-section'>{section}</span> - <span className='visit-name'>{name}</span></>
          ))}
        </List>
      </Widget>
    </div>
  )
}
