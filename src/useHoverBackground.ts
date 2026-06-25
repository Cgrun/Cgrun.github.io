import { useEffect, useRef } from "react";

const BACKGROUND_ROTATION_MS = 6000;
const BACKGROUND_CROSSFADE_MS = 2000;
const BACKGROUND_CLEAR_DELAY_MS = 70;
const BACKGROUND_CLEANUP_MS = 1600;

let nextOwnerId = 1;
let activeOwnerId: number | null = null;
let currentBackground = "";
let transitionId = 0;
let rotationIntervalId: number | undefined;
let crossfadeTimeoutId: number | undefined;
let clearDelayTimeoutId: number | undefined;
let cleanupTimeoutId: number | undefined;

function root() {
  return document.documentElement;
}

function clearScheduledWork() {
  window.clearInterval(rotationIntervalId);
  window.clearTimeout(crossfadeTimeoutId);
  window.clearTimeout(clearDelayTimeoutId);
  window.clearTimeout(cleanupTimeoutId);
  rotationIntervalId = undefined;
  crossfadeTimeoutId = undefined;
  clearDelayTimeoutId = undefined;
  cleanupTimeoutId = undefined;
}

function clearCrossfadeState() {
  root().classList.remove("card-background-crossfade");
  root().classList.remove("card-background-commit");
  root().style.removeProperty("--active-card-bg-next");
}

function commitBackground(nextBackground: string) {
  root().classList.add("card-background-commit");
  root().style.setProperty("--active-card-bg", nextBackground);
  root().classList.remove("card-background-crossfade");
  root().style.removeProperty("--active-card-bg-next");
  currentBackground = nextBackground;

  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => {
      root().classList.remove("card-background-commit");
    });
  });
}

function showBackground(image: string, ownerId: number) {
  const nextBackground = `url("${image}")`;
  const rootElement = root();

  window.clearTimeout(crossfadeTimeoutId);
  rootElement.classList.remove("card-background-commit");

  if (!currentBackground || !rootElement.classList.contains("card-background-active")) {
    clearCrossfadeState();
    currentBackground = nextBackground;
    rootElement.style.setProperty("--active-card-bg", nextBackground);
    rootElement.classList.add("card-background-active");
    return;
  }

  if (currentBackground === nextBackground) {
    clearCrossfadeState();
    rootElement.classList.add("card-background-active");
    return;
  }

  const thisTransitionId = ++transitionId;
  rootElement.style.setProperty("--active-card-bg-next", nextBackground);
  rootElement.classList.add("card-background-active");
  rootElement.classList.add("card-background-crossfade");

  crossfadeTimeoutId = window.setTimeout(() => {
    if (activeOwnerId !== ownerId || transitionId !== thisTransitionId) {
      return;
    }

    commitBackground(nextBackground);
  }, BACKGROUND_CROSSFADE_MS);
}

function activateBackgroundForOwner(ownerId: number, images: string[]) {
  if (images.length === 0) {
    return;
  }

  clearScheduledWork();
  transitionId += 1;
  activeOwnerId = ownerId;

  showBackground(images[0], ownerId);

  if (images.length <= 1) {
    return;
  }

  let imageIndex = 0;
  rotationIntervalId = window.setInterval(() => {
    if (activeOwnerId !== ownerId) {
      window.clearInterval(rotationIntervalId);
      rotationIntervalId = undefined;
      return;
    }

    imageIndex = (imageIndex + 1) % images.length;
    showBackground(images[imageIndex], ownerId);
  }, BACKGROUND_ROTATION_MS);
}

function clearBackgroundForOwner(ownerId: number) {
  if (activeOwnerId !== ownerId) {
    return;
  }

  activeOwnerId = null;
  transitionId += 1;
  window.clearInterval(rotationIntervalId);
  window.clearTimeout(crossfadeTimeoutId);
  window.clearTimeout(clearDelayTimeoutId);
  window.clearTimeout(cleanupTimeoutId);
  rotationIntervalId = undefined;
  crossfadeTimeoutId = undefined;

  clearDelayTimeoutId = window.setTimeout(() => {
    if (activeOwnerId !== null) {
      return;
    }

    clearCrossfadeState();
    root().classList.remove("card-background-active");

    cleanupTimeoutId = window.setTimeout(() => {
      if (activeOwnerId !== null) {
        return;
      }

      currentBackground = "";
      root().style.removeProperty("--active-card-bg");
    }, BACKGROUND_CLEANUP_MS);
  }, BACKGROUND_CLEAR_DELAY_MS);
}

export function useHoverBackground(images: string[]) {
  const ownerIdRef = useRef<number | null>(null);

  if (ownerIdRef.current === null) {
    ownerIdRef.current = nextOwnerId;
    nextOwnerId += 1;
  }

  useEffect(() => {
    return () => {
      if (ownerIdRef.current !== null) {
        clearBackgroundForOwner(ownerIdRef.current);
      }
    };
  }, []);

  const activateBackground = () => {
    if (ownerIdRef.current === null) {
      return;
    }

    activateBackgroundForOwner(ownerIdRef.current, images);
  };

  const clearBackground = () => {
    if (ownerIdRef.current === null) {
      return;
    }

    clearBackgroundForOwner(ownerIdRef.current);
  };

  return {
    activateBackground,
    clearBackground,
    hasBackground: images.length > 0,
  };
}
