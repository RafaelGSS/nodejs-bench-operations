## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|914,953,648|97|
|Using dot notation|914,610,585|97|
|Using define property (writable)|4,917,765|93|
|Using define property initialized (writable)|6,782,845|94|
|Using define property (getter)|2,663,453|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:16:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":914953648.0933666,"samples":7},{"name":"Using dot notation","opsSec":914610584.6567296,"samples":6},{"name":"Using define property (writable)","opsSec":4917765.331750559,"samples":4},{"name":"Using define property initialized (writable)","opsSec":6782845.422155006,"samples":4},{"name":"Using define property (getter)","opsSec":2663452.987433868,"samples":4}]}-->
