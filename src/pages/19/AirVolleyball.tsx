import { FC } from 'react';
import helloNumberImg from '../../assets/images/19.png';
import timeImg from '../../assets/images/present.svg';
import mainImg from './assets/images/airVolleyball.jpg';
import css from './style.module.scss';


export const AirVolleyball: FC = () => {
	return (
		<div className='container'>
			<div className='numbersWrapper'>
				<div><img src={timeImg} alt="Дата"/></div>
				<div><img src={helloNumberImg} alt="Дата"/></div>
			</div>

			<div className="title">
				<h1>
					Воздушный волейбол. Установи свой рекорд
				</h1>
			</div>
			<div className={css.imagesWrapper}>
				<div><img src={mainImg} alt="Инструкция"/></div>
			</div>
			<h1 className='title'>
				Задание №19
			</h1>
			<p className='task'>
				Здравствуй Дианочка! Сегодня надуй воздушный шарик. Потренируйся и соверши максимальное количество
				отбиваний шарика рукой, не уронив его на пол, ногами тоже можно помогать.
			</p>

			<div className="note">
				<h6 className="note__title">Примечание</h6>
				<p className="note__info">
					Этот рекорд можно установить с кем-то совместно или устроить соревнование.
				</p>
			</div>
		</div>);
};
