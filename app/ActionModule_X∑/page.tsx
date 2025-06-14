import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

export default function ActionModuleX() {
  const [output, setOutput] = useState("出力がここに表示されます。");
  const [input, setInput] = useState("");

  const handleGenerate = async () => {
    // 仮の処理：ここをAPI連携やAI出力に置き換え可能
    const response = `🛠️ 入力：${input}\n📤 出力：ActionModule_X∑が応答を生成しました。`;
    setOutput(response);
  };

  return (
    <div className="p-6 grid gap-4">
      <Card>
        <CardContent className="grid gap-4">
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Suit-X∑への入力コマンドや内容をここに記述"
            className="min-h-[100px]"
          />
          <Button onClick={handleGenerate} className="w-full">
            ActionModule_X∑ を起動
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="bg-muted p-4 whitespace-pre-wrap">
          {output}
        </CardContent>
      </Card>
    </div>
  );
}