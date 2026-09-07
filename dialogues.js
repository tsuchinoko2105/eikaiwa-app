// 会話練習用の短いダイアログ(各カテゴリ1本)
// turns: speaker "npc"(相手役、自動再生) / "you"(あなたの番、マイクで話す)
const DIALOGUES = [
  {
    id: "greetings-d1", cat: "greetings", level: "beginner", title: "初めましての挨拶",
    turns: [
      { speaker: "npc", en: "Hi there! I don't think we've met before.", ja: "こんにちは!お会いするのは初めてですよね。" },
      { speaker: "you", en: "Hi, nice to meet you. I'm Taro.", ja: "はじめまして、タロウです。" },
      { speaker: "npc", en: "Nice to meet you too, Taro. What do you do?", ja: "こちらこそ、タロウさん。お仕事は何をされていますか?" },
      { speaker: "you", en: "I work in marketing. How about you?", ja: "マーケティングの仕事をしています。あなたは?" },
      { speaker: "npc", en: "I'm a teacher. It's great to meet you.", ja: "私は教師です。お会いできてよかったです。" },
      { speaker: "you", en: "Likewise! Let's keep in touch.", ja: "私もです!また連絡取り合いましょう。" },
    ],
  },
  {
    id: "shopping-d1", cat: "shopping", level: "beginner", title: "お店での買い物",
    turns: [
      { speaker: "npc", en: "Hi, can I help you find anything?", ja: "いらっしゃいませ、何かお探しですか?" },
      { speaker: "you", en: "I'm just looking, thanks.", ja: "見ているだけです、ありがとう。" },
      { speaker: "npc", en: "Sure, let me know if you need anything.", ja: "かしこまりました、何かあれば声をかけてください。" },
      { speaker: "you", en: "Actually, how much is this jacket?", ja: "あの、このジャケットはいくらですか?" },
      { speaker: "npc", en: "It's on sale — three thousand yen.", ja: "セール中で3,000円です。" },
      { speaker: "you", en: "Great, I'll take it.", ja: "いいですね、それをください。" },
    ],
  },
  {
    id: "restaurant-d1", cat: "restaurant", level: "beginner", title: "レストランでの注文",
    turns: [
      { speaker: "npc", en: "Welcome! How many in your party?", ja: "いらっしゃいませ!何名様ですか?" },
      { speaker: "you", en: "Table for two, please.", ja: "2名でお願いします。" },
      { speaker: "npc", en: "Right this way. Here's the menu.", ja: "こちらへどうぞ。メニューです。" },
      { speaker: "you", en: "Could you recommend something popular here?", ja: "ここで人気のあるものを勧めてもらえますか?" },
      { speaker: "npc", en: "Our grilled salmon is very popular.", ja: "グリルサーモンが人気です。" },
      { speaker: "you", en: "Sounds great, I'll have that.", ja: "いいですね、それをお願いします。" },
    ],
  },
  {
    id: "directions-d1", cat: "directions", level: "intermediate", title: "駅までの道を尋ねる",
    turns: [
      { speaker: "npc", en: "Excuse me, are you lost?", ja: "すみません、道に迷われていますか?" },
      { speaker: "you", en: "Yes, actually. How do I get to the station?", ja: "はい、実は。駅にはどう行けばいいですか?" },
      { speaker: "npc", en: "Turn left at the next corner, then go straight.", ja: "次の角を左に曲がって、まっすぐ進んでください。" },
      { speaker: "you", en: "Is it within walking distance?", ja: "歩いて行ける距離ですか?" },
      { speaker: "npc", en: "Yes, about ten minutes from here.", ja: "はい、ここから10分くらいです。" },
      { speaker: "you", en: "Thank you so much for your help.", ja: "助けていただきありがとうございます。" },
    ],
  },
  {
    id: "travel-d1", cat: "travel", level: "intermediate", title: "ホテルのチェックイン",
    turns: [
      { speaker: "npc", en: "Good evening, welcome. Do you have a reservation?", ja: "こんばんは、ようこそ。ご予約はございますか?" },
      { speaker: "you", en: "Yes, I have a reservation under the name Tanaka.", ja: "はい、タナカの名前で予約しています。" },
      { speaker: "npc", en: "Great, here's your key. Breakfast is from seven to ten.", ja: "かしこまりました、こちらが鍵です。朝食は7時から10時までです。" },
      { speaker: "you", en: "Got it. What time is check-out?", ja: "わかりました。チェックアウトは何時ですか?" },
      { speaker: "npc", en: "Check-out is at eleven a.m.", ja: "チェックアウトは午前11時です。" },
      { speaker: "you", en: "Got it, thank you.", ja: "了解しました、ありがとうございます。" },
    ],
  },
  {
    id: "phone-d1", cat: "phone", level: "intermediate", title: "電話でのアポイント変更",
    turns: [
      { speaker: "npc", en: "Hello, this is Smith speaking.", ja: "もしもし、スミスです。" },
      { speaker: "you", en: "Hi, this is Taro. I'd like to reschedule our appointment.", ja: "もしもし、タロウです。予約の日程を変更したいのですが。" },
      { speaker: "npc", en: "Sure, when works better for you?", ja: "かしこまりました、いつがよろしいですか?" },
      { speaker: "you", en: "Does three p.m. on Friday work for you?", ja: "金曜日の午後3時でご都合いかがですか?" },
      { speaker: "npc", en: "That works for me.", ja: "大丈夫です。" },
      { speaker: "you", en: "Great, thank you. See you then.", ja: "ありがとうございます、それでは金曜日に。" },
    ],
  },
  {
    id: "smalltalk-d1", cat: "smalltalk", level: "beginner", title: "週明けの雑談",
    turns: [
      { speaker: "npc", en: "Morning! How was your weekend?", ja: "おはよう!週末はどうだった?" },
      { speaker: "you", en: "It was great, thanks. How about yours?", ja: "よかったよ、ありがとう。そっちはどうだった?" },
      { speaker: "npc", en: "Pretty relaxing. I heard you're planning a trip — where to?", ja: "まあまあゆっくりできたよ。旅行を計画してるって聞いたけど、どこに行くの?" },
      { speaker: "you", en: "To Okinawa, actually. I can't wait.", ja: "実は沖縄なんだ。楽しみだよ。" },
      { speaker: "npc", en: "That sounds fun! Nice weather there too.", ja: "それは楽しそうだね!天気もいいところだし。" },
      { speaker: "you", en: "I know, right? I'll send you pictures.", ja: "でしょ?写真送るね。" },
    ],
  },
  {
    id: "work-d1", cat: "work", level: "intermediate", title: "仕事の進捗確認",
    turns: [
      { speaker: "npc", en: "Hey, do you have a minute? I want to touch base on the project.", ja: "ちょっと時間ある?プロジェクトについて進捗確認したいんだけど。" },
      { speaker: "you", en: "Sure. I'll have it done by the end of the day.", ja: "もちろん。今日中に終わらせます。" },
      { speaker: "npc", en: "Great. Could you cc me on the email when it's sent?", ja: "いいね。送ったらメールを私にもCCしてもらえる?" },
      { speaker: "you", en: "Of course, I'll send it right after.", ja: "もちろんです、送った後すぐに。" },
      { speaker: "npc", en: "Thanks, great job on this so far.", ja: "ありがとう、ここまでよくやってくれてるね。" },
      { speaker: "you", en: "I appreciate that, thank you.", ja: "そう言っていただけて嬉しいです、ありがとうございます。" },
    ],
  },
  {
    id: "trouble-d1", cat: "trouble", level: "advanced", title: "紛失トラブルの対応",
    turns: [
      { speaker: "npc", en: "Sir, is everything okay?", ja: "お客様、大丈夫ですか?" },
      { speaker: "you", en: "I lost my wallet. Can you help me?", ja: "財布をなくしました。助けてもらえますか?" },
      { speaker: "npc", en: "Let's file a report together. Do you have any ID left?", ja: "一緒に届け出をしましょう。身分証は他にありますか?" },
      { speaker: "you", en: "Yes, I still have my passport.", ja: "はい、パスポートはまだ持っています。" },
      { speaker: "npc", en: "Good, that'll help. We'll contact you if it's found.", ja: "それは助かります。見つかったらご連絡します。" },
      { speaker: "you", en: "Thank you, I really appreciate your help.", ja: "ありがとうございます、本当に助かります。" },
    ],
  },
  {
    id: "hospital-d1", cat: "hospital", level: "intermediate", title: "薬局での相談",
    turns: [
      { speaker: "npc", en: "Hi, how can I help you today?", ja: "こんにちは、今日はどうされましたか?" },
      { speaker: "you", en: "I have a headache. Can you recommend some medicine?", ja: "頭痛がします。何かいい薬はありますか?" },
      { speaker: "npc", en: "Sure. Are you allergic to anything?", ja: "かしこまりました。何かアレルギーはありますか?" },
      { speaker: "you", en: "I'm allergic to penicillin. Is that a problem?", ja: "ペニシリンにアレルギーがあります。問題ありますか?" },
      { speaker: "npc", en: "No, this one is fine. Take one after meals.", ja: "いいえ、これなら大丈夫です。食後に1錠飲んでください。" },
      { speaker: "you", en: "Got it, thank you.", ja: "わかりました、ありがとうございます。" },
    ],
  },
  {
    id: "bank-d1", cat: "bank", level: "beginner", title: "銀行口座の開設",
    turns: [
      { speaker: "npc", en: "Hello, how can I help you today?", ja: "こんにちは、今日はどのようなご用件ですか?" },
      { speaker: "you", en: "I'd like to open a bank account.", ja: "銀行口座を開設したいです。" },
      { speaker: "npc", en: "Sure, do you have your ID with you?", ja: "かしこまりました、身分証はお持ちですか?" },
      { speaker: "you", en: "Yes, here's my passport.", ja: "はい、こちらがパスポートです。" },
      { speaker: "npc", en: "Perfect. This will take about fifteen minutes.", ja: "完璧です。15分ほどかかります。" },
      { speaker: "you", en: "No problem, I'll wait.", ja: "問題ありません、待ちます。" },
    ],
  },
  {
    id: "salon-d1", cat: "salon", level: "beginner", title: "美容院での注文",
    turns: [
      { speaker: "npc", en: "Hi, what can I do for you today?", ja: "いらっしゃいませ、今日はどうされますか?" },
      { speaker: "you", en: "I'd like a haircut, please. Not too short.", ja: "カットをお願いします。あまり短くしないでください。" },
      { speaker: "npc", en: "Got it. Any particular style in mind?", ja: "わかりました。何か希望のスタイルはありますか?" },
      { speaker: "you", en: "Just a trim, and maybe layer it a bit.", ja: "軽く整える程度で、少しレイヤーを入れてもらえますか。" },
      { speaker: "npc", en: "Sure, that sounds great.", ja: "かしこまりました、いいですね。" },
      { speaker: "you", en: "Thanks, I appreciate it.", ja: "ありがとうございます。" },
    ],
  },
  {
    id: "onlinemeeting-d1", cat: "onlinemeeting", level: "advanced", title: "オンライン会議のトラブル対応",
    turns: [
      { speaker: "npc", en: "Can you hear me okay? You're breaking up a little.", ja: "聞こえていますか?少し音声が途切れています。" },
      { speaker: "you", en: "Sorry, could you say that again? I think my connection is unstable.", ja: "すみません、もう一度言ってもらえますか?接続が不安定みたいです。" },
      { speaker: "npc", en: "No worries. I was saying we should park this discussion for now.", ja: "大丈夫ですよ。この議論は一旦保留にしようと言っていました。" },
      { speaker: "you", en: "That works. Let's send follow-up notes right after the call.", ja: "それでいいです。通話の後すぐにフォローアップのメモを送りましょう。" },
      { speaker: "npc", en: "Sounds good. I'll share my screen to summarize.", ja: "いいですね。画面共有してまとめます。" },
      { speaker: "you", en: "Perfect, go ahead.", ja: "完璧です、お願いします。" },
    ],
  },
  {
    id: "housing-d1", cat: "housing", level: "intermediate", title: "部屋探しの相談",
    turns: [
      { speaker: "npc", en: "Hi, are you looking for an apartment?", ja: "こんにちは、アパートをお探しですか?" },
      { speaker: "you", en: "Yes, I'm looking for a one-bedroom apartment.", ja: "はい、1LDKのアパートを探しています。" },
      { speaker: "npc", en: "Great, how much is your budget?", ja: "かしこまりました、ご予算はどのくらいですか?" },
      { speaker: "you", en: "How much is the monthly rent for this one?", ja: "これの月々の家賃はいくらですか?" },
      { speaker: "npc", en: "It's ninety thousand yen, utilities included.", ja: "9万円で、光熱費込みです。" },
      { speaker: "you", en: "That sounds good. When can I move in?", ja: "良さそうですね。いつから入居できますか?" },
    ],
  },
];
