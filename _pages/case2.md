---
layout: page
permalink: /case2/
title: Test Case 2
description: 
nav: false
nav_order: 2
---

Case 2 is the notchback version of the DrivAer and is the same as used in the 4th automotive CFD prediction workshop. This includes the base variant of the DrivAer (Case 2a) as well as a variant of the DrivAer (Case 2b), which features a front wheel air deflector. A detailed description of both DrivAer test cases is available here and, for the base variant, from the SAE Technical Paper 2021-01-0958 by Hupertz et al.. For both DrivAer variants the workshop will focus on a closed cooling configuration with static wheels and static floor. A comprehensive set of experimental data from the Pininfarina Wind Tunnel (Courtesy of Ford) including aerodynamic forces, surface pressure, velocity profiles and 2D flowfield measurements will be available for both DrivAer variants for the correlation of CFD analyses presented at the workshop. Please see below for the meshes which were created using ANSA by Cadence Design Systems.
<h3>Documents</h3>

| [Test-case description (updated May24)](https://autocfd4.s3.eu-west-1.amazonaws.com/test-cases/case2/AutoCFD4_Case2_Intro_240409.pdf) |
| [Submission template (updated May24)](https://autocfd4.s3.eu-west-1.amazonaws.com/test-cases/case2/AutoCFD4_DrivAer_Result_Template_v6s-2.xlsm) |
| [Flowfield mapping (ANSA and NASTRAN formats)](https://autocfd2.s3-eu-west-1.amazonaws.com/test-cases/case2/AutoCFD2.zip) |
| [Updated 2026 mesh details](https://autocfd5.s3.eu-west-1.amazonaws.com/test-cases/case2/AutoCFD5_new_Case_2_commitee_meshesv2.pdf) |

<h3> Submission </h3>
Please note that submissions should be uploaded to [dropbox](https://www.dropbox.com/request/A6cJNTT9egFtYiFICjAi) and an email sent to admin@autocfd.org to inform the organizers. If your organization has restricted access to cloud upload services then please contact the admin email so that we can use an alternative

<h3> Grids & Geometry (updated 05/03) </h3>

<h4> Geometry & Surface Meshes </h4>

| Case | CAD Data | Surface Mesh (STL) | Refinement Zones (STL) |
| :--- | :--- | :--- | :--- |
| **Case 2a** (Baseline) | [TUM](https://www.epc.ed.tum.de/en/aer/research-groups/automotive/drivaer/download/) / [STEP](https://autocfd4.s3.eu-west-1.amazonaws.com/test-cases/case2/meshes/autocfd4case2additionalgeo.zip) | [STL](https://autocfd5.s3.eu-west-1.amazonaws.com/test-cases/case2/DrivAer_Notchback_baseline_geometry.stl.gz) | [STL](https://autocfd5.s3.eu-west-1.amazonaws.com/test-cases/case2/DrivAer_Notchback_baseline_Refinement_Zones.stl.gz) |
| **Case 2b** (Deflector) | [TUM](https://www.epc.ed.tum.de/en/aer/research-groups/automotive/drivaer/download/) / [STEP](https://autocfd4.s3.eu-west-1.amazonaws.com/test-cases/case2/meshes/autocfd4case2additionalgeo.zip) | [STL](https://autocfd5.s3.eu-west-1.amazonaws.com/test-cases/case2/DrivAer_front_wheel_deflectors_geometry.stl.gz) | [STL](https://autocfd5.s3.eu-west-1.amazonaws.com/test-cases/case2/DrivAer_front_wheel_deflectors_Refinement_Zone.stl.gz) |

<h4> Volume Meshes </h4>

| Case | Mesh Resolution | CGNS | Fluent | OpenFOAM |
| :--- | :--- | :--- | :--- | :--- |
| **Case 2a** | **Coarse** | [CGNS](https://autocfd5.s3.eu-west-1.amazonaws.com/test-cases/case2/Case_2a_DrivAer_Notchback_baseline_COARSE.cgns.gz) | [Fluent](https://autocfd5.s3.eu-west-1.amazonaws.com/test-cases/case2/Case_2a_DrivAer_Notchback_baseline_COARSE.msh.gz) | [OpenFOAM](https://autocfd5.s3.eu-west-1.amazonaws.com/test-cases/case2/Case_2a_DrivAer_Notchback_baseline_COARSE_OF.tar.gz) |
| (Baseline) | **Medium** | [CGNS](https://autocfd5.s3.eu-west-1.amazonaws.com/test-cases/case2/Case_2a_DrivAer_Notchback_baseline.cgns.gz) | [Fluent](https://autocfd5.s3.eu-west-1.amazonaws.com/test-cases/case2/Case_2a_DrivAer_Notchback_baseline.msh.gz) | [OpenFOAM](https://autocfd5.s3.eu-west-1.amazonaws.com/test-cases/case2/Case_2a_DrivAer_Notchback_baseline.tar.gz) |
| | **Fine** | [CGNS](https://autocfd5.s3.eu-west-1.amazonaws.com/test-cases/case2/Case_2a_DrivAer_Notchback_baseline_FINE.cgns.gz) | [Fluent](https://autocfd5.s3.eu-west-1.amazonaws.com/test-cases/case2/Case_2a_DrivAer_Notchback_baseline_FINE.msh.gz) | [OpenFOAM](https://autocfd5.s3.eu-west-1.amazonaws.com/test-cases/case2/Case_2a_DrivAer_Notchback_baseline_FINE_OF.tar.gz) |
| | | | | |
| **Case 2b** | **Coarse** | [CGNS](https://autocfd5.s3.eu-west-1.amazonaws.com/test-cases/case2/Case_2b_DrivAer_Notchback_deflectors_COARSE.cgns.gz) | [Fluent](https://autocfd5.s3.eu-west-1.amazonaws.com/test-cases/case2/Case_2b_DrivAer_Notchback_deflectors_COARSE.msh.gz) | [OpenFOAM](https://autocfd5.s3.eu-west-1.amazonaws.com/test-cases/case2/Case_2b_DrivAer_Notchback_deflectors_COARSE_OF.tar.gz) |
| (Deflector) | **Medium** | [CGNS](https://autocfd5.s3.eu-west-1.amazonaws.com/test-cases/case2/Case_2b_DrivAer_Notchback_deflectors.cgns.gz) | [Fluent](https://autocfd5.s3.eu-west-1.amazonaws.com/test-cases/case2/Case_2b_DrivAer_Notchback_deflectors.msh.gz) | [OpenFOAM](https://autocfd5.s3.eu-west-1.amazonaws.com/test-cases/case2/Case_2b_DrivAet_Notchback_deflectors.tar.gz) |
| | **Fine** | [CGNS](https://autocfd5.s3.eu-west-1.amazonaws.com/test-cases/case2/Case_2b_DrivAer_Notchback_deflectors_FINE.cgns.gz) | [Fluent](https://autocfd5.s3.eu-west-1.amazonaws.com/test-cases/case2/Case_2b_DrivAer_Notchback_deflectors_FINE.msh.gz) | [OpenFOAM](https://autocfd5.s3.eu-west-1.amazonaws.com/test-cases/case2/Case_2b_DrivAer_Notchback_deflectors_FINE_OF.tar.gz) |
