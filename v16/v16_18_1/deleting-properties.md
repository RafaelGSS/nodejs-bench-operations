## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,424,474|92|
|Using delete property (proto: null)|15,809,465|99|
|Using delete property (cached proto: null)|2,423,522|96|
|Using undefined assignment|590,770,983|97|
|Using undefined assignment (proto: null)|17,713,702|93|
|Using undefined property (cached proto: null)|597,255,686|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:46:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using delete property","opsSec":2424473.873217827,"samples":5},{"name":"Using delete property (proto: null)","opsSec":15809465.153449448,"samples":5},{"name":"Using delete property (cached proto: null)","opsSec":2423522.1193872965,"samples":5},{"name":"Using undefined assignment","opsSec":590770983.3516572,"samples":7},{"name":"Using undefined assignment (proto: null)","opsSec":17713701.817840464,"samples":6},{"name":"Using undefined property (cached proto: null)","opsSec":597255686.0265634,"samples":10}]}-->
