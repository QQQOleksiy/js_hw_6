// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
//
//1 варіант
// let str_1 = 'hello world'
// let str_2 = 'lorem ipsum'
// let str_3 = 'javascript is cool'
//
// console.log(str_1.length);
// console.log(str_2.length);
// console.log(str_3.length);
//
// 2 варіант
// let arr_str = ['hello world', 'lorem ipsum', 'javascript is cool']
// for (let string of arr_str) {
//     console.log(string.length)
// }

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
//1 варіант
// let str_1 = 'hello world'
// let str_2 = 'lorem ipsum'
// let str_3 = 'javascript is cool'
//
// console.log(str_1.toUpperCase());
// console.log(str_2.toUpperCase());
// console.log(str_3.toUpperCase());
//
//2 варіант
// let arr_str = ['hello world', 'lorem ipsum', 'javascript is cool']
// for (let string of arr_str) {
//     console.log(string.toUpperCase());
// }

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let arr_str = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL']
// for (let string of arr_str) {
//     console.log(string.toLowerCase());
// }

// // - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   '
// console.log(str.trim());

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
// let str = 'Ревуть воли як ясла повні'
// function stringToarray(str){
//     return str.split(' ')
// }
// let arr = stringToarray(str)
// console.log(arr);

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// let arr_nums = [10,8,-7,55,987,-1011,0,1050,0]
// let arr_str_nums = arr_nums.map(value => value.toString())
// console.log(arr_str_nums)

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
// let nums = [11,21,3]
// function sortNums(nums, ascending_or_descending){
//     if (ascending_or_descending === 'ascending'){
//         let nums_ = nums.sort((a, b) => {
//             return a - b
//         })
//         console.log(nums_)
//     }else if (ascending_or_descending === 'descending'){
//         let nums_ = nums.sort((a, b) => {
//             return a - b
//         })
//         nums_.reverse()
//         console.log(nums_)
//     }
// }
// sortNums(nums,'ascending')
// sortNums(nums,'descending')


// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ]
// let sort_list = coursesAndDurationArray.sort((a, b) => {
//     return a.monthDuration - b.monthDuration
// })
// console.log(sort_list);
//
// let filter_list = coursesAndDurationArray.filter(value => value.monthDuration > 5)
// console.log(filter_list);

// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
//
// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
let deck = [
    {cardSuit: 'Spade', value: 6, color: 'Black'},
    {cardSuit: 'Clubs', value: 6, color: 'Black'},
    {cardSuit: 'Hearts', value: 6, color: 'Red'},
    {cardSuit: 'Diamonds', value: 6, color: 'Red'},
    {cardSuit: 'Spade', value: 7, color: 'Black'},
    {cardSuit: 'Clubs', value: 7, color: 'Black'},
    {cardSuit: 'Hearts', value: 7, color: 'Red'},
    {cardSuit: 'Diamonds', value: 7, color: 'Red'},
    {cardSuit: 'Spade', value: 8, color: 'Black'},
    {cardSuit: 'Clubs', value: 8, color: 'Black'},
    {cardSuit: 'Hearts', value: 8, color: 'Red'},
    {cardSuit: 'Diamonds', value: 8, color: 'Red'},
    {cardSuit: 'Spade', value: 9, color: 'Black'},
    {cardSuit: 'Clubs', value: 9, color: 'Black'},
    {cardSuit: 'Hearts', value: 9, color: 'Red'},
    {cardSuit: 'Diamonds', value: 9, color: 'Red'},
    {cardSuit: 'Spade', value: 10, color: 'Black'},
    {cardSuit: 'Clubs', value: 10, color: 'Black'},
    {cardSuit: 'Hearts', value: 10, color: 'Red'},
    {cardSuit: 'Diamonds', value: 10, color: 'Red'},
    {cardSuit: 'Spade', value: 'Jack', color: 'Black'},
    {cardSuit: 'Clubs', value: 'Jack', color: 'Black'},
    {cardSuit: 'Hearts', value: 'Jack', color: 'Red'},
    {cardSuit: 'Diamonds', value: 'Jack', color: 'Red'},
    {cardSuit: 'Spade', value: 'Queen', color: 'Black'},
    {cardSuit: 'Clubs', value: 'Queen', color: 'Black'},
    {cardSuit: 'Hearts', value: 'Queen', color: 'Red'},
    {cardSuit: 'Diamonds', value: 'Queen', color: 'Red'},
    {cardSuit: 'Spade', value: 'King', color: 'Black'},
    {cardSuit: 'Clubs', value: 'King', color: 'Black'},
    {cardSuit: 'Hearts', value: 'King', color: 'Red'},
    {cardSuit: 'Diamonds', value: 'King', color: 'Red'},
    {cardSuit: 'Spade', value: 'Ace', color: 'Black'},
    {cardSuit: 'Clubs', value: 'Ace', color: 'Black'},
    {cardSuit: 'Hearts', value: 'Ace', color: 'Red'},
    {cardSuit: 'Diamonds', value: 'Ace', color: 'Red'}
];
// let spades_ace = deck.filter(value => value.value === 'Ace' && value.cardSuit === 'Spade')
// console.log(spades_ace);
//
// let deck_six_list = deck.filter(value => value.value === 6)
// console.log(deck_six_list);
//
// let red_card = deck.filter(value => value.color === 'Red')
// console.log(red_card);
//
// let all_diamonds = deck.filter(value => value.cardSuit === 'Diamonds')
// console.log(all_diamonds);
//
// let clubs_9_all = deck.filter(value => value.cardSuit === 'Clubs' && value.value >= 9 || value.cardSuit === 'Clubs' && value.value.length >= 3)
// console.log(clubs_9_all);

// let arr_4 = deck.reduce((arr, card) => {
//     if (card.cardSuit === 'Spade'){
//         arr.spades.push(card)
//     }else if (card.cardSuit === 'Diamonds'){
//         arr.diamonds.push(card)
//     }else if (card.cardSuit === 'Hearts'){
//         arr.hearts.push(card)
//     }else if (card.cardSuit === 'Clubs'){
//         arr.clubs.push(card)
//     }
//     return arr
// }, {spades: [], diamonds: [], hearts: [], clubs: []})
// console.log(arr_4);