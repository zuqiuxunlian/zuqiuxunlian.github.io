---
title: "赛事时间线（瀑布流）"
layout: page
permalink: /events/
date: 2026-06-25
---

<style>
/* 简单的瀑布流（masonry）布局，使用 CSS columns 实现 */
.events-masonry {
  column-count: 3;
  column-gap: 1rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
}
.event-item {
  display: inline-block; /* 使元素在 columns 中正确换行 */
  width: 100%;
  margin: 0 0 1rem;
  padding: 0.9rem;
  background: #fff;
  border-radius: 6px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.08);
  break-inside: avoid;
}
.event-meta {
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}
.results-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 0.5rem;
}
.results-table th, .results-table td {
  border: 1px solid #eee;
  padding: 6px 8px;
  font-size: 0.95rem;
}
@media (max-width: 1000px) {
  .events-masonry { column-count: 2; }
}
@media (max-width: 600px) {
  .events-masonry { column-count: 1; }
}
</style>

# 赛事时间线

下面按时间倒序（最新在前）以瀑布流方式展示赛事信息。你可以通过修改 _data/events.yml 来添加或编辑条目。

<div class="events-masonry">
{% assign sorted_events = site.data.events | sort: 'date' | reverse %}
{% for e in sorted_events %}
  <article class="event-item">
    <h3>{{ e.title }}</h3>
    <div class="event-meta">{{ e.date | date: "%Y-%m-%d %H:%M" }} · {{ e.venue }}</div>
    <div class="event-desc">{{ e.description }}</div>

    {% if e.matches %}
    <table class="results-table">
      <thead>
        <tr>
          <th>场次</th>
          <th>对阵</th>
          <th>比分</th>
          <th>备注</th>
        </tr>
      </thead>
      <tbody>
      {% for m in e.matches %}
        <tr>
          <td>{{ m.round }}</td>
          <td>{{ m.match }}</td>
          <td>{{ m.score }}</td>
          <td>{{ m.note }}</td>
        </tr>
      {% endfor %}
      </tbody>
    </table>
    {% endif %}
  </article>
{% endfor %}
</div>


<!-- 使用说明：
- 在仓库的 _data/events.yml 中添加事件项（参见示例）。
- 每个事件支持字段：title, date (ISO 时间), venue, description, matches（数组，每项包含 round, match, score, note）。
- 如果你希望按升序显示，请把 | reverse 去掉。
- 我可以继续把页面链接加入导航栏（修改 _config.yml 或 header include），也可以改用 JS Masonry 实现更复杂的瀑布流动画。
-->