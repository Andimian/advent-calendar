import { FC } from 'react';
import helloNumberImg from '../../assets/images/22.png';
import timeImg from '../../assets/images/present.svg';
import mainImg from './assets/images/melody.jpg';
import css from './style.module.scss';


export const Melody: FC = () => {
	return (
		<div className='container'>
			<div className='numbersWrapper'>
				<div><img src={timeImg} alt="Дата"/></div>
				<div><img src={helloNumberImg} alt="Дата"/></div>
			</div>

			<div className="title">
				<h1>
					Играйте всей семьей в "Угадай мелодию"
				</h1>
			</div>
			<div className={css.imagesWrapper}>
				<div><img src={mainImg} alt="Инструкция"/></div>
			</div>
			<h1 className='title'>
				Задание №22
			</h1>
			<p className='task'>
				Здравствуй Дианочка! Пойте известные песни, используя только звуки "хрю-хрю", остальные члены семьи
				должны их угадать. Кто угадал, поёт следующим. Например, попробуй прохрюкать песню "В лесу родилась
				ёлочка".
			</p>

			<div className="note">
				<h6 className="note__title">Примечание</h6>
				<p className="note__info">
					Будет веселее, если каждый новый игрок будет петь разное сочетание звуков, например, мяу-мяу,
					гав-гав. Напишите заранее звуки на листочке, пусть каждый вытягивает один листочек перед
					исполнением.
				</p>
			</div>
		</div>);
};
