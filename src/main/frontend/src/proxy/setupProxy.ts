import { createProxyMiddleware } from "http-proxy-middleware";

module.exports = ({use}) => {
    use(
        '/api',
        createProxyMiddleware({
            target: 'http://localhost:8080',
            changeOrigin: true
        })
    )
}