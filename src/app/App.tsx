import css from './app.module.scss';
import Snowfall from '../Snawfall.tsx';

function App() {

	return (
		<div className={css.wrapper}>
			<Snowfall />  {/* Добавляем компонент снегопада */}
			<h1>Привет Диана!</h1>
			{/*<Routes>*/}
				{/*<Route*/}
				{/*	path="/presentation-for-pdf/offer/:id"*/}
				{/*	element={(<BasicTariffOnly>*/}
				{/*			<ComponentOfferPrinterWithRouter loadStructure={loadOfferStructure} isAutoPrint/>*/}
				{/*		</BasicTariffOnly>)}*/}
				{/*/>*/}
				{/*<Route*/}
				{/*	path="/presentation-for-pdf/private-template/:id"*/}
				{/*	element={(<BasicTariffOnly>*/}
				{/*			<ComponentOfferPrinterWithRouter loadStructure={loadTemplateStructure} isAutoPrint/>*/}
				{/*		</BasicTariffOnly>)}*/}
				{/*/>*/}
				{/*<Route path="/presentation/*" element={<PresentationWrapper/>}/>*/}
				{/*<Route path="*" element={MainRoutes}/>*/}
			{/*</Routes>*/}
		</div>
	)
}

export default App
