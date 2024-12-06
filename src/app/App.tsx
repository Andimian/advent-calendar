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
import { Cleaning } from '../pages/6/Cleaning';
import React from 'react';
import { DecoratingChristmasTree } from '../pages/7/DecoratingChristmasTree';
import { SnowAngel } from '../pages/8/SnowAngel';


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
					<Route path="/6" element={<Cleaning/>}/>
					<Route path="/7" element={<DecoratingChristmasTree/>}/>
					<Route path="/8" element={<SnowAngel/>}/>
					<Route path="/9" element={<Dreams/>}/>
					<Route path="/10" element={<Cleaning/>}/>
					<Route path="/11" element={<Cleaning/>}/>
					<Route path="/12" element={<Cleaning/>}/>
					<Route path="/13" element={<Cleaning/>}/>
					<Route path="/14" element={<Cleaning/>}/>
					<Route path="/15" element={<Cleaning/>}/>
					<Route path="/16" element={<Cleaning/>}/>
					<Route path="/17" element={<Cleaning/>}/>
					<Route path="/18" element={<Cleaning/>}/>
					<Route path="/19" element={<Cleaning/>}/>
					<Route path="/20" element={<Cleaning/>}/>
					<Route path="/21" element={<Cleaning/>}/>
					<Route path="/22" element={<Cleaning/>}/>
					<Route path="/23" element={<Cleaning/>}/>
					<Route path="/24" element={<Cleaning/>}/>
					<Route path="/25" element={<Cleaning/>}/>
					<Route path="/26" element={<Cleaning/>}/>
					<Route path="/27" element={<Cleaning/>}/>
					<Route path="/28" element={<Cleaning/>}/>
					<Route path="/29" element={<Cleaning/>}/>
					<Route path="/30" element={<Cleaning/>}/>
					<Route path="/31" element={<Cleaning/>}/>
				</Routes>
			</BrowserRouter>
			<div className='endImg'><img src={treeImg} alt="Дата"/></div>
		</div>)
}

export default App