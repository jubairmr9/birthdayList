import Jhanvi from './pictures/Jhanvi.jpg';
import Fahima from './pictures/Fahima.jpg';
import Mae from './pictures/Mae.jpg';
import Justice from './pictures/Justice.jpg';
import Ahnaf from './pictures/Ahnaf.jpg';
import Clara from './pictures/Clara.jpg';
import uuid from 'uuid';

let birthdays = [
	{
		id: uuid(),
		name: 'Jhanvi Sharma',
        age: 19,
        birthday: 'January 5th, 2001',
		image: Jhanvi
	},
	{
		id: uuid(),
		name: 'Fahima Guemri',
		age: 24,
        birthday: 'June 2nd, 1996',
		image: Fahima
	},
	{
		id: uuid(),
		name: 'Mae Irene Goodrich',
		age: 21,
        birthday: 'May 21st, 1999',
		image: Mae
	},
	{
		id: uuid(),
		name: 'Justice Jensvold',
		age: 27,
        birthday: 'July 31st, 1993',
		image: Justice
	},
	{
		id: uuid(),
		name: 'Khondoker Ahnaf Yasin',
		age: 23,
        birthday: 'August 24th, 1997',
		image: Ahnaf
    },
    {
		id: uuid(),
		name: 'Clara Martinez Zuviria',
		age: 20,
        birthday: 'May 13th, 2000',
		image: Clara
	}
]

export default birthdays;