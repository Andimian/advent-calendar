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
					Шьем игрушку из фетра
				</h1>
			</div>
			<div className={css.imagesWrapper}>
				<div><img src={mainImg} alt="Инструкция"/></div>
			</div>
			<h1 className='title'>
				Задание №29
			</h1>
			<p className='task'>
				Здравствуй Дианочка! Снеговики оставили тебе под ёлочкой набор для шитья. Тебе нужно сшить из него игрушку.<br/>
				Попроси маму тебе помочь, мои снеговики передали мне, что она у тебя большая мастерица по пошиву.
			</p>

			<div className="note">
				<h6 className="note__title">Примечание</h6>
				<p className="note__info">
					Работая с иголкой не балуйся, чтобы ни кого не поранить. Слушайся маму и учись у неё.
				</p>
			</div>
		</div>
	);
}
