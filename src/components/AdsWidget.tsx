import { TImage, TLink } from '../types';

export interface IAdsWidget {
  link: TLink;
  image: TImage;
}

/**
 * Компонент AdsWidget представляет собой контейнер с изображением, обёрнутой в тег <a>.
 * Используется для отображения рекламных банеров.
 *
 * @component
 * @example
 * const link: TLink = { url: 'http://some.web.site' }
 * const image: TImage = { src: '/img/ads/some.jpg', alt: 'ad title' }
 * return (
 *   <AdsWidget link={link} image={image} />
 * )
 */
export const AdsWidget : React.FC<IAdsWidget> = (props) => {
  return (
    <div className='adswidget'>
      <a className='adswidget-link' href={props.link.url} target='_blank' rel='noopener noreferrer'>
        <img className='adswidget-image' src={props.image.src} alt={props.image.alt} />
      </a>
    </div>
  )
}
