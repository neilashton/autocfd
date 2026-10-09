---
layout: page
permalink: /presentations/
title: Presentations
page_title: AutoCFD5 presentations
page_description: Presentations and discussions from Bologna, 8–9 October 2026.
description: Browse AutoCFD5 presentations by Technology Focus Group, title, speaker or organisation, with PDF and video recording availability.
nav: false
nav_order: 6
content_class: presentations-page
---

{% assign catalogue = site.data.autocfd5_presentations %}
{% assign talk_count = 0 %}
{% for section in catalogue.sections %}
{% assign talk_count = talk_count | plus: section.talks.size %}
{% endfor %}

<div class="presentations-intro">
  <p><strong>{{ talk_count }} presentations and discussions across {{ catalogue.sections.size }} programme sections.</strong><br>Browse the workshop summaries and individual talks below. PDF slides are being added as they become available. Video recordings will follow.</p>
  <a href="{{ '/agenda/' | relative_url }}">View the full agenda</a>
</div>

<section class="presentation-summaries" aria-labelledby="summary-heading">
  <h2 id="summary-heading">Workshop and TFG summaries</h2>
  <p>Start with the test cases, group findings and workshop conclusions.</p>
  <ul>
    {% for section in catalogue.sections %}
      {% for talk in section.talks %}
        {% if talk.featured %}
          <li><a href="#{{ talk.id }}">{{ talk.title | escape }}</a></li>
        {% endif %}
      {% endfor %}
    {% endfor %}
  </ul>
</section>

<div class="presentation-filters" hidden>
  <div>
    <label for="presentation-search">Search presentations</label>
    <input id="presentation-search" type="search" placeholder="Title, speaker or organisation" autocomplete="off">
  </div>
  <div>
    <label for="presentation-section">Programme section</label>
    <select id="presentation-section">
      <option value="">All sections</option>
      {% for section in catalogue.sections %}
        <option value="{{ section.id }}">{{ section.title | escape }}</option>
      {% endfor %}
    </select>
  </div>
  <button type="button" id="presentation-reset">Clear filters</button>
</div>

<div class="presentation-list-heading">
  <h2>All presentations</h2>
  <p id="presentation-count" role="status" aria-live="polite">{{ talk_count }} presentations and discussions</p>
</div>
<p class="presentation-time-note">Times follow the latest <a href="{{ catalogue.source | relative_url }}">workshop agenda</a> and use CEST. Names and organisations appear as listed in the programme.</p>

<div id="presentation-library">
  {% for section in catalogue.sections %}
    <section class="presentation-section" data-section="{{ section.id }}" aria-labelledby="section-{{ section.id }}">
      <h3 id="section-{{ section.id }}">{{ section.title | escape }}</h3>
      {% for talk in section.talks %}
        <article class="presentation-entry" id="{{ talk.id }}" aria-labelledby="title-{{ talk.id }}">
          <div class="presentation-entry__schedule">
            <span>Day {{ talk.day }}</span>
            <span>{{ talk.date | escape }}</span>
            <span>{{ talk.time | escape }}</span>
          </div>
          <div class="presentation-entry__content">
            <h4 id="title-{{ talk.id }}">{{ talk.title | escape }}</h4>
            {% if talk.presenter != blank %}
              <p class="presentation-entry__presenter">{{ talk.presenter | escape }}</p>
            {% endif %}
            <div class="presentation-entry__materials" aria-label="Materials for {{ talk.title | escape }}">
              {% if talk.pdf_url != blank %}
                <a href="{{ talk.pdf_url | relative_url }}" aria-label="View PDF slides: {{ talk.title | escape }}">View slides (PDF)</a>
              {% else %}
                <span class="presentation-pending"><i class="fa-regular fa-file-pdf" aria-hidden="true"></i> PDF pending</span>
              {% endif %}
              {% if talk.video_url != blank %}
                <a href="{{ talk.video_url | relative_url }}" aria-label="Watch video recording: {{ talk.title | escape }}">Watch recording</a>
              {% else %}
                <span class="presentation-pending"><i class="fa-solid fa-video" aria-hidden="true"></i> Video recording pending</span>
              {% endif %}
            </div>
          </div>
        </article>
      {% endfor %}
    </section>
  {% endfor %}
  <p id="presentation-empty" hidden>No presentations match these filters. Try a different search or clear the filters.</p>
</div>

<footer class="presentation-archives">
  <h2>Previous workshops</h2>
  <p><a href="{{ '/autocfd4/' | relative_url }}">AutoCFD4</a>, <a href="{{ '/autocfd3/' | relative_url }}">AutoCFD3</a>, <a href="{{ '/autocfd2/' | relative_url }}">AutoCFD2</a> and <a href="{{ '/autocfd1/' | relative_url }}">AutoCFD1</a> presentation archives.</p>
  <p>For materials or corrections, contact <a href="mailto:admin@autocfd.org">admin@autocfd.org</a>.</p>
</footer>

<script src="{{ '/assets/js/presentations.js' | relative_url }}" defer></script>
