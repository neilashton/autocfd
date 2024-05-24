---
layout: page
permalink: /case1/
title: Test Case 1 - Windsor body
description: 
nav: false
nav_order: 2
---

<img class="photo" alt="Windsor Body" src="{{ site.baseurl }}/assets/img/windsor.png">

Case 1 is the Windsor Squareback body at 2.5 degrees yaw and is the same test-case studied in the [3rd automotive CFD workshop](https://autocfd.org/autocfd3). The problem is at a Reynolds number of 3 million based on vehicle length and is within a wind-tunnel like domain. As well as force, moment and surface pressure data, there is also available non intrusive PIV measurements in the wake. The baseline grid is similar to the ‘eddy resolving’ grid from the second workshop and contains 37 million cells. The alternate grids halve and double the core cell size to give 7 million and 197 million cell grids. The grid type follows the second workshop using the ‘trimmer mesh’ and prism layer approach from Simcenter STAR-CCM+. 

<h3>Documents</h3>

| [Test-case description (April 2024)](https://autocfd4.s3.eu-west-1.amazonaws.com/test-cases/case1/Gary+Page+-+Case1AutoCFD4Description.pdf) |
| [Example submission form (v5 - May 2024)](https://autocfd4.s3.eu-west-1.amazonaws.com/test-cases/case1/Gary+Page+-+AutoCFD4_Windsor_Case1_Result_Template_v5.xlsm) |
| [Submission guidelines (April 2024)](https://autocfd4.s3.eu-west-1.amazonaws.com/test-cases/case1/Gary+Page+-+Case1AutoCFD4Submission.pdf) |

<h3> Results Dashboard </h3>
Given the test-cases have remained the same from [AutoCFD3](https://autocfd.org/autocfd3), you can look at the interactive results [dashboard](https://auto-cfd-workshop-3.cfdsolutions.net) to assess the work done during AutoCFD3.

<h3>Grids</h3>

 | Surface grids (windsor body) | [STL](https://autocfdv3.s3.eu-west-1.amazonaws.com/test-cases/case1/meshes/Windsor_Square_nW.stl) | [JT](https://autocfdv3.s3.eu-west-1.amazonaws.com/test-cases/case1/meshes/Windsor_Square_nW.jt) |
 | Surface grids (pins-only) | [STL](https://autocfdv3.s3.eu-west-1.amazonaws.com/test-cases/case1/meshes/Windsor_Pins.stl) | [JT](https://autocfdv3.s3.eu-west-1.amazonaws.com/test-cases/case1/meshes/Windsor_Pins.jt)
| Coarse Grids | [CGNS](https://autocfdv3.s3.eu-west-1.amazonaws.com/test-cases/case1/meshes/c1g1.cgns)|[OpenFOAM](https://autocfdv3.s3.eu-west-1.amazonaws.com/test-cases/case1/meshes/c1g1.OpenFOAM.tar.gz)|[Fluent](https://autocfdv3.s3.eu-west-1.amazonaws.com/test-cases/case1/meshes/c1g1.msh)|[STAR-CCM+](https://autocfdv3.s3.eu-west-1.amazonaws.com/test-cases/case1/meshes/c1g1.ccm)|
| Medium Grids (baseline) | [CGNS](https://autocfdv3.s3.eu-west-1.amazonaws.com/test-cases/case1/meshes/c1g2.cgns)|[OpenFOAM](https://autocfdv3.s3.eu-west-1.amazonaws.com/test-cases/case1/meshes/c1g2.OpenFOAM.tar.gz)|[Fluent](https://autocfdv3.s3.eu-west-1.amazonaws.com/test-cases/case1/meshes/c1g2.msh)|[STAR-CCM+](https://autocfdv3.s3.eu-west-1.amazonaws.com/test-cases/case1/meshes/c1g2.ccm)|
| Fine Grids | [CGNS](https://autocfdv3.s3.eu-west-1.amazonaws.com/test-cases/case1/meshes/c1g3.cgns)|[OpenFOAM](https://autocfdv3.s3.eu-west-1.amazonaws.com/test-cases/case1/meshes/c1g3.OpenFOAM.tar.gz)|[Fluent](https://autocfdv3.s3.eu-west-1.amazonaws.com/test-cases/case1/meshes/c1g3.msh)|[STAR-CCM+](https://autocfdv3.s3.eu-west-1.amazonaws.com/test-cases/case1/meshes/c1g3.ccm)|
   
