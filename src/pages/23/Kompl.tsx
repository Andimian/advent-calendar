import { FC } from 'react';
import helloNumberImg from '../../assets/images/23.png';
import timeImg from '../../assets/images/present.svg';
import mainImg from './assets/images/i.webp';
import css from './style.module.scss';


export const Kompl: FC = () => {
	return (
		<div className='container'>
			<div className='numbersWrapper'>
				<div><img src={timeImg} alt="Дата"/></div>
				<div><img src={helloNumberImg} alt="Дата"/></div>
			</div>

			<div className="title">
				<h1>
					День комплиментов
				</h1>
			</div>
			<div className={css.imagesWrapper}>
				<div><img src={mainImg} alt="Инструкция"/></div>
			</div>
			<h1 className='title'>
				Задание №22
			</h1>
			<p className='task'>
				Здравствуй Дианочка! Сегодня весь день говорите в вашей семье друг другу комплименты!
			</p>

			<div className="note">
				<h6 className="note__title">Примечание</h6>
				<p className="note__info">
					Постарайся придумать необычные комплименты.
				</p>
			</div>
		</div>);
};
