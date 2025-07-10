import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

async function enableMocking() {
    if (process.env.NODE_ENV !== 'development') {
        return;
    }

    const { worker } = await import('./mocks/browser');

    // MSW 완전히 시작될 때까지 기다리기
    return worker.start({
        onUnhandledRequest: 'bypass',
    });
}

// MSW 시작 후 React 앱 렌더링
enableMocking().then(() => {
    const root = ReactDOM.createRoot(
        document.getElementById('root') as HTMLElement
    );
    root.render(<App />);
});