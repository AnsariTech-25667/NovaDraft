// server/utils/log.js
// Simple dev logger for NovaDraft

export const log = (...args) => {
  if (process.env.NODE_ENV !== 'production') {
    console.log('[novadraft]', ...args);
  }
};
