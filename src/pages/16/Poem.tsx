import { FC } from 'react';
import helloNumberImg from '../../assets/images/16.png';
import timeImg from '../../assets/images/present.svg';
import mainImg from './assets/images/stih2.jpg';
import css from './style.module.scss';


export const Poem: FC = () => {
	return (
		<div className='container'>
			<div className='numbersWrapper'>
				<div><img src={timeImg} alt="Дата"/></div>
				<div><img src={helloNumberImg} alt="Дата"/></div>
			</div>

			<div className="title">
				<h1>
					Учим стихотворение
				</h1>
			</div>
			<div className={css.imagesWrapper}>
				<div><img src={mainImg} alt="Инструкция"/></div>
			</div>
			<h1 className='title'>
				Задание №16
			</h1>
			<p className='task'>
				Здравствуй Дианочка! Самое время выучить новогоднее стихотворение.
				<br/><br/>
				Новогодние игрушки,<br/>
				И гирлянды, и хлопушки —<br/>
				Все шумит, играет, светит,<br/>
				Прыгают от счастья дети!<br/><br/>

				С Новым годом! С Новым чудом!<br/>
				Праздновать сегодня будем,<br/>
				Веселиться, танцевать,<br/>
				Нашу елку зажигать!<br/><br/>

				Всем желаем больше смеха<br/>
				И огромного успеха,<br/>
				Чтобы ладились дела,<br/>
				Чтобы чаще похвала<br/><br/>

				В вашу сторону летела,<br/>
				Чтоб от счастье сердце пело!<br/>
				Вот и Дедушка Мороз!<br/>
				Что ты там в мешке принес?<br/>
			</p>

			<div className="note">
				<h6 className="note__title">Примечание</h6>
				<p className="note__info">
					Не забывай рассказывать стихотворение с чувством!
				</p>
			</div>
		</div>);
};
