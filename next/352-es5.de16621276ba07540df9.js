(window.webpackJsonp=window.webpackJsonp||[]).push([[352],{FDfy:function(n,o,i){"use strict";i.r(o),o.default=".tag {\n    margin: 0.25rem;\n}\n\n.light-mode {\n    display: inline-block;\n    background-color: #454e58;\n}\n\n.dark-mode {\n    display: inline-block;\n    margin-left: 0.25rem;\n    background-color: #e5e7ea;\n}\n\n@iterations: 20;\n\n.loop (@i) when (@i > 0) {\n    .support-@{i} {\n        background-color: ~'var(--tui-support-@{i}, var(--tui-support-0@{i}))';\n    }\n    .loop(@i - 1);\n}\n.loop (@iterations);\n"}}]);