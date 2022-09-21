import React from "react";
import foodFREQs from "../foodFREQs.jpg";
import gitThatCurrency from "../gitThatCurrency.jpg";
import JATE from "../JATE.jpg";
import javascriptTest from "../javascriptTest.jpeg";
import noteTaker from "../noteTaker.jpg";
import passwordGenerator from "../passwordGenerator.jpg";

export const Portfolio = () => {
	return (
		<div className="portfolio-wrapper">
			<div className="container">
				<h1 className="text-uppercase text-center py-5"> portfolio </h1>
				<div className="image-box-wrapper row justify-content-center">
					<div className="portfolio-image-box">
						<img className="portfolio-image" src={foodFREQs} alt="foodFREQs" />
					</div>

					<div className="portfolio-image-box">
						<img
							className="portfolio-image"
							src={gitThatCurrency}
							alt="gitThatCurrency"
						/>
					</div>

					<div className="portfolio-image-box">
						<img className="portfolio-image" src={JATE} alt="JATE" />
					</div>

					<div className="portfolio-image-box">
						<img
							className="portfolio-image"
							src={javascriptTest}
							alt="javascriptTest"
						/>
					</div>

					<div className="portfolio-image-box">
						<img className="portfolio-image" src={noteTaker} alt="noteTaker" />
					</div>

					<div className="portfolio-image-box">
						<img
							className="portfolio-image"
							src={passwordGenerator}
							alt="passwordGenerator"
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Portfolio
