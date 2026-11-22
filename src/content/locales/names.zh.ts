// Traditional Chinese (Taiwan) names the whole app shows, not only the Learn
// section: the techniques with an established Traditional Chinese name (the
// rest stay English), the difficulty bands and the technique families.
// Shared by the Learn locale (zh.ts) and the app locale (app.zh.ts).
import type { Tech, LevelPick, Category } from '../../engine/ratings';

export const techNames: Partial<Record<Tech, string>> = {
  "NAKED_SINGLE": "顯式唯一",
  "HIDDEN_SINGLE": "隱式唯一",
  "LOCKED_PAIR": "鎖定數對",
  "LOCKED_TRIPLE": "鎖定數三",
  "LOCKED_CANDIDATES_1": "鎖定候選數（指向）",
  "LOCKED_CANDIDATES_2": "鎖定候選數（宣稱）",
  "NAKED_PAIR": "顯式數對",
  "NAKED_TRIPLE": "顯式數三",
  "HIDDEN_PAIR": "隱式數對",
  "HIDDEN_TRIPLE": "隱式數三",
  "NAKED_QUADRUPLE": "顯式數四",
  "HIDDEN_QUADRUPLE": "隱式數四",
  "UNIQUENESS_1": "唯一矩形類型 1",
  "UNIQUENESS_2": "唯一矩形類型 2",
  "UNIQUENESS_3": "唯一矩形類型 3",
  "UNIQUENESS_4": "唯一矩形類型 4",
  "UNIQUENESS_5": "唯一矩形類型 5",
  "UNIQUENESS_6": "唯一矩形類型 6",
  "HIDDEN_RECTANGLE": "隱式矩形",
  "AVOIDABLE_RECTANGLE_1": "可避免矩形類型 1",
  "AVOIDABLE_RECTANGLE_2": "可避免矩形類型 2",
  "EXTENDED_RECTANGLE": "延伸矩形",
  "BRUTE_FORCE": "暴力破解"
};

export const levels: Record<LevelPick, string> = {
  "Beginner": "初學者",
  "Easy": "簡單",
  "Medium": "中等",
  "Hard": "困難",
  "Unfair": "不公平",
  "Extreme": "極難",
  "Nightmare": "惡夢"
};

export const categoryLabels: Record<Category, string> = {
  "Singles": "唯一數",
  "Intersections": "交集",
  "Subsets": "子集",
  "Basic Fish": "基本魚",
  "Finned Fish": "帶鰭魚",
  "Complex Fish": "複雜魚",
  "Single Digit Patterns": "單位數圖案",
  "Wings": "Wings",
  "Uniqueness": "唯一性",
  "Chains and Loops": "鏈與環",
  "Coloring": "著色",
  "Almost Locked Sets": "近似鎖定集合",
  "Miscellaneous": "其他",
  "Last Resort": "最後手段"
};
