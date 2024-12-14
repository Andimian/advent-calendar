import { FC } from 'react';
import helloNumberImg from '../../assets/images/14.png';
import timeImg from '../../assets/images/present.svg';
import mainImg from './assets/images/kino.jpg';
import css from '../12/style.module.scss';


export const Cartoon: FC = () => {
	return (
		<div className='container'>
			<div className='numbersWrapper'>
				<div><img src={timeImg} alt="Дата"/></div>
				<div><img src={helloNumberImg} alt="Дата"/></div>
			</div>

			<div className="title">
				<h1>
					Посмотри мультфильмы, сказки или фильмы про зиму или Новый год
				</h1>
			</div>
			<div className={css.imagesWrapper}>
				<div><img src={mainImg} alt="Инструкция"/></div>
			</div>
			<h1 className='title'>
				Задание №14
			</h1>
			<p className='task'>
				Здравствуй Дианочка! Вспомни какие ты знаешь мультфильмы, сказки или фильмы про зиму или Новый год.
				Какие твои любимые? Посмотрите всей семьей.
			</p>

			<div className="note">
				<h6 className="note__title">Примечание</h6>
				<p className="note__info">
					Чтобы не портить глазки, лучше разделить просмотр длинного мультика на несколько раз.
				</p>
			</div>
		</div>);
};
