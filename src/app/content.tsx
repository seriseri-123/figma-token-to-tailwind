"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

export const Content = () => {
  return (
    <div className="h-screen flex flex-col typography-body-pc">
      {/* Header */}
      <header className="bg-white">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-primary rounded-lg"></div>
            <span className="text-l-main">SaaSApp</span>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="text-l-main">
              ログイン
            </Button>
            <Button
              size="sm"
              className="bg-primary text-white hover:bg-primary/90"
            >
              無料で始める
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center bg-light">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Hero */}
            <div className="text-center mb-8">
              <h1 className="mb-3 text-l-main typography-h1">
                ビジネスを加速させる次世代のSaaSプラットフォーム
              </h1>
              <p className="text-gray-500 typography-h2 max-w-2xl mx-auto mb-6">
                シンプルで強力なツールで、チームの生産性を最大化
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
                <Button
                  size="lg"
                  className="bg-primary text-white typography-button hover:bg-primary/90"
                >
                  無料トライアルを開始
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="typography-button text-l-main"
                >
                  デモを見る
                </Button>
              </div>
            </div>

            {/* Pricing Cards */}
            <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
              <Card className="p-6 bg-card border-border bg-white">
                <h3 className="mb-2 text-card-foreground">スターター</h3>
                <div className="mb-4">
                  <span className="text-foreground">¥0</span>
                  <span className="text-muted-foreground">/月</span>
                </div>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center gap-2 text-foreground">
                    <Check className="w-4 h-4 text-success" />
                    <span>基本機能</span>
                  </li>
                  <li className="flex items-center gap-2 text-foreground">
                    <Check className="w-4 h-4 text-success" />
                    <span>5ユーザーまで</span>
                  </li>
                </ul>
                <Button className="w-full bg-primary text-white typography-button hover:bg-primary/90">
                  始める
                </Button>
              </Card>

              <Card className="p-6 bg-accent border-accent relative bg-primary text-white">
                <div className="absolute -top-3 bg-primary left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground px-3 py-0.5 rounded-full border-2 border-background">
                  人気
                </div>
                <h3 className="mb-2 text-accent-foreground">プロ</h3>
                <div className="mb-4">
                  <span className="text-accent-foreground">¥5,000</span>
                  <span className="text-accent-foreground/70">/月</span>
                </div>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center gap-2 text-accent-foreground">
                    <Check className="w-4 h-4 text-accent-foreground" />
                    <span>すべての機能</span>
                  </li>
                  <li className="flex items-center gap-2 text-accent-foreground">
                    <Check className="w-4 h-4 text-accent-foreground" />
                    <span>無制限ユーザー</span>
                  </li>
                </ul>
                <Button className="w-full bg-white text-l-main typography-button hover:bg-background/90">
                  始める
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-3">
        <div className="container mx-auto px-4 text-center typography-body-pc">
          <p>© 2025 SaaSApp. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};
