import React, { Component } from 'react'
import Row from './Row'
import requests from './requests'
import Banner from './banner/Banner'
import Nav from './Navbar/Navbar'

import './App.scss'

class App extends Component {
	render() {
		return (
			<div className='app'>
				<Nav />
				<Banner />
				<br />
				<Row
					isLargeRow
					title='Лучшее на нетфликс'
					fetchUrl={requests.fetchNetflixOriginals}
				/>
				<Row title='Сейчас популярно' fetchUrl={requests.fetchTrending} />
				<Row title='Боевики' fetchUrl={requests.fetchActionMovies} />
				<Row title='Комедии' fetchUrl={requests.fetchComedyMovies} />
				<Row title='Хорроры' fetchUrl={requests.fetchHorrorMovies} />
				<Row title='Романтика' fetchUrl={requests.fetchRomanceMovies} />
				<Row
					title='Документальные фильмы'
					fetchUrl={requests.fetchDocumentaries}
				/>
			</div>
		)
	}
}

export default App
