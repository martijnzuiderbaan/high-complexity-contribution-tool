(function () {
  "use strict";

  var STORAGE_KEY = "hcct.selfScan.v1";
  var VERSION = "1.0.0";

  var steps = [
    { id: "start", label: "Start" },
    { id: "situation", label: "Situation" },
    { id: "contribution", label: "Contribution" },
    { id: "signals", label: "Signals" },
    { id: "disclosure", label: "Disclosure" },
    { id: "experiment", label: "Experiment" },
    { id: "report", label: "Report" }
  ];

  var dimensions = [
    {
      id: "complexity",
      label: "Cognitive complexity",
      help: "Work may need a clearer complexity lane, system view, or problem-framing space."
    },
    {
      id: "learning",
      label: "Learning speed",
      help: "Fast mastery may have flattened into repetition without a real learning edge."
    },
    {
      id: "autonomy",
      label: "Autonomy and trust",
      help: "Outcomes, constraints, method freedom, or decision zones may need separation."
    },
    {
      id: "quality",
      label: "Values and quality",
      help: "Quality, ethics, logic, fairness, or risk signals may need a better route."
    },
    {
      id: "sparring",
      label: "Sparring and translation",
      help: "Complex thinking may need challenge, timing, or a clearer translation format."
    },
    {
      id: "energy",
      label: "Energy and boundaries",
      help: "Meeting load, rescue work, switching, or hidden work may be affecting sustainability."
    },
    {
      id: "role-clarity",
      label: "Role clarity",
      help: "Ownership, outcomes, authority, or legitimate constraints may be unclear."
    },
    {
      id: "context-blocker",
      label: "Context blocker",
      help: "The role or process may be blocking useful contribution more than the person is."
    }
  ];

  var fullSections = [
    "Current work situation and concrete examples",
    "Contribution pattern",
    "Cognitive complexity",
    "Learning speed",
    "Autonomy and trust",
    "Values and quality",
    "Intensity and energy",
    "Role clarity and decision space",
    "Sparring and translation",
    "Role-design hypothesis",
    "Conversation preparation",
    "30-day review"
  ];

  var state = loadState() || createInitialState();
  var storageMode = state.meta.storageMode || "unset";
  var root = document.getElementById("app-root");
  var progressList = document.getElementById("progress-list");
  var storageStatus = document.getElementById("storage-status");
  var clearDataButton = document.getElementById("clear-data-button");

  function createInitialState() {
    var now = new Date().toISOString();

    return {
      version: VERSION,
      meta: {
        createdAt: now,
        updatedAt: now,
        language: "nl-en",
        storageMode: "unset"
      },
      acknowledgements: {
        nonDiagnostic: false,
        localOnly: false,
        sharedDeviceWarning: false
      },
      scanMode: "short",
      workSituation: {
        roleContext: "",
        working: "",
        tenseOrUnderused: "",
        peopleInvolved: "",
        keepPrivate: ""
      },
      contribution: {
        strongest: "",
        benefit: "",
        example: "",
        workImpact: "",
        shareChoice: "private",
        privateNote: "",
        shareableNote: ""
      },
      dimensionSignals: [],
      disclosureChoices: {
        privateTopics: "",
        shareableTopics: "",
        needsSupport: "",
        notAskingFor: ""
      },
      experiment: {
        fitDimension: "",
        hypothesis: "",
        changeFor30Days: "",
        adultAction: "",
        managerAction: "",
        protectedOrReduced: "",
        legitimateConstraints: "",
        evidenceImproved: "",
        evidenceHarm: "",
        stopCondition: "",
        reviewDate: "",
        documentationBoundary: ""
      }
    };
  }

  function loadState() {
    try {
      var saved = window.localStorage.getItem(STORAGE_KEY);

      if (!saved) {
        return null;
      }

      return migrateState(JSON.parse(saved));
    } catch (error) {
      return null;
    }
  }

  function migrateState(candidate) {
    var initial = createInitialState();

    if (!candidate || typeof candidate !== "object") {
      return initial;
    }

    return Object.assign(initial, candidate, {
      meta: Object.assign(initial.meta, candidate.meta || {}),
      acknowledgements: Object.assign(initial.acknowledgements, candidate.acknowledgements || {}),
      workSituation: Object.assign(initial.workSituation, candidate.workSituation || {}),
      contribution: Object.assign(initial.contribution, candidate.contribution || {}),
      disclosureChoices: Object.assign(initial.disclosureChoices, candidate.disclosureChoices || {}),
      experiment: Object.assign(initial.experiment, candidate.experiment || {}),
      dimensionSignals: Array.isArray(candidate.dimensionSignals) ? candidate.dimensionSignals : []
    });
  }

  function persistState() {
    state.meta.updatedAt = new Date().toISOString();
    state.meta.storageMode = storageMode;

    if (storageMode !== "local") {
      return;
    }

    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (error) {
      storageStatus.textContent = "Local save failed in this browser";
    }
  }

  function clearLocalData() {
    if (!window.confirm("Clear the self-scan saved in this browser? This does not affect exported files.")) {
      return;
    }

    window.localStorage.removeItem(STORAGE_KEY);
    state = createInitialState();
    storageMode = "unset";
    navigate("start");
  }

  function routeName() {
    return (window.location.hash || "#/start").replace(/^#\/?/, "") || "start";
  }

  function navigate(name) {
    window.location.hash = "#/" + name;
  }

  function isBoundaryComplete() {
    return state.acknowledgements.nonDiagnostic &&
      state.acknowledgements.localOnly &&
      state.acknowledgements.sharedDeviceWarning &&
      storageMode !== "unset";
  }

  function requireBoundary(route) {
    if (route !== "start" && !isBoundaryComplete()) {
      navigate("start");
      return false;
    }

    return true;
  }

  function render() {
    var route = routeName();

    if (!requireBoundary(route)) {
      return;
    }

    renderProgress(route);
    renderStorageStatus();
    root.replaceChildren();

    if (route === "start") {
      root.appendChild(startView());
    } else if (route === "situation") {
      root.appendChild(situationView());
    } else if (route === "contribution") {
      root.appendChild(contributionView());
    } else if (route === "signals") {
      root.appendChild(signalsView());
    } else if (route === "disclosure") {
      root.appendChild(disclosureView());
    } else if (route === "experiment") {
      root.appendChild(experimentView());
    } else if (route === "report") {
      root.appendChild(reportView());
    } else if (route === "full") {
      root.appendChild(fullShellView());
    } else {
      root.appendChild(notFoundView());
    }
  }

  function renderProgress(activeRoute) {
    progressList.replaceChildren();

    steps.forEach(function (step, index) {
      var item = el("li", { className: step.id === activeRoute ? "is-active" : "" }, [
        el("span", {}, [String(index + 1)]),
        document.createTextNode(step.label)
      ]);
      progressList.appendChild(item);
    });
  }

  function renderStorageStatus() {
    if (storageMode === "local") {
      storageStatus.textContent = "Saving in this browser only";
    } else if (storageMode === "memory") {
      storageStatus.textContent = "In-memory only; reload clears answers";
    } else {
      storageStatus.textContent = "Storage not selected";
    }
  }

  function startView() {
    var panel = panelView(
      "Private self-scan",
      "Start with boundaries and choose whether this browser may save your answers.",
      "This is a reflection tool, not a decision tool."
    );

    panel.appendChild(notice("Use another route if the main issue is health, legal, disciplinary, occupational-health, disability, formal accommodation, or serious conflict."));
    panel.appendChild(warning("Your answers may contain sensitive work or personal notes. Do not enter anything you would not want visible to someone using the same browser profile."));

    panel.appendChild(checkboxField(
      "nonDiagnostic",
      "I understand this is not a test, diagnosis, score, HR review, hiring tool, performance process, medical tool, or legal tool."
    ));
    panel.appendChild(checkboxField(
      "localOnly",
      "I understand the tool does not submit answers and does not send them to a backend."
    ));
    panel.appendChild(checkboxField(
      "sharedDeviceWarning",
      "I understand browser storage is local, not encrypted, and visible to the same browser profile or device."
    ));

    panel.appendChild(el("div", { className: "choice-grid" }, [
      choiceButton(
        "Save in this browser",
        "Use localStorage under one key on this device. You can clear it later.",
        function () {
          acceptBoundary("local");
        }
      ),
      choiceButton(
        "Continue without saving",
        "Keep answers in memory for this session only. Reloading clears them.",
        function () {
          window.localStorage.removeItem(STORAGE_KEY);
          acceptBoundary("memory");
        }
      )
    ]));

    return panel;
  }

  function acceptBoundary(mode) {
    if (!state.acknowledgements.nonDiagnostic ||
        !state.acknowledgements.localOnly ||
        !state.acknowledgements.sharedDeviceWarning) {
      root.appendChild(warning("Please acknowledge all three boundaries before continuing."));
      return;
    }

    storageMode = mode;
    persistState();
    navigate("situation");
  }

  function situationView() {
    var panel = panelView(
      "Current work situation",
      "Describe the context in work terms. Keep private details out unless you need them for your own reflection.",
      "Concrete examples are more useful than labels."
    );

    panel.appendChild(fieldGrid([
      textareaField("Current role or work context", "workSituation.roleContext", "Role, workstream, phase, or situation."),
      textareaField("What is currently working?", "workSituation.working", "Name the useful contribution already visible."),
      textareaField("What is tense, draining, unclear, or underused?", "workSituation.tenseOrUnderused", "Keep this practical and work-based."),
      textareaField("Who may need to be involved?", "workSituation.peopleInvolved", "Manager, coach, HR partner, facilitator, or no one yet."),
      textareaField("What should remain private for now?", "workSituation.keepPrivate", "Labels, health-adjacent notes, conflict details, or anything not useful to share.")
    ]));
    panel.appendChild(navActions("start", "contribution"));

    return panel;
  }

  function contributionView() {
    var panel = panelView(
      "Strongest useful contribution",
      "Capture one contribution pattern and one concrete example. Decide whether that example can be shared.",
      "The report will only use shareable fields in the conversation summary."
    );

    panel.appendChild(fieldGrid([
      textareaField("My strongest useful contribution appears when...", "contribution.strongest", "What conditions make contribution visible?"),
      textareaField("Others benefit because...", "contribution.benefit", "Describe the work value, not a personal label."),
      textareaField("One concrete example", "contribution.example", "What happened?"),
      textareaField("Work impact", "contribution.workImpact", "What changed in the work, decision, quality, risk, or collaboration?"),
      selectField("Sharing choice for this example", "contribution.shareChoice", [
        ["private", "Keep private"],
        ["shareable", "May include in shareable summary"],
        ["needs-support", "Needs support before sharing"]
      ]),
      textareaField("Private note", "contribution.privateNote", "Only for your private reflection export."),
      textareaField("Shareable wording", "contribution.shareableNote", "Write the version you would be comfortable sharing.")
    ]));
    panel.appendChild(navActions("situation", "signals"));

    return panel;
  }

  function signalsView() {
    var panel = panelView(
      "Main fit signals",
      "Select one or two possible work-context signals. These are not scores or conclusions.",
      "Use evidence and role levers, not labels."
    );

    panel.appendChild(el("div", { className: "dimension-grid" }, dimensions.map(function (dimension) {
      var checked = Boolean(findSignal(dimension.id));
      var input = el("input", { type: "checkbox", checked: checked });
      input.addEventListener("change", function () {
        toggleSignal(dimension.id, input.checked);
      });

      return el("label", { className: "dimension-option" }, [
        el("span", { className: "checkbox-row" }, [
          input,
          el("span", {}, [
            el("strong", {}, [dimension.label]),
            el("span", {}, [dimension.help])
          ])
        ])
      ]);
    })));

    selectedSignals().forEach(function (signal) {
      panel.appendChild(signalDetail(signal));
    });

    panel.appendChild(navActions("contribution", "disclosure"));

    return panel;
  }

  function disclosureView() {
    var panel = panelView(
      "Disclosure choices",
      "Decide what stays private, what may be shared, and what needs support before sharing.",
      "Adult-controlled disclosure is part of the tool, not an afterthought."
    );

    panel.appendChild(fieldGrid([
      textareaField("Keep private", "disclosureChoices.privateTopics", "Private notes, labels, health-adjacent content, conflict details, or identity history."),
      textareaField("May share", "disclosureChoices.shareableTopics", "Only practical work examples and role-fit signals that feel useful and safe."),
      textareaField("Needs support before sharing", "disclosureChoices.needsSupport", "Anything that may need a coach, HR partner, or facilitator."),
      textareaField("What I am not asking for", "disclosureChoices.notAskingFor", "For example: not asking for a diagnosis, special status, ranking, or a full role redesign.")
    ]));
    panel.appendChild(navActions("signals", "experiment"));

    return panel;
  }

  function experimentView() {
    var panel = panelView(
      "30-day experiment",
      "Define one bounded role-design hypothesis and a small work-context change to review after 30 days.",
      "Protect workload before adding anything new."
    );

    panel.appendChild(fieldGrid([
      selectField("Fit dimension", "experiment.fitDimension", [["", "Choose a dimension"]].concat(dimensions.map(function (dimension) {
        return [dimension.id, dimension.label];
      }))),
      textareaField("Role-design hypothesis", "experiment.hypothesis", "One hypothesis is..."),
      textareaField("Specific change for 30 days", "experiment.changeFor30Days", "What changes, where, and for how long?"),
      textareaField("Adult action", "experiment.adultAction", "What will you do differently or make clearer?"),
      textareaField("Manager or employer action", "experiment.managerAction", "What role/context lever is needed?"),
      textareaField("What will be paused, reduced, or protected?", "experiment.protectedOrReduced", "Avoid hidden workload."),
      textareaField("Legitimate constraints", "experiment.legitimateConstraints", "What constraints still matter?"),
      textareaField("Evidence to review", "experiment.evidenceImproved", "What would show the experiment helped?"),
      textareaField("Evidence of no improvement or harm", "experiment.evidenceHarm", "What would show it should be adjusted or stopped?"),
      textareaField("Stop condition", "experiment.stopCondition", "When should the experiment stop early?"),
      inputField("Review date", "experiment.reviewDate", "date"),
      textareaField("Documentation boundary", "experiment.documentationBoundary", "What should and should not be documented after the review?")
    ]));
    panel.appendChild(navActions("disclosure", "report"));

    return panel;
  }

  function reportView() {
    var panel = panelView(
      "Reports",
      "Generate a private reflection report or a shareable conversation summary.",
      "The shareable summary includes only explicitly shareable fields."
    );

    var privateReport = generatePrivateReport();
    var shareableReport = generateShareableReport();
    var preview = el("textarea", {
      className: "report-preview",
      readOnly: true,
      value: shareableReport,
      ariaLabel: "Shareable report preview"
    });

    panel.appendChild(el("div", { className: "export-grid" }, [
      exportBlock(
        "Private reflection report",
        "Includes private notes and may contain sensitive personal or workplace material.",
        "Download private report",
        privateReport,
        "hcct-private-reflection"
      ),
      exportBlock(
        "Shareable conversation summary",
        "Includes only fields marked shareable or written for sharing.",
        "Download shareable summary",
        shareableReport,
        "hcct-shareable-conversation-summary"
      )
    ]));

    panel.appendChild(el("div", { className: "field" }, [
      el("label", {}, ["Shareable preview"]),
      preview,
      el("small", {}, ["Review before sharing. Remove anything that should stay private."])
    ]));
    panel.appendChild(navActions("experiment", "full"));

    return panel;
  }

  function fullShellView() {
    var panel = panelView(
      "Full scan shell",
      "The full scan is not required for the MVP. These sections can be added after the short report generator is tested.",
      "Use the short scan first."
    );

    panel.appendChild(el("ul", { className: "full-shell-list" }, fullSections.map(function (section) {
      return el("li", {}, [section]);
    })));
    panel.appendChild(navActions("report", "start"));

    return panel;
  }

  function notFoundView() {
    var panel = panelView("Not found", "Return to the start of the self-scan.", "");
    panel.appendChild(navActions("start", "situation"));
    return panel;
  }

  function panelView(title, body, eyebrow) {
    return el("article", { className: "panel" }, [
      el("header", { className: "panel-header" }, [
        eyebrow ? el("p", { className: "eyebrow" }, [eyebrow]) : null,
        el("h2", {}, [title]),
        body ? el("p", {}, [body]) : null
      ].filter(Boolean))
    ]);
  }

  function fieldGrid(fields) {
    return el("div", { className: "field-grid" }, fields);
  }

  function checkboxField(key, label) {
    var input = el("input", {
      type: "checkbox",
      checked: Boolean(state.acknowledgements[key])
    });
    input.addEventListener("change", function () {
      state.acknowledgements[key] = input.checked;
      persistState();
    });

    return el("label", { className: "checkbox-row" }, [
      input,
      el("span", {}, [label])
    ]);
  }

  function inputField(label, path, type) {
    var input = el("input", {
      type: type || "text",
      value: getPath(path),
      id: path
    });
    input.addEventListener("input", function () {
      setPath(path, input.value);
    });

    return fieldShell(label, "", input);
  }

  function textareaField(label, path, help) {
    var textarea = el("textarea", {
      value: getPath(path),
      id: path
    });
    textarea.addEventListener("input", function () {
      setPath(path, textarea.value);
    });

    return fieldShell(label, help, textarea);
  }

  function selectField(label, path, options) {
    var select = el("select", { id: path });
    options.forEach(function (option) {
      select.appendChild(el("option", {
        value: option[0],
        selected: getPath(path) === option[0]
      }, [option[1]]));
    });
    select.addEventListener("change", function () {
      setPath(path, select.value);
    });

    return fieldShell(label, "", select);
  }

  function fieldShell(label, help, control) {
    return el("div", { className: "field" }, [
      el("label", { htmlFor: control.id }, [label]),
      control,
      help ? el("small", {}, [help]) : null
    ].filter(Boolean));
  }

  function signalDetail(signal) {
    var dimension = dimensions.find(function (item) {
      return item.id === signal.dimension;
    });
    var title = dimension ? dimension.label : signal.dimension;
    var wrapper = el("section", { className: "dimension-details" }, [
      el("h3", {}, [title]),
      textareaField("Evidence", "dimensionSignals." + signal.dimension + ".evidence", "What concrete work example supports this possible signal?"),
      textareaField("Possible role lever", "dimensionSignals." + signal.dimension + ".possibleRoleLever", "What could change in the role or context?"),
      textareaField("Private note", "dimensionSignals." + signal.dimension + ".privateNote", "For your private reflection only."),
      textareaField("Shareable note", "dimensionSignals." + signal.dimension + ".shareableNote", "Use cautious wording: may indicate, could suggest, worth testing."),
      selectField("Sharing choice", "dimensionSignals." + signal.dimension + ".shareChoice", [
        ["private", "Keep private"],
        ["shareable", "May include in shareable summary"],
        ["needs-support", "Needs support before sharing"]
      ])
    ]);

    return wrapper;
  }

  function exportBlock(title, description, buttonLabel, content, basename) {
    return el("div", { className: "export-block" }, [
      el("strong", {}, [title]),
      el("span", {}, [description]),
      el("button", {
        className: "button",
        type: "button",
        onClick: function () {
          downloadMarkdown(content, basename);
        }
      }, [buttonLabel])
    ]);
  }

  function navActions(previous, next) {
    return el("div", { className: "actions" }, [
      previous ? el("button", {
        className: "button secondary",
        type: "button",
        onClick: function () {
          navigate(previous);
        }
      }, ["Back"]) : null,
      next ? el("button", {
        className: "button",
        type: "button",
        onClick: function () {
          navigate(next);
        }
      }, [next === "start" ? "Return to start" : "Continue"]) : null
    ].filter(Boolean));
  }

  function notice(message) {
    return el("div", { className: "notice" }, [message]);
  }

  function warning(message) {
    return el("div", { className: "warning" }, [message]);
  }

  function choiceButton(title, description, onClick) {
    return el("button", {
      className: "choice-button",
      type: "button",
      onClick: onClick
    }, [
      el("strong", {}, [title]),
      el("span", {}, [description])
    ]);
  }

  function selectedSignals() {
    return state.dimensionSignals;
  }

  function findSignal(id) {
    return state.dimensionSignals.find(function (signal) {
      return signal.dimension === id;
    });
  }

  function toggleSignal(id, selected) {
    if (selected && !findSignal(id)) {
      state.dimensionSignals.push({
        dimension: id,
        evidence: "",
        possibleRoleLever: "",
        privateNote: "",
        shareableNote: "",
        shareChoice: "private"
      });
    }

    if (!selected) {
      state.dimensionSignals = state.dimensionSignals.filter(function (signal) {
        return signal.dimension !== id;
      });
    }

    persistState();
    render();
  }

  function getPath(path) {
    var parts = path.split(".");

    if (parts[0] === "dimensionSignals") {
      var signal = findSignal(parts[1]);
      return signal ? signal[parts[2]] || "" : "";
    }

    return parts.reduce(function (value, part) {
      return value && Object.prototype.hasOwnProperty.call(value, part) ? value[part] : "";
    }, state);
  }

  function setPath(path, value) {
    var parts = path.split(".");

    if (parts[0] === "dimensionSignals") {
      var signal = findSignal(parts[1]);
      if (signal) {
        signal[parts[2]] = value;
      }
    } else {
      var cursor = state;
      parts.slice(0, -1).forEach(function (part) {
        cursor = cursor[part];
      });
      cursor[parts[parts.length - 1]] = value;
    }

    persistState();
  }

  function generatePrivateReport() {
    var lines = [
      "# Private Reflection Report",
      "",
      "This private report may contain sensitive personal or workplace notes. It is not a test, diagnosis, score, HR review, medical tool, legal tool, or occupational-health tool.",
      "",
      "## Current Work Situation",
      fieldLine("Role or context", state.workSituation.roleContext),
      fieldLine("Working", state.workSituation.working),
      fieldLine("Tense, draining, unclear, or underused", state.workSituation.tenseOrUnderused),
      fieldLine("People who may need to be involved", state.workSituation.peopleInvolved),
      fieldLine("Keep private for now", state.workSituation.keepPrivate),
      "",
      "## Strongest Useful Contribution",
      fieldLine("Appears when", state.contribution.strongest),
      fieldLine("Others benefit because", state.contribution.benefit),
      fieldLine("Concrete example", state.contribution.example),
      fieldLine("Work impact", state.contribution.workImpact),
      fieldLine("Sharing choice", state.contribution.shareChoice),
      fieldLine("Private note", state.contribution.privateNote),
      fieldLine("Shareable wording", state.contribution.shareableNote),
      "",
      "## Possible Fit Signals",
      signalLines(false),
      "",
      "## Disclosure Choices",
      fieldLine("Keep private", state.disclosureChoices.privateTopics),
      fieldLine("May share", state.disclosureChoices.shareableTopics),
      fieldLine("Needs support before sharing", state.disclosureChoices.needsSupport),
      fieldLine("What I am not asking for", state.disclosureChoices.notAskingFor),
      "",
      "## 30-Day Experiment Draft",
      experimentLines(),
      "",
      "## Boundary",
      "Use this report as reflection and conversation preparation only. Review any shareable summary before sending or discussing it."
    ];

    return flattenLines(lines);
  }

  function generateShareableReport() {
    var lines = [
      "# Shareable Conversation Summary",
      "",
      "Purpose: prepare a role-fit conversation about sustainable contribution. This is not a test, diagnosis, score, HR review, performance process, medical tool, legal tool, or occupational-health tool.",
      "",
      "## Shareable Work Context",
      fieldLine("May share", state.disclosureChoices.shareableTopics),
      "",
      "## Strongest Useful Contribution",
      shareableContributionLines(),
      "",
      "## Possible Work-Context Pattern",
      signalLines(true),
      "",
      "## What I Am Not Asking For",
      blankFallback(state.disclosureChoices.notAskingFor),
      "",
      "## Proposed 30-Day Experiment",
      experimentLines(),
      "",
      "## Private Topics Not Included",
      blankFallback("Private notes, health-adjacent details, conflict history, identity labels, and anything not explicitly chosen for sharing are not included here."),
      "",
      "## Review Frame",
      "Review after 30 days using concrete evidence of contribution, clarity, energy cost, collaboration, and hidden workload."
    ];

    return flattenLines(lines);
  }

  function shareableContributionLines() {
    if (state.contribution.shareChoice !== "shareable") {
      return "Concrete example: Not included; this example was not marked shareable.";
    }

    return [
      fieldLine("Shareable wording", state.contribution.shareableNote),
      fieldLine("Work impact", state.contribution.workImpact)
    ];
  }

  function signalLines(shareableOnly) {
    if (!state.dimensionSignals.length) {
      return "No possible fit signals selected yet.";
    }

    return state.dimensionSignals.map(function (signal) {
      var dimension = dimensions.find(function (item) {
        return item.id === signal.dimension;
      });
      var title = dimension ? dimension.label : signal.dimension;

      if (shareableOnly && signal.shareChoice !== "shareable") {
        return "- " + title + ": not included; this signal was not marked shareable.";
      }

      var lines = [
        "### " + title,
        fieldLine("Evidence", shareableOnly ? signal.shareableNote : signal.evidence),
        fieldLine("Possible role lever", signal.possibleRoleLever)
      ];

      if (!shareableOnly) {
        lines.push(fieldLine("Private note", signal.privateNote));
        lines.push(fieldLine("Sharing choice", signal.shareChoice));
      }

      return lines.join("\n");
    });
  }

  function experimentLines() {
    return [
      fieldLine("Fit dimension", labelForDimension(state.experiment.fitDimension)),
      fieldLine("Role-design hypothesis", state.experiment.hypothesis),
      fieldLine("Specific change for 30 days", state.experiment.changeFor30Days),
      fieldLine("Adult action", state.experiment.adultAction),
      fieldLine("Manager or employer action", state.experiment.managerAction),
      fieldLine("Paused, reduced, or protected", state.experiment.protectedOrReduced),
      fieldLine("Legitimate constraints", state.experiment.legitimateConstraints),
      fieldLine("Evidence to review", state.experiment.evidenceImproved),
      fieldLine("Evidence of no improvement or harm", state.experiment.evidenceHarm),
      fieldLine("Stop condition", state.experiment.stopCondition),
      fieldLine("Review date", state.experiment.reviewDate),
      fieldLine("Documentation boundary", state.experiment.documentationBoundary)
    ];
  }

  function labelForDimension(id) {
    var dimension = dimensions.find(function (item) {
      return item.id === id;
    });
    return dimension ? dimension.label : id;
  }

  function fieldLine(label, value) {
    return "- " + label + ": " + blankFallback(value);
  }

  function blankFallback(value) {
    return value && String(value).trim() ? String(value).trim() : "_Not specified._";
  }

  function flattenLines(lines) {
    return lines.flat(Infinity).join("\n");
  }

  function downloadMarkdown(content, basename) {
    var date = new Date().toISOString().slice(0, 10);
    var blob = new Blob([content], { type: "text/markdown;charset=utf-8" });
    var url = window.URL.createObjectURL(blob);
    var link = document.createElement("a");
    link.href = url;
    link.download = basename + "-" + date + ".md";
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.URL.revokeObjectURL(url);
  }

  function el(tag, props, children) {
    var node = document.createElement(tag);
    props = props || {};

    Object.keys(props).forEach(function (key) {
      if (key === "className") {
        node.className = props[key];
      } else if (key === "htmlFor") {
        node.htmlFor = props[key];
      } else if (key === "readOnly") {
        node.readOnly = props[key];
      } else if (key === "ariaLabel") {
        node.setAttribute("aria-label", props[key]);
      } else if (key === "onClick") {
        node.addEventListener("click", props[key]);
      } else if (key === "checked") {
        node.checked = props[key];
      } else if (key === "selected") {
        node.selected = props[key];
      } else if (key === "value") {
        node.value = props[key] || "";
      } else {
        node.setAttribute(key, props[key]);
      }
    });

    (children || []).forEach(function (child) {
      if (child === null || child === undefined) {
        return;
      }

      node.appendChild(typeof child === "string" ? document.createTextNode(child) : child);
    });

    return node;
  }

  clearDataButton.addEventListener("click", clearLocalData);
  window.addEventListener("hashchange", render);
  render();
})();
