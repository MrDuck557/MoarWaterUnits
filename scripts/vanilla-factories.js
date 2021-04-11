Events.on(ContentInitEvent, () => {
  const seahorse = Vars.content.getByName(ContentType.unit, "moar-water-units-seahorse");
  const current = Vars.content.getByName(ContentType.unit, "moar-water-units-current");
  Blocks.navalFactory.plans.addAll(
    new UnitFactory.UnitPlan(seahorse, 2100, ItemStack.with(Items.silicon, 30, Items.metaglass, 20)),
    new UnitFactory.UnitPlan(current, 3600, ItemStack.with(Items.silicon, 25, Items.metaglass, 25, Items.lead, 20))
  );
  const mantaRay = Vars.content.getByName(ContentType.unit, "moar-water-units-manta-ray");
  const riptide = Vars.content.getByName(ContentType.unit, "moar-water-units-riptide");
  Blocks.additiveReconstructor.upgrades.addUpgrade(seahorse, mantaRay);
  Blocks.additiveReconstructor.upgrades.addUpgrade(current, riptide);
});