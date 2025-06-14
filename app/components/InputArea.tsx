'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'

export default function InputArea({ onSubmit }: { onSubmit: (text: string) => void }) {
  const [inputText, setInputText] = useState('')

  const handleSubmit = () => {
    if (inputText.trim()) {
      onSubmit(inputText.trim())
      setInputText('')
    }
  }

  return (
    <div className="space-y-4 p-4 border rounded-xl shadow">
      {/* テキスト入力 */}
      <Textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Suit-X∑ への問い・指示を入力してください"
        className="w-full min-h-[80px]"
      />

      {/* プリセット選択肢（例） */}
      <div className="flex gap-2 flex-wrap">
        {['次に進めて', 'Suit構造を表示して', 'Mirrorを起動して'].map((preset) => (
          <Button
            key={preset}
            variant="outline"
            onClick={() => {
              setInputText(preset)
              onSubmit(preset)
            }}
          >
            {preset}
          </Button>
        ))}
      </div>

      {/* 実行ボタン */}
      <Button onClick={handleSubmit} className="w-full">
        実行
      </Button>
    </div>
  )
}