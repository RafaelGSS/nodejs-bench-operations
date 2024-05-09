## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|20,711,524|10355763|
|Using dot notation|21,074,212|10537107|
|Using define property (writable)|3,655,284|1827643|
|Using define property initialized (writable)|4,296,137|2148069|
|Using define property (getter)|2,205,042|1102522|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 20:16:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":20711524.735868853,"samples":10355763},{"name":"Using dot notation","opsSec":21074212.65343833,"samples":10537107},{"name":"Using define property (writable)","opsSec":3655284.138502379,"samples":1827643},{"name":"Using define property initialized (writable)","opsSec":4296137.518588869,"samples":2148069},{"name":"Using define property (getter)","opsSec":2205042.3166347747,"samples":1102522}]}-->
