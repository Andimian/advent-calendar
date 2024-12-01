import { FC } from 'react';
import snakeImg from './assets/images/snake.png';
import helloNumberImg from '../../assets/images/2.jpeg';
import timeImg from '../../assets/images/present.svg';
import css from './snake.module.scss';

export const Snake: FC = () => {
	return (
		<div className='container'>
			<div className='numbersWrapper'>
				<div><img src={timeImg} alt="Дата"/></div>
				<div><img src={helloNumberImg} alt="Дата"/></div>
			</div>

			<div className="title">
				<h1>
					Расслабляемся - "змеиный массаж"
				</h1>
			</div>
			<div className={css.imagesWrapper}>
				<div><img src={snakeImg} alt="Хмеиный массаж"/></div>
			</div>
			<h1 className='title'>
				Задание №2
			</h1>
			<p className='task'>
				Здравствуй Дианочка, наступающий 2025-й год по восточному календарю  будет годом Змеи, поэтому задание
				на сегодня будет сделать змеиный массаж друг другу в вашей семье, изображая движения змеи.
			</p>
			<div className="note">
				<h6 className="note__title">Примечание</h6>
				<p className="note__info">
					Рисуйте разные фигурки пальцем на спине близких, пусть отгадают, что было нарисовано.
				</p>
			</div>


		</div>);
};
