### 1.0.1 [Nov 2026]

- **[update]** - published from GitHub Actions with npm provenance
- **[fix]** - repository URL in package.json

### 1.0.0 [Nov 2026]

- **[fix]** - format('%.0f', 1.6) → "1.600000" now "2"
- **[change]** - use rollup over closure-compiler for building
- **[change]** - support commonjs/esmodules
- **[change]** - use native node test-runner
- **[change]** - explicit node>=12 (2019) requirement
- **[change]** - `format.js` and `format-min.js` are gone, and deep imports are no longer exported: use `require('format')` or `import format from 'format'`, or `builds/format.min.js` in a browser
- **[new]** - typescript support
- **[update]** - project links, readme and licence

### 0.2.2 [Jan 2016]

- **[change]** - add JSON support (%j)

### 0.2.1 [Sep 2013]

- **[update]** - fix license URL
