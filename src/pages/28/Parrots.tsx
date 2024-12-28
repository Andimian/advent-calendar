import { FC } from 'react';
import helloNumberImg from '../../assets/images/28.png';
import timeImg from '../../assets/images/present.svg';
import mainImg from './assets/images/parrots.png';
import css from './style.module.scss';


export const Parrots: FC = () => {
	return (
		<div className='container'>
			<div className='numbersWrapper'>
				<div><img src={timeImg} alt="Дата"/></div>
				<div><img src={helloNumberImg} alt="Дата"/></div>
			</div>

			<div className="title">
				<h1>
					38 попугаев. Измеряем свой рост
				</h1>
			</div>
			<div className={css.imagesWrapper}>
				<div><img src={mainImg} alt="Инструкция"/></div>
			</div>
			<h1 className='title'>
				Задание №28
			</h1>
			<p className='task'>
				Здравствуй Дианочка! Измерь сколько твоих ладоней (расстояние от самого длинного пальца до сонования ладони) 
				помещается в ширине стола, в твоем росте, в длине твоей кровати.<br/>
				Усложнённое задание: посчитай сколько это будет в сантиметрах. Подсказка - измерь длину кисти линейкой.
			</p>

			<div className="note">
				<h6 className="note__title">Примечание</h6>
				<p className="note__info">
					Этот метод измерения называется метод рядов. Еще его называют 38 попугаев, ты знаешь почему? Из какого
					это мультика? Если нет, спроси у мамы и обязательно его посмотри. Почему мы вспомнили про удава, 
					как думаешь?
				</p>
			</div>
		</div>
	);
}
