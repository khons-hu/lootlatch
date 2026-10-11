# UI direction

The reference is [khonsu’s portfolio](https://khns.dev/). These apps should look like work by the same person, with layouts shaped by their actual tasks. The shared look is the portfolio's moonlit style; each app states what it keeps below.

- Avenir Next / Avenir / Segoe UI for interface text and section headings. Georgia only for the opening title, with its accent line or word as the app defines it. SFMono / Consolas for code, numbers and data, not for labels. Labels are 11px uppercase sans with .08em tracking; the opening label carries a small half moon. System fonts only, no remote font requests.
- Light uses blue-gray paper: background #e7ebef, surface #f1f4f7, secondary surface #e0e6ec, ink #172430, muted #4c5966, lines #cbd3dc (panels) and #a6b1bd (controls), fields #fafbfc. Dark uses midnight: background #0b111a, surface #0e1721, secondary surface #142131, ink #e8edf2, muted #98a7b7, lines #1f2d3a and #33485b, fields #070c12. Accent #2b5a78 / #a9c7e8. These are the current portfolio tokens.
- Pill buttons with the main action filled in the accent, 8px fields and header controls, 16px panels, cards and dialogs lit along their top edge, 12px tiles, 2px focus rings in the accent. Primary actions and selected navigation keep readable contrast when hovered.
- Glass header: sticky from 761px, full width with its content in the page column, scrolling with the page on phones. Brand mark, name and a small uppercase label, a compact language picker, a circular theme control with an accessible label and a quiet motion pill. Skip links sit above the header. Dialog close control at the top right. Keep useful content density rather than forcing identical page templates.
- Short sentences and concrete action labels. Use humour sparingly, never in errors, financial claims or permission requests. No generic marketing slogans.
- Theme follows the OS until a visitor chooses light or dark. Apply the choice before first paint, keep it across visits and tabs, and update the browser color, native controls and localized directional theme label with the visible theme. Ordinary data saves preserve an unset preference.
- No added animation loops, tracking or UI framework. Short hover transitions only when reduced motion is not requested.
- Check light/dark, keyboard focus (nothing hidden under the header), dialogs and 390px and 320px phone layouts after visual changes.

Keep the item shelf, cost summary and observation log. Use green only when an item's price meets the user's target. No invented market charts or decorative trading terminals.
