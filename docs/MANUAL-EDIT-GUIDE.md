# 手动修改课程信息指导书

> 适用项目：HKU MSc(Eng) IDT 学习指南  
> 项目路径：`D:\hku-idt-guide`  
> 更新日期：2026-08-05

---

## 一、数据流向总览

```
官方数据源
    │
    ├── docs/archival/curriculum.json  (课程清单 109 门)
    ├── docs/archival/merged-slots.json (排课数据 143 条)
    │
    ↓ [gen.cjs 程序化生成]
    │
核心数据文件 (src/data/)
    ├── courses.js      (116 门课程库)
    ├── timetable.js    (排课表)
    └── calendar.js     (校历事件)
    │
    ↓ [Vite build]
    │
前端页面 (src/pages/)
    ├── courses.js / course-detail.js / home.js / schedule.js / calendar.js / commute.js
    │
    ↓ [deploy]
    │
GitHub Pages → https://jonneywren.github.io/hku-idt-guide/
```

**关键原则**：
1. 优先使用 gen.cjs 生成器，确保可复现性
2. 手动修改仅适用于小范围调整（如时间更正、新增备注）
3. 修改后必须经过「构建 → 提交 → 部署 → 验证」四步流程

---

## 二、目录与文件结构说明

### 2.1 核心目录

| 目录 | 用途 |
|------|------|
| `src/data/` | **数据文件（手动修改主要目标）** |
| `src/pages/` | 前端页面组件（通常无需修改） |
| `src/utils/` | 工具函数（如 `enroll.js` 选课联动） |
| `src/style.css` | 全局样式（分类标签颜色） |
| `docs/` | 文档与档案 |
| `docs/archival/` | 数据溯源档案（官方 JSON、生成器） |
| `public/` | 静态资源（PDF 文件） |
| `dist/` | 构建产物（勿手动修改） |

### 2.2 关键文件清单

#### 数据文件（最常修改）

| 文件 | 行数 | 内容 |
|------|------|------|
| `src/data/courses.js` | ~883 行 | 课程库（116 门） |
| `src/data/timetable.js` | ~379 行 | 排课表（143 条） |
| `src/data/calendar.js` | ~37 行 | 校历事件 |
| `miniprogram/data/calendar.js` | ~37 行 | 小程序校历（需同步） |

#### 生成工具（数据溯源）

| 文件 | 用途 |
|------|------|
| `docs/archival/gen.cjs` | 数据生成器（从 JSON 生成 courses.js/timetable.js） |
| `docs/archival/curriculum.json` | 课程清单原始数据 |
| `docs/archival/merged-slots.json` | 排课原始数据 |

#### 样式与页面

| 文件 | 用途 |
|------|------|
| `src/style.css` | 分类标签样式（.tag-xc/.tag-xd） |
| `src/pages/courses.js` | 课程列表页（含 LIST_META） |
| `src/pages/course-detail.js` | 课程详情页 |

---

## 三、手动修改步骤详解

### 场景 1：修改单门课程的排课时间

**典型场景**：某课程周四（THU）时间从 16:00–18:30 改为 19:00–21:30

**操作步骤**：

1. **定位数据文件**
   - 打开 `src/data/timetable.js`
   - 搜索课程代码（如 `MECH6034`）

2. **修改对应时间段**
   ```javascript
   // 修改前
   { term: 1, section: '', day: 'THU', start: '16:00', end: '18:30', venue: 'TBC', instructor: 'Prof. Y.H. Chen', dateNote: '' }
   
   // 修改后
   { term: 1, section: '', day: 'THU', start: '19:00', end: '21:30', venue: 'TBC', instructor: 'Prof. Y.H. Chen', dateNote: '' }
   ```

3. **字段说明**
   | 字段 | 说明 |
   |------|------|
   | `term` | 学期：1=Sem1，2=Sem2 |
   | `section` | 班次字母（A/B/C）；多时段无标注用 `''` |
   | `day` | 星期：MON/TUE/WED/THU/FRI/SAT |
   | `start`/`end` | 24 小时制（如 `'19:00'`） |
   | `venue` | 地点（TBC=待定） |
   | `instructor` | 教师姓名 |
   | `dateNote` | 指定日期说明（可选） |

4. **同步检查课程附注**
   - 打开 `src/data/courses.js`，搜索同一课程
   - 查看 `note` 字段是否需要更新（例如原来写"课表列出多个上课时段"，现改为单时段时可删除）

---

### 场景 2：新增或修改课程信息

**典型场景**：新增一门课程或修改课程名称/学分/分类

**操作步骤**：

1. **打开 `src/data/courses.js`**

2. **找到目标课程对象**（按代码字母排序）

3. **修改字段**
   ```javascript
   {
     code: 'MECH6034',                    // 课程代码（必填）
     title: 'Computer-aided product development',  // 英文名（必填）
     titleZh: '计算机辅助产品开发',        // 中文名（可选）
     zhOfficial: false,                   // 是否官方中文名
     list: 'B',                           // 分类：A/B/XC/XD/capstone
     credits: 6,                          // 学分
     semester: '1',                       // 学期：1/2/full
     sections: ['A', 'B'],                // 班次数组
     desc: '课程简介...',                 // 中文简介（可选）
     note: '',                            // 附注说明（可选）
     prereq: '',                          // 先修要求
     exclusive: '',                       // 互斥课程
     cef: true,                           // 是否可申请 CEF
     isNew2026: false,                    // 2026 新增课程标记
     movedToB2026: true                   // 2026 转 List B 标记
   }
   ```

4. **分类字段值含义**
   | 值 | 含义 |
   |----|------|
   | `A` | List A 核心课 |
   | `B` | List B 选修课 |
   | `XC` | 跨课程选修 |
   | `XD` | 跨系选修 |
   | `capstone` | 毕业论文/毕业项目 |

5. **新增课程时**
   - 在对应分类区块插入新对象
   - 保持按代码字母排序
   - 如果课程有排课，需同步在 `timetable.js` 中添加条目

---

### 场景 3：修改校历/选课时间

**典型场景**：将硕士课程选课时间从 2026-08-06~08-14 改为 2026-08-05~08-15

**操作步骤**：

1. **修改两个文件**（保持同步）
   - `src/data/calendar.js`（H5 版本）
   - `miniprogram/data/calendar.js`（小程序版本）

2. **编辑格式**
   ```javascript
   // 修改前
   { date: '2026-08-06', endDate: '2026-08-14', title: '硕士课程选课时间 (Course Selection)', type: 'adddrop', tentative: false }
   
   // 修改后
   { date: '2026-08-05', endDate: '2026-08-15', title: '硕士课程选课时间 (Course Selection)', type: 'adddrop', tentative: false }
   ```

3. **事件类型字段值**
   | type | 含义 |
   |------|------|
   | `teaching` | 教学 |
   | `adddrop` | 选课/加退选 |
   | `reading` | 阅读周 |
   | `revision` | 复习周 |
   | `exam` | 考试 |
   | `holiday` | 假期 |

---

### 场景 4：修改课程分类统计

**典型场景**：新增分类（如 XC/XD）或调整分类归属

**操作步骤**：

1. **更新课程库数据**
   - `src/data/courses.js` 中修改各课程的 `list` 字段

2. **更新样式定义**（`src/style.css`）
   ```css
   .tag-xc { background: #6b5b95; }  /* 跨课程选修 */
   .tag-xd { background: #8a6d3b; }  /* 跨系选修 */
   ```

3. **更新课程页配置**（`src/pages/courses.js`）
   ```javascript
   export const LIST_META = {
     A: { label: 'List A 核心', full: 'List A 学科核心课', color: '#00573f' },
     B: { label: 'List B 选修', full: 'List B 学科选修课', color: '#31597f' },
     XC: { label: '跨课程选修', full: 'Cross-curriculum electives', color: '#6b5b95' },
     XD: { label: '跨系选修', full: 'Cross-departmental electives', color: '#8a6d3b' },
     capstone: { label: '毕业论文', full: 'Capstone/Graduation Project', color: '#9c4f4f' }
   };
   ```

4. **学分统计逻辑**
   - 使用 `isElective()` 函数判断 XC/XD 是否算入外学科选修学分
   - 公式：`外学科选修学分 = Σ(credits of XC/XD courses)`

---

## 四、修改后的构建与部署流程

### 4.1 标准流程（四步法）

#### 步骤 1：验证修改
```bash
cd D:\hku-idt-guide
# 检查语法
node -e "require('./src/data/timetable.js')"
node -e "require('./src/data/courses.js')"
```

#### 步骤 2：本地预览
```bash
npm run preview
# 打开 http://localhost:4173/hku-idt-guide/
# 导航到修改的课程详情页验证
```

#### 步骤 3：提交代码
```bash
git add src/data/
git commit -m "修改 [课程代码] [修改内容]"
git push origin main
```

#### 步骤 4：部署到 GitHub Pages
```bash
npx gh-pages -d dist
```

**注意**：每次部署后需等待 30-60 秒让 CDN 生效。

---

### 4.2 常见问题排查

#### Q1：线上数据未更新
- **原因**：GitHub Pages CDN 缓存
- **解决**：
  1. 清除浏览器缓存
  2. 添加随机参数访问（如 `?nocache=0805`）
  3. 等待 30-60 秒后重试

#### Q2：gh-pages 部署失败（网络问题）
- **原因**：本地代理无法连接 GitHub
- **解决**：
  1. 检查代理配置：`git config http.proxy http://127.0.0.1:7897`
  2. 确认代理服务运行中
  3. 重试：`npx gh-pages -d dist`

#### Q3：commit message 中文乱码
- **原因**：Windows CMD shell 转义问题
- **解决**：
  1. 使用 ASCII 字符：`git commit -m "Update MECH6034 timetable"`
  2. 或使用 Node.js 脚本封装：`commit-mech.cjs`（见 docs/archival/）

#### Q4：构建产物未包含最新数据
- **原因**：Vite 缓存
- **解决**：
  ```bash
  rm -rf dist
  npm run build
  ```

---

## 五、数据一致性检查清单

每次修改后，建议执行以下检查：

### 5.1 数据文件检查
- [ ] `courses.js` 中该课程的 `code`、`title`、`credits`、`list` 字段正确
- [ ] `timetable.js` 中该课程有排课条目（如有）
- [ ] `note` 附注与实际情况相符
- [ ] `semester` 字段值与课程表一致（1/2/full）

### 5.2 前端渲染检查
- [ ] 课程列表页分类计数正确
- [ ] 课程详情页显示所有字段
- [ ] 排课卡片显示正确的时间和地点
- [ ] 学分统计卡片数值合理

### 5.3 功能联动检查
- [ ] 课程筛选（按分类/学期）正常
- [ ] 搜索功能能查到该课程
- [ ] 选课联动（enroll.js）显示正确
- [ ] 日历页显示相关事件

### 5.4 文档同步检查
- [ ] PRD.md 中数据源说明更新
- [ ] README.md 版本历史更新
- [ ] 技术档案（docs/archival/）如有新数据源则追加

---

## 六、批量修改推荐工具

### 6.1 使用生成器（推荐）

当需要大规模更新数据时（如新增整个学期的课程），优先使用：

```bash
cd D:\hku-idt-guide/docs/archival
node gen.cjs
```

**输入**：
- `curriculum.json`（课程清单）
- `merged-slots.json`（排课数据）

**输出**：
- `courses.js`（覆盖原文件）
- `timetable.js`（覆盖原文件）

### 6.2 脚本模板参考

在 `docs/archival/` 目录下有多个脚本可参考：

| 脚本 | 用途 |
|------|------|
| `fix-calendar-date.cjs` | 批量修改日期字段 |
| `patch-src.cjs` | 添加样式类 |
| `disc.js` | 批量添加免责声明 |
| `rebuild-deploy.cjs` | 完整部署流程封装 |

---

## 七、最佳实践总结

1. **小改手动，大改用生成器**
   - 单门课程时间调整：手动修改
   - 新增/调整多门课程：使用 gen.cjs

2. **保持数据同步**
   - 修改 calendar.js 时同步 H5 和小程序版本
   - 修改 courses.js 时检查 timetable.js 是否需要同步

3. **文档同步更新**
   - PRD.md、README.md、技术档案都要保持一致
   - 记录每次修改的原因和依据

4. **验证闭环**
   - 本地预览 → 构建 → 部署 → 线上验证
   - 每次至少验证 3 个关键页面

5. **备份意识**
   - 重要数据修改前先备份原文件
   - Git 提交前做好 staging 检查

---

## 八、联系与支持

- **项目地址**：https://github.com/JonneyWren/hku-idt-guide
- **线上站点**：https://jonneywren.github.io/hku-idt-guide/
- **技术档案**：docs/archival/README.md

---

**文档版本**：1.0  
**最后更新**：2026-08-05  
**适用人群**：项目维护者、数据管理员
