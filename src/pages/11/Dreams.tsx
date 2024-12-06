import { FC } from 'react';
import helloNumberImg from '../../assets/images/5.jpeg';
import crTree from './assets/images/dreams.jpeg';
import timeImg from '../../assets/images/present.svg';
import css from './dreams.module.scss';

export const Dreams: FC = () => {
	return (
		<div className='container'>
			<div className='numbersWrapper'>
				<div><img src={timeImg} alt="Дата"/></div>
				<div><img src={helloNumberImg} alt="Дата"/></div>
			</div>

			<div className="title">
				<h1>
					Сегодня - мечтаем! Поделись своими мечтами и планами на будущий год
				</h1>
			</div>
			<div className={css.imagesWrapper}>
				<div><img src={crTree} alt="Инструкция"/></div>
			</div>
			<h1 className='title'>
				Задание №5
			</h1>
			<p className='task'>
				Здравствуй Дианочка! Сегодня за вечерним ужином поделись своими мечтами или планами на будущий год,
				можно записать видео. Сохрани записи и на следующий год вы сможете проверить, что действительно удалось
				исполнить, что - пока нет. Взрослые также могут записать свои планы и обсудить их с детьми.
			</p>
			<div className="note">
				<h6 className="note__title">Примечание</h6>
				<p className="note__info">
					Какие-то планы могут быть семейными (например отправиться вместе в путешествие), другие - личными.
					Запиши мечты, будет интересно в следующем году.
				</p>
			</div>


		</div>);
};
