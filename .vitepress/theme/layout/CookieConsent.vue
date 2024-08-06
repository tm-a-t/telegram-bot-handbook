<script setup lang="ts">
import 'vanilla-cookieconsent/dist/cookieconsent.css';
import * as CookieConsent from 'vanilla-cookieconsent';
import config from './cookie-consent-config';

CookieConsent.run(config);
</script>

<template>

</template>

<style>
#cc-main {
  --cc-bg: var(--vp-c-bg-elv);
  --cc-primary-color: var(--vp-c-text-1);
  --cc-secondary-color: var(--vp-c-text-1);

  --cc-btn-primary-bg: var(--vp-c-text-1);
  --cc-btn-primary-color: var(--vp-c-bg);
  --cc-btn-primary-border-color: transparent;
  --cc-btn-primary-hover-bg: var(--vp-c-brand-1);
  --cc-btn-primary-hover-color: var(--vp-c-bg-soft);
  --cc-btn-primary-hover-border-color: transparent;

  --cc-btn-secondary-bg: var(--vp-c-default-soft);
  --cc-btn-secondary-color: var(--cc-primary-color);
  --cc-btn-secondary-border-color: transparent;
  --cc-btn-secondary-hover-bg: var(--vp-c-brand-soft);
  --cc-btn-secondary-hover-color: var(--vp-c-brand-2);
  --cc-btn-secondary-hover-border-color: transparent;

  --cc-separator-border-color: var(--vp-c-default-soft);

  --cc-cookie-category-block-bg: var(--vp-c-default-soft);
  --cc-cookie-category-block-border: transparent;
  --cc-cookie-category-block-hover-bg: var(--vp-c-brand-soft);
  --cc-cookie-category-block-hover-border: transparent;
  --cc-cookie-category-expanded-block-bg: var(--vp-c-default-soft);
  --cc-cookie-category-expanded-block-hover-bg: var(--vp-c-default-soft);

  --cc-toggle-readonly-bg: var(--vp-c-bg-elv);
  --cc-toggle-on-knob-bg: var(--vp-c-brand-1);
  --cc-toggle-off-bg: var(--vp-c-bg);
  --cc-toggle-readonly-knob-bg: var(--vp-c-default-1);

  --cc-overlay-bg: var(--vp-c-default-soft);

  --cc-footer-border-color: var(--cc-separator-border-color);
  --cc-footer-bg: var(--vp-c-default-soft);

  --cc-btn-border-radius: 8px;
  --cc-modal-border-radius: var(--cc-btn-border-radius);

  --cc-font-family: var(--vp-font-family-base);
}

.dark #cc-main {
  --cc-footer-bg: transparent;
}
</style>
