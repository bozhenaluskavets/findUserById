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
	// return {}

    const users = DB.users;
    const levels = DB.levels;
    const skills = DB.skills;

    // let getName = users.find(function(item) {
    //     if(item.id == 1) 
    //     return item
    // })

    for (let user of users) {
        console.log(user.name)
    }

    // let getLevel = levels.find(function(item) {
    //     if(item.id == 3) 
    //     return item
    // })

    for (let level of levels) {
        console.log(level.name)
    }

    // let getSkills = skills.find(function(item) {
    //     if(item.id == 1) 
    //     return item
    // })

    for (let skill of skills) {
        console.log(skill.name)
    }
    
    // console.log(`name: '${getName.name}', \nposition: '${getLevel.name}', \nskills: '${getSkills.name}'`)
}


findUserById()

// const oleg = findUserById('2')
// console.log(oleg)
/*
{
	name: 'Oleg',
	position: 'junior',
	skills: ['html/css', 'js'],
}
*/

// const andriy = findUserById('1')
// console.log(andriy)
/*
{
    name: 'Andriy Petrash',
	  position: 'senior',
	  skills: ['html/css', 'js', 'nodejs', 'react', 'TypeScript'],
}
*/

// const notFoundUser = findUserById('33')
// console.log(notFoundUser)
/*
"Not Found"
*/