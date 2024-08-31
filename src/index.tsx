import '@/app/styles/index.css'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from '@/app/app'

import { StoreProvider } from './app/providers/store-provider'

const domElement = document.getElementById('root')

if (!domElement) {
    throw new Error('Provide dom element')
}

document.body.classList.add('appNormalTheme')

const root = createRoot(domElement)

root.render(
    <BrowserRouter>
        <StoreProvider><App /></StoreProvider>
    </BrowserRouter>
)
