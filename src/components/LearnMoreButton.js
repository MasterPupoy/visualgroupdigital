import React from 'react';

export default function LearnMoreButton({ link, id }) {
  return (
    <button   
      className="button button--aylen "
      onClick={() => {
        window.location.assign(link)
      }}
      id={id}
    >
      <span>LEARN MORE</span>
    </button>
  )
}
