import { FC } from 'react';
import helloNumberImg from '../../assets/images/7.jpeg';
import mainImg from './assets/images/ukrash.jpg';
import timeImg from '../../assets/images/present.svg';
import css from './style.module.scss';

export const DecoratingChristmasTree: FC = () => {
	return (
		<div className='container'>
			<div className='numbersWrapper'>
				<div><img src={timeImg} alt="Дата"/></div>
				<div><img src={helloNumberImg} alt="Дата"/></div>
			</div>

			<div className="title">
				<h1>
					Украшаем новогоднюю ёлочку!
				</h1>
			</div>
			<div className={css.imagesWrapper}>
				<div><img src={mainImg} alt="Инструкция"/></div>
			</div>
			<h1 className='title'>
				Задание №7
			</h1>
			<p className='task'>
				Доброе утро Дианочка! Сегодня подходящий день для одного из самых новогодних заданий! Сегодня будем
				украшать ёлочку новогодними игрушками и гирляндами, а заодно и всю квартиру! Обязательно поснимай это
				на видео - на следующий год всем будет интересно пересмотреть.
			</p>
			<div className="note">
				<h6 className="note__title">Примечание</h6>
				<p className="note__info">
					Конечно же для новогоднего настроения не забудь включить новогоднюю музыку!
				</p>
			</div>


		</div>);
};
