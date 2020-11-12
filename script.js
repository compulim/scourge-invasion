const tuning = 60;

const init = {
  rare: 174062,
  timer: '2020-11-11T23:20:00Z'
};

var rares = [
  {
    name: '『瘟疫使者』諾斯',
    img: 'images/noth-the-plaguebringer.png',
    desc: '將會打「『瘟疫使者』諾斯」，會掉：布胸、戒子 (耐臨精)。',
    way: {
      x: 31.6,
      y: 70.5
    },
    id: 174067,
    loot: [
      {
        id: 183642,
        name: 'Robes of Rasped Breaths'
      },
      {
        id: 183676,
        name: 'Hailstone Loop'
      },
      {
        id: 183200,
        name: 'Pitch Black Scourgestone'
      },
      {
        id: 183616,
        name: 'Accursed Keepsake'
      }
    ]
  },
  {
    name: '縫補者',
    img: 'images/patchwerk.png',
    desc: '將會打「縫補者」，會掉：皮腰、鎖肩、雙手斧。',
    way: {
      x: 34.4,
      y: 68.5
    },
    id: 174066,
    loot: [
      {
        id: 183645,
        name: 'Cinch of the Tortured'
      },
      {
        id: 183644,
        name: "Regurgitator's Shoulderpads"
      },
      {
        id: 183643,
        name: 'Severance of Mortality'
      },
      {
        id: 183200,
        name: 'Pitch Black Scourgestone'
      },
      {
        id: 183616,
        name: 'Accursed Keepsake'
      }
    ]
  },
  {
    name: '血腥女王菈娜薩爾',
    img: 'images/blood-queen-lanathel.png',
    desc: '將會打「血腥女王菈娜薩爾」，會掉：鎖胸、鎧手、長柄武器。',
    way: {
      x: 49.7,
      y: 32.7
    },
    id: 174065,
    loot: [
      {
        id: 183646,
        name: 'Chestguard of Siphoned Vitality'
      },
      {
        id: 183648,
        name: 'Veincrusher Gauntlets'
      },
      {
        id: 183647,
        name: 'Bloodspatter'
      },
      {
        id: 183200,
        name: 'Pitch Black Scourgestone'
      },
      {
        id: 183616,
        name: 'Accursed Keepsake'
      }
    ]
  },
  {
    name: '普崔希德教授',
    img: 'images/professor-putricide.png',
    desc: '將會打「普崔希德教授」，會掉：皮頭、鎧胸、飾品 (致命一擊)。',
    way: {
      x: 57.1,
      y: 30.3
    },
    id: 174064,
    loot: [
      {
        id: 183649,
        name: 'Bag of Discarded Entrails'
      },
      {
        id: 183651,
        name: 'Chestplate of Septic Sutures'
      },
      {
        id: 183650,
        name: 'Miniscule Abomination in a Jar'
      },
      {
        id: 183200,
        name: 'Pitch Black Scourgestone'
      },
      {
        id: 183616,
        name: 'Accursed Keepsake'
      }
    ]
  },
  {
    name: '亡語女士',
    img: 'images/lady-deathwhisper.png',
    desc: '將會打「亡語女士」，會掉：布肩、皮胸、鎖手。',
    way: {
      x: 51.1,
      y: 78.5
    },
    id: 174063,
    loot: [
      {
        id: 183641,
        name: 'Shoulderpads of Corpal Rigidity'
      },
      {
        id: 183653,
        name: 'Deathwhisper Vestment'
      },
      {
        id: 183655,
        name: 'Handgrips of Rime and Sleet'
      },
      {
        id: 183200,
        name: 'Pitch Black Scourgestone'
      },
      {
        id: 183616,
        name: 'Accursed Keepsake'
      }
    ]
  },
  {
    name: '無情的斯卡迪',
    img: 'images/skadi-the-ruthless.png',
    desc: '將會打「無情的斯卡迪」，會掉：藍色元龍、鎧腰、皮胸、鎖足。',
    way: {
      x: 57.8,
      y: 56.1
    },
    id: 174062,
    loot: [
      {
        id: 44151,
        name: 'Reins of the Blue Proto-Drake'
      },
      {
        id: 183670,
        name: "Skadi's Saronite Belt"
      },
      {
        id: 183656,
        name: "Drake Rider's Jerkin"
      },
      {
        id: 183657,
        name: "Skadi's Scaled Sollerets"
      },
      {
        id: 183200,
        name: 'Pitch Black Scourgestone'
      },
      {
        id: 183616,
        name: 'Accursed Keepsake'
      }
    ]
  },
  {
    name: '『盜掠者』因格瓦',
    img: 'images/ingvar-the-plunderer.png',
    desc: '將會打「『盜掠者』因格瓦」，會掉：皮腰、戒子 (耐速爆)、雙手斧。',
    way: {
      x: 52.4,
      y: 52.6
    },
    id: 174061,
    loot: [
      {
        id: 183668,
        name: 'Razor-Barbed Leather Belt'
      },
      {
        id: 183659,
        name: "Annhylde's Band"
      },
      {
        id: 183658,
        name: "Ingvar's Monolithic Skullcleaver"
      },
      {
        id: 183200,
        name: 'Pitch Black Scourgestone'
      },
      {
        id: 183616,
        name: 'Accursed Keepsake'
      }
    ]
  },
  {
    name: '凱雷希斯親王',
    img: 'images/prince-keleseth.png',
    desc: '將會打「凱雷希斯親王」，會掉：披風、拳擊武器、鎖手。',
    way: {
      x: 54.0,
      y: 44.7
    },
    id: 174060,
    loot: [
      {
        id: 50074,
        name: 'Royal Crimson Cloak'
      },
      {
        id: 183678,
        name: "Keleseth's Influencer"
      },
      {
        id: 183661,
        name: "Drake Stabler's Gauntlets"
      },
      {
        id: 183200,
        name: 'Pitch Black Scourgestone'
      },
      {
        id: 183616,
        name: 'Accursed Keepsake'
      }
    ]
  },
  {
    name: '黑騎士',
    img: 'images/the-black-knight.png',
    desc: '將會打「黑騎士」，會掉：匕首、皮肩、鎧頭。',
    way: {
      x: 64.8,
      y: 22.1
    },
    id: 174059,
    loot: [
      {
        id: 183638,
        name: 'Phantasmic Kris'
      },
      {
        id: 183637,
        name: 'Shoulderpads of the Notorious Knave'
      },
      {
        id: 183636,
        name: 'Helm of the Violent Fracas'
      },
      {
        id: 183200,
        name: 'Pitch Black Scourgestone'
      },
      {
        id: 183616,
        name: 'Accursed Keepsake'
      }
    ]
  },
  {
    name: '布朗吉姆',
    img: 'images/bronjahm.png',
    desc: '將會打「布朗吉姆」，會掉：34 格包、布手、鎖頭、鎧手。',
    way: {
      x: 70.7,
      y: 38.4
    },
    id: 174058,
    loot: [
      {
        id: 183634,
        name: "Papa's Mint Condition Bag"
      },
      {
        id: 183675,
        name: 'Cold Sweat Mitts'
      },
      {
        id: 183639,
        name: 'Gaze of Bewilderment'
      },
      {
        id: 183635,
        name: 'Grieving Gauntlets'
      },
      {
        id: 183200,
        name: 'Pitch Black Scourgestone'
      },
      {
        id: 183616,
        name: 'Accursed Keepsake'
      }
    ]
  },
  {
    name: '天讉領主提朗紐斯',
    img: 'images/scourgelord-tyrannus.png',
    desc: '將會打「天讉領主提朗紐斯」，會掉：希足、皮足、盾。',
    way: {
      x: 47.2,
      y: 66.1
    },
    id: 174057,
    loot: [
      {
        id: 183674,
        name: 'Rimewoven Pantaloons'
      },
      {
        id: 183633,
        name: 'Fringed Wyrmleather Leggings'
      },
      {
        id: 183632,
        name: 'Protector of Stolen Souls'
      },
      {
        id: 183200,
        name: 'Pitch Black Scourgestone'
      },
      {
        id: 183616,
        name: 'Accursed Keepsake'
      }
    ]
  },
  {
    name: '鍛造大師加弗羅斯',
    img: 'images/forgemaster-garfrost.png',
    desc: '將會打「鍛造大師加弗羅斯」，會掉：鎧足、戒子 (耐爆精)、雙手錘。',
    way: {
      x: 58.6,
      y: 72.5
    },
    id: 174056,
    loot: [
      {
        id: 183666,
        name: 'Legguards of the Frosty Fathoms'
      },
      {
        id: 183631,
        name: 'Ring of Carnelian and Sinew'
      },
      {
        id: 183630,
        name: "Garfrost's Two-Ton Bludgeon"
      },
      {
        id: 183200,
        name: 'Pitch Black Scourgestone'
      },
      {
        id: 183616,
        name: 'Accursed Keepsake'
      }
    ]
  },
  {
    name: '麥爾溫',
    img: 'images/marwyn.png',
    desc: '將會打「麥爾溫」，會掉：布肩、布頭、鎖胸。',
    way: {
      x: 58.2,
      y: 83.4
    },
    id: 174055,
    loot: [
      {
        id: 183687,
        name: 'Frayed Flesh-Stitched Shoulderguards'
      },
      {
        id: 183663,
        name: 'Sightless Capuchin of Ulmaas'
      },
      {
        id: 183662,
        name: 'Frostsworn Rattleshirt'
      },
      {
        id: 183200,
        name: 'Pitch Black Scourgestone'
      },
      {
        id: 183616,
        name: 'Accursed Keepsake'
      }
    ]
  },
  {
    name: '法勒瑞克',
    img: 'images/falric.png',
    desc: '將會打「法勒瑞克」，會掉：布腕、鎧肩、鎧足。',
    way: {
      x: 50.2,
      y: 87.9
    },
    id: 174054,
    loot: [
      {
        id: 183664,
        name: 'Bracer of Ground Molars'
      },
      {
        id: 183665,
        name: "Valonforth's Marred Pauldrons"
      },
      {
        id: 183666,
        name: 'Legguards of the Frosty Fathoms'
      },
      {
        id: 183200,
        name: 'Pitch Black Scourgestone'
      },
      {
        id: 183616,
        name: 'Accursed Keepsake'
      }
    ]
  },
  {
    name: '預言者薩隆杰',
    img: 'images/the-prophet-tharonja.png',
    desc: '將會打「預言者薩隆杰」，會掉：皮足、戒子 (耐臨爆)、盾。',
    way: {
      x: 80.1,
      y: 61.2
    },
    id: 174053,
    loot: [
      {
        id: 183686,
        name: 'Breeches of the Skeletal Serpent'
      },
      {
        id: 183685,
        name: 'Phantasmic Seal of the Prophet'
      },
      {
        id: 183684,
        name: "Tharon'ja's Protectorate"
      },
      {
        id: 183200,
        name: 'Pitch Black Scourgestone'
      },
      {
        id: 183616,
        name: 'Accursed Keepsake'
      }
    ]
  },
  {
    name: '『召喚者』諾沃司',
    img: 'images/novos-the-summoner.png',
    desc: '將會打「『召喚者』諾沃司」，會掉：鎖腕、鎧胸、單手錘。',
    way: {
      x: 77.8,
      y: 66.1
    },
    id: 174052,
    loot: [
      {
        id: 183671,
        name: 'Necromantic Wristwraps'
      },
      {
        id: 183672,
        name: 'Cuirass of Undeath'
      },
      {
        id: 183627,
        name: "Summoner's Granite Gavel"
      },
      {
        id: 183200,
        name: 'Pitch Black Scourgestone'
      },
      {
        id: 183616,
        name: 'Accursed Keepsake'
      }
    ]
  },
  {
    name: '血角食人妖',
    img: 'images/trollgore.png',
    desc: '將會打「血角食人妖」，會掉：布頭、雙手劍。',
    way: {
      x: 58.3,
      y: 39.4
    },
    id: 174051,
    loot: [
      {
        id: 183669,
        name: 'Cowl of the Rampaging Troll'
      },
      {
        id: 183626,
        name: 'Troll Gorer'
      },
      {
        id: 183200,
        name: 'Pitch Black Scourgestone'
      },
      {
        id: 183616,
        name: 'Accursed Keepsake'
      }
    ]
  },
  {
    name: '『守門者』齊力克西爾',
    img: 'images/krikthir-the-gatewatcher.png',
    desc: '將會打「『守門者』齊力克西爾」，會掉：匕首。',
    way: {
      x: 67.5,
      y: 58.0
    },
    id: 174050,
    loot: [
      {
        id: 183681,
        name: 'Webrending Machete'
      },
      {
        id: 183200,
        name: 'Pitch Black Scourgestone'
      },
      {
        id: 183616,
        name: 'Accursed Keepsake'
      }
    ]
  },
  {
    name: '泰爾達朗親王',
    img: 'images/prince-taldaram.png',
    desc: '將會打「泰爾達朗親王」，會掉：皮足、鎖腰、頸鍊 (耐爆速)。',
    way: {
      x: 29.6,
      y: 62.2
    },
    id: 174049,
    loot: [
      {
        id: 183679,
        name: "Taldaram's Supple Slippers"
      },
      {
        id: 183677,
        name: "Blood-Drinker's Belt"
      },
      {
        id: 183625,
        name: 'Reforged Necklace of Taldaram'
      },
      {
        id: 183200,
        name: 'Pitch Black Scourgestone'
      },
      {
        id: 183616,
        name: 'Accursed Keepsake'
      }
    ]
  },
  {
    name: '那杜斯長老',
    img: 'images/elder-nadox.png',
    desc: '將會打「那杜斯長老」，會掉：戒子 (耐臨速)。',
    way: {
      x: 44.2,
      y: 49.1
    },
    id: 174048,
    loot: [
      {
        id: 183673,
        name: 'Nerubian Aegis Ring'
      },
      {
        id: 183200,
        name: 'Pitch Black Scourgestone'
      },
      {
        id: 183616,
        name: 'Accursed Keepsake'
      }
    ]
  }
];

var html = `
  <div class="col-md-4">
    <div class="card mb-4 box-shadow">
      <img class="card-img-top" src="{{img}}" alt="{{name}}">
      <div class="card-body">
        <h3><a href="https://www.wowhead.com/npc={{id}}/" target="_blank" data-wowhead="npc={{id}}">{{name}}</a></h3>
        <p class="card-text">{{{desc}}}</p>
        <p class="card-text">掉落：</p>
        <ul>
        {{#each loot}}
          <li>
            <a href="https://www.wowhead.com/item={{id}}/" target="_blank" data-wowhead="item={{id}}">{{name}}</a>
          </li>
        {{/each}}
        </ul>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button type="button" class="map waypoint btn btn-sm btn-primary" data-clipboard-text="/run b=C_Map;b.SetUserWaypoint(UiMapPoint.CreateFromCoordinates(118, {{way.x}}/100, {{way.y}}/100));">地圖</button>
          </div>
          <div class="btn-group">
            <button type="button" class="announce waypoint btn btn-sm btn-primary" data-clipboard-text="/run b=C_Map;b.SetUserWaypoint(UiMapPoint.CreateFromCoordinates(118,{{way.x}}/100,{{way.y}}/100));SendChatMessage('於 {{nextSpawn}} {{desc}}'..b.GetUserWaypointHyperlink(),'CHANNEL',_,4);">公告</button>
          </div>
          <div class="btn-group">
            <button type="button" class="tomtom waypoint btn btn-sm btn-primary" data-clipboard-text="/way {{way.x}} {{way.y}}">TomTom</button>
          </div>

          <small class="text-muted">{{nextSpawnDuration}} @ {{nextSpawn}}</small>
        </div>
      </div>
    </div>
  </div>
`;

function nextSpawn(rare) {
  var spawnTimer = new moment(rare.timer);
  spawnTimer.add(tuning, 'seconds');

  var currentDate = new moment();

  while (spawnTimer < currentDate) {
    spawnTimer.add(400, 'minutes');
  }

  var duration = moment.duration(spawnTimer.diff(currentDate));

  rare.nextSpawnMins = Math.round(duration.asMinutes());
  rare.nextSpawnDuration = duration.humanize();
  rare.nextSpawn = moment.tz(spawnTimer, 'Asia/Hong_Kong').format('HH:mm');
  // rare.nextSpawn = spawnTimer.format('HH:mm');
  //if (spawnTimer < current)
}

function calculateSpawns() {
  for (rare of rares) {
    nextSpawn(rare);
  }
}

function setTooltip(button, message) {
  $(button).tooltip('hide').attr('data-original-title', message).tooltip('show');
}

function hideTooltip() {
  setTimeout(function () {
    $('button').tooltip('hide');
  }, 1500);
}

function refreshCards() {
  $('#cards').empty();

  // Calculate upcoming spawn timers
  calculateSpawns();

  // Sort rares on spawn timers
  rares.sort((a, b) => (a.nextSpawnMins > b.nextSpawnMins ? 1 : -1));

  // compile the template
  var template = Handlebars.compile(html);

  // execute the compiled template and print the output to the console
  for (rare of rares) {
    $('#cards').append(template(rare));
  }

  $('.waypoint').tooltip({
    trigger: 'click',
    placement: 'bottom'
  });

  if (typeof ga !== 'undefined') {
    ga('send', 'event', 'cards', 'refresh');
  }

  return false;
}

$(function () {
  // Initialize timers for each rare from init block
  const initIndex = rares.findIndex(rare => rare.id == init.rare);

  if (initIndex == -1) {
    console.log(`Rare with id ${init.rare} not found.`);
  }

  const initTimer = new moment(init.timer);

  rares.forEach((rare, index) => {
    const rareTimer = initTimer.clone();
    rareTimer.add((index - initIndex) * 20, 'minutes');

    rare.timer = rareTimer.toISOString();
  });

  refreshCards();

  var clipboard = new ClipboardJS('.waypoint');

  clipboard.on('success', function (e) {
    const trigger = $(e.trigger);

    if (trigger.hasClass('map')) {
      setTooltip(e.trigger, 'Copied script to create a map waypoint on your map pointing to the rare.');
    }

    if (trigger.hasClass('announce')) {
      setTooltip(e.trigger, 'Copied script to create a map waypoint and announces it linked into the zone channel.');
    }

    if (trigger.hasClass('tomtom')) {
      setTooltip(e.trigger, 'Copied script to creates a TomTom waypoint (requires TomTom addon).');
    }

    hideTooltip();
  });

  clipboard.on('error', function (e) {
    setTooltip(e.trigger, 'Failed!');
    hideTooltip();
  });
});
