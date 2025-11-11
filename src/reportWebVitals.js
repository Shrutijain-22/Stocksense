// No-op fallback for environments where 'web-vitals' is not installed.
// Keeps the same function signature used by Create React App so you can
// re-enable real metrics later by installing 'web-vitals'.
export default function reportWebVitals(onPerfEntry) {
  if (onPerfEntry && typeof onPerfEntry === 'function') {
    // Provide a lightweight console fallback so devs see that metrics would be reported.
    // This does not collect real metrics; install 'web-vitals' to enable full reporting:
    // npm install web-vitals
    console.debug('reportWebVitals: web-vitals not installed — metrics are disabled.');
  }
}
