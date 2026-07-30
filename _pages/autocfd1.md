---
layout: page
permalink: /autocfd1/
title: AutoCFD1
page_title: 1st Automotive CFD Prediction Workshop — Oxford 2019
description: Archive of the 1st Automotive CFD Prediction Workshop held in Oxford in December 2019, including test cases, grids and presentations.
nav: false
nav_order: 2
---

<div class="alert alert-secondary" role="note">
  <strong>Past workshop — submissions closed.</strong> AutoCFD1 took place in December 2019. This page is retained as a permanent archive of its test cases, grids, agenda and presentations.
</div>

<nav aria-label="Workshop archive navigation">
  <strong>Workshop navigation:</strong>
  <a href="{{ '/autocfd2/' | relative_url }}">Next: AutoCFD2</a> ·
  <a href="{{ '/' | relative_url }}">Current workshop: AutoCFD5</a>
</nav>

<h2>Summary</h2>
The 1st Automotive CFD Prediction Workshop was held on 11–12 December 2019 in Oxford at St Anne's College. Three test cases were studied: the SAE Notchback geometry, DrivAer Fastback and DrivAer Estate vehicle, all of which are described below. Meshes were created for all cases in major grid formats, including OpenFOAM, STAR-CCM+, Fluent and CGNS, in addition to geometry and surface meshes. Participants who submitted results were allocated a 15-minute presentation slot; those who wished to present relevant material, such as the wind-tunnel campaign of the DrivAer model, without computing the test cases were also able to speak.
The three test cases were available for participants to compute and submit to the workshop organisers for cross-plotting and summary. Each participant who computed the cases was offered a 15-minute presentation slot to discuss their results.

Participants were encouraged to run the coarse, medium and fine meshes to demonstrate mesh convergence where possible.

<h2>Documents</h2>

| [Test case 1 - SAE Notchback description](https://autocfd1.s3.eu-west-1.amazonaws.com/Presentations/Case1-descriptionv0p6.pdf) |
| [Test Case 2a - DrivAer Fastback description](https://autocfd1.s3.eu-west-1.amazonaws.com/Presentations/Case2-descriptionv1p9.pdf) |
| [Test Case 2b - DrivAer Estate description](https://autocfd1.s3.eu-west-1.amazonaws.com/Presentations/Case2-descriptionv1p9.pdf) |

Experimental data for Case 1 was made [available](https://autocfd1.s3.eu-west-1.amazonaws.com/case1/Exp_Data/all-expdata-compressed.tgz) which has the data itself and some instructions. Please refer to the main [test-case description](https://autocfd1.s3.eu-west-1.amazonaws.com/Presentations/Case1-descriptionv0p6.pdf) for complete information.

<h2>Grids</h2>
<h3>Case 1</h3>

| Surface grids | [STL](https://autocfd1.s3.eu-west-1.amazonaws.com/case1/Geometry/SAENotchback.stl) | [STEP](https://autocfd1.s3.eu-west-1.amazonaws.com/case1/Geometry/SAENotchback.step) | [PRT](https://autocfd1.s3.eu-west-1.amazonaws.com/case1/Geometry/SAENotchback.prt) | [IGS](https://autocfd1.s3.eu-west-1.amazonaws.com/case1/Geometry/SAENotchback.igs)
| DES-type committee grids | [CGNS](https://autocfd1.s3.eu-west-1.amazonaws.com/case1/Committee_Grids/DES_Grid/SAE20DESgridCGNSADF.cgns.gz)|[OpenFOAM](https://autocfd1.s3.eu-west-1.amazonaws.com/case1/Committee_Grids/DES_Grid/SAE20DESgridOF.tar.gz)|[Fluent](https://autocfd1.s3.eu-west-1.amazonaws.com/case1/Committee_Grids/DES_Grid/SAE20DESgridFluentA.msh.gz)|[STAR-CCM+](https://autocfd1.s3.eu-west-1.amazonaws.com/case1/Committee_Grids/DES_Grid/SAE20DESgrid.ccm.gz)|
| RANS-type committee grids | [CGNS](https://autocfd1.s3.eu-west-1.amazonaws.com/case1/Committee_Grids/RANS_Grid/SAE20loReGridCGNS.cgns.gz)|[OpenFOAM](https://autocfd1.s3.eu-west-1.amazonaws.com/case1/Committee_Grids/RANS_Grid/SAE20loReGridOF.tar.gz) | [Fluent](https://autocfd1.s3.eu-west-1.amazonaws.com/case1/Committee_Grids/RANS_Grid/SAE20loReGridFluentA.msh.gz)|[STAR-CCM+](https://autocfd1.s3.eu-west-1.amazonaws.com/case1/Committee_Grids/RANS_Grid/SAE20loReGrid.ccm.gz) |
| BETA-CAE Participant ANSA grid (Coarse) | [OpenFOAM](https://autocfd1.s3.eu-west-1.amazonaws.com/case1/Participant_Grids/BETA-CAE/SAE20_Coarse_HexaPoly_OF.tar.gz) | [Fluent](https://autocfd1.s3.eu-west-1.amazonaws.com/case1/Participant_Grids/BETA-CAE/SAE20_Coarse_HexaPoly.msh.gz)|[STAR-CCM+](https://autocfd1.s3.eu-west-1.amazonaws.com/case1/Participant_Grids/BETA-CAE/SAE20_Coarse_HexaPoly.ccm.gz)|
| BETA-CAE Participant ANSA grid (Medium) |[CGNS](https://autocfd1.s3.eu-west-1.amazonaws.com/case1/Participant_Grids/BETA-CAE/SAE20_Medium_HexaPoly.cgns.gz) | [OpenFOAM](https://autocfd1.s3.eu-west-1.amazonaws.com/case1/Participant_Grids/BETA-CAE/SAE20_Medium_HexaPoly_OF.tar.gz)|[Fluent](https://autocfd1.s3.eu-west-1.amazonaws.com/case1/Participant_Grids/BETA-CAE/SAE20_Medium_HexaPoly.msh.gz)|[STAR-CCM+](https://autocfd1.s3.eu-west-1.amazonaws.com/case1/Participant_Grids/BETA-CAE/SAE20_Medium_HexaPoly.ccm.gz)|
| BETA-CAE Participant ANSA grid (Fine) |[CGNS](https://autocfd1.s3.eu-west-1.amazonaws.com/case1/Participant_Grids/BETA-CAE/SAE20_Fine_HexaPoly.cgns.gz) | [OpenFOAM](https://autocfd1.s3.eu-west-1.amazonaws.com/case1/Participant_Grids/BETA-CAE/SAE20_Fine_HexaPoly_OF.tar.gz)|[Fluent](https://autocfd1.s3.eu-west-1.amazonaws.com/case1/Participant_Grids/BETA-CAE/SAE20_Fine_HexaPoly.msh.gz)|[STAR-CCM+](https://autocfd1.s3.eu-west-1.amazonaws.com/case1/Participant_Grids/BETA-CAE/SAE20_Fine_HexaPoly.ccm.gz)|

<h3>Case 2a</h3>

| Surface grids | [STL](https://autocfd1.s3.eu-west-1.amazonaws.com/case2a/Geometry/DrivAer_FastBack.stl) | [STEP](https://autocfd1.s3.eu-west-1.amazonaws.com/case2a/Geometry/DrivAer_fastback.step) |
| Coarse volume grid |[CGNS](https://autocfd1.s3.eu-west-1.amazonaws.com/case2a/Committee_Grids/coarse/DrivAer_fastback_Coarse_HexaPoly.ansa.gz.cgns.gz) | [OpenFOAM](https://autocfd1.s3.eu-west-1.amazonaws.com/case2a/Committee_Grids/coarse/DrivAer_fastback_Coarse_HexaPoly.ansa.gz_OPENFOAM.tar.gz) | [Fluent](https://autocfd1.s3.eu-west-1.amazonaws.com/case2a/Committee_Grids/coarse/DrivAer_fastback_Coarse_HexaPoly.ansa.gz.msh.gz)|[STAR-CCM+](https://autocfd1.s3.eu-west-1.amazonaws.com/case2a/Committee_Grids/coarse/DrivAer_fastback_Coarse_HexaPoly.ansa.gz.ccm.gz)|
| Medium volume grid |[CGNS](https://autocfd1.s3.eu-west-1.amazonaws.com/case2a/Committee_Grids/medium/DrivAer_fastback_Medium_HexaPoly.ansa.gz.cgns.gz) | [OpenFOAM](https://autocfd1.s3.eu-west-1.amazonaws.com/case2a/Committee_Grids/medium/DrivAer_fastback_Medium_HexaPoly.ansa.gz_OPENFOAM.tar.gz)|[Fluent](https://autocfd1.s3.eu-west-1.amazonaws.com/case2a/Committee_Grids/medium/DrivAer_fastback_Medium_HexaPoly.ansa.gz.msh.gz)|[STAR-CCM+](https://autocfd1.s3.eu-west-1.amazonaws.com/case2a/Committee_Grids/medium/DrivAer_fastback_Medium_HexaPoly.ansa.gz.ccm.gz)|
| Fine volume grid |[CGNS](https://autocfd1.s3.eu-west-1.amazonaws.com/case2a/Committee_Grids/fine/DrivAer_fastback_Fine_Volume_HexaPoly.ansa.gz.cgns.gz) | [OpenFOAM](https://autocfd1.s3.eu-west-1.amazonaws.com/case2a/Committee_Grids/fine/DrivAer_fastback_Fine_Volume_HexaPoly.ansa.gz_OPENFOAM.tar.gz)|[Fluent](https://autocfd1.s3.eu-west-1.amazonaws.com/case2a/Committee_Grids/fine/DrivAer_fastback_Fine_Volume_HexaPoly.ansa.gz.msh.gz)|[STAR-CCM+](https://autocfd1.s3.eu-west-1.amazonaws.com/case2a/Committee_Grids/fine/DrivAer_fastback_Fine_Volume_HexaPoly.ansa.gz.ccm.gz)|

<h3>Case 2b</h3>

| Surface grids | [STL](https://autocfd1.s3.eu-west-1.amazonaws.com/case2b/Geometry/DrivAer_Estate.stl) | [STEP](https://autocfd1.s3.eu-west-1.amazonaws.com/case2b/Geometry/DrivAer_estate.step) |
| Coarse volume grid | [CGNS](https://autocfd1.s3.eu-west-1.amazonaws.com/case2b/Committee_Grids/coarse/DrivAer_estate_Coarse_HexaPoly.ansa.gz.cgns.gz) | [OpenFOAM](https://autocfd1.s3.eu-west-1.amazonaws.com/case2b/Committee_Grids/coarse/DrivAer_estate_Coarse_HexaPoly.ansa.gz_OPENFOAM.tar.gz) | [Fluent](https://autocfd1.s3.eu-west-1.amazonaws.com/case2b/Committee_Grids/coarse/DrivAer_estate_Coarse_HexaPoly.ansa.gz.msh.tgz)|[STAR-CCM+](https://autocfd1.s3.eu-west-1.amazonaws.com/case2b/Committee_Grids/coarse/DrivAer_estate_Coarse_HexaPoly.ansa.gz.ccm.gz)|
| Medium volume grid |[CGNS](https://autocfd1.s3.eu-west-1.amazonaws.com/case2b/Committee_Grids/medium/DrivAer_estate_Medium_Hexapoly.ansa.gz.cgns.gz) | [OpenFOAM](https://autocfd1.s3.eu-west-1.amazonaws.com/case2b/Committee_Grids/medium/DrivAer_estate_Medium_Hexapoly.ansa.gz_OPENFOAM.tar.gz)|[Fluent](https://autocfd1.s3.eu-west-1.amazonaws.com/case2b/Committee_Grids/medium/DrivAer_estate_Medium_Hexapoly.ansa.gz.msh.gz)|[STAR-CCM+](https://autocfd1.s3.eu-west-1.amazonaws.com/case2b/Committee_Grids/medium/DrivAer_estate_Medium_Hexapoly.ansa.gz.ccm.gz)|
| Fine volume grid |[CGNS](https://autocfd1.s3.eu-west-1.amazonaws.com/case2b/Committee_Grids/fine/DrivAer_estate_Fine_HexaPoly.ansa.gz.cgns.gz) | [OpenFOAM](https://autocfd1.s3.eu-west-1.amazonaws.com/case2b/Committee_Grids/fine/DrivAer_estate_Fine_HexaPoly.ansa.gz_OPENFOAM.tar.gz)|[Fluent](https://autocfd1.s3.eu-west-1.amazonaws.com/case2b/Committee_Grids/fine/DrivAer_estate_Fine_HexaPoly.ansa.gz.msh.gz)|[STAR-CCM+](https://autocfd1.s3.eu-west-1.amazonaws.com/case2b/Committee_Grids/fine/DrivAer_estate_Fine_HexaPoly.ansa.gz.ccm.gz)|

<h2>Agenda</h2>

Download the [final AutoCFD1 workshop agenda](https://autocfd1.s3.eu-west-1.amazonaws.com/Presentations/agendav4.pdf).

<h2>Presentations</h2>

| Presentation resources                                                                                                                                                                 |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Case 1](https://autocfd1.s3.eu-west-1.amazonaws.com/Presentations/Case1-Summary.pdf) - Test-Case Description, Meshing and Cross-Plotting Results - Loughborough University Organisers |
| [Case 2](https://autocfd1.s3.eu-west-1.amazonaws.com/Presentations/BETA-CAE-Case2aMeshing.pdf) - Mesh Generation - BETA-CAE Systems/Organisers                                         |
| [Case 2](https://autocfd1.s3.eu-west-1.amazonaws.com/Presentations/Case2-summary-v2.pdf) - Cross-plotting- University of Oxford/BETA-CAE/Organisers                                    |
| [001](https://autocfd1.s3.eu-west-1.amazonaws.com/Presentations/001-Oxford-Presentation.pdf) - Oxford/BETA-CAE/AWS                                                                     |
| [007](https://autocfd1.s3.eu-west-1.amazonaws.com/Presentations/007-ANSYS-Presentation.pdf) - ANSYS                                                                                    |
| [011](https://autocfd1.s3.eu-west-1.amazonaws.com/Presentations/011-BSC-Presentation.pdf) - Barcelona Supercomputing Centre                                                            |
| [012](https://autocfd1.s3.eu-west-1.amazonaws.com/Presentations/012-Metacomp-Presentation.pdf) - Metacomp                                                                              |
| [013](https://autocfd1.s3.eu-west-1.amazonaws.com/Presentations/013-Imperial-Presentation.pdf) - Imperial College London                                                               |
| [015](https://autocfd1.s3.eu-west-1.amazonaws.com/Presentations/015-Linkoping-Presentation.pdf) - Linköping University                                                                 |
| [020](https://autocfd1.s3.eu-west-1.amazonaws.com/Presentations/020-Siemens-Presentation.pdf) - Siemens                                                                                |
| [022](https://autocfd1.s3.eu-west-1.amazonaws.com/Presentations/022-ohio-presentation.pdf) - The Ohio State University                                                                 |
| [025](https://autocfd1.s3.eu-west-1.amazonaws.com/Presentations/025-PSA-Presentation.pdf) - PSA                                                                                        |
| [026](https://autocfd1.s3.eu-west-1.amazonaws.com/Presentations/026-upstreamCFD-presentation.pdf) - upstreamCFD                                                                        |
| [029](https://autocfd1.s3.eu-west-1.amazonaws.com/Presentations/029-Sydney-Presentation.pdf) - University of Sydney                                                                    |

<h2>Organisers</h2>

- Neil Ashton (University of Oxford)
- Gary Page (Loughborough University)
- Vangelis Skaperdas (BETA-CAE Systems)
- Owen Sinclair (University of Oxford)
- William Van Noordt (University of Oxford)
- Agata Dybisz (University of Oxford)
- Martin Passmore (Loughborough University)

<h2>Thank you</h2>

The organisers are grateful to Amazon Web Services for sponsoring this workshop. The organisers would also like to thank the UK Fluids Network and the Ground Vehicle Aerodynamics Special Interest Group (a EPSRC project funded under grant agreement EP/N032861/1) for early discussions on this workshop. In addition members of the UK Automotive Aerodynamics Forum have also given very useful input on the workshop.
