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
  { id: "hospital", name: "病院・薬局", icon: "🏥" },
  { id: "bank", name: "銀行・郵便局", icon: "🏦" },
  { id: "salon", name: "美容院・散髪", icon: "💇" },
  { id: "onlinemeeting", name: "オンライン会議", icon: "💻" },
  { id: "housing", name: "引っ越し・住居", icon: "🏠" },
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

  // ------- 上級フレーズ(既存カテゴリ) -------
  { id: "greetings-9", cat: "greetings", level: "advanced", en: "I've heard so much about you — it's great to finally put a face to the name.", ja: "お噂はかねがね伺っております。ようやくお会いできて嬉しいです。", note: "初対面でやや洗練された言い回し。" },
  { id: "greetings-10", cat: "greetings", level: "advanced", en: "Sorry I'm late — traffic was brutal.", ja: "遅れてごめんなさい、渋滞がひどくて。", note: "カジュアルな遅刻の謝罪表現。" },

  { id: "shopping-9", cat: "shopping", level: "advanced", en: "Would you happen to have this in stock at another branch?", ja: "他の店舗であれば在庫はありますか?", note: "婉曲的な依頼表現 \"would you happen to\"。" },
  { id: "shopping-10", cat: "shopping", level: "advanced", en: "I'd like to return this, but I no longer have the receipt — is that still possible?", ja: "これを返品したいのですが、レシートがないんです。それでも可能ですか?", note: "条件付きの依頼をやわらかく伝える表現。" },

  { id: "restaurant-9", cat: "restaurant", level: "advanced", en: "Could you make it less spicy than usual, if that's possible?", ja: "もし可能であれば、いつもより辛さを控えめにしてもらえますか?", note: "控えめな依頼のクッション表現。" },
  { id: "restaurant-10", cat: "restaurant", level: "advanced", en: "We're celebrating a birthday — is there anything special you could do for the occasion?", ja: "誕生日のお祝いなのですが、何か特別なことをしていただけますか?", note: "特別な機会をさりげなく伝える表現。" },

  { id: "directions-9", cat: "directions", level: "advanced", en: "Would it be faster to take a taxi instead, given the traffic at this hour?", ja: "この時間の交通状況を考えると、タクシーの方が早いですかね?", note: "状況を踏まえた提案の尋ね方。" },
  { id: "directions-10", cat: "directions", level: "advanced", en: "I seem to have taken a wrong turn somewhere — could you point me back toward the main street?", ja: "どこかで道を間違えたようです。大通りに戻る道を教えてもらえますか?", note: "遠回しに状況を説明する言い方。" },

  { id: "travel-9", cat: "travel", level: "advanced", en: "Is there any chance of an upgrade, even for an extra fee?", ja: "追加料金を払ってでもアップグレードできる可能性はありますか?", note: "可能性を尋ねる控えめな表現。" },
  { id: "travel-10", cat: "travel", level: "advanced", en: "I'd like to file a complaint about the delay — who should I speak to?", ja: "遅延について苦情を申し立てたいのですが、どなたに話せばいいですか?", note: "クレームを伝える際のフォーマルな表現。" },

  { id: "phone-9", cat: "phone", level: "advanced", en: "I completely understand if now isn't a good time — should I try again this afternoon?", ja: "今お時間が悪ければお気持ちお察しします。午後にまたかけ直しましょうか?", note: "相手への配慮を示す丁寧な提案。" },
  { id: "phone-10", cat: "phone", level: "advanced", en: "Just to confirm, we're on the same page about the terms we discussed, correct?", ja: "確認ですが、先ほど話し合った条件について、認識は合っていますよね?", note: "認識合わせのビジネス表現。" },

  { id: "smalltalk-9", cat: "smalltalk", level: "advanced", en: "I've been meaning to ask — how did you two actually meet?", ja: "ずっと聞きたかったんだけど、お二人はどうやって出会ったの?", note: "自然に話題を切り出す前置き表現。" },
  { id: "smalltalk-10", cat: "smalltalk", level: "advanced", en: "It's funny how time flies when you're caught up in work, isn't it?", ja: "仕事に追われていると時間があっという間だよね。", note: "共感を誘う雑談の締めくくり方。" },

  { id: "work-9", cat: "work", level: "advanced", en: "I want to flag a potential risk before we commit to this timeline.", ja: "このスケジュールで進める前に、潜在的なリスクを指摘しておきたいです。", note: "懸念を丁寧に切り出すビジネス表現。" },
  { id: "work-10", cat: "work", level: "advanced", en: "Could we circle back to this once we have more data to work with?", ja: "もっとデータが揃ってから、この件に改めて戻ってもいいですか?", note: "議論を保留にする際の定番表現。" },

  { id: "trouble-9", cat: "trouble", level: "advanced", en: "I'd like to speak to whoever is responsible for handling this kind of situation.", ja: "この件を担当している方とお話ししたいのですが。", note: "責任者につないでもらう際の表現。" },
  { id: "trouble-10", cat: "trouble", level: "advanced", en: "This is the third time this has happened — what guarantee do I have that it won't happen again?", ja: "これで3回目です。二度と起きないという保証はありますか?", note: "繰り返すトラブルへの強めの申し立て。" },

  // ------- 病院・薬局 -------
  { id: "hospital-1", cat: "hospital", level: "beginner", en: "I have a headache. Can you recommend some medicine?", ja: "頭痛がします。何かいい薬はありますか?", note: "薬局での相談時に。" },
  { id: "hospital-2", cat: "hospital", level: "beginner", en: "I'd like to make an appointment with a doctor.", ja: "医師の予約を取りたいです。", note: "受診の申し込み。" },
  { id: "hospital-3", cat: "hospital", level: "beginner", en: "Where is the nearest pharmacy?", ja: "一番近い薬局はどこですか?", note: "薬局を探すとき。" },
  { id: "hospital-4", cat: "hospital", level: "intermediate", en: "Could you tell me the dosage for this medicine?", ja: "この薬の用量を教えてもらえますか?", note: "服用方法の確認。" },
  { id: "hospital-5", cat: "hospital", level: "intermediate", en: "I'm allergic to penicillin. Is that a problem?", ja: "ペニシリンにアレルギーがあります。問題ありますか?", note: "アレルギーの申告は必ず伝える。" },
  { id: "hospital-6", cat: "hospital", level: "intermediate", en: "Do I need a prescription for this?", ja: "これには処方箋が必要ですか?", note: "薬の購入時に確認する。" },
  { id: "hospital-7", cat: "hospital", level: "advanced", en: "Could you explain the possible side effects before I start taking this?", ja: "服用を始める前に、起こりうる副作用について説明してもらえますか?", note: "服薬前の丁寧な確認表現。" },
  { id: "hospital-8", cat: "hospital", level: "advanced", en: "I'd like a second opinion before proceeding with this treatment.", ja: "この治療を進める前に、セカンドオピニオンをもらいたいです。", note: "治療方針への慎重な申し出。" },

  // ------- 銀行・郵便局 -------
  { id: "bank-1", cat: "bank", level: "beginner", en: "I'd like to open a bank account.", ja: "銀行口座を開設したいです。", note: "口座開設の基本表現。" },
  { id: "bank-2", cat: "bank", level: "beginner", en: "Can I send this package overseas?", ja: "この荷物を海外に送れますか?", note: "郵便局での発送依頼。" },
  { id: "bank-3", cat: "bank", level: "beginner", en: "Where can I withdraw cash?", ja: "現金を引き出せる場所はどこですか?", note: "ATMや窓口を探すとき。" },
  { id: "bank-4", cat: "bank", level: "intermediate", en: "How long does an international transfer usually take?", ja: "海外送金は通常どのくらいかかりますか?", note: "送金の所要時間を確認。" },
  { id: "bank-5", cat: "bank", level: "intermediate", en: "I lost my card. Could you help me cancel it?", ja: "カードをなくしました。無効にする手続きを手伝ってもらえますか?", note: "紛失時の緊急対応。" },
  { id: "bank-6", cat: "bank", level: "intermediate", en: "What's the exchange rate today?", ja: "今日の為替レートはいくらですか?", note: "両替時の確認表現。" },
  { id: "bank-7", cat: "bank", level: "advanced", en: "Could you walk me through the fees involved in this transaction?", ja: "この取引にかかる手数料について詳しく説明してもらえますか?", note: "手数料の詳細を確認する丁寧な表現。" },
  { id: "bank-8", cat: "bank", level: "advanced", en: "I'd like to dispute a charge that appeared on my statement.", ja: "明細に記載されている請求について異議を申し立てたいです。", note: "請求への異議申し立て。" },

  // ------- 美容院・散髪 -------
  { id: "salon-1", cat: "salon", level: "beginner", en: "I'd like a haircut, please.", ja: "カットをお願いします。", note: "来店時の基本表現。" },
  { id: "salon-2", cat: "salon", level: "beginner", en: "Not too short, please.", ja: "あまり短くしないでください。", note: "希望の長さを伝える。" },
  { id: "salon-3", cat: "salon", level: "beginner", en: "Can I book an appointment for Saturday?", ja: "土曜日に予約できますか?", note: "予約を取るとき。" },
  { id: "salon-4", cat: "salon", level: "intermediate", en: "Could you trim the split ends without changing the length much?", ja: "長さはあまり変えずに枝毛を整えてもらえますか?", note: "細かい要望を伝える表現。" },
  { id: "salon-5", cat: "salon", level: "intermediate", en: "I'm thinking of a different color. What would you suggest?", ja: "違う色にしようと思っているんですが、何がおすすめですか?", note: "相談しながら決めたいとき。" },
  { id: "salon-6", cat: "salon", level: "intermediate", en: "Could you go a little lighter on the sides?", ja: "サイドをもう少し軽くしてもらえますか?", note: "仕上がりの微調整を伝える。" },
  { id: "salon-7", cat: "salon", level: "advanced", en: "I want something low-maintenance that still looks polished for work.", ja: "手入れが楽で、それでいて仕事でもきちんと見えるスタイルがいいです。", note: "曖昧な要望を具体的に伝える表現。" },
  { id: "salon-8", cat: "salon", level: "advanced", en: "Last time it turned out darker than I expected — could we avoid that this time?", ja: "前回思ったより暗くなってしまったので、今回は避けたいです。", note: "過去の経験を踏まえた依頼。" },

  // ------- オンライン会議 -------
  { id: "onlinemeeting-1", cat: "onlinemeeting", level: "beginner", en: "Can you hear me okay?", ja: "聞こえていますか?", note: "会議開始時の音声確認。" },
  { id: "onlinemeeting-2", cat: "onlinemeeting", level: "beginner", en: "Sorry, could you turn on your camera?", ja: "すみません、カメラをオンにしてもらえますか?", note: "参加者への依頼。" },
  { id: "onlinemeeting-3", cat: "onlinemeeting", level: "beginner", en: "I'll share my screen now.", ja: "今から画面共有します。", note: "画面共有の合図。" },
  { id: "onlinemeeting-4", cat: "onlinemeeting", level: "intermediate", en: "You're breaking up a little — could you say that again?", ja: "少し音声が途切れています。もう一度言ってもらえますか?", note: "接続トラブル時の対応。" },
  { id: "onlinemeeting-5", cat: "onlinemeeting", level: "intermediate", en: "Let's send the follow-up notes right after the call.", ja: "通話の後すぐにフォローアップのメモを送りましょう。", note: "会議後のアクションを決める表現。" },
  { id: "onlinemeeting-6", cat: "onlinemeeting", level: "intermediate", en: "Could everyone mute themselves when they're not speaking?", ja: "話していないときはミュートにしてもらえますか?", note: "会議の進行を整える依頼。" },
  { id: "onlinemeeting-7", cat: "onlinemeeting", level: "advanced", en: "Let's park that discussion and come back to it once we have buy-in from the other team.", ja: "その議論は一旦保留にして、他チームの合意が得られてから戻りましょう。", note: "議論を建設的に保留する表現。" },
  { id: "onlinemeeting-8", cat: "onlinemeeting", level: "advanced", en: "I think we're talking past each other — can we clarify what success looks like here?", ja: "お互い話がかみ合っていない気がします。ここでの成功の定義をはっきりさせませんか?", note: "認識のズレを丁寧に指摘する表現。" },

  // ------- 引っ越し・住居 -------
  { id: "housing-1", cat: "housing", level: "beginner", en: "I'm looking for a one-bedroom apartment.", ja: "1LDKのアパートを探しています。", note: "部屋探しの基本表現。" },
  { id: "housing-2", cat: "housing", level: "beginner", en: "How much is the monthly rent?", ja: "月々の家賃はいくらですか?", note: "家賃を確認するとき。" },
  { id: "housing-3", cat: "housing", level: "beginner", en: "When can I move in?", ja: "いつから入居できますか?", note: "入居時期の確認。" },
  { id: "housing-4", cat: "housing", level: "intermediate", en: "Is the deposit refundable when I move out?", ja: "退去時に敷金は返金されますか?", note: "契約条件の確認。" },
  { id: "housing-5", cat: "housing", level: "intermediate", en: "Are utilities included in the rent?", ja: "光熱費は家賃に含まれていますか?", note: "費用の内訳を確認する。" },
  { id: "housing-6", cat: "housing", level: "intermediate", en: "Could you show me the unit before I decide?", ja: "決める前に部屋を見せてもらえますか?", note: "内見をお願いする表現。" },
  { id: "housing-7", cat: "housing", level: "advanced", en: "What's the process if I need to break the lease early?", ja: "契約を途中で解約する場合、どういった手続きが必要ですか?", note: "契約解除の手続きを確認する表現。" },
  { id: "housing-8", cat: "housing", level: "advanced", en: "Could we negotiate the rent given how long I'm planning to stay?", ja: "長期間住む予定なので、家賃を交渉できますか?", note: "条件交渉を切り出す表現。" },
];
