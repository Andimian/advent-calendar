import { FC } from 'react';
import helloNumberImg from '../../assets/images/8.jpeg';
import mainImg from './assets/images/snowAngel.webp';
import timeImg from '../../assets/images/present.svg';
import css from './style.module.scss';

export const SnowAngel: FC = () => {
	return (
		<div className='container'>
			<div className='numbersWrapper'>
				<div><img src={timeImg} alt="Дата"/></div>
				<div><img src={helloNumberImg} alt="Дата"/></div>
			</div>

			<div className="title">
				<h1>
					Идём гулять на улицу! Делаем снежного ангела!
				</h1>
			</div>
			<div className={css.imagesWrapper}>
				<div><img src={mainImg} alt="Инструкция"/></div>
			</div>
			<h1 className='title'>
				Задание №8
			</h1>
			<p className='task'>
				Здравствуй Дианочка! Покататься с горки, поиграть в снежки, сделать "снежного ангела", слепить снеговика
				 - столько много интересных занятий во дворе зимой. Нельзя упускать такую возможность, скорее на улицу,
				гулять. Помни! Категорически запрещено кататься с горок, которые выходят туда, где могут ездить автомобили.
			</p>
			<div className="note">
				<h6 className="note__title">Примечание</h6>
				<p className="note__info">
					Погода может быть разной и если к примеру не получается лепить снежки - это не повод сидеть дома.
					Вместо снежков можно поиграть в "догонялки" или другую интересную игру.
				</p>
			</div>


		</div>);
};
