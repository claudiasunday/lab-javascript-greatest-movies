const movies = require("./data.js");
// console.log(movies);

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
// function getAllDirectors(moviesArray) {

//   //como los directores se repiten hay que limpiar la lista= funcion filter = (arguments) flecha--> sacame el indexof del director, --> cuando consigues en Spilberg me lo saques siempre y cuando no se repita en su index. si se repite me lo sacas de la linia y me lo limpias.
//   const rawList = moviesArray.map((movie) => movie.director);

//   const cleanList = rawList.filter((director, index) => {
//     return rawList.indexOf(director) === index;
//   });
//   return cleanList;

// console.log(
//   `1. A list of directors of this data is ${getAllDirectors(movies)}`
// );

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
// function howManyMovies(moviesArray) { }
// const howManyMovies2 = () => {}

// Arrow function
// const howManyMovies2 = (moviesArray) => {
//   // 1st nos creamos una vairable que filtremos en el moviesArray para conseguir un valor de "steven spielrberg"
//   const steven = moviesArray.filter(
//     (movieItem) => movieItem.director === "Steven Spielberg"
//   );
//   // 2dn vamos a generar una variable nueva para filtrar los generos de peliculas que corresponden al genero de drama que viene por defecto de la variable que tenemos arriba con el nombre de steven.
//   const dramaMovies = steven.filter((spielberg) =>
//     spielberg.genre.includes("Drama")
//   );
//   return dramaMovies;
// };

// Regular Function
// function howManyMovies() {
//   const steven = movies.filter(
//     (movie) => movie.director === "Quentin Tarantino"
//   );
//   const dramaMovies = steven.filter((movie) => movie.genre.includes("Drama"));
//   return dramaMovies;
// }
// // console.log("2.List of Drama Movies:");
// console.log(howManyMovies(movies));

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
// function scoresAverage(moviesArray) {
//   let = totalSum = 0;
//   const scores = moviesArray.map((movie) => movie.score);
//   for (let i = 0; i < scores.length; i++) {
//     totalSum = scores[i] + totalSum;
//   }
//   const ListaMovieScore = totalSum / moviesArray.length;
//   return ListaMovieScore.toFixed(2);
//}
// console.log("3. Average scores for all movies:");
// console.log(scoresAverage(movies));

//Sumar numeros y dividirlos en la constante movies . por cada vuelta que de apunta el score. Como total sum son 0, y cuando pasa el loop hay un valor numerico se guarda el scoreen el totalsum. ------->

// function scoresAverageusingReduce(moviesArray) {
//   const scores = movies.Array.reduce((total, movie) => {
//     total = movie.score;
//     return total;
//   }, 0);
//   const accuratedMovieScore = scores / moviesArray.length;
//   return accuratedMovieScore.toFixed(2);
// }

// console.log("3. Average scores for all movies:");
// console.log(scoresAverageusingReduce(movies));

//NO FUNCIONA NO SE PQ

// Iteration 4: Drama movies - Get the average of Drama Movies
// function dramaMoviesScore(moviesArray) {
//   const drama = moviesArray.filter((movie) => {
//     return movie.genre.includes("Drama");
//   });

//   const scores = drama.reduce((total, movie) => {
//     return total + movie.score;
//   }, 0);

//   const totalDramaScore = scores / drama.length;
//   return totalDramaScore.toFixed(2);
// }

// console.log(dramaMoviesScore(movies));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
// function orderByYear(moviesArray) {
//   const orderedList = moviesArray.sort((a, b) => a.year - b.year);
//   return orderedList;
// }
// console.log(orderByYear(movies));

// QUE PASA SI DOS PELICULAS TIENEN EL MISMO ANYO????? IDK

//   function orderByYear(moviesArray) {}
//let movieList = moviesArray;
//   function compare(movie1, movie2) {
//     return movie1.year - movie2.year;
//   }
//   const temporal1 = movieList.sort(compare);
//   console.log(temporal1[2]);
// }
// orderByYear(movies);

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
