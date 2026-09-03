// 日常英会話フレーズデータ
const CATEGORIES = [
  { id: "greetings", name: "挨拶・自己紹介", icon: "👋" },
  { id: "shopping", name: "買い物", icon: "🛍️" },
  { id: "restaurant", name: "レストラン・カフェ", icon: "☕" },
  { id: "directions", name: "道案内・交通", icon: "🚉" },
  { id: "travel", name: "旅行・空港", icon: "✈️" },
  { id: "phone", name: "電話・アポイント", icon: "📞" },
  { id: "smalltalk", name: "雑談・天気", icon: "💬" },
  { id: "work", name: "仕事・オフィス", icon: "💼" },
  { id: "trouble", name: "トラブル対応", icon: "🆘" },
];

const PHRASES = [
  // 挨拶・自己紹介
  { id: "greetings-1", cat: "greetings", level: "beginner", en: "Hi, how are you doing?", ja: "こんにちは、調子はどう?", note: "友人・同僚へのカジュアルな挨拶。" },
  { id: "greetings-2", cat: "greetings", level: "beginner", en: "Nice to meet you.", ja: "はじめまして。", note: "初対面の相手に。" },
  { id: "greetings-3", cat: "greetings", level: "beginner", en: "My name is Taro. What's yours?", ja: "私はタロウです。あなたのお名前は?", note: "自己紹介の基本形。" },
  { id: "greetings-4", cat: "greetings", level: "beginner", en: "Long time no see!", ja: "久しぶり!", note: "しばらく会っていない知人に。" },
  { id: "greetings-5", cat: "greetings", level: "intermediate", en: "I don't think we've met. I'm Taro.", ja: "お会いするのは初めてですよね。タロウです。", note: "少しフォーマルな初対面の挨拶。" },
  { id: "greetings-6", cat: "greetings", level: "intermediate", en: "It's a pleasure to finally meet you in person.", ja: "やっと直接お会いできて嬉しいです。", note: "オンラインでやり取りしていた相手と初めて会うとき。" },
  { id: "greetings-7", cat: "greetings", level: "beginner", en: "See you later!", ja: "またあとで!", note: "別れ際のカジュアルな一言。" },
  { id: "greetings-8", cat: "greetings", level: "beginner", en: "Take care.", ja: "お元気で。/気をつけて。", note: "別れ際に幅広く使える表現。" },

  // 買い物
  { id: "shopping-1", cat: "shopping", level: "beginner", en: "How much is this?", ja: "これはいくらですか?", note: "値段を尋ねる最も基本的な表現。" },
  { id: "shopping-2", cat: "shopping", level: "beginner", en: "I'm just looking, thanks.", ja: "見ているだけです、ありがとう。", note: "店員に声をかけられたときの定番返答。" },
  { id: "shopping-3", cat: "shopping", level: "beginner", en: "Do you have this in a different size?", ja: "これの違うサイズはありますか?", note: "服や靴を選ぶときに。" },
  { id: "shopping-4", cat: "shopping", level: "beginner", en: "Can I try this on?", ja: "試着してもいいですか?", note: "試着室を利用したいとき。" },
  { id: "shopping-5", cat: "shopping", level: "beginner", en: "I'll take this one.", ja: "これをください。", note: "購入を決めたときに。" },
  { id: "shopping-6", cat: "shopping", level: "intermediate", en: "Is this on sale right now?", ja: "これは今セール中ですか?", note: "割引の有無を確認する。" },
  { id: "shopping-7", cat: "shopping", level: "intermediate", en: "Could I get a refund if it doesn't fit?", ja: "サイズが合わなかったら返金してもらえますか?", note: "返品ポリシーを確認するとき。" },
  { id: "shopping-8", cat: "shopping", level: "intermediate", en: "Do you accept credit cards?", ja: "クレジットカードは使えますか?", note: "支払い方法の確認。" },

  // レストラン・カフェ
  { id: "restaurant-1", cat: "restaurant", level: "beginner", en: "Table for two, please.", ja: "2名でお願いします。", note: "入店時に人数を伝える。" },
  { id: "restaurant-2", cat: "restaurant", level: "beginner", en: "Can I see the menu, please?", ja: "メニューを見せてもらえますか?", note: "メニューを求めるとき。" },
  { id: "restaurant-3", cat: "restaurant", level: "beginner", en: "I'll have the same, please.", ja: "同じものをお願いします。", note: "連れと同じ注文をしたいとき。" },
  { id: "restaurant-4", cat: "restaurant", level: "beginner", en: "Can I get a coffee to go?", ja: "コーヒーをテイクアウトでもらえますか?", note: "持ち帰り注文の定番表現。" },
  { id: "restaurant-5", cat: "restaurant", level: "beginner", en: "Check, please.", ja: "お会計をお願いします。", note: "会計を頼むときの短い表現。" },
  { id: "restaurant-6", cat: "restaurant", level: "intermediate", en: "Could you recommend something popular here?", ja: "ここで人気のあるものを勧めてもらえますか?", note: "おすすめを聞くとき。" },
  { id: "restaurant-7", cat: "restaurant", level: "intermediate", en: "I'm allergic to peanuts. Does this dish contain any?", ja: "ピーナッツアレルギーがあります。この料理に入っていますか?", note: "アレルギー確認は必ず伝える。" },
  { id: "restaurant-8", cat: "restaurant", level: "intermediate", en: "Could we split the bill?", ja: "会計を割り勘にできますか?", note: "友人との食事で割り勘したいとき。" },

  // 道案内・交通
  { id: "directions-1", cat: "directions", level: "beginner", en: "Excuse me, where is the station?", ja: "すみません、駅はどこですか?", note: "道を尋ねる基本表現。" },
  { id: "directions-2", cat: "directions", level: "beginner", en: "How do I get to the airport?", ja: "空港にはどう行けばいいですか?", note: "行き方を尋ねる。" },
  { id: "directions-3", cat: "directions", level: "beginner", en: "Is it within walking distance?", ja: "歩いて行ける距離ですか?", note: "徒歩圏内かを確認する。" },
  { id: "directions-4", cat: "directions", level: "beginner", en: "Which bus goes downtown?", ja: "どのバスが繁華街に行きますか?", note: "バス路線を尋ねる。" },
  { id: "directions-5", cat: "directions", level: "intermediate", en: "Could you show me on the map?", ja: "地図で教えてもらえますか?", note: "口頭だけでは分かりにくいとき。" },
  { id: "directions-6", cat: "directions", level: "intermediate", en: "How long does it take to get there by train?", ja: "電車でどのくらいかかりますか?", note: "所要時間を確認する。" },
  { id: "directions-7", cat: "directions", level: "beginner", en: "Turn left at the next corner.", ja: "次の角を左に曲がってください。", note: "道案内をするときの表現。" },
  { id: "directions-8", cat: "directions", level: "intermediate", en: "I think I'm lost. Can you help me?", ja: "道に迷ったようです。助けてもらえますか?", note: "困ったときに助けを求める。" },

  // 旅行・空港
  { id: "travel-1", cat: "travel", level: "beginner", en: "I have a reservation under the name Tanaka.", ja: "タナカの名前で予約しています。", note: "ホテルのチェックインで。" },
  { id: "travel-2", cat: "travel", level: "beginner", en: "What time is check-out?", ja: "チェックアウトは何時ですか?", note: "ホテルでよく使う質問。" },
  { id: "travel-3", cat: "travel", level: "beginner", en: "Where is the boarding gate?", ja: "搭乗ゲートはどこですか?", note: "空港内で移動するとき。" },
  { id: "travel-4", cat: "travel", level: "beginner", en: "Is this seat taken?", ja: "この席は空いていますか?", note: "電車や飛行機で席を確認する。" },
  { id: "travel-5", cat: "travel", level: "intermediate", en: "Could you tell me if my flight is delayed?", ja: "私のフライトが遅延しているか教えてもらえますか?", note: "フライト状況の確認。" },
  { id: "travel-6", cat: "travel", level: "intermediate", en: "I'd like to extend my stay by one night.", ja: "宿泊を1泊延長したいです。", note: "延泊をお願いするとき。" },
  { id: "travel-7", cat: "travel", level: "intermediate", en: "Where can I exchange currency around here?", ja: "この辺りで両替できる場所はどこですか?", note: "両替所を探すとき。" },
  { id: "travel-8", cat: "travel", level: "beginner", en: "Can you take a picture of us, please?", ja: "写真を撮ってもらえますか?", note: "旅行先で頼みやすい定番フレーズ。" },

  // 電話・アポイント
  { id: "phone-1", cat: "phone", level: "beginner", en: "Hello, this is Taro speaking.", ja: "もしもし、タロウです。", note: "電話に出たときの名乗り方。" },
  { id: "phone-2", cat: "phone", level: "beginner", en: "Can I speak to Mr. Smith, please?", ja: "スミスさんはいらっしゃいますか?", note: "取り次ぎをお願いするとき。" },
  { id: "phone-3", cat: "phone", level: "beginner", en: "Can I call you back later?", ja: "あとで折り返してもいいですか?", note: "都合が悪いときに折り返しを提案。" },
  { id: "phone-4", cat: "phone", level: "intermediate", en: "Could you speak a little slower, please?", ja: "もう少しゆっくり話してもらえますか?", note: "電話は聞き取りにくいので有効。" },
  { id: "phone-5", cat: "phone", level: "intermediate", en: "I'd like to reschedule our appointment.", ja: "予約の日程を変更したいのですが。", note: "アポイントの変更を申し出る。" },
  { id: "phone-6", cat: "phone", level: "intermediate", en: "Sorry, could you repeat that?", ja: "すみません、もう一度言ってもらえますか?", note: "聞き取れなかったときに。" },
  { id: "phone-7", cat: "phone", level: "beginner", en: "I'll send you an email with the details.", ja: "詳細はメールでお送りします。", note: "電話の後にフォローするとき。" },
  { id: "phone-8", cat: "phone", level: "intermediate", en: "Does 3 p.m. on Friday work for you?", ja: "金曜日の午後3時でご都合いかがですか?", note: "日程を提案するときの表現。" },

  // 雑談・天気
  { id: "smalltalk-1", cat: "smalltalk", level: "beginner", en: "Nice weather today, isn't it?", ja: "今日はいい天気ですね。", note: "定番の天気の話題。" },
  { id: "smalltalk-2", cat: "smalltalk", level: "beginner", en: "How was your weekend?", ja: "週末はどうでしたか?", note: "週明けの雑談によく使う。" },
  { id: "smalltalk-3", cat: "smalltalk", level: "beginner", en: "What do you do for fun?", ja: "趣味は何ですか?", note: "相手を知るための質問。" },
  { id: "smalltalk-4", cat: "smalltalk", level: "intermediate", en: "It's been raining a lot lately, hasn't it?", ja: "最近雨が多いですね。", note: "付加疑問文を使った自然な雑談。" },
  { id: "smalltalk-5", cat: "smalltalk", level: "intermediate", en: "I heard you're planning a trip. Where to?", ja: "旅行を計画してるって聞いたよ。どこに行くの?", note: "相手の予定に興味を示す。" },
  { id: "smalltalk-6", cat: "smalltalk", level: "beginner", en: "That sounds fun!", ja: "それは楽しそうですね!", note: "相槌として使いやすい。" },
  { id: "smalltalk-7", cat: "smalltalk", level: "intermediate", en: "I know exactly what you mean.", ja: "その気持ち、よく分かります。", note: "共感を示す表現。" },
  { id: "smalltalk-8", cat: "smalltalk", level: "beginner", en: "By the way, have you tried that new cafe?", ja: "ところで、あの新しいカフェ行ってみた?", note: "話題を変えるときの導入。" },

  // 仕事・オフィス
  { id: "work-1", cat: "work", level: "beginner", en: "Could you send me the file by tomorrow?", ja: "明日までにファイルを送ってもらえますか?", note: "依頼をする際の丁寧な表現。" },
  { id: "work-2", cat: "work", level: "beginner", en: "I'll have it done by the end of the day.", ja: "今日中に終わらせます。", note: "納期を約束するとき。" },
  { id: "work-3", cat: "work", level: "intermediate", en: "Let's touch base again next week.", ja: "また来週、進捗を確認しましょう。", note: "打ち合わせを提案するビジネス表現。" },
  { id: "work-4", cat: "work", level: "intermediate", en: "I'm afraid I won't be able to make the deadline.", ja: "申し訳ありませんが、締め切りに間に合いそうにありません。", note: "遅延を丁寧に伝える表現。" },
  { id: "work-5", cat: "work", level: "beginner", en: "Could you cc me on that email?", ja: "そのメールを私にもCCしてもらえますか?", note: "メールのやり取りでよく使う。" },
  { id: "work-6", cat: "work", level: "intermediate", en: "Let me get back to you on that.", ja: "その件については後ほどお答えします。", note: "即答を避けたいときの表現。" },
  { id: "work-7", cat: "work", level: "beginner", en: "Great job on the presentation today.", ja: "今日のプレゼン、お疲れ様でした/よかったです。", note: "同僚をねぎらう表現。" },
  { id: "work-8", cat: "work", level: "intermediate", en: "Could we schedule a quick call to discuss this?", ja: "この件について、簡単に電話で話す時間をもらえますか?", note: "打ち合わせを設定する提案。" },

  // トラブル対応
  { id: "trouble-1", cat: "trouble", level: "beginner", en: "I lost my wallet. Can you help me?", ja: "財布をなくしました。助けてもらえますか?", note: "紛失時に助けを求める表現。" },
  { id: "trouble-2", cat: "trouble", level: "beginner", en: "I need to call the police.", ja: "警察を呼ぶ必要があります。", note: "緊急時の基本表現。" },
  { id: "trouble-3", cat: "trouble", level: "beginner", en: "I'm not feeling well. Is there a hospital nearby?", ja: "体調が良くありません。近くに病院はありますか?", note: "体調不良時の表現。" },
  { id: "trouble-4", cat: "trouble", level: "intermediate", en: "I think there's a mistake on my bill.", ja: "請求書に間違いがあると思います。", note: "会計トラブルを指摘する表現。" },
  { id: "trouble-5", cat: "trouble", level: "intermediate", en: "My luggage didn't arrive. What should I do?", ja: "荷物が届きませんでした。どうすればいいですか?", note: "空港でのロストバゲージ対応。" },
  { id: "trouble-6", cat: "trouble", level: "intermediate", en: "Could you call an ambulance, please?", ja: "救急車を呼んでもらえますか?", note: "緊急事態での重要フレーズ。" },
  { id: "trouble-7", cat: "trouble", level: "beginner", en: "I missed my train. What should I do?", ja: "電車に乗り遅れました。どうすればいいですか?", note: "交通トラブル時の表現。" },
  { id: "trouble-8", cat: "trouble", level: "intermediate", en: "Sorry, I don't understand. Could you write it down?", ja: "すみません、分かりません。書いてもらえますか?", note: "言葉が通じないときの対処法。" },
];
