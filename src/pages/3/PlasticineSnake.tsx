import { FC } from 'react';
import snakeImg from './assets/images/plasticineSnake.jpg';
import helloNumberImg from '../../assets/images/3.jpeg';
import timeImg from '../../assets/images/present.svg';
import css from './snake.module.scss';

export const PlasticineSnake: FC = () => {
	return (
		<div className='container'>
			<div className='numbersWrapper'>
				<div><img src={timeImg} alt="Дата"/></div>
				<div><img src={helloNumberImg} alt="Дата"/></div>
			</div>

			<div className="title">
				<h1>
					Слепи из пластилина змейку
				</h1>
			</div>
			<div className={css.imagesWrapper}>
				<div><img src={snakeImg} alt="Инструкция"/></div>
			</div>
			<h1 className='title'>
				Задание №3
			</h1>
			<p className='task'>
				Здравствуй Дианочка, задание на сегодня - слепить красивую змейку с подарком. Каких змеек ты знаешь?
				Посмотри с родителями картинки змей в интернете, выбери какая тебе больше нравится и слепи похожую.
			</p>
			<div className="note">
				<h6 className="note__title">Подсказка</h6>
				<p className="note__info">
					Не забудь использовать специальный коврик или лист бумаги, чтобы стол остался чистым.
				</p>
			</div>


		</div>);
};
