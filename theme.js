const singers = [
  {
    id: "gnight",
    name: "Gnight",
    image: "./assets/gnight.jpg",
    previewTitle: "Miss Riddle",
    previewAudio: "./assets/audio/gnight-miss-riddle-preview.wav",
    tags: ["青叔音", "慵懒", "流行", "苦情", "爵士"],
    schedule: "上午 8:00-12:00",
    liveUrl: "",
    audition: "",
    sourceNote: "歌单已根据微信 OCR 文本整理导入；后续仍建议人工校对错字和漏歌。",
    songs: [
      ["别", "", "中文", "微信OCR初稿", "薛之谦"],
      ["她", "", "中文", "微信OCR初稿", "苏打绿"],
      ["我", "", "中文", "微信OCR初稿", "蔡依林"],
      ["窗", "", "中文", "微信OCR初稿", "吴青峰"],
      ["蓝", "", "中文", "微信OCR初稿", "陈奕迅"],
      ["不搭", "", "中文", "微信OCR初稿", "李荣浩"],
      ["乞丐", "", "中文", "微信OCR初稿", "刘宇宁"],
      ["人质", "", "中文", "微信OCR初稿", "张惠妹"],
      ["仇敌", "", "中文", "微信OCR初稿", "陈柏宇"],
      ["你走", "", "中文", "微信OCR初稿", "松紧先生"],
      ["出卖", "", "中文", "微信OCR初稿", "那英"],
      ["只你", "", "中文", "微信OCR初稿", "颜人中"],
      ["可乐", "", "中文", "微信OCR初稿", "赵紫骅"],
      ["同类", "", "中文", "微信OCR初稿", "孙燕姿"],
      ["后来", "", "中文", "微信OCR初稿", "刘若英"],
      ["咖啡", "", "中文", "微信OCR初稿", "张学友"],
      ["哪吒", "", "中文", "微信OCR初稿", "GAI周延"],
      ["嘉宾", "", "中文", "微信OCR初稿", "张远"],
      ["嚣张", "", "中文", "微信OCR初稿", "en"],
      ["墙角", "", "中文", "微信OCR初稿", "苟瀚中"],
      ["太阳", "", "中文", "微信OCR初稿", "邱振哲"],
      ["安静", "", "中文", "微信OCR初稿", "周杰伦"],
      ["山海", "", "中文", "微信OCR初稿", "草东没有派对"],
      ["当你", "", "中文", "微信OCR初稿", "王心凌"],
      ["心跳", "", "中文", "微信OCR初稿", "王力宏"],
      ["忽然", "", "中文", "微信OCR初稿", "李志"],
      ["恋人", "", "中文", "微信OCR初稿", "李荣浩"],
      ["想象", "", "中文", "微信OCR初稿", "蔡健雅"],
      ["慢慢", "", "中文", "微信OCR初稿", "张学友"],
      ["懦弱", "", "中文", "微信OCR初稿", "TRASH"],
      ["成全", "", "中文", "微信OCR初稿", "刘若英"],
      ["我们", "", "中文", "微信OCR初稿", "陈奕迅"],
      ["戒烟", "", "中文", "微信OCR初稿", "李荣浩"],
      ["无问", "", "中文", "微信OCR初稿", "毛不易"],
      ["晚安", "", "中文", "微信OCR初稿", "颜人中"],
      ["晚星", "", "中文", "微信OCR初稿", "唐汉霄"],
      ["暗香", "", "中文", "微信OCR初稿", "沙宝亮"],
      ["朝夕", "", "中文", "微信OCR初稿", "檀健次"],
      ["李白", "", "中文", "微信OCR初稿", "李荣浩"],
      ["模特", "", "中文", "微信OCR初稿", "李荣浩"],
      ["歌者", "", "中文", "微信OCR初稿", "田嘉瑞"],
      ["泪桥", "", "中文", "微信OCR初稿", "伍佰"],
      ["浮生", "", "中文", "微信OCR初稿", "刘莱斯"],
      ["淘汰", "", "中文", "微信OCR初稿", "陈奕迅"],
      ["满座", "", "中文", "微信OCR初稿", "李荣浩"],
      ["烟波", "", "中文", "微信OCR初稿", "黄恺/八萬和"],
      ["狂妄", "", "中文", "微信OCR初稿", "李昊晨"],
      ["王妃", "", "中文", "微信OCR初稿", "萧敬腾"],
      ["男孩", "", "中文", "微信OCR初稿", "梁博"],
      ["耗尽", "", "中文", "微信OCR初稿", "薛之谦/郭聪明"],
      ["自拍", "", "中文", "微信OCR初稿", "陈慧敏"],
      ["色盲", "", "中文", "微信OCR初稿", "梁咏琪"],
      ["要命", "", "中文", "微信OCR初稿", "丁当"],
      ["觥筹", "", "中文", "微信OCR初稿", "白举纲"],
      ["让酒", "", "中文", "微信OCR初稿", "摩登兄弟刘宇宁"],
      ["记得", "", "中文", "微信OCR初稿", "张惠妹"],
      ["说谎", "", "中文", "微信OCR初稿", "林宥嘉"],
      ["趁早", "", "中文", "微信OCR初稿", "张惠妹"],
      ["路口", "", "中文", "微信OCR初稿", "张震岳"],
      ["迟迟", "", "中文", "微信OCR初稿", "薛之谦"],
      ["遗憾", "", "中文", "微信OCR初稿", "许美静"],
      ["难道", "", "中文", "微信OCR初稿", "羽泉"],
      ["领悟", "", "中文", "微信OCR初稿", "辛晓琪"],
      ["麻雀", "", "中文", "微信OCR初稿", "李荣浩"],
      ["4am", "", "中文", "微信OCR初稿", "Justin Stone"],
      ["不将就", "", "中文", "微信OCR初稿", "李荣浩"],
      ["不找了", "", "中文", "微信OCR初稿", "郭旭"],
      ["不等你", "", "中文", "微信OCR初稿", "汪苏泷"],
      ["代名词", "", "中文", "微信OCR初稿", "en (王翊恩)"],
      ["作曲家", "", "中文", "微信OCR初稿", "李荣浩"],
      ["十二楼", "", "中文", "微信OCR初稿", "莫文蔚"],
      ["南山南", "", "中文", "微信OCR初稿", "马頔"],
      ["太坦白", "", "中文", "微信OCR初稿", "李荣浩"],
      ["小幸运", "", "中文", "微信OCR初稿", "田馥甄"],
      ["忘了她", "", "中文", "微信OCR初稿", "阙智光"],
      ["慢慢等", "", "中文", "微信OCR初稿", "韦礼安"],
      ["我们俩", "", "中文", "微信OCR初稿", "郭顶"],
      ["我很忙", "", "中文", "微信OCR初稿", "周杰伦"],
      ["我要你", "", "中文", "微信OCR初稿", "任素汐"],
      ["探险家", "", "中文", "微信OCR初稿", "G.E.M.邓紫棋"],
      ["有没有", "", "中文", "微信OCR初稿", "韦礼安"],
      ["梦一场", "", "中文", "微信OCR初稿", "那英"],
      ["水星记", "", "中文", "微信OCR初稿", "郭顶"],
      ["流浪记", "", "中文", "微信OCR初稿", "杨宗纬"],
      ["烂笑话", "", "中文", "微信OCR初稿", "薛之谦"],
      ["独角戏", "", "中文", "微信OCR初稿", "许茹芸"],
      ["真没睡", "", "中文", "微信OCR初稿", "阿张"],
      ["空白格", "", "中文", "微信OCR初稿", "蔡健雅"],
      ["红玫瑰", "", "中文", "微信OCR初稿", "陈奕迅"],
      ["褪黑素", "", "中文", "微信OCR初稿", "林宥嘉"],
      ["谢谢侬", "", "中文", "微信OCR初稿", "陈奕迅"],
      ["达尔文", "", "中文", "微信OCR初稿", "蔡健雅"],
      ["鹿回头", "", "中文", "微信OCR初稿", "陈楚生"],
      ["一次就好", "", "中文", "微信OCR初稿", "杨宗纬"],
      ["你的拥抱", "", "中文", "微信OCR初稿", "王心凌"],
      ["你要的爱", "", "中文", "微信OCR初稿", "戴佩妮"],
      ["写给黄淮", "", "中文", "微信OCR初稿", "解忧邵帅"],
      ["千金散尽", "", "中文", "微信OCR初稿", "小魂"],
      ["友情卡片", "", "中文", "微信OCR初稿", "陈奕迅"],
      ["双鱼玉佩", "", "中文", "微信OCR初稿", "Ice Paper"],
      ["喜剧之王", "", "中文", "微信OCR初稿", "李荣浩"],
      ["夜游歌神", "", "中文", "微信OCR初稿", "Ice Paper"],
      ["天外来物", "", "中文", "微信OCR初稿", "薛之谦"],
      ["天若有情", "", "中文", "微信OCR初稿", "袁凤瑛"],
      ["失恋无罪", "", "中文", "微信OCR初稿", "A-Lin"],
      ["好久不见", "", "中文", "微信OCR初稿", "陈奕迅"],
      ["孤独患者", "", "中文", "微信OCR初稿", "陈奕迅"],
      ["寒鸦少年", "", "中文", "微信OCR初稿", "华晨宇"],
      ["年少有为", "", "中文", "微信OCR初稿", "李荣浩"],
      ["往日如风", "", "中文", "微信OCR初稿", "齐秦"],
      ["忽然之间", "", "中文", "微信OCR初稿", "莫文蔚"],
      ["恍如隔世", "", "中文", "微信OCR初稿", "陈奕迅"],
      ["懂得寂寞", "", "中文", "微信OCR初稿", "陈奕迅"],
      ["我不知道", "", "中文", "微信OCR初稿", "陈伟霆"],
      ["我不难过", "", "中文", "微信OCR初稿", "孙燕姿"],
      ["我好想你", "", "中文", "微信OCR初稿", "苏打绿"],
      ["我怀念的", "", "中文", "微信OCR初稿", "孙燕姿"],
      ["我爱的人", "", "中文", "微信OCR初稿", "陈小春"],
      ["我要的爱", "", "中文", "微信OCR初稿", "戴佩妮"],
      ["或许我们", "", "中文", "微信OCR初稿", "王蓝茵"],
      ["摩登爱情", "", "中文", "微信OCR初稿", "刘美麟"],
      ["新不了情", "", "中文", "微信OCR初稿", "万芳"],
      ["方圆几里", "", "中文", "微信OCR初稿", "薛之谦"],
      ["无关于你", "", "中文", "微信OCR初稿", "阿YueYue"],
      ["无法停靠", "", "中文", "微信OCR初稿", "柯泯薰"],
      ["最远的你", "", "中文", "微信OCR初稿", "车继铃"],
      ["有生之年", "", "中文", "微信OCR初稿", "张远"],
      ["残酷月光", "", "中文", "微信OCR初稿", "林宥嘉"],
      ["浓缩蓝鲸", "", "中文", "微信OCR初稿", "王睿卓"],
      ["爱人错过", "", "中文", "微信OCR初稿", "告五人"],
      ["爱我别走", "", "中文", "微信OCR初稿", "张震岳"],
      ["爱的代价", "", "中文", "微信OCR初稿", "张艾嘉"],
      ["独家记忆", "", "中文", "微信OCR初稿", "陈小春"],
      ["理想三旬", "", "中文", "微信OCR初稿", "陈鸿宇"],
      ["疑难杂症", "", "中文", "微信OCR初稿", "陈粒"],
      ["破镜重圆", "", "中文", "微信OCR初稿", "指南针乐队"],
      ["竹篮打水", "", "中文", "微信OCR初稿", "徐秉龙"],
      ["致你所爱", "", "中文", "微信OCR初稿", "房东的猫"],
      ["落地之前", "", "中文", "微信OCR初稿", "郭顶"],
      ["说给你听", "", "中文", "微信OCR初稿", "李行亮"],
      ["轻描淡写", "", "中文", "微信OCR初稿", "陈奕迅"],
      ["近我者甜", "", "中文", "微信OCR初稿", "鹿晗"],
      ["迷途之中", "", "中文", "微信OCR初稿", "李荣浩"],
      ["逝去的爱", "", "中文", "微信OCR初稿", "欧阳菲菲"],
      ["那就晚安", "", "中文", "微信OCR初稿", "张远"],
      ["都市沙漠", "", "中文", "微信OCR初稿", "陶喆"],
      ["需要人陪", "", "中文", "微信OCR初稿", "王力宏"],
      ["风华正茂", "", "中文", "微信OCR初稿", "李宇春"],
      ["黄色枫叶", "", "中文", "微信OCR初稿", "薛之谦"],
      ["黑色柳丁", "", "中文", "微信OCR初稿", "陶喆"],
      ["Simon", "", "中文", "微信OCR初稿", "丁世光"],
      ["不要再说了", "", "中文", "微信OCR初稿", "陈奕迅"],
      ["不跟你好了", "", "中文", "微信OCR初稿", "于冬然"],
      ["会呼吸的痛", "", "中文", "微信OCR初稿", "梁静茹"],
      ["会痛的石头", "", "中文", "微信OCR初稿", "萧敬腾"],
      ["你给我听好", "", "中文", "微信OCR初稿", "陈奕迅"],
      ["八月二十九", "", "中文", "微信OCR初稿", "夏日入侵企画"],
      ["其实都没有", "", "中文", "微信OCR初稿", "杨宗纬"],
      ["出现又离开", "", "中文", "微信OCR初稿", "梁博"],
      ["只是太爱你", "", "中文", "微信OCR初稿", "张敬轩"],
      ["可以不是你", "", "中文", "微信OCR初稿", "不是花火"],
      ["可惜不是你", "", "中文", "微信OCR初稿", "梁静茹"],
      ["吻得太逼真", "", "中文", "微信OCR初稿", "张敬轩"],
      ["如果你爱我", "", "中文", "微信OCR初稿", "张韶涵"],
      ["如果没有你", "", "中文", "微信OCR初稿", "莫文蔚"],
      ["如果没确定", "", "中文", "微信OCR初稿", "房东的猫"],
      ["我们都寂寞", "", "中文", "微信OCR初稿", "陈奕迅"],
      ["最长的电影", "", "中文", "微信OCR初稿", "周杰伦"],
      ["爱我还是他", "", "中文", "微信OCR初稿", "陶喆"],
      ["突然想起你", "", "中文", "微信OCR初稿", "萧亚轩"],
      ["算什么男人", "", "中文", "微信OCR初稿", "周杰伦"],
      ["红色高跟鞋", "", "中文", "微信OCR初稿", "蔡健雅"],
      ["给我一个吻", "", "中文", "微信OCR初稿", "张露"],
      ["给自己的歌", "", "中文", "微信OCR初稿", "李宗盛"],
      ["走钢索的人", "", "中文", "微信OCR初稿", "李泉"],
      ["Melody", "", "中文", "微信OCR初稿", "陶喆"],
      ["一个人一座城", "", "中文", "微信OCR初稿", "王北车"],
      ["你一定要幸福", "", "中文", "微信OCR初稿", "何洁"],
      ["像晴天像雨天", "", "中文", "微信OCR初稿", "汪苏泷"],
      ["某年某月某天", "", "中文", "微信OCR初稿", "Energy"],
      ["流着泪说分手", "", "中文", "微信OCR初稿", "金志文"],
      ["走得很慢的人", "", "中文", "微信OCR初稿", "方大同"],
      ["阿拉斯加海湾", "", "中文", "微信OCR初稿", "菲道尔"],
      ["Tonight", "", "中文", "微信OCR初稿", "Westlife"],
      ["你就不要想起我", "", "中文", "微信OCR初稿", "田馥甄"],
      ["土坡上的狗尾草", "", "中文", "微信OCR初稿", "卢润泽"],
      ["当我不在你身边", "", "中文", "微信OCR初稿", "陈奕迅"],
      ["怎么说我不爱你", "", "中文", "微信OCR初稿", "萧敬腾"],
      ["怪我更爱我自己", "", "中文", "微信OCR初稿", "王靖雯不胖"],
      ["梦在黎明破晓时", "", "中文", "微信OCR初稿", "张韶涵"],
      ["看着我的眼睛说", "", "中文", "微信OCR初稿", "告五人"],
      ["给月亮的三行诗", "", "中文", "微信OCR初稿", "房东的猫"],
      ["阿尔茨海默的爱", "", "中文", "微信OCR初稿", "梁文音"],
      ["一首你不会听的歌", "", "中文", "微信OCR初稿", "黄霄雲"],
      ["在加纳共和国离婚", "", "中文", "微信OCR初稿", "菲道尔/Dior大颖"],
      ["天下的乌鸦一般黑", "", "中文", "微信OCR初稿", "队长"],
      ["她来听我的演唱会", "", "中文", "微信OCR初稿", "张学友"],
      ["莫比乌斯号的船医", "", "中文", "微信OCR初稿", "植物椿"],
      ["Beautiful", "", "中文", "微信OCR初稿", "Christina Aguilera"],
      ["女人不该让男人太累", "", "中文", "微信OCR初稿", "陈小春"],
      ["当我再见到你的时候", "", "中文", "微信OCR初稿", "陈奕迅"],
      ["爱你是我最初的梦想", "", "中文", "微信OCR初稿", "孙俪"],
      ["世间美好与你环环相扣", "", "中文", "微信OCR初稿", "柏松"],
      ["我喜欢的人都跟你好像", "", "中文", "微信OCR初稿", "余佳运"],
      ["天秤座你好，我也是天平", "", "中文", "微信OCR初稿", "棱镜"],
      ["乖乖啊，今天的你也辛苦了", "", "中文", "微信OCR初稿", "队长"],
      ["Home", "", "英文", "微信OCR初稿", "Michael Bublé"],
      ["You!", "", "英文", "微信OCR初稿", "LANY"],
      ["Creep", "", "英文", "微信OCR初稿", "Radiohead"],
      ["Emily", "", "英文", "微信OCR初稿", "Bruno Major"],
      ["Toxic", "", "英文", "微信OCR初稿", "Britney Spears"],
      ["Demons", "", "英文", "微信OCR初稿", "Imagine Dragons"],
      ["Easily", "", "英文", "微信OCR初稿", "Bruno Major"],
      ["Sharks", "", "英文", "微信OCR初稿", "Imagine Dragons"],
      ["Suffer", "", "英文", "微信OCR初稿", "Charlie Puth"],
      ["Closure", "", "英文", "微信OCR初稿", "Hayd"],
      ["Gravity", "", "英文", "微信OCR初稿", "John Mayer"],
      ["Hey Jude", "", "英文", "微信OCR初稿", "The Beatles"],
      ["L.O.V.E", "", "英文", "微信OCR初稿", "Nat King Cole"],
      ["Nothing", "", "英文", "微信OCR初稿", "Bruno Major"],
      ["Perfect", "", "英文", "微信OCR初稿", "Ed Sheeran"],
      ["Your Man", "", "英文", "微信OCR初稿", "Josh Turner"],
      ["Diamonds", "", "英文", "微信OCR初稿", "Rihanna"],
      ["Free Loop", "", "英文", "微信OCR初稿", "Daniel Powter"],
      ["Remember", "", "英文", "微信OCR初稿", "KATIE"],
      ["Thank You", "", "英文", "微信OCR初稿", "Dido"],
      ["That's Us", "", "英文", "微信OCR初稿", "Anson Seabra"],
      ["Apologize", "", "英文", "微信OCR初稿", "OneRepublic"],
      ["Mam' selle", "", "英文", "微信OCR初稿", "Art Lund"],
      ["Moody Wind", "", "英文", "微信OCR初稿", "Anthony Lazaro"],
      ["Moon River", "", "英文", "微信OCR初稿", "Audrey Hepburn"],
      ["Put It On Me", "", "英文", "微信OCR初稿", "Matt Maeson"],
      ["Close To You", "", "英文", "微信OCR初稿", "The Carpenters"],
      ["Mad sex cool", "", "英文", "微信OCR初稿", "Babyface"],
      ["Miss Riddle", "", "英文", "微信OCR初稿", "Boz Scaggs"],
      ["Say It Again", "", "英文", "微信OCR初稿", "Marie Digby"],
      ["Shape of You", "", "英文", "微信OCR初稿", "Ed Sheeran"],
      ["Before You Go", "", "英文", "微信OCR初稿", "Lewis Capaldi"],
      ["Cry Me A River", "", "英文", "微信OCR初稿", "Julie London"],
      ["Feeling Good", "", "英文", "微信OCR初稿", "Cy Grant"],
      ["Tainted Love", "", "英文", "微信OCR初稿", "Gloria Jones"],
      ["What Did I Do?", "", "英文", "微信OCR初稿", "Hayd"],
      ["Autumn Leaves", "", "英文", "微信OCR初稿", "Jo Stafford"],
      ["Kissing A Fool", "", "英文", "微信OCR初稿", "George Michael"],
      ["Say Something", "", "英文", "微信OCR初稿", "A Great Big World"],
      ["Through It All", "", "英文", "微信OCR初稿", "Charlie Puth"],
      ["Christmas List", "", "英文", "微信OCR初稿", "Anson Seabra"],
      ["Counting Stars", "", "英文", "微信OCR初稿", "OneRepublic"],
      ["Last Christmas", "", "英文", "微信OCR初稿", "Wham!"],
      ["Man On A Mission", "", "英文", "微信OCR初稿", "Oh The Larceny"],
      ["Outlaws Of Love", "", "英文", "微信OCR初稿", "Adam Lambert"],
      ["To Be Forgotten", "", "英文", "微信OCR初稿", "Bruno Major"],
      ["A Thousand Years", "", "英文", "微信OCR初稿", "Christina Perri"],
      ["Blue Suede Shoes", "", "英文", "微信OCR初稿", "Carl Perkins"],
      ["Fly Me To The Moon", "", "英文", "微信OCR初稿", "Kaye Ballard"],
      ["Just the Two of Us", "", "英文", "微信OCR初稿", "Grover Washington Jr. feat. Bill Withers"],
      ["Love You Anymore", "", "英文", "微信OCR初稿", "Michael Bublé"],
      ["Ain' t No Sunshine", "", "英文", "微信OCR初稿", "Bill Withers"],
      ["Give Me One Reason", "", "英文", "微信OCR初稿", "Tracy Chapman"],
      ["Head In The Clouds", "", "英文", "微信OCR初稿", "Hayd"],
      ["Hindenburg Lover", "", "英文", "微信OCR初稿", "Anson Seabra"],
      ["Honeysuckle Rose", "", "英文", "微信OCR初稿", "Fats Waller"],
      ["Someone You Loved", "", "英文", "微信OCR初稿", "Lewis Capaldi"],
      ["Sunday Breakfast", "", "英文", "微信OCR初稿", "Michael Seyer"],
      ["Peter Pan Was Right", "", "英文", "微信OCR初稿", "Anson Seabra"],
      ["Rolling In The Deep", "", "英文", "微信OCR初稿", "Adele"],
      ["Silhouettes Of You", "", "英文", "微信OCR初稿", "Isaac Gracie"],
      ["The Sensitive Kind", "", "英文", "微信OCR初稿", "J.J. Cale"],
      ["Make You Feel My Love", "", "英文", "微信OCR初稿", "Bob Dylan"],
      ["You Are So Beautiful", "", "英文", "微信OCR初稿", "Billy Preston"],
      ["Supermarket Flowers", "", "英文", "微信OCR初稿", "Ed Sheeran"],
      ["To Let A Good Thing Die", "", "英文", "微信OCR初稿", "Bruno Major"],
      ["If December Never Ends", "", "英文", "微信OCR初稿", "Anson Seabra"],
      ["Somewhere in Ann Arbor", "", "英文", "微信OCR初稿", "Anson Seabra"],
      ["Welcome To Wonderland", "", "英文", "微信OCR初稿", "Anson Seabra"],
      ["What A Wonderful World", "", "英文", "微信OCR初稿", "Louis Armstrong"],
      ["A Thousand Dreams Of You", "", "英文", "微信OCR初稿", "The Romantic Strings"],
      ["Can I Have The Day With You", "", "英文", "微信OCR初稿", "Sam Ock"],
      ["Can' t Take My Eyes Off You", "", "英文", "微信OCR初稿", "Frankie Valli"],
      ["Down By The Sally Gardens", "", "英文", "微信OCR初稿", "Traditional"],
      ["Dream A Little Dream Of Me", "", "英文", "微信OCR初稿", "Ozzie Nelson"],
      ["I Can't Smile Without You", "", "英文", "微信OCR初稿", "David Martin"],
      ["The Most Beautiful Thing", "", "英文", "微信OCR初稿", "Bruno Major"],
      ["Can't Help Falling In Love", "", "英文", "微信OCR初稿", "Elvis Presley"],
      ["Keep Your Head Up Princess", "", "英文", "微信OCR初稿", "Anson Seabra"],
      ["Boulevard Of Broken Dreams", "", "英文", "微信OCR初稿", "Green Day"],
      ["Put Your Head On My Shoulder", "", "英文", "微信OCR初稿", "Paul Anka"],
      ["Can You Feel The Love Tonight", "", "英文", "微信OCR初稿", "Elton John"],
      ["I Don' t Mind If You Don' t Mind", "", "英文", "微信OCR初稿", "Ruel"],
      ["Lets Fall In Love For The Night", "", "英文", "微信OCR初稿", "FINNEAS"],
      ["Wake Me Up When September Ends", "", "英文", "微信OCR初稿", "Green Day"],
      ["(I Love You) for Sentimental Reasons", "", "英文", "微信OCR初稿", "Deek Watson"]
    ]
  },
  {
    id: "dazhao",
    name: "大招",
    image: "./assets/dazhao.jpg",
    tags: ["青年音", "青叔音", "音色多变", "爵士", "R&B", "流行", "弹唱"],
    schedule: "上午 8:00-12:00 / 晚上 20:00-22:00",
    liveUrl: "https://fm.missevan.com/live/869109850?share_channel=copy",
    audition: "TIP TOE.mp3",
    sourceNote: "歌单根据用户提供文本整理导入。",
    songs: [
      ["暗香","","中文","用户提供歌单",""],
      ["北京","","中文","用户提供歌单",""],
      ["彩虹","","中文","用户提供歌单",""],
      ["春雪","","中文","用户提供歌单",""],
      ["冬眠","","中文","用户提供歌单",""],
      ["断点","","中文","用户提供歌单",""],
      ["过火","","中文","用户提供歌单",""],
      ["海鸥","","中文","用户提供歌单",""],
      ["缓缓","","中文","用户提供歌单",""],
      ["黄昏","","中文","用户提供歌单",""],
      ["回来","","中文","用户提供歌单",""],
      ["记得","","中文","用户提供歌单",""],
      ["剪爱","","中文","用户提供歌单",""],
      ["解脱","","中文","用户提供歌单",""],
      ["可乐","","中文","用户提供歌单",""],
      ["离人","","中文","用户提供歌单",""],
      ["两半","","中文","用户提供歌单",""],
      ["流沙","","中文","用户提供歌单",""],
      ["路口","","中文","用户提供歌单",""],
      ["模特","","中文","用户提供歌单",""],
      ["飘雪","","中文","用户提供歌单",""],
      ["倾城","","中文","用户提供歌单",""],
      ["情人","","中文","用户提供歌单",""],
      ["秋风","","中文","用户提供歌单",""],
      ["如烟","","中文","用户提供歌单",""],
      ["色盲","","中文","用户提供歌单",""],
      ["沙滩","","中文","用户提供歌单",""],
      ["傻女","","中文","用户提供歌单",""],
      ["她说","","中文","用户提供歌单",""],
      ["天空","","中文","用户提供歌单",""],
      ["天天","","中文","用户提供歌单",""],
      ["晚风","","中文","用户提供歌单",""],
      ["味道","","中文","用户提供歌单",""],
      ["馋","","中文","用户提供歌单",""],
      ["无赖","","中文","用户提供歌单",""],
      ["无缘","","中文","用户提供歌单",""],
      ["小雪","","中文","用户提供歌单",""],
      ["信仰","","中文","用户提供歌单",""],
      ["夜机","","中文","用户提供歌单",""],
      ["予你","","中文","用户提供歌单",""],
      ["遇见","","中文","用户提供歌单",""],
      ["真爱","","中文","用户提供歌单",""],
      ["值得","","中文","用户提供歌单",""],
      ["指纹","","中文","用户提供歌单",""],
      ["挚友","","中文","用户提供歌单",""],
      ["中毒","","中文","用户提供歌单",""],
      ["最爱","","中文","用户提供歌单",""],
      ["白月光","","中文","用户提供歌单",""],
      ["必杀技","","中文","用户提供歌单",""],
      ["从前慢","","中文","用户提供歌单",""],
      ["达尔文","","中文","用户提供歌单",""],
      ["大风吹","","中文","用户提供歌单",""],
      ["单人券","","中文","用户提供歌单",""],
      ["二十二","","中文","用户提供歌单",""],
      ["很需要","","中文","用户提供歌单",""],
      ["很自己","","中文","用户提供歌单",""],
      ["红玫瑰","","中文","用户提供歌单",""],
      ["红颜旧","","中文","用户提供歌单",""],
      ["记事本","","中文","用户提供歌单",""],
      ["空白格","","中文","用户提供歌单",""],
      ["庐州月","","中文","用户提供歌单",""],
      ["慢半拍","","中文","用户提供歌单",""],
      ["莫吉托","","中文","用户提供歌单",""],
      ["青花瓷","","中文","用户提供歌单",""],
      ["青玉恋","","中文","用户提供歌单",""],
      ["情人劫","","中文","用户提供歌单",""],
      ["上海滩","","中文","用户提供歌单",""],
      ["谁不是","","中文","用户提供歌单",""],
      ["水中花","","中文","用户提供歌单",""],
      ["褪黑素","","中文","用户提供歌单",""],
      ["忘了我","","中文","用户提供歌单",""],
      ["我相信","","中文","用户提供歌单",""],
      ["我要你","","中文","用户提供歌单",""],
      ["无聊的","","中文","用户提供歌单",""],
      ["小情歌","","中文","用户提供歌单",""],
      ["怎么了","","中文","用户提供歌单",""],
      ["找自己","","中文","用户提供歌单",""],
      ["左右手","","中文","用户提供歌单",""],
      ["作曲家","","中文","用户提供歌单",""],
      ["阿楚姑娘","","中文","用户提供歌单",""],
      ["爱的代价","","中文","用户提供歌单",""],
      ["爱的根源","","中文","用户提供歌单",""],
      ["爱的箴言","","中文","用户提供歌单",""],
      ["爱情御守","","中文","用户提供歌单",""],
      ["爱如潮水","","中文","用户提供歌单",""],
      ["暗里着迷","","中文","用户提供歌单",""],
      ["沉默是金","","中文","用户提供歌单",""],
      ["春风十里","","中文","用户提供歌单",""],
      ["大城小爱","","中文","用户提供歌单",""],
      ["反对无效","","中文","用户提供歌单",""],
      ["富士山下","","中文","用户提供歌单",""],
      ["告白气球","","中文","用户提供歌单",""],
      ["孤单背影","","中文","用户提供歌单",""],
      ["过了几天","","中文","用户提供歌单",""],
      ["好好的人","","中文","用户提供歌单",""],
      ["好久不见","","中文","用户提供歌单",""],
      ["红颜如霜","","中文","用户提供歌单",""],
      ["忽然之间","","中文","用户提供歌单",""],
      ["虎口脱险","","中文","用户提供歌单",""],
      ["回到过去","","中文","用户提供歌单",""],
      ["回心转意","","中文","用户提供歌单",""],
      ["火柴天堂","","中文","用户提供歌单",""],
      ["今夜有雨","","中文","用户提供歌单",""],
      ["爵士怨曲","","中文","用户提供歌单",""],
      ["可爱女人","","中文","用户提供歌单",""],
      ["浪子心声","","中文","用户提供歌单",""],
      ["淋湿旺角","","中文","用户提供歌单",""],
      ["梦醒时分","","中文","用户提供歌单",""],
      ["模范情书","","中文","用户提供歌单",""],
      ["你不漂亮","","中文","用户提供歌单",""],
      ["你还好吗","","中文","用户提供歌单",""],
      ["你好不好","","中文","用户提供歌单",""],
      ["念念不忘","","中文","用户提供歌单",""],
      ["普通朋友","","中文","用户提供歌单",""],
      ["情非得已","","中文","用户提供歌单",""],
      ["情人知己","","中文","用户提供歌单",""],
      ["骚灵情歌","","中文","用户提供歌单",""],
      ["失落沙洲","","中文","用户提供歌单",""],
      ["逝去的爱","","中文","用户提供歌单",""],
      ["他不爱我","","中文","用户提供歌单",""],
      ["同桌的你","","中文","用户提供歌单",""],
      ["往事随风","","中文","用户提供歌单",""],
      ["忘记拥抱","","中文","用户提供歌单",""],
      ["我都记得","","中文","用户提供歌单",""],
      ["我很快乐","","中文","用户提供歌单",""],
      ["我要的爱","","中文","用户提供歌单",""],
      ["我要快乐","","中文","用户提供歌单",""],
      ["想你的夜","","中文","用户提供歌单",""],
      ["像风一样","","中文","用户提供歌单",""],
      ["小烦孤单","","中文","用户提供歌单",""],
      ["笑看风云","","中文","用户提供歌单",""],
      ["心醉心碎","","中文","用户提供歌单",""],
      ["星河水手","","中文","用户提供歌单",""],
      ["修炼爱情","","中文","用户提供歌单",""],
      ["袖手旁观","","中文","用户提供歌单",""],
      ["需要人陪","","中文","用户提供歌单",""],
      ["烟花易冷","","中文","用户提供歌单",""],
      ["言不由衷","","中文","用户提供歌单",""],
      ["夜夜夜夜","","中文","用户提供歌单",""],
      ["一表人才","","中文","用户提供歌单",""],
      ["一次就好","","中文","用户提供歌单",""],
      ["一个傻子","","中文","用户提供歌单",""],
      ["一生何求","","中文","用户提供歌单",""],
      ["一生所爱","","中文","用户提供歌单",""],
      ["一世情缘","","中文","用户提供歌单",""],
      ["因为爱情","","中文","用户提供歌单",""],
      ["阴天快乐","","中文","用户提供歌单",""],
      ["友情卡片","","中文","用户提供歌单",""],
      ["友情岁月","","中文","用户提供歌单",""],
      ["愚人码头","","中文","用户提供歌单",""],
      ["再见青春","","中文","用户提供歌单",""],
      ["张三的歌","","中文","用户提供歌单",""],
      ["爱久见人心","","中文","用户提供歌单",""],
      ["爱就一个字","","中文","用户提供歌单",""],
      ["贝加尔湖畔","","中文","用户提供歌单",""],
      ["别怕我伤心","","中文","用户提供歌单",""],
      ["冬天一个游","","中文","用户提供歌单",""],
      ["给自己的歌","","中文","用户提供歌单",""],
      ["红色高跟鞋","","中文","用户提供歌单",""],
      ["会呼吸的痛","","中文","用户提供歌单",""],
      ["寂寞的季节","","中文","用户提供歌单",""],
      ["寂寞沙洲冷","","中文","用户提供歌单",""],
      ["讲不出再见","","中文","用户提供歌单",""],
      ["紧急联络人","","中文","用户提供歌单",""],
      ["可惜不是你","","中文","用户提供歌单",""],
      ["旅行中忘记","","中文","用户提供歌单",""],
      ["慢慢喜欢你","","中文","用户提供歌单",""],
      ["没那么简单","","中文","用户提供歌单",""],
      ["拿走了什么","","中文","用户提供歌单",""],
      ["你把我灌醉","","中文","用户提供歌单",""],
      ["年少的你呀","","中文","用户提供歌单",""],
      ["怒放的生命","","中文","用户提供歌单",""],
      ["其实都没有","","中文","用户提供歌单",""],
      ["情人的眼泪","","中文","用户提供歌单",""],
      ["如果没有你","","中文","用户提供歌单",""],
      ["如果云知道","","中文","用户提供歌单",""],
      ["沙漠里的鱼","","中文","用户提供歌单",""],
      ["深秋的黎明","","中文","用户提供歌单",""],
      ["岁月里的花","","中文","用户提供歌单",""],
      ["天才白痴梦","","中文","用户提供歌单",""],
      ["我要找到你","","中文","用户提供歌单",""],
      ["像疯了一样","","中文","用户提供歌单",""],
      ["一生中最爱","","中文","用户提供歌单",""],
      ["有一种悲伤","","中文","用户提供歌单",""],
      ["月亮不回家","","中文","用户提供歌单",""],
      ["最长的电影","","中文","用户提供歌单",""],
      ["爱与痛的边缘","","中文","用户提供歌单",""],
      ["不可能的我们","","中文","用户提供歌单",""],
      ["从开始到现在","","中文","用户提供歌单",""],
      ["给电影人情书","","中文","用户提供歌单",""],
      ["漫过城市的雨","","中文","用户提供歌单",""],
      ["去北极忘记你","","中文","用户提供歌单",""],
      ["如果你也听说","","中文","用户提供歌单",""],
      ["三个人的晚餐","","中文","用户提供歌单",""],
      ["十点半的地铁","","中文","用户提供歌单",""],
      ["时间都去哪啦","","中文","用户提供歌单",""],
      ["我是真的爱你","","中文","用户提供歌单",""],
      ["乌兰巴托的夜","","中文","用户提供歌单",""],
      ["一滴泪的时间","","中文","用户提供歌单",""],
      ["一夜一夜一夜","","中文","用户提供歌单",""],
      ["银河爱情故事","","中文","用户提供歌单",""],
      ["永不失联的爱","","中文","用户提供歌单",""],
      ["雨中的恋人们","","中文","用户提供歌单",""],
      ["最好的都给你","","中文","用户提供歌单",""],
      ["My dear","","中文","用户提供歌单",""],
      ["Susan 说","","中文","用户提供歌单",""],
      ["阿尔茨海默的爱","","中文","用户提供歌单",""],
      ["白天不懂夜的黑","","中文","用户提供歌单",""],
      ["当我想你的时候","","中文","用户提供歌单",""],
      ["等到花儿也谢了","","中文","用户提供歌单",""],
      ["多远都要在一起","","中文","用户提供歌单",""],
      ["让我欢喜让我忧","","中文","用户提供歌单",""],
      ["让我一次爱个够","","中文","用户提供歌单",""],
      ["人生何处不相逢","","中文","用户提供歌单",""],
      ["听说爱情回来过","","中文","用户提供歌单",""],
      ["我的未来不是梦","","中文","用户提供歌单",""],
      ["野百合也有春天","","中文","用户提供歌单",""],
      ["因为单身的缘故","","中文","用户提供歌单",""],
      ["月亮代表谁的心","","中文","用户提供歌单",""],
      ["这样爱你对不对","","中文","用户提供歌单",""],
      ["寂寞是因为思念谁","","中文","用户提供歌单",""],
      ["刻在我心里的名字","","中文","用户提供歌单",""],
      ["你怎么舍得我难过","","中文","用户提供歌单",""],
      ["无情的雨无情的你","","中文","用户提供歌单",""],
      ["有没有那么一首歌","","中文","用户提供歌单",""],
      ["22天的小概率事件","","中文","用户提供歌单",""],
      ["春色悠悠不及你荡漾","","中文","用户提供歌单",""],
      ["关于孤独我想说的话","","中文","用户提供歌单",""],
      ["想你，醒在0:03","","中文","用户提供歌单",""],
      ["祝你爱我到天荒地老","","中文","用户提供歌单",""],
      ["Beautiful","","中文","用户提供歌单",""],
      ["Last dance","","中文","用户提供歌单",""],
      ["别让我的眼泪陪我过夜","","中文","用户提供歌单",""],
      ["你会成为你想的那个人","","中文","用户提供歌单",""],
      ["你是不是我最疼爱的人","","中文","用户提供歌单",""],
      ["Kiss goodbye","","中文","用户提供歌单",""],
      ["R&b All Night","","中文","用户提供歌单",""],
      ["Lost you twice","","中文","用户提供歌单",""],
      ["Waiting for love","","中文","用户提供歌单",""],
      ["喜欢你","","粤语","用户提供歌单",""],
      ["风继续吹","","粤语","用户提供歌单",""],
      ["风在起时","","粤语","用户提供歌单",""],
      ["千千阙歌","","粤语","用户提供歌单",""],
      ["夕阳醉了","","粤语","用户提供歌单",""],
      ["让一切随风","","粤语","用户提供歌单",""],
      ["月半小夜曲","","粤语","用户提供歌单",""],
      ["命运的深渊","","闽南语","用户提供歌单",""],
      ["13","","英文","用户提供歌单",""],
      ["JDS","","英文","用户提供歌单",""],
      ["Try","","英文","用户提供歌单","Colbie Caillat"],
      ["Baby","","英文","用户提供歌单","Justin Bieber"],
      ["Fire","","英文","用户提供歌单","Babyface/Des'ree"],
      ["Home","","英文","用户提供歌单","Michael Buble"],
      ["Ride","","英文","用户提供歌单",""],
      ["Sway","","英文","用户提供歌单",""],
      ["2 Soon","","英文","用户提供歌单",""],
      ["4Ever","","英文","用户提供歌单",""],
      ["For Us","","英文","用户提供歌单",""],
      ["Hello","","英文","用户提供歌单","Lionel Richie"],
      ["Calico","","英文","用户提供歌单",""],
      ["Flower","","英文","用户提供歌单",""],
      ["Tip Toe","","英文","用户提供歌单",""],
      ["Undone","","英文","用户提供歌单",""],
      ["All Of Me","","英文","用户提供歌单","John Legend"],
      ["Alonica","","英文","用户提供歌单",""],
      ["Amazing","","英文","用户提供歌单","George Michael"],
      ["Angelia","","英文","用户提供歌单","Richard Marx"],
      ["As It Was","","英文","用户提供歌单",""],
      ["Beer Man","","英文","用户提供歌单",""],
      ["Closure","","英文","用户提供歌单",""],
      ["Falling","","英文","用户提供歌单","Chris Mann"],
      ["Imagine","","英文","用户提供歌单","John Lennon"],
      ["It's You","","英文","用户提供歌单","keshi"],
      ["Merry Go","","英文","用户提供歌单",""],
      ["Pretend","","英文","用户提供歌单",""],
      ["Roxanne","","英文","用户提供歌单","George Michael"],
      ["Shivers","","英文","用户提供歌单",""],
      ["Supreme","","英文","用户提供歌单","Robbie Williams"],
      ["Vincent","","英文","用户提供歌单",""],
      ["You And I","","英文","用户提供歌单","Scorpions"],
      ["Bed I Made","","英文","用户提供歌单","Allen Stone"],
      ["Fast Love","","英文","用户提供歌单","George Michael"],
      ["Feelings","","英文","用户提供歌单",""],
      ["Promises","","英文","用户提供歌单","India Arie"],
      ["Symmetry","","英文","用户提供歌单",""],
      ["What's Up","","英文","用户提供歌单","4 Non Blondes"],
      ["Attention","","英文","用户提供歌单","Charlie Puth"],
      ["Better Man","","英文","用户提供歌单","Robbie Williams"],
      ["Deep Green","","英文","用户提供歌单",""],
      ["Kiss A Girl","","英文","用户提供歌单","Keith Urban"],
      ["Lego House","","英文","用户提供歌单",""],
      ["Loving You","","英文","用户提供歌单",""],
      ["Moody Wind","","英文","用户提供歌单",""],
      ["Moon River","","英文","用户提供歌单",""],
      ["Stand By Me","","英文","用户提供歌单",""],
      ["Sweet Side","","英文","用户提供歌单",""],
      ["Why Why Why","","英文","用户提供歌单",""],
      ["Anything 4 U","","英文","用户提供歌单",""],
      ["Colorblind","","英文","用户提供歌单",""],
      ["I Told You So","","英文","用户提供歌单","Carrie Underwood"],
      ["Lonely City","","英文","用户提供歌单",""],
      ["Miss Riddle","","英文","用户提供歌单","Boz Scaggs"],
      ["Need You Now","","英文","用户提供歌单","Charlie Puth"],
      ["Paragraphs","","英文","用户提供歌单",""],
      ["Photograph","","英文","用户提供歌单",""],
      ["Shape Of You","","英文","用户提供歌单",""],
      ["Temptation","","英文","用户提供歌单","Diana Krall"],
      ["Boiling Milk","","英文","用户提供歌单",""],
      ["City Of Stars","","英文","用户提供歌单",""],
      ["Glimpse Of Us","","英文","用户提供歌单",""],
      ["Malibu Nights","","英文","用户提供歌单",""],
      ["Nothing Ever","","英文","用户提供歌单","Rebecka Tornqvist"],
      ["Nowhere To Be","","英文","用户提供歌单",""],
      ["Paint My Love","","英文","用户提供歌单","Michael Learns To Rock"],
      ["Rest Assured","","英文","用户提供歌单",""],
      ["So Beautiful","","英文","用户提供歌单",""],
      ["So Far So Good","","英文","用户提供歌单","Beady Belle"],
      ["Still The One","","英文","用户提供歌单",""],
      ["All Out Of Love","","英文","用户提供歌单","Air Supply"],
      ["Autumn Leaves","","英文","用户提供歌单",""],
      ["Because Of You","","英文","用户提供歌单","Kelly Clarkson"],
      ["Bedtime Story","","英文","用户提供歌单",""],
      ["God's Country","","英文","用户提供歌单",""],
      ["Growing Pains","","英文","用户提供歌单",""],
      ["Holiday Party","","英文","用户提供歌单",""],
      ["I Will Survive","","英文","用户提供歌单",""],
      ["Loose Tonight","","英文","用户提供歌单",""],
      ["No Fear No More","","英文","用户提供歌单",""],
      ["Ready For Love","","英文","用户提供歌单","India Arie"],
      ["Teenage Dream","","英文","用户提供歌单","Katy Perry"],
      ["Viscous Ocean","","英文","用户提供歌单","Beady Belle"],
      ["Wind Of Change","","英文","用户提供歌单","Scorpions"],
      ["Falling For You","","英文","用户提供歌单","Colbie Caillat"],
      ["Half Of My Heart","","英文","用户提供歌单","John Mayer"],
      ["I Feel It Coming","","英文","用户提供歌单",""],
      ["I Wish You Love","","英文","用户提供歌单",""],
      ["Jesus To A Child","","英文","用户提供歌单","George Michael"],
      ["Pink Champagne","","英文","用户提供歌单",""],
      ["Stop This World","","英文","用户提供歌单","Diana Krall"],
      ["Temporary Love","","英文","用户提供歌单",""],
      ["The Look Of Love","","英文","用户提供歌单","Diana Krall"],
      ["Until I Find You","","英文","用户提供歌单","Richard Marx"],
      ["Always On My Mind","","英文","用户提供歌单",""],
      ["Fly Me To The Moon","","英文","用户提供歌单",""],
      ["Over The Rainbow","","英文","用户提供歌单","Chris Mann"],
      ["Ross And Rachel","","英文","用户提供歌单",""],
      ["Shape Of My Heart","","英文","用户提供歌单",""],
      ["Tequila Sunrise","","英文","用户提供歌单","Eagles"],
      ["Can I Walk With You","","英文","用户提供歌单","India Arie"],
      ["Girl From Ipanema","","英文","用户提供歌单",""],
      ["Give Me One Reason","","英文","用户提供歌单",""],
      ["Head In The Clouds","","英文","用户提供歌单",""],
      ["Hotel California","","英文","用户提供歌单","Eagles"],
      ["Moves Like Jagger","","英文","用户提供歌单","Maroon 5"],
      ["Raining On Sunday","","英文","用户提供歌单","Keith Urban"],
      ["Someone You Loved","","英文","用户提供歌单","Lewis Capaldi"],
      ["You'll Think Of Me","","英文","用户提供歌单",""],
      ["I'm Not The Only One","","英文","用户提供歌单",""],
      ["Peter Pan Was Right","","英文","用户提供歌单",""],
      ["Right Here Waiting","","英文","用户提供歌单",""],
      ["Something About Us","","英文","用户提供歌单",""],
      ["Tonight I Wanna Cry","","英文","用户提供歌单","Keith Urban"],
      ["Dancing With My Phone","","英文","用户提供歌单",""],
      ["Endless Summer Night","","英文","用户提供歌单","Richard Marx"],
      ["Every Breath You Take","","英文","用户提供歌单","The Police"],
      ["On The Night Like This","","英文","用户提供歌单","Coldiac"],
      ["Quando Quando Quando","","英文","用户提供歌单",""],
      ["We Don't Talk Anymore","","英文","用户提供歌单","Charlie Puth"],
      ["Love Will Keep Us Alive","","英文","用户提供歌单","Eagles"],
      ["Somewhere Only We Know","","英文","用户提供歌单",""],
      ["The Joker And The Queen","","英文","用户提供歌单",""],
      ["I'll Still Be Loving You","","英文","用户提供歌单",""],
      ["The Way You Look Tonight","","英文","用户提供歌单",""],
      ["Another Crack In My Heart","","英文","用户提供歌单",""],
      ["Long Lost Sunday Morning","","英文","用户提供歌单",""],
      ["Strawberries & Cigarettes","","英文","用户提供歌单",""],
      ["Nothing's Gonna Stop Us Now","","英文","用户提供歌单","Starship"],
      ["Some Things I'll Never Know","","英文","用户提供歌单",""],
      ["Those Dancing Days Are Gone","","英文","用户提供歌单","Carla Bruni"],
      ["Nothing's Gonna Change My Love For You","","英文","用户提供歌单",""]
    ]
  }
];

singers.push(...(window.importedSingers || []));

let activeTab = "singers";
const $ = (id) => document.getElementById(id);
const len = (s) => Array.from(s.replace(/\s/g, "")).length;
const displayName = (name) => name.replace(/_南音$/u, "");
const likeStoreKey = "nanyin-song-likes";
const songStarStoreKey = "nanyin-song-stars";
const singerReactionStoreKey = "nanyin-singer-reactions";
const debtStoreKey = "nanyin-song-debts";
const scheduleStoreKey = "nanyin-singer-schedules";
const tagStoreKey = "nanyin-singer-tags";
const authStoreKey = "nanyin-singer-auth";
const colorModeStoreKey = "nanyin-color-mode";
const customSongStoreKey = "nanyin-custom-songs";
const pinnedSongStoreKey = "nanyin-pinned-songs";
const songEditStoreKey = "nanyin-song-edits";
const deletedSongStoreKey = "nanyin-deleted-songs";
const songRequestStoreKey = "nanyin-song-requests";
const sharedStateEndpoint = location.hostname.includes("edgeone.") ? "/node-api/state" : "/api/state";
const sharedStateIncrementEndpoint = location.hostname.includes("edgeone.") ? "/node-api/increment" : "/api/increment";
const singerLoginPassword = "NanYin2026DebtManagement";
const cnLanguages = ["中文", "粤语", "闽南语"];
const maxPinnedSongs = 10;
const emptySharedState = {
  likes: {},
  songStars: {},
  singerReactions: {},
  debts: [],
  pinnedSongs: {},
  customSongs: [],
  schedules: {},
  tags: {},
  songEdits: {},
  deletedSongs: {},
  songRequests: []
};
let sharedState = {
  ...emptySharedState,
  likes: readStoredJSON(likeStoreKey, {}),
  songStars: readStoredJSON(songStarStoreKey, {}),
  singerReactions: readStoredJSON(singerReactionStoreKey, {}),
  debts: readStoredJSON(debtStoreKey, []),
  pinnedSongs: readStoredJSON(pinnedSongStoreKey, {}),
  customSongs: readStoredJSON(customSongStoreKey, []),
  schedules: readStoredJSON(scheduleStoreKey, {}),
  tags: readStoredJSON(tagStoreKey, {}),
  songEdits: readStoredJSON(songEditStoreKey, {}),
  deletedSongs: readStoredJSON(deletedSongStoreKey, {}),
  songRequests: readStoredJSON(songRequestStoreKey, [])
};
let sharedStateReady = false;
let sharedStateSaveTimer = 0;
let sharedStateCacheTimer = 0;
const counterCacheTimers = {};
const burstCooldowns = {};
let debtCounter = 1;
let editDebtCounter = 1;
let activeDetailPanel = "debts";
let lastDetailSingerId = "";
let lastRouteKind = "home";
let detailSongQuery = "";
let homeSongViewMode = "list";
let detailSongViewMode = "list";
let homeSingerSortMode = "debts";
let homeSongInsightSortMode = "";
let searchRenderTimer = 0;
let scrollLoadTimer = 0;
const songRenderBatchSize = 60;
let homeSongRenderLimit = songRenderBatchSize;
let detailSongRenderLimit = songRenderBatchSize;

function resetHomeSongBatch() {
  homeSongRenderLimit = songRenderBatchSize;
}

function resetDetailSongBatch() {
  detailSongRenderLimit = songRenderBatchSize;
}

function readStoredJSON(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) || fallback;
  } catch {
    return fallback;
  }
}

function writeStoredJSON(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function cacheSharedState() {
  writeStoredJSON(likeStoreKey, sharedState.likes);
  writeStoredJSON(songStarStoreKey, sharedState.songStars);
  writeStoredJSON(singerReactionStoreKey, sharedState.singerReactions);
  writeStoredJSON(debtStoreKey, sharedState.debts);
  writeStoredJSON(pinnedSongStoreKey, sharedState.pinnedSongs);
  writeStoredJSON(customSongStoreKey, sharedState.customSongs);
  writeStoredJSON(scheduleStoreKey, sharedState.schedules);
  writeStoredJSON(tagStoreKey, sharedState.tags);
  writeStoredJSON(songEditStoreKey, sharedState.songEdits);
  writeStoredJSON(deletedSongStoreKey, sharedState.deletedSongs);
  writeStoredJSON(songRequestStoreKey, sharedState.songRequests);
}

function cacheSharedStateSoon() {
  clearTimeout(sharedStateCacheTimer);
  sharedStateCacheTimer = setTimeout(cacheSharedState, 1200);
}

async function loadSharedState() {
  if (location.protocol === "file:") return;
  try {
    const response = await fetch(sharedStateEndpoint, { cache: "no-store" });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const serverState = await response.json();
    sharedState = {
      ...emptySharedState,
      ...serverState
    };
    cacheSharedState();
    sharedStateReady = true;
    renderRoute();
  } catch (error) {
    console.warn("共享数据读取失败，暂时使用本地缓存", error);
  }
}

function saveSharedStateSoon() {
  cacheSharedStateSoon();
  if (location.protocol === "file:" || !sharedStateReady) return;
  clearTimeout(sharedStateSaveTimer);
  sharedStateSaveTimer = setTimeout(async () => {
    try {
      let outgoingState = sharedState;
      try {
        const latestResponse = await fetch(sharedStateEndpoint, { cache: "no-store" });
        if (latestResponse.ok) {
          const latestState = await latestResponse.json();
          outgoingState = {
            ...outgoingState,
            likes: mergeCountersByMax(latestState.likes, outgoingState.likes),
            songStars: mergeCountersByMax(latestState.songStars, outgoingState.songStars),
            singerReactions: mergeCountersByMax(latestState.singerReactions, outgoingState.singerReactions)
          };
          sharedState = {
            ...emptySharedState,
            ...outgoingState
          };
        }
      } catch (error) {
        console.warn("共享计数合并失败，继续保存当前数据", error);
      }
      await fetch(sharedStateEndpoint, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(outgoingState)
      });
    } catch (error) {
      console.warn("共享数据保存失败，已保留在本地缓存", error);
    }
  }, 250);
}

function mergeCountersByMax(a = {}, b = {}) {
  const merged = { ...a, ...b };
  Object.keys(merged).forEach((key) => {
    merged[key] = Math.max(Number(a[key] || 0), Number(b[key] || 0));
  });
  return merged;
}

function cacheCounterState(bucket) {
  clearTimeout(counterCacheTimers[bucket]);
  counterCacheTimers[bucket] = setTimeout(() => {
    if (bucket === "likes") writeStoredJSON(likeStoreKey, sharedState.likes);
    if (bucket === "songStars") writeStoredJSON(songStarStoreKey, sharedState.songStars);
    if (bucket === "singerReactions") writeStoredJSON(singerReactionStoreKey, sharedState.singerReactions);
  }, 240);
}

function localIncrementCounter(bucket, key, amount = 1) {
  const counters = { ...(sharedState[bucket] || {}) };
  counters[key] = Math.max(0, Number(counters[key] || 0) + Number(amount || 1));
  sharedState[bucket] = counters;
  cacheCounterState(bucket);
  return counters[key];
}

async function incrementCounter(bucket, key, amount = 1, options = {}) {
  const optimisticValue = options.optimistic === false
    ? Number((sharedState[bucket] || {})[key] || 0)
    : localIncrementCounter(bucket, key, amount);
  if (location.protocol === "file:" || !sharedStateReady) {
    return optimisticValue;
  }

  try {
    const response = await fetch(sharedStateIncrementEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ bucket, key, amount })
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const result = await response.json();
    if (result.state) {
      sharedState = {
        ...emptySharedState,
        ...result.state
      };
      cacheSharedState();
    } else if (result.bucket && result.key) {
      sharedState[result.bucket] = {
        ...(sharedState[result.bucket] || {}),
        [result.key]: result.value
      };
      cacheCounterState(result.bucket);
    }
    return Number(result.value || optimisticValue);
  } catch (error) {
    console.warn("共享计数更新失败，已保留本地计数", error);
    return optimisticValue;
  }
}

function readLikes() {
  return sharedState.likes || {};
}

function writeLikes(likes) {
  sharedState.likes = likes;
  saveSharedStateSoon();
}

function readSongStars() {
  return sharedState.songStars || {};
}

function readCustomSongs() {
  return sharedState.customSongs || [];
}

function writeCustomSongs(songs) {
  sharedState.customSongs = songs;
  saveSharedStateSoon();
}

function readSongEdits() {
  return sharedState.songEdits || {};
}

function writeSongEdits(edits) {
  sharedState.songEdits = edits;
  saveSharedStateSoon();
}

function readDeletedSongs() {
  return sharedState.deletedSongs || {};
}

function writeDeletedSongs(deleted) {
  sharedState.deletedSongs = deleted;
  saveSharedStateSoon();
}

function readSongRequests() {
  return sharedState.songRequests || [];
}

function writeSongRequests(requests) {
  sharedState.songRequests = requests;
  saveSharedStateSoon();
}

function readPinnedSongs() {
  return sharedState.pinnedSongs || {};
}

function writePinnedSongs(pins) {
  sharedState.pinnedSongs = pins;
  saveSharedStateSoon();
}

function readSingerReactions() {
  return sharedState.singerReactions || {};
}

function readAuth() {
  try {
    return JSON.parse(localStorage.getItem(authStoreKey)) || {};
  } catch {
    return {};
  }
}

function writeAuth(auth) {
  writeStoredJSON(authStoreKey, auth);
}

function currentColorMode() {
  return localStorage.getItem(colorModeStoreKey) || "light";
}

function applyColorMode(mode) {
  const nextMode = mode === "dark" ? "dark" : "light";
  document.documentElement.dataset.theme = nextMode === "dark" ? "nanyin-dark" : "nanyin";
  localStorage.setItem(colorModeStoreKey, nextMode);
  $("themeToggle")?.setAttribute("aria-label", nextMode === "dark" ? "切换浅色模式" : "切换深色模式");
}

function loggedSingerId() {
  return readAuth().singerId || "";
}

function canManageSinger(singer) {
  return Boolean(singer?.id && loggedSingerId() === singer.id);
}

function writeSingerReactions(reactions) {
  sharedState.singerReactions = reactions;
  saveSharedStateSoon();
}

function singerReactionKey(singerId, type) {
  return `${singerId}:${type}`;
}

function singerReactionCount(singerId, type) {
  return readSingerReactions()[singerReactionKey(singerId, type)] || 0;
}

function readSchedules() {
  return sharedState.schedules || {};
}

function writeSchedules(schedules) {
  sharedState.schedules = schedules;
  saveSharedStateSoon();
}

function singerSchedule(singer) {
  return readSchedules()[singer.id] || singer.schedule;
}

function readSingerTags() {
  return sharedState.tags || {};
}

function writeSingerTags(tags) {
  sharedState.tags = tags;
  saveSharedStateSoon();
}

function singerTags(singer) {
  return readSingerTags()[singer.id] || singer.tags;
}

function parseTags(value, fallback) {
  const tags = value.split(/[,，、\n]/u).map((tag) => tag.trim()).filter(Boolean);
  return tags.length ? [...new Set(tags)] : fallback;
}

function openScheduleDialog() {
  const singer = singers.find((item) => item.id === routeSingerId());
  if (!singer) return;
  $("scheduleInput").value = singerSchedule(singer);
  $("tagsInput").value = singerTags(singer).join("，");
  $("scheduleDialog").showModal();
}

function openAddSongDialog() {
  const singer = singers.find((item) => item.id === routeSingerId());
  if (!canManageSinger(singer)) return;
  $("songFormMode").value = "add";
  $("editSongKey").value = "";
  $("songDialogTitle").textContent = "添加歌曲";
  $("saveNewSong").textContent = "添加";
  $("deleteSong").classList.add("hidden");
  $("newSongTitle").value = "";
  $("newSongOriginalArtist").value = "";
  $("newSongYear").value = "";
  $("newSongLanguage").value = "中文";
  $("addSongDialog").showModal();
}

function openEditSongDialog(encodedKey) {
  const singer = singers.find((item) => item.id === routeSingerId());
  if (!canManageSinger(singer)) return;
  const editKey = decodeURIComponent(encodedKey);
  const song = singerLibraryRows(singer).find((item) => item.editKey === editKey);
  if (!song) return;
  $("songFormMode").value = "edit";
  $("editSongKey").value = editKey;
  $("songDialogTitle").textContent = "编辑歌曲";
  $("saveNewSong").textContent = "保存修改";
  $("deleteSong").classList.remove("hidden");
  $("newSongTitle").value = song.title;
  $("newSongOriginalArtist").value = song.originalArtist || "";
  $("newSongYear").value = song.releaseYear || "";
  $("newSongLanguage").value = song.language || "中文";
  $("addSongDialog").showModal();
}

function openSongRequestDialog(singer, prefillTitle = "") {
  if (!singer) return;
  $("requestSingerId").value = singer.id;
  $("requestSongTitle").value = prefillTitle;
  $("requestSongNote").value = "";
  $("requestSongSignature").value = "";
  $("requestSongDialog").showModal();
  if (prefillTitle) {
    $("requestSongNote").focus();
  } else {
    $("requestSongTitle").focus();
  }
}

function songKey(song) {
  return `${song.singerId}:${song.title}:${song.originalArtist}`;
}

function likeCount(song) {
  return readLikes()[songKey(song)] || 0;
}

function starCount(song) {
  return readSongStars()[songKey(song)] || 0;
}

function isSongPinned(song) {
  return Boolean(readPinnedSongs()[songKey(song)]);
}

function encodedSongKey(song) {
  return encodeURIComponent(songKey(song));
}

function togglePinnedSong(encodedKey, triggerButton) {
  const key = decodeURIComponent(encodedKey);
  const pins = readPinnedSongs();
  const singerId = key.split(":")[0];
  const singerPinnedCount = Object.keys(pins).filter((itemKey) => itemKey.split(":")[0] === singerId && pins[itemKey]).length;
  if (!pins[key] && singerPinnedCount >= maxPinnedSongs) {
    triggerButton?.classList.add("pin-button-limit");
    setTimeout(() => triggerButton?.classList.remove("pin-button-limit"), 420);
    if (triggerButton) triggerButton.title = `每个歌手最多置顶 ${maxPinnedSongs} 首`;
    return;
  }
  pins[key] = !pins[key];
  if (!pins[key]) delete pins[key];
  writePinnedSongs(pins);
  renderRoute();
}

function bindLikeButtons() {
  document.querySelectorAll("[data-like-key]").forEach((button) => {
    button.onclick = async (event) => {
      event.stopPropagation();
      const key = decodeURIComponent(button.dataset.likeKey);
      const optimisticValue = localIncrementCounter("likes", key);
      const counter = button.querySelector("[data-like-count]");
      counter.textContent = optimisticValue;
      button.classList.add("like-button-pulse");
      setTimeout(() => button.classList.remove("like-button-pulse"), 360);
      celebrateHeart();
      if (location.protocol !== "file:" && sharedStateReady) {
        const serverValue = await incrementCounter("likes", key, 1, { optimistic: false });
        counter.textContent = serverValue;
        document.querySelectorAll(`[data-like-key="${CSS.escape(encodeURIComponent(key))}"] [data-like-count]`).forEach((item) => {
          item.textContent = serverValue;
        });
      }
    };
  });
}

function bindStarButtons() {
  document.querySelectorAll("[data-star-key]").forEach((button) => {
    button.onclick = async (event) => {
      event.stopPropagation();
      const key = decodeURIComponent(button.dataset.starKey);
      const singer = singers.find((item) => item.id === button.dataset.starSingerId);
      const title = decodeURIComponent(button.dataset.starTitle || "");
      localIncrementCounter("songStars", key);
      button.classList.add("star-button-pulse");
      setTimeout(() => button.classList.remove("star-button-pulse"), 520);
      celebrateStars();
      setTimeout(() => openSongRequestDialog(singer, title), 1620);
      if (location.protocol !== "file:" && sharedStateReady) {
        const serverValue = await incrementCounter("songStars", key, 1, { optimistic: false });
        sharedState.songStars = {
          ...(sharedState.songStars || {}),
          [key]: serverValue
        };
      }
    };
  });
}

function bindPinButtons() {
  document.querySelectorAll("[data-pin-key]").forEach((button) => {
    button.onclick = (event) => {
      event.preventDefault();
      event.stopPropagation();
      togglePinnedSong(button.dataset.pinKey, button);
    };
  });
}

function bindSongEditButtons() {
  document.querySelectorAll("[data-song-edit-key]").forEach((button) => {
    button.onclick = (event) => {
      event.preventDefault();
      event.stopPropagation();
      openEditSongDialog(button.dataset.songEditKey);
    };
  });
}

function triggerBurst(id, activeClass, duration, cooldown = 700) {
  const now = performance.now();
  if ((burstCooldowns[id] || 0) + cooldown > now) return;
  burstCooldowns[id] = now;
  const burst = $(id);
  if (!burst || burst.classList.contains(activeClass)) return;
  requestAnimationFrame(() => {
    burst.classList.add(activeClass);
    setTimeout(() => burst.classList.remove(activeClass), duration);
  });
}

function celebrateHeart() {
  triggerBurst("heartBurst", "heart-burst-active", 900, 650);
}

function celebrateStars() {
  triggerBurst("starBurst", "star-burst-active", 1550, 900);
}

function celebrateDebt() {
  triggerBurst("bombBurst", "bomb-burst-active", 900, 850);
}

function explodeDebt() {
  celebrateDebt();
}

function celebrateRainbow() {
  triggerBurst("rainbowBurst", "rainbow-burst-active", 1100, 900);
}

function celebrateSongRequest() {
  const now = performance.now();
  if ((burstCooldowns.songRequest || 0) + 900 > now) return;
  burstCooldowns.songRequest = now;
  if (typeof globalThis.confetti !== "function") {
    celebrateRainbow();
    return;
  }
  globalThis.confetti({
    particleCount: 72,
    spread: 68,
    startVelocity: 28,
    scalar: .82,
    origin: { y: .62 },
    colors: ["#fbcfe8", "#ddd6fe", "#bfdbfe", "#fde68a", "#bbf7d0"],
    disableForReducedMotion: true
  });
}

function celebrateMonkey() {
  triggerBurst("monkeyBurst", "monkey-burst-active", 1800, 1500);
}

function celebrateCry() {
  triggerBurst("cryBurst", "cry-burst-active", 1100, 900);
}

function tearDebtPaper() {
  triggerBurst("tearDebtBurst", "tear-debt-burst-active", 1100, 900);
}

function bindSingerReactionButtons() {
  document.querySelectorAll("[data-singer-reaction]").forEach((button) => {
    button.onclick = async (event) => {
      event.preventDefault();
      event.stopPropagation();
      const singerId = button.dataset.singerId;
      const type = button.dataset.singerReaction;
      const key = singerReactionKey(singerId, type);
      const optimisticValue = localIncrementCounter("singerReactions", key);
      const counter = button.querySelector("[data-singer-reaction-count]");
      counter.textContent = optimisticValue;
      if (type === "bomb") explodeDebt();
      if (type === "rainbow") celebrateRainbow();
      if (location.protocol !== "file:" && sharedStateReady) {
        const serverValue = await incrementCounter("singerReactions", key, 1, { optimistic: false });
        counter.textContent = serverValue;
        document.querySelectorAll(`[data-singer-id="${CSS.escape(singerId)}"][data-singer-reaction="${CSS.escape(type)}"] [data-singer-reaction-count]`).forEach((item) => {
          item.textContent = serverValue;
        });
      }
    };
  });
}

function bindDebtMonkeyButtons() {
  document.querySelectorAll("[data-debt-monkey]").forEach((button) => {
    button.onclick = async (event) => {
      event.preventDefault();
      event.stopPropagation();
      const targetKey = button.dataset.debtKey;
      const key = singerReactionKey(targetKey, "monkey");
      const optimisticValue = localIncrementCounter("singerReactions", key);
      const counter = button.querySelector("[data-debt-monkey-count]");
      counter.textContent = optimisticValue;
      celebrateMonkey();
      if (location.protocol !== "file:" && sharedStateReady) {
        const serverValue = await incrementCounter("singerReactions", key, 1, { optimistic: false });
        counter.textContent = serverValue;
      }
    };
  });
}

function readDebts() {
  return sharedState.debts || [];
}

function writeDebts(debts) {
  sharedState.debts = debts;
  saveSharedStateSoon();
}

function singerDebts(singerId) {
  return readDebts().filter((item) => item.singerId === singerId);
}

function debtKey(item, index) {
  return item.id || `${item.singerId}:${item.createdAt}:${index}`;
}

function debtTotal(singerId) {
  return singerDebts(singerId).reduce((total, item) => total + Number(item.count || 0), 0);
}

function repaidTotal(singerId) {
  return singerDebts(singerId).reduce((total, item) => total + Number(item.repaid || 0), 0);
}

function repayDebt(targetKey) {
  const debts = readDebts();
  const target = debts.find((item, index) => debtKey(item, index) === targetKey);
  const singer = singers.find((item) => item.id === target?.singerId);
  if (!canManageSinger(singer)) return;
  const updated = debts.map((item, index) => {
    if (debtKey(item, index) !== targetKey) return item;
    return {
      ...item,
      count: Math.max(0, Number(item.count || 0) - 1),
      repaid: Number(item.repaid || 0) + 1
    };
  });
  writeDebts(updated);
  renderRoute();
  tearDebtPaper();
}

function addDebtOwed(targetKey) {
  const debts = readDebts();
  const target = debts.find((item, index) => debtKey(item, index) === targetKey);
  const singer = singers.find((item) => item.id === target?.singerId);
  if (!canManageSinger(singer)) return;
  const updated = debts.map((item, index) => {
    if (debtKey(item, index) !== targetKey) return item;
    return {
      ...item,
      count: Number(item.count || 0) + 1
    };
  });
  writeDebts(updated);
  renderRoute();
  celebrateCry();
}

function updateDebtCounter(nextValue) {
  debtCounter = Math.max(1, nextValue);
  $("debtCount").textContent = debtCounter;
}

function updateEditDebtCounter(nextValue) {
  editDebtCounter = Math.max(0, nextValue);
  $("editDebtCount").textContent = editDebtCounter;
}

function openDebtDialog() {
  const singer = singers.find((item) => item.id === routeSingerId());
  if (!canManageSinger(singer)) return;
  $("debtCreditor").value = "";
  $("debtNote").value = "";
  updateDebtCounter(1);
  $("dialog").showModal();
}

function openDebtPage() {
  const singer = singers.find((item) => item.id === routeSingerId());
  if (!singer) return;
  location.hash = `#singer/${singer.id}/debts`;
}

function openEditDebt(targetKey) {
  const debts = readDebts();
  const item = debts.find((debt, index) => debtKey(debt, index) === targetKey);
  const singer = singers.find((candidate) => candidate.id === item?.singerId);
  if (!item || !canManageSinger(singer)) return;
  $("editDebtKey").value = targetKey;
  $("editDebtCreditor").value = item.creditor || "未命名债主";
  $("editDebtNote").value = item.note || "";
  updateEditDebtCounter(Number(item.count || 0));
  $("editDebtDialog").showModal();
}

function renderDebtPage() {
  const singer = singers.find((item) => item.id === routeSingerId());
  if (!singer) return;
  $("debtPageTitle").textContent = `${displayName(singer.name)}欠歌账簿`;
  renderDebtList(singer, $("debtPageList"));
}

function renderDebtList(singer, target) {
  const debts = singerDebts(singer.id);
  const canManage = canManageSinger(singer);
  target.className = debts.length ? "debt-list" : "detail-empty-list";
  target.innerHTML = debts.length ? debts
    .map((item, index) => {
      const itemKey = debtKey(item, index);
      const signature = item.creditor || "未命名债主";
      return `
      <article class="card song-card-flat request-song-card debt-list-item">
        <div class="card-body song-card-body flex-row justify-between items-center gap-3">
          <div class="request-song-signer debt-song-signer song-card-pinned-${(index % 7) + 1}">
            ${signature}
          </div>
          <div class="min-w-0">
            <h3 class="font-bold text-lg">${item.note || "欠歌记录"}</h3>
            <p class="request-song-meta debt-tags">
              <span class="tag-chip tag-debt">待还 ${item.count} 首</span>
              <span class="tag-chip tag-note">已还 ${item.repaid || 0} 首</span>
            </p>
          </div>
          <div class="song-card-actions">
            <button class="debt-monkey-button debt-card-monkey-button" type="button" aria-label="催 ${item.creditor || "债主"} 还歌" data-debt-monkey data-debt-key="${itemKey}">
              <span aria-hidden="true">🐒</span>
              <span data-debt-monkey-count>${singerReactionCount(itemKey, "monkey")}</span>
            </button>
          </div>
        </div>
        ${canManage ? `<div class="debt-actions">
            <button class="debt-action-btn debt-edit-btn" type="button" data-edit-key="${itemKey}">修改</button>
            <button class="debt-action-btn debt-add-btn" type="button" data-add-debt-key="${itemKey}">+1 🥲</button>
            ${Number(item.count || 0) > 0 ? `<button class="debt-action-btn debt-repay-btn" type="button" data-repay-key="${itemKey}">-1 😎</button>` : "<span class='debt-action-btn debt-paid'>已还清</span>"}
          </div>` : ""}
      </article>
    `;
    })
    .join("") : "<p class='debt-empty-state'>竟然没有欠歌👏</p>";
  target.querySelectorAll("[data-edit-key]").forEach((button) => {
    button.onclick = () => openEditDebt(button.dataset.editKey);
  });
  target.querySelectorAll("[data-repay-key]").forEach((button) => {
    button.onclick = () => repayDebt(button.dataset.repayKey);
  });
  target.querySelectorAll("[data-add-debt-key]").forEach((button) => {
    button.onclick = () => addDebtOwed(button.dataset.addDebtKey);
  });
  bindDebtMonkeyButtons();
}

function rows() {
  const edits = readSongEdits();
  const deleted = readDeletedSongs();
  const usefulValue = (value) => {
    const text = String(value || "").trim();
    return text && text !== "待补" ? text : "";
  };
  const builtInRows = singers.flatMap((singer) =>
    singer.songs.map((song, index) => {
      const title = song[0];
      const originalArtist = song[4] || "";
      const rowOriginalArtist = usefulValue(originalArtist);
      const rowReleaseYear = usefulValue(song[5]);
      const rowGenre = usefulValue(song[6]);
      const editKey = `builtin:${singer.id}:${index}:${title}:${originalArtist}`;
      if (deleted[editKey]) return null;
      const metadata = getSongMetadata(singer.id, title, originalArtist);
      const edit = edits[editKey] || {};
      return {
        title: edit.title || title,
        artist: song[1],
        language: edit.language || song[2],
        note: song[3],
        originalArtist: edit.originalArtist ?? (metadata.originalArtist || rowOriginalArtist || ""),
        releaseYear: edit.releaseYear ?? (rowReleaseYear || metadata.releaseYear || ""),
        genre: edit.genre ?? (rowGenre || metadata.genre || ""),
        metadataConfidence: metadata.confidence || "",
        singerId: singer.id,
        singer: displayName(singer.name),
        tags: singerTags(singer),
        editKey,
        sourceType: "builtin"
      };
    }).filter(Boolean)
  );
  const customRows = readCustomSongs().map((song) => {
    const singer = singers.find((item) => item.id === song.singerId);
    const editKey = `custom:${song.id}`;
    if (deleted[editKey]) return null;
    const edit = edits[editKey] || {};
    return {
      title: edit.title || song.title,
      artist: displayName(singer?.name || song.singer || ""),
      language: edit.language || song.language || "中文",
      note: "新增",
      originalArtist: edit.originalArtist ?? (song.originalArtist || ""),
      releaseYear: edit.releaseYear ?? (song.releaseYear || ""),
      genre: "",
      metadataConfidence: "",
      singerId: song.singerId,
      singer: displayName(singer?.name || song.singer || ""),
      tags: singer ? singerTags(singer) : [],
      editKey,
      sourceType: "custom"
    };
  }).filter(Boolean);
  return [...builtInRows, ...customRows];
}

function songMetadataKey(singerId, title, originalArtist) {
  return [singerId, title, originalArtist].map((part) => String(part || "").trim().toLowerCase()).join("::");
}

const metadataBySong = new Map();
const metadataGroupsByTitle = new Map();
(window.nanyinSongMetadata || []).forEach((item) => {
  metadataBySong.set(songMetadataKey(item.singerId, item.title, item.originalArtist), item);
  if (!metadataBySong.has(songMetadataKey(item.singerId, item.title, ""))) {
    metadataBySong.set(songMetadataKey(item.singerId, item.title, ""), item);
  }
  const titleKey = songMetadataKey("", item.title, "");
  if (!metadataGroupsByTitle.has(titleKey)) metadataGroupsByTitle.set(titleKey, []);
  metadataGroupsByTitle.get(titleKey).push(item);
});

const metadataFallbackByTitle = new Map();
metadataGroupsByTitle.forEach((items, titleKey) => {
  const artists = new Set(items.map((item) => String(item.originalArtist || "").trim()).filter(Boolean));
  if (artists.size > 1) return;
  const best = items.toSorted((a, b) => {
    const score = (item) =>
      Number(Boolean(item.originalArtist)) * 4
      + Number(Boolean(item.releaseYear)) * 2
      + Number(Boolean(item.genre));
    return score(b) - score(a);
  })[0];
  if (best?.originalArtist || best?.releaseYear || best?.genre) {
    metadataFallbackByTitle.set(titleKey, best);
  }
});

function getSongMetadata(singerId, title, originalArtist) {
  return metadataBySong.get(songMetadataKey(singerId, title, originalArtist))
    || metadataBySong.get(songMetadataKey(singerId, title, ""))
    || metadataBySong.get(songMetadataKey("", title, originalArtist))
    || metadataBySong.get(songMetadataKey("", title, ""))
    || metadataFallbackByTitle.get(songMetadataKey("", title, ""))
    || {};
}

function routeSingerId() {
  const match = location.hash.match(/^#singer\/([^/]+)(?:\/debts)?$/);
  return match ? decodeURIComponent(match[1]) : null;
}

function isDebtPage() {
  return /^#singer\/[^/]+\/debts$/.test(location.hash);
}

function queryText() {
  return ($("search")?.value || "").trim().toLowerCase();
}

function songLanguageRank(song) {
  if (cnLanguages.includes(song.language)) return 0;
  if (song.language === "英文") return 1;
  return 2;
}

function defaultSongCompare(a, b) {
  const liked = likeCount(b) - likeCount(a);
  if (liked) return liked;
  const languageRank = songLanguageRank(a) - songLanguageRank(b);
  if (languageRank) return languageRank;
  if (cnLanguages.includes(a.language) && cnLanguages.includes(b.language)) {
    return len(a.title) - len(b.title) || a.title.localeCompare(b.title, "zh-Hans-CN");
  }
  if (a.language === "英文" && b.language === "英文") {
    return a.title.localeCompare(b.title, "en", { sensitivity: "base" });
  }
  return len(a.title) - len(b.title) || a.title.localeCompare(b.title, "zh-Hans-CN");
}

function sortSongs(list, mode) {
  if (mode === "az") return list.toSorted((a, b) => a.title.localeCompare(b.title, "zh-Hans-CN"));
  if (mode === "length") return list.toSorted((a, b) => len(a.title) - len(b.title) || a.title.localeCompare(b.title, "zh-Hans-CN"));
  if (mode === "originalArtist") {
    const counts = list.reduce((map, song) => {
      const artist = song.originalArtist || "待补";
      map.set(artist, (map.get(artist) || 0) + 1);
      return map;
    }, new Map());
    return list.toSorted((a, b) => {
      const artistA = a.originalArtist || "待补";
      const artistB = b.originalArtist || "待补";
      return counts.get(artistB) - counts.get(artistA)
        || artistA.localeCompare(artistB, "zh-Hans-CN")
        || a.title.localeCompare(b.title, "zh-Hans-CN");
    });
  }
  if (mode === "likes") return list.toSorted((a, b) => likeCount(b) - likeCount(a) || a.title.localeCompare(b.title, "zh-Hans-CN"));
  return list.toSorted(defaultSongCompare);
}

function sortSongsByInsight(list, mode) {
  if (!mode) return list;
  const { songSingerCounts, genreCounts, originalArtistCounts } = songInsightCounts(list);
  if (mode === "genrePopularity") {
    return list.toSorted((a, b) => {
      const genreA = a.genre || "待补";
      const genreB = b.genre || "待补";
      return (genreCounts.get(genreB) || 0) - (genreCounts.get(genreA) || 0)
        || genreA.localeCompare(genreB, "zh-Hans-CN")
        || defaultSongCompare(a, b);
    });
  }
  if (mode === "songPopularity") {
    return list.toSorted((a, b) => {
      const keyA = normalizedSongTitle(a.title);
      const keyB = normalizedSongTitle(b.title);
      return (songSingerCounts.get(keyB) || 0) - (songSingerCounts.get(keyA) || 0)
        || a.title.localeCompare(b.title, "zh-Hans-CN")
        || defaultSongCompare(a, b);
    });
  }
  if (mode === "originalArtistPopularity") {
    return list.toSorted((a, b) => {
      const artistA = a.originalArtist || "待补";
      const artistB = b.originalArtist || "待补";
      return (originalArtistCounts.get(artistB) || 0) - (originalArtistCounts.get(artistA) || 0)
        || artistA.localeCompare(artistB, "zh-Hans-CN")
        || a.title.localeCompare(b.title, "zh-Hans-CN");
    });
  }
  return list;
}

function sortPinnedFirst(list) {
  return list.toSorted((a, b) => {
    const pinnedA = isSongPinned(a);
    const pinnedB = isSongPinned(b);
    if (pinnedA && pinnedB) return likeCount(b) - likeCount(a) || a.title.localeCompare(b.title, "zh-Hans-CN");
    if (pinnedA !== pinnedB) return pinnedA ? -1 : 1;
    return 0;
  });
}

function visibleSongs() {
  const q = queryText();
  let list = rows().filter((item) => {
    const language = $("languageFilter").value;
    const genre = $("genreFilter").value;
    const inLanguage = language === "all" || item.language === language;
    const itemGenre = item.genre || "待补";
    const inGenre = genre === "all" || itemGenre === genre;
    const haystack = [item.title, item.artist, item.originalArtist, item.releaseYear, item.genre, item.language, item.note, item.singer, ...item.tags].join(" ").toLowerCase();
    return inLanguage && inGenre && (!q || haystack.includes(q));
  });
  const mode = $("sort").value;
  if (homeSongInsightSortMode) return sortSongsByInsight(list, homeSongInsightSortMode);
  const sorted = sortSongs(list, mode);
  return mode === "default" ? sortPinnedFirst(sorted) : sorted;
}

function normalizedSongTitle(title) {
  return String(title || "")
    .trim()
    .replace(/[“”]/g, "\"")
    .replace(/[’‘]/g, "'")
    .replace(/\s+/g, " ")
    .toLowerCase();
}

function topEntry(entries) {
  return [...entries]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], "zh-Hans-CN"))[0] || ["待补", 0];
}

function songInsightCounts(list) {
  const songDisplay = new Map();
  const songSingerCounts = new Map();
  const seenTitlesBySinger = new Map();
  const genreCounts = new Map();
  const originalArtistCounts = new Map();
  const ignoredOriginalArtists = new Set(["待补", "推荐", "看状态", "双倍", "谨慎点歌"]);

  list.forEach((song) => {
    const titleKey = normalizedSongTitle(song.title);
    if (titleKey) {
      if (!songDisplay.has(titleKey)) songDisplay.set(titleKey, song.title);
      if (!seenTitlesBySinger.has(song.singerId)) seenTitlesBySinger.set(song.singerId, new Set());
      const seenTitles = seenTitlesBySinger.get(song.singerId);
      if (!seenTitles.has(titleKey)) {
        songSingerCounts.set(titleKey, (songSingerCounts.get(titleKey) || 0) + 1);
        seenTitles.add(titleKey);
      }
    }

    const genre = String(song.genre || "").trim();
    if (genre && genre !== "待补") genreCounts.set(genre, (genreCounts.get(genre) || 0) + 1);
    const originalArtist = String(song.originalArtist || "").trim();
    if (originalArtist && !ignoredOriginalArtists.has(originalArtist)) {
      originalArtistCounts.set(originalArtist, (originalArtistCounts.get(originalArtist) || 0) + 1);
    }
  });

  return {
    songDisplay,
    songSingerCounts,
    genreCounts,
    originalArtistCounts
  };
}

function homeSongInsights() {
  const { songDisplay, songSingerCounts, genreCounts, originalArtistCounts } = songInsightCounts(rows());
  const [topGenre, topGenreCount] = topEntry(genreCounts);
  const [topSongKey, topSongCount] = topEntry(songSingerCounts);
  const [topOriginalArtist, topOriginalArtistCount] = topEntry(originalArtistCounts);

  return {
    topGenre,
    topGenreCount,
    topSong: songDisplay.get(topSongKey) || topSongKey,
    topSongCount,
    topOriginalArtist,
    topOriginalArtistCount
  };
}

function renderHomeSongInsights() {
  const target = $("homeSongInsights");
  if (!target) return;
  const stats = homeSongInsights();
  target.innerHTML = `
    <button class="tag-chip home-feature-pill home-song-insight-pill home-song-insight-genre" type="button" data-home-song-insight-sort="genrePopularity" aria-pressed="${homeSongInsightSortMode === "genrePopularity"}">${stats.topGenre}${stats.topGenreCount}首</button>
    <button class="tag-chip home-feature-pill home-song-insight-pill home-song-insight-song" type="button" data-home-song-insight-sort="songPopularity" aria-pressed="${homeSongInsightSortMode === "songPopularity"}">${stats.topSongCount}人会唱「${stats.topSong}」</button>
    <button class="tag-chip home-feature-pill home-song-insight-pill home-song-insight-artist" type="button" data-home-song-insight-sort="originalArtistPopularity" aria-pressed="${homeSongInsightSortMode === "originalArtistPopularity"}">${stats.topOriginalArtistCount}首${stats.topOriginalArtist}</button>
  `;
  target.querySelectorAll("[data-home-song-insight-sort]").forEach((button) => {
    const isActive = button.dataset.homeSongInsightSort === homeSongInsightSortMode;
    button.classList.toggle("home-song-insight-pill-active", isActive);
    button.onclick = () => {
      homeSongInsightSortMode = isActive ? "" : button.dataset.homeSongInsightSort;
      $("sort").value = "default";
      activeTab = "songs";
      homeSongViewMode = "list";
      resetHomeSongBatch();
      renderRoute();
    };
  });
}

function visibleSingers() {
  const q = queryText();
  if (!q) return singers;

  return singers.filter((singer) => {
    const songText = singer.songs.flatMap((song) => {
      const metadata = getSongMetadata(singer.id, song[0], song[4] || "");
      return [song[0], song[2], song[3], song[4] || "", metadata.releaseYear || "", metadata.genre || ""];
    }).join(" ");
    return [singer.name, singerSchedule(singer), singer.sourceNote, ...singerTags(singer), songText].join(" ").toLowerCase().includes(q);
  });
}

function singerDirectMatches() {
  const q = queryText();
  if (!q) return singers;
  return singers.filter((singer) => [singer.name, singerSchedule(singer), ...singerTags(singer)].join(" ").toLowerCase().includes(q));
}

function songMatches() {
  const q = queryText();
  if (!q) return rows();
  return rows().filter((item) => [item.title, item.originalArtist, item.releaseYear, item.genre, item.language, item.singer].join(" ").toLowerCase().includes(q));
}

const tagCategories = {
  voice: ["青年音", "青叔音", "叔音", "公子音", "少年音", "少女音", "少御音", "正太音", "伯伯音", "帝王音", "攻音", "奶嗲音", "奶音萌妹", "百变小音", "音色多变", "普通男人音色", "熟成男人", "软糯艳妇音", "沙哑", "海螺音", "草原原生态"],
  persona: ["慵懒", "性感", "温柔", "温柔治愈", "清新", "治愈", "小清新", "开朗", "热情", "酷哥们", "潮男", "纯情男大", "男大", "男妈妈音", "霸道总裁", "严父音", "假正经", "显性臭屁男", "渣男音", "破碎甜妹", "菌子哥", "羽毛天使", "傻驴音", "故事感", "温青", "成熟", "拐音", "空灵", "雄厚"],
  genre: ["流行", "R&B", "爵士", "Blues", "Funk", "Soul", "Citypop", "民谣", "摇滚", "说唱", "旋律说唱", "古风", "戏腔", "民族", "苦情", "甜歌", "抒情", "小众", "迷幻", "乐队", "全曲风", "经典怀旧", "emo"],
  language: ["中文", "英文", "粤语", "日文", "日韩英", "欧美", "Pop"],
  artist: ["H3R3", "陈奕迅", "卢广仲", "王力宏"],
  ability: ["六边形战士", "深不可测的歌库", "高音", "穿透脑门的高音", "百变奶精", "偶尔超有力量！", "弹唱"]
};

const tagCategoryOrder = ["genre", "voice", "persona", "language", "artist", "ability", "note"];
const tagCategoryClass = {
  voice: "tag-voice",
  persona: "tag-persona",
  genre: "tag-genre",
  language: "tag-language",
  artist: "tag-artist",
  ability: "tag-ability",
  note: "tag-note"
};

function tagCategory(tag) {
  return Object.entries(tagCategories).find(([, tags]) => tags.includes(tag))?.[0] || "persona";
}

function tagClass(tag) {
  return `tag-chip ${tagCategoryClass[tagCategory(tag)]}`;
}

function orderedTags(tags) {
  return [...tags].toSorted((a, b) => tagCategoryOrder.indexOf(tagCategory(a)) - tagCategoryOrder.indexOf(tagCategory(b))
    || a.localeCompare(b, "zh-Hans-CN"));
}

function syncTabForSearch() {
  const q = queryText();
  if (!q) {
    if (activeTab !== "songs") activeTab = "singers";
  }
}

function renderSingers() {
  document.querySelectorAll("[data-singer-sort]").forEach((button) => {
    const isActive = button.dataset.singerSort === homeSingerSortMode;
    button.classList.toggle("singer-sort-pill-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
  const libraryCounts = rows().reduce((map, song) => {
    map.set(song.singerId, (map.get(song.singerId) || 0) + 1);
    return map;
  }, new Map());
  const list = visibleSingers().map((singer, index) => ({ singer, index }))
    .toSorted((a, b) => {
      let primary = debtTotal(b.singer.id) - debtTotal(a.singer.id);
      if (homeSingerSortMode === "library") {
        primary = (libraryCounts.get(b.singer.id) || 0) - (libraryCounts.get(a.singer.id) || 0);
      } else if (homeSingerSortMode === "bomb") {
        primary = singerReactionCount(b.singer.id, "bomb") - singerReactionCount(a.singer.id, "bomb");
      } else if (homeSingerSortMode === "requests") {
        primary = singerSongRequests(b.singer.id).length - singerSongRequests(a.singer.id).length;
      }
      return primary
        || displayName(a.singer.name).localeCompare(displayName(b.singer.name), "zh-Hans-CN")
        || a.index - b.index;
    })
    .map((item) => item.singer);
  $("singers").innerHTML = list.length ? list
    .map(
      (singer) => {
        const owed = debtTotal(singer.id);
        const libraryCount = libraryCounts.get(singer.id) || 0;
        return `
          <article class="card bg-base-100 shadow-md w-full border text-left singer-card-button overflow-hidden" data-id="${singer.id}">
            <div class="singer-reactions" aria-label="${displayName(singer.name)}互动计数">
              <button class="singer-reaction-button singer-reaction-bomb" type="button" aria-label="给 ${displayName(singer.name)} 扔炸弹" data-singer-id="${singer.id}" data-singer-reaction="bomb">
                <span aria-hidden="true">💣</span>
                <span data-singer-reaction-count>${singerReactionCount(singer.id, "bomb")}</span>
              </button>
              <button class="singer-reaction-button singer-reaction-rainbow" type="button" aria-label="给 ${displayName(singer.name)} 彩虹" data-singer-id="${singer.id}" data-singer-reaction="rainbow">
                <span aria-hidden="true">🌈</span>
                <span data-singer-reaction-count>${singerReactionCount(singer.id, "rainbow")}</span>
              </button>
            </div>
            <div class="singer-card-row">
              ${singer.image
                ? `<img class="singer-card-image" src="${singer.image}" alt="${singer.name}" loading="lazy" decoding="async">`
                : `<div class="singer-card-image" role="img" aria-label="${singer.name}"></div>`}
              <div class="singer-card-content">
                <h3 class="singer-name">${displayName(singer.name)}</h3>
                <div class="singer-card-tags">
                  <span class="tag-chip tag-debt">欠歌${owed}</span>
                  ${orderedTags(singerTags(singer)).map((tag) => `<span class="${tagClass(tag)}">${tag}</span>`).join("")}
                  <span class="tag-chip tag-note">曲库${libraryCount}</span>
                </div>
                <p class="singer-card-meta text-xs opacity-60 mt-2">${singerSchedule(singer)}</p>
              </div>
            </div>
          </article>
        `;
      }
    )
    .join("") : "<article class='alert'>没有找到歌手</article>";

  document.querySelectorAll(".singer-card-button").forEach((button) => {
    button.onclick = () => {
      location.hash = `#singer/${button.dataset.id}`;
    };
  });
  bindSingerReactionButtons();
}

function renderProfile(singer) {
  if (!singer) {
    $("profile").innerHTML = "";
    return;
  }

  $("profile").innerHTML = `
    <section class="singer-profile-body">
      <div class="singer-profile-media">
        ${singer.image
          ? `<img class="singer-profile-image object-cover rounded-box shadow-md" src="${singer.image}" alt="${singer.name}" decoding="async">`
          : `<div class="singer-profile-image singer-profile-image-empty rounded-box shadow-md" role="img" aria-label="${singer.name}"></div>`}
        ${previewPlayer(singer)}
      </div>
      <div class="singer-profile-info space-y-3">
        <div class="flex flex-wrap gap-2">
          ${orderedTags(singerTags(singer)).map((tag) => `<span class="${tagClass(tag)}">${tag}</span>`).join("")}
        </div>
        <p class="profile-schedule-text">${singerSchedule(singer)}</p>
      </div>
    </section>
  `;
  bindPreviewPlayers();
}

function songCard(song, options = {}) {
  const showSinger = options.showSinger !== false;
  const flat = options.flat === true;
  const canPin = options.canPin === true;
  const canEdit = options.canEdit === true;
  const compact = options.compact === true;
  const pinned = isSongPinned(song);
  const pinnedKeys = Object.keys(readPinnedSongs()).sort();
  const pinnedIndex = pinned ? Math.max(0, pinnedKeys.indexOf(songKey(song))) : -1;
  const pinnedClass = pinned ? `song-card-pinned song-card-pinned-${(pinnedIndex % 7) + 1}` : "";
  const baseClass = flat ? "song-card-flat" : "bg-base-100 md:bg-base-200 border border-base-300";
  if (compact) {
    return `
      <article class="card ${baseClass} ${pinnedClass} song-card-compact">
        <div class="card-body song-card-body">
          <h3 class="font-bold">${song.title}</h3>
        </div>
      </article>
    `;
  }
  const details = [
    showSinger ? song.singer : "",
    `原唱：${song.originalArtist || "待补"}`,
    song.releaseYear || "",
    song.genre || "",
    song.language
  ].filter(Boolean).join(" · ");

  return `
    <article class="card ${baseClass} ${pinnedClass}">
      <div class="card-body song-card-body flex-row justify-between items-center gap-3">
        <div class="min-w-0">
          <h3 class="font-bold text-lg">${song.title}</h3>
          <p class="text-sm opacity-70">${details}</p>
        </div>
        <div class="song-card-actions">
          ${canEdit ? `<button class="pin-button song-edit-button" type="button" aria-label="编辑 ${song.title}" data-song-edit-key="${encodeURIComponent(song.editKey)}">
            <span class="material-symbols-rounded pin-icon" aria-hidden="true">edit</span>
          </button>` : ""}
          ${canPin ? `<button class="pin-button ${pinned ? "pin-button-active" : ""}" type="button" aria-label="${pinned ? `取消置顶 ${song.title}` : `置顶 ${song.title}`}" data-pin-key="${encodedSongKey(song)}">
            <span class="material-symbols-rounded pin-icon" aria-hidden="true">${pinned ? "vertical_align_bottom" : "vertical_align_top"}</span>
          </button>` : ""}
          <button class="star-button" type="button" aria-label="想听 ${song.title}" data-star-key="${encodedSongKey(song)}" data-star-singer-id="${song.singerId}" data-star-title="${encodeURIComponent(song.title)}">
            <span class="material-symbols-rounded star-icon" aria-hidden="true">kid_star</span>
          </button>
          <button class="like-button" type="button" aria-label="喜欢 ${song.title}" data-like-key="${encodedSongKey(song)}">
            <svg aria-hidden="true" viewBox="0 0 24 24" class="like-icon">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z"></path>
            </svg>
            <span data-like-count>${likeCount(song)}</span>
          </button>
        </div>
      </div>
    </article>
  `;
}

function songViewToggleIcon(mode) {
  return mode === "card"
    ? `<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M4 6h16"></path><path d="M4 12h16"></path><path d="M4 18h16"></path></svg>`
    : `<svg aria-hidden="true" viewBox="0 0 24 24"><rect x="4" y="4" width="6" height="6" rx="1.2"></rect><rect x="14" y="4" width="6" height="6" rx="1.2"></rect><rect x="4" y="14" width="6" height="6" rx="1.2"></rect><rect x="14" y="14" width="6" height="6" rx="1.2"></rect></svg>`;
}

function updateSongViewToggle(buttonId, mode) {
  const button = $(buttonId);
  if (!button) return;
  button.innerHTML = songViewToggleIcon(mode);
  button.setAttribute("aria-pressed", mode === "card" ? "true" : "false");
  button.title = mode === "card" ? "切换到列表视图" : "切换到卡片视图";
}

function renderSongs() {
  renderHomeSongInsights();
  const list = visibleSongs();
  const visibleList = list.slice(0, homeSongRenderLimit);
  const compact = homeSongViewMode === "card";
  updateSongViewToggle("homeSongViewToggle", homeSongViewMode);
  $("songs").className = compact ? "song-card-grid-compact" : "grid gap-2";
  $("songs").innerHTML = visibleList.map((song) => songCard(song, { compact })).join("") || "<article class='alert'>没有找到结果</article>";
  if (!compact) {
    bindStarButtons();
    bindLikeButtons();
  }
}

function nearPageBottom() {
  return window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 520;
}

function loadMoreVisibleSongs() {
  if (!nearPageBottom()) return;
  if (!$("homeView").classList.contains("hidden") && activeTab === "songs") {
    const total = visibleSongs().length;
    if (homeSongRenderLimit < total) {
      homeSongRenderLimit += songRenderBatchSize;
      renderSongs();
    }
    return;
  }
  if (!$("singerPageView").classList.contains("hidden") && activeDetailPanel === "library") {
    const singer = singers.find((item) => item.id === routeSingerId());
    const total = detailSongs(singer).length;
    if (detailSongRenderLimit < total) {
      detailSongRenderLimit += songRenderBatchSize;
      renderSingerPage();
    }
  }
}

function detailSongs(singer) {
  if (!singer) return [];
  let list = rows().filter((song) => song.singerId === singer.id);
  const language = $("detailLanguage").value;
  if (language !== "all") list = list.filter((song) => song.language === language);
  const q = detailSongQuery.trim().toLowerCase();
  if (q) {
    list = list.filter((song) => [song.title, song.originalArtist, song.releaseYear, song.genre, song.language].join(" ").toLowerCase().includes(q));
  }
  return sortPinnedFirst(sortSongs(list, $("detailSort").value));
}

function singerLibraryRows(singer) {
  return rows().filter((song) => song.singerId === singer.id);
}

function singerPreviewTrack(singer) {
  const firstSong = singerLibraryRows(singer)[0];
  return {
    title: singer.previewTitle || firstSong?.title || "试听待上传",
    src: singer.previewAudio || ""
  };
}

function previewPlayer(singer) {
  const track = singerPreviewTrack(singer);
  const label = track.src ? `试听 ${displayName(singer.name)}：${track.title}` : `${displayName(singer.name)} 试听音频待上传`;
  return `
    <div class="profile-audio-player" aria-label="${label}">
      <button class="profile-audio-button" type="button" data-preview-play ${track.src ? `data-preview-src="${track.src}"` : "disabled"} aria-label="${label}">
        <svg aria-hidden="true" viewBox="0 0 24 24" class="profile-audio-icon profile-audio-play">
          <polygon points="8 5 19 12 8 19 8 5"></polygon>
        </svg>
        <svg aria-hidden="true" viewBox="0 0 24 24" class="profile-audio-icon profile-audio-pause">
          <rect x="7" y="5" width="4" height="14" rx="1"></rect>
          <rect x="13" y="5" width="4" height="14" rx="1"></rect>
        </svg>
      </button>
      <span class="profile-audio-title">${track.title}</span>
      ${track.src ? `<audio preload="none" src="${track.src}"></audio>` : ""}
    </div>
  `;
}

function bindPreviewPlayers() {
  document.querySelectorAll("[data-preview-play]").forEach((button) => {
    button.onclick = () => {
      const player = button.closest(".profile-audio-player");
      const audio = player?.querySelector("audio");
      if (!audio) return;
      document.querySelectorAll(".profile-audio-player audio").forEach((item) => {
        if (item !== audio) {
          item.pause();
          item.closest(".profile-audio-player")?.classList.remove("profile-audio-playing");
        }
      });
      if (audio.paused) {
        audio.play()
          .then(() => player.classList.add("profile-audio-playing"))
          .catch(() => player.classList.remove("profile-audio-playing"));
      } else {
        audio.pause();
        player.classList.remove("profile-audio-playing");
      }
      audio.onended = () => player.classList.remove("profile-audio-playing");
    };
  });
}

function singerSongRequests(singerId) {
  return readSongRequests()
    .filter((request) => request.singerId === singerId)
    .toSorted((a, b) => Date.parse(b.createdAt || 0) - Date.parse(a.createdAt || 0));
}

function requestSongKey(request) {
  return `request:${request.singerId}:${request.id || request.createdAt}:${request.title}`;
}

function requestSongCard(request, index) {
  const key = requestSongKey(request);
  const requestGradientOrder = [3, 4, 1, 2, 5, 6, 7];
  const signature = request.signature || "匿名";
  return `
    <article class="card song-card-flat request-song-card">
      <div class="card-body song-card-body flex-row justify-between items-center gap-3">
        <div class="request-song-signer song-card-pinned-${requestGradientOrder[index % requestGradientOrder.length]}">
          <span>${signature}</span>
        </div>
        <div class="min-w-0">
          <h3 class="font-bold text-lg">${request.title}</h3>
          ${request.note ? `<p class="request-song-meta">${request.note}</p>` : ""}
        </div>
        <div class="song-card-actions">
          <button class="like-button" type="button" aria-label="喜欢 ${request.title}" data-like-key="${encodeURIComponent(key)}">
            <svg aria-hidden="true" viewBox="0 0 24 24" class="like-icon">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z"></path>
            </svg>
            <span data-like-count>${readLikes()[key] || 0}</span>
          </button>
        </div>
      </div>
    </article>
  `;
}

function renderSongRequests(singer) {
  const requests = singerSongRequests(singer.id);
  $("detailRequestList").className = requests.length ? "grid gap-2" : "detail-empty-list";
  $("detailRequestList").innerHTML = requests.length
    ? requests.map(requestSongCard).join("")
    : "<p class='song-empty-state'>还没有人点歌🤔</p>";
  bindLikeButtons();
}

function topSongCategories(singer) {
  const counts = singerLibraryRows(singer).reduce((map, song) => {
    const category = song.genre || song.language || "待补";
    map.set(category, (map.get(category) || 0) + 1);
    return map;
  }, new Map());
  return [...counts.entries()]
    .toSorted((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], "zh-Hans-CN"))
    .slice(0, 3)
    .map(([category]) => category);
}

function renderDetailPanelSwitches(singer) {
  const libraryCount = singerLibraryRows(singer).length;
  $("debtPanelSwitch").classList.toggle("detail-panel-active", activeDetailPanel === "debts");
  $("requestPanelSwitch").classList.toggle("detail-panel-active", activeDetailPanel === "requests");
  $("libraryPanelSwitch").classList.toggle("detail-panel-active", activeDetailPanel === "library");
  $("debtPanelSwitch").innerHTML = `
    <div class="panel-copy">
      <div class="text-sm opacity-60">欠歌账簿</div>
      <div class="font-bold">待还 ${debtTotal(singer.id)} 首</div>
    </div>
    <svg class="panel-chevron" aria-hidden="true" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"></path></svg>
  `;
  $("debtPanelSwitch").classList.remove("debt-panel-has-counter");
  $("requestPanelSwitch").innerHTML = `
    <div class="panel-copy">
      <div class="text-sm opacity-60">想听TA唱</div>
      <div class="font-bold">${singerSongRequests(singer.id).length} 首</div>
    </div>
    <svg class="panel-chevron" aria-hidden="true" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"></path></svg>
  `;
  $("libraryPanelSwitch").innerHTML = `
    <div class="panel-copy">
      <div class="text-sm opacity-60">曲库</div>
      <div class="font-bold">${libraryCount} 首</div>
    </div>
    <svg class="panel-chevron" aria-hidden="true" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"></path></svg>
  `;
  $("libraryPanelSwitch").classList.remove("debt-panel-has-counter");
  document.querySelectorAll("[data-detail-panel]").forEach((button) => {
    button.onclick = () => {
      if (button.dataset.detailPanel === "library" && activeDetailPanel !== "library") {
        detailSongViewMode = "list";
        resetDetailSongBatch();
      }
      activeDetailPanel = button.dataset.detailPanel;
      renderSingerPage();
    };
    button.onkeydown = (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      if (button.dataset.detailPanel === "library" && activeDetailPanel !== "library") {
        detailSongViewMode = "list";
        resetDetailSongBatch();
      }
      activeDetailPanel = button.dataset.detailPanel;
      renderSingerPage();
    };
  });
}

function renderSingerPage() {
  const singer = singers.find((item) => item.id === routeSingerId());
  if (!singer) {
    location.hash = "#home";
    return;
  }
  if (lastDetailSingerId !== singer.id) {
    activeDetailPanel = "debts";
    lastDetailSingerId = singer.id;
    detailSongQuery = "";
    detailSongViewMode = "list";
    resetDetailSongBatch();
  }
  const canManage = canManageSinger(singer);
  $("detailTitle").textContent = displayName(singer.name);
  $("detailReactions").innerHTML = `
    <div class="singer-reactions singer-reactions-detail" aria-label="${displayName(singer.name)}互动计数">
      <button class="singer-reaction-button singer-reaction-bomb" type="button" aria-label="给 ${displayName(singer.name)} 扔炸弹" data-singer-id="${singer.id}" data-singer-reaction="bomb">
        <span aria-hidden="true">💣</span>
        <span data-singer-reaction-count>${singerReactionCount(singer.id, "bomb")}</span>
      </button>
      <button class="singer-reaction-button singer-reaction-rainbow" type="button" aria-label="给 ${displayName(singer.name)} 彩虹" data-singer-id="${singer.id}" data-singer-reaction="rainbow">
        <span aria-hidden="true">🌈</span>
        <span data-singer-reaction-count>${singerReactionCount(singer.id, "rainbow")}</span>
      </button>
      ${canManage ? `<button class="btn btn-sm recommend-btn action-btn" type="button" aria-label="修改在档时段和 tags" data-edit-schedule>更新</button>` : ""}
    </div>
  `;
  renderProfile(singer);
  document.querySelector("[data-edit-schedule]")?.addEventListener("click", openScheduleDialog);
  renderDetailPanelSwitches(singer);
  $("detailDebtSection").classList.toggle("hidden", activeDetailPanel !== "debts");
  $("detailRequestSection").classList.toggle("hidden", activeDetailPanel !== "requests");
  $("detailRequestAdd").onclick = () => openSongRequestDialog(singer);
  if (activeDetailPanel === "requests") renderSongRequests(singer);
  const libraryRows = singerLibraryRows(singer);
  const hasSongs = libraryRows.length > 0;
  populateDetailLanguageFilter(singer);
  $("detailSonglistSection").classList.toggle("hidden", activeDetailPanel !== "library");
  $("detailSearch").value = detailSongQuery;
  $("detailSearchWrap").classList.toggle("hidden", !hasSongs);
  $("clearDetailSearch").classList.toggle("hidden", !detailSongQuery);
  $("songlistControls").classList.toggle("hidden", !hasSongs && !canManage);
  $("songlistControls").querySelectorAll(".form-control").forEach((control) => {
    control.classList.toggle("hidden", !hasSongs);
  });
  $("detailSongViewToggle").classList.toggle("hidden", !hasSongs);
  updateSongViewToggle("detailSongViewToggle", detailSongViewMode);
  $("detailAddSong").classList.toggle("hidden", !canManage);
  $("detailAddSong").onclick = canManage ? openAddSongDialog : null;
  renderDebtList(singer, $("detailDebtList"));
  $("debtInlineHeading").classList.toggle("hidden", !canManage);
  $("detailDebtAdd").classList.toggle("hidden", !canManage);
  $("detailDebtAdd").onclick = canManage ? openDebtDialog : null;
  if (activeDetailPanel === "library" && hasSongs) {
    const compact = detailSongViewMode === "card";
    const list = detailSongs(singer);
    const visibleList = list.slice(0, detailSongRenderLimit);
    $("detailSongs").className = compact ? "song-card-grid-compact" : "grid gap-2";
    $("detailSongs").innerHTML = visibleList
      .map((song) => songCard(song, { showSinger: false, flat: true, canPin: canManage, canEdit: canManage, compact }))
      .join("") || "<article class='alert'>没有找到歌曲</article>";
    if (!compact) {
      bindSongEditButtons();
      bindPinButtons();
      bindStarButtons();
      bindLikeButtons();
    }
  } else if (activeDetailPanel === "library") {
    $("detailSongs").className = "detail-empty-list";
    $("detailSongs").innerHTML = "<p class='song-empty-state'>歌单呢🤔</p>";
  } else {
    $("detailSongs").innerHTML = "";
  }
  bindSingerReactionButtons();
}

function renderHeader() {
  $("singerCount").textContent = visibleSingers().length;
  $("songCount").textContent = visibleSongs().length;
  $("clearSearch").classList.toggle("hidden", !queryText());
}

function renderTabs() {
  $("singersTab").classList.toggle("tab-active", activeTab === "singers");
  $("songsTab").classList.toggle("tab-active", activeTab === "songs");
  $("singersView").classList.toggle("hidden", activeTab !== "singers");
  $("songsView").classList.toggle("hidden", activeTab !== "songs");
}

function renderHome() {
  syncTabForSearch();
  populateHomeSongFilters();
  renderHeader();
  renderTabs();
  if (activeTab === "songs") {
    renderSongs();
  } else {
    renderSingers();
  }
}

function renderRoute() {
  const hasSinger = Boolean(routeSingerId());
  const debtPage = isDebtPage();
  if (debtPage) {
    activeDetailPanel = "debts";
    history.replaceState(null, "", `#singer/${routeSingerId()}`);
  }
  $("homeView").classList.toggle("hidden", hasSinger);
  $("singerPageView").classList.toggle("hidden", !hasSinger);
  $("debtPageView").classList.add("hidden");
  if (hasSinger) renderSingerPage();
  else {
    if (lastRouteKind === "singer" && activeTab === "songs") {
      homeSongViewMode = "list";
      resetHomeSongBatch();
    }
    lastDetailSingerId = "";
    activeDetailPanel = "debts";
    renderHome();
  }
  lastRouteKind = hasSinger ? "singer" : "home";
}

function sortedUnique(values) {
  return [...new Set(values.filter(Boolean))].toSorted((a, b) => a.localeCompare(b, "zh-Hans-CN"));
}

function languageOptionCompare(a, b) {
  const order = ["中文", "英文", "粤语", "闽南语"];
  const rankA = order.includes(a) ? order.indexOf(a) : order.length;
  const rankB = order.includes(b) ? order.indexOf(b) : order.length;
  return rankA - rankB || a.localeCompare(b, "zh-Hans-CN");
}

function setSelectOptions(selectId, defaultLabel, values, compare = (a, b) => a.localeCompare(b, "zh-Hans-CN")) {
  const select = $(selectId);
  const current = select.value || "all";
  const options = [...new Set(values.filter(Boolean))].toSorted(compare);
  select.innerHTML = `<option value="all">${defaultLabel}</option>${options.map((item) => `<option value="${item}">${item}</option>`).join("")}`;
  select.value = options.includes(current) ? current : "all";
}

function populateHomeSongFilters() {
  const allRows = rows();
  setSelectOptions("languageFilter", "全部语种", allRows.map((song) => song.language), languageOptionCompare);
  setSelectOptions("genreFilter", "全部类型", allRows.map((song) => song.genre));
}

function populateDetailLanguageFilter(singer) {
  setSelectOptions("detailLanguage", "全部", singerLibraryRows(singer).map((song) => song.language), languageOptionCompare);
}

populateHomeSongFilters();
applyColorMode(currentColorMode());

$("themeToggle").onclick = () => {
  applyColorMode(currentColorMode() === "dark" ? "light" : "dark");
};

$("loginSinger").innerHTML = singers
  .toSorted((a, b) => displayName(a.name).localeCompare(displayName(b.name), "zh-Hans-CN"))
  .map((singer) => `<option value="${singer.id}">${displayName(singer.name)}</option>`)
  .join("");

$("loginButton").onclick = () => {
  $("loginMessage").textContent = "";
  $("loginPassword").value = "";
  const current = loggedSingerId();
  const singer = singers.find((item) => item.id === current);
  $("loginFormPanel").classList.toggle("hidden", Boolean(singer));
  $("loggedInPanel").classList.toggle("hidden", !singer);
  if (singer) {
    $("loggedInSingerName").textContent = displayName(singer.name);
  } else if (current) {
    $("loginSinger").value = current;
  }
  $("loginDialog").showModal();
};

$("saveLogin").onclick = () => {
  if ($("loginPassword").value !== singerLoginPassword) {
    $("loginMessage").textContent = "密码不正确";
    return;
  }
  writeAuth({ singerId: $("loginSinger").value, loggedAt: new Date().toISOString() });
  $("loginDialog").close();
  renderRoute();
};

$("logoutSinger").onclick = () => {
  writeAuth({});
  $("loginDialog").close();
  renderRoute();
};

$("search").oninput = () => {
  clearTimeout(searchRenderTimer);
  searchRenderTimer = setTimeout(() => {
    resetHomeSongBatch();
    renderRoute();
  }, 80);
};

["sort", "languageFilter", "genreFilter"].forEach((id) => {
  $(id).oninput = () => {
    if (activeTab !== "songs") {
      homeSongViewMode = "list";
      activeTab = "songs";
    }
    if (id === "sort") homeSongInsightSortMode = "";
    resetHomeSongBatch();
    renderRoute();
  };
});

$("homeSongViewToggle").onclick = () => {
  homeSongViewMode = homeSongViewMode === "card" ? "list" : "card";
  activeTab = "songs";
  resetHomeSongBatch();
  renderRoute();
};

$("clearSearch").onclick = () => {
  $("search").value = "";
  activeTab = "singers";
  renderRoute();
  $("search").focus();
};

["detailSort", "detailLanguage"].forEach((id) => {
  $(id).oninput = () => {
    resetDetailSongBatch();
    renderRoute();
  };
});

$("detailSongViewToggle").onclick = () => {
  detailSongViewMode = detailSongViewMode === "card" ? "list" : "card";
  resetDetailSongBatch();
  renderRoute();
};

$("detailSearch").oninput = () => {
  detailSongQuery = $("detailSearch").value.trim();
  resetDetailSongBatch();
  renderRoute();
};

$("clearDetailSearch").onclick = () => {
  detailSongQuery = "";
  $("detailSearch").value = "";
  resetDetailSongBatch();
  renderRoute();
  $("detailSearch").focus();
};

$("singersTab").onclick = () => {
  activeTab = "singers";
  renderRoute();
};

document.querySelectorAll("[data-singer-sort]").forEach((button) => {
  button.onclick = () => {
    homeSingerSortMode = button.dataset.singerSort || "debts";
    activeTab = "singers";
    renderRoute();
  };
});

$("songsTab").onclick = () => {
  if (activeTab !== "songs") homeSongViewMode = "list";
  activeTab = "songs";
  resetHomeSongBatch();
  renderRoute();
};

$("backHome").onclick = () => {
  lastDetailSingerId = "";
  activeDetailPanel = "debts";
  location.hash = "#home";
};

$("backSinger").onclick = () => {
  const singer = singers.find((item) => item.id === routeSingerId());
  location.hash = singer ? `#singer/${singer.id}` : "#home";
};

window.addEventListener("scroll", () => {
  if (scrollLoadTimer) return;
  scrollLoadTimer = window.setTimeout(() => {
    scrollLoadTimer = 0;
    loadMoreVisibleSongs();
  }, 120);
}, { passive: true });

$("debtPageAdd").onclick = openDebtDialog;
document.querySelectorAll("[data-close]").forEach((button) => {
  button.onclick = () => button.closest("dialog").close();
});
$("debtMinus").onclick = () => updateDebtCounter(debtCounter - 1);
$("debtPlus").onclick = () => updateDebtCounter(debtCounter + 1);
$("editDebtMinus").onclick = () => updateEditDebtCounter(editDebtCounter - 1);
$("editDebtPlus").onclick = () => updateEditDebtCounter(editDebtCounter + 1);
$("saveRecommend").onclick = () => {
  const singer = singers.find((item) => item.id === routeSingerId());
  if (!canManageSinger(singer)) return;
  const payload = {
    singerId: singer.id,
    singer: displayName(singer.name),
    id: globalThis.crypto?.randomUUID ? globalThis.crypto.randomUUID() : `${Date.now()}-${Math.random()}`,
    creditor: $("debtCreditor").value.trim(),
    count: debtCounter,
    note: $("debtNote").value.trim(),
    createdAt: new Date().toISOString()
  };
  const saved = readDebts();
  saved.push(payload);
  writeDebts(saved);
  $("dialog").close();
  renderRoute();
  celebrateDebt();
};

$("saveDebtEdit").onclick = () => {
  const targetKey = $("editDebtKey").value;
  const debts = readDebts();
  const target = debts.find((item, index) => debtKey(item, index) === targetKey);
  const singer = singers.find((item) => item.id === target?.singerId);
  if (!canManageSinger(singer)) return;
  const updated = debts.map((item, index) => {
    if (debtKey(item, index) !== targetKey) return item;
    return {
      ...item,
      count: editDebtCounter,
      note: $("editDebtNote").value.trim()
    };
  });
  writeDebts(updated);
  $("editDebtDialog").close();
  renderRoute();
};

$("saveSchedule").onclick = () => {
  const singer = singers.find((item) => item.id === routeSingerId());
  if (!canManageSinger(singer)) return;
  const schedules = readSchedules();
  schedules[singer.id] = $("scheduleInput").value.trim() || singer.schedule;
  writeSchedules(schedules);
  const tags = readSingerTags();
  tags[singer.id] = parseTags($("tagsInput").value, singer.tags);
  writeSingerTags(tags);
  $("scheduleDialog").close();
  renderRoute();
};

$("saveNewSong").onclick = () => {
  const singer = singers.find((item) => item.id === routeSingerId());
  if (!canManageSinger(singer)) return;
  const title = $("newSongTitle").value.trim();
  if (!title) {
    $("newSongTitle").focus();
    return;
  }
  const payload = {
    title,
    originalArtist: $("newSongOriginalArtist").value.trim(),
    releaseYear: $("newSongYear").value.trim(),
    language: $("newSongLanguage").value
  };
  if ($("songFormMode").value === "edit") {
    const editKey = $("editSongKey").value;
    const edits = readSongEdits();
    edits[editKey] = payload;
    writeSongEdits(edits);
    $("addSongDialog").close();
    activeDetailPanel = "library";
    renderRoute();
    return;
  }
  const saved = readCustomSongs();
  saved.push({
    id: globalThis.crypto?.randomUUID ? globalThis.crypto.randomUUID() : `${Date.now()}-${Math.random()}`,
    singerId: singer.id,
    singer: displayName(singer.name),
    ...payload,
    createdAt: new Date().toISOString()
  });
  writeCustomSongs(saved);
  $("addSongDialog").close();
  activeDetailPanel = "library";
  renderRoute();
};

$("deleteSong").onclick = () => {
  const singer = singers.find((item) => item.id === routeSingerId());
  if (!canManageSinger(singer)) return;
  const editKey = $("editSongKey").value;
  if (!editKey) return;
  const deleted = readDeletedSongs();
  deleted[editKey] = true;
  writeDeletedSongs(deleted);
  const edits = readSongEdits();
  delete edits[editKey];
  writeSongEdits(edits);
  $("addSongDialog").close();
  activeDetailPanel = "library";
  renderRoute();
};

$("saveSongRequest").onclick = () => {
  const targetSingerId = $("requestSingerId").value || routeSingerId();
  const singer = singers.find((item) => item.id === targetSingerId);
  if (!singer) return;
  const title = $("requestSongTitle").value.trim();
  if (!title) {
    $("requestSongTitle").focus();
    return;
  }
  const requests = readSongRequests();
  requests.push({
    id: globalThis.crypto?.randomUUID ? globalThis.crypto.randomUUID() : `${Date.now()}-${Math.random()}`,
    singerId: singer.id,
    singer: displayName(singer.name),
    title,
    note: $("requestSongNote").value.trim(),
    signature: $("requestSongSignature").value.trim(),
    createdAt: new Date().toISOString()
  });
  writeSongRequests(requests);
  $("requestSongDialog").close();
  activeDetailPanel = "requests";
  renderRoute();
  celebrateSongRequest();
};

$("deleteDebt").onclick = () => {
  const targetKey = $("editDebtKey").value;
  const target = readDebts().find((item, index) => debtKey(item, index) === targetKey);
  const singer = singers.find((item) => item.id === target?.singerId);
  if (!canManageSinger(singer)) return;
  const updated = readDebts().filter((item, index) => debtKey(item, index) !== targetKey);
  writeDebts(updated);
  $("editDebtDialog").close();
  renderRoute();
};

window.addEventListener("hashchange", renderRoute);
if (!location.hash) location.hash = "#home";
renderRoute();
loadSharedState();
