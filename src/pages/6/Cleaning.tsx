import { FC } from 'react';
import helloNumberImg from '../../assets/images/6.jpeg';
import pil from './assets/images/pylesos.jpg';
import timeImg from '../../assets/images/present.svg';
import css from './cleaning.module.scss';

export const Cleaning: FC = () => {
	return (
		<div className='container'>
			<div className='numbersWrapper'>
				<div><img src={timeImg} alt="Дата"/></div>
				<div><img src={helloNumberImg} alt="Дата"/></div>
			</div>

			<div className="title">
				<h1>
					 Наведи порядок
				</h1>
			</div>
			<div className={css.imagesWrapper}>
				<div><img src={pil} alt="Инструкция"/></div>
			</div>
			<h1 className='title'>
				Задание №6
			</h1>
			<p className='task'>
				Здравствуй Дианочка! Чистота - залог здоровья! Самое время навести порядок в комнате. Расставь аккуратно
				все предметы на полки, убери игрушки на свое место и вытри пыль. Помоги маме помыть пол если нужно и
				выкинуть мусор.
			</p>
			<div className="note">
				<h6 className="note__title">Примечание</h6>
				<p className="note__info">
					Убираться гораздо веселее под любимую музыку.
				</p>
			</div>


		</div>);
};
