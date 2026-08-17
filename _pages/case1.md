---
layout: page
permalink: /case1/
title: Test Case 1
page_title: "Test Case 1: Windsor Squareback"
page_description: AutoCFD5 Windsor Squareback benchmark documentation, submission template and computational grids.
description: Download the AutoCFD5 Case 1 Windsor Squareback description, result template, surface geometry and CFD grids.
nav: false
nav_order: 2
content_class: case-study
---

<nav class="case-switcher" aria-label="Test case navigation">
  <span class="case-switcher__label">Test cases</span>
  <span class="case-switcher__current" aria-current="page">Case 1</span>
  <a href="{{ '/case2/' | relative_url }}">Case 2</a>
</nav>

<nav class="case-jump" aria-label="On this page">
  <span class="case-jump__label">On this page</span>
  <a href="#overview">Overview</a>
  <a href="#documents">Documents</a>
  <a href="#submit-results">Submit results</a>
  <a href="#surface-geometry">Surface geometry</a>
  <a href="#volume-grids">Volume grids</a>
</nav>

<section class="case-overview case-overview--with-media" id="overview">
  <div class="case-overview__media">
    <img class="case-overview__image" alt="Windsor Squareback benchmark geometry used for AutoCFD5 Test Case 1" src="{{ site.baseurl }}/assets/img/windsor.png" width="567" height="241" loading="lazy" decoding="async">
  </div>
  <div class="case-overview__content">
    <h2>Overview</h2>
    <p>Case 1 uses the Windsor Squareback body at 2.5° yaw and continues the test case studied in <a href="{{ '/autocfd4/' | relative_url }}">AutoCFD4</a>. The Reynolds number is 3 million based on vehicle length, and the body is placed in a wind-tunnel-like domain. Available comparison data include forces, moments, surface pressures and non-intrusive PIV measurements in the wake.</p>
    <p>The 37-million-cell baseline grid is similar to the eddy-resolving grid from the second workshop. Alternate grids halve and double the core cell size, producing 7-million-cell and 197-million-cell grids. The grids follow the second-workshop trimmer-mesh and prism-layer approach in Simcenter STAR-CCM+.</p>
  </div>
</section>

## Documents

<div class="case-table-wrap case-table-wrap--compact" role="region" aria-label="Case 1 documents" tabindex="0" markdown="1">

| Resource                                               | Revision                                        | Download                                                                                                                     |
| :----------------------------------------------------- | :---------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------- |
| Test-case description and submission guidelines        | Version 0.7, 17 July 2026                       | [Download PDF](https://autocfd5.s3.eu-west-1.amazonaws.com/test-cases/case1/Case1AutoCFD5Description.pdf)                    |
| Example result-submission form                         | Version 5, May 2024                             | [Download XLSM](https://autocfd5.s3.eu-west-1.amazonaws.com/test-cases/case1/AutoCFD5_Windsor_Case1_Result_Template_v5.xlsm) |
| Meancalc usage guide and settings for data submissions | Version 1, 23 Oct 2023 (unchanged for AutoCFD5) | [Download PDF](https://autocfd5.s3.eu-west-1.amazonaws.com/AutoCFD_Meancalc_BPGs_UCFD_20231023.pdf)                          |

</div>

## Submit results

> [Sign in to the AutoCFD5 results dashboard](https://autocfd5.cfdsolutions.net/File_Upload) to upload completed submissions. The upload page includes submission instructions and a Dropbox link for auxiliary files.
> {: .case-submit}

## Grids

### Surface geometry

<div class="case-table-wrap case-table-wrap--compact" role="region" aria-label="Case 1 surface geometry downloads" tabindex="0" markdown="1">

| Resource                     | STL                                                                                               | JT                                                                                              |
| :--------------------------- | :------------------------------------------------------------------------------------------------ | :---------------------------------------------------------------------------------------------- |
| Surface grids (windsor body) | [STL](https://autocfdv3.s3.eu-west-1.amazonaws.com/test-cases/case1/meshes/Windsor_Square_nW.stl) | [JT](https://autocfdv3.s3.eu-west-1.amazonaws.com/test-cases/case1/meshes/Windsor_Square_nW.jt) |
| Surface grids (pins-only)    | [STL](https://autocfdv3.s3.eu-west-1.amazonaws.com/test-cases/case1/meshes/Windsor_Pins.stl)      | [JT](https://autocfdv3.s3.eu-west-1.amazonaws.com/test-cases/case1/meshes/Windsor_Pins.jt)      |

</div>

### Volume grids

<div class="case-table-wrap" role="region" aria-label="Case 1 volume grid downloads" tabindex="0" markdown="1">

| Grid                    | Approx. cells | CGNS                                                                                   | OpenFOAM                                                                                              | Fluent                                                                                  | STAR-CCM+                                                                                  |
| :---------------------- | :------------ | :------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------- |
| Coarse Grids            | 7 million     | [CGNS](https://autocfdv3.s3.eu-west-1.amazonaws.com/test-cases/case1/meshes/c1g1.cgns) | [OpenFOAM](https://autocfdv3.s3.eu-west-1.amazonaws.com/test-cases/case1/meshes/c1g1.OpenFOAM.tar.gz) | [Fluent](https://autocfdv3.s3.eu-west-1.amazonaws.com/test-cases/case1/meshes/c1g1.msh) | [STAR-CCM+](https://autocfdv3.s3.eu-west-1.amazonaws.com/test-cases/case1/meshes/c1g1.ccm) |
| Medium Grids (baseline) | 37 million    | [CGNS](https://autocfdv3.s3.eu-west-1.amazonaws.com/test-cases/case1/meshes/c1g2.cgns) | [OpenFOAM](https://autocfdv3.s3.eu-west-1.amazonaws.com/test-cases/case1/meshes/c1g2.OpenFOAM.tar.gz) | [Fluent](https://autocfdv3.s3.eu-west-1.amazonaws.com/test-cases/case1/meshes/c1g2.msh) | [STAR-CCM+](https://autocfdv3.s3.eu-west-1.amazonaws.com/test-cases/case1/meshes/c1g2.ccm) |
| Fine Grids              | 197 million   | [CGNS](https://autocfdv3.s3.eu-west-1.amazonaws.com/test-cases/case1/meshes/c1g3.cgns) | [OpenFOAM](https://autocfdv3.s3.eu-west-1.amazonaws.com/test-cases/case1/meshes/c1g3.OpenFOAM.tar.gz) | [Fluent](https://autocfdv3.s3.eu-west-1.amazonaws.com/test-cases/case1/meshes/c1g3.msh) | [STAR-CCM+](https://autocfdv3.s3.eu-west-1.amazonaws.com/test-cases/case1/meshes/c1g3.ccm) |

</div>

<nav class="case-footer-nav case-footer-nav--next" aria-label="More test cases">
  <a href="{{ '/case2/' | relative_url }}">Next: Case 2 →</a>
</nav>
