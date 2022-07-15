const DB = {
	levels: [
		{ id: '1', name: 'junior' },
		{ id: '2', name: 'middle' },
		{ id: '3', name: 'senior' },
	],
	skills: [
		{ id: '1', name: 'html/css' },
		{ id: '2', name: 'js' },
		{ id: '3', name: 'nodejs' },
		{ id: '4', name: 'react' },
		{ id: '5', name: 'TypeScript' },
	],
	users: [
		{
			id: '1',
			levelId: '3',
			name: 'Andriy Petrash',
			skills: ['1', '2', '3', '4', '5'],
		},

		{
			id: '2',
			levelId: '1',
			name: 'Oleg',
			skills: ['1', '2'],
		},
	],
}

const findUserById = (id) => {
    const user = DB.users.find(item => {
        if (item.id === id) {
            return true;
        } 
    });

    if (!user) {
        return 'Not Found'
    }

    let level = DB.levels.find(item => {
        if (item.id === user.levelId) {
            return true;
        }
    })

    let skills = DB.skills.filter(item => {
        if (user.skills.includes(item.id)) {
            return true;
        }
    })

    skills = skills.map(item => {
        return item.name;
    })

    const obj = {name: user.name, skills: skills, position: level.name}
    return obj;
}

const andriy = findUserById('1');
console.log(andriy);

const oleg = findUserById('2');
console.log(oleg);