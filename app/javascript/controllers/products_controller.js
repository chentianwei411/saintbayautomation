// Visit The Stimulus Handbook for more details
// https://stimulusjs.org/handbook/introduction
//
// This example controller works with specially annotated HTML like:
//
// <div data-controller="hello">
//   <h1 data-target="hello.output"></h1>
// </div>

import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "page" ]

  connect() {

  }

  display_page(event) {
    let index = event.target.getAttribute("data-index")

    if (this.pageTargets[index].style.display == "none") {
      this.pageTargets[index].style.display = "block"
    } else {
      this.pageTargets[index].style.display = "none"
    }
  }
}
