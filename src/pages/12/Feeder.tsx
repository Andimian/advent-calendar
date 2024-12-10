import { FC } from 'react';
import helloNumberImg from '../../assets/images/12.png';
import mainImg from './assets/images/bird_2.jpg';
import additionalImg from './assets/images/bird_3.jpg';
import timeImg from '../../assets/images/present.svg';
import css from './style.module.scss';

export const Feeder: FC = () => {
	return (
		<div className='container'>
			<div className='numbersWrapper'>
				<div><img src={timeImg} alt="Дата"/></div>
				<div><img src={helloNumberImg} alt="Дата"/></div>
			</div>

			<div className="title">
				<h1>
					Делаем кормушку для птиц
				</h1>
			</div>
			<div className={css.imagesWrapper}>
				<div><img src={mainImg} alt="Инструкция"/></div>
			</div>
			<h1 className='title'>
				Задание №12
			</h1>
			<p className='task'>
				Здравствуй Дианочка! Непросто живется птичкам зимой - холодно и голодно. Мы можем помочь пернатым,
				подкармливая их семечками и крупами. А делать это удобно в кормушках. Сделай свою кормушку для птиц,
				повесь на улице и помогай белочкам и птичкам.
				Простую кормушку можно сделать из пакетов из под сока или молока.
				Попроси родителей помочь тебе разрезать коробку и сделать прорези для шнурка. Укрась получившуюся
				кормушку, повесь на ветку и насыпь семечки или крупу, хорошо подойдет пшено.
			</p>

			<div className={css.imagesWrapper}>
				<div><img src={additionalImg} alt="Инструкция"/></div>
			</div>

			<div className="note">
				<h6 className="note__title">Примечание</h6>
				<p className="note__info">
					Не стоит кормить птиц хлебом, он плохо усваивается у них в желудке.
				</p>
			</div>
		</div>);
};
