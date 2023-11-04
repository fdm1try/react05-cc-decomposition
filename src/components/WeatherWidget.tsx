import { List } from './List';
import { Widget } from './Widget';

export interface IWeatherWidget {
  state: string;
  temperature: number;
  temperatureList: Array<{
    description: string;
    value: number;
  }>;
}

/**
 * Компонент WeatherWidget используется для отображения виджета погоды
 * @component
 * @example
 * const state = 'rain'
 * const temperature = 17
 * const temperatureList = [
 *  {description: 'in the morning', value: 17}
 *  {description: 'in the afternoon', value: 20}
 * ]
 * return (
 *   <WeatherWidget state={state} temperature={temperature} link={link} temperatureList={temperatureList} />
 * )
 */
 
export const WeatherWidget : React.FC<IWeatherWidget> = (props) => {
  const image = `/img/weather/${props.state}`;

  return (
    <div className='weather-widget'>
      <Widget title='Погода'>
        <div className='weather-now'>
          <img className='weather-now-image' src={image} alt='Погода сейчас' />
          <span className='weather-now-temperature'>
            {`${props.temperature ? '+' : ''}${props.temperature}`}
          </span>
        </div>
        <div className='weather-list'>
          <List>
            { props.temperatureList.map(({ description, value}) => (
              <span className='weather-list-item'>
                {`${description} ${value ? '+' : ''}${value}`}
              </span>
            ))}
          </List>
        </div>
      </Widget>
    </div>
  )
}
