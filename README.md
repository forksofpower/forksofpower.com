# forksofpower.com

## Setup

Enable webhook updates for Netlify. Replace `target_url` with the Netlify webhook url and `API_KEY` with a Dev.to key.
```
curl -X POST -H "Content-Type: application/json" \
  -H "api-key: API_KEY" \
  -d '{"webhook_endpoint":{"target_url":"https://example.org/webhooks/webhook1","source":"DEV","events":["article_created", "article_updated"]}}' \
  https://dev.to/api/webhooks

```
