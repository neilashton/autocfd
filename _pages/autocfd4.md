---
layout: page
permalink: /autocfd4/
title: AutoCFD4
page_title: 4th Automotive CFD Prediction Workshop — Belfast 2024
seo_title: AutoCFD4 Workshop — Presentations, Videos and Test Cases
seo_site_name: AutoCFD
description: Archive of the 4th Automotive CFD Prediction Workshop held in Belfast in September 2024, with agenda, presentations, videos and test-case links.
og_image: https://i.ytimg.com/vi/hntbFeLmvUA/maxresdefault.jpg
og_image_width: 1280
og_image_height: 720
og_image_type: image/jpeg
nav: false
nav_order: 2
content_class: autocfd4-page
youtube_gallery: true
---

<div class="alert alert-secondary" role="note">
  <strong>Past workshop — submissions closed.</strong> AutoCFD4 took place in September 2024. This page is retained as a permanent archive of its test cases, grids, agenda, results, presentations and videos.
</div>

<nav aria-label="Workshop archive navigation">
  <strong>Workshop navigation:</strong>
  <a href="{{ '/autocfd3/' | relative_url }}">Previous: AutoCFD3</a> ·
  <a href="{{ '/' | relative_url }}">Next and current workshop: AutoCFD5</a>
</nav>

<h2>Summary</h2>
Following the success of the previous three workshops in Oxford (2019), Berlin (2021) and Barcelona (2022), the 4th Automotive CFD Prediction Workshop (AutoCFD4) was held in person on 26–27 September 2024 at Queen's University Belfast.

The main objective of the 4th Automotive CFD Prediction Workshop was to assess the predictive capability of CFD codes for road-car geometries. Through mandatory geometry, boundary conditions and computational grids, the workshop aimed to provide practical modelling guidelines to the automotive community, including best practices for turbulence modelling, meshing and numerical schemes. It also brought together the automotive CFD community from academia and industry to discuss future directions. The test cases remained the same as those used for the 3rd workshop, enabling participants to continue their research on existing cases with unresolved challenges.

Computing the test cases was not required for attendance, although participants were strongly encouraged to submit results.

<h2>Technology Focus Groups</h2>

AutoCFD4 used a Technology Focus Group (TFG) model, inspired by the 4th AIAA High-Lift CFD Prediction Workshop, in which each participant was asked to join a TFG covering one of five core areas. The groups met every four to five weeks and collaboratively shared findings and results in the run-up to the workshop. The aim was to encourage deeper discussions over a longer period than the two workshop days alone. The TFG leaders and their contact details are retained below as part of the archive.

[Meshing TFG](mailto:meshing@autocfd.org) - Vangelis Skaperdas (BETA-CAE Systems) \
[Noise Factors TFG](mailto:noise@autocfd.org) - Burkhard Hupertz (Ford) \
[AI/ML TFG](mailto:aiml@autocfd.org) - Neil Ashton (AWS) and Astrid Walle (Siemens Energy) \
[Scale Resolving Simulations (SRS) TFG](mailto:srs@autocfd.org) - Charles Mockett and Marian Fuchs (Upstream CFD) \
[HPC TFG](mailto:hpc@autocfd.org) - Hebert Owen and Oriol Lehmkuhl (Barcelona Supercomputing Center)

Read the [scope and goals of the AutoCFD4 Technology Focus Groups](https://autocfd4.s3.eu-west-1.amazonaws.com/AutoCFD_TFG_overall.pdf).

Read the [AutoCFD workshop data policy](https://autocfdv3.s3.eu-west-1.amazonaws.com/data-policy.pdf).

<h2>Dates</h2>
<b>Abstract deadline</b>: 14 June 2024 (extended) \
<b>Notice of acceptance</b>: 1 July 2024 (extended) \
<b>Data-submission deadline</b>: 9 August 2024 \
<b>Workshop</b>: 26–27 September 2024
<br/><br/>

Due to the large number of registered contributors and the limited number of speaking slots, participants submitting results were also asked to submit a 250-word abstract in Word or PDF format describing their preliminary findings and methodology. The historical [AutoCFD4 abstract template](https://autocfd4.s3.eu-west-1.amazonaws.com/autocfd4-abstract-template.docx) remains available. Abstracts went through a light peer review by the organising committee to select speaking slots.
Participants who were not selected to speak had an opportunity to record a video for the workshop website.
Abstracts were submitted to the following TFG leads:

[Meshing TFG](mailto:meshing@autocfd.org) - Vangelis Skaperdas (BETA-CAE Systems) \
[Noise Factors TFG](mailto:noise@autocfd.org) - Burkhard Hupertz (Ford) \
[AI/ML TFG](mailto:aiml@autocfd.org) - Neil Ashton (AWS) and Astrid Walle (Siemens Energy) \
[Scale Resolving Simulations (SRS) TFG](mailto:srs@autocfd.org) - Charles Mockett and Marian Fuchs (Upstream CFD) \
[HPC TFG](mailto:hpc@autocfd.org) - Hebert Owen and Oriol Lehmkuhl (Barcelona Supercomputing Center)

<h2>Test cases</h2>
<h3>Case 1</h3>

<img class="photo" alt="Windsor Body" src="{{ site.baseurl }}/assets/img/windsor.png" width="567" height="241" loading="lazy" decoding="async">

Case 1 is the Windsor Squareback body at 2.5 degrees yaw and is the same test-case studied in the [3rd Automotive CFD Prediction Workshop]({{ '/autocfd3/' | relative_url }}). The problem is at a Reynolds number of 3 million based on vehicle length and is within a wind-tunnel like domain. As well as force, moment and surface pressure data, there is also available non intrusive PIV measurements in the wake. The baseline grid is similar to the ‘eddy resolving’ grid from the second workshop and contains 37 million cells. The alternate grids halve and double the core cell size to give 7 million and 197 million cell grids. The grid type follows the second workshop using the ‘trimmer mesh’ and prism layer approach from Simcenter STAR-CCM+.

<h3>Case 1 documents</h3>

| [Test-case description and submission guidelines (April 2024)](https://autocfd4.s3.eu-west-1.amazonaws.com/test-cases/case1/Gary+Page+-+Case1AutoCFD4Description.pdf) |
| [Example submission form (v5 - May 2024)](https://autocfd4.s3.eu-west-1.amazonaws.com/test-cases/case1/AutoCFD4_Windsor_Case1_Result_Template_v5.xlsm) |

<h3>Case 1 submission archive</h3>
Submissions are closed. During AutoCFD4, results were uploaded to the [AutoCFD4 Dropbox request](https://www.dropbox.com/request/A6cJNTT9egFtYiFICjAi), followed by an email to admin@autocfd.org. Organisations with restricted access to cloud-upload services could contact the administrators to arrange an alternative.

<h3>Case 1 grids</h3>

| Surface grids (windsor body) | [STL](https://autocfdv3.s3.eu-west-1.amazonaws.com/test-cases/case1/meshes/Windsor_Square_nW.stl) | [JT](https://autocfdv3.s3.eu-west-1.amazonaws.com/test-cases/case1/meshes/Windsor_Square_nW.jt) |
| Surface grids (pins-only) | [STL](https://autocfdv3.s3.eu-west-1.amazonaws.com/test-cases/case1/meshes/Windsor_Pins.stl) | [JT](https://autocfdv3.s3.eu-west-1.amazonaws.com/test-cases/case1/meshes/Windsor_Pins.jt)
| Coarse Grids | [CGNS](https://autocfdv3.s3.eu-west-1.amazonaws.com/test-cases/case1/meshes/c1g1.cgns)|[OpenFOAM](https://autocfdv3.s3.eu-west-1.amazonaws.com/test-cases/case1/meshes/c1g1.OpenFOAM.tar.gz)|[Fluent](https://autocfdv3.s3.eu-west-1.amazonaws.com/test-cases/case1/meshes/c1g1.msh)|[STAR-CCM+](https://autocfdv3.s3.eu-west-1.amazonaws.com/test-cases/case1/meshes/c1g1.ccm)|
| Medium Grids (baseline) | [CGNS](https://autocfdv3.s3.eu-west-1.amazonaws.com/test-cases/case1/meshes/c1g2.cgns)|[OpenFOAM](https://autocfdv3.s3.eu-west-1.amazonaws.com/test-cases/case1/meshes/c1g2.OpenFOAM.tar.gz)|[Fluent](https://autocfdv3.s3.eu-west-1.amazonaws.com/test-cases/case1/meshes/c1g2.msh)|[STAR-CCM+](https://autocfdv3.s3.eu-west-1.amazonaws.com/test-cases/case1/meshes/c1g2.ccm)|
| Fine Grids | [CGNS](https://autocfdv3.s3.eu-west-1.amazonaws.com/test-cases/case1/meshes/c1g3.cgns)|[OpenFOAM](https://autocfdv3.s3.eu-west-1.amazonaws.com/test-cases/case1/meshes/c1g3.OpenFOAM.tar.gz)|[Fluent](https://autocfdv3.s3.eu-west-1.amazonaws.com/test-cases/case1/meshes/c1g3.msh)|[STAR-CCM+](https://autocfdv3.s3.eu-west-1.amazonaws.com/test-cases/case1/meshes/c1g3.ccm)|

<h3>Case 2</h3>

Case 2 is the notchback version of the DrivAer and is the same as that used in the 3rd Automotive CFD Prediction Workshop. It includes the base DrivAer variant (Case 2a), which was analysed in the 2nd and 3rd workshops, and a variant featuring a front-wheel air deflector (Case 2b), which was studied for the 3rd workshop. The detailed test-case description is linked below; SAE Technical Paper 2021-01-0958 by Hupertz et al. provides further information about the base variant. For both DrivAer variants, AutoCFD4 focused on a closed-cooling configuration with static wheels and a static floor. A comprehensive set of experimental data from the Pininfarina Wind Tunnel (courtesy of Ford), including aerodynamic forces, surface pressure, velocity profiles and 2D flow-field measurements, was available for correlation with the CFD analyses presented at the workshop. The meshes retained below were created using ANSA by BETA-CAE Systems. The mesh of the base variant (Case 2a) is identical to the “Case 2 – Wall-Function Grid” used in the 2nd workshop. The Case 2b mesh is identical to the Case 2a mesh except for the front-wheel air-deflector region.

<h3>Case 2 documents</h3>

| [Test-case description (updated May24)](https://autocfd4.s3.eu-west-1.amazonaws.com/test-cases/case2/AutoCFD4_Case2_Intro_240409.pdf) |
| [Submission template (updated May24)](https://autocfd4.s3.eu-west-1.amazonaws.com/test-cases/case2/AutoCFD4_DrivAer_Result_Template_v6s-2.xlsm) |
| [Flowfield mapping (ANSA and NASTRAN formats)](https://autocfd2.s3-eu-west-1.amazonaws.com/test-cases/case2/AutoCFD2.zip) |
| [Updated 2024 mesh details](https://autocfd4.s3.eu-west-1.amazonaws.com/test-cases/case2/meshes/AutoCFD4_UpdatedMesh.pdf) |

<h3>Case 2 submission archive</h3>
Submissions are closed. During AutoCFD4, results were uploaded to the [AutoCFD4 Dropbox request](https://www.dropbox.com/request/A6cJNTT9egFtYiFICjAi), followed by an email to admin@autocfd.org. Organisations with restricted access to cloud-upload services could contact the administrators to arrange an alternative.

<h3>Case 2 grids (updated April 2024)</h3>

| Case 2 CAD | [Baseline DrivAer](https://www.epc.ed.tum.de/en/aer/research-groups/automotive/drivaer/download/) | [Additional STEP](https://autocfd4.s3.eu-west-1.amazonaws.com/test-cases/case2/meshes/autocfd4case2additionalgeo.zip) |
| Case 2a Surface | [STL](https://autocfd4.s3.eu-west-1.amazonaws.com/test-cases/case2/meshes/AutoCFD4_Case2a.stl.gz) |
| Case 2b Surface | [STL](https://autocfd4.s3.eu-west-1.amazonaws.com/test-cases/case2/meshes/AutoCFD4_Case2b.stl.gz) |
| Case 2a Volume | [CGNS](https://autocfd4.s3.eu-west-1.amazonaws.com/test-cases/case2/meshes/AutoCFD4_Case2.1.cgns.gz) | [CFD++](https://autocfd4.s3.eu-west-1.amazonaws.com/test-cases/case2/meshes/AutoCFD4_Case2.1_CFD_PP.tar.gz) | [Fluent](https://autocfd4.s3.eu-west-1.amazonaws.com/test-cases/case2/meshes/AutoCFD4_Case2.1.msh.gz) | [OpenFOAM](https://autocfd4.s3.eu-west-1.amazonaws.com/test-cases/case2/meshes/AutoCFD4_Case2.1_OF.tar.gz) |
| Case 2b Volume | [CGNS](https://autocfd4.s3.eu-west-1.amazonaws.com/test-cases/case2/meshes/AutoCFD4_Case2.2.cgns.gz) | [CFD++](https://autocfd4.s3.eu-west-1.amazonaws.com/test-cases/case2/meshes/AutoCFD4_Case2.2_CFD_PP.tar.gz) | [Fluent](https://autocfd4.s3.eu-west-1.amazonaws.com/test-cases/case2/meshes/AutoCFD4_Case2.2.msh.gz) | [OpenFOAM](https://autocfd4.s3.eu-west-1.amazonaws.com/test-cases/case2/meshes/AutoCFD4_Case2.2_OF.tar.gz) |

<h2>Agenda</h2>

[Final detailed Agenda (v2.0 - Sept 2024)](https://autocfd4.s3.eu-west-1.amazonaws.com/AutoCFD4DraftDetailedAgendav2.0.pdf)

Workshop [booklet](https://autocfd4.s3.eu-west-1.amazonaws.com/4th+Automotive+CFD+Prediction+Workshop.pdf) (including presentation titles)

<h2 id="presentations-recordings">Presentations and recordings</h2>

<h3>1st mini virtual workshop (October 2023)</h3>

- Mini-workshop [presentations](https://autocfd4.s3.eu-west-1.amazonaws.com/autocfd4-miniworkshop-presentations.zip) from each TFG
- Mini-workshop [video recording](https://autocfd4.s3.eu-west-1.amazonaws.com/autocfd4-miniworkshop-video.mp4)

<h3>Main workshop (September 2024)</h3>

- Workshop [booklet](https://autocfd4.s3.eu-west-1.amazonaws.com/4th+Automotive+CFD+Prediction+Workshop.pdf) (including presentation titles)
- Explore the [AutoCFD4 results dashboard](https://autocfd4.cfdsolutions.net)

<section class="autocfd4-video-library" aria-labelledby="autocfd4-video-library-title" data-youtube-gallery>
  <div class="autocfd4-video-overview">
    <div>
      <span class="autocfd4-video-overview__label">Video archive</span>
      <h4 id="autocfd4-video-library-title">Watch the AutoCFD4 presentations</h4>
      <p>Browse every workshop recording by programme session. Select a thumbnail to play a recording here, open it directly on YouTube, or watch the <a href="{{ site.data.autocfd4_videos.master_playlist_url }}" target="_blank" rel="noopener noreferrer">complete AutoCFD4 workshop playlist</a>.</p>
    </div>
    <a class="autocfd4-video-channel" href="{{ site.data.autocfd4_videos.channel_url }}" target="_blank" rel="noopener noreferrer">Visit @autocfdworkshop on YouTube</a>
  </div>

  <ul class="autocfd4-video-stats" aria-label="Video archive summary">
    <li><strong>{{ site.data.autocfd4_videos.video_count }}</strong> recordings</li>
    <li><strong>10 hr 56 min</strong> total viewing time</li>
    <li><strong>{{ site.data.autocfd4_videos.sessions | size }}</strong> programme sections</li>
  </ul>

  <div class="autocfd4-video-sessions">
    {% for session in site.data.autocfd4_videos.sessions %}
      {% assign session_id = session.title | slugify %}
      <details class="autocfd4-video-session"{% if forloop.first %} open{% endif %}>
        <summary class="autocfd4-video-session__summary">
          <h5 id="{{ session_id }}">{{ session.title }}</h5>
          <span>{{ session.videos | size }} recordings · {{ session.duration }}</span>
        </summary>
        <p class="mx-3 mt-3 mb-0">
          <a class="btn btn-sm btn-outline-primary" href="{{ session.playlist_url }}" target="_blank" rel="noopener noreferrer">Watch the {{ session.title }} playlist on YouTube</a>
        </p>
        <div class="autocfd4-video-grid">
          {% for video in session.videos %}
            <article class="autocfd4-video-card">
              <div class="autocfd4-video-card__media" data-video-media>
                <button
                  class="autocfd4-video-card__play"
                  type="button"
                  data-youtube-play
                  data-video-id="{{ video.video_id }}"
                  data-video-title="{{ video.title | escape }}"
                  aria-label="Play {{ video.title | escape }}"
                >
                  <img
                    src="https://i.ytimg.com/vi/{{ video.video_id }}/maxresdefault.jpg"
                    alt=""
                    width="1280"
                    height="720"
                    loading="lazy"
                    decoding="async"
                  >
                  <span class="autocfd4-video-card__play-icon" aria-hidden="true"></span>
                  <span class="autocfd4-video-card__duration">{{ video.duration }}</span>
                </button>
              </div>
              <div class="autocfd4-video-card__body">
                <h6>{{ video.title }}</h6>
                <div class="autocfd4-video-card__actions">
                  {% if video.slides_url %}
                    <a href="{{ video.slides_url }}" target="_blank" rel="noopener noreferrer" aria-label="View slides for {{ video.title | escape }}">View slides</a>
                  {% endif %}
                  <a href="https://www.youtube.com/watch?v={{ video.video_id }}" target="_blank" rel="noopener noreferrer" aria-label="Watch {{ video.title | escape }} on YouTube">Watch on YouTube</a>
                </div>
              </div>
            </article>
          {% endfor %}
        </div>
      </details>
    {% endfor %}
  </div>
</section>

<h2>Venue</h2>
The workshop was held in Riddel Hall, located 1.5 miles (2.4 km) south of Belfast city centre.

**DIRECTIONS**

The transport information below is retained as part of the 2024 workshop archive and may no longer be current. Travellers should check current routes, timetables and fares with the relevant operators.

The following information helped attendees plan their journey by air, train or road to Riddel Hall, 185 Stranmillis Road, Belfast BT9 5EE, UK. Riddel Hall is approximately 15 minutes from the city centre by several buses; the 8d was the fastest and ran every 20 minutes from Great Northern Mall in the city centre. Alternatively, it is a 40-minute walk.

**BY AIR**

**GEORGE BEST BELFAST CITY AIRPORT**

The airport is situated just three miles from Belfast City Centre. The Airport Express 600 bus service runs from the airport terminal to the city center every 20 minutes (06.00-22.05) Monday to Friday. (Please check timetable for services on Saturday & Sundays).

**BELFAST INTERNATIONAL AIRPORT**

Belfast International Airport is situated just 18 miles north-west of Belfast and is easily accessed via the major road and motorway network. For up to date traffic information log on to the Roads Service website: www.trafficwatchni.com Regular bus and coach services are available from the front of the terminal building to Belfast. Airport Express 300 operates a 24 hour service between the airport and Belfast with buses departing every 15 minutes for the majority of the day on weekdays, with reduced frequencies at off peak times and weekends. The bus leaves from the bus stop located opposite the terminal exit. The International Airport Taxi Company, official taxi operator for the Belfast International Airport, are available for hire 24 hours a day 7 days a week outside the right hand door of the airport Exit lobby. Only taxis approved by Belfast International Airport are permitted to use the taxi rank. A list of sample fares is displayed in the exit hall of the terminal building.

**DUBLIN AIRPORT**

Dublin airport is approximately 160km south of Belfast. The Dublin Airport Express Coach Service operates from Dublin Airport 24 hours a day, with a journey time of approximately 2 hours. Tickets and seat reservations +44 (0)28 9066 6630 www.translink.co.uk

**BY SEA**

Belfast is easily accessed by sea with crossings from both Scotland and England. Travel by modern ferries takes from 2 hours 15 minutes. See the [Stena Line](https://www.stenaline.co.uk/) and [P&O Ferries](http://www.poferries.com/en/portal) websites for details.

**BY RAIL**

The Enterprise service ran eight times daily (five times on Sunday) from Dublin to Belfast, with a journey time of approximately two hours. Enterprise tickets and seat reservations were available by telephone on +44 (0)28 9089 9409 and through [Translink](https://www.translink.co.uk/). Queen’s University Belfast also provided local transport information.

<img class="photo" alt="Riddel Hall in Belfast" src="{{ site.baseurl }}/assets/img/belfast.jpg" width="606" height="404" loading="lazy" decoding="async">

<h2>Accommodation</h2>
Many hotels, short-term rentals and guest houses were available in Belfast. The [Visit Belfast website](https://visitbelfast.com) provided information on accommodation and things to do.

A 12% delegate discount was negotiated at both Clayton Hotel Belfast and Maldron Hotel Belfast City. Attendees used the promotional code “CONF12” when booking:

[Clayton Hotel Belfast](http://www.claytonhotelbelfast.com)

[Maldron Belfast City](http://www.maldronhotelbelfastcity.com)

<h2>Useful links</h2>

- [Delegate Offers](https://businesseventsbelfastandni.com/exclusive-delegate-offers)
- [Brochures and Downloads (including City Guide and city Map)](https://businesseventsbelfastandni.com/bochures-downloads/)
- [Getting Here](https://visitbelfast.com/plan/getting-to-belfast-travel-options/)
- [Things To See & Do](https://visitbelfast.com/see-do/)
- [Places To Eat & Drink](https://visitbelfast.com/eat-drink/)
- [Ideas and Inspiration](https://visitbelfast.com/ideas/)
- [Sustainable Belfast](https://visitbelfast.com/plan/sustainable-belfast/)
- [What’s On](https://visitbelfast.com/whats-on)
- [Essential Information](https://visitbelfast.com/plan/essential-information/)
<h2>Organisers</h2>

- Ben Thornber (Queens University Belfast) - **Local Organiser**
- Neil Ashton (Amazon Web Services)
- Burkhard Hupertz (Ford)
- Gary Page (Loughborough University)
- Charles Mockett (Upstream CFD)
- Astrid Walle (Siemens Energy)
- Vangelis Skaperdas (BETA-CAE Systems)
- Oriol Lehmkuhl (Barcelona Supercomputing Center)
- Herbert Owen (Barcelona Supercomputing Center)
- Charles Ribes (Stellantis)
