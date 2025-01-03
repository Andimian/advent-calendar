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
import { Hugs } from '../pages/9/Hugs';
import { NewYearFairyTales } from '../pages/10/NewYearFairyTales';
import { NewYearOfOtherCountries } from '../pages/11/NewYearOfOtherCountries';
import { Feeder } from '../pages/12/Feeder';
import { PillowTree } from '../pages/13/PillowTree';
import { Cartoon } from '../pages/14/Cartoon';
import { Fantasy } from '../pages/15/Fantasy';
import { Poem } from '../pages/16/Poem';
import { GreetingsFromPast } from '../pages/17/GreetingsFromPast';
import { Youga } from '../pages/18/Youga';
import { AirVolleyball } from '../pages/19/AirVolleyball';
import { TongueTwisters } from '../pages/20/TongueTwisters';
import { Cookies } from '../pages/21/Cookies';
import { Melody } from '../pages/22/Melody';
import { Kompl } from '../pages/23/Kompl';
import { Rebus } from '../pages/24/Rebus';
import { Snowflake } from '../pages/25/Snowflake';
import { Palindrome } from '../pages/26/Palindrome';
import { Crystal } from '../pages/27/Crystal';
import { Parrots } from '../pages/28/Parrots';
import { SewToy } from '../pages/29/SewToy';
import { Photosesion } from '../pages/30/Photosession';
import { NeyYear } from '../pages/31/NeyYear';

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
					<Route path="/9" element={<Hugs/>}/>
					<Route path="/10" element={<NewYearFairyTales/>}/>
					<Route path="/11" element={<NewYearOfOtherCountries/>}/>
					<Route path="/12" element={<Feeder/>}/>
					<Route path="/13" element={<PillowTree/>}/>
					<Route path="/14" element={<Cartoon/>}/>
					<Route path="/15" element={<Fantasy/>}/>
					<Route path="/16" element={<Poem/>}/>
					<Route path="/17" element={<GreetingsFromPast/>}/>
					<Route path="/18" element={<Youga/>}/>
					<Route path="/19" element={<AirVolleyball/>}/>
					<Route path="/20" element={<TongueTwisters/>}/>
					<Route path="/21" element={<Cookies/>}/>
					<Route path="/22" element={<Melody/>}/>
					<Route path="/23" element={<Kompl/>}/>
					<Route path="/24" element={<Rebus/>}/>
					<Route path="/25" element={<Snowflake/>}/>
					<Route path="/26" element={<Palindrome/>}/>
					<Route path="/27" element={<Crystal/>}/>
					<Route path="/28" element={<Parrots/>}/>
					<Route path="/29" element={<SewToy/>}/>
					<Route path="/30" element={<Photosesion/>}/>
					<Route path="/31" element={<NeyYear/>}/>
				</Routes>
			</BrowserRouter>
			<div className='endImg'><img src={treeImg} alt="Дата"/></div>
		</div>)
}

export default App
