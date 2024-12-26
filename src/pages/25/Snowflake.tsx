import { FC } from 'react';
import helloNumberImg from '../../assets/images/25.png';
import timeImg from '../../assets/images/present.svg';
import mainImg from './assets/images/kak-slozhit-shestiluchevuyu-snezhinku-iz-bumagi.jpg';
import css from './style.module.scss';


export const Snowflake: FC = () => {
	return (
		<div className='container'>
			<div className='numbersWrapper'>
				<div><img src={timeImg} alt="Дата"/></div>
				<div><img src={helloNumberImg} alt="Дата"/></div>
			</div>

			<div className="title">
				<h1>
					Вырезаем снежинки из бумаги
				</h1>
			</div>
			<div className={css.imagesWrapper}>
				<div><img src={mainImg} alt="Инструкция"/></div>
			</div>
			<h1 className='title'>
				Задание №25
			</h1>
			<p className='task'>
				Здравствуй Дианочка! Для сегодняшнего задания тебе понадобится листья бумаги А4, ножницы, ручка или простой 
				карандаш.<br/>
				Как сделать:<br/>
				1. Согните лист бумаги так чтобы совпали дву соседние грани. Проглаадьте линию сгиба.<br/>
				2. Обрежьте оставшуюся часть бумаги.<br/>
				3. Треугольник еще раз сложите пополоам. Также прогладьте линию сгиба.<br/>
				Правую часть треугольника сложите к середине.<br/>
				5. Переверните поделку и то же самое и то же самое проделайте с левой стороной.<br/>
				6. С помощью ручки или карандаша нарисуйте на треугольнике любой узор.<br/>
				7. Вырежьте узор по контуру.<br/>
				8. Аккуратно разверните изделие и разгладьте получившуюся снежинку.<br/>
			</p>

			<div className="note">
				<h6 className="note__title">Примечание</h6>
				<p className="note__info">
					Можно раскрасить снежинку красками.
				</p>
			</div>
		</div>
	);
}
