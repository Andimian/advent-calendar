import css from './app.module.scss';
import '../assets/styles/base.scss';
import '../assets/styles/MediaQueries.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Garland } from '../features/garland/Garland';
import treeImg from '../assets/images/tree.jpg';
import { Snake } from '../pages/2/Snake';
import { Letter } from '../pages/1/Letter';
import { PlasticineSnake } from '../pages/3/PlasticineSnake';
import { ChristmasTree } from '../pages/4/ChristmasTree';
import { Dreams } from '../pages/5/Dreams';


function App() {
	return (<div className={css.wrapper}>
			<Garland/>
			<BrowserRouter basename='/advent-calendar'>
				<Routes>
					{/*<Route path="/" element={<AdventCalendar/>}/>*/}
					<Route path="/1" element={<Letter/>}/>
					<Route path="/2" element={<Snake/>}/>
					<Route path="/3" element={<PlasticineSnake/>}/>
					<Route path="/4" element={<ChristmasTree/>}/>
					<Route path="/5" element={<Dreams/>}/>
					<Route path="/6" element={<Dreams/>}/>
					<Route path="/7" element={<Dreams/>}/>
					<Route path="/8" element={<Dreams/>}/>
					<Route path="/9" element={<Dreams/>}/>
					<Route path="/10" element={<ChristmasTree/>}/>
					<Route path="/11" element={<ChristmasTree/>}/>
					<Route path="/12" element={<Dreams/>}/>
					<Route path="/13" element={<ChristmasTree/>}/>
					<Route path="/14" element={<Dreams/>}/>
					<Route path="/15" element={<ChristmasTree/>}/>
					<Route path="/16" element={<Dreams/>}/>
					<Route path="/17" element={<ChristmasTree/>}/>
					<Route path="/18" element={<ChristmasTree/>}/>
					<Route path="/19" element={<Dreams/>}/>
					<Route path="/20" element={<ChristmasTree/>}/>
					<Route path="/21" element={<Dreams/>}/>
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
