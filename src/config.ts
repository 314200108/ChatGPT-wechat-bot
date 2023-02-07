export default {
  // 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
  OPENAI_API_KEY: '',
  // 设置获取消息的重试次数
  retryTimes: 3,
  // 小明同学
  groupKey: '',
  // 小明同学
  privateKey: '',
  // 重置
  resetKey: 'reset',
  // 开启会后收到ChatGPT的自动回复
  autoReply: true,
  // 根据正则匹配是否自动通过好友验证
  friendShipRule: /chatgpt|chat/,
  // 是否在群聊中按照回复的格式进行回复
  groupReplyMode: true,
  // 是否在私聊中按照回复的格式进行回复
  privateReplyMode: false,
};
