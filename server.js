/**
 * Simple Node.js Express Server for Portfolio Website
 * This is OPTIONAL - you can also just open index.html directly in a browser
 */

const express = require('express');
const path = require('path');
const compression = require('compression');

const app = express();
const PORT = process.env.PORT || 3000;

// ========================================
// MIDDLEWARE
// ========================================

// Enable gzip compression for better performance
app.use(compression());

// Serve static files (HTML, CSS, JS, images)
app.use(express.static(path.join(__dirname), {
    maxAge: '1d', // Cache static files for 1 day
    etag: true
}));

// Security headers (except X-Frame-Options for PDF embedding)
app.use((req, res, next) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-XSS-Protection', '1; mode=block');
    // Allow same-origin iframes for PDF preview
    if (!req.path.endsWith('.pdf')) {
        res.setHeader('X-Frame-Options', 'SAMEORIGIN');
    }
    next();
});

// ========================================
// ROUTES
// ========================================

// Serve static files first (PDFs, images, CSS, JS)
// This must come before the catch-all route
app.use(express.static(path.join(__dirname), {
    maxAge: '1d',
    etag: true,
    setHeaders: (res, filepath) => {
        // Set proper content-type for PDFs
        if (filepath.endsWith('.pdf')) {
            res.setHeader('Content-Type', 'application/pdf');
            res.setHeader('Content-Disposition', 'inline');
        }
    }
}));

// Serve index.html for HTML routes only (SPA behavior)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// ========================================
// ERROR HANDLING
// ========================================

// 404 handler
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'index.html'));
});

// General error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// ========================================
// START SERVER
// ========================================

app.listen(PORT, () => {
    console.log(`
╔══════════════════════════════════════════════╗
║                                              ║
║   🚀 Portfolio Server Running!               ║
║                                              ║
║   📍 Local:   http://localhost:${PORT}        ║
║                                              ║
║   Press Ctrl+C to stop the server           ║
║                                              ║
╚══════════════════════════════════════════════╝
    `);
});

// Graceful shutdown
process.on('SIGTERM', () => {
    console.log('SIGTERM signal received: closing HTTP server');
    server.close(() => {
        console.log('HTTP server closed');
    });
});

