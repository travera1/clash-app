 let cards = [
    {
        name: "archers",
        type: "common",
        description: "A pair of lightly armored ranged attackers. They'll help you take down ground and air units, but you're on your own with hair coloring advice.",
        image: "./images/archers.png",
        elixirCost: 3,
        
    },
    {
        name: "arrows",
        type: "common",
        description: "Arrows pepper a large area, damaging all enemies hit. Reduced damage to Crown Towers.",
        image: "./images/arrows.png",
        elixirCost: 3,
    },
    {
        name: "baby dragon",
        type: "epic",
        description: "Burps fireballs from the sky that deal area damage. Baby dragons hatch cute, hungry and ready for a barbeque.",
        image: "./images/baby-dragon.png",
        elixirCost: 4,
    },
    {
        name: "balloon",
        type: "epic",
        description: "As pretty as they are, you won't want a parade of THESE balloons showing up on the horizon. Drops powerful bombs and when shot down, crashes dealing area damage.",
        image: "./images/balloon.png",
        elixirCost: 5,
    },
    {
        name: "bandit",
        type: "legendary",
        description: "The Bandit dashes to her target and delivers an extra big hit! While dashing, she can't be touched. The mask keeps her identity safe, and gives her bonus cool points!",
        image: "./images/bandit.png",
        elixirCost: 3,
    },
    {
        name: "barbarian barrel",
        type: "epic",
        description: "It rolls over and damages anything in its path, then breaks open and out pops a Barbarian! How did he get inside?!",
        image: "./images/barbarian-barrel.png",
        elixirCost: 2,
    },
    {
        name: "barbarian hut",
        type: "rare",
        description: "Building that periodically spawns Barbarians to fight the enemy. Time to make the Barbarians!",
        image: "./images/barbarian-hut.png",
        elixirCost: 5,
    },
    {
        name: "barbarians",
        type: "common",
        description: "A horde of melee attackers with mean mustaches and even meaner tempers.",
        image: "./images/barbarians.png",
        elixirCost: 5,
        
    },
    {
        name: "bats",
        type: "common",
        description: "Spawns a handful of tiny flying creatures. Think of them as sweet, purple... balls of DESTRUCTION",
        image: "./images/bats.png",
        elixirCost: 2,
    },
    {
        name: "battle healer",
        type: "rare",
        description: "With each attack, she unleashes a powerful healing aura that restores Hitpoints to herself and friendly Troops. When she isn't attacking, she passively heals herself!",
        image: "./images/battle-healer.png",
        elixirCost: 4,
    },
    {
        name: "battle ram",
        type: "rare",
        description: "Two Barbarians holding a big log charge at the nearest building, dealing significant damage if they connect; then they go to town with their swords!",
        image: "./images/battle-ram.png",
        elixirCost: 4,
    },
    {
        name: "bomb tower",
        type: "rare",
        description: "Defensive building that houses a Bomber. Deals area damage to anything dumb enough to stand near it.",
        image: "./images/bomb-tower.png",
        elixirCost: 4,
    },
    {
        name: "bomber",
        type: "common",
        description: "Small, lightly protected skeleton who throws bombs. Deals area damage that can wipe out a swarm of enemies.",
        image: "./images/bomber.png",
        elixirCost: 2,
    },
    {
        name: "bowler",
        type: "epic",
        description: "This big blue dude digs the simple things in life - Dark Elixir drinks and throwing rocks. His massive boulders roll through their target, hitting everything behind for a strike!",
        image: "./images/bowler.png",
        elixirCost: 5,
    },
    {
        name: "cannon cart",
        type: "epic",
        description: "A Cannon on wheels?! Bet they won't see that coming! Once you break its shield, it becomes a Cannon not on wheels.",
        image: "./images/cannon-cart.png",
        elixirCost: 5,
    },
    {
        name: "cannon",
        type: "common",
        description: "Defensive building. Shoots cannonballs with deadly effect, but cannot target flying troops.",
        image: "./images/cannon.png",
        elixirCost: 3,
    },
    {
        name: "clone",
        type: "epic",
        description: "Duplicates all friendly troops in the target area. Cloned troops are fragile, but pack the same punch as the original! Doesn't affect buildings.",
        image: "./images/clone.png",
        elixirCost: 3,
    },
    {
        name: "dark prince",
        type: "epic",
        description: "The Dark Prince deals area damage and lets his spiked club do the talking for him - because when he does talk, it sounds like he has a bucket on his head.",
        image: "./images/dark-prince.png",
        elixirCost: 4,
    },
    {
        name: "dart goblin",
        type: "rare",
        description: "Runs fast, shoots far and chews gum. How does he blow darts with a mouthful of Double Trouble Gum? Years of didgeridoo lessons.",
        image: "./images/dart-goblin.png",
        elixirCost: 3,
    },
    {
        name: "earthquake",
        type: "rare",
        description: "Deals Damage per second to Troops and Crown Towers. Deals huge Building Damage! Does not affect flying units (it is an EARTHquake, after all).",
        image: "./images/earthquake.png",
        elixirCost: 3,
    },
    {
        name: "electro dragon",
        type: "epic",
        description: "Spits out bolts of electricity hitting up to three targets. Suffers from middle child syndrome to boot.",
        image: "./images/electro-dragon.png",
        description: "",
        elixirCost: 5,
    },
    {
        name: "electro giant",
        type: "epic",
        description: "He channels electricity through his Zap Pack, a unique device that stuns and damages any Troop attacking him within its range. Don't tell him that his finger guns aren't real! He'll zap you.",
        image: "./images/electro-giant.png",
        elixirCost: 8,
    },
    {
        name: "electro spirit",
        type: "common",
        description: "Jumps on enemies, dealing Area Damage and stunning up to 9 enemy Troops. Locked in an eternal battle with Knight for the best mustache.",
        image: "./images/electro-spirit.png",
        elixirCost: 1,
    },
    {
        name: "electro wizard",
        type: "legendary",
        description: "He lands with a POW!, stuns nearby enemies and shoots lightning with both hands! What a show off.",
        image: "./images/electro-wizard.png",
        elixirCost: 4,
    },
    {
        name: "elite barbarians",
        type: "common",
        description: "Spawns a pair of leveled up Barbarians. They're like regular Barbarians, only harder, better, faster and stronger.",
        image: "./images/elite-barbarians.png",
        elixirCost: 6,
    },
    {
        name: "elixir collector",
        type: "rare",
        description: "You gotta spend Elixir to make Elixir! This building makes 8 Elixir over its Lifetime. Does not appear in your starting hand.",
        image: "./images/elixir-collector.png",
        elixirCost: 6,
    },
    {
        name: "elixir golem",
        type: "rare",
        description: "Splits into two Elixir Golemites when destroyed, which split into two sentient Blobs when defeated. A Blob gives your opponent 1 Elixir when destroyed!",
        image: "./images/elixir-golem.png",
        elixirCost: 3,
    },
    {
        name: "executioner",
        type: "epic",
        description: "He throws his axe like a boomerang, striking all enemies on the way out AND back. It's a miracle he doesn't lose an arm.",
        image: "./images/executioner.png",
        elixirCost: 5,
    },
    {
        name: "fire spirit",
        type: "common",
        description: "The Fire Spirit is on a kamikaze mission to give you a warm hug. It'd be adorable if it wasn't on fire.",
        image: "./images/fire-spirit.png",
        elixirCost: 1,
    },
    {
        name: "fireball",
        type: "rare",
        description: "Annnnnd... Fireball. Incinerates a small area, dealing high damage. Reduced damage to Crown Towers.",
        image: "./images/fireball.png",
        elixirCost: 4,
    },
    {
        name: "firecracker",
        type: "common",
        description: "Shoots a firework that explodes upon impact, damaging the target and showering anything directly behind it with sparks. This is what happens when Archers get bored!",
        image: "./images/firecracker.png",
        elixirCost: 3,
    },
    {
        name: "fisherman",
        type: "legendary",
        description: "His Ranged Attack can pull enemies towards him, and pull himself to enemy buildings. He's also mastered the ancient art of 'Fish Slapping'.",
        image: "./images/fisherman.png",
        elixirCost: 3,
    },
    {
        name: "flying machine",
        type: "rare",
        description: "The Master Builder has sent his first contraption to the Arena! It's a fast and fun flying machine, but fragile!",
        image: "./images/flying-machine.png",
        elixirCost: 4,
    },
    {
        name: "freeze",
        type: "epic",
        description: "Freezes and damages enemy troops and buildings, making them unable to move or attack. Everybody chill. Reduced damage to Crown Towers.",
        image: "./images/freeze.png",
        elixirCost: 4,
    },
    {
        name: "furnace",
        type: "rare",
        description: "The Furnace spawns one Fire Spirit at a time. It also makes great brick-oven pancakes.",
        image: "./images/furnace.png",
        elixirCost: 4,
    },
    {
        name: "giant",
        type: "rare",
        description: "Slow but durable, only attacks buildings. A real one-man wrecking crew!",
        image: "./images/giant.png",
        elixirCost: 5,
    },
    {
        name: "giant skeleton",
        type: "epic",
        description: "The bigger the skeleton, the bigger the bomb. Carries a bomb that blows up when the Giant Skeleton dies.",
        image: "./images/giant-skeleton.png",
        elixirCost: 6,
    },
    {
        name: "giant snowball",
        type: "common",
        description: "It's HUGE! Once it began rolling down Frozen Peak, there was no stopping it. Enemies hit are knocked back and slowed down. Reduced damage to Crown Towers.",
        image: "./images/giant-snowball.png",
        elixirCost: 2,
    },
    {
        name: "goblin barrel",
        type: "epic",
        description: "Spawns three Goblins anywhere in the Arena. It's going to be a thrilling ride, boys!",
        image: "./images/goblin-barrel.png",
        elixirCost: 3,
    },
    {
        name: "goblin cage",
        type: "rare",
        description: "When the Goblin Cage is destroyed, a Goblin Brawler is unleashed into the Arena! Goblin Brawler always skips leg day.",
        image: "./images/goblin-cage.png",
        elixirCost: 4,
    },
    {
        name: "goblin drill",
        type: "epic",
        description: "Building capable of burrowing underground and appearing anywhere in the Arena. Spawns Goblins one at a time until destroyed. Then spawns a few more, to make sure everything nearby has been properly stabbed.",
        image: "./images/goblin-drill.png",
        elixirCost: 4,
    },
    {
        name: "goblin gang",
        type: "common",
        description: "Spawns five Goblins - three with knives, two with spears - at a discounted Elixir cost. It's like a Goblin Value Pack!",
        image: "./images/goblin-gang.png",
        elixirCost: 3,
    },
    {
        name: "goblin giant",
        type: "epic",
        description: "This jolly green Goblin Giant stomps towards enemy buildings. He carries two Spear Goblins everywhere he goes. It's a weird but functional arrangement.",
        image: "./images/goblin-giant.png",
        elixirCost: 6,
    },
    {
        name: "goblin hut",
        type: "rare",
        description: "Building that spawns Spear Goblins. Don't look inside... you don't want to see how they're made.",
        image: "./images/goblin-hut.png",
        elixirCost: 5,
    },
    {
        name: "goblins",
        type: "common",
        description: "Three fast, unarmored melee attackers. Small, fast, green and mean!",
        image: "./images/goblins.png",
        elixirCost: 2,
    },
    {
        name: "golem",
        type: "epic",
        description: "Slow but durable, only attacks buildings. When destroyed, explosively splits into two Golemites and deals area damage!",
        image: "./images/golem.png",
        elixirCost: 8,
    },
    {
        name: "graveyard",
        type: "legendary",
        description: "Surprise! It's a party. A Skeleton party, anywhere in the Arena. Yay!",
        image: "./images/graveyard.png",
        elixirCost: 5,
    },
    {
        name: "guards",
        type: "epic",
        description: "Three ruthless bone brothers with shields. Knock off their shields and all that's left are three ruthless bone brothers.",
        image: "./images/guards.png",
        elixirCost: 3,
    },
    {
        name: "heal spirit",
        type: "rare",
        description: "A mischievous Spirit that leaps at enemies, dealing Damage and leaving behind a powerful healing effect that restores Hitpoints to friendly Troops! R.I.P. Heal 2017 - 2020 Alas, we hardly used ye.",
        image: "./images/heal-spirit.png",
        elixirCost: 1,
    },
    {
        name: "hog rider",
        type: "rare",
        description: "Fast melee troop that targets buildings and can jump over the river. He followed the echoing call of Hog Riderrrrr all the way through the Arena doors.",
        image: "./images/hog-rider.png",
        elixirCost: 4,
    },
    {
        name: "hunter",
        type: "epic",
        description: "He deals BIG damage up close - not so much at range. What he lacks in accuracy, he makes up for with his impressively bushy eyebrows.",
        image: "./images/hunter.png",
        elixirCost: 4,
    },
    {
        name: "ice golem",
        type: "rare",
        description: "He's tough, targets buildings and explodes when destroyed, slowing nearby enemies. Made entirely out of ice... or is he?! Yes.",
        image: "./images/ice-golem.png",
        elixirCost: 2,
    },
    {
        name: "ice spirit",
        type: "common",
        description: "Spawns one lively little Ice Spirit to freeze a group of enemies. Stay frosty.",
        image: "./images/ice-spirit.png",
        elixirCost: 1,
    },
    {
        name: "ice wizard",
        type: "legendary",
        description: "This chill caster throws ice shards that slow down enemies' movement and attack speed. Despite being freezing cold, he has a handlebar mustache that's too hot for TV.",
        image: "./images/ice-wizard.png",
        elixirCost: 3,
    },
    {
        name: "inferno dragon",
        type: "legendary",
        description: "Shoots a focused beam of fire that increases in damage over time. Wears a helmet because flying can be dangerous.",
        image: "./images/inferno-dragon.png",
        elixirCost: 4,
    },
    {
        name: "inferno tower",
        type: "rare",
        description: "Defensive building, roasts targets for damage that increases over time. Burns through even the biggest and toughest enemies!",
        image: "./images/inferno-tower.png",
        elixirCost: 5,
    },
    {
        name: "knight",
        type: "common",
        description: "A tough melee fighter. The Barbarian's handsome, cultured cousin. Rumor has it that he was knighted based on the sheer awesomeness of his mustache alone.",
        image: "./images/knight.png",
        elixirCost: 3,
    },
    {
        name: "lava hound",
        type: "legendary",
        description: "The Lava Hound is a majestic flying beast that attacks buildings. The Lava Pups are less majestic angry babies that attack anything.",
        image: "./images/lava-hound.png",
        elixirCost: 7,
    },
    {
        name: "lightning",
        type: "epic",
        description: "Bolts of lightning damage and stun up to three enemy troops or buildings with the most hitpoints in the target area. Reduced damage to Crown Towers.",
        image: "./images/lightning.png",
        elixirCost: 6,
    },
    {
        name: "lumberjack",
        type: "legendary",
        description: "He chops trees by day and hunts The Log by night. His bottle of Rage spills everywhere when he's defeated.",
        image: "./images/lumberjack.png",
        elixirCost: 4,
    },
    {
        name: "magic archer",
        type: "legendary",
        description: "Not quite a Wizard, nor an Archer - he shoots a magic arrow that passes through and damages all enemies in its path. It's not a trick, it's magic!",
        image: "./images/magic-archer.png",
        elixirCost: 4,
    },
    {
        name: "mega knight",
        type: "legendary",
        description: "He lands with the force of 1,000 mustaches, then jumps from one foe to the next dealing huge area damage. Stand aside!",
        image: "./images/mega-knight.png",
        elixirCost: 7,
    },
    
]
let arenas = [
    {
        name: "Training Camp",
        image: "./images-arena/arena0.png",
        required: null,
    },
    {
        name: "Goblin Stadium",
        image: "./images-arena/arena1.png",
        required: 0,
    },
    {
        name: "Bone Pit",
        image: "./images-arena/arena2.png",
        required: 300,
    },
    {
        name: "Barbarian Bowl",
        image: "./images-arena/arena3.png",
        required: 600,
    },
    {
        name: "P.E.K.K.A's Playhouse",
        image: "./images-arena/arena4.png",
        required: 1000,
    },
    {
        name: "Spell Valley",
        image: "./images-arena/arena5.png",
        required: 1300,
    },
    {
        name: "Builder's Workshop",
        image: "./images-arena/arena6.png",
        required: 1600,
    },
    {
        name: "Royal Arena",
        image: "./images-arena/arena7.png",
        required: 2000,
    },
    {
        name: "Frozen Peak",
        image: "./images-arena/arena8.png",
        required: 2300,
    },
    {
        name: "Jungle Arena",
        image: "./images-arena/arena9.png",
        required: 2600,
    },
    {
        name: "Hog Mountain",
        image: "./images-arena/arena10.png",
        required: 3000,
    },
    {
        name: "Electro Valley",
        image: "./images-arena/arena11.png",
        required: 3400,
    },
    {
        name: "Spooky Town",
        image: "./images-arena/arena12.png",
        required: 3800,
    },
    {
        name: "Rascal's Hideout",
        image: "./images-arena/arena13.png",
        required: 4200,
    },
    {
        name: "Serenity Peak",
        image: "./images-arena/arena14.png",
        required: 4600,
    },
    {
        name: "Legendary Arena",
        image: "./images-arena/legendary.png",
        required: 5000,
    },
]
export { cards, arenas }