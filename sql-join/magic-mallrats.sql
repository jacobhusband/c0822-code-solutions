-- payments - rentals - inventory - films
select "c"."firstName",
       "c"."lastName"
from "payments" as "p"
join "customers" as "c" using ("customerId")
join "rentals" as "r" using ("rentalId")
join "inventory" as "i" using ("inventoryId")
join "films" as "f" using ("filmId")
where "f"."title" = 'Magic Mallrats';
