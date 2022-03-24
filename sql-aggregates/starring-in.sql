select "genres"."name" as "genres",
       count(*) as "totalFilms"
  from "actors"
  join "castMembers" using ("actorId")
  join "filmGenre" using ("filmId")
  join "genres" using ("genreId")
 where "firstName" = 'Lisa'
   and "lastName" = 'Monroe'
  group by "genres"."name"
