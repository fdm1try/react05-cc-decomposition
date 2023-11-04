import React from 'react'
import { TImage, TLink } from '../types';

export interface IAdvancedString {
  text: string;
  image?: TImage;
  link?: TLink;
  description?: string;
}

/**
 * Компонент AdvancedString представляет собой набор из картинки, основного текста и дополнительного описания.
 * Если передать параметр link, основной текст и текст описания обрачиваются тегом <a>.
 * Обязательным параметром является лишь основной текст, поэтому компонент можно использовать в большинстве случаев оформления комплексных строк.
 *
 * @component
 * @example
 * const text = 'Main text'
 * const image = '/icon.svg'
 * const link = '/news?id=1'
 * const description = 'Additional text'
 * return (
 *   <AdvancedString text={text} image={image} link={link} description={description} />
 * )
 */
export const AdvancedString : React.FC<IAdvancedString> = (props) => {
  const text = <span className='advstring-text'>{props.text}</span>;
  const description = props.description ? <span className='advstring-description'>{props.description}</span> : <></>;
  const image = props.image ? <img className='advstring-image' src={props.image.src} alt={props.image.alt} /> : <></>;
  const content = <>{text}{description}</>
  return (
    <div className='advstring'>
      {image}
      {
        props.link ? <a className='advstring-link' rel={props.link.rel || ''} href={props.link.url}>{content}</a> : <>{content}</>
      }
    </div>
  )
}
