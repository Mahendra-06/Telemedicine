// src/services/diagnostics.js

export function analyzeVitals(data) {
  let result = [];

  if (data.bp > 140) result.push("⚠️ High Blood Pressure");
  if (data.temp > 38) result.push("🤒 Fever Detected");
  if (data.heartRate > 100) result.push("💓 High Heart Rate");

  if (result.length === 0) {
    result.push("✅ Normal");
  }

  return result;
}