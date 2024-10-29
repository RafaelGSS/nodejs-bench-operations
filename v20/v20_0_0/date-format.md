## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|12,373|6187|
|Intl.DateTimeFormat().format(new Date())|12,395|6198|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|13,131|6572|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|12,772|6387|
|Reusing Intl.DateTimeFormat()|615,579|307791|
|Date.toLocaleDateString()|603,033|301801|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|12,845|6424|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:26:13 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":12373.926919587613,"samples":6187},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":12395.350310108846,"samples":6198},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":13131.596970292812,"samples":6572},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":12772.438824802446,"samples":6387},{"name":"Reusing Intl.DateTimeFormat()","opsSec":615579.6792646092,"samples":307791},{"name":"Date.toLocaleDateString()","opsSec":603033.2829290694,"samples":301801},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":12845.884668171693,"samples":6424}]}-->
