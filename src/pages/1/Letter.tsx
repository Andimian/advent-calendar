import { FC } from 'react';
import letterImg from './assets/images/letterImg.jpg';
import letterImg2 from './assets/images/letterImg2.jpg';
import helloNumberImg from '../../assets/images/1.jpeg';
import timeImg from '../../assets/images/present.svg';
import { AudioPlayer } from '../../features/audioPlayer/AudioPlayer';

export const Letter: FC = () => {
	return (
		<div className='container'>
			<div className='numbersWrapper'>
				<div><img src={timeImg} alt="Дата"/></div>
				<div><img src={helloNumberImg} alt="Дата"/></div>
			</div>

			<AudioPlayer/>

			<div className="title">
				{/*<PresentImg/>*/}
				<h1>
					Пишем письмо дедушке Морозу
				</h1>
			</div>
			<div className='imagesWrapper'>
				<div><img src={letterImg2} alt="Письмо деду морозу"/></div>
				<div><img src={letterImg} alt="Письмо деду морозу"/></div>
			</div>
			<h1 className='title'>
				Задание №1
			</h1>
			<p className='task'>
				Дианочка расскажи дедушке о себе. Поблагодари дедушку Мороза за прошлый подарок.
				Подумай, что бы ты хотела бы получить на Новый год, напиши свои мечты, а лучше
				нарисуй. Вспомни, как ты провела этот год, что хорошего было сделано.
			</p>

		</div>);
};
