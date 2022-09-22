import React from "react";
import foodFREQs from "../foodFREQs.jpg";
import gitThatCurrency from "../gitThatCurrency.jpg";
import JATE from "../JATE.jpg";
import javascriptTest from "../javascriptTest.jpeg";
import noteTaker from "../noteTaker.jpg";
import passwordGenerator from "../passwordGenerator.jpg";
//react popupbox
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {
	//foodFREQs
	const openPopupboxfoodFREQs = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={foodFREQs} alt="foodFREQs..." />
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cumque illo est expedita quos adipisci suscipit unde itaque qui perferendis.</p>
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/wjimh314/foodFREQS")}>https://github.com/wjimh314/foodFREQS</a>
      </>
    )
    PopupboxManager.open({ content });
    PopupboxManager.update({
      
    })
  }

  const popupboxConfigfoodFREQs = {
    titleBar: {
      enable: true,
      text: "food"
    },
    fadeIn: true,
    fadeInSpeed: 500
  }


	return (
		<div className="portfolio-wrapper">
			<div className="container">
				<h1 className="text-uppercase text-center py-5"> portfolio </h1>{" "}
				<div className="image-box-wrapper row justify-content-center">
					<div className="portfolio-image-box" onClick={openPopupboxfoodFREQs}>
						<img className="portfolio-image" src={foodFREQs} alt="foodFREQs" />
						<div className="overflow"> </div>
					</div>
					<div className="portfolio-image-box">
						<img
							className="portfolio-image"
							src={gitThatCurrency}
							alt="gitThatCurrency"
						/>
						<div className="overflow"> </div>
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
						<div className="overflow"> </div>
					</div>
					<div className="portfolio-image-box">
						<img className="portfolio-image" src={noteTaker} alt="noteTaker" />
						<div className="overflow"> </div>
					</div>
					<div className="portfolio-image-box">
						<img
							className="portfolio-image"
							src={passwordGenerator}
							alt="passwordGenerator"
						/>
						<div className="overflow"> </div>
					</div>{" "}
				</div>{" "}
			</div>{" "}
			<PopupboxContainer {...popupboxConfigfoodFREQs} />
		</div>
	);
};
export default Portfolio;
