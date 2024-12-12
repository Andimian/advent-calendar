import { FC } from 'react';
import helloNumberImg from '../../assets/images/13.png';
import timeImg from '../../assets/images/present.svg';
import mainImg from './assets/images/elka_iz_podushek.jpg';
import css from '../12/style.module.scss';


export const PillowTree: FC = () => {
	return (
		<div className='container'>
			<div className='numbersWrapper'>
				<div><img src={timeImg} alt="Дата"/></div>
				<div><img src={helloNumberImg} alt="Дата"/></div>
			</div>

			<div className="title">
				<h1>
					Смастери елку из подушек
				</h1>
			</div>
			<div className={css.imagesWrapper}>
				<div><img src={mainImg} alt="Инструкция"/></div>
			</div>
			<h1 className='title'>
				Задание №13
			</h1>
			<p className='task'>
				Здравствуй Дианочка! Собери подушки разных размеров и сложи их пирамидкой - от большей к меньшей так,
				чтобы это напоминало ёлочку. Укрась "ёлку" мишурой. Устрой с получившейся ёлочкой фотосессию.
			</p>

			<div className="note">
				<h6 className="note__title">Примечание</h6>
				<p className="note__info">
					Не забудь потом разложить все подушки по местам.
				</p>
			</div>
		</div>);
};
