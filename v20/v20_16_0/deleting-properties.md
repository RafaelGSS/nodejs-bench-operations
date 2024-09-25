## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,758,946|1379474|
|Using delete property (proto: null)|8,091,845|4045923|
|Using delete property (cached proto: null)|2,783,988|1391995|
|Using undefined assignment|16,941,417|8470709|
|Using undefined assignment (proto: null)|8,312,680|4156341|
|Using undefined property (cached proto: null)|17,113,779|8556890|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:51:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using delete property","opsSec":2758946.9957420505,"samples":1379474},{"name":"Using delete property (proto: null)","opsSec":8091845.935281313,"samples":4045923},{"name":"Using delete property (cached proto: null)","opsSec":2783988.2126793475,"samples":1391995},{"name":"Using undefined assignment","opsSec":16941417.898372784,"samples":8470709},{"name":"Using undefined assignment (proto: null)","opsSec":8312680.852805562,"samples":4156341},{"name":"Using undefined property (cached proto: null)","opsSec":17113779.144335035,"samples":8556890}]}-->
