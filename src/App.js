import React from 'react';
import './App.css';

function App() {
	const data = [
		{ type: 'door', name: 'Porta Garagem', active: false },
		{ type: 'door', name: 'Porta Sala', active: false },
		{ type: 'door', name: 'Porta Cozinha', active: false },
		{ type: 'light', name: 'Lâmpada Garagem', active: false },
		{ type: 'door', name: 'Lâmpada Sala', active: false },
		{ type: 'door', name: 'Lâmpada Cozinha', active: false },
		{ type: 'door', name: 'Lâmpada Quarto 1', active: false },
		{ type: 'door', name: 'Lâmpada Quarto 2', active: false },
		{ type: 'door', name: 'Lâmpada Quarto 3', active: false },
		{ type: 'door', name: 'Câmera 1', active: false },
		{ type: 'door', name: 'Câmera 2', active: false },
		{ type: 'door', name: 'Câmera 3', active: false },
		{ type: 'door', name: 'Câmera 4', active: false },
		{ type: 'door', name: 'Irrigador 1', active: false },
		{ type: 'door', name: 'Irrigador 2', active: false },
	];

	return (
		<>
			<div className="banner">
				<div className="banner__logo">
					<span className="logo__name">SHM</span>
					<span className="logo__text">Smart House Manager</span>
				</div>

				<div className="banner__author">
					<span>by </span>
					<a href="http://vauxgomes.github.io">vauxgomes</a>
				</div>
			</div>

			<div className="devices">
				<h2 className="devices__title">Painel de Dispositivos</h2>

				{/* Device */}
				<div className="device">
					<span className="material-icons">door_front</span>

					<div className="device__info">
						<span className="device__name">Porta Garagem</span>
						<span className="device__status">Fechada</span>

						<ul className="device__statistics"></ul>
					</div>
				</div>

				{/* Device */}
				<div className="device">
					<span className="material-icons">door_front</span>

					<div className="device__info">
						<span className="device__name">Porta Sala</span>
						<span className="device__status">Fechada</span>

						<ul className="device__statistics"></ul>
					</div>
				</div>

				{/* Device */}
				<div className="device">
					<span className="material-icons">door_front</span>

					<div className="device__info">
						<span className="device__name">Porta Cozinha</span>
						<span className="device__status">Fechada</span>

						<ul className="device__statistics"></ul>
					</div>
				</div>

				{/* Device */}
				<div className="device">
					<span className="material-icons">light</span>

					<div className="device__info">
						<span className="device__name">Lâmpada Garagem</span>
						<span className="device__status">Desligado</span>

						<ul className="device__statistics"></ul>
					</div>
				</div>

				{/* Device */}
				<div className="device active">
					<span className="material-icons">light</span>

					<div className="device__info">
						<span className="device__name">Lâmpada Sala</span>
						<span className="device__status">Ligado</span>

						<ul className="device__statistics"></ul>
					</div>
				</div>

				{/* Device */}
				<div className="device">
					<span className="material-icons">light</span>

					<div className="device__info">
						<span className="device__name">Lâmpada Cozinha</span>
						<span className="device__status">Desligado</span>

						<ul className="device__statistics"></ul>
					</div>
				</div>

				{/* Device */}
				<div className="device active">
					<span className="material-icons">light</span>

					<div className="device__info">
						<span className="device__name">Lâmpada Quarto 1</span>
						<span className="device__status">Ligado</span>

						<ul className="device__statistics"></ul>
					</div>
				</div>

				{/* Device */}
				<div className="device">
					<span className="material-icons">light</span>

					<div className="device__info">
						<span className="device__name">Lâmpada Quarto 2</span>
						<span className="device__status">Desligado</span>

						<ul className="device__statistics"></ul>
					</div>
				</div>

				{/* Device */}
				<div className="device active">
					<span className="material-icons">videocam</span>

					<div className="device__info">
						<span className="device__name">Câmera 1</span>
						<span className="device__status">Disponível</span>

						<ul className="device__statistics"></ul>
					</div>
				</div>

				{/* Device */}
				<div className="device active">
					<span className="material-icons">videocam</span>

					<div className="device__info">
						<span className="device__name">Câmera 2</span>
						<span className="device__status">Disponível</span>

						<ul className="device__statistics"></ul>
					</div>
				</div>

				{/* Device */}
				<div className="device active">
					<span className="material-icons">videocam</span>

					<div className="device__info">
						<span className="device__name">Câmera 3</span>
						<span className="device__status">Disponível</span>

						<ul className="device__statistics"></ul>
					</div>
				</div>

				{/* Device */}
				<div className="device active">
					<span className="material-icons">videocam</span>

					<div className="device__info">
						<span className="device__name">Câmera 4</span>
						<span className="device__status">Disponível</span>

						<ul className="device__statistics"></ul>
					</div>
				</div>

				{/* Device */}
				<div className="device">
					<span className="material-icons">water_drop</span>

					<div className="device__info">
						<span className="device__name">Irrigador 1</span>
						<span className="device__status">Desligado</span>

						<ul className="device__statistics"></ul>
					</div>
				</div>

				{/* Device */}
				<div className="device">
					<span className="material-icons">water_drop</span>

					<div className="device__info">
						<span className="device__name">Irrigador 2</span>
						<span className="device__status">Desligado</span>

						<ul className="device__statistics"></ul>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
