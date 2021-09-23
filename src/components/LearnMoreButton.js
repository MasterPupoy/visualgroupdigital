import React from 'react';

export default function LearnMoreButton({ link }) {
  return (
    <button   
      className="button button--aylen "
      onClick={() => {
        window.location.assign(link)
      }}
    >
      <span>LEARN MORE</span>
    </button>
  )
}
