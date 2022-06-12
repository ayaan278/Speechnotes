import React from 'react'

const Footer = () => {
  return (
    <footer id="foot">
    <div class="friends">
        <h3>
          Let's be Friends
        </h3>
        <div class="contact">
            <a class="list-offline-item"><a href="mailto:ayaanishere08@gmail.com" target="_blank" title="gmail">ayaanishere08@gmail.com</a></a>
        </div>
        <ul class="list-inline mt-4">
            <li class="circle"c><a href="https://github.com/ayaan278" target="_blank" title="github"><i class="fa fa-github fa-lg"></i></a></li>
            <li class="circle"><a href="https://www.instagram.com/_.ayaanii._/" target="_blank" title="instagram"><i class="fa fa-instagram fa-lg"></i></a></li>
            <li class="circle"><a href="https://www.linkedin.com/in/ayaan-ahmad-06545614a" target="_blank" title="instagram"><i class="fa fa-linkedin fa-lg"></i></a></li>
        </ul>
    </div>
    <div class="info">
        <p>&copy; 2022 Ayaan Ahmad</p>
    </div>
  </footer>
  )
}

export default Footer