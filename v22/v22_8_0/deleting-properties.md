## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|4,018,879|2009753|
|Using delete property (proto: null)|15,586,927|7793829|
|Using delete property (cached proto: null)|3,756,484|1878339|
|Using undefined assignment|69,075,363|34538823|
|Using undefined assignment (proto: null)|17,260,307|8631988|
|Using undefined property (cached proto: null)|69,193,725|34599363|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 19:57:37 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Using delete property","opsSec":4018879.874591058,"samples":2009753},{"name":"Using delete property (proto: null)","opsSec":15586927.845951982,"samples":7793829},{"name":"Using delete property (cached proto: null)","opsSec":3756484.9918011217,"samples":1878339},{"name":"Using undefined assignment","opsSec":69075363.47368938,"samples":34538823},{"name":"Using undefined assignment (proto: null)","opsSec":17260307.804864693,"samples":8631988},{"name":"Using undefined property (cached proto: null)","opsSec":69193725.36946756,"samples":34599363}]}-->
