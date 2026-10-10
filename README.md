# Automotive CFD Prediction Workshop

This repository contains the source for [autocfd.org](https://autocfd.org/), the public website and resource archive for the international Automotive CFD Prediction Workshop series.

## Workshop scope

The workshop brings together researchers and practitioners from industry and academia to assess the predictive capability of CFD methods for road-vehicle aerodynamics. Its common test cases, prescribed geometries, boundary conditions, computational grids and experimental comparison data support reproducible cross-code benchmarking and practical guidance on turbulence modelling, meshing and numerical schemes.

The website currently covers AutoCFD5 in Bologna on 8–9 October 2026 and retains the technical resources, agendas, presentations and recordings from AutoCFD1–4.

## Public resources

- [Current workshop](https://autocfd.org/)
- [AutoCFD5 test cases](https://autocfd.org/test-cases/)
- [Workshop agenda](https://autocfd.org/agenda/)
- [Previous workshops](https://autocfd.org/previous-workshops/)
- [Organising committee](https://autocfd.org/organizers/)

## Local development

The website uses Jekyll and the Ruby dependencies recorded in `Gemfile.lock`. Ruby 3.2.2 matches the deployment workflow.

```bash
bundle install
bundle exec jekyll serve
```

Open <http://localhost:4000> to view the local site. A production build can be checked with:

```bash
JEKYLL_ENV=production bundle exec jekyll build
```

## Contributions and contact

Corrections to public workshop information and fixes to the website are welcome through an issue or pull request. General workshop enquiries can be sent to [admin@autocfd.org](mailto:admin@autocfd.org).

## Theme and licence

The site is based on the [al-folio](https://github.com/alshedivat/al-folio) Jekyll theme. Repository code is available under the [MIT License](LICENSE). Linked benchmark data and third-party materials may have their own terms.
