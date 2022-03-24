select "countries"."name" as "countries",
       count(*) as "cities"
  from "countries"
  join "cities" using ("countryId")
 group by "countries"."name";
