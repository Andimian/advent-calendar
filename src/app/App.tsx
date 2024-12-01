import css from './app.module.scss';
import '../assets/styles/base.scss';
import '../assets/styles/MediaQueries.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Garland } from '../features/garland/Garland';
import treeImg from '../assets/images/tree.jpg';
import { Snake } from '../pages/2/Snake';
import { Letter } from '../pages/1/Letter';


function App() {
	return (<div className={css.wrapper}>
			<Garland/>
			<BrowserRouter basename='/advent-calendar'>
				<Routes>
					{/*<Route path="/" element={<AdventCalendar/>}/>*/}
					<Route path="/1" element={<Letter/>}/>
					<Route path="/2" element={<Snake/>}/>
					<Route path="/3" element={<Snake/>}/>
					<Route path="/4" element={<Snake/>}/>
					<Route path="/5" element={<Snake/>}/>
					<Route path="/6" element={<Snake/>}/>
					<Route path="/7" element={<Snake/>}/>
					<Route path="/8" element={<Snake/>}/>
					<Route path="/9" element={<Snake/>}/>
					<Route path="/10" element={<Snake/>}/>
					<Route path="/11" element={<Snake/>}/>
					<Route path="/12" element={<Snake/>}/>
					<Route path="/13" element={<Snake/>}/>
					<Route path="/14" element={<Snake/>}/>
					<Route path="/15" element={<Snake/>}/>
					<Route path="/16" element={<Snake/>}/>
					<Route path="/17" element={<Snake/>}/>
					<Route path="/18" element={<Snake/>}/>
					<Route path="/19" element={<Snake/>}/>
					<Route path="/20" element={<Snake/>}/>
					<Route path="/21" element={<Snake/>}/>
					<Route path="/22" element={<Snake/>}/>
					<Route path="/23" element={<Snake/>}/>
					<Route path="/24" element={<Snake/>}/>
					<Route path="/25" element={<Snake/>}/>
					<Route path="/26" element={<Snake/>}/>
					<Route path="/27" element={<Snake/>}/>
					<Route path="/28" element={<Snake/>}/>
					<Route path="/29" element={<Snake/>}/>
					<Route path="/30" element={<Snake/>}/>
					<Route path="/31" element={<Snake/>}/>
				</Routes>
			</BrowserRouter>
			<div className='endImg'><img src={treeImg} alt="Дата"/></div>
		</div>)
}

export default App
