<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Application architecture
- Keep typed market contracts and the replaceable mock adapter in `src/lib`, presentation state in `ForecastProvider`, and visual chart/overlay components separate so a future Electron host can reuse them.
- Use TanStack content routes inside the shared macOS workspace; keep all market and configuration state frontend-only for this visual MVP, without claiming native capabilities.
- Use Recharts for the market visualization with a custom candle shape; all visual colors reference the global semantic tokens.
