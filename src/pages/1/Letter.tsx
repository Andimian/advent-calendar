import { FC } from 'react';
import letterImg from './assets/images/letterImg.jpg';
import letterImg2 from './assets/images/letterImg2.jpg';
import helloNumberImg from '../../assets/images/0.jpg';
import timeImg from '../../assets/images/present.svg';

export const Letter: FC = () => {
		return (
			<div>
				<ul className="lightrope">
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>
				<div className='numbersWrapper'>
					<img src={timeImg} alt="Дата"/>
					<img src={helloNumberImg} alt="Дата"/>
				</div>
				<div className='imagesWrapper'>
					<img src={letterImg2} alt="Письмо деду морозу"/>
					<img src={letterImg} alt="Письмо деду морозу"/>
				</div>
				<div className="title">
					{/*<PresentImg/>*/}
					<h1>
						Пишем письмо дедушке Морозу
					</h1>
				</div>

			</div>);
};
