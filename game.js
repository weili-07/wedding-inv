function setupMemoryGame() {
  const photos = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];
  const backIcons = ["🧶", "🐢"];
  const grid = document.getElementById("memory-grid");
  const reset = document.getElementById("memory-reset");
  const movesEl = document.getElementById("memory-moves");
  const rsvpSection = document.getElementById("rsvp");
  const skipButton = document.getElementById("skip-game");
  const gateStatus = document.getElementById("game-gate-status");

  if (!grid || !reset || !movesEl) return;

  let opened = [];
  let moves = 0;
  let unlocked = false;

  function gameText(key) {
    const lang = localStorage.getItem("inviteLang") || "en";
    const text = {
      en: {
        gateLocked: "Win the game to unlock RSVP.",
        gateSkipped: "Game skipped. RSVP is now unlocked.",
        gateWon: "Great job. RSVP is now unlocked.",
        doneTitle: "You did it!",
        doneBody: `You finished in ${moves} moves. See you at The Petals!`,
        openRsvpNow: "Open RSVP Now",
        close: "Close"
      },
      zh: {
        gateLocked: "完成游戏后可解锁回函。",
        gateSkipped: "已跳过游戏，回函已解锁。",
        gateWon: "太棒了，回函已解锁。",
        doneTitle: "完成啦！",
        doneBody: `你用了 ${moves} 步完成游戏，婚礼见！`,
        openRsvpNow: "立即回函",
        close: "关闭"
      }
    };
    return text[lang]?.[key] || text.en[key];
  }

  function showWinModal() {
    const existing = document.getElementById("win-modal");
    if (existing) existing.remove();

    const modal = document.createElement("div");
    modal.id = "win-modal";
    modal.className = "win-modal";
    modal.innerHTML = `
      <div class="win-modal-card" role="dialog" aria-modal="true" aria-labelledby="win-title">
        <h3 id="win-title">${gameText("doneTitle")}</h3>
        <p>${gameText("doneBody")}</p>
        <div class="cta-row">
          <button type="button" class="btn btn-primary" id="win-open-rsvp">${gameText("openRsvpNow")}</button>
          <button type="button" class="btn btn-outline" id="win-close">${gameText("close")}</button>
        </div>
      </div>
    `;

    document.body.appendChild(modal);

    const closeModal = () => modal.remove();
    modal.addEventListener("click", (event) => {
      if (event.target === modal) closeModal();
    });

    modal.querySelector("#win-close")?.addEventListener("click", closeModal);
    modal.querySelector("#win-open-rsvp")?.addEventListener("click", () => {
      const rsvpBtn = rsvpSection?.querySelector("a.btn.btn-primary");
      if (rsvpBtn instanceof HTMLAnchorElement) {
        window.open(rsvpBtn.href, "_blank", "noopener,noreferrer");
      }
      closeModal();
    });
  }

  function unlockRsvp(reason) {
    if (unlocked) return;
    unlocked = true;

    if (rsvpSection) {
      rsvpSection.classList.remove("hidden");
      rsvpSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    if (gateStatus) {
      gateStatus.textContent = reason === "skip"
        ? gameText("gateSkipped")
        : gameText("gateWon");
    }

    if (skipButton) skipButton.classList.add("hidden");
  }

  function shuffle(arr) {
    return [...arr]
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  }

  function buildBoard() {
    grid.innerHTML = "";
    moves = 0;
    opened = [];
    movesEl.textContent = "0";

    const cards = shuffle([...photos, ...photos]);
    cards.forEach((filename) => {
      const button = document.createElement("button");
      button.className = "memory-card";
      button.type = "button";
      button.dataset.symbol = filename;

      const back = document.createElement("span");
      back.className = "card-back";
      back.textContent = backIcons[Math.floor(Math.random() * backIcons.length)];

      const img = document.createElement("img");
      img.src = `assets/photos/${filename}`;
      img.alt = "Memory photo";
      img.className = "memory-image";

      button.appendChild(back);
      button.appendChild(img);
      grid.appendChild(button);
    });

    if (gateStatus && !unlocked) {
      gateStatus.textContent = gameText("gateLocked");
    }
  }

  grid.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;
    const card = target.closest(".memory-card");
    if (!(card instanceof HTMLButtonElement)) return;
    if (card.classList.contains("open") || card.classList.contains("matched")) return;
    if (opened.length === 2) return;

    card.classList.add("open");
    opened.push(card);

    if (opened.length === 2) {
      moves += 1;
      movesEl.textContent = String(moves);

      const [a, b] = opened;
      if (a.dataset.symbol === b.dataset.symbol) {
        a.classList.remove("open");
        b.classList.remove("open");
        a.classList.add("matched");
        b.classList.add("matched");
        opened = [];

        const done = [...grid.querySelectorAll(".memory-card")].every((el) => el.classList.contains("matched"));
        if (done) {
          setTimeout(() => {
            unlockRsvp("win");
            showWinModal();
          }, 100);
        }
      } else {
        setTimeout(() => {
          a.classList.remove("open");
          b.classList.remove("open");
          opened = [];
        }, 550);
      }
    }
  });

  reset.addEventListener("click", buildBoard);

  if (skipButton) {
    skipButton.addEventListener("click", () => unlockRsvp("skip"));
    setTimeout(() => {
      if (!unlocked) {
        skipButton.classList.remove("hidden");
      }
    }, 6000);
  }

  window.addEventListener("inviteLanguageChanged", () => {
    if (!unlocked && gateStatus) {
      gateStatus.textContent = gameText("gateLocked");
    }
  });

  buildBoard();
}

// Don't auto-init; router will call setupMemoryGame when on play page
// setupMemoryGame();
