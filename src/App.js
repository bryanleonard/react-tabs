import { useState } from "react";
import "./styles.scss";

const tabContent = [
	[
		'One More Episode – Because Netflix won’t watch itself.',
		'Snack Attack – Time for a fridge check (for the 10th time).',
		'Productivity Prep – Organizing your to-do list instead of doing it.',
		'Social Spiral"– A quick scroll that turns into a deep dive.',
		'Power Nap – Five minutes… turns into fifty.'
	],
	[
		'Duck Quacks Don’t Echo – Scientists think it’s a myth, but do we really know?',
		'Bananas Are Berries – And strawberries… are not. Mind blown.',
		'Space Smells Like Burnt Steak – Astronauts confirm it’s a BBQ-scented void.',
		'Shakespeare Invented ‘Swagger’ – And about 1,700 other words.',
		'Cows Have Best Friends – And they get stressed when separated.'
	],
	[
		'Frozen Grapes = Instant Ice Cubes – No more watered-down drinks!',
		'Use a Paperclip as a Bookmark – Because folding pages is an actual crime.',
		'Reheat Pizza with a Cup of Water – Say goodbye to sad, rubbery slices.',
		'Microwave Peanut Butter for Easy Spreading – Smooth moves only.',
		'Make Your Bed Right Away – Because future you will high-five past you.'
	],
];

export default function App() {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<>
			<header>
				<img src="logo copy.svg" alt="React logo" />
				<div>
					<h1>Tabs using React.js</h1>
					<p>
						Click. Switch. Marvel. Experience the high-stakes thrill of toggling between content!
					</p>
				</div>
			</header>

			<menu>
				<ul id="tabs" className={`tabs`}>
					<li>
						<button className={activeTab === 0 ? 'active' : ''} onClick={() => setActiveTab(0)}>
							Pro-Crastinations
						</button>
					</li>
					<li>
						<button className={activeTab === 1 ? 'active' : ''} onClick={() => setActiveTab(1)}>	
							Fun Facts
						</button>
					</li>
					<li>
						<button className={activeTab === 2 ? 'active' : ''} onClick={() => setActiveTab(2)}>
							Life Hacks
						</button>
					</li>
				</ul>
			</menu>
			<div id="tab-content" className={`tab-content`}>
				<ul>
					{tabContent[activeTab].map((item) => (
						<li key={item}>{item}</li>
					))}
				</ul>
       		</div>
		</>
	);
}
