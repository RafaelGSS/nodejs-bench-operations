## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,328,668|1664335|
|Using delete property (proto: null)|8,394,029|4197015|
|Using delete property (cached proto: null)|3,298,887|1649444|
|Using undefined assignment|16,178,851|8089426|
|Using undefined assignment (proto: null)|8,698,690|4349346|
|Using undefined property (cached proto: null)|16,225,943|8112972|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:25:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using delete property","opsSec":3328668.4954424356,"samples":1664335},{"name":"Using delete property (proto: null)","opsSec":8394029.19417387,"samples":4197015},{"name":"Using delete property (cached proto: null)","opsSec":3298887.30063832,"samples":1649444},{"name":"Using undefined assignment","opsSec":16178851.611706782,"samples":8089426},{"name":"Using undefined assignment (proto: null)","opsSec":8698690.173274318,"samples":4349346},{"name":"Using undefined property (cached proto: null)","opsSec":16225943.57812863,"samples":8112972}]}-->
