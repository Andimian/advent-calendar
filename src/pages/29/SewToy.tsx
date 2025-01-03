import { FC } from 'react';
import helloNumberImg from '../../assets/images/29.png';
import timeImg from '../../assets/images/present.svg';
import mainImg from './assets/images/sew.png';
import css from './style.module.scss';


export const SewToy: FC = () => {
	return (
		<div className='container'>
			<div className='numbersWrapper'>
				<div><img src={timeImg} alt="Дата"/></div>
				<div><img src={helloNumberImg} alt="Дата"/></div>
			</div>

			<div className="title">
				<h1>
					Новогодняя фотосессия
				</h1>
			</div>
			<div className={css.imagesWrapper}>
				<div><img src={mainImg} alt="Инструкция"/></div>
			</div>
			<h1 className='title'>
				Задание 30
			</h1>
			<p className='task'>
				Здравствуй Дианочка! Соберитесь всей семьёй, чтобы сделать фотографии возле ёлки. Вам не нужно одеваться
				так нарядно, как на новый год. Пусть фотографии получатся домашними. 
			</p>

			<div className="note">
				<h6 className="note__title">Примечание</h6>
				<p className="note__info">
					Не забудь про весёлую новогоднюю музыку.
				</p>
			</div>
		</div>
	);
}
