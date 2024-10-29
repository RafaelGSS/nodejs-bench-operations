## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|4,068,660|2034332|
|Using delete property (proto: null)|16,978,415|8489211|
|Using delete property (cached proto: null)|4,038,433|2019409|
|Using undefined assignment|74,430,591|37219608|
|Using undefined assignment (proto: null)|18,594,854|9297912|
|Using undefined property (cached proto: null)|74,603,525|37301767|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:40:20 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using delete property","opsSec":4068660.777620664,"samples":2034332},{"name":"Using delete property (proto: null)","opsSec":16978415.95568392,"samples":8489211},{"name":"Using delete property (cached proto: null)","opsSec":4038433.371528829,"samples":2019409},{"name":"Using undefined assignment","opsSec":74430591.72733656,"samples":37219608},{"name":"Using undefined assignment (proto: null)","opsSec":18594854.575851545,"samples":9297912},{"name":"Using undefined property (cached proto: null)","opsSec":74603525.79361217,"samples":37301767}]}-->
