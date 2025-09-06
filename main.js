/*
* DMG = base_dmg_attacker * crit_multiplier_attacker * dmg_boost_multiplier_attacker * weaken_multiplier_attacker * def_multiplier_target * res_multiplier_target * vulnerability_multiplier_target * dmg_mitigation_multiplier_target * broken_multiplier_target
*
* base_dmg_attacker = ability_multiplier * stat + extra_dmg
*
* crit_multiplier_attacker = 1 + crit_dmg
* or
* crit_multiplier_attacker = 1
*
* dmg_boost_multiplier_attacker = 1 + elemental_dmg_boost + all_dmg_boost + dot_boost
*
* weaken_multiplier_attacker = 1 - weaken
*
* def_multiplier_target = 1 - (def / def + 200 + 10 * level_attacker)
*
* For enemies:
* def = 200 + 10 * level
*
* Therefore:
* def_multiplier_target = (level_attacker + 20 / (level_enemy + 20) * max(0.1 + %def_bonus - %def_reduction - %def_ignore) + level_attacker + 20)
*
* res_multiplier_target = 1 - (res_target - res_pen_attacker)
*
* vulnerability_multiplier_target = 1 + elemental_vulnerability + all_type_vulnerability + dot_vulnerability
*
* dmg_mitigation_multiplier_target = (1 - dmg_mitigation_1) * (1 - dmg_mitigation_2) * (1 - dmg_mitigation_3) * ...
*
* (if enemy has toughness)
* broken_multiplier_target = 0.9
*
* (if enemy toughness is broken)
* broken_multiplier_target = 1.0
* */