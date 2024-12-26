import { FC } from 'react';
import helloNumberImg from '../../assets/images/26.png';
import timeImg from '../../assets/images/present.svg';
import mainImg from './assets/images/palindrom.png';
import css from './style.module.scss';


export const Palindrome: FC = () => {
	return (
		<div className='container'>
			<div className='numbersWrapper'>
				<div><img src={timeImg} alt="Дата"/></div>
				<div><img src={helloNumberImg} alt="Дата"/></div>
			</div>

			<div className="title">
				<h1>
					Придумай или найди в интернете 5 фраз или слов палиндромов
				</h1>
			</div>
			<div className={css.imagesWrapper}>
				<div><img src={mainImg} alt="Инструкция"/></div>
			</div>
			<h1 className='title'>
				Задание №26
			</h1>
			<p className='task'>
				Здравствуй Дианочка! Палиндром или перевертень - слова и предложения, которые можно читать в разные стороны
				- слева направо и справа налево, причем смысл фразы или предложения сохраняется. Один из самых распространенных
				"А роза упала на лапу Азора". Правда здорово?<br/>
				Это слова палиндромы: дед, доход, топот, радар. Есть даже имена палиндромы: Алла, Анна. <br/>
				Найди или придумай слова и фразы палиндромы. 
			</p>
		</div>
	);
}
