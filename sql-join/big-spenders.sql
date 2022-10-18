select "c"."firstName",
       "c"."lastName",
       "payments".*
  from "payments"
  join "customers" as "c" using ("customerId")
  order by "amount" desc
  limit 10
