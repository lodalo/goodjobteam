document.addEventListener('DOMContentLoaded', () => {
	const goodSynonyms = [
		'Good',
		'Excellent',
		'Exceptional',
		'Favorable',
		'Extraordinary',
		'Great',
		'Marvelous',
		'Positive',
		'Satisfying',
		'Superb',
		'Mind-blowing'
	];
	const workSynonyms = [
		'job',
		'work',
		'operation',
		'effort',
		'endeavor',
		'performance',
		'task',
	];
	const teamSynonyms = [
		'team',
		'comrades',
		'squad',
		'crew',
		'gang',
		'clan',
		'assemblage',
		'possy',
		'troupe',
	];

	function choose(wordList) {
		return wordList[Math.floor(Math.random() * wordList.length)]
	}

	let motivationalSentence = `${choose(goodSynonyms)} ${choose(workSynonyms)}, ${choose(teamSynonyms)}!`;
	document.getElementById('motivational-sentence').textContent = motivationalSentence;
	document.title = motivationalSentence;
});
