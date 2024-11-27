import css from './app.module.scss';
import '../assets/styles/base.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Letter } from '../pages/1/Letter';
import { Garland } from '../features/garland/Garland';
import treeImg from '../assets/images/tree.jpg';

function App() {

	return (<div className={css.wrapper}>
			<Garland/>
			<BrowserRouter>
				<Routes>
					<Route
						path="/1"
						element={<Letter/>}
					/>
				</Routes>
			</BrowserRouter>
			<div className='endImg'><img src={treeImg} alt="Дата"/></div>
		</div>)
}

export default App
