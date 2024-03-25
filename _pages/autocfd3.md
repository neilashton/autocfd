---
layout: page
permalink: /autocfd3/
title: AutoCFD3
description: 
nav: false
nav_order: 2
---

<h3>Summary</h3>
The 3rd Automotive CFD Prediction Workshop was held on the 22th-23rd September 2022 in a hybrid format - virtually and in Barcelona, Spain. Two test-cases were studied; Windsor body and the DrivAer Notchback (detailed underbody with no rolling road or rotating wheels) as well as an additional geometry containing a front deflector to assess the ability to predict geometry deltas as well as the absolute numbers and flow fields correctly. Meshes were created for all cases in major grid formats i.e OpenFOAM, STAR-CCM+, Fluent, CGNS in addition to geometry and surface meshes. Participants who submitted results were allocated a 15 minute presentation slot. 

<h3>Test-cases</h3>
<h5>Case 1</h5>
Case 1 is the Windsor Squareback body at 2.5 degrees yaw. In comparison to the second workshop, the test case has been simplified to be just the original no wheels model and to only require meshes with a high y+ and a wall function type boundary condition. The problem is at a Reynolds number of 3 million based on vehicle length and is within a wind-tunnel like domain. As well as force, moment and surface pressure data, there is also available non intrusive PIV measurements in the wake. The baseline grid is similar to the ‘eddy resolving’ grid from the second workshop and contains 37 million cells. The alternate grids halve and double the core cell size to give 7 million and 197 million cell grids. The grid type follows the second workshop using the ‘trimmer mesh’ and prism layer approach from Simcenter STAR-CCM+. The test description can be found [here](https://autocfdv3.s3.eu-west-1.amazonaws.com/test-cases/case1/Case1AutoCFD3Definition.pdf). The submission guidelines can be found [here](https://autocfdv3.s3.eu-west-1.amazonaws.com/test-cases/case1/Case1AutoCFD3Submission.pdf). Example data submission folder can be found [here](https://autocfdv3.s3.eu-west-1.amazonaws.com/test-cases/case1/Case1DataSubmission.zip) too. Grids are available in a variety of formats below.

<h5> Case 2</h5>
Case 2 is the notchback version of the DrivAer. Beside the base variant of the DrivAer (Case 2a) which has been analyzed in the 2nd Automotive CFD Prediction Workshop a variant of the DrivAer (Case 2b), which features a front wheel air deflector, has been proposed for the 3rd workshop. A detailed description of both DrivAer test cases is available [here](https://autocfdv3.s3.eu-west-1.amazonaws.com/AutoCFD3_Case2_Intro_220608.pdf) and, for the base variant, from the SAE Technical Paper 2021-01-0958 by Hupertz et al.. For both DrivAer variants the workshop will focus on a closed cooling configuration with static wheels and static floor.  A comprehensive set of experimental data from the Pininfarina Wind Tunnel (Courtesy of Ford) including aerodynamic forces, surface pressure, velocity profiles and 2D flowfield measurements will be available for both DrivAer variants for the correlation of CFD analyses presented at the workshop. Please see below for the meshes which were created using ANSA by BETA-CAE Systems. The mesh of the base variant (Case 2a) is identical to the “Case 2 – Wall-Function Grid” used in the 2nd workshop. The Case 2b mesh is identical to the Case 2a mesh except for the front wheel air deflector region. The post-processing excel spreadsheet to enter your results can be found [here](https://autocfdv3.s3.eu-west-1.amazonaws.com/AutoCFD3_DrivAer_Result_Template_v6.xlsm). Also the grid files for flowfield mapping in ANSA and Nastran format can be found [here](https://autocfd2.s3-eu-west-1.amazonaws.com/test-cases/case2/AutoCFD2.zip) here.

<h3>Documents</h3>

| [Test-case description](https://autocfdv3.s3.eu-west-1.amazonaws.com/test-cases/case1/Case1AutoCFD3Definition.pdf) |
| [Example submission folder](https://autocfdv3.s3.eu-west-1.amazonaws.com/test-cases/case1/Case1DataSubmission.zip) |
| [Submission guidelines](https://autocfdv3.s3.eu-west-1.amazonaws.com/test-cases/case1/Case1AutoCFD3Submission.pdf) |

<h3>Grids</h3>
<h5>Case 1</h5>
 | Surface grids (windsor body) | [STL](https://autocfdv3.s3.eu-west-1.amazonaws.com/test-cases/case1/meshes/Windsor_Square_nW.stl) | [JT](https://autocfdv3.s3.eu-west-1.amazonaws.com/test-cases/case1/meshes/Windsor_Square_nW.jt) |
 | Surface grids (pins-only) | [STL](https://autocfdv3.s3.eu-west-1.amazonaws.com/test-cases/case1/meshes/Windsor_Pins.stl) | [JT](https://autocfdv3.s3.eu-west-1.amazonaws.com/test-cases/case1/meshes/Windsor_Pins.jt)
| Coarse Grids | [CGNS](https://autocfdv3.s3.eu-west-1.amazonaws.com/test-cases/case1/meshes/c1g1.cgns)|[OpenFOAM](https://autocfdv3.s3.eu-west-1.amazonaws.com/test-cases/case1/meshes/c1g1.OpenFOAM.tar.gz)|[Fluent](https://autocfdv3.s3.eu-west-1.amazonaws.com/test-cases/case1/meshes/c1g1.msh)|[STAR-CCM+](https://autocfdv3.s3.eu-west-1.amazonaws.com/test-cases/case1/meshes/c1g1.ccm>)|
| Medium Grids (baseline) | [CGNS](https://autocfdv3.s3.eu-west-1.amazonaws.com/test-cases/case1/meshes/c1g2.cgns)|[OpenFOAM](https://autocfdv3.s3.eu-west-1.amazonaws.com/test-cases/case1/meshes/c1g2.OpenFOAM.tar.gz)|[Fluent](https://autocfdv3.s3.eu-west-1.amazonaws.com/test-cases/case1/meshes/c1g2.msh)|[STAR-CCM+](https://autocfdv3.s3.eu-west-1.amazonaws.com/test-cases/case1/meshes/c1g2.ccm>)|
| Fine Grids | [CGNS](https://autocfdv3.s3.eu-west-1.amazonaws.com/test-cases/case1/meshes/c1g3.cgns)|[OpenFOAM](https://autocfdv3.s3.eu-west-1.amazonaws.com/test-cases/case1/meshes/c1g3.OpenFOAM.tar.gz)|[Fluent](https://autocfdv3.s3.eu-west-1.amazonaws.com/test-cases/case1/meshes/c1g3.msh)|[STAR-CCM+](https://autocfdv3.s3.eu-west-1.amazonaws.com/test-cases/case1/meshes/c1g3.ccm>)|

<h5>Case 2</h5>

<h3>Agenda</h3>

Final Agenda for the workshop is [here](https://autocfdv3.s3.eu-west-1.amazonaws.com/autocfd3-210922%2Bagenda-v10.pdf)

<h3> Organizers</h3>

* Oriol Lehmkuhl (Barcelona Supercomputing Center) - **Local Organiser**
* Herbert Owen (Barcelona Supercomputing Center) - **Local Organiser**
* Gary Page (Loughborough University)
* Burkhard Hupertz (Ford)
* Astrid Walle (Neural Concept)
* Neil Ashton (Amazon Web Services / University of Oxford)
* Charles Mockett (Upstream CFD)
* Lian Duan (Ohio State University)
* Timo Kuthada (FKFS)
* Simone Sebben (Chalmers University)
* Charles Ribes (Stellantis)
* Iraj Mortazavi (CNAM)
* Vangelis Skaperdas (BETA-CAE Systems)
* Martin Passmore (Loughborough University)
