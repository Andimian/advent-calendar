import { FC } from 'react';
import helloNumberImg from '../../assets/images/9.jpeg';
import mainImg from './assets/images/hugs.png';
import timeImg from '../../assets/images/present.svg';
import css from './style.module.scss';

export const Hugs: FC = () => {
	return (
		<div className='container'>
			<div className='numbersWrapper'>
				<div><img src={timeImg} alt="Дата"/></div>
				<div><img src={helloNumberImg} alt="Дата"/></div>
			</div>

			<div className="title">
				<h1>
					Время любви! Обнимашки!
				</h1>
			</div>
			<div className={css.imagesWrapper}>
				<div><img src={mainImg} alt="Инструкция"/></div>
			</div>
			<h1 className='title'>
				Задание №9
			</h1>
			<p className='task'>
				Здравствуй Дианочка! Обними всех членов семьи, скажи им, что очень их любишь и пожелай им что-нибудь
				в новом году.
			</p>
			<div className="note">
				<h6 className="note__title">Примечание</h6>
				<p className="note__info">
					Интересно снять это все на камеру и проверить, в следующем  году, что сбылось.
				</p>
			</div>


		</div>);
};
