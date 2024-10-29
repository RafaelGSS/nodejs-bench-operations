## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,946,863|1973434|
|Using delete property (proto: null)|16,215,056|8124300|
|Using delete property (cached proto: null)|3,873,358|1936681|
|Using undefined assignment|77,742,529|39235537|
|Using undefined assignment (proto: null)|18,277,869|9140756|
|Using undefined property (cached proto: null)|78,314,465|39163054|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:39:37 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.7.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using delete property","opsSec":3946863.5400441997,"samples":1973434},{"name":"Using delete property (proto: null)","opsSec":16215056.690546988,"samples":8124300},{"name":"Using delete property (cached proto: null)","opsSec":3873358.056921498,"samples":1936681},{"name":"Using undefined assignment","opsSec":77742529.47613186,"samples":39235537},{"name":"Using undefined assignment (proto: null)","opsSec":18277869.80543961,"samples":9140756},{"name":"Using undefined property (cached proto: null)","opsSec":78314465.30170146,"samples":39163054}]}-->
