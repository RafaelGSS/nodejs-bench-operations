## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,616,135|1833282|
|Using delete property (proto: null)|15,925,212|7964523|
|Using delete property (cached proto: null)|3,911,134|1955594|
|Using undefined assignment|68,568,198|34288329|
|Using undefined assignment (proto: null)|17,360,295|8680368|
|Using undefined property (cached proto: null)|68,331,756|34167420|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:18:34 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using delete property","opsSec":3616135.2866123356,"samples":1833282},{"name":"Using delete property (proto: null)","opsSec":15925212.578379408,"samples":7964523},{"name":"Using delete property (cached proto: null)","opsSec":3911134.925899056,"samples":1955594},{"name":"Using undefined assignment","opsSec":68568198.60420181,"samples":34288329},{"name":"Using undefined assignment (proto: null)","opsSec":17360295.395702858,"samples":8680368},{"name":"Using undefined property (cached proto: null)","opsSec":68331756.0511859,"samples":34167420}]}-->
