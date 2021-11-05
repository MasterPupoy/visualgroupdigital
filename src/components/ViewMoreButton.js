import React from 'react';

export default function ViewMoreButton({ link, id }) {
  return (
    <button   
      className="button button--aylen "
      onClick={() => {
        window.location.assign(link)
      }}
      id={id}
    >
      <span>VIEW MORE</span>
    </button>
  )
}