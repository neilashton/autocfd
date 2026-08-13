---
layout: page
permalink: /case2/
title: Test Case 2
page_title: "Test Case 2: DrivAer Notchback"
page_description: AutoCFD5 DrivAer Notchback benchmark documents, geometry, meshes and result-submission resources.
description: Download the AutoCFD5 Case 2 DrivAer Notchback descriptions, result template, geometry and coarse-to-fine CFD meshes.
nav: false
nav_order: 2
content_class: case-study
---

<nav class="case-switcher" aria-label="Test case navigation">
  <span class="case-switcher__label">Test cases</span>
  <a href="{{ '/case1/' | relative_url }}">Case 1</a>
  <span class="case-switcher__current" aria-current="page">Case 2</span>
</nav>

<nav class="case-jump" aria-label="On this page">
  <span class="case-jump__label">On this page</span>
  <a href="#overview">Overview</a>
  <a href="#documents">Documents</a>
  <a href="#submit-results">Submit results</a>
  <a href="#geometry-and-surface-meshes">Geometry</a>
  <a href="#case-2a-volume-meshes">Case 2a meshes</a>
  <a href="#case-2b-volume-meshes">Case 2b meshes</a>
</nav>

<section class="case-overview" id="overview">
  <h2>Overview</h2>
  <p>Case 2 uses the notchback version of the DrivAer from the 4th Automotive CFD Prediction Workshop. It includes the base DrivAer (Case 2a) and a front-wheel-air-deflector variant (Case 2b). Detailed descriptions are available in the documents below and, for the base variant, in SAE Technical Paper 2021-01-0958 by Hupertz et al.</p>
  <p>Both variants use a closed-cooling configuration with static wheels and a static floor. Experimental data from the Pininfarina Wind Tunnel, courtesy of Ford, include aerodynamic forces, surface pressures, velocity profiles and two-dimensional flow-field measurements for correlation with workshop CFD analyses. Cadence Design Systems created the meshes using ANSA.</p>
</section>

## Documents

<div class="case-table-wrap case-table-wrap--compact" role="region" aria-label="Case 2 documents" tabindex="0" markdown="1">

| Resource                                       | Revision          | Download                                                                                                               |
| :--------------------------------------------- | :---------------- | :--------------------------------------------------------------------------------------------------------------------- |
| Test-case description                          | 23 February 2026  | [Download PDF](https://autocfd5.s3.eu-west-1.amazonaws.com/test-cases/case2/AutoCFD5_Case2_Intro_260223.pdf)           |
| Result-submission template                     | Version 8         | [Download XLSM](https://autocfd5.s3.eu-west-1.amazonaws.com/test-cases/case2/AutoCFD5_DrivAer_Result_Template_v8.xlsm) |
| Flow-field mapping in ANSA and NASTRAN formats | AutoCFD2 resource | [Download ZIP](https://autocfd2.s3-eu-west-1.amazonaws.com/test-cases/case2/AutoCFD2.zip)                              |
| AutoCFD5 mesh details                          | May 2026          | [Download PDF](https://autocfd5.s3.eu-west-1.amazonaws.com/test-cases/case2/20260318_AutoCFD5_new_commitee_meshes.pdf) |

</div>

## Submit results

> Upload completed submissions through the [AutoCFD result-upload form](https://www.dropbox.com/request/A6cJNTT9egFtYiFICjAi), then email [admin@autocfd.org](mailto:admin@autocfd.org) to notify the organisers. If your organisation restricts access to cloud upload services, contact the same address to arrange an alternative.
> {: .case-submit}

## Grids and geometry

> _Updated 3 May 2026._
> {: .case-update}

### Geometry and surface meshes

<div class="case-table-wrap" role="region" aria-label="Case 2 geometry and surface mesh downloads" tabindex="0" markdown="1">

| Case                    | CAD Data                                                                                                                                                                                    | Surface Mesh (STL)                                                                                                 | Refinement Zones (STL)                                                                                                    |
| :---------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :----------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------ |
| **Case 2a** (Baseline)  | [TUM](https://www.epc.ed.tum.de/en/aer/research-groups/automotive/drivaer/download/) / [STEP](https://autocfd5.s3.eu-west-1.amazonaws.com/test-cases/case2/autocfd4case2aadditionalgeo.zip) | [STL](https://autocfd5.s3.eu-west-1.amazonaws.com/test-cases/case2/DrivAer_Notchback_baseline_geometry.stl.gz)     | [STL](https://autocfd5.s3.eu-west-1.amazonaws.com/test-cases/case2/DrivAer_Notchback_baseline_Refinement_Zones.stl.gz)    |
| **Case 2b** (Deflector) | [TUM](https://www.epc.ed.tum.de/en/aer/research-groups/automotive/drivaer/download/) / [STEP](https://autocfd5.s3.eu-west-1.amazonaws.com/test-cases/case2/autocfd4case2badditionalgeo.zip) | [STL](https://autocfd5.s3.eu-west-1.amazonaws.com/test-cases/case2/DrivAer_front_wheel_deflectors_geometry.stl.gz) | [STL](https://autocfd5.s3.eu-west-1.amazonaws.com/test-cases/case2/DrivAer_front_wheel_deflectors_Refinement_Zone.stl.gz) |

</div>

### Volume meshes

#### Case 2a (Baseline) {#case-2a-volume-meshes}

<div class="case-table-wrap case-table-wrap--compact" role="region" aria-label="Case 2a baseline volume mesh downloads" tabindex="0" markdown="1">

| Resolution | CGNS                                                                                                                   | Fluent                                                                                                                  | OpenFOAM                                                                                                                     |
| :--------- | :--------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------- |
| **Coarse** | [CGNS](https://autocfd5.s3.eu-west-1.amazonaws.com/test-cases/case2/Case_2a_DrivAer_Notchback_baseline_COARSE.cgns.gz) | [Fluent](https://autocfd5.s3.eu-west-1.amazonaws.com/test-cases/case2/Case_2a_DrivAer_Notchback_baseline_COARSE.msh.gz) | [OpenFOAM](https://autocfd5.s3.eu-west-1.amazonaws.com/test-cases/case2/Case_2a_DrivAer_Notchback_baseline_COARSE_OF.tar.gz) |
| **Medium** | [CGNS](https://autocfd5.s3.eu-west-1.amazonaws.com/test-cases/case2/Case_2a_DrivAer_Notchback_baseline.cgns.gz)        | [Fluent](https://autocfd5.s3.eu-west-1.amazonaws.com/test-cases/case2/Case_2a_DrivAer_Notchback_baseline.msh.gz)        | [OpenFOAM](https://autocfd5.s3.eu-west-1.amazonaws.com/test-cases/case2/Case_2a_DrivAer_Notchback_baseline.tar.gz)           |
| **Fine**   | [CGNS](https://autocfd5.s3.eu-west-1.amazonaws.com/test-cases/case2/Case_2a_DrivAer_Notchback_baseline_FINE.cgns.gz)   | [Fluent](https://autocfd5.s3.eu-west-1.amazonaws.com/test-cases/case2/Case_2a_DrivAer_Notchback_baseline_FINE.msh.gz)   | [OpenFOAM](https://autocfd5.s3.eu-west-1.amazonaws.com/test-cases/case2/Case_2a_DrivAer_Notchback_baseline_FINE_OF.tar.gz)   |

</div>

#### Case 2b (Deflector) {#case-2b-volume-meshes}

<div class="case-table-wrap case-table-wrap--compact" role="region" aria-label="Case 2b deflector volume mesh downloads" tabindex="0" markdown="1">

| Resolution | CGNS                                                                                                                     | Fluent                                                                                                                    | OpenFOAM                                                                                                                       |
| :--------- | :----------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------ | :----------------------------------------------------------------------------------------------------------------------------- |
| **Coarse** | [CGNS](https://autocfd5.s3.eu-west-1.amazonaws.com/test-cases/case2/Case_2b_DrivAer_Notchback_deflectors_COARSE.cgns.gz) | [Fluent](https://autocfd5.s3.eu-west-1.amazonaws.com/test-cases/case2/Case_2b_DrivAer_Notchback_deflectors_COARSE.msh.gz) | [OpenFOAM](https://autocfd5.s3.eu-west-1.amazonaws.com/test-cases/case2/Case_2b_DrivAer_Notchback_deflectors_COARSE_OF.tar.gz) |
| **Medium** | [CGNS](https://autocfd5.s3.eu-west-1.amazonaws.com/test-cases/case2/Case_2b_DrivAer_Notchback_deflectors.cgns.gz)        | [Fluent](https://autocfd5.s3.eu-west-1.amazonaws.com/test-cases/case2/Case_2b_DrivAer_Notchback_deflectors.msh.gz)        | [OpenFOAM](https://autocfd5.s3.eu-west-1.amazonaws.com/test-cases/case2/Case_2b_DrivAet_Notchback_deflectors.tar.gz)           |
| **Fine**   | [CGNS](https://autocfd5.s3.eu-west-1.amazonaws.com/test-cases/case2/Case_2b_DrivAer_Notchback_deflectors_FINE.cgns.gz)   | [Fluent](https://autocfd5.s3.eu-west-1.amazonaws.com/test-cases/case2/Case_2b_DrivAer_Notchback_deflectors_FINE.msh.gz)   | [OpenFOAM](https://autocfd5.s3.eu-west-1.amazonaws.com/test-cases/case2/Case_2b_DrivAer_Notchback_deflectors_FINE_OF.tar.gz)   |

</div>

<nav class="case-footer-nav" aria-label="More test cases">
  <a href="{{ '/case1/' | relative_url }}">← Previous: Case 1</a>
</nav>
