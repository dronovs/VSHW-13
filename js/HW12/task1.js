'use strict'
function getUserData () {
    function askUserYearOfBirth () {
        let userYearOfBirth = +prompt('Please enter your year of birth.');
        if (isNaN(userYearOfBirth)) {
            while (isNaN(userYearOfBirth)) {
                userYearOfBirth = +prompt('Please enter your year of birth');
            }
        }

        return userYearOfBirth;
    }

    function askUserAge (func) {
        let usersAge = 0;
        let todayDate = new Date();
        if (func === 0) {
            usersAge = 'You did not enter your date';
        } else {
            usersAge = `Your age is ${todayDate.getFullYear() - func}`;
        }

        return usersAge;
    }

    function askUsersCity () {
        let usersCity = prompt('Please enter the name of your city.');
        if (usersCity === 'Kyiv' || usersCity === 'Moskow' || usersCity === 'Minsk') {
            usersCity = `You live in the capital ${usersCity}`;
        } else if (usersCity === null){
            usersCity = 'You did not enter your city ):'
        } else {
            usersCity = `You live in city ${usersCity}`;
        }

        return usersCity;
    }

    function askUserSports () {
        let userSport = prompt('Enter your favourite kind of sport');
        if (userSport === 'football') {
            userSport = 'Cool, you wanna be like a Messi';
        } else if (userSport === 'hockey') {
            userSport = 'Cool, you wanna be like an Ovechkin';
        } else if (userSport === 'snooker') {
            userSport = 'Cool, you wanna be like a Ronnie O\'Sallivan';
        } else if (userSport === null) {
            userSport = 'You did not enter your favourite sport ):'
        } else {
            userSport = 'Nice';
        }

        return userSport;
    }

    alert(`
        ${askUserAge(askUserYearOfBirth())};
        ${askUsersCity()};
        ${askUserSports()};
    `);
}

getUserData();
