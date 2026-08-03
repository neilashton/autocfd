(() => {
  const gallery = document.querySelector("[data-youtube-gallery]");

  if (!gallery) return;

  let activeMedia = null;

  const restoreThumbnail = (media, shouldFocus = false) => {
    if (!media || !media.youtubeTrigger) return;

    const trigger = media.youtubeTrigger;
    media.replaceChildren(trigger);
    delete media.youtubeTrigger;

    if (activeMedia === media) activeMedia = null;
    if (shouldFocus) trigger.focus();
  };

  gallery.addEventListener("click", (event) => {
    const closeButton = event.target.closest("[data-youtube-close]");

    if (closeButton) {
      restoreThumbnail(closeButton.closest("[data-video-media]"), true);
      return;
    }

    const trigger = event.target.closest("[data-youtube-play]");

    if (!trigger) return;

    const media = trigger.closest("[data-video-media]");

    if (activeMedia && activeMedia !== media) restoreThumbnail(activeMedia);

    media.youtubeTrigger = trigger;

    const player = document.createElement("div");
    player.className = "autocfd4-video-player";

    const iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(trigger.dataset.videoId)}?autoplay=1&playsinline=1&rel=0`;
    iframe.title = `AutoCFD4 recording: ${trigger.dataset.videoTitle}`;
    iframe.width = "560";
    iframe.height = "315";
    iframe.allow = "autoplay; encrypted-media; picture-in-picture; web-share; fullscreen";
    iframe.allowFullscreen = true;
    iframe.referrerPolicy = "strict-origin-when-cross-origin";

    const closePlayer = document.createElement("button");
    closePlayer.type = "button";
    closePlayer.className = "autocfd4-video-player__close";
    closePlayer.dataset.youtubeClose = "";
    closePlayer.textContent = "Close video";

    player.append(closePlayer, iframe);
    media.replaceChildren(player);
    activeMedia = media;

    requestAnimationFrame(() => iframe.focus());
  });

  gallery.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && activeMedia) {
      event.preventDefault();
      restoreThumbnail(activeMedia, true);
    }
  });

  gallery.querySelectorAll(".autocfd4-video-session").forEach((session) => {
    session.addEventListener("toggle", () => {
      if (!session.open && activeMedia && session.contains(activeMedia)) restoreThumbnail(activeMedia);
    });
  });
})();
