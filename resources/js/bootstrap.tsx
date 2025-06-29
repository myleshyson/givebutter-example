import axios from 'axios';
import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'
import posthog from 'posthog-js'
import '../css/app.css'
import {c} from "vite/dist/node/moduleRunnerTransport.d-DJ_mE5sf";

window.axios = axios;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

createInertiaApp({
    resolve: name => {
        const pages = import.meta.glob('./Pages/**/*.tsx', { eager: true })
        return pages[`./Pages/${name}.tsx`]
    },
    setup({ el, App, props }) {
        const key = props.initialPage.props.posthog?.key
        const host = props.initialPage.props.posthog?.host
        const flags = props.initialPage.props.posthog?.activeFeatureFlags || {}

        posthog.init(key, {
            api_host: host,
            before_send: (payload) => {
                const activeFlags = Object.keys(flags)

                payload.properties['$active_feature_flags'] = activeFlags.length ? activeFlags : false

                Object.entries(flags).forEach(([key, value]) => {
                    payload.properties[`$feature/${key}`] = value || false
                })

                return payload
            }
        })

        window.posthog = posthog
        createRoot(el).render(<App {...props} />)
    },
})
