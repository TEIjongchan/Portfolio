export const PROJECT_CONSTANT = [
  // AION 2
  {
    name: "AION 2",
    genre: ["PC", "모바일", "MMORPG"],
    date: "2023.10 ~ 2025.11",
    listDescription: "",
    description:
      "'아이온2'는 PC와 모바일 환경을 지원하는 대규모 MMORPG로,<br/> 각 플랫폼에 맞는 UI·UX와 게임 플레이 경험을 제공하는 프로젝트입니다.",
    iconUrl: [
      "/images/icon/Icon_Tool_Unreal.png",
      "/images/icon/Icon_Tool_Ps.png",
      "/images/icon/Icon_Tool_Ai.png",
    ],
    imageUrl: [
      "/images/project/Aion2/0.png",
      "/images/project/Aion2/1.png",
    ],
    type: "horizontal",
    source:
      "WebP 포맷을 지원하는 브라우저에서 열어주세요. 영상을 불러오는 데 시간이 걸릴 수 있습니다. 영상이 표시되지 않으면 새로고침해 주세요.",
    detailImage: [
      ["0.png", "메인 화면"],
      ["1.png", "거래화면"],
      ["2.png", "보급의뢰"],
      ["3.png", "제작관리"],
      ["3_1.webp", "물질변환 연출"],
      ["4.png", "스킬화면"],
      ["4_1.webp", "특화스킬 연출"],
      ["5.png", "옷장"],
      ["6.png", "옷장 상점"],
      ["7.png", "염색"],
      ["7_1.webp", "외형합성"],
      ["8.png", "수집효과 팝업"],
      ["9.png", "결제 팝업"],
      ["10.png", "합성 확률 팝업"],
      ["11.png", "투기장"],
      ["12.png", "투기장 HUD 1"],
      ["13.png", "투기장 HUD 2"],
      ["14.png", "시즌 보상 팝업"],
      ["15.png", "게임 네비게이터"],
      ["16.png", "설정"],
      ["모바일_0.png", "모바일 HUD"],
      ["모바일_1.png", "모바일 제작화면"],
      ["모바일_2.png", "모바일 보급의뢰"],
      ["모바일_3.png", "모바일 스킬"],
      ["모바일_4.png", "모바일 옷장"],
      ["모바일_5.png", "모바일 설정"],
    ].map(([file, text]) => ({
        url: `/images/project/Aion2/${file}`,
        text,
        type: "horizontal",
      })),
    history: [
      {
        name: "프로젝트에서 작업한 내용",
        list: [
          {
            title: "UI·UX",
            content: [
              { text: "PC 및 모바일 UI·UX 디자인", type: "text" },
              { text: "GUI 연출 및 엔진 작업", type: "text" },
              { text: "플랫폼별 UX 플로우 및 화면 대응", type: "text" },
            ],
          },
        ],
      },
      {
        name: "프로젝트를 통해 얻은 경험",
        list: [
          {
            title: "멀티 플랫폼 UI·UX 경험",
            content: [
              {
                text: "PC와 모바일의 서로 다른 조작 환경과 화면 비율을 고려해 일관된 게임 경험을 설계하고 구현했습니다.",
                type: "text",
              },
              {
                text: "하나의 언리얼 위젯 파일로 다양한 해상도에 최대한 대응하는 방법을 배웠습니다.",
                type: "text",
              },
              {
                text: "MMORPG의 다양한 콘텐츠 시스템과 서로 연결되어 상호작용하는 UI/UX 설계를 배웠습니다.",
                type: "text",
              },
            ],
          },
        ],
      },
    ],
  },

  // Chrono Odyssey
  {
    name: "Chrono Odyssey",
    genre: ["콘솔", "MMORPG"],
    date: "2022.11 ~ 2023.08",
    listDescription: "",
    description:
      "‘크로노 오디세이’는 언리얼 엔진을 기반으로 제작되었으며,<br/> PC뿐만 아니라 콘솔 지원을 목표로 하는 대규모 MMORPG입니다.",
    iconUrl: [
      "/images/icon/Icon_Tool_Unreal.png",
      "/images/icon/Icon_Tool_Ps.png",
      "/images/icon/Icon_Tool_Ai.png",
    ],
    imageUrl: [
      "/images/project/Chrono/0.png",
      "/images/project/Chrono/1.png",
    ],
    type: "horizontal",
    source:
      "WebP 포맷을 지원하는 브라우저에서 열어주세요. 영상을 불러오는 데 시간이 걸릴 수 있습니다. 영상이 표시되지 않으면 새로고침해 주세요.",
    detailImage: [
      ["0.png", "메인 화면"],
      ["1.png", "캐릭터 선택창"],
      ["2.png", "로딩 화면"],
      ["3.png", "전투(보스게이지)"],
      ["4.png", "퀘스트노티"],
      ["5.png", "데미지 폰트"],
      ["6.png", "캐릭터 정보"],
      ["7.png", "아이템 정보"],
      ["8.png", "대화"],
      ["9.png", "콘솔UI 대응"],
      ["10.png", "크로노텍터창"],
      ["11.png", "스킬"],
      ["12.webp", "대화 연출"],
      ["13.webp", "스킬 해금 연출"],
      ["14.webp", "데미지폰트연출"],
      ["15.webp", "월드 해금 연출"],
      ["16.webp", "퀘스트 완료"],
      ["17.webp", "보스 게이지 연출"],
      ["18.webp", "무기 교체 HUD 연출"],
      ["19.webp", "크로노텍터창 오픈연출"],
    ].map(([file, text]) => ({
      url: `/images/project/Chrono/${file}`,
      text,
      type: "horizontal",
    })),
    history: [
      {
        name: "프로젝트에서 작업한 내용",
        list: [
          {
            title: "UI·UX",
            content: [
              { text: "GUI, 연출 및 엔진 작업", type: "text" },
              { text: "UX 플로우 정리", type: "text" },
              { text: "콘솔 컨트롤러 키 대응", type: "text" },
            ],
          },
          {
            title: "언리얼 머티리얼 제작",
            content: [
              { text: "머티리얼 전반 제작", type: "text" },
              { text: "머티리얼 관리 및 최적화", type: "text" },
            ],
          },
        ],
      },
      {
        name: "프로젝트를 통해 얻은 경험",
        list: [
          {
            title: "언리얼 프로젝트 숙련도 향상",
            content: [
              {
                text: "유니티에서 언리얼 엔진으로 전환하고 RPG 장르에 처음 진입하는 과정에서 숙련도가 크게 향상되었습니다. 프로젝트 진행 중 인력 감축으로 업무량이 늘어난 상황에서도 맡은 업무를 충실히 수행하여 일정에 차질 없이 대응했습니다.",
                type: "text",
              },
            ],
          },
          {
            title: "콘솔 기반 UI/UX 숙달",
            content: [
              {
                text: "RPG 장르를 콘솔로 즐길 수 있도록 만들어야 했기에 다른 플랫폼과는 차별화된 UI에 대한 지식을 습득하였습니다.",
                type: "text",
              },
            ],
          },
          {
            title: "자체적인 머티리얼 학습",
            content: [
              {
                text: "원하는 연출을 제작하기 위해서 개인적인 시간을 활용해 머티리얼의 기본적인 지식을 얻고 회사에서 제공하는 기존 머티리얼 구조를 학습해 더 완성도 있는 머티리얼을 제작할 수 있게 되었습니다.",
                type: "text",
              },
            ],
          },
        ],
      },
    ],
  },

  // Gallery Louis
  {
    name: "Gallery Louis",
    genre: ["모바일", "드롭매치", "퍼즐"],
    date: "2021.03-2021.11",
    listDescription: "",
    description:
      "‘갤러리 루이스’는 등급을 올리며 다양한 사람과 경쟁하고,<br/> 참신한 아이템을 수집할 수 있는 드롭 매치 퍼즐 게임입니다.",
    iconUrl: [
      "/images/icon/Icon_Tool_Unity.png",
      "/images/icon/Icon_Tool_Ps.png",
      "/images/icon/Icon_Tool_Ai.png",
    ],
    imageUrl: [
      "/images/project/GalleryLouis/Gallery Louis_0.gif",
      "/images/project/GalleryLouis/Gallery Louis_1.gif",
      "/images/project/GalleryLouis/Gallery Louis_2.gif",
      "/images/project/GalleryLouis/Gallery Louis_3.gif",
    ],
    type: "vertical",
    source: "WebP 포맷을 지원하는 브라우저에서 열어주세요. 영상을 불러오는 데 시간이 걸릴 수 있습니다. 영상이 표시되지 않으면 새로고침해 주세요.",
    detailImage: [
      {
        // 1st
        url: "/images/project/GalleryLouis/Gallery Louis_0.gif",
        text: "로고",
        type: "vertical",
      },
      {
        url: "/images/project/GalleryLouis/Gallery Louis_1.gif",
        text: "인게임 1",
        type: "vertical",
      },
      {
        url: "/images/project/GalleryLouis/Gallery Louis_2.gif",
        text: "인게임 2",
        type: "vertical",
      },
      {
        // 2nd
        url: "/images/project/GalleryLouis/Gallery Louis_3.gif",
        text: "인게임 3",
        type: "vertical",
      },
      {
        url: "/images/project/GalleryLouis/Gallery Louis_4.png",
        text: "상점",
        type: "vertical",
      },
      {
        url: "/images/project/GalleryLouis/Gallery Louis_5.png",
        text: "아이템 구매 팝업",
        type: "vertical",
      },
      {
        // 3rd
        url: "/images/project/GalleryLouis/Gallery Louis_6.gif",
        text: "보상 획득",
        type: "vertical",
      },
      {
        url: "/images/project/GalleryLouis/Gallery Louis_7.gif",
        text: "등급업 연출",
        type: "vertical",
      },
      {
        url: "/images/project/GalleryLouis/Gallery Louis_8.gif",
        text: "공지 알림 연출",
        type: "vertical",
      },
      {
        // 4th
        url: "/images/project/GalleryLouis/Gallery Louis_9.png",
        text: "게임 모드",
        type: "vertical",
      },
      {
        url: "/images/project/GalleryLouis/Gallery Louis_10.gif",
        text: "핀볼 게임 1",
        type: "vertical",
      },
      {
        url: "/images/project/GalleryLouis/Gallery Louis_11.gif",
        text: "핀볼 게임 2",
        type: "vertical",
      },
      {
        // 5th
        url: "/images/project/GalleryLouis/Gallery Louis_12.gif",
        text: "핀볼 게임 3",
        type: "vertical",
      },
      {
        url: "/images/project/GalleryLouis/Gallery Louis_13.png",
        text: "캐릭터 수집",
        type: "vertical",
      },
      {
        url: "/images/project/GalleryLouis/Gallery Louis_14.gif",
        text: "상점",
        type: "vertical",
      },
      {
        // 6th
        url: "/images/project/GalleryLouis/Gallery Louis_15.gif",
        text: "뽑기 1",
        type: "vertical",
      },
      {
        url: "/images/project/GalleryLouis/Gallery Louis_16.gif",
        text: "뽑기 2",
        type: "vertical",
      },
      {
        url: "/images/project/GalleryLouis/Gallery Louis_17.png",
        text: "메뉴 탭",
        type: "vertical",
      },
      {
        // 7th
        url: "/images/project/GalleryLouis/Gallery Louis_18.png",
        text: "등급 정보",
        type: "vertical",
      },
      {
        url: "/images/project/GalleryLouis/Gallery Louis_19.png",
        text: "컬렉션",
        type: "vertical",
      },
      {
        url: "/images/project/GalleryLouis/Gallery Louis_20.png",
        text: "이름 설정",
        type: "vertical",
      },
      {
        // 8th
        url: "/images/project/GalleryLouis/Gallery Louis_21.png",
        text: "이벤트 1",
        type: "vertical",
      },
      {
        url: "/images/project/GalleryLouis/Gallery Louis_22.png",
        text: "이벤트 2",
        type: "vertical",
      },
    ],
    history: [
      {
        name: "프로젝트에서 작업한 내용",
        list: [
          {
            title: "아트 총괄",
            content: [
              { text: "아트 리소스 전반 제작", type: "text" },
              { text: "마케팅 이미지 및 게임 소개 영상 제작", type: "text" },
            ],
          },
        ],
      },
      {
        name: "프로젝트를 통해 얻은 경험",
        list: [
          {
            title: "연출 기술 숙련",
            content: [
              {
                text: "유니티 파티클 시스템의 다양한 기능과 설정을 익히고, 여러 빛 연출을 자유롭게 구현하는 데 능숙해졌습니다. 또한 창의적인 아이디어를 활용해 독창적인 시각 효과를 구현할 수 있게 되었습니다.",
                type: "text",
              },
            ],
          },
          {
            title: "연출과 심리학의 결합",
            content: [
              {
                text: "화려하고 역동적인 연출로 사용자의 흥미를 끌어 게임의 몰입도를 높이는 데 기여했습니다.",
                type: "text",
              },
            ],
          },
        ],
      },
    ],
  },

  // Arena Go
  {
    name: "Arena Go",
    genre: ["모바일", "캐주얼", "시뮬레이션"],
    date: "2020.08-2021.03",
    listDescription: "",
    description:
      "‘아레나 고’는 1:1 시뮬레이션 게임으로,<br/> 귀엽고 특색 있는 캐릭터와 다양한 무기를 조합해 상대와의 전투를 즐기는 게임입니다.",
    iconUrl: [
      "/images/icon/Icon_Tool_Unity.png",
      "/images/icon/Icon_Tool_Ps.png",
      "/images/icon/Icon_Tool_Ai.png",
    ],
    imageUrl: [
      "/images/project/ArenaGo/Arena Go.png",
      "/images/project/ArenaGo/ArenaGo_Movie.webp",
    ],
    type: "horizontal",
    source: "WebP 포맷을 지원하는 브라우저에서 열어주세요. 영상을 불러오는 데 시간이 걸릴 수 있습니다. 영상이 표시되지 않으면 새로고침해 주세요.",
    detailImage: [
      {
        // 1st
        url: "/images/project/ArenaGo/Arena Go.png",
        text: "로딩 화면",
        type: "horizontal",
      },
      {
        url: "/images/project/ArenaGo/ArenaGo_Movie.webp",
        text: "게임 영상",
        type: "horizontal",
      },
      {
        url: "/images/project/ArenaGo/Arena Go_1.png",
        text: "메인 화면",
        type: "horizontal",
      },
      {
        // 2nd
        url: "/images/project/ArenaGo/Arena Go_2.gif",
        text: "인게임 1",
        type: "horizontal",
      },
      {
        url: "/images/project/ArenaGo/Arena Go_3.png",
        text: "인게임 2",
        type: "horizontal",
      },
      {
        url: "/images/project/ArenaGo/Arena Go_4.gif",
        text: "인게임 3",
        type: "horizontal",
      },
      {
        // 3rd
        url: "/images/project/ArenaGo/Arena Go_5.gif",
        text: "승리 연출",
        type: "horizontal",
      },
      {
        url: "/images/project/ArenaGo/Arena Go_6.gif",
        text: "패배 연출",
        type: "horizontal",
      },
      {
        url: "/images/project/ArenaGo/Arena Go_7.gif",
        text: "복수 모드",
        type: "horizontal",
      },
      {
        // 4th
        url: "/images/project/ArenaGo/Arena Go_8.gif",
        text: "복수 성공",
        type: "horizontal",
      },
      {
        url: "/images/project/ArenaGo/Arena Go_9.png",
        text: "아이템 정보",
        type: "horizontal",
      },
      {
        url: "/images/project/ArenaGo/Arena Go_10.png",
        text: "캐릭터 정보",
        type: "horizontal",
      },
      {
        // 5th
        url: "/images/project/ArenaGo/Arena Go_11.gif",
        text: "업그레이드",
        type: "horizontal",
      },
      {
        url: "/images/project/ArenaGo/Arena Go_12.png",
        text: "등급 패스",
        type: "horizontal",
      },
      {
        url: "/images/project/ArenaGo/Arena Go_13.png",
        text: "게임 모드 선택",
        type: "horizontal",
      },
      {
        // 6th
        url: "/images/project/ArenaGo/Arena Go_14.png",
        text: "어드벤처 모드 1",
        type: "horizontal",
      },
      {
        url: "/images/project/ArenaGo/Arena Go_15.png",
        text: "어드벤처 모드 2",
        type: "horizontal",
      },
      {
        url: "/images/project/ArenaGo/Arena Go_16.png",
        text: "어드벤처 모드 3",
        type: "horizontal",
      },
      {
        // 7th
        url: "/images/project/ArenaGo/Arena Go_17.png",
        text: "출석부",
        type: "horizontal",
      },
      {
        url: "/images/project/ArenaGo/Arena Go_18.png",
        text: "퀘스트",
        type: "horizontal",
      },
      {
        url: "/images/project/ArenaGo/Arena Go_19.png",
        text: "설정",
        type: "horizontal",
      },
      {
        // 8th
        url: "/images/project/ArenaGo/Arena Go_20.png",
        text: "상점",
        type: "horizontal",
      },
      {
        url: "/images/project/ArenaGo/Arena Go_21.png",
        text: "배경 1",
        type: "horizontal",
      },
      {
        url: "/images/project/ArenaGo/Arena Go_22.png",
        text: "배경 2",
        type: "horizontal",
      },
      {
        // 9th
        url: "/images/project/ArenaGo/Arena Go_23.png",
        text: "배경 3",
        type: "horizontal",
      },
      {
        url: "/images/project/ArenaGo/Arena Go_24.png",
        text: "배경 4",
        type: "horizontal",
      },
      {
        url: "/images/project/ArenaGo/Arena Go_25.png",
        text: "배경 5",
        type: "horizontal",
      },
    ],
    history: [
      {
        name: "프로젝트에서 작업한 내용",
        list: [
          {
            title: "아트 총괄",
            content: [
              { text: "UI/UX 전반 제작", type: "text" },
              { text: "인게임 배경 전반 제작", type: "text" },
              { text: "캐릭터 스킨 다수 제작", type: "text" },
              { text: "모든 이펙트 제작", type: "text" },
              { text: "마케팅 이미지 및 게임 소개 영상 제작", type: "text" },
            ],
          },
        ],
      },
      {
        name: "프로젝트를 통해 얻은 경험",
        list: [
          {
            title: "디자인 콘셉트에 맞는 아트 리소스 제작",
            content: [
              {
                text: "창의적인 캐릭터 콘셉트를 바탕으로 독특하고 특색 있는 아트 리소스를 제작하면서 더욱 넓은 안목을 갖게 되었습니다.<br/> 다른 아티스트들과 교류하며 새로운 시각적 아이디어를 얻고, 작업을 보완해 차별화된 아트 리소스를 제작할 수 있게 되었습니다.",
                type: "text",
              },
            ],
          },
        ],
      },
    ],
  },

  // Random Dice
  {
    name: "Random Dice",
    genre: ["모바일", "캐주얼", "1:1 디펜스"],
    date: "2019.01-2020.08",
    listDescription: "",
    description:
      "‘랜덤 다이스’는 1:1 전략 디펜스를 모바일에 적합한 형태로 구현하여 사용자의 경쟁심과 도전 욕구를 자극하는 게임입니다.",
    iconUrl: [
      "/images/icon/Icon_Tool_Unity.png",
      "/images/icon/Icon_Tool_Ps.png",
      "/images/icon/Icon_Tool_Ai.png",
    ],
    imageUrl: [
      "/images/project/RandomDice/Random Dice_0.png",
      "/images/project/RandomDice/Random Dice.webp",
      "/images/project/RandomDice/Random Dice_1.png",
      "/images/project/RandomDice/Random Dice_2.png",
    ],
    type: "vertical",
    source: "WebP 포맷을 지원하는 브라우저에서 열어주세요. 영상을 불러오는 데 시간이 걸릴 수 있습니다. 영상이 표시되지 않으면 새로고침해 주세요.",
    detailImage: [
      {
        // 1st
        url: "/images/project/RandomDice/Random Dice_0.png",
        text: "로딩 화면",
        type: "vertical",
      },
      {
        url: "/images/project/RandomDice//Random Dice.webp",
        text: "튜토리얼 영상",
        type: "vertical",
      },
      {
        url: "/images/project/RandomDice/Random Dice_1.png",
        text: "메인 화면",
        type: "vertical",
      },
      {
        // 2nd
        url: "/images/project/RandomDice/Random Dice_2.png",
        text: "매칭 화면",
        type: "vertical",
      },
      {
        url: "/images/project/RandomDice/Random Dice_3.png",
        text: "주사위 세팅 1",
        type: "vertical",
      },
      {
        url: "/images/project/RandomDice/Random Dice_4.png",
        text: "주사위 세팅 2",
        type: "vertical",
      },
      {
        // 3rd
        url: "/images/project/RandomDice/Random Dice_5.png",
        text: "주사위 정보",
        type: "vertical",
      },
      {
        url: "/images/project/RandomDice/Random Dice_6.png",
        text: "주사위 업그레이드",
        type: "vertical",
      },
      {
        url: "/images/project/RandomDice/Random Dice_7.png",
        text: "퀘스트",
        type: "vertical",
      },
      {
        // 4th
        url: "/images/project/RandomDice/Random Dice_8.png",
        text: "메뉴 탭",
        type: "vertical",
      },
      {
        url: "/images/project/RandomDice/Random Dice_9.png",
        text: "상점",
        type: "vertical",
      },
      {
        url: "/images/project/RandomDice/Random Dice_10.png",
        text: "랜덤다이스 크루",
        type: "vertical",
      },
      {
        // 5th
        url: "/images/project/RandomDice/Random Dice_11.png",
        text: "리디자인 - 메인 화면",
        type: "vertical",
      },
      {
        url: "/images/project/RandomDice/Random Dice_12.gif",
        text: "리디자인 - 인게임",
        type: "vertical",
      },
      {
        url: "/images/project/RandomDice/Random Dice_13.gif",
        text: "리디자인 - 인게임 승리",
        type: "vertical",
      },
      {
        // 6th
        url: "/images/project/RandomDice/Random Dice_14.png",
        text: "리디자인 - 주사위 세팅 1",
        type: "vertical",
      },
      {
        url: "/images/project/RandomDice/Random Dice_15.png",
        text: "리디자인 - 주사위 세팅 2",
        type: "vertical",
      },
      {
        url: "/images/project/RandomDice/Random Dice_16.png",
        text: "리디자인 - 주사위 세팅 3",
        type: "vertical",
      },
      {
        // 7th
        url: "/images/project/RandomDice/Random Dice_17.gif",
        text: "리디자인 - 뽑기 연출",
        type: "vertical",
      },
      {
        url: "/images/project/RandomDice/Random Dice_18.png",
        text: "리디자인 - 이모티콘",
        type: "vertical",
      },
      {
        url: "/images/project/RandomDice/Random Dice_19.png",
        text: "리디자인 - 메뉴 탭",
        type: "vertical",
      },
      {
        // 8th
        url: "/images/project/RandomDice/Random Dice_20.png",
        text: "리디자인 - 랜덤다이스 크루 1",
        type: "vertical",
      },
      {
        url: "/images/project/RandomDice/Random Dice_21.png",
        text: "리디자인 - 랜덤다이스 크루 2",
        type: "vertical",
      },
      {
        url: "/images/project/RandomDice/Random Dice_22.png",
        text: "리디자인 - 랜덤다이스 크루 3",
        type: "vertical",
      },
      {
        // 9th
        url: "/images/project/RandomDice/Random Dice_23.gif",
        text: "이모티콘 1",
        type: "vertical",
      },
      {
        url: "/images/project/RandomDice/Random Dice_24.gif",
        text: "이모티콘 2",
        type: "vertical",
      },
      {
        url: "/images/project/RandomDice/Random Dice_25.gif",
        text: "이모티콘 3",
        type: "vertical",
      },
      {
        // 10th
        url: "/images/project/RandomDice/Random Dice_26.gif",
        text: "이모티콘 4",
        type: "vertical",
      },
      {
        url: "/images/project/RandomDice/Random Dice_27.gif",
        text: "이모티콘 5",
        type: "vertical",
      },
      {
        url: "/images/project/RandomDice/Random Dice_28.gif",
        text: "이모티콘 6",
        type: "vertical",
      },
      {
        // 9th
        url: "/images/project/RandomDice/Random Dice_29.gif",
        text: "이모티콘 7",
        type: "vertical",
      },
      {
        url: "/images/project/RandomDice/Random Dice_30.gif",
        text: "이모티콘 8",
        type: "vertical",
      },
      {
        url: "/images/project/RandomDice/Random Dice_31.gif",
        text: "이모티콘 9",
        type: "vertical",
      },
      {
        // 10th
        url: "/images/project/RandomDice/Random Dice_32.gif",
        text: "이모티콘 10",
        type: "vertical",
      },
    ],
    history: [
      {
        name: "프로젝트에서 작업한 내용",
        list: [
          {
            title: "아트 총괄",
            content: [
              { text: "모든 GUI 제작", type: "text" },
              { text: "모든 오브젝트 제작", type: "text" },
              { text: "모든 연출 제작", type: "text" },
              { text: "모든 이펙트 제작", type: "text" },
              { text: "마케팅 이미지 및 게임 소개 영상 제작", type: "text" },
            ],
          },
        ],
      },
      {
        name: "프로젝트를 통해 얻은 경험",
        list: [
          {
            title: "게임 내 아트 리소스 제작 전반에 대한 이해",
            content: [
              {
                text: "소수 인원으로 시작해 구성원 각자의 역할이 중요한 프로젝트였기에 아트 리소스 전반에 대한 역량이 필요했고, 게임 내 아트 리소스의 조화를 맞추는 능력이 향상되었습니다.",
                type: "text",
              },
            ],
          },
          {
            title: "디자인 리소스 제작 일정 관리",
            content: [
              {
                text: "개발자와 협업하며 충분히 소통한 결과, 서로의 업무 일정에 맞춘 스케줄 관리에 능숙해졌고 다른 직군의 일정에 대한 이해도도 향상되었습니다.",
                type: "text",
              },
            ],
          },
          {
            title: "유저 피드백에 대한 즉각적인 대응",
            content: [
              {
                text: "게임 출시 후 다양한 소통 창구에서 사용자 의견을 취합하고 이후 업데이트에 반영하여 게임을 개선할 수 있었습니다.",
                type: "text",
              },
            ],
          },
        ],
      },
    ],
  },
];
