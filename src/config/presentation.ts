// Define which slides have special properties
export const PRESENTATION_CONFIG = {
  // The last slide number - update this when you add/remove slides
  lastSlide: 22,

  // Optional: define first slide if you want to start from something other than 1
  firstSlide: 1,

  // FAQ slides are public so PDF readers can open them without signing in.
  // The full PDF export includes every FAQ slide. The web export ends at the
  // closing slide, which links to the FAQ on the website.
  faqSlides: [15, 16, 17, 18, 19, 20, 21, 22],

  // Pitch slides that are also public, so the FAQ and research pages can link to them.
  publicSlides: [4],
};