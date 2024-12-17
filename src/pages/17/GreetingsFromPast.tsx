import { FC } from 'react';
import helloNumberImg from '../../assets/images/17.png';
import timeImg from '../../assets/images/present.svg';
import mainImg from './assets/images/privet.jpeg';
import css from './style.module.scss';


export const GreetingsFromPast: FC = () => {
	return (
		<div className='container'>
			<div className='numbersWrapper'>
				<div><img src={timeImg} alt="Дата"/></div>
				<div><img src={helloNumberImg} alt="Дата"/></div>
			</div>

			<div className="title">
				<h1>
					Привет из будущего! Сюрприз самой себе
				</h1>
			</div>
			<div className={css.imagesWrapper}>
				<div><img src={mainImg} alt="Инструкция"/></div>
			</div>
			<h1 className='title'>
				Задание №17
			</h1>
			<p className='task'>
				Здравствуй Дианочка! Напиши себе привет или пожелание, можно нарисовать. Положи это письмо и
				маленький сюрприз в свой карман весенней куртки. Потом будет приятно найти это сообщение.
			</p>

			<div className="note">
				<h6 className="note__title">Примечание</h6>
				<p className="note__info">
					Такие сюрпризы можно сделать и другим членам семьи.
				</p>
			</div>
		</div>);
};
