# Custom Color Script for Microsoft Dynamics 365 (CRM) Business Process Control

In the Fall'16 release of Dynamics 365 (8.2), Microsoft disabled support for applying a theme color to the Business Process control. 
This script can be added to an organization and executed on every form load (on load web resource) to apply the custom colors defined to the various stages of the control's chevrons.

THE CODE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND. The code is *NOT* endorsed nor supported by Microsoft. See details of the MIT License (below) prior to using the code.

Although the MIT License does not mandate it, I welcome pull requests with enhancements and bug fixes.

## Instructions

(TO-DO: need to expand this section)

## Compatibility

| Version | Status |
|---------|--------|
| 8.2 RTM | Tested; mostly works (see to-do list) |
| 8.1 or earlier  | Not tested; should *not* work |

Dynamics 365 8.2 introduces a new version of the Business Process control with a different DOM structure from that of previous versions (8.1 and earlier), making this script incompatible with them.

## To-do List

* Implement abandoned stage colors on web client
* Implement gradients on web client
* Use colors from applied theme
* Calculate hover and selected colors with luminance values

## How the Script works

(TO-DO: need to expand this section)

## MIT License

MIT License

Copyright (c) 2017 Carlos Mendonça

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
