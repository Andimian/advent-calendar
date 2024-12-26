import { FC } from 'react';
import helloNumberImg from '../../assets/images/27.png';
import timeImg from '../../assets/images/present.svg';
import mainImg from './assets/images/crystal.jpeg';
import css from './style.module.scss';


export const Crystal: FC = () => {
	return (
		<div className='container'>
			<div className='numbersWrapper'>
				<div><img src={timeImg} alt="Дата"/></div>
				<div><img src={helloNumberImg} alt="Дата"/></div>
			</div>

			<div className="title">
				<h1>
					Выращиваем кристалл соли
				</h1>
			</div>
			<div className={css.imagesWrapper}>
				<div><img src={mainImg} alt="Инструкция"/></div>
			</div>
			<h1 className='title'>
				Задание №27
			</h1>
			<p className='task'>
				Здравствуй Дианочка! В насыщенный раствор соли положи нитку, на которую надень несколько маленьких бусинок.
				Убери всю конструкцию в холодильник. Через несколько дней достань аккуратно нитку, на ней образовались кристалы 
				поваренной соли.
			</p>

			<div className="note">
				<h6 className="note__title">Примечание</h6>
				<p className="note__info">
					Чтобы получить насыщенный раствор соли, в пол стакана воды добавляй соль, до тех пор, пока она не перестанет
					растворяться. Можно добавить в раствор яркую краску, тогда кристаллы будут цветные.
				</p>
			</div>
		</div>
	);
}
