select "a"."firstName" as "firstName",
       "a"."lastName" as "lastName",
       "g"."name" as "genre",
 count("f"."filmId") as "amount"
from "castMembers"
join "actors" as "a" using ("actorId")
join "films" as "f" using ("filmId")
join "filmGenre" as "fg" using ("filmId")
join "genres" as "g" using ("genreId")
where "a"."firstName" = 'Lisa' AND "a"."lastName" = 'Monroe'
group by "a"."firstName",
         "a"."lastName",
         "g"."name";
