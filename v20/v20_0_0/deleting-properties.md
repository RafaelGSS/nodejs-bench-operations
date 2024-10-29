## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,695,299|1847708|
|Using delete property (proto: null)|15,262,244|7631124|
|Using delete property (cached proto: null)|3,638,668|1819668|
|Using undefined assignment|80,593,705|40301771|
|Using undefined assignment (proto: null)|17,063,237|8532704|
|Using undefined property (cached proto: null)|79,980,725|40024319|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:37:50 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using delete property","opsSec":3695299.856725503,"samples":1847708},{"name":"Using delete property (proto: null)","opsSec":15262244.306536878,"samples":7631124},{"name":"Using delete property (cached proto: null)","opsSec":3638668.1879501287,"samples":1819668},{"name":"Using undefined assignment","opsSec":80593705.6994068,"samples":40301771},{"name":"Using undefined assignment (proto: null)","opsSec":17063237.760915663,"samples":8532704},{"name":"Using undefined property (cached proto: null)","opsSec":79980725.40628882,"samples":40024319}]}-->
