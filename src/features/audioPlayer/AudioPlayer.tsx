import { useRef, useState } from 'react';
import styles from './styles.module.scss';
import dedImg from '../../assets/images/ded.png';

export const AudioPlayer: React.FC = () => {
	// Используем useRef для создания ссылки на элемент audio
	const audioRef = useRef<HTMLAudioElement | null>(null);
	const [isPlaying, setIsPlaying] = useState(false);

	// Функция для воспроизведения/паузы
	const togglePlayPause = () => {
		if (audioRef.current) {
			if (isPlaying) {
				audioRef.current.pause(); // Пауза
			} else {
				audioRef.current.play();  // Воспроизведение
			}
			setIsPlaying(!isPlaying);  // Меняем состояние кнопки
		}
	};

	// Обработчик для события окончания трека
	const handleTrackEnd = () => {
		setIsPlaying(false); // Когда трек заканчивается, сбрасываем состояние кнопки
	};

	return (
		<div>
			<button onClick={togglePlayPause} className={styles.btn}>
				<img src={dedImg} className={styles.dedImg} alt=""/>
				{isPlaying ? 'Остановить' : 'Послушать'}
			</button>
			<audio
				ref={audioRef}
				src="/advent-calendar/assets/audio/hello.mp3"
				onEnded={handleTrackEnd}
			/>
		</div>);
};
