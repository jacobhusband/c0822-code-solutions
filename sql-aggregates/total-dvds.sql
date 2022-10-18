select "storeId",
max("inventoryId") as "totalDVDs"
from "inventory" as "i"
group by "i"."storeId";
