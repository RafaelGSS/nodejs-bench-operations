## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|140,595,610|70297844|
|~ (small)|97,605,146|48802584|
|Math.floor (long)|99,300,443|49665174|
|~ (long)|99,576,514|49806921|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:12:37 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Math.floor (small)","opsSec":140595610.67241412,"samples":70297844},{"name":"~ (small)","opsSec":97605146.52686776,"samples":48802584},{"name":"Math.floor (long)","opsSec":99300443.47284727,"samples":49665174},{"name":"~ (long)","opsSec":99576514.94676009,"samples":49806921}]}-->
