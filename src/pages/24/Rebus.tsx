import { FC } from 'react';
import helloNumberImg from '../../assets/images/24.png';
import timeImg from '../../assets/images/present.svg';
import mainImg from './assets/images/rebus.png';
import css from './style.module.scss';


export const Rebus: FC = () => {
	return (
		<div className='container'>
			<div className='numbersWrapper'>
				<div><img src={timeImg} alt="Дата"/></div>
				<div><img src={helloNumberImg} alt="Дата"/></div>
			</div>

			<div className="title">
				<h1>
					Отгадай ребус и найди этот предмет у себя дома
				</h1>
			</div>
			<div className={css.imagesWrapper}>
				<div><img src={mainImg} alt="Инструкция"/></div>
			</div>
			<h1 className='title'>
				Задание №24
			</h1>
			<p className='task'>
				Здравствуй Дианочка! Ребус - увлекательная игра головоломка, развивающая смекалку, логику и умение
				находить необычное в картинке. Если вокруг картинки стоят запятые, надо посмотреть, где они находятся
				и посчитать их. Когда они стоят перед словом, то отнимаются первые буквы, если после него - то
				последние, в том количестве, сколько есть запятых.
			</p>

			<div className="note">
				<h6 className="note__title">Примечание</h6>
				<p className="note__info">
					Отгадай ребусы и нарисуй ответы. Подсказка - все эти предметы есть почти в каждом доме.
				</p>
			</div>
		</div>
	);
}
