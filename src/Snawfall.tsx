import React, { useEffect, useRef } from "react";

interface Snowflake {
	x: number;
	y: number;
	radius: number;
	speed: number;
	opacity: number;
	update: () => void;
	draw: () => void;
}

const Snowfall: React.FC = () => {
	const canvasRef = useRef<HTMLCanvasElement | null>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		// Устанавливаем размеры канваса
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;

		// Массив для хранения снежинок
		const snowflakes: Snowflake[] = [];

		// Конструктор снежинок
		class SnowflakeClass implements Snowflake {
			x: number;
			y: number;
			radius: number;
			speed: number;
			opacity: number;

			constructor(x: number, y: number, radius: number, speed: number, opacity: number) {
				this.x = x;
				this.y = y;
				this.radius = radius;
				this.speed = speed;
				this.opacity = opacity;
			}

			// Метод для обновления положения снежинки
			update() {
				if (!canvas) return;
				this.y += this.speed;
				if (this.y > canvas.height) {
					this.y = 0;
					this.x = Math.random() * canvas.width;
				}
			}

			// Метод для рисования снежинки
			draw() {
				if (!ctx) return;
				ctx.beginPath();
				ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
				ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
				ctx.fill();
			}
		}

		// Функция для генерации снежинок
		const createSnowflakes = () => {
			for (let i = 0; i < 200; i++) {
				let radius = Math.random() * 4 + 1; // Размер снежинки
				let x = Math.random() * canvas.width;
				let y = Math.random() * canvas.height;
				let speed = Math.random() * 1 + 0.2; // Скорость падения
				let opacity = Math.random() * 0.5 + 0.3; // Прозрачность
				snowflakes.push(new SnowflakeClass(x, y, radius, speed, opacity));
			}
		};

		// Функция анимации
		const animateSnow = () => {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			snowflakes.forEach(snowflake => {
				snowflake.update();
				snowflake.draw();
			});
			requestAnimationFrame(animateSnow);
		};

		// Инициализация и запуск анимации
		createSnowflakes();
		animateSnow();

		// Обновление размера канваса при изменении размера окна
		window.addEventListener("resize", () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		});

		// Очистка ресурсов при удалении компонента
		return () => {
			window.removeEventListener("resize", () => {});
		};
	}, []);

	return <canvas ref={canvasRef}></canvas>;
};

export default Snowfall;
