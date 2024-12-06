// import { FC } from 'react';
//
// export const AdventCalendar: FC = ({year, month}) => {
// 	const daysOfWeek = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
// 	const firstDay = new Date(year, month, 1).getDay();
// 	const daysInMonth = new Date(year, month + 1, 0).getDate();
// 	const calendar = [];
//
// 	let day = 1;
// 	for (let row = 0; row < 6; row++) {
// 		const week = [];
// 		for (let col = 0; col < 7; col++) {
// 			if (row === 0 && col < firstDay) {
// 				week.push(null);
// 			} else if (day <= daysInMonth) {
// 				week.push(day);
// 				day++;
// 			} else {
// 				week.push(null);
// 			}
// 		}
// 		calendar.push(week);
// 	}
//
// 	const handleDayClick = (day) => {
// 		if (day) {
// 			window.location.href = `/page/${day}`;
// 		}
// 	};
//
//
//
// 	return (
// 		<div>
// 			<div className="calendar-grid">
// 				<div className="calendar-header">
// 					{daysOfWeek.map((day, index) => (
// 						<div key={index} className="calendar-cell">{day}</div>
// 					))}
// 				</div>
// 				<div className="calendar-body">
// 					{calendar.map((week, weekIndex) => (
// 						<div key={weekIndex} className="calendar-row">
// 							{week.map((day, dayIndex) => (
// 								<div
// 									key={dayIndex}
// 									className="calendar-cell"
// 									style={{
// 										cursor: day ? 'pointer' : 'default',
// 										backgroundColor: day ? '#f0f0f0' : '#fff',
// 										textAlign: 'center',
// 									}}
// 									onClick={() => handleDayClick(day)}
// 								>
// 									{day}
// 								</div>
// 							))}
// 						</div>
// 					))}
// 				</div>
// 			</div>
// 		</div>
// 	);
// 	);
// };
