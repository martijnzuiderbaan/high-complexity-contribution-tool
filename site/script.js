(function () {
  var AnalyticsEvents = {
    LANDING_PAGE_VIEW: "landing_page_view",
    PRIMARY_CTA_CLICKED: "primary_cta_clicked",
    SECONDARY_CTA_CLICKED: "secondary_cta_clicked",
    TOOL_PACK_LINK_CLICKED: "tool_pack_link_clicked",
    BETA_DISCLOSURE_VIEWED: "beta_disclosure_viewed",
    PRIVACY_PLACEHOLDER_VIEWED: "privacy_placeholder_viewed",
    RESPONSIBLE_USE_VIEWED: "responsible_use_viewed",
    SAMPLE_FLOW_VIEWED: "sample_flow_viewed",
    PRICING_SECTION_VIEWED: "pricing_section_viewed"
  };
  var analyticsDebug = isAnalyticsDebugEnabled();
  var revealItems = document.querySelectorAll(".section-reveal");

  function isAnalyticsDebugEnabled() {
    try {
      if (new URLSearchParams(window.location.search).get("analyticsDebug") === "1") {
        return true;
      }
    } catch (error) {
      // Ignore unsupported query parsing.
    }

    try {
      return window.localStorage.getItem("hcctAnalyticsDebug") === "1";
    } catch (error) {
      return false;
    }
  }

  function isKnownEvent(eventName) {
    return Object.keys(AnalyticsEvents).some(function (key) {
      return AnalyticsEvents[key] === eventName;
    });
  }

  function cleanAnalyticsProperties(properties) {
    var allowedKeys = ["label", "target", "section"];
    var cleaned = {};

    if (!properties) {
      return cleaned;
    }

    allowedKeys.forEach(function (key) {
      if (typeof properties[key] === "string" && properties[key].length <= 80) {
        cleaned[key] = properties[key];
      }
    });

    return cleaned;
  }

  var analytics = {
    events: AnalyticsEvents,
    track: function (eventName, properties) {
      if (!isKnownEvent(eventName)) {
        return;
      }

      if (analyticsDebug && window.console && typeof window.console.info === "function") {
        window.console.info("[analytics:no-op]", {
          event: eventName,
          properties: cleanAnalyticsProperties(properties)
        });
      }
    }
  };

  window.HCCTAnalytics = analytics;
  analytics.track(AnalyticsEvents.LANDING_PAGE_VIEW, { label: "static_site" });

  document.addEventListener("click", function (event) {
    var target = event.target.closest
      ? event.target.closest("[data-analytics-event]")
      : null;

    if (!target) {
      return;
    }

    analytics.track(target.getAttribute("data-analytics-event"), {
      label: target.getAttribute("data-analytics-label") || "",
      target: target.getAttribute("href") || ""
    });
  });

  function trackSectionView(item) {
    var viewEvent = item.getAttribute("data-analytics-view");

    if (!viewEvent || item.getAttribute("data-analytics-viewed") === "true") {
      return;
    }

    item.setAttribute("data-analytics-viewed", "true");
    analytics.track(viewEvent, { section: item.id || "" });
  }

  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            trackSectionView(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 }
    );

    revealItems.forEach(function (item) {
      observer.observe(item);
    });
  } else {
    revealItems.forEach(function (item) {
      item.classList.add("is-visible");
      trackSectionView(item);
    });
  }
})();
