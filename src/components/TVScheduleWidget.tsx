import { Widget } from './Widget';
import { AdvancedString } from './AdvancedString';

export interface ITVScheduleWidget {
  items: Array<{
    startTime: string;
    channel: string;
    name: string;
  }>;
}

/**
 * Компонент TVScheduleWidget используется для отображения виджета программы передач ТВ.
 * @component
 * @example
 * const items = [
 *  { startTime: '02:00', name: 'THT.Best', channel: 'TNT International' }
 * ]
 * return (
 *   <TVScheduleWidget items={items} />
 * )
 */
 
export const TVScheduleWidget : React.FC<ITVScheduleWidget> = (props) => {
  return (
    <div className='tvschedule-widget'>
      <Widget title='Телепрограмма'>
        <button className='button tvschedule-stream_button'>Эфир</button>
        <div className='tvschedule-list'>
          {props.items.map(({startTime, channel, name}) =>(
            <div className='tvschedule-list-item'>
              <AdvancedString text={`${startTime} ${name}`} description={channel} />
            </div>
          ))}
        </div>
      </Widget>
    </div>
  )
}
