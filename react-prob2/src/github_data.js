import React from 'react';
export function GitHubAvatar({ src, alt = "GitHub Avatar", size = 50 }) {
  return (
    <img
      src={src}
      alt={alt}
      style={{
        width: `${size}px`,
        height: 'auto',
        display: 'block',
        margin: '10px auto',
      }}
    />
  );
}
export function GitHubRepoURL({ url, text = "GitHub Repository" }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: 'purple', textDecoration: 'underline', display: 'block', textAlign: 'center' }}
    >
      {text}
    </a>
  );
}

