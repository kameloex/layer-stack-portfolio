"use client";

import { useState, useEffect, useCallback } from "react";

export function checkWebGLSupport(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    const gl =
      canvas.getContext("webgl2") ||
      canvas.getContext("webgl") ||
      canvas.getContext("experimental-webgl");
    return !!gl;
  } catch {
    return false;
  }
}

export function checkReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function checkSaveData(): boolean {
  if (typeof window === "undefined") return false;
  const nav = navigator as unknown as { connection?: { saveData?: boolean } };
  return nav.connection?.saveData === true;
}

export function checkIsWeakDevice(): boolean {
  if (typeof window === "undefined") return false;
  return (
    typeof navigator.hardwareConcurrency === "number" &&
    navigator.hardwareConcurrency <= 2
  );
}

export function useCapabilities() {
  const [canRender3D, setCanRender3D] = useState(false);
  const [isSimpleView, setIsSimpleView] = useState(false);
  const [reason, setReason] = useState<string | null>(null);

  const evaluate = useCallback(() => {
    if (typeof window === "undefined") return;

    // Check simple view preference
    const storedSimpleView = localStorage.getItem("ak_simple_view") === "true";
    setIsSimpleView(storedSimpleView);

    if (storedSimpleView) {
      setCanRender3D(false);
      setReason("User selected Simple View");
      return;
    }

    if (!checkWebGLSupport()) {
      setCanRender3D(false);
      setReason("WebGL is not supported or disabled");
      return;
    }

    if (checkReducedMotion()) {
      setCanRender3D(false);
      setReason("Prefers reduced motion");
      return;
    }

    if (checkSaveData()) {
      setCanRender3D(false);
      setReason("Data-saver mode enabled");
      return;
    }

    if (checkIsWeakDevice()) {
      setCanRender3D(false);
      setReason("Low-power device detected");
      return;
    }

    setCanRender3D(true);
    setReason(null);
  }, []);

  useEffect(() => {
    evaluate();

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleMotionChange = () => evaluate();
    motionQuery.addEventListener("change", handleMotionChange);

    const handleStorage = (e: StorageEvent) => {
      if (e.key === "ak_simple_view") evaluate();
    };
    window.addEventListener("storage", handleStorage);

    // Custom event to sync across components on same page
    const handleCustomToggle = () => evaluate();
    window.addEventListener("ak_simple_view_changed", handleCustomToggle);

    return () => {
      motionQuery.removeEventListener("change", handleMotionChange);
      window.removeEventListener("storage", handleStorage);
      window.removeEventListener("ak_simple_view_changed", handleCustomToggle);
    };
  }, [evaluate]);

  const toggleSimpleView = useCallback(() => {
    const next = !isSimpleView;
    setIsSimpleView(next);
    localStorage.setItem("ak_simple_view", String(next));
    if (next) {
      document.documentElement.classList.add("simple-view");
    } else {
      document.documentElement.classList.remove("simple-view");
    }
    window.dispatchEvent(new Event("ak_simple_view_changed"));
    evaluate();
  }, [isSimpleView, evaluate]);

  return { canRender3D, isSimpleView, toggleSimpleView, reason };
}
