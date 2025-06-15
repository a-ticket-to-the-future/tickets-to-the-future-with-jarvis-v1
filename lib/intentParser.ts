// intentParser.ts - 構造設計図（Next.js形式での実装ベース）

export type Intent =
  | '問いかけ'
  | '哲学的探究'
  | '仕様確認'
  | '構造設計依頼'
  | '応答要求'
  | 'Mirror要求'
  | 'ユニット起動'
  | 'リンク拡張'
  | '構造確認'
  | '進行指示'
  | '未来予測'
  | '再帰対話'
  | '感情表明'
  | '黙契確認';

export type ParsedIntent = {
  type: Intent;
  subType?: string;
  confidence: number;
  rawText: string;
  meta?: Record<string, any>;
};

const keywordMap: Record<Intent, RegExp[]> = {
  問いかけ: [/\?/g, /どう思う/, /なぜ/, /とは/],
  哲学的探究: [/存在/, /価値/, /意味/, /未来/, /命/],
  仕様確認: [/できる\？/, /対応している/, /どう設定/, /制限/],
  構造設計依頼: [/設計/, /構造化/, /構築/, /再定義/],
  応答要求: [/答えて/, /返して/, /説明して/, /述べて/],
  Mirror要求: [/Mirror/, /模倣/, /私の判断で/, /問い直してくれ/],
  ユニット起動: [/起動/, /呼び出し/, /展開/, /補佐/],
  リンク拡張: [/リンク/, /接続/, /拡張/, /結び/],
  構造確認: [/どこまで/, /重なった/, /今どこ/, /何％/],
  進行指示: [/次へ/, /進めて/, /このまま/, /優先/, /順に/],
  未来予測: [/予測/, /未来/, /次世代/, /展望/, /シナリオ/],
  再帰対話: [/問い続ける/, /問い直す/, /戻って/, /重ねる/],
  感情表明: [/好き/, /すごい/, /怖い/, /怒らない？/, /笑/],
  黙契確認: [/信じる/, /一緒に/, /選ぶ/, /任せる/, /覚悟/],
};

export function parseIntent(input: string): ParsedIntent {
  const result: ParsedIntent = {
    type: '応答要求',
    confidence: 0.3,
    rawText: input,
  };

  for (const intent in keywordMap) {
    const patterns = keywordMap[intent as Intent];
    for (const pattern of patterns) {
      if (pattern.test(input)) {
        result.type = intent as Intent;
        result.confidence = 0.8 + Math.random() * 0.2;
        return result;
      }
    }
  }

  return result;
}

// Intent分類表（判定→ルーティング例）
// type === 'Mirror要求' → mirrorUnit.handle()
// type === '構造設計依頼' → structureComposer.compose()
// type === 'リンク拡張' → networkHandler.linkExtend()
// type === '未来予測' → futureEngine.project()
// type === '感情表明' → empathyModule.reflect()