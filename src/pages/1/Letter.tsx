import { FC } from 'react';
import letterImg from './assets/images/letterImg.jpg';
import letterImg2 from './assets/images/letterImg2.jpg';
// import PresentImg from '../../assets/images/present.svg';

export const Letter: FC = () => {
		return (
			<div>
				<div className='imagesWrapper'>
					<img src={letterImg} alt="Письмо деду морозу"/>
					<img src={letterImg2} alt="Письмо деду морозу"/>
				</div>
				<div className="title">
					{/*<PresentImg/>*/}
					<h1>
						Пишем письмо дедушке Морозу
					</h1>
				</div>

			</div>);
};
