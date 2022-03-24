select "title",
       "description",
       "rating",
       sum("payments"."amount") - "replacementCost" as "filmProfit"
  from "films"
  join "inventory" using ("filmId")
  join "rentals" using ("inventoryId")
  join "payments" using ("rentalId")
 group by "title",
          "description",
          "rating",
          "replacementCost"
 order by "filmProfit" desc
 limit 5
