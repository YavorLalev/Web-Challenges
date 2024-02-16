## Title

A list of current movies

## Value proposition

As a Cinemafan

I want to see a list of all new movies

So that that I can choose a proper one for me

## Description

![wireframe](./assets/scribble-movie-list.png)

## Acceptance criteria

- The Title of the App is displayed
  at the top of the screen

- All of the films are displayed as Moviecards

- Each Moviecard includes an Image, a Title and a Rating

- If no Moviecards are displayed,
  then the user sees an info message

-

## Tasks

- create a new Feature branch "feature/movie-list"

- create a Title component

- render the Title component in the index.js page(Home)

- Fetch all films with useSWR hook in index.js page

- create early return statements isLoading and error

- create a MovieCard component with props image,
  title and rating

- create a MovieListe component with props pieces and
  use "map" to render the MovieCard component
  for each movie

- create a conditional statement to render the error
  message
