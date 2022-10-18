select "f"."title",
   avg("replacementCost") as "averageReplacementCost"
  from "films" as "f"
  group by "f"."title";
