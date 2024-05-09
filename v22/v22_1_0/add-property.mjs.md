## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|16,161,610|8080806|
|Using dot notation|16,169,648|8084825|
|Using define property (writable)|3,673,926|1836964|
|Using define property initialized (writable)|4,483,139|2241570|
|Using define property (getter)|2,235,749|1117875|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 20:15:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":16161610.157578817,"samples":8080806},{"name":"Using dot notation","opsSec":16169648.124326684,"samples":8084825},{"name":"Using define property (writable)","opsSec":3673926.501040421,"samples":1836964},{"name":"Using define property initialized (writable)","opsSec":4483139.237848033,"samples":2241570},{"name":"Using define property (getter)","opsSec":2235749.329273616,"samples":1117875}]}-->
