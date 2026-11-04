const agentDetails = {
  jett: {
    name: "JETT",
    role: "DÜELLOCU",
    origin: "GÜNEY KORE // BİRİM #01",
    portrait: "https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/displayicon.png",
    story: "Güney Kore'den gelen çevik Jett, rüzgârı bükme yeteneğine sahip bir Radyant'tır. Seul'de bir restoranda aşçı olarak çalışırken güçlerinin uyanmasıyla fırtınalar yaratmış ve kaçmak zorunda kalmıştır. VALORANT Protokolü'ne katılarak rüzgârın gücünü düşmanlarının üzerine salar.",
    codename: "Wookie",
    realName: "Sunwoo Han (Han-seo)",
    power: "Radyanit Rüzgârı",
    abilities: [
      ["C", "DUMAN BULUTU (CLOUDBURST)", "Görüşü kısıtlayan bir sis bulutu fırlatır. Tuşa basılı tutarak dumanın yönünü havada kavis çizdirebilirsiniz."],
      ["Q", "HAFİFLE (UPDRAFT)", "Jett rüzgârı kullanarak kendisini anında gökyüzüne doğru yükseğe fırlatır."],
      ["E", "RÜZGÂR GİBİ (TAILWIND)", "Hazırlandıktan sonra baktığı veya hareket ettiği yöne doğru anında ileri atılır. En önemli kaçış yeteneğidir."],
      ["X", "KESKİN FIRTINA (BLADE STORM)", "ULTIMATE: Beş adet ölümcül fırlatma bıçağı kuşanır. Kafadan vuruşlar anında öldürür ve birini alt ettiğinde tüm bıçakları yenilenir."]
    ]
  },
  phoenix: {
    name: "PHOENIX",
    role: "DÜELLOCU",
    origin: "BİRLEŞİK KRALLIK // BİRİM #02",
    portrait: "https://media.valorant-api.com/agents/eb93336a-449b-9c1b-0a54-a891f7921d69/displayicon.png",
    story: "Londra sokaklarından gelen Phoenix, ateşi manipüle edebilen bir Radyant'tır. Kendine aşırı güvenen, karizmatik ve cesur yapısıyla savaş alanını aydınlatır. Ateşi hem düşmanlarını yakmak hem de kendi yaralarını iyileştirmek için kullanır.",
    codename: "Apollo",
    realName: "Grant de Conti",
    power: "Radyanit Rüzgârı",
    abilities: [
      ["C", "ATEŞTEN DUVAR (BLAZE)", "Görüş engelleyen ve içinden geçenleri yakan bir alev duvarı örer. Phoenix bu alevlerin içinde iyileşir."],
      ["Q", "FLAŞ (CURVEBALL)", "Köşeleri dönebilen bir alev topu fırlatarak ona bakan düşmanları kör eder."],
      ["E", "YAKAR TOP (HOT HANDS)", "Yere çarptığında alev alanı oluşturan bir ateş topu fırlatır."],
      ["X", "YAKAR DÖNER (RUN IT BACK)", "ULTIMATE: Bulunduğu yere bir işaret bırakır. Süre dolduğunda veya savaşta etkisiz hâle geldiğinde bu noktaya tam canla geri döner."]
    ]
  },
  reyna: {
    name: "REYNA",
    role: "DÜELLOCU",
    origin: "MEKSİKA // BİRİM #11",
    portrait: "https://media.valorant-api.com/agents/a3bfb853-43b2-7238-a4f1-ad90e9e46bcc/displayicon.png",
    story: "Meksika'nın kalbinden gelen Reyna, tek başına çatışmalara hükmeder. Alt ettiği düşmanların ruh küreleriyle beslenerek canını yeniler veya görünmez olur. Küçük kız kardeşini hayatta tutabilmek için Radianite peşindedir.",
    codename: "Vampire",
    realName: "Zyanya Mondragón",
    power: "Radyanit Ruh Enerjisi",
    abilities: [
      ["C", "KEM GÖZ (LEER)", "Uzağa fırlattığı göz küresiyle ona bakan tüm düşmanların uzağı görmesini engeller."],
      ["Q", "SÖMÜR (DEVOUR)", "Öldürdüğü düşmandan düşen ruh küresini tüketerek hızla canını yeniler ve aşırı doldurur."],
      ["E", "AZLET (DISMISS)", "Ruh küresini kullanarak kısa süreliğine hasar almaz ve görünmez hâle gelir."],
      ["X", "İMPARATORİÇE (EMPRESS)", "ULTIMATE: Çılgın bir savaş moduna girer. Atış hızı artar, öldürmeler süreyi sıfırlar ve yetenekleri bedava kullanır."]
    ]
  },
  raze: {
    name: "RAZE",
    role: "DÜELLOCU",
    origin: "BREZİLYA // BİRİM #12",
    portrait: "https://media.valorant-api.com/agents/f94c3b30-42be-e959-889c-5aa313dba261/displayicon.png",
    story: "Salvador, Brezilya'dan gelen Raze; patlayıcılara, renklere ve sokak sanatına aşıktır. Büyük patlamalar yaratarak dar alanları temizler ve patlayıcı çantalarıyla haritada roket gibi uçar.",
    codename: "Clay",
    realName: "Tayane Alves",
    power: "Radyanit Patlayıcıları",
    abilities: [
      ["C", "BOMBOT (BOOM BOT)", "Düz hatta ilerleyen ve düşman gördüğünde üzerine koşup patlayan küçük bir robot bırakır."],
      ["Q", "PATLAYICI ÇANTA (BLAST PACK)", "Yere veya duvara yapışan çanta patlatıldığında Raze'i havaya fırlatır veya düşmana hasar verir."],
      ["E", "RENK TESİRLİ (PAINT SHELLS)", "İlk patlamadan sonra etrafa daha küçük bombalar saçan güçlü bir el bombası fırlatır."],
      ["X", "NEFES KESEN (SHOWSTOPPER)", "ULTIMATE: Devasa alan hasarı veren bir roketatar kuşanır ve tek atışta alanları temizler."]
    ]
  },
  viper: {
    name: "VIPER",
    role: "KONTROL UZMANI",
    origin: "AMERİKA BİRLEŞİK DEVLETLERİ // BİRİM #03",
    portrait: "https://media.valorant-api.com/agents/707eab51-4836-f488-046a-cda6bf494859/displayicon.png",
    story: "Zehirli kimyasal silahlar üreten dahi bir biyokimyager. İlk Işık olayından önce de Brimstone ile yakın çalışmıştır. Protokol'ün kurucularındandır ve intikam hırsıyla doludur.",
    codename: "Pandemic",
    realName: "Dr. Sabine Callas",
    power: "Radyanit Rüzgârı",
    abilities: [
      ["C", "ASİT HAVUZU (SNAKE BITE)", "Yerde asit birikintisi oluşturarak düşmanların savunmasız kalmasını ve erimesini sağlar."],
      ["Q", "ZEHİR BULUTU (POISON CLOUD)", "Açılıp kapanabilen zehirli gaz yayan bir gaz kapsülü fırlatır."],
      ["E", "ZEHİR PERDESİ (TOXIC SCREEN)", "Haritayı boydan boya bölen devasa bir zehirli gaz duvarı hattı yerleştirir."],
      ["X", "VIPER'IN İNİ (VIPER'S PIT)", "ULTIMATE: Alanı saran devasa zehir sisi bulutu. İçindeki düşmanların canı 1'e kadar düşer ve görüşleri sıfırlanır."]
    ]
  },
  omen: {
    name: "OMEN",
    role: "KONTROL UZMANI",
    origin: "BİLİNMİYOR // BİRİM #05",
    portrait: "https://media.valorant-api.com/agents/8e253930-4c05-31dd-1b6c-968525494517/displayicon.png",
    story: "Geçmişine dair anıları paramparça olmuş bir gölge varlığı. Bir kaza sonucu fiziksel bedenini kaybetmiş ve gölgelere karışmıştır. Viper ile geçmişten gelen gizemli bir bağı vardır.",
    codename: "Wraith",
    realName: "Bilinmiyor (Eski bir Protokol araştırmacısı)",
    power: "Radyanit Rüzgârı",
    abilities: [
      ["C", "GİZLİ ADIM (SHROUDED STEP)", "Kısa bir odaklanmanın ardından hedeflenen gölge noktasına ışınlanır."],
      ["Q", "PARANOYA (PARANOIA)", "Duvarların içinden geçebilen ve çarptığı herkesin görüşünü ve sesini kapatan gölge mermisi."],
      ["E", "KARANLIK ÖRTÜ (DARK COVER)", "Gölge dünyasına geçerek haritanın istenen noktasına uzun süreli duman küreleri bırakır."],
      ["X", "GÖLGELERİN İÇİNDEN (FROM THE SHADOWS)", "ULTIMATE: Haritanın herhangi bir noktasına ışınlanabilir ve miniharitada düşmanları bozar."]
    ]
  },
  sova: {
    name: "SOVA",
    role: "ÖNCÜ",
    origin: "RUSYA // BİRİM #06",
    portrait: "https://media.valorant-api.com/agents/320b2a48-4d9b-a075-30f1-1f93a9b638fa/displayicon.png",
    story: "Sibirya tundrasında büyümüş usta bir iz sürücü ve okçu. Mekanik gözü ve radyanit yaylarıyla en gizli saklanan düşmanları bile ortaya çıkarır.",
    codename: "Hunter",
    realName: "Alexander (Sasha) Novikov",
    power: "Radyanit Rüzgârı",
    abilities: [
      ["C", "BAYKUŞ DRON (OWL DRONE)", "Manuel kontrol edilen ve düşmanlara takip iğnesi fırlatabilen uçan bir dron."],
      ["Q", "ŞOK OKU (SHOCK BOLT)", "Çarptığı yerde elektrik patlaması yaratan ve duvarlardan seken ok."],
      ["E", "KEŞİF OKU (RECON BOLT)", "Görüş alanındaki düşmanları tarayıp silüetlerini tüm takıma gösteren ok."],
      ["X", "AVCININ HİDDETİ (HUNTER'S FURY)", "ULTIMATE: Duvarları delen üç adet devasa enerji oku fırlatır."]
    ]
  },
  sage: {
    name: "SAGE",
    role: "GÖZCÜ",
    origin: "ÇİN // BİRİM #07",
    portrait: "https://media.valorant-api.com/agents/569fdd95-4d10-43ab-ca70-79becc718b46/displayicon.png",
    story: "Çin'deki bir manastırda eğitilmiş güçlü bir Radyant şifacı. Yaşam gücünü ve radyanit kristallerini kontrol ederek takım arkadaşlarını iyileştirir veya hayata döndürür.",
    codename: "Thorne",
    realName: "Ling Ying Wei",
    power: "Radyanit Rüzgârı",
    abilities: [
      ["C", "BARİYER KÜRESİ (BARRIER ORB)", "Düşmanların geçemeyeceği ve kırılması gereken sert buz/yeşim duvarı örer."],
      ["Q", "YAVAŞLATAN KÜRE (SLOW ORB)", "Zemini kaplayarak düşmanların yürümesini zorlaştıran ve ses çıkartan küre."],
      ["E", "CAN KÜRESİ (HEALING ORB)", "Bir takım arkadaşını veya kendisini zamanla iyileştirir."],
      ["X", "DİRİLİŞ (RESURRECTION)", "ULTIMATE: Ölmüş bir takım arkadaşını tam canla anında hayata döndürür."]
    ]
  },
  cypher: {
    name: "CYPHER",
    role: "GÖZCÜ",
    origin: "FAS // BİRİM #08",
    portrait: "https://media.valorant-api.com/agents/117ed9e3-49f3-6512-3ccf-0cada7e3823b/displayicon.png",
    story: "Kazablanka'nın sırlarını elinde tutan bir gözetleme ustası. Ailesini kaybetmiş ve gizemli maskesinin arkasında siber ağlarla haritayı kontrol eder.",
    codename: "Gumshoe",
    realName: "Amir El Amari",
    power: "Radyanit Rüzgârı",
    abilities: [
      ["C", "BUBİ TUZAĞI (TRAPWIRE)", "Duvarlar arasına çekilen, basan düşmanı açığa çıkaran ve sarsan gizli tuzak teli."],
      ["Q", "SİBER KAFES (CYBER CAGE)", "İçine düşman girdiğinde ses çıkaran ve görüşü engelleyen uzaktan kumandalı kafes."],
      ["E", "GİZLİ KAMERA (SPYCAM)", "Duvara yerleştirilen, uzaktan izlenebilen ve işaretleme iğnesi atan kamera."],
      ["X", "NÖRON HIRSIZI (NEURAL THEFT)", "ULTIMATE: Ölü bir düşmanın beynini tarayarak yaşayan tüm düşmanların anlık yerini gösterir."]
    ]
  },
  brimstone: {
    name: "BRIMSTONE",
    role: "KONTROL UZMANI",
    origin: "AMERİKA BİRLEŞİK DEVLETLERİ // BİRİM #04",
    portrait: "https://media.valorant-api.com/agents/9f0d8ba9-4140-b941-57d3-a7ad57c6b417/displayicon.png",
    story: "VALORANT Protokolü'nün kurucusu ve saha komutanı. Eski bir itfaiyeci ve askerdir. Uydu bağlantılı kol bilgisayarıyla yörüngeden duman ve lazer desteği sağlar.",
    codename: "Sarge",
    realName: "Liam Byrne",
    power: "Radyanit Rüzgârı",
    abilities: [
      ["C", "KUVVET İŞARETİ (STIM BEACON)", "Takım arkadaşlarına seri atış ve hız bonusu veren bir fener yerleştirir."],
      ["Q", "YAKICI (INCENDIARY)", "Yerde geniş bir alev alanı açan el bombası fırlatıcısı."],
      ["E", "DUMAN BULUTU (SKY SMOKE)", "Kolundaki haritayı kullanarak gökten görüş engelleyen hassas dumanlar indirir."],
      ["X", "UYDU SALDIRISI (ORBITAL STRIKE)", "ULTIMATE: Hedef bölgeye gökyüzünden devasa bir lazer ışını indirerek içindeki her şeyi yok eder."]
    ]
  },
  killjoy: {
    name: "KILLJOY",
    role: "GÖZCÜ",
    origin: "ALMANYA // BİRİM #09",
    portrait: "https://media.valorant-api.com/agents/1e58de9c-4950-5125-93e9-a0aee9f98746/displayicon.png",
    story: "Berlin'den gelen dahi bir mucit. VALORANT Protokolü'nün AR-GE departmanının başındadır. Kendi tasarladığı taretler ve nanit sürüleriyle bölgeleri tek başına kilitler.",
    codename: "Killjoy",
    realName: "Klara Böhringer",
    power: "Radyanit Rüzgârı",
    abilities: [
      ["C", "ALARMBOT", "Menziline giren düşmanlara koşup patlayan ve onları savunmasız bırakan gizli robot."],
      ["Q", "NANOSÜRÜ (NANOSWARM)", "Gizlenen ve uzaktan patlatılarak zarar veren ölümcül nanit bombası."],
      ["E", "TARET (TURRET)", "180 derecelik açıda gördüğü düşmanlara otomatik ateş eden savunma tareti."],
      ["X", "TECRİT (LOCKDOWN)", "ULTIMATE: Büyük bir alandaki tüm düşmanları 8 saniyeliğine tamamen silahsız ve yavaş bırakan cihaz."]
    ]
  },
  chamber: {
    name: "CHAMBER",
    role: "GÖZCÜ",
    origin: "FRANSA // BİRİM #18",
    portrait: "https://media.valorant-api.com/agents/22697a3d-45bf-8dd7-4fec-84a9e28c69d7/displayicon.png",
    story: "Şık giyimli, Fransız bir silah tasarımcısı. Kendi geliştirdiği altın kaplama özel tabancası ve keskin nişancı tüfeğiyle uzak mesafeden düşmanları avlar.",
    codename: "Deadeye",
    realName: "Vincent Fabron",
    power: "Radyanit Rüzgârı",
    abilities: [
      ["C", "BULUŞMA (TRADEMARK)", "Gördüğü düşmanları tarayıp alanında yavaşlatan tuzak cihazı."],
      ["Q", "KELLE AVCISI (HEADHUNTER)", "Özel ağır mermilere sahip, dürbünlü güçlü tabanca kuşanır."],
      ["E", "BULUŞMA (RENDEZVOUS)", "Menzil içindeyken anında hedeflenen ışınlanma çapası geri sıçrar."],
      ["X", "KESKİN TARZ (TOUR DE FORCE)", "ULTIMATE: Tek atışta doğrudan öldüren ve öldürdüğü yerde yavaşlatma alanı açan altın keskin nişancı tüfeği."]
    ]
  }
};

const dialogTemplate = document.querySelector("#agent-dialog-template");

const createAgentDialog = (agentId, agent) => {
  const dialog = dialogTemplate.content.firstElementChild.cloneNode(true);
  const titleId = `${agentId}-modal-title`;

  dialog.id = `${agentId}-modal`;
  dialog.setAttribute("aria-labelledby", titleId);
  dialog.querySelector(".agent-dialog-title").id = titleId;
  dialog.querySelector(".agent-dialog-title").textContent = agent.name;
  dialog.querySelector(".agent-dialog-role").textContent = agent.role;
  dialog.querySelector(".agent-dialog-origin").textContent = agent.origin;

  const portrait = dialog.querySelector(".agent-dossier-portrait img");
  portrait.src = agent.portrait;
  portrait.alt = `${agent.name} ajan portresi`;

  dialog.querySelector(".agent-dossier-copy").textContent = agent.story;
  dialog.querySelector('[data-fact="codename"]').textContent = agent.codename;
  dialog.querySelector('[data-fact="realName"]').textContent = agent.realName;
  dialog.querySelector('[data-fact="power"]').textContent = agent.power;

  const abilityList = dialog.querySelector(".agent-ability-list");
  agent.abilities.forEach(([key, name, description]) => {
    const item = document.createElement("li");
    item.className = "agent-ability";

    const abilityKey = document.createElement("span");
    abilityKey.className = "ability-key";
    abilityKey.textContent = key;

    const abilityDetails = document.createElement("div");
    const abilityName = document.createElement("h4");
    abilityName.textContent = name;
    const abilityDescription = document.createElement("p");
    abilityDescription.textContent = description;

    abilityDetails.append(abilityName, abilityDescription);
    item.append(abilityKey, abilityDetails);
    abilityList.append(item);
  });

  return dialog;
};

if (dialogTemplate instanceof HTMLTemplateElement) {
  document.querySelectorAll("[data-agent-modal-trigger]").forEach((card) => {
    const agentId = card.dataset.agentModalTrigger;
    const agent = agentDetails[agentId];

    if (!agent) {
      return;
    }

    card.querySelector(".agent-details-link")?.setAttribute("aria-controls", `${agentId}-modal`);

    const openDialog = () => {
      if (document.querySelector(".agent-dialog[open]")) {
        return;
      }

      const dialog = createAgentDialog(agentId, agent);
      document.body.append(dialog);
      dialog.showModal();

      dialog.querySelectorAll("[data-close-agent-modal]").forEach((button) => {
        button.addEventListener("click", () => dialog.close());
      });

      dialog.addEventListener("click", (event) => {
        if (event.target === dialog) {
          dialog.close();
        }
      });

      dialog.addEventListener("close", () => dialog.remove(), { once: true });
    };

    card.addEventListener("click", (event) => {
      if (event.target instanceof Element && event.target.closest("a")) {
        return;
      }

      openDialog();
    });

    card.addEventListener("keydown", (event) => {
      if ((event.key === "Enter" || event.key === " ") && event.target === card) {
        event.preventDefault();
        openDialog();
      }
    });
  });
}
