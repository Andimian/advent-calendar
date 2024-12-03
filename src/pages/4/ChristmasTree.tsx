import { FC } from 'react';
import helloNumberImg from '../../assets/images/4.jpeg';
import crTree from './assets/images/creestmas-tree.webp';
import timeImg from '../../assets/images/present.svg';
import css from './christmasTree.module.scss';

export const ChristmasTree: FC = () => {
	return (
		<div className='container'>
			<div className='numbersWrapper'>
				<div><img src={timeImg} alt="Дата"/></div>
				<div><img src={helloNumberImg} alt="Дата"/></div>
			</div>

			<div className="title">
				<h1>
					Нарисуй ёлочку по инструкции
				</h1>
			</div>
			<div className={css.imagesWrapper}>
				<div><img src={crTree} alt="Инструкция"/></div>
			</div>
			<h1 className='title'>
				Задание №4
			</h1>
			<p className='task'>
				Здравствуй Дианочка, попробуй нарисовать красивую новогоднюю ёлочку мечты. Укрась её так, как тебе
				хочется!
			</p>
			<div className="note">
				<h6 className="note__title">Примечание</h6>
				<p className="note__info">
					Укрась ёлочку к новому году. Пусть появятся игрушки, звёзды и гирлянды.
				</p>
			</div>


		</div>);
};
