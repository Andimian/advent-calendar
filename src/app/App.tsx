import css from './app.module.scss';
import '../assets/styles/base.scss';
import '../assets/styles/MediaQueries.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Letter } from '../pages/1/Letter';
import { Garland } from '../features/garland/Garland';
import treeImg from '../assets/images/tree.jpg';
import { AdventCalendar } from '../pages/calendar/Calendar';


function App() {
	return (<div className={css.wrapper}>
			<Garland/>
			<BrowserRouter basename='/advent-calendar'>
				<Routes>
					<Route path="/" element={<AdventCalendar/>}/>
					<Route path="/1" element={<Letter/>}/>
					<Route path="/2" element={<Letter/>}/>
					<Route path="/3" element={<Letter/>}/>
					<Route path="/4" element={<Letter/>}/>
					<Route path="/5" element={<Letter/>}/>
					<Route path="/6" element={<Letter/>}/>
					<Route path="/7" element={<Letter/>}/>
					<Route path="/8" element={<Letter/>}/>
					<Route path="/9" element={<Letter/>}/>
					<Route path="/10" element={<Letter/>}/>
					<Route path="/11" element={<Letter/>}/>
					<Route path="/12" element={<Letter/>}/>
					<Route path="/13" element={<Letter/>}/>
					<Route path="/14" element={<Letter/>}/>
					<Route path="/15" element={<Letter/>}/>
					<Route path="/16" element={<Letter/>}/>
					<Route path="/17" element={<Letter/>}/>
					<Route path="/18" element={<Letter/>}/>
					<Route path="/19" element={<Letter/>}/>
					<Route path="/20" element={<Letter/>}/>
					<Route path="/21" element={<Letter/>}/>
					<Route path="/22" element={<Letter/>}/>
					<Route path="/23" element={<Letter/>}/>
					<Route path="/24" element={<Letter/>}/>
					<Route path="/25" element={<Letter/>}/>
					<Route path="/26" element={<Letter/>}/>
					<Route path="/27" element={<Letter/>}/>
					<Route path="/28" element={<Letter/>}/>
					<Route path="/29" element={<Letter/>}/>
					<Route path="/30" element={<Letter/>}/>
					<Route path="/31" element={<Letter/>}/>
				</Routes>
			</BrowserRouter>
			<div className='endImg'><img src={treeImg} alt="Дата"/></div>
		</div>)
}

export default App
