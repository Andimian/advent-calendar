import { FC } from 'react';
import helloNumberImg from '../../assets/images/21.png';
import timeImg from '../../assets/images/present.svg';
import mainImg from './assets/images/cookies.jpg';
import css from './style.module.scss';


export const Cookies: FC = () => {
	return (
		<div className='container'>
			<div className='numbersWrapper'>
				<div><img src={timeImg} alt="Дата"/></div>
				<div><img src={helloNumberImg} alt="Дата"/></div>
			</div>

			<div className="title">
				<h1>
					Готовим печенье
				</h1>
			</div>
			<div className={css.imagesWrapper}>
				<div><img src={mainImg} alt="Инструкция"/></div>
			</div>
			<h1 className='title'>
				Задание №21
			</h1>
			<p className='task'>
				Здравствуй Дианочка! Самое время приготовить самое настоящее лакомство. Для этого тебе понадобится:
				<ul>
					<li>
						200 г. муки
					</li>
					<li>
						80 г. сахара
					</li>
					<li>
						100 г. сливочного масла
					</li>
					<li>
						3 г. разрыхлителя
					</li>
					<li>
						1 яйцо
					</li>
					<li>
						формочки
					</li>
				</ul>
				<p>
					1. Взбей масло, яйцо и сахар<br/>
					2. Вмешай муку и разрыхлитель<br/>
					3. Замеси тесто и оставь на 30 мин. в холодильнике<br/>
					4. Раскатай пласт 8 мм. и вырежи печеньки<br/>
					5. Выпекай 10 минут при 200 градусах<br/>
				</p>
			</p>

			<div className="note">
				<h6 className="note__title">Примечание</h6>
				<p className="note__info">
					Будь осторожна, разогретая духовка - очень горячая.
				</p>
			</div>
		</div>);
};
