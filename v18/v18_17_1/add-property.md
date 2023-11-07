## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|847,379,920|99|
|Using dot notation|847,423,699|99|
|Using define property (writable)|4,392,885|100|
|Using define property initialized (writable)|5,993,589|98|
|Using define property (getter)|2,259,359|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 17:53:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Directly in the object","opsSec":847379919.9204516,"samples":6},{"name":"Using dot notation","opsSec":847423699.3247547,"samples":7},{"name":"Using define property (writable)","opsSec":4392884.794741179,"samples":7},{"name":"Using define property initialized (writable)","opsSec":5993589.393736493,"samples":5},{"name":"Using define property (getter)","opsSec":2259359.415473058,"samples":4}]}-->
