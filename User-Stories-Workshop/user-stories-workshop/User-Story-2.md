## Title

Movie Detail Page

## Value proposition

As a Cinema fan

I want to see a detail page from every particular film

So that that I know the plot of every film.

## Description

![wireframe](./assets/scribble-movie-detail-page.png)

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
