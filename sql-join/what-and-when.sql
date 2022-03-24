select "film"."releaseYear" as "film",
       "genres"."name" as "genre"
from   "films" as "film"
join   "filmGenre" using ("filmId")
join   "genres" using ("genreId")
where  "title" = 'Boogie Amelie'
