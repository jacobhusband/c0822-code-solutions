select "f"."releaseYear",
       "g"."name"
from "filmGenre"
join "films" as "f" using ("filmId")
join "genres" as "g" using ("genreId")
where "f"."title" = 'Boogie Amelie';
