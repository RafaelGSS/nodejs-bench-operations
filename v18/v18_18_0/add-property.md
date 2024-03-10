## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|819,107,138|96|
|Using dot notation|817,145,734|98|
|Using define property (writable)|4,276,698|94|
|Using define property initialized (writable)|5,950,513|94|
|Using define property (getter)|2,170,983|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:33:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"Directly in the object","opsSec":819107137.8911016,"samples":6},{"name":"Using dot notation","opsSec":817145733.8994607,"samples":7},{"name":"Using define property (writable)","opsSec":4276697.868511327,"samples":5},{"name":"Using define property initialized (writable)","opsSec":5950513.2145749135,"samples":5},{"name":"Using define property (getter)","opsSec":2170983.321024546,"samples":4}]}-->
