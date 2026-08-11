# 泓口小学智慧课堂 AI 教育平台

Phase 1 基础治理骨架与 Web Demo V1.0。Web Demo 是展示级静态前端：不含真实学生数据、真实学校账号、模型 API Key 或外部模型调用。

## 本地启动

1. 复制环境模板：`cp .env.example .env`
2. 启动基础依赖：`docker compose up -d postgres redis`
3. 前端：`cd apps/web && npm install && npm run dev`
4. 后端：安装 Java 21 与 Gradle 后执行 `gradle :apps:api:bootRun`

## Web Demo

```bash
cd apps/web
npm install
npm run dev
npm run build
```

`apps/web/dist` 为 GitHub Pages 部署产物。提交至 `main` 后，`.github/workflows/deploy.yml` 会构建并部署静态 Demo；需先在 GitHub 仓库设置中启用 Pages（GitHub Actions 作为部署来源）。

演示包含首页、教师 AI 工作台、教育知识库、AI 治理中心、AI 创新实验室与安全运营中心。AI 任务均为前端模拟数据，教师确认前不可发布。

### 演示截图

部署或本地运行后，可将展示截图放入 `docs/screenshots/`。截图不得包含真实师生数据、账号、API Key、Token 或其他敏感信息。

OpenAPI 契约位于 `packages/api-contracts/openapi.yaml`；数据库迁移占位文件位于 `packages/database/migrations`。

## 工程治理

提交前必须执行格式检查、单元测试和安全扫描入口。详细规则见 [AGENTS.md](AGENTS.md)。
