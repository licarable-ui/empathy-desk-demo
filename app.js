const sessions = {
  s1: {
    id: "s1",
    name: "林小满",
    initial: "林",
    color: "#0f766e",
    meta: "会员 Lv3 · 等待响应 1分20秒",
    profileMeta: "杭州 · 累计消费 ¥1,280",
    tags: ["敏感肌", "干皮", "关注成分", "低客单"],
    contactCount: "2 次",
    recentOrder: "08-16",
    ticketCount: "1 单",
    emotionShort: "焦虑",
    preview: "脸颊泛红，想退款",
    time: "10:07",
    riskLevel: "high",
    trajectory: [
      { title: "08-12 购买 舒润修护面霜", desc: "订单已签收", type: "" },
      { title: "08-14 咨询敏感肌适用性", desc: "客服答复后可放心使用", type: "warn" },
      { title: "08-18 首次反馈泛红", desc: "工单 S-88021 已创建", type: "warn" },
      { title: "今天 再次进线并上传图片", desc: "情绪持续上升", type: "danger" }
    ],
    intent: { label: "售后 · 过敏退款", confidence: 0.93 },
    emotion: {
      label: "焦虑 / 不满",
      score: 0.86,
      note: "较入线上升 22%，语气急促"
    },
    reply:
      "小满你好，听到你用完面霜后泛红，我也很心疼。我查到你 8 月 12 日购买的这款面霜还在 15 天售后期内，可以为你优先安排退货退款。你先把泛红位置的照片发我一下，我同步给护肤顾问确认，也帮你整理适合敏感肌的舒缓修护建议。",
    replyAlt:
      "小满，先别担心，我们已经看到你的情况了。你 8 月 12 日购买的舒润修护面霜目前仍在售后保障期内，我会优先为你申请退货退款。同时我会请护肤顾问根据你的泛红照片给一份敏感肌修护建议，问题不会让你一个人扛着。",
    risk: {
      type: "情绪升级 + 售后过敏",
      level: "高",
      statusKey: "pending",
      status: "待确认",
      reasons: [
        "情绪分连续上升，当前 0.86",
        "2 天内第 3 次进线",
        "已出现投诉表达"
      ],
      actions: ["立即安抚并确认过敏情况", "创建售后工单并转护理顾问", "24 小时内完成回访"]
    },
    ticketCreated: false,
    adopted: false,
    followUpSent: false,
    messages: [
      {
        from: "customer",
        text: "你好，我 8 月 12 号买的那个面霜，用了两天脸就开始泛红，现在有点刺痛，你们这个真的适合敏感肌吗？",
        time: "10:02"
      },
      {
        from: "customer",
        image: "assets/product-bottle.png",
        caption: "舒润修护面霜.jpg",
        text: "这是我买的这款。",
        time: "10:03"
      },
      {
        from: "customer",
        image: "assets/skin-redness.png",
        caption: "脸颊泛红状态.jpg",
        text: "这是现在的脸颊状态，红了一小片。",
        time: "10:03"
      },
      {
        from: "customer",
        text: "之前客服说可以先用，我本来就不太敢，现在果然出问题了。",
        time: "10:04"
      },
      {
        from: "agent",
        text: "抱歉给您添麻烦了，我先帮您核实一下订单情况。",
        time: "10:05"
      },
      {
        from: "customer",
        text: "我已经不想再折腾了，要是处理不好我就直接投诉了。",
        time: "10:07"
      }
    ],
    followUp: "那你们怎么保证不会越来越严重？我真的很害怕留印子。"
  },

  s2: {
    id: "s2",
    name: "陈一诺",
    initial: "陈",
    color: "#b7791f",
    meta: "会员 Lv4 · 等待响应 36秒",
    profileMeta: "上海 · 累计消费 ¥3,620",
    tags: ["油皮", "高复购", "物流敏感"],
    contactCount: "2 次",
    recentOrder: "08-17",
    ticketCount: "0 单",
    emotionShort: "不满",
    preview: "订单物流 3 天未更新",
    time: "09:41",
    riskLevel: "medium",
    trajectory: [
      { title: "08-17 下单 控油精华水", desc: "订单已出库", type: "" },
      { title: "08-18 物流停留转运仓", desc: "2 天未更新节点", type: "warn" },
      { title: "今天 上午 9:31 首次进线", desc: "客服查询中", type: "" },
      { title: "今天 9:41 再次进线", desc: "已出现退款表达", type: "danger" }
    ],
    intent: { label: "物流 · 催发货", confidence: 0.95 },
    emotion: {
      label: "不满",
      score: 0.72,
      note: "较入线上升 12%，等待时间超预期"
    },
    reply:
      "一诺您好，非常抱歉让您等了这么久。我查到您的包裹 8 月 17 日已出库，但中间在转运仓停留了 2 天。我已经为您发起物流加急，并申请了 5 元无门槛补偿券，今天 20 点前会给您同步最新进展。",
    replyAlt:
      "一诺，真的很抱歉，您的包裹卡在转运仓是物流链路的问题，我们不会让您一直等。我已为您加急并申请补偿券，同时会每 2 小时同步一次进度，直到包裹重新动起来。",
    risk: {
      type: "重复进线",
      level: "中",
      statusKey: "processing",
      status: "处理中",
      reasons: ["同一订单 24 小时内进线 2 次", "物流节点 2 天未更新"],
      actions: ["物流加急", "主动同步进展", "超过 48 小时升级处理"]
    },
    ticketCreated: false,
    adopted: false,
    followUpSent: false,
    messages: [
      { from: "customer", text: "你好，我的订单显示 3 天没更新物流了，能帮我查一下吗？", time: "09:31" },
      { from: "agent", text: "您好，正在为您查询，请稍等。", time: "09:34" },
      { from: "customer", text: "还在吗？我看还是没动。", time: "09:40" },
      { from: "customer", text: "再不发货我就申请退款了。", time: "09:41" }
    ],
    followUp: "你们能保证今天真的会更新吗？我已经不太相信了。"
  },

  s3: {
    id: "s3",
    name: "周雨彤",
    initial: "周",
    color: "#a477b8",
    meta: "会员 Lv5 · 等待响应 12秒",
    profileMeta: "成都 · 累计消费 ¥4,320",
    tags: ["高价值", "退货率高", "客诉敏感"],
    contactCount: "4 次",
    recentOrder: "08-15",
    ticketCount: "4 单",
    emotionShort: "平静",
    preview: "本月第 4 次申请退款",
    time: "09:18",
    riskLevel: "high",
    trajectory: [
      { title: "08-15 购买 抗皱眼霜", desc: "订单已签收", type: "" },
      { title: "08-18 申请第一次退款", desc: "已完成退款", type: "warn" },
      { title: "08-19 再次申请退款", desc: "30 天内累计第 4 次", type: "danger" },
      { title: "今天 进入退款争议审核", desc: "需风控二次核验", type: "danger" }
    ],
    intent: { label: "退款 · 争议", confidence: 0.88 },
    emotion: {
      label: "平静",
      score: 0.58,
      note: "表达克制，但退款频次异常"
    },
    reply:
      "雨彤您好，您的退款申请我已经看到。为了尽快帮您处理，需要先和你确认一下：这次商品是出现了使用问题，还是包装、物流问题呢？确认后我会按售后政策尽快给你答复。",
    replyAlt:
      "雨彤您好，您的退款诉求我已经收到。系统提示您近 30 天有多笔退款记录，为了不影响您的账户权益，我会先请风控同事快速核验，同时今天内给您明确答复。",
    risk: {
      type: "重复退款",
      level: "高",
      statusKey: "pending",
      status: "待确认",
      reasons: ["30 天退款 4 次", "退款金额占消费金额 43%", "商品多为使用后申请"],
      actions: ["核验真实使用情况", "提交风控二次审核", "必要时电话确认"]
    },
    ticketCreated: false,
    adopted: false,
    followUpSent: false,
    messages: [
      { from: "customer", text: "在吗？我想申请退款。", time: "09:15" },
      { from: "agent", text: "您好，请问是哪个订单需要退款呢？", time: "09:16" },
      { from: "customer", text: "就是这个月买的眼霜，用了两次感觉不太合适。", time: "09:18" },
      { from: "customer", text: "你们直接退了吧。", time: "09:18" }
    ],
    followUp: "我每次都配合你们，这次为什么还要问这么多？"
  }
};

let riskEvents = [
  {
    id: "E-1024",
    sessionId: "s1",
    time: "10:07",
    user: "林小满",
    type: "情绪升级",
    level: "高",
    statusKey: "pending",
    status: "待确认",
    owner: "未认领",
    due: "30 分钟内",
    evidence: ["10:07 出现投诉表达", "情绪分 0.86 且持续上升", "关联售后工单 S-88021"],
    actions: ["立即安抚并确认过敏情况", "创建售后工单并转护理顾问", "24 小时内完成回访"],
    linked: ["订单 #T202608120098", "工单 S-88021", "会话 #C10086"]
  },
  {
    id: "E-1023",
    sessionId: "s2",
    time: "09:41",
    user: "陈一诺",
    type: "重复进线",
    level: "中",
    statusKey: "processing",
    status: "处理中",
    owner: "客服-苏晴",
    due: "今日 18:00",
    evidence: ["24 小时内第 2 次进线", "物流节点 2 天未更新", "已出现退款表达"],
    actions: ["物流加急", "主动同步进展", "超过 48 小时升级处理"],
    linked: ["订单 #T202608170126", "会话 #C10082"]
  },
  {
    id: "E-1022",
    sessionId: "s3",
    time: "09:18",
    user: "周雨彤",
    type: "重复退款",
    level: "高",
    statusKey: "pending",
    status: "待确认",
    owner: "未认领",
    due: "12:00",
    evidence: ["30 天退款 4 次", "退款金额占消费金额 43%", "商品多为使用后申请"],
    actions: ["核验真实使用情况", "提交风控二次审核", "必要时电话确认"],
    linked: ["订单 #T202608150077", "退款单 R-77321", "会话 #C10075"]
  },
  {
    id: "E-1018",
    sessionId: null,
    time: "08:52",
    user: "赵雨晴",
    type: "情绪升级",
    level: "中",
    statusKey: "processing",
    status: "处理中",
    owner: "客服-李楠",
    due: "今日 16:00",
    evidence: ["语气由不满转为愤怒", "等待响应超过 8 分钟"],
    actions: ["主管介入安抚", "创建投诉工单"],
    linked: ["订单 #T202608030322", "会话 #C10070"]
  },
  {
    id: "E-1016",
    sessionId: null,
    time: "08:36",
    user: "刘诗涵",
    type: "服务超时",
    level: "低",
    statusKey: "processing",
    status: "处理中",
    owner: "客服-苏晴",
    due: "今日 14:00",
    evidence: ["首次响应超过 10 分钟", "用户重复发送 3 条消息"],
    actions: ["立即响应", "说明排队原因并致歉"],
    linked: ["会话 #C10066"]
  },
  {
    id: "E-1011",
    sessionId: null,
    time: "昨天 22:10",
    user: "李欣",
    type: "舆情投诉",
    level: "高",
    statusKey: "closed",
    status: "已闭环",
    owner: "主管-韩雪",
    due: "已处理",
    evidence: ["用户提到公开差评与平台投诉", "关联差评草稿截图"],
    actions: ["48 小时内电话回访", "撤销差评后关闭"],
    linked: ["订单 #T202607280664", "会话 #C10052"]
  },
  {
    id: "E-1008",
    sessionId: null,
    time: "昨天 19:45",
    user: "王梓",
    type: "重复退款",
    level: "中",
    statusKey: "closed",
    status: "已闭环",
    owner: "客服-李楠",
    due: "已处理",
    evidence: ["14 天退款 3 次", "完成电话核验"],
    actions: ["风控审核", "账户备注"],
    linked: ["退款单 R-76990", "会话 #C10045"]
  },
  {
    id: "E-1003",
    sessionId: null,
    time: "昨天 15:20",
    user: "韩雪",
    type: "重复进线",
    level: "低",
    statusKey: "closed",
    status: "已闭环",
    owner: "客服-苏晴",
    due: "已处理",
    evidence: ["同一问题 3 次进线", "知识库答案未解决"],
    actions: ["补充常见问题说明", "回访确认"],
    linked: ["会话 #C10038", "会话 #C10039"]
  }
];

const metrics = {
  today: 32,
  high: 7,
  duration: "2.4h",
  closedRate: 91
};

const state = {
  activeSession: "s1",
  activeView: "workbench",
  dashboardFilter: "全部",
  selectedRisk: "E-1024"
};

const $ = (selector) => document.querySelector(selector);

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function nowTime() {
  return new Date().toLocaleTimeString("zh-CN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  });
}

function renderSessionList() {
  const query = ($("#sessionSearch").value || "").trim().toLowerCase();
  const list = Object.values(sessions).filter((session) => {
    if (!query) return true;
    return session.name.toLowerCase().includes(query) || session.preview.toLowerCase().includes(query);
  });

  $("#sessionTotal").textContent = `${list.length} 个待接入`;
  $("#sessionList").innerHTML = list
    .map((session) => {
      const active = session.id === state.activeSession ? " active" : "";
      return `
        <button type="button" class="session-item${active}" data-session="${session.id}">
          <span class="avatar small" style="background:${session.color}">${session.initial}</span>
          <span class="session-copy">
            <strong>${escapeHtml(session.name)}</strong>
            <span>${escapeHtml(session.preview)}</span>
          </span>
          <span class="session-side">
            <time>${escapeHtml(session.time)}</time>
            <span class="session-dot ${session.riskLevel}"></span>
          </span>
        </button>
      `;
    })
    .join("");

  document.querySelectorAll(".session-item").forEach((item) => {
    item.addEventListener("click", () => {
      state.activeSession = item.dataset.session;
      renderSession();
      renderSessionList();
    });
  });
}

function renderChat() {
  const session = sessions[state.activeSession];
  const chat = $("#chatMessages");
  chat.innerHTML = session.messages
    .map((message) => {
      const isAgent = message.from === "agent";
      const avatar = isAgent
        ? '<span class="avatar small" style="background:#cf5a5f">苏</span>'
        : `<span class="avatar small" style="background:${session.color}">${session.initial}</span>`;
      const image = message.image
        ? `<div class="message-image"><img src="${message.image}" alt="${escapeHtml(message.caption || "聊天图片")}"></div><div class="message-caption">${escapeHtml(message.caption || "")}</div>`
        : "";
      return `
        <div class="message ${isAgent ? "agent" : ""}">
          ${avatar}
          <div class="message-body">
            ${image}
            <div class="bubble">${escapeHtml(message.text)}</div>
            <div class="message-meta">${escapeHtml(message.time)}</div>
          </div>
        </div>
      `;
    })
    .join("");
  chat.scrollTop = chat.scrollHeight;
}

function renderAssist() {
  const session = sessions[state.activeSession];
  const riskLevel = session.risk.statusKey === "closed" ? "closed" : session.risk.level.toLowerCase();

  $("#chatAvatar").textContent = session.initial;
  $("#chatAvatar").style.background = session.color;
  $("#chatName").textContent = session.name;
  $("#chatMeta").textContent = session.meta;
  $("#profileAvatar").textContent = session.initial;
  $("#profileAvatar").style.background = session.color;
  $("#profileName").textContent = session.name;
  $("#profileMeta").textContent = session.profileMeta;
  $("#profileRisk").textContent = session.risk.statusKey === "closed" ? "已闭环" : `${session.risk.level}风险`;
  $("#profileRisk").className = `risk-pill ${riskLevel}`;
  $("#contactCount").textContent = session.contactCount;
  $("#recentOrder").textContent = session.recentOrder;
  $("#ticketCount").textContent = session.ticketCount;
  $("#emotionShort").textContent = session.emotionShort;

  $("#userTags").innerHTML = session.tags.map((tag) => `<span class="tag-chip">${escapeHtml(tag)}</span>`).join("");

  $("#trajectoryList").innerHTML = session.trajectory
    .map(
      (item) => `
        <li>
          <span class="timeline-dot ${item.type}"></span>
          <span class="timeline-copy">
            <strong>${escapeHtml(item.title)}</strong>
            <span>${escapeHtml(item.desc)}</span>
          </span>
        </li>
      `
    )
    .join("");

  $("#intentLabel").textContent = session.intent.label;
  $("#intentConfidence").textContent = session.intent.confidence.toFixed(2);
  $("#intentMeter").style.width = `${Math.round(session.intent.confidence * 100)}%`;
  $("#emotionLabel").textContent = session.emotion.label;
  $("#emotionScore").textContent = session.emotion.score.toFixed(2);
  $("#emotionMeter").style.width = `${Math.round(session.emotion.score * 100)}%`;
  $("#emotionNote").textContent = session.emotion.note;

  $("#replyText").textContent = session.reply;
  $("#adoptBtn").textContent = session.adopted ? "已采纳" : "采纳回复";
  $("#adoptBtn").style.opacity = session.adopted ? "0.7" : "1";
  $("#adoptBtn").disabled = session.adopted;

  $("#riskBadge").textContent = session.risk.statusKey === "closed" ? "已闭环" : session.risk.level;
  $("#riskBadge").className = `risk-pill ${riskLevel}`;
  $("#riskType").textContent = session.risk.type;
  $("#riskReasons").innerHTML = session.risk.reasons.map((reason) => `<li>${escapeHtml(reason)}</li>`).join("");

  $("#createTicketBtn").textContent = session.ticketCreated ? "工单已生成" : "生成工单";
  $("#createTicketBtn").disabled = session.ticketCreated;
  $("#closeRiskBtn").textContent = session.risk.statusKey === "closed" ? "已闭环" : "标记闭环";
  $("#closeRiskBtn").disabled = session.risk.statusKey === "closed";

  const riskCard = $("#riskCard");
  if (session.risk.statusKey === "closed") {
    riskCard.style.background = "var(--green-soft)";
    riskCard.style.borderColor = "rgba(47, 133, 90, 0.24)";
  } else if (session.risk.level === "中") {
    riskCard.style.background = "var(--amber-soft)";
    riskCard.style.borderColor = "rgba(183, 121, 31, 0.24)";
  } else {
    riskCard.style.background = "var(--coral-soft)";
    riskCard.style.borderColor = "rgba(207, 90, 95, 0.22)";
  }
}

function renderSession() {
  renderChat();
  renderAssist();
  renderSessionList();
}

function renderRiskChart() {
  const values = [18, 24, 20, 29, 26, 34, 32];
  const labels = ["08-13", "08-14", "08-15", "08-16", "08-17", "08-18", "08-19"];
  const width = 600;
  const height = 220;
  const padX = 28;
  const padTop = 26;
  const padBottom = 34;
  const max = Math.max(...values) * 1.15;
  const innerWidth = width - padX * 2;
  const innerHeight = height - padTop - padBottom;
  const step = innerWidth / values.length;
  const barWidth = Math.min(52, step - 14);
  let bars = "";

  values.forEach((value, index) => {
    const x = padX + step * index + (step - barWidth) / 2;
    const barHeight = (value / max) * innerHeight;
    const y = padTop + innerHeight - barHeight;
    const hot = index === values.length - 1 ? " hot" : "";
    bars += `
      <rect class="bar-rect${hot}" x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${barWidth.toFixed(1)}" height="${barHeight.toFixed(1)}" rx="4"></rect>
      <text class="bar-value" x="${(x + barWidth / 2).toFixed(1)}" y="${(y - 7).toFixed(1)}">${value}</text>
      <text class="bar-label" x="${(x + barWidth / 2).toFixed(1)}" y="${height - 10}">${labels[index]}</text>
    `;
  });

  $("#riskChart").innerHTML = `
    <svg viewBox="0 0 ${width} ${height}" role="img" aria-label="近 7 日风险预警趋势柱状图">
      ${bars}
    </svg>
  `;
}

function syncEventsFromSessions() {
  riskEvents.forEach((event) => {
    const session = event.sessionId ? sessions[event.sessionId] : null;
    if (!session) return;
    event.status = session.risk.status;
    event.statusKey = session.risk.statusKey;
    event.owner = session.risk.owner || event.owner;
  });
}

function renderRiskTable() {
  const filter = state.dashboardFilter;
  const list = riskEvents.filter((event) => filter === "全部" || event.type.includes(filter));
  $("#eventCount").textContent = `共 ${list.length} 条`;

  if (!list.length) {
    $("#riskTable").innerHTML = '<div class="empty-state">当前筛选条件下暂无预警</div>';
    return;
  }

  $("#riskTable").innerHTML = list
    .map((event) => {
      const selected = event.id === state.selectedRisk ? " selected" : "";
      const levelClass = event.statusKey === "closed" ? "closed" : event.level === "高" ? "high" : "medium";
      return `
        <button type="button" class="risk-row${selected}" data-event="${event.id}">
          <span class="risk-time"><time>${escapeHtml(event.time)}</time></span>
          <span class="risk-cell">
            <strong>${escapeHtml(event.user)}</strong>
            <span class="risk-cell-secondary">${escapeHtml(event.id)}</span>
          </span>
          <span class="risk-cell risk-type">
            <span class="risk-type-dot ${levelClass}"></span>
            <span>${escapeHtml(event.type)}</span>
          </span>
          <span class="risk-cell risk-level">${escapeHtml(event.level)}</span>
          <span class="risk-cell risk-status">
            <span class="status-pill ${event.statusKey}">${escapeHtml(event.status)}</span>
          </span>
          <span class="risk-cell owner-cell">${escapeHtml(event.owner)}</span>
          <span class="risk-cell risk-action"><span class="row-action">详情</span></span>
        </button>
      `;
    })
    .join("");

  document.querySelectorAll(".risk-row").forEach((row) => {
    row.addEventListener("click", () => {
      state.selectedRisk = row.dataset.event;
      renderRiskTable();
      renderRiskDetail();
    });
  });
}

function renderRiskDetail() {
  const event = riskEvents.find((item) => item.id === state.selectedRisk) || riskEvents[0];
  const session = event.sessionId ? sessions[event.sessionId] : null;
  $("#detailStatusText").textContent = `${event.status} · 负责人 ${event.owner}`;
  const closeBtn = $("#closeDashboardRiskBtn");
  closeBtn.disabled = event.statusKey === "closed";
  closeBtn.textContent = event.statusKey === "closed" ? "已闭环" : "标记闭环";

  const actionHtml = (session && session.risk.actions) || event.actions || [];
  $("#riskDetailBody").innerHTML = `
    <div class="detail-block">
      <h3>触发链路</h3>
      <ul class="detail-list">
        ${(event.evidence || []).map((line) => `<li><span>证据</span><span>${escapeHtml(line)}</span></li>`).join("")}
      </ul>
    </div>
    <div class="detail-block">
      <h3>建议动作</h3>
      <ul class="detail-list">
        ${actionHtml.map((line) => `<li><span>动作</span><span>${escapeHtml(line)}</span></li>`).join("")}
      </ul>
    </div>
    <div class="detail-block">
      <h3>关联数据</h3>
      <ul class="detail-list">
        ${(event.linked || []).map((line) => `<li><span>关联</span><span>${escapeHtml(line)}</span></li>`).join("")}
      </ul>
    </div>
    <div class="detail-block">
      <h3>处理时限</h3>
      <p>${escapeHtml(event.due)}</p>
      <h3 style="margin-top:12px">处置要求</h3>
      <p>处理人需补充处理动作并回访，确认后系统自动关闭预警。</p>
    </div>
  `;
}

function closeDashboardRisk() {
  const event = riskEvents.find((item) => item.id === state.selectedRisk);
  if (!event || event.statusKey === "closed") return;

  const session = event.sessionId ? sessions[event.sessionId] : null;
  const wasHigh = event.level === "高";
  if (session) {
    session.risk.statusKey = "closed";
    session.risk.status = "已闭环";
    session.risk.owner = "客服-苏晴";
  } else {
    event.statusKey = "closed";
    event.status = "已闭环";
    event.owner = "客服-苏晴";
  }
  if (wasHigh) metrics.high = Math.max(0, metrics.high - 1);
  renderDashboard();
  if (state.activeView === "workbench" && session) renderAssist();
  toast("风险已闭环，处理记录已归档");
}

function renderDashboard() {
  syncEventsFromSessions();
  $("#kpiToday").textContent = metrics.today;
  $("#kpiHigh").textContent = metrics.high;
  $("#kpiDuration").textContent = metrics.duration;
  $("#kpiClosed").textContent = `${metrics.closedRate}%`;
  $("#topRiskCount").textContent = metrics.high;
  renderRiskChart();
  renderRiskTable();
  renderRiskDetail();
}

function switchView(view) {
  state.activeView = view;
  document.querySelectorAll(".view-tab").forEach((tab) => {
    const active = tab.dataset.view === view;
    tab.classList.toggle("active", active);
    tab.setAttribute("aria-pressed", String(active));
  });
  $("#workbenchView").classList.toggle("active", view === "workbench");
  $("#dashboardView").classList.toggle("active", view === "dashboard");
  if (view === "dashboard") {
    renderDashboard();
  }
}

function toast(message) {
  const el = $("#toast");
  el.textContent = message;
  el.classList.add("show");
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => el.classList.remove("show"), 2200);
}

function sendMessage() {
  const session = sessions[state.activeSession];
  const input = $("#chatTextarea");
  const text = input.value.trim();
  if (!text) return;

  session.messages.push({ from: "agent", text, time: nowTime() });
  session.preview = text.length > 16 ? `${text.slice(0, 16)}…` : text;
  session.time = nowTime();
  input.value = "";
  renderChat();
  renderSessionList();

  if (!session.followUpSent && session.risk.statusKey !== "closed") {
    session.followUpSent = true;
    setTimeout(() => {
      session.messages.push({ from: "customer", text: session.followUp, time: nowTime() });
      session.time = nowTime();
      session.emotion.score = Math.min(0.98, session.emotion.score + 0.05);
      session.emotion.label = session.emotion.score >= 0.9 ? "焦虑 / 愤怒" : session.emotion.label;
      session.emotion.note = "再次追问保障，情绪仍在上升";
      renderChat();
      renderAssist();
      renderSessionList();
      if (state.activeView === "dashboard") renderDashboard();
      toast("检测到情绪继续上升，建议优先安抚");
    }, 1100);
  }
}

function adoptReply() {
  const session = sessions[state.activeSession];
  if (session.adopted) return;
  session.adopted = true;
  session.messages.push({ from: "agent", text: session.reply, time: nowTime() });
  session.time = nowTime();
  renderChat();
  renderAssist();
  renderSessionList();
  toast("共情回复已采纳并发送");
}

function createTicket() {
  const session = sessions[state.activeSession];
  if (session.ticketCreated) return;
  session.ticketCreated = true;
  session.risk.statusKey = "processing";
  session.risk.status = "处理中";
  session.risk.owner = "客服-苏晴";
  renderAssist();
  renderSessionList();
  if (state.activeView === "dashboard") renderDashboard();
  toast("工单已创建，风险进入处理中");
}

function closeRisk() {
  const session = sessions[state.activeSession];
  if (session.risk.statusKey === "closed") return;
  const wasHigh = session.risk.level === "高";
  session.risk.statusKey = "closed";
  session.risk.status = "已闭环";
  session.risk.owner = "客服-苏晴";
  if (wasHigh) metrics.high = Math.max(0, metrics.high - 1);
  renderAssist();
  renderSessionList();
  if (state.activeView === "dashboard") renderDashboard();
  toast("风险已闭环，处理记录已归档");
}

function bindEvents() {
  document.querySelectorAll(".view-tab").forEach((tab) => {
    tab.addEventListener("click", () => switchView(tab.dataset.view));
  });

  $("#openWorkbenchBtn").addEventListener("click", () => switchView("workbench"));
  $("#sessionSearch").addEventListener("input", renderSessionList);

  $("#sendButton").addEventListener("click", sendMessage);
  $("#chatTextarea").addEventListener("keydown", (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  });

  document.querySelectorAll(".quick-chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      $("#chatTextarea").value = chip.dataset.quick;
      $("#chatTextarea").focus();
    });
  });

  $("#adoptBtn").addEventListener("click", adoptReply);
  $("#regenerateBtn").addEventListener("click", () => {
    const session = sessions[state.activeSession];
    const current = session.reply;
    session.reply = session.replyAlt;
    session.replyAlt = current;
    renderAssist();
    toast("已基于最新上下文重新生成");
  });

  $("#createTicketBtn").addEventListener("click", createTicket);
  $("#closeRiskBtn").addEventListener("click", closeRisk);

  $("#viewProfileBtn").addEventListener("click", () => {
    toast("已打开用户全链路档案");
  });

  document.querySelectorAll(".filter-chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      state.dashboardFilter = chip.dataset.filter;
      document.querySelectorAll(".filter-chip").forEach((item) => item.classList.toggle("active", item === chip));
      renderRiskTable();
    });
  });

  $("#closeDashboardRiskBtn").addEventListener("click", closeDashboardRisk);
}

bindEvents();
renderSession();
