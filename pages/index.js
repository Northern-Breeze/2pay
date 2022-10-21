export default function Home() {
  return (
<div>
    <div class="columns is-multiline">
    </div>
    <nav class="navbar py-4">
      <div class="container is-fluid">
        <div class="navbar-brand">
          <a class="navbar-item" href="#">
            <img class="image" src="https://bulma.io/images/bulma-logo.png" alt="" width="96px" />
          </a>
          <a class="navbar-burger" role="button" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div class="navbar-menu">
          <div class="navbar-start"><a class="navbar-item" href="#">About</a><a class="navbar-item"
              href="#">Company</a><a class="navbar-item" href="#">Services</a><a class="navbar-item"
              href="#">Testimonials</a></div>
          <div class="navbar-item">
            <div class="field has-addons">
              <div class="control">
                <input class="input" type="search" placeholder="Search" aria-label="Search" />
              </div>
              <div class="control">
                <button class="button" type="submit">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor"
                    style={{ width: '24px', height: '24px' }}>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <section class="section">
      <div class="container">
        <div class="mb-6 pb-3 columns is-multiline">
          <div class="column is-12 is-6-desktop mx-auto has-text-centered">
            <h2 class="mb-4 is-size-1 is-size-3-mobile has-text-weight-bold">My Mobile App</h2>
            <p class="subtitle has-text-grey mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
              massa nibh, pulvinar vitae aliquet nec, accumsan aliquet orci.</p>
            <div class="buttons is-centered">
              <a class="mr-3" href="#">
                <img src="https://bulmatemplates.github.io/bulma-templates/images/app-page/images/buttons/app-store.svg" alt="" /></a>
              <a href="#">
                <img src="https://bulmatemplates.github.io/bulma-templates/images/app-page/images/buttons/google-play.svg" alt="" /></a>
            </div>
          </div>
        </div>
        <div class="columns is-multiline">
          <div class="column is-12 is-4-desktop">
            <div class="mb-6 is-flex">
              <span>
                <svg width="48" height="48" viewbox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M25.6 22.9C25.7 23 25.8 23 26 23H33C33.6 23 34 22.6 34 22C34 21.8 34 21.7 33.9 21.6L30.4 14.6C30.1 14.1 29.5 13.9 29 14.2C28.9 14.3 28.7 14.4 28.6 14.6L25.1 21.6C24.9 22 25.1 22.6 25.6 22.9ZM29.5 17.2L31.4 21H27.6L29.5 17.2ZM18.5 14C16 14 14 16 14 18.5C14 21 16 23 18.5 23C21 23 23 21 23 18.5C23 16 21 14 18.5 14ZM18.5 21C17.1 21 16 19.9 16 18.5C16 17.1 17.1 16 18.5 16C19.9 16 21 17.1 21 18.5C21 19.9 19.9 21 18.5 21ZM22.7 25.3C22.3 24.9 21.7 24.9 21.3 25.3L18.5 28.1L15.7 25.3C15.3 24.9 14.7 24.9 14.3 25.3C13.9 25.7 13.9 26.3 14.3 26.7L17.1 29.5L14.3 32.3C13.9 32.7 13.9 33.3 14.3 33.7C14.7 34.1 15.3 34.1 15.7 33.7L18.5 30.9L21.3 33.7C21.7 34.1 22.3 34.1 22.7 33.7C23.1 33.3 23.1 32.7 22.7 32.3L19.9 29.5L22.7 26.7C23.1 26.3 23.1 25.7 22.7 25.3ZM33 25H26C25.4 25 25 25.4 25 26V33C25 33.6 25.4 34 26 34H33C33.6 34 34 33.6 34 33V26C34 25.4 33.6 25 33 25ZM32 32H27V27H32V32Z"
                    fill="#00d1b2"></path>
                  <circle cx="24" cy="24" r="23.5" stroke="#00d1b2"></circle>
                </svg></span>
              <div class="ml-3">
                <h4 class="is-size-4 has-text-weight-bold mb-2">Lorem ipsum dolor</h4>
                <p class="subtitle has-text-grey">Pellentesque eu quam vitae mi lacinia consequat quis in metus.</p>
              </div>
            </div>
            <div class="mb-6 is-flex">
              <span>
                <svg width="48" height="48" viewbox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M25.6 22.9C25.7 23 25.8 23 26 23H33C33.6 23 34 22.6 34 22C34 21.8 34 21.7 33.9 21.6L30.4 14.6C30.1 14.1 29.5 13.9 29 14.2C28.9 14.3 28.7 14.4 28.6 14.6L25.1 21.6C24.9 22 25.1 22.6 25.6 22.9ZM29.5 17.2L31.4 21H27.6L29.5 17.2ZM18.5 14C16 14 14 16 14 18.5C14 21 16 23 18.5 23C21 23 23 21 23 18.5C23 16 21 14 18.5 14ZM18.5 21C17.1 21 16 19.9 16 18.5C16 17.1 17.1 16 18.5 16C19.9 16 21 17.1 21 18.5C21 19.9 19.9 21 18.5 21ZM22.7 25.3C22.3 24.9 21.7 24.9 21.3 25.3L18.5 28.1L15.7 25.3C15.3 24.9 14.7 24.9 14.3 25.3C13.9 25.7 13.9 26.3 14.3 26.7L17.1 29.5L14.3 32.3C13.9 32.7 13.9 33.3 14.3 33.7C14.7 34.1 15.3 34.1 15.7 33.7L18.5 30.9L21.3 33.7C21.7 34.1 22.3 34.1 22.7 33.7C23.1 33.3 23.1 32.7 22.7 32.3L19.9 29.5L22.7 26.7C23.1 26.3 23.1 25.7 22.7 25.3ZM33 25H26C25.4 25 25 25.4 25 26V33C25 33.6 25.4 34 26 34H33C33.6 34 34 33.6 34 33V26C34 25.4 33.6 25 33 25ZM32 32H27V27H32V32Z"
                    fill="#00d1b2"></path>
                  <circle cx="24" cy="24" r="23.5" stroke="#00d1b2"></circle>
                </svg></span>
              <div class="ml-3">
                <h4 class="is-size-4 has-text-weight-bold mb-2">Lorem ipsum dolor</h4>
                <p class="subtitle has-text-grey">Pellentesque eu quam vitae mi lacinia consequat quis in metus.</p>
              </div>
            </div>
            <div class="mb-6 is-flex">
              <span>
                <svg width="48" height="48" viewbox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M25.6 22.9C25.7 23 25.8 23 26 23H33C33.6 23 34 22.6 34 22C34 21.8 34 21.7 33.9 21.6L30.4 14.6C30.1 14.1 29.5 13.9 29 14.2C28.9 14.3 28.7 14.4 28.6 14.6L25.1 21.6C24.9 22 25.1 22.6 25.6 22.9ZM29.5 17.2L31.4 21H27.6L29.5 17.2ZM18.5 14C16 14 14 16 14 18.5C14 21 16 23 18.5 23C21 23 23 21 23 18.5C23 16 21 14 18.5 14ZM18.5 21C17.1 21 16 19.9 16 18.5C16 17.1 17.1 16 18.5 16C19.9 16 21 17.1 21 18.5C21 19.9 19.9 21 18.5 21ZM22.7 25.3C22.3 24.9 21.7 24.9 21.3 25.3L18.5 28.1L15.7 25.3C15.3 24.9 14.7 24.9 14.3 25.3C13.9 25.7 13.9 26.3 14.3 26.7L17.1 29.5L14.3 32.3C13.9 32.7 13.9 33.3 14.3 33.7C14.7 34.1 15.3 34.1 15.7 33.7L18.5 30.9L21.3 33.7C21.7 34.1 22.3 34.1 22.7 33.7C23.1 33.3 23.1 32.7 22.7 32.3L19.9 29.5L22.7 26.7C23.1 26.3 23.1 25.7 22.7 25.3ZM33 25H26C25.4 25 25 25.4 25 26V33C25 33.6 25.4 34 26 34H33C33.6 34 34 33.6 34 33V26C34 25.4 33.6 25 33 25ZM32 32H27V27H32V32Z"
                    fill="#00d1b2"></path>
                  <circle cx="24" cy="24" r="23.5" stroke="#00d1b2"></circle>
                </svg></span>
              <div class="ml-3">
                <h4 class="is-size-4 has-text-weight-bold mb-2">Lorem ipsum dolor</h4>
                <p class="subtitle has-text-grey">Pellentesque eu quam vitae mi lacinia consequat quis in metus.</p>
              </div>
            </div>
          </div>
          <div class="column is-4 is-block-desktop is-hidden-touch">
            <img class="mx-auto mt-0-widescreen is-block image" src="https://bulmatemplates.github.io/bulma-templates/images/app-page/images/devices/phone-full.svg"
              alt="" /></div>
          <div class="column is-12 is-4-desktop">
            <div class="mb-6 is-flex">
              <span>
                <svg width="48" height="48" viewbox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M25.6 22.9C25.7 23 25.8 23 26 23H33C33.6 23 34 22.6 34 22C34 21.8 34 21.7 33.9 21.6L30.4 14.6C30.1 14.1 29.5 13.9 29 14.2C28.9 14.3 28.7 14.4 28.6 14.6L25.1 21.6C24.9 22 25.1 22.6 25.6 22.9ZM29.5 17.2L31.4 21H27.6L29.5 17.2ZM18.5 14C16 14 14 16 14 18.5C14 21 16 23 18.5 23C21 23 23 21 23 18.5C23 16 21 14 18.5 14ZM18.5 21C17.1 21 16 19.9 16 18.5C16 17.1 17.1 16 18.5 16C19.9 16 21 17.1 21 18.5C21 19.9 19.9 21 18.5 21ZM22.7 25.3C22.3 24.9 21.7 24.9 21.3 25.3L18.5 28.1L15.7 25.3C15.3 24.9 14.7 24.9 14.3 25.3C13.9 25.7 13.9 26.3 14.3 26.7L17.1 29.5L14.3 32.3C13.9 32.7 13.9 33.3 14.3 33.7C14.7 34.1 15.3 34.1 15.7 33.7L18.5 30.9L21.3 33.7C21.7 34.1 22.3 34.1 22.7 33.7C23.1 33.3 23.1 32.7 22.7 32.3L19.9 29.5L22.7 26.7C23.1 26.3 23.1 25.7 22.7 25.3ZM33 25H26C25.4 25 25 25.4 25 26V33C25 33.6 25.4 34 26 34H33C33.6 34 34 33.6 34 33V26C34 25.4 33.6 25 33 25ZM32 32H27V27H32V32Z"
                    fill="#00d1b2"></path>
                  <circle cx="24" cy="24" r="23.5" stroke="#00d1b2"></circle>
                </svg></span>
              <div class="ml-3">
                <h4 class="is-size-4 has-text-weight-bold mb-2">Lorem ipsum dolor</h4>
                <p class="subtitle has-text-grey">Pellentesque eu quam vitae mi lacinia consequat quis in metus.</p>
              </div>
            </div>
            <div class="mb-6 is-flex">
              <span>
                <svg width="48" height="48" viewbox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M25.6 22.9C25.7 23 25.8 23 26 23H33C33.6 23 34 22.6 34 22C34 21.8 34 21.7 33.9 21.6L30.4 14.6C30.1 14.1 29.5 13.9 29 14.2C28.9 14.3 28.7 14.4 28.6 14.6L25.1 21.6C24.9 22 25.1 22.6 25.6 22.9ZM29.5 17.2L31.4 21H27.6L29.5 17.2ZM18.5 14C16 14 14 16 14 18.5C14 21 16 23 18.5 23C21 23 23 21 23 18.5C23 16 21 14 18.5 14ZM18.5 21C17.1 21 16 19.9 16 18.5C16 17.1 17.1 16 18.5 16C19.9 16 21 17.1 21 18.5C21 19.9 19.9 21 18.5 21ZM22.7 25.3C22.3 24.9 21.7 24.9 21.3 25.3L18.5 28.1L15.7 25.3C15.3 24.9 14.7 24.9 14.3 25.3C13.9 25.7 13.9 26.3 14.3 26.7L17.1 29.5L14.3 32.3C13.9 32.7 13.9 33.3 14.3 33.7C14.7 34.1 15.3 34.1 15.7 33.7L18.5 30.9L21.3 33.7C21.7 34.1 22.3 34.1 22.7 33.7C23.1 33.3 23.1 32.7 22.7 32.3L19.9 29.5L22.7 26.7C23.1 26.3 23.1 25.7 22.7 25.3ZM33 25H26C25.4 25 25 25.4 25 26V33C25 33.6 25.4 34 26 34H33C33.6 34 34 33.6 34 33V26C34 25.4 33.6 25 33 25ZM32 32H27V27H32V32Z"
                    fill="#00d1b2"></path>
                  <circle cx="24" cy="24" r="23.5" stroke="#00d1b2"></circle>
                </svg></span>
              <div class="ml-3">
                <h4 class="is-size-4 has-text-weight-bold mb-2">Lorem ipsum dolor</h4>
                <p class="subtitle has-text-grey">Pellentesque eu quam vitae mi lacinia consequat quis in metus.</p>
              </div>
            </div>
            <div class="mb-6 is-flex">
              <span>
                <svg width="48" height="48" viewbox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M25.6 22.9C25.7 23 25.8 23 26 23H33C33.6 23 34 22.6 34 22C34 21.8 34 21.7 33.9 21.6L30.4 14.6C30.1 14.1 29.5 13.9 29 14.2C28.9 14.3 28.7 14.4 28.6 14.6L25.1 21.6C24.9 22 25.1 22.6 25.6 22.9ZM29.5 17.2L31.4 21H27.6L29.5 17.2ZM18.5 14C16 14 14 16 14 18.5C14 21 16 23 18.5 23C21 23 23 21 23 18.5C23 16 21 14 18.5 14ZM18.5 21C17.1 21 16 19.9 16 18.5C16 17.1 17.1 16 18.5 16C19.9 16 21 17.1 21 18.5C21 19.9 19.9 21 18.5 21ZM22.7 25.3C22.3 24.9 21.7 24.9 21.3 25.3L18.5 28.1L15.7 25.3C15.3 24.9 14.7 24.9 14.3 25.3C13.9 25.7 13.9 26.3 14.3 26.7L17.1 29.5L14.3 32.3C13.9 32.7 13.9 33.3 14.3 33.7C14.7 34.1 15.3 34.1 15.7 33.7L18.5 30.9L21.3 33.7C21.7 34.1 22.3 34.1 22.7 33.7C23.1 33.3 23.1 32.7 22.7 32.3L19.9 29.5L22.7 26.7C23.1 26.3 23.1 25.7 22.7 25.3ZM33 25H26C25.4 25 25 25.4 25 26V33C25 33.6 25.4 34 26 34H33C33.6 34 34 33.6 34 33V26C34 25.4 33.6 25 33 25ZM32 32H27V27H32V32Z"
                    fill="#00d1b2"></path>
                  <circle cx="24" cy="24" r="23.5" stroke="#00d1b2"></circle>
                </svg></span>
              <div class="ml-3">
                <h4 class="is-size-4 has-text-weight-bold mb-2">Lorem ipsum dolor</h4>
                <p class="subtitle has-text-grey">Pellentesque eu quam vitae mi lacinia consequat quis in metus.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section has-background-primary">
      <div class="container">
        <div class="is-vcentered columns is-multiline">
          <div class="column is-6 is-5-desktop mb-4">
            <span class="has-text-white">Lorem ipsum</span>
            <h2 class="has-text-white mt-2 mb-3 is-size-1 is-size-3-mobile has-text-weight-bold">Lorem ipsum dolor sit
              amet consectutar</h2>
            <p class="has-text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque massa nibh,
              pulvinar vitae aliquet nec, accumsan aliquet orci.</p>
          </div>
          <div class="column is-5 ml-auto">
            <div class="mx-auto box p-6 has-background-light has-text-centered">
              <h4 class="is-size-5 mb-2 has-text-weight-bold">Join Our Mailing List!</h4>
              <p class="has-text-grey-dark mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <form action="#">
                <input class="input mb-3" type="email" placeholder="Type your e-mail" /><button
                  class="button is-primary is-fullwidth">Action</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer class="section">
      <div class="container">
        <div class="pb-5 is-flex is-flex-wrap-wrap is-justify-content-between is-align-items-center">
          <div class="mr-auto mb-2">
            <a class="is-inline-block" href="#">
              <img class="image" src="https://bulma.io/images/bulma-logo.png" alt="" width="96px" /></a>
          </div>
          <div>
            <ul class="is-flex is-flex-wrap-wrap is-align-items-center is-justify-content-center">
              <li class="mr-4"><a class="button is-white" href="#">About</a></li>
              <li class="mr-4"><a class="button is-white" href="#">Company</a></li>
              <li class="mr-4"><a class="button is-white" href="#">Services</a></li>
              <li><a class="button is-white" href="#">Testimonials</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="pt-5" style={{ borderTop: '1px solid #dee2e6'}}></div>
      <div class="container">
        <div class="is-flex-tablet is-justify-content-between is-align-items-center">
          <p>All rights reserved © My App 20XX</p>
          <div class="py-2 is-hidden-tablet"></div>
          <div class="ml-auto">
            <a class="mr-4 is-inline-block" href="#">
              <img src="../images/app-page/socials/facebook.svg" alt="" /></a>
            <a class="mr-4 is-inline-block" href="#">
              <img src="../images/app-page/socials/twitter.svg" alt="" /></a>
            <a class="mr-4 is-inline-block" href="#">
              <img src="../images/app-page/socials/github.svg" alt="" /></a>
            <a class="mr-4 is-inline-block" href="#">
              <img src="../images/app-page/socials/instagram.svg" alt="" /></a>
            <a class="is-inline-block" href="#">
              <img src="../images/app-page/socials/linkedin.svg" alt="" /></a>
          </div>
        </div>
      </div>
    </footer>
  </div>
  )
}
