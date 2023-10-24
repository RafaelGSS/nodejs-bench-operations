## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|591,623,470|96|
|Using backtick (`)|591,580,615|99|
|Using array.join|8,579,156|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:51:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using + sign","opsSec":591623470.2276025,"samples":10},{"name":"Using backtick (`)","opsSec":591580615.2400622,"samples":6},{"name":"Using array.join","opsSec":8579156.01465481,"samples":7}]}-->
