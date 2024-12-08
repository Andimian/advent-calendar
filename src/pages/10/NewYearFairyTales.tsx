import { FC } from 'react';
import helloNumberImg from '../../assets/images/10.png';
import mainImg from './assets/images/read.jpg';
import timeImg from '../../assets/images/present.svg';
import css from './style.module.scss';

export const NewYearFairyTales: FC = () => {
	return (
		<div className='container'>
			<div className='numbersWrapper'>
				<div><img src={timeImg} alt="Дата"/></div>
				<div><img src={helloNumberImg} alt="Дата"/></div>
			</div>

			<div className="title">
				<h1>
					Читаем новогодние сказки и рассказы про зиму!
				</h1>
			</div>
			<div className={css.imagesWrapper}>
				<div><img src={mainImg} alt="Инструкция"/></div>
			</div>
			<h1 className='title'>
				Задание №10
			</h1>
			<p className='task'>
				Здравствуй Дианочка! Чтение книг развивает грамотность, воображение, тренирует
				память. Найди дома книги, в которых есть упоминание про зиму, Новый год и всё, что
				с ним связано. Выбери, какая тебе нравится больше всех и прочти её.
			</p>
			<div className="note">
				<h6 className="note__title">Примечание</h6>
				<p className="note__info">
					Если вдруг не окажется интересной книги, можно прослушать аудио книгу.
				</p>
			</div>
		</div>);
};
