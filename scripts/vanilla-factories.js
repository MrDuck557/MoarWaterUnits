Events.on(ContentInitEvent, () => {
  const seahorse = Vars.content.getByName(ContentType.unit, "moar-water-units-seahorse");
  const current = Vars.content.getByName(ContentType.unit, "moar-water-units-current");
  Blocks.navalFactory.plans.addAll(
    new UnitFactory.UnitPlan(seahorse, 2100, ItemStack.with(Items.silicon, 30, Items.metaglass, 20)),
    new UnitFactory.UnitPlan(current, 3600, ItemStack.with(Items.silicon, 25, Items.metaglass, 25, Items.lead, 20))
  );
  Blocks.navalFactory.init();
  const mantaRay = Vars.content.getByName(ContentType.unit, "moar-water-units-manta-ray");
  const riptide = Vars.content.getByName(ContentType.unit, "moar-water-units-riptide");
  const seahorseUpgrade = Seq.with(seahorse, mantaRay).toArray(UnitType);
  const currentUpgrade = Seq.with(current, riptide).toArray(UnitType);
  Blocks.additiveReconstructor.upgrades.addAll(seahorseUpgrade, currentUpgrade);
  const orca = Vars.content.getByName(ContentType.unit, "moar-water-units-orca");
  const torrent = Vars.content.getByName(ContentType.unit, "moar-water-units-torrent");
  const mantaUpgrade = Seq.with(mantaRay, orca).toArray(UnitType);
  const riptideUpgrade = Seq.with(riptide, torrent).toArray(UnitType);
  Blocks.multiplicativeReconstructor.upgrades.addAll(mantaUpgrade, riptideUpgrade)
});