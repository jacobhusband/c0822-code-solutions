select "co"."name" as "country",
  count("c"."countryId") as "cities"
from "cities" as "c"
join "countries" as "co" using ("countryId")
group by "country";
