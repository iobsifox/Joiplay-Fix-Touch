# JoiPlay Touch Fix

## Summary

JoiPlay Touch Fix synchronizes touch input with mouse events in the JoiPlay emulator and prevents rapid-click input problems.

---

## Description

The patch is intended for RPG Maker games running through JoiPlay. It provides touch-to-mouse synchronization and a click cooldown to improve interaction reliability on Android devices.

Add the supplied plugin entry to the end of `www/js/plugins.js`, immediately before the final closing bracket. The patch file itself is distributed from the repository Releases page.

---

## Version

- Current public version: `1.8.1`
- Release channel: `Stable`
- Test status: Public stable patch

---

## Code composition

The distributed patch implementation is represented by the visual language bar below.

![Code language composition](language-composition.svg)

---

## Downloads

The current patch is available on the [Releases](https://github.com/iobsifox/Joiplay-Fix-Touch/releases) page.
