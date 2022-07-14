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
    const notFoundUser = 'Not Found';
    const user = DB.users.find(item => {
        if (item.id === id) {
            return true;
        // } else if () {
            
        }
    });

    let level = DB.levels.filter(item => {
        if (item.id === user.levelId) {
            return true;
        }
    })

    level = level.map(item => {
        return item.name;
    })

    let skills = DB.skills.filter(item => {
        if (user.skills.includes(item.id)) {
            return true;
        }
    })

    skills = skills.map(item => {
        return item.name;
    })

    const name = `name: ${user.name}, \nposition: ${level}, \nskills: ${skills}`;
    console.log(name)
}

findUserById('2');

/*
"Not Found"
*/