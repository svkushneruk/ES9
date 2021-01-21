'use strict';

const employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

const employersNames = employers.filter(item => {
    if (item.length > 0 && item.length != '') {
        return item;
	}
}).map(item => item.toLocaleLowerCase().trim());

const sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
};

function calcCash(cash) {
    return [...cash].reduce((sum, currentItem) => sum + currentItem);
}

function makeBusiness({owner, director = 'Victor', cash, emp}) {
    console.log(`We have a business. Owner: ${owner}, director: ${director}. Our budget: ${cash}. And our employers: ${emp}`);
    console.log('And we have a sponsors: ');
    console.log(...sponsors.eu, ...sponsors.rus, 'unexpected sponsor');
    console.log(`Note. Be careful with ${sponsors.eu[0]}. It's a huge risk.`);
}

makeBusiness({
    owner: 'Sam',
    cash: calcCash(sponsors.cash),
    emp: employersNames
});
