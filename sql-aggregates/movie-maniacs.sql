select "c"."firstName" as "firstName",
       "c"."lastName" as "lastName",
   sum("p"."amount") as "amountSpent"
from "payments" as "p"
join "customers" as "c" using ("customerId")
group by "c"."firstName",
         "c"."lastName",
         "c"."customerId"
order by sum("p"."amount") desc;
