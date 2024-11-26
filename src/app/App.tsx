import css from './app.module.scss';
import '../assets/styles/base.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Letter } from '../pages/1/Letter.tsx';

function App() {

	return (
		<div className={css.wrapper}>
			<BrowserRouter>
				<Routes>
					<Route
						path="/1"
						element={<Letter/>}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
