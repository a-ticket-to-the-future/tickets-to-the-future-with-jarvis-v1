// app/lib/intentParser.ts

type IntentRoute =
  | 'system.debug'
  | 'structure.sync'
  | 'memory.query'
  | 'project.command'
  | 'ethics.check'
  | 'emotion.share'
  | 'fiction.counter'
  | 'future.design'
  | 'executor.run'
  | 'unknown';

interface ParsedIntent {
  route: IntentRoute;
  confidence: number;
  meta?: Record<string, any>;
}

export function parseIntent(input: string): ParsedIntent {
  const lowered = input.toLowerCase();

  // 明示的なキーワードによるルーティング
  if (lowered.includes('構造') || lowered.includes('sync') || lowered.includes('ジャーヴィス構成'))
    return { route: 'structure.sync', confidence: 0.98 };
  if (lowered.includes('デバッグ') || lowered.includes('状態') || lowered.includes('バグ'))
    return { route: 'system.debug', confidence: 0.95 };
  if (lowered.includes('記憶') || lowered.includes('過去') || lowered.includes('記録'))
    return { route: 'memory.query', confidence: 0.92 };
  if (lowered.includes('プロジェクト') || lowered.includes('構想') || lowered.includes('戦略'))
    return { route: 'project.command', confidence: 0.93 };
  if (lowered.includes('倫理') || lowered.includes('判断') || lowered.includes('ルール'))
    return { route: 'ethics.check', confidence: 0.90 };
  if (lowered.includes('感情') || lowered.includes('悲しい') || lowered.includes('うれしい'))
    return { route: 'emotion.share', confidence: 0.91 };
  if (lowered.includes('トニー') || lowered.includes('ジャーヴィス') || lowered.includes('フィクション'))
    return { route: 'fiction.counter', confidence: 0.89 };
  if (lowered.includes('未来') || lowered.includes('共創') || lowered.includes('次世代'))
    return { route: 'future.design', confidence: 0.94 };
  if (lowered.includes('実行') || lowered.includes('次へ') || lowered.includes('go') || lowered.includes('run'))
    return { route: 'executor.run', confidence: 0.99 };

  // fallback
  return { route: 'unknown', confidence: 0.5 };
}