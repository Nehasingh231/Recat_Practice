import React from 'react'

// *** receiving data so it is child and App.jsx is parent
function Card({image,name, role, description}) {
  return (
    <div style={styles.card}>
     <img src={image} style={styles.img} />
     <h2>{name}</h2>
     <h4>{role} </h4>  
     <p>{description} </p>
    </div>
  )
}

const styles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: '10px',
    padding: '1rem',
    margin: '1rem',
    width: '200px',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  },
  img: {
    width: '100%',
    borderRadius: '50%',
  },
};


export default Card