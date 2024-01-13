import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-800 text-slate-500 p-4 text-center">
    <p>&copy; <span id="currentYear">{new Date().getFullYear()}</span> Keeper | loloDesign. All rights reserved.</p>
</footer>
  )
}

export default Footer