import ReactDOM from 'react-dom/client'

import App from '@/routes'
import '@/styles/index.css'
import '@/styles/bubble.css'

import { InboxProvider } from './utils/context/inbox-context'

import { Toaster } from 'sonner'

ReactDOM.createRoot(document.getElementById("root")!).render(
  <InboxProvider>
    <App />
    <Toaster />
  </InboxProvider>
);
