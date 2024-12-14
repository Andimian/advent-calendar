import { FC } from 'react';
import helloNumberImg from '../../assets/images/15.png';
import timeImg from '../../assets/images/present.svg';
import mainImg from './assets/images/fantasy.jpg';
import mainImg2 from './assets/images/fantasy_2.jpg';
import css from './style.module.scss';


export const Fantasy: FC = () => {
	return (
		<div className='container'>
			<div className='numbersWrapper'>
				<div><img src={timeImg} alt="Дата"/></div>
				<div><img src={helloNumberImg} alt="Дата"/></div>
			</div>

			<div className="title">
				<h1>
					Развиваем фантазию
				</h1>
			</div>
			<div className={css.imagesWrapper}>
				<div><img src={mainImg} alt="Инструкция"/></div>
				<div><img src={mainImg2} alt="Инструкция"/></div>
			</div>
			<h1 className='title'>
				Задание №15
			</h1>
			<p className='task'>
				Здравствуй Дианочка! Придумай и расскажи новогоднюю историю про любимую игрушку, животное или
				вымышленного персонажа.
			</p>

			<div className="note">
				<h6 className="note__title">Примечание</h6>
				<p className="note__info">
					Можно нарисовать комикс на эту тему.
				</p>
			</div>
		</div>);
};
