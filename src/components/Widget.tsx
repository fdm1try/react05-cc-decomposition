import { TImage } from '../types';

interface IWidget {
  title: string;
  image?: TImage;
  link?: string;
  children: React.ReactNode;
}

/**
 * Компонент Widget представляет собой Widget с заголовком, картинкой (если в props передан image) и вложеными элементами.
 * Если в props передана ссылка (link), заговок оборачивается в тег <a>
 *
 * @component
 * @example
 * const title = 'Google web site'
 * const image = '/someimage.jpg'
 * const link = 'https://google.com/'
 * return (
 *   <Widget title={title} image={image} link={link}>
 *    <p> Widget children elements </p>
 *   </Widget>
 * )
 */
export const Widget : React.FC<IWidget> = (props) => {
  return (
    <div className='widget'>
      { 
        props.image ? <img className='widget-image' src={props.image.src} alt={props.image.alt} /> : <></>
      }
      <h3 className='widget-title'>
        {
          props.link ? <a className='widget-title_link' href={props.link}>{props.title}</a> : props.title
        }
      </h3>
      <div className='widget-body'>{props.children}</div>
    </div>
  )
}
