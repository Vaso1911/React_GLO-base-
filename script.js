const employers = ['АртеМ', 'максим', 'Владимир', 'сергей', 'НикиТа', 'евГений', ' Дарья', ' ', 'виктория ', 'ЕкаТерина', '', ' Андрей ', 'КИРИЛЛ'];
const nameCourse = 'Базовый React';
const command = employers.map(el => {return el.trim() })
.filter(el => el !== '')
.map(el => { return el[0].toUpperCase() + el.slice(1).toLowerCase() })

const data = {
	cash: [3, 8, 3],
	react: ['JSX', 'components', 'props', 'state', 'hooks'],
	add: ['styled-components', 'firebase']
};

const {cash, react, add} = data

const calcCash = (own, cash) => {
	own = own || 0;
	const total =  cash.reduce((acc, val) => acc + val, 0) + +own;
	return total;
	
}

const lesson = calcCash(null, cash);

const makeBusiness = (director, teacher, allModule, gang, course) => {
	teacher = teacher || 'Максим'
	const sumTech = react.concat(add, 'и другие');
		console.log(`Стартуем новый курс: "${course}". Владелец: ${director}, преподаватель: ${teacher}. Всего уроков: ${allModule}.
Команда Академии: ${gang}`
);
	console.log(`Первое что изучим будет ${react[0]}. Он очень похож на HTML!`);
	console.log('Технологии которые мы изучим: ');
	console.log.apply(null, sumTech);
}

makeBusiness.apply(null, ['Артем', null, lesson, command, nameCourse]);