import React, { Component } from 'react'
import "./Footer.css";

const dataLinks = [
  {
    id: 1,
    name: "Features",
    elements: [
      {
        id: 1,
        name: "Cool stuff",
        link: "#"
      },
      {
        id: 2,
        name: "Random feature",
        link: "#"
      },
      {
        id: 3,
        name: "Team feature",
        link: "#"
      },
      {
        id: 4,
        name: "Stuff for developers",
        link: "#"
      },
      {
        id: 5,
        name: "Another one",
        link: "#"
      },
      {
        id: 6,
        name: "Last time",
        link: "#"
      },
    ]
  },
  {
    id: 2,
    name: "Resources",
    elements: [
      {
        id: 1,
        name: "Resource",
        link: "#"
      },
      {
        id: 2,
        name: "Resource name",
        link: "#"
      },
      {
        id: 3,
        name: "Another resource",
        link: "#"
      },
      {
        id: 4,
        name: "Final resource",
        link: "#"
      }
    ]
  },
  {
    id: 3,
    name: "About",
    elements: [
      {
        id: 1,
        name: "Team",
        link: "#"
      },
      {
        id: 2,
        name: "Locations",
        link: "#"
      },
      {
        id: 3,
        name: "Privacy",
        link: "#"
      },
      {
        id: 4,
        name: "Terms",
        link: "#"
      }
    ]
  }
]

export default class Footer extends Component {
  render() {
    return (
      <footer class="pt-4 my-md-5 pt-md-5 border-top w-75 m-auto">
        <div class="row">
          <div class="col-12 col-md">
            <img class="mb-2" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="24" height="24"></img>
            <small class="d-block mb-3 text-muted">&copy; 2017-2018</small>
          </div>
          {
            dataLinks.map((value, index) => {
              return <div class="col-6 col-md">
                <h5>{value.name}</h5>
                <ul class="list-unstyled text-small">
                  {
                    value.elements.map((v, i) => {
                      return <li><a class="text-muted" href={v.link}>{v.name}</a></li>
                    })
                  }
                </ul>
              </div>
            })
          }
        </div>
      </footer>
    )
  }
}
