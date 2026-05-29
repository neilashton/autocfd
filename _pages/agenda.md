---
layout: page
permalink: /agenda/
title: agenda
description: Draft schedule for the 5th Automotive CFD Prediction Workshop
nav: true
nav_order: 5
---

<style>
  .agenda-container {
    font-family: system-ui, -apple-system, sans-serif;
    margin: 20px 0;
  }
  .day-header {
    background-color: #f8f9fa;
    border-left: 5px solid #0056b3;
    padding: 12px 15px;
    margin: 30px 0 15px 0;
    font-weight: bold;
    font-size: 1.3rem;
  }
  .agenda-item {
    display: flex;
    flex-direction: column;
    padding: 12px 15px;
    border-bottom: 1px solid #e9ecef;
    background: #fff;
  }
  .agenda-item:hover {
    background-color: #fdfdfd;
  }
  .agenda-time-meta {
    display: flex;
    gap: 15px;
    font-size: 0.9rem;
    color: #6c757d;
    margin-bottom: 4px;
    font-weight: 500;
  }
  .agenda-duration {
    background: #e9ecef;
    padding: 1px 6px;
    border-radius: 4px;
    font-size: 0.8rem;
  }
  .agenda-title {
    font-size: 1.05rem;
    font-weight: 600;
    color: #212529;
  }
  .agenda-speaker {
    font-size: 0.95rem;
    color: #495057;
    margin-top: 2px;
    font-style: italic;
  }
  .break-item {
    background-color: #fbfcfe;
    border-left: 3px dashed #ced4da;
  }
  .tfg-item {
    background-color: #fdfdfe;
    border-left: 3px solid #17a2b8;
  }
  .social-item {
    background-color: #fffdf5;
    border-left: 3px solid #ffc107;
  }

  /* Desktop layout Optimization */
  @media (min-width: 768px) {
    .agenda-item {
      flex-direction: row;
      align-items: center;
      padding: 15px 20px;
    }
    .agenda-time-meta {
      flex-direction: column;
      gap: 2px;
      min-width: 110px;
      margin-bottom: 0;
    }
    .agenda-duration {
      align-self: flex-start;
      margin-top: 3px;
    }
    .agenda-content {
      flex-grow: 1;
      padding-left: 10px;
    }
  }
</style>

---

<div class="agenda-container">

  <!-- ================= DAY 1 ================= -->
  <div class="day-header">Thursday 8th October 2026</div>

  <div class="agenda-item">
    <div class="agenda-time-meta">
      <div>08:30 - 09:00</div>
      <div class="agenda-duration">30 min</div>
    </div>
    <div class="agenda-content">
      <div class="agenda-title">Registration at the welcome desk</div>
    </div>
  </div>

  <div class="agenda-item">
    <div class="agenda-time-meta">
      <div>09:00 - 09:10</div>
      <div class="agenda-duration">10 min</div>
    </div>
    <div class="agenda-content">
      <div class="agenda-title">Opening remarks and workshop statistics</div>
      <div class="agenda-speaker">Simone Bnà & Neil Ashton</div>
    </div>
  </div>

  <div class="agenda-item">
    <div class="agenda-time-meta">
      <div>09:10 - 09:55</div>
      <div class="agenda-duration">45 min</div>
    </div>
    <div class="agenda-content">
      <div class="agenda-title">Summary of Workshop Series and Introduction to AutoCFD5 Case 1 and 2</div>
      <div class="agenda-speaker">Gary Page & Burkhard Hupertz</div>
    </div>
  </div>

  <div class="agenda-item">
    <div class="agenda-time-meta">
      <div>09:55 - 10:15</div>
      <div class="agenda-duration">20 min</div>
    </div>
    <div class="agenda-content">
      <div class="agenda-title">Meshing TFG Context and Summary</div>
      <div class="agenda-speaker">Chair: Vangelis Skaperdas</div>
    </div>
  </div>

  <div class="agenda-item tfg-item">
    <div class="agenda-time-meta">
      <div>10:15 - 11:15</div>
      <div class="agenda-duration">1h 00m</div>
    </div>
    <div class="agenda-content">
      <div class="agenda-title">TFG talks</div>
    </div>
  </div>

  <div class="agenda-item break-item">
    <div class="agenda-time-meta">
      <div>11:15 - 11:45</div>
      <div class="agenda-duration">30 min</div>
    </div>
    <div class="agenda-content">
      <div class="agenda-title">Coffee Break</div>
    </div>
  </div>

  <div class="agenda-item">
    <div class="agenda-time-meta">
      <div>11:45 - 12:15</div>
      <div class="agenda-duration">30 min</div>
    </div>
    <div class="agenda-content">
      <div class="agenda-title">Scale Resolving Simulation TFG Context and Summary</div>
      <div class="agenda-speaker">Chair: Charlie Mockett</div>
    </div>
  </div>

  <div class="agenda-item tfg-item">
    <div class="agenda-time-meta">
      <div>12:15 - 12:45</div>
      <div class="agenda-duration">30 min</div>
    </div>
    <div class="agenda-content">
      <div class="agenda-title">TFG talks</div>
    </div>
  </div>

  <div class="agenda-item">
    <div class="agenda-time-meta">
      <div>12:45 - 13:00</div>
      <div class="agenda-duration">15 min</div>
    </div>
    <div class="agenda-content">
      <div class="agenda-title">TFG Summary</div>
    </div>
  </div>

  <div class="agenda-item break-item">
    <div class="agenda-time-meta">
      <div>13:00 - 14:30</div>
      <div class="agenda-duration">1h 30m</div>
    </div>
    <div class="agenda-content">
      <div class="agenda-title">Lunch Break</div>
    </div>
  </div>

  <div class="agenda-item">
    <div class="agenda-time-meta">
      <div>14:30 - 14:45</div>
      <div class="agenda-duration">15 min</div>
    </div>
    <div class="agenda-content">
      <div class="agenda-title">HPC TFG Context and Summary</div>
      <div class="agenda-speaker">Chair: Herbert Owen</div>
    </div>
  </div>

  <div class="agenda-item tfg-item">
    <div class="agenda-time-meta">
      <div>14:45 - 15:30</div>
      <div class="agenda-duration">45 min</div>
    </div>
    <div class="agenda-content">
      <div class="agenda-title">TFG talks</div>
    </div>
  </div>

  <div class="agenda-item break-item">
    <div class="agenda-time-meta">
      <div>15:30 - 16:00</div>
      <div class="agenda-duration">30 min</div>
    </div>
    <div class="agenda-content">
      <div class="agenda-title">Coffee Break</div>
    </div>
  </div>

  <div class="agenda-item tfg-item">
    <div class="agenda-time-meta">
      <div>16:00 - 16:50</div>
      <div class="agenda-duration">50 min</div>
    </div>
    <div class="agenda-content">
      <div class="agenda-title">TFG talks</div>
    </div>
  </div>

  <div class="agenda-item">
    <div class="agenda-time-meta">
      <div>16:50 - 17:00</div>
      <div class="agenda-duration">10 min</div>
    </div>
    <div class="agenda-content">
      <div class="agenda-title">TFG Summary</div>
    </div>
  </div>

  <!-- Social Programme -->
  <div class="day-header" style="border-left-color: #ffc107; background-color: #fffdf5;">Social Programme</div>

  <div class="agenda-item social-item">
    <div class="agenda-time-meta">
      <div>17:00 - 18:00</div>
      <div class="agenda-duration">1h 00m</div>
    </div>
    <div class="agenda-content">
      <div class="agenda-title">Travel with bus to Museum Enzo Ferrari Modena</div>
    </div>
  </div>

  <div class="agenda-item social-item">
    <div class="agenda-time-meta">
      <div>18:00 - 19:00</div>
      <div class="agenda-duration">1h 00m</div>
    </div>
    <div class="agenda-content">
      <div class="agenda-title">Museum Enzo Ferrari Modena visit with tour guides</div>
      <div class="agenda-speaker">(One guide per 20 participants)</div>
    </div>
  </div>

  <div class="agenda-item social-item">
    <div class="agenda-time-meta">
      <div>19:00 - 19:30</div>
      <div class="agenda-duration">30 min</div>
    </div>
    <div class="agenda-content">
      <div class="agenda-title">Travel to Restaurant "Enoteca al Duomo" in the city center of Modena</div>
      <div class="agenda-speaker">(20 minutes walking)</div>
    </div>
  </div>

  <div class="agenda-item social-item">
    <div class="agenda-time-meta">
      <div>19:30 - 20:00</div>
      <div class="agenda-duration">30 min</div>
    </div>
    <div class="agenda-content">
      <div class="agenda-title">Aperitif in the main square</div>
      <div class="agenda-speaker">(Or in the loggia in case of rain)</div>
    </div>
  </div>

  <div class="agenda-item social-item">
    <div class="agenda-time-meta">
      <div>20:00 - 22:00</div>
      <div class="agenda-duration">2h 00m</div>
    </div>
    <div class="agenda-content">
      <div class="agenda-title">Dinner at the restaurant</div>
    </div>
  </div>

  <div class="agenda-item social-item">
    <div class="agenda-time-meta">
      <div>22:00 - 23:00</div>
      <div class="agenda-duration">1h 00m</div>
    </div>
    <div class="agenda-content">
      <div class="agenda-title">Travel back to Bologna main station</div>
    </div>
  </div>


  <!-- ================= DAY 2 ================= -->
  <div class="day-header">Friday 9th October 2026</div>

  <div class="agenda-item">
    <div class="agenda-time-meta">
      <div>08:30 - 08:45</div>
      <div class="agenda-duration">15 min</div>
    </div>
    <div class="agenda-content">
      <div class="agenda-title">Registration at the welcome desk</div>
    </div>
  </div>

  <div class="agenda-item">
    <div class="agenda-time-meta">
      <div>08:45 - 09:00</div>
      <div class="agenda-duration">15 min</div>
    </div>
    <div class="agenda-content">
      <div class="agenda-title">Day 1 recap and announcements</div>
    </div>
  </div>

  <div class="agenda-item">
    <div class="agenda-time-meta">
      <div>09:00 - 09:15</div>
      <div class="agenda-duration">15 min</div>
    </div>
    <div class="agenda-content">
      <div class="agenda-title">Noise Factors TFG Context and Summary</div>
      <div class="agenda-speaker">Chair: Burkhard Hupertz</div>
    </div>
  </div>

  <div class="agenda-item tfg-item">
    <div class="agenda-time-meta">
      <div>09:15 - 10:30</div>
      <div class="agenda-duration">1h 15m</div>
    </div>
    <div class="agenda-content">
      <div class="agenda-title">TFG talks</div>
    </div>
  </div>

  <div class="agenda-item">
    <div class="agenda-time-meta">
      <div>10:30 - 10:45</div>
      <div class="agenda-duration">15 min</div>
    </div>
    <div class="agenda-content">
      <div class="agenda-title">TFG Summary</div>
    </div>
  </div>

  <div class="agenda-item break-item">
    <div class="agenda-time-meta">
      <div>10:45 - 11:15</div>
      <div class="agenda-duration">30 min</div>
    </div>
    <div class="agenda-content">
      <div class="agenda-title">Coffee Break</div>
    </div>
  </div>

  <div class="agenda-item">
    <div class="agenda-time-meta">
      <div>11:15 - 11:50</div>
      <div class="agenda-duration">35 min</div>
    </div>
    <div class="agenda-content">
      <div class="agenda-title">AI/ML TFG context, datasets and summary</div>
      <div class="agenda-speaker">Chairs: Neil Ashton & Astrid Walle</div>
    </div>
  </div>

  <div class="agenda-item tfg-item">
    <div class="agenda-time-meta">
      <div>11:50 - 12:35</div>
      <div class="agenda-duration">45 min</div>
    </div>
    <div class="agenda-content">
      <div class="agenda-title">TFG talks</div>
    </div>
  </div>

  <div class="agenda-item">
    <div class="agenda-time-meta">
      <div>12:35 - 12:45</div>
      <div class="agenda-duration">10 min</div>
    </div>
    <div class="agenda-content">
      <div class="agenda-title">TFG Summary</div>
    </div>
  </div>

  <div class="agenda-item break-item">
    <div class="agenda-time-meta">
      <div>12:45 - 13:45</div>
      <div class="agenda-duration">1h 00m</div>
    </div>
    <div class="agenda-content">
      <div class="agenda-title">Lunch Break</div>
    </div>
  </div>

  <div class="agenda-item">
    <div class="agenda-time-meta">
      <div>13:45 - 15:00</div>
      <div class="agenda-duration">1h 15m</div>
    </div>
    <div class="agenda-content">
      <div class="agenda-title">OEM Panel Discussion</div>
    </div>
  </div>

  <div class="agenda-item">
    <div class="agenda-time-meta">
      <div>15:00 - 15:45</div>
      <div class="agenda-duration">45 min</div>
    </div>
    <div class="agenda-content">
      <div class="agenda-title">TFG Lead Panel Discussion</div>
    </div>
  </div>

  <div class="agenda-item">
    <div class="agenda-time-meta">
      <div>15:45 - 16:00</div>
      <div class="agenda-duration">15 min</div>
    </div>
    <div class="agenda-content">
      <div class="agenda-title">Summary, Close Remarks and Future Workshop Discussions</div>
    </div>
  </div>

  <div class="agenda-item" style="border-bottom: 2px solid #6c757d;">
    <div class="agenda-time-meta">
      <div>16:00</div>
      <div class="agenda-duration">End</div>
    </div>
    <div class="agenda-content">
      <div class="agenda-title">Close of Workshop</div>
    </div>
  </div>

</div>

<h2 style="margin-top: 40px; font-weight: 700; color: #212529;">Social Programme Venues</h2>

<div style="display: flex; gap: 20px; flex-wrap: wrap; margin-top: 20px; font-family: system-ui, -apple-system, sans-serif; margin-bottom: 40px;">

  <div style="flex: 1; min-width: 280px; border: 1px solid #e9ecef; border-radius: 8px; overflow: hidden; background: #fff; box-shadow: 0 2px 4px rgba(0,0,0,0.05); display: flex; flex-direction: column;">
    <img src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=600&q=80" alt="Ferrari sports car close-up" style="width: 100%; height: 180px; object-fit: cover;">
    <div style="padding: 15px; flex-grow: 1; display: flex; flex-direction: column; justify-content: space-between;">
      <div>
        <h4 style="margin: 0 0 8px 0; color: #212529; font-size: 1.1rem; font-weight: 600;">Museo Enzo Ferrari Modena</h4>
        <p style="font-size: 0.9rem; color: #6c757d; margin: 0 0 15px 0; line-height: 1.4;">Explore the spectacular futuristic pavilion dedicated to the life and sports cars of Enzo Ferrari in nearby Modena.</p>
      </div>
      <a href="https://www.ferrari.com/en-EN/museums/enzo-ferrari-modena" target="_blank" style="display: inline-block; align-self: flex-start; padding: 6px 14px; background-color: #ffc107; color: #212529; text-decoration: none; border-radius: 4px; font-size: 0.85rem; font-weight: 600;">Visit Official Website</a>
    </div>
  </div>

  <div style="flex: 1; min-width: 280px; border: 1px solid #e9ecef; border-radius: 8px; overflow: hidden; background: #fff; box-shadow: 0 2px 4px rgba(0,0,0,0.05); display: flex; flex-direction: column;">
    <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80" alt="Enoteca al Duomo Modena" style="width: 100%; height: 180px; object-fit: cover;">
    <div style="padding: 15px; flex-grow: 1; display: flex; flex-direction: column; justify-content: space-between;">
      <div>
        <h4 style="margin: 0 0 8px 0; color: #212529; font-size: 1.1rem; font-weight: 600;">Enoteca al Duomo</h4>
        <p style="font-size: 0.9rem; color: #6c757d; margin: 0 0 15px 0; line-height: 1.4;">Enjoy a traditional dinner and regional Emilian wines situated in the historical heart of Modena's city center.</p>
      </div>
      <a href="https://www.facebook.com/EnotecaAlDuomoModena/" target="_blank" style="display: inline-block; align-self: flex-start; padding: 6px 14px; background-color: #3b5998; color: #fff; text-decoration: none; border-radius: 4px; font-size: 0.85rem; font-weight: 500;">Visit Facebook Page</a>
    </div>
  </div>

</div>
