import { FC } from 'react';
import helloNumberImg from '../../assets/images/20.png';
import timeImg from '../../assets/images/present.svg';
import mainImg from './assets/images/skorogovorki2.webp';
import css from './style.module.scss';


export const TongueTwisters: FC = () => {
	return (
		<div className='container'>
			<div className='numbersWrapper'>
				<div><img src={timeImg} alt="Дата"/></div>
				<div><img src={helloNumberImg} alt="Дата"/></div>
			</div>

			<div className="title">
				<h1>
					Выучи новогоднюю скороговорку и расскажи её быстро
				</h1>
			</div>
			<div className={css.imagesWrapper}>
				<div><img src={mainImg} alt="Инструкция"/></div>
			</div>
			<h1 className='title'>
				Задание №20
			</h1>
			<p className='task'>
				Здравствуй Дианочка! Мои снеговики просили передать тебе привет и поблагодарить за конфетку. Спасибо
				тебе за твою доброту!
				Ну а сегодняшнее задание - нужно выучить скороговорки.
				Скороговорки улучшают не только дикцию, но и улучшают мышление, внимание и даже
				скорость чтения. Выбери скороговорку, набери воздуха в себя как можно больше и когда начнешь выдыхать
				воздух, начинай говорить скороговорку. Успевай рассказать её пока не закончится воздух. Если
				скороговорка короткая, повтори её несколько раз на выдохе.
			</p>

			<div className="note">
				<h6 className="note__title">Примеры скороговорок</h6>
				<p className="note__info">
					Купили Валерику и Вареньке варежки и валенки.<br/><br/>
					У шапки-ушанки шнурочки на ушках, чтоб кверху завязывать шапкины ушки. <br/><br/>
					Везёт Сенька Саньку с Сонькой на санках. Санки скок, Сеньку с ног, Соньку в лоб, все в сугроб.<br/><br/>
					Под синим сводом небес сели снегири под навес.<br/><br/>
					Замороженное мороженное в мороз такое мороженное, что после него ещё не отмороженное становится
					как отмороженное. А раз мороженное внутри, то оно - размороженное.
				</p>
			</div>
		</div>);
};
